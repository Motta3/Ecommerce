import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class FindByClientIdOrderService {
  public async execute(id: number): Promise<Order[]> {
    const orderRepository = new OrderRepository();

    const pedidos = await orderRepository.findByClientId(id);

    return pedidos;
  }
}