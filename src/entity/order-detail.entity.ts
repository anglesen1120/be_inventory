import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { OrderHeaderEntity } from './order-header.entity';
import { BaseModelEntity } from '../share_models/base.entity';

@Entity('SalesOrderDetail')
export class OrderDetailEntity extends BaseModelEntity<OrderDetailEntity> {


  @Column()
  salesordercode: string;

  @Column()
  productcode: string;

  @Column()
  productname: string;

  @Column()
  productdescription: string;

  @Column()
  productquantity: number;

  @Column()
  salesprice: number;

  @Column()
  totalsales: number;

  @ManyToOne(
    type => OrderHeaderEntity,
    orderHeader => orderHeader.orderDetail,
    { eager: true, primary: true },
  )
  @JoinColumn({ name: 'orderheaderid' })
  orderHeader: OrderHeaderEntity;

  @Column({ name: 'orderheaderid' })
  orderheaderid?: number;
}
