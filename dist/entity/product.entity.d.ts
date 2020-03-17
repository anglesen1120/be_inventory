import { BaseModelEntity } from '../share_models/base.entity';
export declare class ProductEntity extends BaseModelEntity<ProductEntity> {
    ProductCode: string;
    ProductName: string;
    ProductDescription: string;
    ProductUnit: number;
    ProductPrimaryPrice: number;
    ProductSecondaryPrice: number;
    ProductVAT: number;
    isActive: boolean;
}
