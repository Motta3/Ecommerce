import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";

export default interface IOrderRepository {
  create(data: IOrderDTO): Promise<Order>;

  update(data: IOrderDTO): Promise<Order>;

  list(): Promise<Order[]>;

  findById(id: number): Promise<Order>;

  findByIdSimple(id: number): Promise<Order>;

  findByClientId(id: number): Promise<Order[]>;
}