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
let ProductEntity = class ProductEntity extends base_entity_1.BaseModelEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "ProductCode", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "ProductName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "ProductDescription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "ProductUnit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "ProductPrimaryPrice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "ProductSecondaryPrice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "ProductVAT", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "isActive", void 0);
ProductEntity = __decorate([
    typeorm_1.Entity('Product')
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map