import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class FindByIdProductService {
  public async execute(id: number): Promise<Product> {
    const productRepository = new ProductRepository();

    const produto = await productRepository.findById(id);

    return produto;
  }
}
