"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const order_header_entity_1 = require("../entity/order-header.entity");
const order_detail_entity_1 = require("../entity/order-detail.entity");
const orderStatus_enum_1 = require("../share_models/orderStatus.enum");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const transaction_entity_1 = require("../entity/transaction.entity");
let OrderHeaderRepository = class OrderHeaderRepository extends typeorm_1.Repository {
    async createOrderHeader(orderHeaderDto, user) {
        const connection = typeorm_2.getConnection();
        const queryRunner = connection.createQueryRunner();
        const { ordercode, orderdetail, customercode, customername, totalInvoice } = orderHeaderDto;
        let orderHeader = new order_header_entity_1.OrderHeaderEntity();
        let transactionOrder = new Array();
        orderHeader.salesordercode = ordercode;
        orderHeader.customercode = customercode;
        orderHeader.customername = customername;
        orderHeader.totalvalueorders = totalInvoice;
        orderHeader.createby = user.id;
        orderHeader.updateby = user.id;
        orderHeader.orderstatus = orderStatus_enum_1.OrderStatus.SALECREATED;
        orderHeader.orderDetail = [];
        let orderHeaderData = await orderHeader.save();
        for (var item = 0; item < orderdetail.length; item++) {
            const orderDetail = new order_detail_entity_1.OrderDetailEntity();
            orderDetail.salesordercode = ordercode;
            orderDetail.productcode = orderdetail[item].productcode;
            orderDetail.productname = orderdetail[item].productName;
            orderDetail.productdescription = orderdetail[item].productdescription;
            ;
            orderDetail.productquantity = orderdetail[item].productquantity;
            orderDetail.orderheaderid = orderHeader.id;
            orderDetail.salesprice = orderdetail[item].salesPrice;
            orderDetail.totalsales = orderdetail[item].totalSales;
            orderDetail.createby = user.id;
            orderDetail.updateby = user.id;
            orderHeader.orderDetail.push(orderDetail);
            const transaction = new transaction_entity_1.TransactionEntity();
            transaction.transacioncode = ordercode;
            transaction.productcode = orderdetail[item].productcode;
            transaction.productname = orderdetail[item].productName;
            transaction.productqty = orderdetail[item].productquantity;
            transaction.productprice = orderdetail[item].salesPrice;
            transaction.salevalue = orderdetail[item].totalSales;
            transaction.typetransaction = orderStatus_enum_1.OrderStatus.SALECREATED;
            transaction.createby = user.id;
            transactionOrder.push(transaction);
        }
        try {
            queryRunner.startTransaction();
            console.log('test transaction', transactionOrder);
            await queryRunner.manager.save(orderHeader.orderDetail);
            await queryRunner.manager.save(transactionOrder);
            await queryRunner.commitTransaction();
            return orderHeaderData;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await this.createQueryBuilder().delete()
                .from(order_header_entity_1.OrderHeaderEntity)
                .where("id = :id", { id: orderHeader.id })
                .execute();
            throw new common_1.InternalServerErrorException(error.message);
        }
        finally {
            await queryRunner.release();
        }
    }
    async getOrderHeader() {
        try {
            const querry = this.createQueryBuilder('SalesOrderHeader');
            querry.where('SalesOrderHeader.orderstatus = :orderstatus', { orderstatus: orderStatus_enum_1.OrderStatus.SALECREATED });
            return querry.getMany();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    getOrderDetailByID(orderHeaderId) {
        try {
            const querry = this.createQueryBuilder('SalesOrderDetail');
            querry.where('SalesOrderDetail.orderHeaderId = :orderHeaderId', { orderHeaderId: orderHeaderId });
            return querry.getOne();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async createCancelOrderHeader(id, user) {
        const connection = typeorm_2.getConnection();
        const queryRunner = connection.createQueryRunner();
        try {
            queryRunner.startTransaction();
            const querrySaleOrder = this.createQueryBuilder('SalesOrderHeader');
            querrySaleOrder.where('SalesOrderHeader.id =:id', { id: id });
            const dataresult = await querrySaleOrder.getOne();
            console.log('querry update', new Date());
            dataresult.orderstatus = orderStatus_enum_1.OrderStatus.SALECANCEL;
            dataresult.updateby = user.id;
            await queryRunner.manager.createQueryBuilder().update(transaction_entity_1.TransactionEntity).set({ typetransaction: orderStatus_enum_1.OrderStatus.SALECANCEL, updateby: user.id })
                .where('transacioncode = :transacioncode', { transacioncode: dataresult.salesordercode })
                .execute();
            await queryRunner.commitTransaction();
            return dataresult.save();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    getOrderFlowByDate() {
    }
};
OrderHeaderRepository = __decorate([
    typeorm_1.EntityRepository(order_header_entity_1.OrderHeaderEntity)
], OrderHeaderRepository);
exports.OrderHeaderRepository = OrderHeaderRepository;
//# sourceMappingURL=orderheader.repository.js.map