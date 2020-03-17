import { BaseModelEntity } from '../share_models/base.entity';
import { PurcharOrderDetailsEntity } from './purcharOrder-details.entity';
export declare class PurcharOrderHeaderEntity extends BaseModelEntity<PurcharOrderHeaderEntity> {
    purcharordercode: string;
    customercode: string;
    customername: string;
    totalpurcharvalueorders: number;
    purcharorderstatus: number;
    purcharorderDetail: PurcharOrderDetailsEntity[];
}
