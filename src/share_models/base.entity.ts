import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn


} from 'typeorm';




export class BaseModelEntity<T> extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @CreateDateColumn({ type: 'timestamp' })
  createdate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedate: Date;

  @Column({ nullable: true })
  createby: number;

  @Column({ default: 1 })
  updateby: number;
}
