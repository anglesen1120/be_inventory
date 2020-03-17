import {

  Column,
  Entity,

  OneToMany,

} from 'typeorm';
import { OrderDetailEntity } from './order-detail.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModelEntity } from '../share_models/base.entity';

@Entity('SalesOrderHeader')
export class OrderHeaderEntity extends BaseModelEntity<OrderHeaderEntity> {


  @Column()
  salesordercode: string;

  @Column()
  customercode: string;

  @Column()
  customername: string;


  @Column()
  totalvalueorders: number;


  @Column()
  orderstatus: number;

  @OneToMany(
    type => OrderDetailEntity,
    orderDetail => orderDetail.orderHeader,
  )
  orderDetail: OrderDetailEntity[];
}
