import { ProductService } from '../../services/product.services';
import { ProductDto } from '../../data_tranfer_object/product.dto';
import { User } from '../../entity/user.entity';
import { ProductCodeDto } from '../../data_tranfer_object/productCode.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(productDto: ProductDto, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    getAllProduct(): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    getProductByCode(productCode: ProductCodeDto): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    updateProduct(): void;
}
