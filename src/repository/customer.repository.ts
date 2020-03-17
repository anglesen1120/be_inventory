import { EntityRepository, Repository } from 'typeorm';
import { CustomerEntity } from '../entity/customer.entity';
import { CustomerDto } from '../data_tranfer_object/customer.dto';
import { CustomerCode } from '../data_tranfer_object/customerCode.dto';
import { User } from '../entity/user.entity';

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {

  async createCustormer(customerDto: CustomerDto, user: User): Promise<CustomerEntity> {
    let customer = new CustomerEntity();
    customer.CustomerCode = customerDto.CustomerCode;
    customer.CustomerName = customerDto.CustomerName;
    customer.Address = customerDto.Address;
    customer.District = customerDto.District;
    customer.Ward = customerDto.Ward;
    customer.City = customerDto.City;
    customer.createby = user.id;
    customer.updateby = user.id;

    return customer.save();
  }


  getAllCustomer() {
    const query = this.createQueryBuilder('Customer');
    return query.getMany();
  }

  getCustomerByCode(customerCode: CustomerCode) {
    const query = this.createQueryBuilder('Customer');
    query.where('Customer.CustomerCode = :customerCode', {
      customerCode: customerCode.CustormerCode,
    });
    return query.getOne();
  }
}
