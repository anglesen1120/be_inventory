import { Repository } from "typeorm";
import { PurcharOrderHeaderEntity } from "../entity/purcharOrder-header.entity";
import PurcharseOrderHeaderDto from "../data_tranfer_object/purchare-order-header.dto";
import { User } from "../entity/user.entity";
export declare class PurcharsingHeaderRepository extends Repository<PurcharOrderHeaderEntity> {
    createPurcharOrder(purcharOderHeaderDto: PurcharseOrderHeaderDto, user: User): Promise<PurcharOrderHeaderEntity>;
    getListPurchareOrder(): Promise<PurcharOrderHeaderEntity[]>;
    createCancelPurchareOrder(id: number, user: User): Promise<PurcharOrderHeaderEntity>;
}
