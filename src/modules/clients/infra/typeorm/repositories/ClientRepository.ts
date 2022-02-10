import IClientDTO from "../../../dtos/IClientDTO";
import IClientRepository from "../../../repositories/IClientRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Client from "../entities/Client";
import AppError from "../../../../../shared/errors/AppErrors";

export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async create(data: IClientDTO): Promise<Client> {
    const cliente = this.ormRepository.create(data);

    return await this.ormRepository.save(cliente);
  }

  async list(): Promise<Client[]> {
    return await this.ormRepository.find();
  }

  async findById(id: number): Promise<Client> {
    const cliente = await this.ormRepository.findOne(id);

    if (!cliente) {
      throw new AppError("Cliente não Existe!");
    }

    return cliente;
  }

  async update(data: IClientDTO): Promise<Client> {
    const cliente = await this.ormRepository.findOne(data.id);

    if (!cliente) {
      throw new AppError("Cliente não Existe!");
    }

    return this.ormRepository.save(data);
  }

  async delete(id: number): Promise<DeleteResult> {
    const cliente = await this.ormRepository.findOne(id);

    if (!cliente) {
      throw new AppError("Cliente não Existe!");
    }

    return this.ormRepository.delete(id);
  }
}