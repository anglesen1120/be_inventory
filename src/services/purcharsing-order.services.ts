import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PurcharsingHeaderRepository } from '../repository/purcharsing-order.repository';
import PurcharseOrderHeaderDto from '../data_tranfer_object/purchare-order-header.dto';
import { User } from '../entity/user.entity';



@Injectable()
export class PurcharOrderService {
    constructor(
        @InjectRepository(PurcharsingHeaderRepository)
        private purcharOrderRepository: PurcharsingHeaderRepository,
    ) { }


    async createPurcharOrder(
        purcharsOrder: PurcharseOrderHeaderDto, 
        user: User) {
        return await this.purcharOrderRepository.createPurcharOrder(purcharsOrder, user);

    }


    async getPurchareOrderHeader() {
        return await this.purcharOrderRepository.getListPurchareOrder();
    }


    async createCancelOrderHeader(
        id: number,
        user: User
      ) {
        return await this.purcharOrderRepository.createCancelPurchareOrder(id, user);
      }
}