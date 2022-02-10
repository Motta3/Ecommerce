import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class FindByIdOrderService {
  public async execute(id: number): Promise<Order> {
    const orderRepository = new OrderRepository();

    const pedido = await orderRepository.findById(id);

    return pedido;
  }
}
