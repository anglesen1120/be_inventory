import { BaseModelEntity } from '../share_models/base.entity';
export declare class TransactionEntity extends BaseModelEntity<TransactionEntity> {
    transacioncode: string;
    productcode: string;
    productname: string;
    productqty: number;
    productprice: number;
    salevalue: number;
    typetransaction: number;
}
