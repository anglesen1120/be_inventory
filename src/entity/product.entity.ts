import { Entity, Column } from 'typeorm';
import { BaseModelEntity } from '../share_models/base.entity';

@Entity('Product')
export class ProductEntity extends BaseModelEntity<ProductEntity> {
  @Column({ type: 'varchar' })
  ProductCode: string;

  @Column({ type: 'varchar' })
  ProductName: string;

  @Column({ type: 'varchar' })
  ProductDescription: string;

  @Column()
  ProductUnit: number;

  @Column()
  ProductPrimaryPrice: number;

  @Column()
  ProductSecondaryPrice: number;

  @Column()
  ProductVAT: number;

  @Column({ default: true })
  isActive: boolean;
}
