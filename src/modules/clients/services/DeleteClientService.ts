import { DeleteResult } from "typeorm";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class DeleteClientService {
  public async execute(id: number): Promise<DeleteResult> {
    const clientRepository = new ClientRepository();

    const deleteResult = clientRepository.delete(id);

    return deleteResult;
  }
}
