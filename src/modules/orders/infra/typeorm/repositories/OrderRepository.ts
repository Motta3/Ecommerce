import { getRepository, Repository } from "typeorm";
import AppError from "../../../../../shared/errors/AppErrors";
import IOrderDTO from "../../../dtos/IOrderDTO";
import IOrderRepository from "../../../repositories/IOrderRepository";
import Order from "../entities/Order";

export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  async create(data: IOrderDTO): Promise<Order> {
    const pedido = this.ormRepository.create(data);

    return await this.ormRepository.save(pedido);
  }

  async update(data: IOrderDTO): Promise<Order> {
    const pedido = await this.ormRepository.findOne(data.id);

    if (!pedido) {
      throw new AppError("Pedido não Existe!");
    }
    console.log(pedido);

    return await this.ormRepository.save(data);
  }

  async list(): Promise<Order[]> {
    return await this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.produtos_pedidos", "pp")
      .leftJoinAndSelect("pp.produto", "p")
      .getMany();
  }

  async findById(id: number): Promise<Order> {
    const pedido = await this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.produtos_pedidos", "pp")
      .leftJoinAndSelect("pp.produto", "p")
      .where("order.id = :id", { id })
      .getOne();

    if (!pedido) {
      throw new AppError("Pedido não Existe!");
    }

    return pedido;
  }

  async findByClientId(id: number): Promise<Order[]> {
    const pedidos = await this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.produtos_pedidos", "pp")
      .leftJoinAndSelect("pp.produto", "p")
      .where("order.cliente_id = :id", { id })
      .getMany();

    if (!pedidos) {
      throw new AppError("Cliente não possui pedidos!");
    }

    return pedidos;
  }

  async findByIdSimple(id: number): Promise<Order> {
    const pedido = await this.ormRepository.findOne(id);

    if (!pedido) {
      throw new AppError("Pedido não Existe!");
    }

    return pedido;
  }
}
