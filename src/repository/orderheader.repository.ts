import { EntityRepository, Repository, Timestamp } from "typeorm";
import { OrderHeaderEntity } from "../entity/order-header.entity";
import { OrderDetailEntity } from "../entity/order-detail.entity";
import OrderHeaderDto from "../data_tranfer_object/order-header.dto";
import { User } from "../entity/user.entity";
import { OrderStatus } from "../share_models/orderStatus.enum";
import { getConnection } from "typeorm";
import { InternalServerErrorException } from "@nestjs/common";
import { TransactionEntity } from "../entity/transaction.entity";




@EntityRepository(OrderHeaderEntity)
export class OrderHeaderRepository extends Repository<OrderHeaderEntity>{
    async createOrderHeader(
        orderHeaderDto: OrderHeaderDto,
        user: User
    ) {        
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        const { ordercode, orderdetail, customercode, customername, totalInvoice } = orderHeaderDto;
        let orderHeader = new OrderHeaderEntity();
        let transactionOrder = new Array();

        // Insert data to Sales Order Header
        orderHeader.salesordercode = ordercode;
        orderHeader.customercode = customercode;
        orderHeader.customername = customername;
        orderHeader.totalvalueorders = totalInvoice;
        orderHeader.createby = user.id;
        orderHeader.updateby = user.id;
        orderHeader.orderstatus = OrderStatus.SALECREATED;
        orderHeader.orderDetail = [];

        let orderHeaderData = await orderHeader.save();


        // Insert data to Sales Order Details
        for (var item = 0; item < orderdetail.length; item++) {
            const orderDetail = new OrderDetailEntity();
            orderDetail.salesordercode = ordercode;
            orderDetail.productcode = orderdetail[item].productcode;
            orderDetail.productname = orderdetail[item].productName;
            orderDetail.productdescription = orderdetail[item].productdescription;;
            orderDetail.productquantity = orderdetail[item].productquantity;
            orderDetail.orderheaderid = orderHeader.id;
            orderDetail.salesprice = orderdetail[item].salesPrice;
            orderDetail.totalsales = orderdetail[item].totalSales;
            orderDetail.createby = user.id;
            orderDetail.updateby = user.id;
            orderHeader.orderDetail.push(orderDetail);

            // Insert data to Transaction 
            const transaction = new TransactionEntity();
            transaction.transacioncode = ordercode;
            transaction.productcode = orderdetail[item].productcode;
            transaction.productname = orderdetail[item].productName;
            transaction.productqty = orderdetail[item].productquantity;
            transaction.productprice = orderdetail[item].salesPrice;
            transaction.salevalue = orderdetail[item].totalSales;
            transaction.typetransaction = OrderStatus.SALECREATED;
            transaction.createby = user.id;
            transactionOrder.push(transaction);




        }
        try {
            queryRunner.startTransaction();
            console.log('test transaction', transactionOrder);
            await queryRunner.manager.save<OrderDetailEntity>(orderHeader.orderDetail);
            await queryRunner.manager.save<TransactionEntity>(transactionOrder);
            await queryRunner.commitTransaction();

            return orderHeaderData;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            await this.createQueryBuilder().delete()
                .from(OrderHeaderEntity)
                .where("id = :id", { id: orderHeader.id })
                .execute();
            throw new InternalServerErrorException(error.message);
        } finally {
            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
    }



    async getOrderHeader() {
        try {
            const querry = this.createQueryBuilder('SalesOrderHeader');
            querry.where('SalesOrderHeader.orderstatus = :orderstatus', { orderstatus: OrderStatus.SALECREATED });
            return querry.getMany();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }


    getOrderDetailByID(orderHeaderId: number) {
        try {
            const querry = this.createQueryBuilder('SalesOrderDetail');
            querry.where('SalesOrderDetail.orderHeaderId = :orderHeaderId', { orderHeaderId: orderHeaderId });
            return querry.getOne();

        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }


    async createCancelOrderHeader(
        id: number,
        user: User
    ) {
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        try {

            queryRunner.startTransaction();
            const querrySaleOrder = this.createQueryBuilder('SalesOrderHeader');
            querrySaleOrder.where('SalesOrderHeader.id =:id', { id: id });
            const dataresult = await querrySaleOrder.getOne();
            console.log('querry update', new Date());
            dataresult.orderstatus = OrderStatus.SALECANCEL;
            dataresult.updateby = user.id;


            // dataresult.updateDate = new Date();
            // const querryTransaction = TransactionEntity.createQueryBuilder('Transaction');
            // querryTransaction.update().set({ typetransaction: OrderStatus.SALECANCEL, updateby: user.id });
            // querryTransaction.where('Transaction.transacioncode = :transacioncode', { transacioncode: dataresult.salesordercode });
            // querryTransaction.execute();


            await queryRunner.manager.createQueryBuilder().update(TransactionEntity).set({ typetransaction: OrderStatus.SALECANCEL, updateby: user.id })
                .where('transacioncode = :transacioncode', { transacioncode: dataresult.salesordercode })
                .execute();
            await queryRunner.commitTransaction();
            return dataresult.save();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw new InternalServerErrorException(error.message);
        }
    }


    getOrderFlowByDate() {

    }


}