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
import { PurcharOrderHeaderEntity } from './purcharOrder-header.entity';
  
  @Entity('PurcharOrderDetails')
  export class PurcharOrderDetailsEntity extends BaseModelEntity<PurcharOrderDetailsEntity> {
  
  
    @Column()
    purcharordercode: string;
  
    @Column()
    productcode: string;
  
    @Column()
    productname: string;
  
    @Column()
    productdescription: string;
  
    @Column()
    productquantity: number;
  
    @Column()
    purcharProductPrice: number;
  
    @Column()
    totalValuePurchar: number;
  
    @ManyToOne(
      type => PurcharOrderHeaderEntity,
      ourcharorderHeader => ourcharorderHeader.purcharorderDetail,
      { eager: true, primary: true },
    )
    @JoinColumn()
    purcharorderHeader: PurcharOrderHeaderEntity;
  
    @Column()
    purcharorderHeaderId?: number;
  }
  