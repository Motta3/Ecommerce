import AppError from "../../../shared/errors/AppErrors";
import FindByIdClientService from "../../clients/services/FindClientByIdService";
import FindByIdProductService from "../../products/services/FindProductByIdSevice";
import UpdateProductService from "../../products/services/UpdateProductService";
import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class CreateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    const orderRepository = new OrderRepository();
    const findByIdClientService = new FindByIdClientService();
    const findByIdProductService = new FindByIdProductService();
    const updateProductService = new UpdateProductService();

    console.log("tamanho produtos:  " + data.produtos_pedidos.length);
    if (data.produtos_pedidos.length === 0) {
      throw new AppError("Não há produtos no pedido!");
    }

    const cliente = await findByIdClientService.execute(
      Number(data.cliente_id)
    );
    if (!cliente) {
      throw new AppError("Cliente não existe!");
    }

    data.valor = 0;
    for (let i = 0; i < data.produtos_pedidos.length; i++) {
      let produtoBanco = await findByIdProductService.execute(
        data.produtos_pedidos[i].produto_id
      );

      if (produtoBanco.quantidade < data.produtos_pedidos[i].quantidade) {
        throw new AppError(
          "Produto de id " +
            data.produtos_pedidos[i].produto_id +
            " não tem suficiente em estoque!"
        );
      }

      data.valor += data.produtos_pedidos[i].quantidade * produtoBanco.preco;
    }

    if (data.desconto === null || data.desconto === undefined) {
      data.desconto = 0;
    }
    if (data.valor < data.desconto) {
      throw new AppError("Desconto maior do que o valor da compra");
    }

    data.status = "ATIVO";

    const pedido = await orderRepository.create(data); //cria o pedido

    data.produtos_pedidos.forEach(async (produto) => {
      let produtoBanco = await findByIdProductService.execute(
        produto.produto_id
      );

      produtoBanco.quantidade -= produto.quantidade;

      updateProductService.execute(produtoBanco);
    });

    return pedido;
  }
}