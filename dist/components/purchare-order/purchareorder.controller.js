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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const purcharsing_order_services_1 = require("../../services/purcharsing-order.services");
const get_user_decorator_1 = require("../../library/config/get-user.decorator");
const user_entity_1 = require("../../entity/user.entity");
const purchare_order_header_dto_1 = __importDefault(require("../../data_tranfer_object/purchare-order-header.dto"));
const repository_model_1 = require("../../library/config/repository.model");
let PurchareorderController = class PurchareorderController {
    constructor(purchareOrderServices) {
        this.purchareOrderServices = purchareOrderServices;
    }
    async createPurChareOrder(purchareorder, user) {
        var result = new repository_model_1.RepositoryModel();
        console.log('orderhearder data');
        var data = await this.purchareOrderServices.createPurcharOrder(purchareorder, user);
        console.log('orderhearder data', data);
        if (data.id != null && data.purcharorderDetail != null) {
            return result.InsertSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async getOrderHeaderCreate() {
        var result = new repository_model_1.RepositoryModel();
        const data = await this.purchareOrderServices.getPurchareOrderHeader();
        if (data.length > 1) {
            return result.GetSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async createCancelSalesOrder(id, user) {
        var result = new repository_model_1.RepositoryModel();
        const data = await this.purchareOrderServices.createCancelOrderHeader(id, user);
        if (data) {
            return result.GetSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
};
__decorate([
    common_1.Post('/CreatePurchareOrder'),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchare_order_header_dto_1.default,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PurchareorderController.prototype, "createPurChareOrder", null);
__decorate([
    common_1.Get('/GetListPurchareOrder'),
    common_1.UsePipes(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchareorderController.prototype, "getOrderHeaderCreate", null);
__decorate([
    common_1.Put('/CancelPurchareOrder/:id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('id')),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PurchareorderController.prototype, "createCancelSalesOrder", null);
PurchareorderController = __decorate([
    common_1.Controller('PurChareOrder'),
    swagger_1.ApiTags('PurChareOrder'),
    common_1.UseGuards(passport_1.AuthGuard()),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [purcharsing_order_services_1.PurcharOrderService])
], PurchareorderController);
exports.PurchareorderController = PurchareorderController;
//# sourceMappingURL=purchareorder.controller.js.map