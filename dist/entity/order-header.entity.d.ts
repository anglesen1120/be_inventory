import { OrderDetailEntity } from './order-detail.entity';
import { BaseModelEntity } from '../share_models/base.entity';
export declare class OrderHeaderEntity extends BaseModelEntity<OrderHeaderEntity> {
    salesordercode: string;
    customercode: string;
    customername: string;
    totalvalueorders: number;
    orderstatus: number;
    orderDetail: OrderDetailEntity[];
}
