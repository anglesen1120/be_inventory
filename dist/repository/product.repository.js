"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../entity/product.entity");
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async createProduct(productDto, user) {
        const product = new product_entity_1.ProductEntity();
        product.ProductCode = productDto.ProductCode;
        product.ProductName = productDto.ProductName;
        product.ProductDescription = productDto.ProductDescription;
        product.ProductUnit = productDto.ProductUnit;
        product.ProductVAT = productDto.ProductVAT;
        product.ProductPrimaryPrice = productDto.ProductPrimaryPrice;
        product.ProductSecondaryPrice = productDto.ProductSecondaryPrice;
        product.createby = user.id;
        try {
            return product.save();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async getAllProduct() {
        const query = this.createQueryBuilder('Product');
        query.where('Product.isActive = :isActive', { isActive: true });
        return query.getMany();
    }
    async updateProduct(productDto, user) {
        const query = this.createQueryBuilder('Product');
        try {
            const result = query
                .update(product_entity_1.ProductEntity)
                .set({
                ProductName: productDto.ProductName,
                ProductDescription: productDto.ProductDescription,
                updateby: user.id,
            })
                .where('ProductCode = :productCode', {
                productCode: productDto.ProductCode,
            })
                .execute();
            return result;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    getProductCodeByCode(productCode) {
        const query = this.createQueryBuilder('Product');
        query.where('Product.ProductCode = :productCode', {
            productCode: productCode.ProductCode,
        });
        return query.getOne();
    }
};
ProductRepository = __decorate([
    typeorm_1.EntityRepository(product_entity_1.ProductEntity)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map