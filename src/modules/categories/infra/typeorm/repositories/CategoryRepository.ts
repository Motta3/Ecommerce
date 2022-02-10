import { DeleteResult, getRepository, Repository } from "typeorm";
import AppError from "../../../../../shared/errors/AppErrors";
import ICategoryDTO from "../../../dtos/ICategoryDTO";
import Category from "../entities/Category";

export default class CategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async create(data: ICategoryDTO): Promise<Category> {
    const categoria = this.ormRepository.create(data);

    return await this.ormRepository.save(categoria);
  }

  async list(): Promise<Category[]> {
    return await this.ormRepository.find();
  }

  async findById(id: number): Promise<Category> {
    const categoria = await this.ormRepository.findOne(id);

    if (!categoria) {
      throw new AppError("Categoria não existe!");
    }

    return categoria;
  }

  async update(data: ICategoryDTO): Promise<Category> {
    const categoria = await this.ormRepository.findOne(data.id);

    if (!categoria) {
      throw new AppError("Categoria não existe!");
    }

    return await this.ormRepository.save(data);
  }

  async delete(id: number): Promise<DeleteResult> {
    const categoria = await this.ormRepository.findOne(id);

    if (!categoria) {
      throw new AppError("Categoria não existe!");
    }

    const deleteResult = await this.ormRepository.delete(id);

    return deleteResult;
  }
}