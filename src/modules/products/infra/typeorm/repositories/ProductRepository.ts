import { DeleteResult, getRepository, Repository } from "typeorm";
import AppError from "../../../../../shared/errors/AppErrors";
import IProductDTO from "../../../dtos/IProductDTO";
import IProductRepository from "../../../repositories/IProductRepository";
import Product from "../entities/Product";

export default class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  async create(data: IProductDTO): Promise<Product> {
    const produto = this.ormRepository.create(data);

    return await this.ormRepository.save(produto);
  }

  async update(data: IProductDTO): Promise<Product> {
    const produto = await this.ormRepository.findOne(data.id);

    if (!produto) {
      throw new AppError("Produto não Existe!");
    }

    return await this.ormRepository.save(data);
  }

  async findById(id: number): Promise<Product> {
    const produto = await this.ormRepository.findOne(id);

    if (!produto) {
      throw new AppError("Produto não Existe!");
    }

    return produto;
  }

  async list(): Promise<Product[]> {
    return await this.ormRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    const produto = await this.ormRepository.findOne(id);

    if (!produto) {
      throw new AppError("Produto não Existe!");
    }

    return await this.ormRepository.delete(id);
  }
}