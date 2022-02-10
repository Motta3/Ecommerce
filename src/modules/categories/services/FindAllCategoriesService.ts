import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class FindAllCategoryService {
  public async execute(): Promise<Category[]> {
    const categoryRepository = new CategoryRepository();

    const categorias = await categoryRepository.list();

    return categorias;
  }
}