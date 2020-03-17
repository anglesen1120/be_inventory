import { Entity, Column } from 'typeorm';
import { BaseModelEntity } from '../share_models/base.entity';



@Entity('Inventory')
export class InventoryEntity extends BaseModelEntity<InventoryEntity> {
  @Column({ type: 'varchar' })
  productcode: string;

  @Column({ type: 'varchar' })
  productname: string;

  @Column()
  productdescription: string;

  @Column({ default: 0 })
  productsalesprice: number;



  @Column({ default: 0 })
  productinpputprice: number;

  @Column({ default: 0 })
  openquantity: number;

  @Column({ default: 0 })
  closequantity: number;

  @Column({ default: 0 })
  inputquantity: number;


  @Column({ default: 0 })
  outputquantity: number;


  @Column({ default: 0 })
  valuesalesproduct: number;


  @Column({ default: 0 })
  valueinputproduct: number;



}
