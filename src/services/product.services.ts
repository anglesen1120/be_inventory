import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../repository/product.repository';
import { ProductDto } from '../data_tranfer_object/product.dto';
import { ProductEntity } from '../entity/product.entity';
import { User } from '../entity/user.entity';
import { ProductCodeDto } from '../data_tranfer_object/productCode.dto';
import { HttpExceptionFilter } from '../library/http-exception/http-exception.filter';

export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) { }

  async createProduct(
    productDto: ProductDto,
    user: User,
  ) {
    let result = await this.productRepository.createProduct(productDto, user);
    if (!result) {
      throw new HttpExceptionFilter();
    }
    return result;
  }

  async getAllProduct() {
    let result = this.productRepository.getAllProduct();
    return result;
  }

  getProducCodeByCode(productcode: ProductCodeDto) {
    var result = this.productRepository.getProductCodeByCode(productcode);
    if (!result) {
      throw new HttpExceptionFilter();
    }
    return result;

  }
}
