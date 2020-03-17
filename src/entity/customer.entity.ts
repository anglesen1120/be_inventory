import { Entity, Column } from 'typeorm';
import { BaseModelEntity } from '../share_models/base.entity';

@Entity('Customer')
export class CustomerEntity extends BaseModelEntity<CustomerEntity> {
  @Column({ type: 'varchar' })
  CustomerCode: string;

  @Column({ type: 'varchar' })
  CustomerName: string;

  @Column({ type: 'varchar' })
  Address: string;

  @Column({ type: 'varchar' })
  District: string;

  @Column({ type: 'varchar' })
  Ward: string;

  @Column({ type: 'varchar' })
  City: string;
}
