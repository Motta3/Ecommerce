import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindByIdClientService {
  public async execute(id: number): Promise<Client> {
    const clientRepository = new ClientRepository();

    const cliente = await clientRepository.findById(id);

    return cliente;
  }
}