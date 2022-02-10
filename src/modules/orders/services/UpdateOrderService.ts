import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class UpdateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    const orderRepository = new OrderRepository();

    const pedido = await orderRepository.findByIdSimple(Number(data.id));
    pedido.status = data.status;

    return await orderRepository.update(pedido);
  }
}