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
let TransactionEntity = class TransactionEntity extends base_entity_1.BaseModelEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "transacioncode", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "productcode", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "productname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "productqty", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "productprice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "salevalue", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "typetransaction", void 0);
TransactionEntity = __decorate([
    typeorm_1.Entity('Transaction')
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map