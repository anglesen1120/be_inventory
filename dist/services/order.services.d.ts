import { OrderHeaderRepository } from '../repository/orderheader.repository';
import OrderHeaderDto from '../data_tranfer_object/order-header.dto';
import { User } from '../entity/user.entity';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: OrderHeaderRepository);
    createOrder(order: OrderHeaderDto, user: User): Promise<import("../entity/order-header.entity").OrderHeaderEntity>;
    getOrderHeaderCreate(): Promise<import("../entity/order-header.entity").OrderHeaderEntity[]>;
    getOrderDetailByID(id: number): Promise<import("../entity/order-header.entity").OrderHeaderEntity>;
    createCancelOrderHeader(id: number, user: User): Promise<import("../entity/order-header.entity").OrderHeaderEntity>;
}
