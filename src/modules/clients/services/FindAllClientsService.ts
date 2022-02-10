import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindAllClientsService {
  public async execute(): Promise<Client[]> {
    const clientRepository = new ClientRepository();

    const clientes = await clientRepository.list();

    return clientes;
  }
}