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
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const purchare_order_details_dto_1 = require("./purchare-order-details.dto");
class PurcharseOrderHeaderDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PurcharseOrderHeaderDto.prototype, "purcharordercode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PurcharseOrderHeaderDto.prototype, "customercode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PurcharseOrderHeaderDto.prototype, "customername", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PurcharseOrderHeaderDto.prototype, "totalpurcharvalueorders", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PurcharseOrderHeaderDto.prototype, "purcharorderstatus", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [purchare_order_details_dto_1.PurcharseOrderDetailDto] }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], PurcharseOrderHeaderDto.prototype, "purcharseorderdetail", void 0);
exports.default = PurcharseOrderHeaderDto;
//# sourceMappingURL=purchare-order-header.dto.js.map