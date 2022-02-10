import { Request, Response } from "express";
import CreateCategoryService from "../../../services/CreateCategoryService";
import DeleteCategoryService from "../../../services/DeleteCategoryService";
import FindAllCategoryService from "../../../services/FindAllCategoriesService";
import FindByIdCategoryService from "../../../services/FindCategoryByIdService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategoryController {
  async create(request: Request, response: Response) {
    const data = request.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute(data);

    return response.json(category);
  }

  async list(request: Request, response: Response) {
    const findAllCategoryService = new FindAllCategoryService();

    const categories = await findAllCategoryService.execute();

    return response.json(categories);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdCategoryService = new FindByIdCategoryService();

    const category = await findByIdCategoryService.execute(Number(id));

    return response.json(category);
  }

  async update(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;

    const updateCategoryService = new UpdateCategoryService();

    const data_to_update = {
      ...data, // rest / spread operator
      id: Number(id),
    };

    const category = await updateCategoryService.execute(data_to_update);

    return response.json(category);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCategoryService = new DeleteCategoryService();

    const deleteResult = await deleteCategoryService.execute(Number(id));

    return response.json(deleteResult);
  }
}

export default new CategoryController();
