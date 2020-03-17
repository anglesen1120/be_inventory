import { TaskEntity } from './task.entity';
import { BaseModelEntity } from '../share_models/base.entity';
export declare class User extends BaseModelEntity<User> {
    username: string;
    password: string;
    slat: string;
    tasks: TaskEntity[];
    validatePassword(password: string): Promise<boolean>;
}
