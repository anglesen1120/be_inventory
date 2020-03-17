import { Repository } from 'typeorm';
import { CustomerEntity } from '../entity/customer.entity';
import { CustomerDto } from '../data_tranfer_object/customer.dto';
import { CustomerCode } from '../data_tranfer_object/customerCode.dto';
import { User } from '../entity/user.entity';
export declare class CustomerRepository extends Repository<CustomerEntity> {
    createCustormer(customerDto: CustomerDto, user: User): Promise<CustomerEntity>;
    getAllCustomer(): Promise<CustomerEntity[]>;
    getCustomerByCode(customerCode: CustomerCode): Promise<CustomerEntity>;
}
