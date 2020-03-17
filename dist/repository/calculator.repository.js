"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_entity_1 = require("../entity/inventory.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let CaculartorRepository = class CaculartorRepository extends typeorm_1.Repository {
    async createStockInventory() {
        const connection = typeorm_2.getConnection();
        const queryRunner = connection.createQueryRunner();
        let inventoryTransactionOrder = new Array();
        const querryInput = 'SELECT productcode, productname, SUM(inputproductprice) as PrimaryPrice, SUM(saleproductprice) as SecondPrice,SUM(productinputqty) as ProductInputQty,' +
            'SUM(salesproductqty) as ProductSaleQty,' +
            'SUM(totalinputvalue) as TotalInputValue,' +
            'SUM(totalsalevalue) as TotalSaleValue FROM get_inventory_onday() GROUP BY productcode, productname';
        const resultdataInput = await connection.query(querryInput);
        return resultdataInput;
    }
};
CaculartorRepository = __decorate([
    typeorm_1.EntityRepository(inventory_entity_1.InventoryEntity)
], CaculartorRepository);
exports.CaculartorRepository = CaculartorRepository;
//# sourceMappingURL=calculator.repository.js.map