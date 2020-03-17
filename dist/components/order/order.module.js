"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orderheader_repository_1 = require("../../repository/orderheader.repository");
const order_controller_1 = require("./order.controller");
const order_services_1 = require("../../services/order.services");
const authenticaion_module_1 = require("../authentication/authenticaion.module");
const calculator_services_1 = require("../../services/calculator.services");
const calculator_repository_1 = require("../../repository/calculator.repository");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([orderheader_repository_1.OrderHeaderRepository, calculator_repository_1.CaculartorRepository]),
            authenticaion_module_1.AuthenticaionModule,
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_services_1.OrderService, calculator_services_1.CalculatorServices],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map