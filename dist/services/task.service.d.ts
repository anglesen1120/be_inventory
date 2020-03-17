import { TaskStatus } from '../share_models/task.enuml';
import { CreateTaskDTO } from '../data_tranfer_object/create-task.dto';
import { TaskRepository } from '../repository/tasks.repository';
import { TaskEntity } from '../entity/task.entity';
import { GetTaskFilterDto } from '../data_tranfer_object/get-tasks-fillter.dto';
import { User } from '../entity/user.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getAllTasks(): Promise<TaskEntity[]>;
    getTasksWithFillter(filterDto: GetTaskFilterDto, user: User): Promise<TaskEntity[]>;
    getTaskById(id: number, user: User): Promise<TaskEntity>;
    createTask(createTaskDto: CreateTaskDTO, user: User): Promise<TaskEntity>;
    deleteTask(id: number, user: User): Promise<void>;
    updateStatusTask(id: number, status: TaskStatus, user: User): Promise<TaskEntity>;
}
