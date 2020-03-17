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
let InventoryEntity = class InventoryEntity extends base_entity_1.BaseModelEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], InventoryEntity.prototype, "productcode", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], InventoryEntity.prototype, "productname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InventoryEntity.prototype, "productdescription", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "productsalesprice", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "productinpputprice", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "openquantity", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "closequantity", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "inputquantity", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "outputquantity", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "valuesalesproduct", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], InventoryEntity.prototype, "valueinputproduct", void 0);
InventoryEntity = __decorate([
    typeorm_1.Entity('Inventory')
], InventoryEntity);
exports.InventoryEntity = InventoryEntity;
//# sourceMappingURL=inventory.entity.js.map