"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const purcharOrder_header_entity_1 = require("../entity/purcharOrder-header.entity");
const purcharOrder_details_entity_1 = require("../entity/purcharOrder-details.entity");
const orderStatus_enum_1 = require("../share_models/orderStatus.enum");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("../entity/transaction.entity");
let PurcharsingHeaderRepository = class PurcharsingHeaderRepository extends typeorm_1.Repository {
    async createPurcharOrder(purcharOderHeaderDto, user) {
        const connection = typeorm_2.getConnection();
        const queryRunner = connection.createQueryRunner();
        const { purcharordercode, customercode, customername, totalpurcharvalueorders, purcharorderstatus, purcharseorderdetail } = purcharOderHeaderDto;
        let purchareOrderHeader = new purcharOrder_header_entity_1.PurcharOrderHeaderEntity();
        let transactionOrder = new Array;
        purchareOrderHeader.purcharordercode = purcharordercode;
        purchareOrderHeader.customercode = customercode;
        purchareOrderHeader.customername = customername;
        purchareOrderHeader.totalpurcharvalueorders = totalpurcharvalueorders;
        purchareOrderHeader.purcharorderstatus = purcharorderstatus;
        purchareOrderHeader.purcharorderstatus = orderStatus_enum_1.OrderStatus.PURCHARCREATE;
        purchareOrderHeader.createby = user.id;
        purchareOrderHeader.updateby = user.id;
        purchareOrderHeader.purcharorderDetail = [];
        let dataPurcharOrder = await purchareOrderHeader.save();
        for (let item = 0; item < purcharseorderdetail.length; item++) {
            const purcharOrderDetails = new purcharOrder_details_entity_1.PurcharOrderDetailsEntity();
            purcharOrderDetails.purcharordercode = purcharordercode;
            purcharOrderDetails.productcode = purcharseorderdetail[item].productcode;
            purcharOrderDetails.productname = purcharseorderdetail[item].productname;
            purcharOrderDetails.productdescription = purcharseorderdetail[item].productdescription;
            purcharOrderDetails.productquantity = purcharseorderdetail[item].productquantity;
            purcharOrderDetails.purcharProductPrice = purcharseorderdetail[item].purcharProductPrice;
            purcharOrderDetails.totalValuePurchar = purcharseorderdetail[item].totalValuePurchar;
            purcharOrderDetails.createby = user.id;
            purcharOrderDetails.updateby = user.id;
            purcharOrderDetails.purcharorderHeaderId = dataPurcharOrder.id;
            purchareOrderHeader.purcharorderDetail.push(purcharOrderDetails);
            const transaction = new transaction_entity_1.TransactionEntity();
            transaction.transacioncode = purcharordercode;
            transaction.productcode = purcharseorderdetail[item].productcode;
            transaction.productname = purcharseorderdetail[item].productname;
            transaction.productqty = purcharseorderdetail[item].productquantity;
            transaction.productprice = purcharseorderdetail[item].purcharProductPrice;
            transaction.salevalue = purcharseorderdetail[item].totalValuePurchar;
            transaction.typetransaction = orderStatus_enum_1.OrderStatus.PURCHARCREATE;
            transaction.createby = user.id;
            transactionOrder.push(transaction);
        }
        try {
            queryRunner.startTransaction();
            await queryRunner.manager.save(purchareOrderHeader.purcharorderDetail);
            await queryRunner.manager.save(transactionOrder);
            await queryRunner.commitTransaction();
            return dataPurcharOrder;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await this.createQueryBuilder().delete()
                .from(purcharOrder_header_entity_1.PurcharOrderHeaderEntity)
                .where("id = :id", { id: dataPurcharOrder.id })
                .execute();
            throw new common_1.InternalServerErrorException(error.message);
        }
        finally {
            await queryRunner.release();
        }
    }
    async getListPurchareOrder() {
        try {
            const querry = this.createQueryBuilder('PurcharOrderHeader');
            querry.where('PurcharOrderHeader.purcharorderstatus = :purcharorderstatus', { purcharorderstatus: orderStatus_enum_1.OrderStatus.PURCHARCREATE });
            return querry.getMany();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async createCancelPurchareOrder(id, user) {
        const connection = typeorm_2.getConnection();
        const queryRunner = connection.createQueryRunner();
        try {
            queryRunner.startTransaction();
            const querry = this.createQueryBuilder('PurcharOrderHeader');
            querry.where('PurcharOrderHeader.id =:id', { id: id });
            const dataresult = await querry.getOne();
            dataresult.purcharorderstatus = orderStatus_enum_1.OrderStatus.PURCHARCANCEL;
            dataresult.updateby = user.id;
            await queryRunner.manager.createQueryBuilder().update(transaction_entity_1.TransactionEntity).set({ typetransaction: orderStatus_enum_1.OrderStatus.PURCHARCANCEL, updateby: user.id })
                .where('transacioncode = :transacioncode', { transacioncode: dataresult.purcharordercode })
                .execute();
            await queryRunner.commitTransaction();
            return dataresult.save();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
};
PurcharsingHeaderRepository = __decorate([
    typeorm_1.EntityRepository(purcharOrder_header_entity_1.PurcharOrderHeaderEntity)
], PurcharsingHeaderRepository);
exports.PurcharsingHeaderRepository = PurcharsingHeaderRepository;
//# sourceMappingURL=purcharsing-order.repository.js.map