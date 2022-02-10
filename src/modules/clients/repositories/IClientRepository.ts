import { DeleteResult } from "typeorm";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";

export default interface IClientRepository {
  create(data: IClientDTO): Promise<Client>;

  list(): Promise<Client[]>;

  findById(id: number): Promise<Client>;

  update(data: IClientDTO): Promise<Client>;

  delete(id: number): Promise<DeleteResult>;
}