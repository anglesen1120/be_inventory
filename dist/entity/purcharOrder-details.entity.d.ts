import { BaseModelEntity } from '../share_models/base.entity';
import { PurcharOrderHeaderEntity } from './purcharOrder-header.entity';
export declare class PurcharOrderDetailsEntity extends BaseModelEntity<PurcharOrderDetailsEntity> {
    purcharordercode: string;
    productcode: string;
    productname: string;
    productdescription: string;
    productquantity: number;
    purcharProductPrice: number;
    totalValuePurchar: number;
    purcharorderHeader: PurcharOrderHeaderEntity;
    purcharorderHeaderId?: number;
}
