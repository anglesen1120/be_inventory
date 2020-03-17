import { BaseModelEntity } from '../share_models/base.entity';
export declare class CustomerEntity extends BaseModelEntity<CustomerEntity> {
    CustomerCode: string;
    CustomerName: string;
    Address: string;
    District: string;
    Ward: string;
    City: string;
}
