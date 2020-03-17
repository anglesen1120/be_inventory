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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const order_detail_entity_1 = require("./order-detail.entity");
const base_entity_1 = require("../share_models/base.entity");
let OrderHeaderEntity = class OrderHeaderEntity extends base_entity_1.BaseModelEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderHeaderEntity.prototype, "salesordercode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderHeaderEntity.prototype, "customercode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderHeaderEntity.prototype, "customername", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderHeaderEntity.prototype, "totalvalueorders", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderHeaderEntity.prototype, "orderstatus", void 0);
__decorate([
    typeorm_1.OneToMany(type => order_detail_entity_1.OrderDetailEntity, orderDetail => orderDetail.orderHeader),
    __metadata("design:type", Array)
], OrderHeaderEntity.prototype, "orderDetail", void 0);
OrderHeaderEntity = __decorate([
    typeorm_1.Entity('SalesOrderHeader')
], OrderHeaderEntity);
exports.OrderHeaderEntity = OrderHeaderEntity;
//# sourceMappingURL=order-header.entity.js.map