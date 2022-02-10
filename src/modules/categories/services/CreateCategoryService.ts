import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class CreateCategoryService {
  public async execute(data: ICategoryDTO): Promise<Category> {
    const categoriesRepository = new CategoryRepository();

    const categories = await categoriesRepository.create(data);

    return categories;
  }
}