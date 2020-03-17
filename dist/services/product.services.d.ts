import { ProductRepository } from '../repository/product.repository';
import { ProductDto } from '../data_tranfer_object/product.dto';
import { ProductEntity } from '../entity/product.entity';
import { User } from '../entity/user.entity';
import { ProductCodeDto } from '../data_tranfer_object/productCode.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    createProduct(productDto: ProductDto, user: User): Promise<ProductEntity>;
    getAllProduct(): Promise<ProductEntity[]>;
    getProducCodeByCode(productcode: ProductCodeDto): Promise<ProductEntity>;
}
