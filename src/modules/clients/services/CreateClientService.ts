import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class CreateClienteService {
  public async execute(data: IClientDTO): Promise<Client> {
    const clientRepository = new ClientRepository();

    const clientes = await clientRepository.list();

    clientes.forEach((cliente) => {
      if (data.cpf === cliente.cpf) {
        throw new AppError("CPF já cadastrado");
      }
    });

    const client = await clientRepository.create(data);

    return client;
  }
}