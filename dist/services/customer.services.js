"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const customer_repository_1 = require("../repository/customer.repository");
let CustomerServices = class CustomerServices {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async createCustomer(customerDto, user) {
        return this.customerRepository.createCustormer(customerDto, user);
    }
    getAllCustomer() {
        const result = this.customerRepository.getAllCustomer();
        return result;
    }
    getCustomerByCode(customerCode) {
        const result = this.customerRepository.getCustomerByCode(customerCode);
        return result;
    }
};
CustomerServices = __decorate([
    __param(0, typeorm_1.InjectRepository(customer_repository_1.CustomerRepository)),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository])
], CustomerServices);
exports.CustomerServices = CustomerServices;
//# sourceMappingURL=customer.services.js.map