import { Request, Response } from "express";
import CreateClienteService from "../../../services/CreateClientService";
import UpdateClientService from "../../../services/UpdateClientService";
import FindAllClientsService from "../../../services/FindAllClientsService";
import FindByIdClientService from "../../../services/FindClientByIdService";
import DeleteClientService from "../../../services/DeleteClientService";

class ClientsController {
  async create(request: Request, response: Response) {
    const data = request.body;

    const createClientService = new CreateClienteService();

    const client = await createClientService.execute(data);

    return response.json(client);
  }

  async list(request: Request, response: Response) {
    const findAllClientsService = new FindAllClientsService();

    const clients = await findAllClientsService.execute();

    return response.json(clients);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdClientService = new FindByIdClientService();

    const client = await findByIdClientService.execute(Number(id));

    return response.json(client);
  }

  async edit(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;

    const updateClientService = new UpdateClientService();

    const data_to_update = {
      ...data, // rest / spread operator
      id: Number(id),
    };

    const client = await updateClientService.execute(data_to_update);

    return response.json(client);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteClientService = new DeleteClientService();

    const result = await deleteClientService.execute(Number(id));

    return response.json(result);
  }
}

export default new ClientsController();