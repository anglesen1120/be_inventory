"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../entity/customer.entity");
let CustomerRepository = class CustomerRepository extends typeorm_1.Repository {
    async createCustormer(customerDto, user) {
        let customer = new customer_entity_1.CustomerEntity();
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
    getCustomerByCode(customerCode) {
        const query = this.createQueryBuilder('Customer');
        query.where('Customer.CustomerCode = :customerCode', {
            customerCode: customerCode.CustormerCode,
        });
        return query.getOne();
    }
};
CustomerRepository = __decorate([
    typeorm_1.EntityRepository(customer_entity_1.CustomerEntity)
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer.repository.js.map