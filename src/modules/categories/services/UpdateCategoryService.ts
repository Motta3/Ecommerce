import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class UpdateCategoryService {
  public async execute(data: ICategoryDTO): Promise<Category> {
    const categoryRepository = new CategoryRepository();

    const categoria = await categoryRepository.update(data);

    return categoria;
  }
}