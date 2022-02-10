import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class FindAllOrderService {
  public async execute(): Promise<Order[]> {
    const orderRepository = new OrderRepository();

    const pedidos = await orderRepository.list();

    return pedidos;
  }
}