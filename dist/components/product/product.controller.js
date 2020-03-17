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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_services_1 = require("../../services/product.services");
const product_dto_1 = require("../../data_tranfer_object/product.dto");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../../library/config/get-user.decorator");
const user_entity_1 = require("../../entity/user.entity");
const passport_1 = require("@nestjs/passport");
const productCode_dto_1 = require("../../data_tranfer_object/productCode.dto");
const repository_model_1 = require("../../library/config/repository.model");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(productDto, user) {
        var result = new repository_model_1.RepositoryModel();
        var data = await this.productService.createProduct(productDto, user);
        if (data) {
            return result.InsertSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async getAllProduct() {
        var result = new repository_model_1.RepositoryModel();
        const data = await this.productService.getAllProduct();
        if (data) {
            return result.GetSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async getProductByCode(productCode) {
        var result = new repository_model_1.RepositoryModel();
        var data = await this.productService.getProducCodeByCode(productCode);
        console.log('dataget product', data);
        try {
            if (data) {
                return result.GetSuccess(data);
            }
            else {
                return result.SetNoContent();
            }
        }
        catch (error) {
            return result.SetError(error.message);
        }
    }
    updateProduct() { }
};
__decorate([
    common_1.Post('/CreateProduct'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Get('/GetProduct'),
    common_1.UsePipes(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    common_1.Get('/GetProductByCode/:ProductCode'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productCode_dto_1.ProductCodeDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductByCode", null);
ProductController = __decorate([
    common_1.Controller('Product'),
    swagger_1.ApiTags('Product Controller'),
    common_1.UseGuards(passport_1.AuthGuard()),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [product_services_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map