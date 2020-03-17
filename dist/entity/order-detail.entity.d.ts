import { OrderHeaderEntity } from './order-header.entity';
import { BaseModelEntity } from '../share_models/base.entity';
export declare class OrderDetailEntity extends BaseModelEntity<OrderDetailEntity> {
    salesordercode: string;
    productcode: string;
    productname: string;
    productdescription: string;
    productquantity: number;
    salesprice: number;
    totalsales: number;
    orderHeader: OrderHeaderEntity;
    orderheaderid?: number;
}
