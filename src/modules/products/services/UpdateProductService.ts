import FindByIdCategoryService from "../../categories/services/FindCategoryByIdService";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class UpdateProductService {
  public async execute(data: IProductDTO): Promise<Product> {
    const productRepository = new ProductRepository();
    const findByIdCategoryService = new FindByIdCategoryService();

    await productRepository.findById(Number(data.id)); // verificação do produto

    await findByIdCategoryService.execute(Number(data.categoria_id)); // verificação do categoria

    const product = await productRepository.update(data);

    return product;
  }
}