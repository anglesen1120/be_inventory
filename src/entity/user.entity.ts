import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Expose, Exclude } from 'class-transformer';
import { TaskEntity } from './task.entity';
import { BaseModelEntity } from '../share_models/base.entity';

@Entity('User')
@Unique(['username'])
export class User extends BaseModelEntity<User> {

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  slat: string;

  @OneToMany(
    type => TaskEntity,
    tasks => tasks.user,
    { eager: false },
  )
  tasks: TaskEntity[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.slat);
    return hash === this.password;
  }
}
