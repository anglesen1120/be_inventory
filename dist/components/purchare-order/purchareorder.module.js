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
const purcharsing_order_repository_1 = require("../../repository/purcharsing-order.repository");
const authenticaion_module_1 = require("../authentication/authenticaion.module");
const purchareorder_controller_1 = require("./purchareorder.controller");
const purcharsing_order_services_1 = require("../../services/purcharsing-order.services");
let PurchareorderModule = class PurchareorderModule {
};
PurchareorderModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([purcharsing_order_repository_1.PurcharsingHeaderRepository]),
            authenticaion_module_1.AuthenticaionModule
        ],
        controllers: [purchareorder_controller_1.PurchareorderController],
        providers: [purcharsing_order_services_1.PurcharOrderService],
    })
], PurchareorderModule);
exports.PurchareorderModule = PurchareorderModule;
//# sourceMappingURL=purchareorder.module.js.map