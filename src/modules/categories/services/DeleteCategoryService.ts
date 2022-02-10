import { DeleteResult } from "typeorm";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class DeleteCategoryService {
  public async execute(id: number): Promise<DeleteResult> {
    const categoryRepository = new CategoryRepository();

    const deleteResult = await categoryRepository.delete(id);

    return deleteResult;
  }
}