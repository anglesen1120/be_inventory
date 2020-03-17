import { TaskStatus } from '../share_models/task.enuml';
import { User } from './user.entity';
import { BaseModelEntity } from '../share_models/base.entity';
export declare class TaskEntity extends BaseModelEntity<TaskEntity> {
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
    userId?: number;
}
