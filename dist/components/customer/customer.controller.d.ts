import { CustomerServices } from '../../services/customer.services';
import { CustomerDto } from '../../data_tranfer_object/customer.dto';
import { CustomerCode } from '../../data_tranfer_object/customerCode.dto';
import { User } from '../../entity/user.entity';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerServices);
    createCustomer(customerDto: CustomerDto, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    getAllProduct(): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    GetCustormerByCode(customerCode: CustomerCode): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
}
