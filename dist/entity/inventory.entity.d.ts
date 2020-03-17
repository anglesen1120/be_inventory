import { BaseModelEntity } from '../share_models/base.entity';
export declare class InventoryEntity extends BaseModelEntity<InventoryEntity> {
    productcode: string;
    productname: string;
    productdescription: string;
    productsalesprice: number;
    productinpputprice: number;
    openquantity: number;
    closequantity: number;
    inputquantity: number;
    outputquantity: number;
    valuesalesproduct: number;
    valueinputproduct: number;
}
