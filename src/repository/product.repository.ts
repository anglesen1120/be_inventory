import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '../entity/product.entity';
import { ProductDto } from '../data_tranfer_object/product.dto';
import { User } from '../entity/user.entity';
import {
  InternalServerErrorException
} from '@nestjs/common';
import { ProductCodeDto } from '../data_tranfer_object/productCode.dto';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  async createProduct(
    productDto: ProductDto,
    user: User,
  ) {
    const product = new ProductEntity();
    product.ProductCode = productDto.ProductCode;
    product.ProductName = productDto.ProductName;
    product.ProductDescription = productDto.ProductDescription;
    product.ProductUnit = productDto.ProductUnit;
    product.ProductVAT = productDto.ProductVAT;
    product.ProductPrimaryPrice = productDto.ProductPrimaryPrice;
    product.ProductSecondaryPrice = productDto.ProductSecondaryPrice;
    product.createby = user.id;
    try {
      return product.save();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async getAllProduct() {
    const query = this.createQueryBuilder('Product');
    query.where('Product.isActive = :isActive', { isActive: true });
    return query.getMany();
  }

  async updateProduct(productDto: ProductDto, user: User) {
    const query = this.createQueryBuilder('Product');
    try {
      const result = query
        .update(ProductEntity)
        .set({
          ProductName: productDto.ProductName,
          ProductDescription: productDto.ProductDescription,
          updateby: user.id,
        })
        .where('ProductCode = :productCode', {
          productCode: productDto.ProductCode,
        })
        .execute();
      return result;

    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }




  }

  getProductCodeByCode(productCode: ProductCodeDto) {
    const query = this.createQueryBuilder('Product');
    query.where('Product.ProductCode = :productCode', {
      productCode: productCode.ProductCode,
    });
    return query.getOne();
  }
}
