import { CustomerRepository } from '../repository/customer.repository';
import { CustomerDto } from '../data_tranfer_object/customer.dto';
import { CustomerEntity } from '../entity/customer.entity';
import { CustomerCode } from '../data_tranfer_object/customerCode.dto';
import { User } from '../entity/user.entity';
export declare class CustomerServices {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    createCustomer(customerDto: CustomerDto, user: User): Promise<CustomerEntity>;
    getAllCustomer(): Promise<CustomerEntity[]>;
    getCustomerByCode(customerCode: CustomerCode): Promise<CustomerEntity>;
}
