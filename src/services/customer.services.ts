import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from '../repository/customer.repository';
import { CustomerDto } from '../data_tranfer_object/customer.dto';
import { CustomerEntity } from '../entity/customer.entity';
import { CustomerCode } from '../data_tranfer_object/customerCode.dto';
import { User } from '../entity/user.entity';


export class CustomerServices {
  constructor(
    @InjectRepository(CustomerRepository)
    private customerRepository: CustomerRepository,
  ) { }

  async createCustomer(customerDto: CustomerDto, user: User): Promise<CustomerEntity> {
    return this.customerRepository.createCustormer(customerDto, user);
  }

  getAllCustomer() {
    const result = this.customerRepository.getAllCustomer();
    return result;
  }


  getCustomerByCode(customerCode: CustomerCode) {
    const result = this.customerRepository.getCustomerByCode(customerCode);
    return result;

  }
}
