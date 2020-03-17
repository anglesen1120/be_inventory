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
const order_header_entity_1 = require("./order-header.entity");
const base_entity_1 = require("../share_models/base.entity");
let OrderDetailEntity = class OrderDetailEntity extends base_entity_1.BaseModelEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "salesordercode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "productcode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "productname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "productdescription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "productquantity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "salesprice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "totalsales", void 0);
__decorate([
    typeorm_1.ManyToOne(type => order_header_entity_1.OrderHeaderEntity, orderHeader => orderHeader.orderDetail, { eager: true, primary: true }),
    typeorm_1.JoinColumn({ name: 'orderheaderid' }),
    __metadata("design:type", order_header_entity_1.OrderHeaderEntity)
], OrderDetailEntity.prototype, "orderHeader", void 0);
__decorate([
    typeorm_1.Column({ name: 'orderheaderid' }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "orderheaderid", void 0);
OrderDetailEntity = __decorate([
    typeorm_1.Entity('SalesOrderDetail')
], OrderDetailEntity);
exports.OrderDetailEntity = OrderDetailEntity;
//# sourceMappingURL=order-detail.entity.js.map