import FindByIdCategoryService from "../../categories/services/FindCategoryByIdService";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService {
  public async execute(data: IProductDTO): Promise<Product> {
    const productRepository = new ProductRepository();
    const findByIdCategoryService = new FindByIdCategoryService();

    await findByIdCategoryService.execute(Number(data.categoria_id)); //verificação da categoria

    const produto = await productRepository.create(data);

    return produto;
  }
}