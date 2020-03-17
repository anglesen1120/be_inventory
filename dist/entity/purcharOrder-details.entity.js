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
const base_entity_1 = require("../share_models/base.entity");
const purcharOrder_header_entity_1 = require("./purcharOrder-header.entity");
let PurcharOrderDetailsEntity = class PurcharOrderDetailsEntity extends base_entity_1.BaseModelEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PurcharOrderDetailsEntity.prototype, "purcharordercode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PurcharOrderDetailsEntity.prototype, "productcode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PurcharOrderDetailsEntity.prototype, "productname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PurcharOrderDetailsEntity.prototype, "productdescription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurcharOrderDetailsEntity.prototype, "productquantity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurcharOrderDetailsEntity.prototype, "purcharProductPrice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurcharOrderDetailsEntity.prototype, "totalValuePurchar", void 0);
__decorate([
    typeorm_1.ManyToOne(type => purcharOrder_header_entity_1.PurcharOrderHeaderEntity, ourcharorderHeader => ourcharorderHeader.purcharorderDetail, { eager: true, primary: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", purcharOrder_header_entity_1.PurcharOrderHeaderEntity)
], PurcharOrderDetailsEntity.prototype, "purcharorderHeader", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PurcharOrderDetailsEntity.prototype, "purcharorderHeaderId", void 0);
PurcharOrderDetailsEntity = __decorate([
    typeorm_1.Entity('PurcharOrderDetails')
], PurcharOrderDetailsEntity);
exports.PurcharOrderDetailsEntity = PurcharOrderDetailsEntity;
//# sourceMappingURL=purcharOrder-details.entity.js.map