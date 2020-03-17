import { Repository } from 'typeorm';
import { ProductEntity } from '../entity/product.entity';
import { ProductDto } from '../data_tranfer_object/product.dto';
import { User } from '../entity/user.entity';
import { ProductCodeDto } from '../data_tranfer_object/productCode.dto';
export declare class ProductRepository extends Repository<ProductEntity> {
    createProduct(productDto: ProductDto, user: User): Promise<ProductEntity>;
    getAllProduct(): Promise<ProductEntity[]>;
    updateProduct(productDto: ProductDto, user: User): Promise<import("typeorm").UpdateResult>;
    getProductCodeByCode(productCode: ProductCodeDto): Promise<ProductEntity>;
}
