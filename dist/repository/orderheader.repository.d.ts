import { Repository } from "typeorm";
import { OrderHeaderEntity } from "../entity/order-header.entity";
import OrderHeaderDto from "../data_tranfer_object/order-header.dto";
import { User } from "../entity/user.entity";
export declare class OrderHeaderRepository extends Repository<OrderHeaderEntity> {
    createOrderHeader(orderHeaderDto: OrderHeaderDto, user: User): Promise<OrderHeaderEntity>;
    getOrderHeader(): Promise<OrderHeaderEntity[]>;
    getOrderDetailByID(orderHeaderId: number): Promise<OrderHeaderEntity>;
    createCancelOrderHeader(id: number, user: User): Promise<OrderHeaderEntity>;
    getOrderFlowByDate(): void;
}
