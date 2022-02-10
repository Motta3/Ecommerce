import { Request, Response } from "express";
import CreateProductService from "../../../services/CreateProductSevice";
import DeleteProductService from "../../../services/DeleteProductService";
import FindAllProductService from "../../../services/FindAllProdutcService";
import FindByIdProductService from "../../../services/FindProductByIdSevice";
import UpdateProductService from "../../../services/UpdateProductService";

class ProductsController {
  async create(request: Request, response: Response) {
    const data = request.body;

    const produto = await new CreateProductService().execute(data);

    return response.json(produto);
  }

  async update(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;

    const data_to_update = {
      ...data, 
      id: Number(id),
    };

    const produto = await new UpdateProductService().execute(data_to_update);

    return response.json(produto);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const produto = await new FindByIdProductService().execute(Number(id));

    return response.json(produto);
  }

  async list(request: Request, response: Response) {
    const produtos = await new FindAllProductService().execute();

    return response.json(produtos);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteResult = await new DeleteProductService().execute(Number(id));

    return response.json(deleteResult);
  }
}

export default new ProductsController();