import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskStatus } from '../share_models/task.enuml';
import { User } from './user.entity';
import { BaseModelEntity } from '../share_models/base.entity';

@Entity('Task')
export class TaskEntity extends BaseModelEntity<TaskEntity> {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(
    type => User,
    user => user.tasks,
    { eager: false },
  )
  user: User;

  @Column()
  userId?: number;
}
