import { Repository, EntityRepository } from "typeorm";
import { PurcharOrderHeaderEntity } from "../entity/purcharOrder-header.entity";
import PurcharseOrderHeaderDto from "../data_tranfer_object/purchare-order-header.dto";
import { User } from "../entity/user.entity";
import { PurcharOrderDetailsEntity } from "../entity/purcharOrder-details.entity";
import { OrderStatus } from "../share_models/orderStatus.enum";
import { InternalServerErrorException } from "@nestjs/common";
import { getConnection } from "typeorm";

import { TransactionEntity } from "../entity/transaction.entity";


@EntityRepository(PurcharOrderHeaderEntity)
export class PurcharsingHeaderRepository extends Repository<PurcharOrderHeaderEntity>{
    async createPurcharOrder(
        purcharOderHeaderDto: PurcharseOrderHeaderDto,
        user: User
    ) {
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();

        const { purcharordercode, customercode, customername, totalpurcharvalueorders, purcharorderstatus, purcharseorderdetail } = purcharOderHeaderDto;
        let purchareOrderHeader = new PurcharOrderHeaderEntity();
        let transactionOrder = new Array;
        purchareOrderHeader.purcharordercode = purcharordercode;
        purchareOrderHeader.customercode = customercode;
        purchareOrderHeader.customername = customername;
        purchareOrderHeader.totalpurcharvalueorders = totalpurcharvalueorders;
        purchareOrderHeader.purcharorderstatus = purcharorderstatus;
        purchareOrderHeader.purcharorderstatus = OrderStatus.PURCHARCREATE;
        purchareOrderHeader.createby = user.id;
        purchareOrderHeader.updateby = user.id;
        purchareOrderHeader.purcharorderDetail = [];
        let dataPurcharOrder = await purchareOrderHeader.save();

        for (let item = 0; item < purcharseorderdetail.length; item++) {
            const purcharOrderDetails = new PurcharOrderDetailsEntity();
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



            // Insert data to Transaction 
            const transaction = new TransactionEntity();
            transaction.transacioncode = purcharordercode;
            transaction.productcode = purcharseorderdetail[item].productcode;
            transaction.productname = purcharseorderdetail[item].productname;
            transaction.productqty = purcharseorderdetail[item].productquantity;
            transaction.productprice = purcharseorderdetail[item].purcharProductPrice;
            transaction.salevalue = purcharseorderdetail[item].totalValuePurchar;
            transaction.typetransaction = OrderStatus.PURCHARCREATE;
            transaction.createby = user.id;
            transactionOrder.push(transaction);
        }

        try {
            queryRunner.startTransaction();
            await queryRunner.manager.save<PurcharOrderDetailsEntity>(purchareOrderHeader.purcharorderDetail);
            await queryRunner.manager.save<TransactionEntity>(transactionOrder);
            await queryRunner.commitTransaction();
            return dataPurcharOrder;
        } catch (error) {


            await queryRunner.rollbackTransaction();
            await this.createQueryBuilder().delete()
                .from(PurcharOrderHeaderEntity)
                .where("id = :id", { id: dataPurcharOrder.id })
                .execute();
            throw new InternalServerErrorException(error.message);
        } finally {
            // you need to release query runner which is manually created:
            await queryRunner.release();
        }


    }



    async getListPurchareOrder() {
        try {
            const querry = this.createQueryBuilder('PurcharOrderHeader');
            querry.where('PurcharOrderHeader.purcharorderstatus = :purcharorderstatus', { purcharorderstatus: OrderStatus.PURCHARCREATE });
            return querry.getMany();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }



    async createCancelPurchareOrder(
        id: number,
        user: User
    ) {
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        try {
            queryRunner.startTransaction();
            const querry = this.createQueryBuilder('PurcharOrderHeader');
            querry.where('PurcharOrderHeader.id =:id', { id: id });
            const dataresult = await querry.getOne();
            dataresult.purcharorderstatus = OrderStatus.PURCHARCANCEL;
            dataresult.updateby = user.id;

            // const querryTransaction = TransactionEntity.createQueryBuilder('Transaction');
            // querryTransaction.where('Transaction.transacioncode = :transacioncode', {transacioncode : dataresult.purcharordercode});
            // const dataresultTransaction = await querryTransaction.getOne();
            // dataresultTransaction.typetransaction = OrderStatus.PURCHARCANCEL;
            // dataresultTransaction.updateby = user.id;
            // dataresultTransaction.save();

            await queryRunner.manager.createQueryBuilder().update(TransactionEntity).set({ typetransaction: OrderStatus.PURCHARCANCEL, updateby: user.id })
                .where('transacioncode = :transacioncode', { transacioncode: dataresult.purcharordercode })
                .execute();
            await queryRunner.commitTransaction();



            return dataresult.save();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}