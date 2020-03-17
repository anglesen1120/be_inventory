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
const typeorm_1 = require("@nestjs/typeorm");
const product_repository_1 = require("../repository/product.repository");
const http_exception_filter_1 = require("../library/http-exception/http-exception.filter");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(productDto, user) {
        let result = await this.productRepository.createProduct(productDto, user);
        if (!result) {
            throw new http_exception_filter_1.HttpExceptionFilter();
        }
        return result;
    }
    async getAllProduct() {
        let result = this.productRepository.getAllProduct();
        return result;
    }
    getProducCodeByCode(productcode) {
        var result = this.productRepository.getProductCodeByCode(productcode);
        if (!result) {
            throw new http_exception_filter_1.HttpExceptionFilter();
        }
        return result;
    }
};
ProductService = __decorate([
    __param(0, typeorm_1.InjectRepository(product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.services.js.map