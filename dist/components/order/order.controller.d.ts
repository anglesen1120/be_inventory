import { OrderService } from '../../services/order.services';
import OrderHeaderDto from '../../data_tranfer_object/order-header.dto';
import { User } from '../../entity/user.entity';
import { CalculatorServices } from '../../services/calculator.services';
export declare class OrderController {
    private orderServices;
    private calcualator;
    constructor(orderServices: OrderService, calcualator: CalculatorServices);
    createOrder(order: OrderHeaderDto, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    getOrderHeaderCreate(): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    getOrderDetailByID(headerId: number): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    createCancelSalesOrder(id: number, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    CaculatorInventory(): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
}
