import { Entity, Column } from 'typeorm';
import { BaseModelEntity } from '../share_models/base.entity';



@Entity('Transaction')
export class TransactionEntity extends BaseModelEntity<TransactionEntity> {
  @Column({ type: 'varchar' })
  transacioncode: string;

  @Column({ type: 'varchar' })
  productcode: string;

  @Column({ type: 'varchar' })
  productname: string;

  @Column()
  productqty: number;

  @Column()
  productprice: number;

  @Column()
  salevalue: number;

  @Column()
  typetransaction: number;


}
