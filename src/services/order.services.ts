import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderHeaderRepository } from '../repository/orderheader.repository';
import OrderHeaderDto from '../data_tranfer_object/order-header.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderHeaderRepository)
    private orderRepository: OrderHeaderRepository,
  ) { }

  async createOrder(
    order: OrderHeaderDto,
    user: User) {
    // console.log('services order',this.orderRepository.createOrderHeader(order))
    return await this.orderRepository.createOrderHeader(order, user);
  }


  async getOrderHeaderCreate() {
    return await this.orderRepository.getOrderHeader();
  }

  getOrderDetailByID (id : number){
    return this.orderRepository.getOrderDetailByID(id);
  }


  async createCancelOrderHeader(
    id: number,
    user: User
  ) {
    return await this.orderRepository.createCancelOrderHeader(id, user);
  }
}
