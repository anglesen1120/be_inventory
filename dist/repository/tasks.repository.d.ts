import { Repository } from "typeorm";
import { TaskEntity } from "../entity/task.entity";
import { CreateTaskDTO } from "../data_tranfer_object/create-task.dto";
import { GetTaskFilterDto } from "../data_tranfer_object/get-tasks-fillter.dto";
import { User } from "../entity/user.entity";
export declare class TaskRepository extends Repository<TaskEntity> {
    private logTaskRepository;
    createTask(createTaskDto: CreateTaskDTO, user: User): Promise<TaskEntity>;
    getTasksWithFillter(filterDto: GetTaskFilterDto, user: User): Promise<TaskEntity[]>;
}
