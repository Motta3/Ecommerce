import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class FindByIdCategoryService {
  public async execute(id: number): Promise<Category> {
    const categoryRepository = new CategoryRepository();

    const categoria = await categoryRepository.findById(id);

    return categoria;
  }
}
