import { PurcharOrderService } from '../../services/purcharsing-order.services';
import { User } from '../../entity/user.entity';
import PurcharseOrderHeaderDto from '../../data_tranfer_object/purchare-order-header.dto';
export declare class PurchareorderController {
    private purchareOrderServices;
    constructor(purchareOrderServices: PurcharOrderService);
    createPurChareOrder(purchareorder: PurcharseOrderHeaderDto, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    getOrderHeaderCreate(): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    createCancelSalesOrder(id: number, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
}
