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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const customer_services_1 = require("../../services/customer.services");
const customer_dto_1 = require("../../data_tranfer_object/customer.dto");
const customerCode_dto_1 = require("../../data_tranfer_object/customerCode.dto");
const repository_model_1 = require("../../library/config/repository.model");
const get_user_decorator_1 = require("../../library/config/get-user.decorator");
const user_entity_1 = require("../../entity/user.entity");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async createCustomer(customerDto, user) {
        var result = new repository_model_1.RepositoryModel();
        var data = await this.customerService.createCustomer(customerDto, user);
        if (data) {
            return result.InsertSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async getAllProduct() {
        var result = new repository_model_1.RepositoryModel();
        const data = await this.customerService.getAllCustomer();
        console.log('result search', result);
        if (data.length > 0) {
            return result.GetSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async GetCustormerByCode(customerCode) {
        var result = new repository_model_1.RepositoryModel();
        var data = await this.customerService.getCustomerByCode(customerCode);
        console.log('result search', data);
        if (data) {
            return result.GetSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
};
__decorate([
    common_1.Post('/CreateCustomer'),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createCustomer", null);
__decorate([
    common_1.Get('/GetAllCustormer'),
    common_1.UsePipes(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getAllProduct", null);
__decorate([
    common_1.Get('/GetCustormerByCode/:CustormerCode'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customerCode_dto_1.CustomerCode]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "GetCustormerByCode", null);
CustomerController = __decorate([
    common_1.Controller('Customer'),
    swagger_1.ApiTags('Customer Controller'),
    common_1.UseGuards(passport_1.AuthGuard()),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [customer_services_1.CustomerServices])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map