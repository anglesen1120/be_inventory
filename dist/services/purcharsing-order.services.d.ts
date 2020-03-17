import { PurcharsingHeaderRepository } from '../repository/purcharsing-order.repository';
import PurcharseOrderHeaderDto from '../data_tranfer_object/purchare-order-header.dto';
import { User } from '../entity/user.entity';
export declare class PurcharOrderService {
    private purcharOrderRepository;
    constructor(purcharOrderRepository: PurcharsingHeaderRepository);
    createPurcharOrder(purcharsOrder: PurcharseOrderHeaderDto, user: User): Promise<import("../entity/purcharOrder-header.entity").PurcharOrderHeaderEntity>;
    getPurchareOrderHeader(): Promise<import("../entity/purcharOrder-header.entity").PurcharOrderHeaderEntity[]>;
    createCancelOrderHeader(id: number, user: User): Promise<import("../entity/purcharOrder-header.entity").PurcharOrderHeaderEntity>;
}
