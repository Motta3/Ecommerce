import { Request, Response } from "express";
import CreateOrderService from "../../../services/CreateOrderSevice";
import FindAllOrderService from "../../../services/FindAllOrderService";
import FindByClientIdOrderService from "../../../services/FindByClientIdOrderService";
import FindByIdOrderService from "../../../services/FindOrderByIdSevice";
import UpdateOrderService from "../../../services/UpdateOrderService";

class OrdersController {
  async create(request: Request, response: Response) {
    const data = request.body;

    const createOrderService = new CreateOrderService();

    const pedido = await createOrderService.execute(data);

    return response.json(pedido);
  }

  async update(request: Request, response: Response) {
    const data = request.body;

    const { id } = request.params;

    const data_to_update = {
      ...data, // rest / spread operator
      id: Number(id),
    };

    const updateClientService = new UpdateOrderService();

    const pedido = await updateClientService.execute(data_to_update);

    return response.json(pedido);
  }

  async list(request: Request, response: Response) {
    const pedidos = await new FindAllOrderService().execute();

    return response.json(pedidos);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const pedido = await new FindByIdOrderService().execute(Number(id));

    return response.json(pedido);
  }

  async findByClientId(request: Request, response: Response) {
    const { id } = request.params;

    const pedidos = await new FindByClientIdOrderService().execute(Number(id));

    return response.json(pedidos);
  }
}

export default new OrdersController();