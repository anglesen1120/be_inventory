import { TaskStatus } from '../../share_models/task.enuml';
import { CreateTaskDTO } from '../../data_tranfer_object/create-task.dto';
import { TaskEntity } from '../../entity/task.entity';
import { GetTaskFilterDto } from '../../data_tranfer_object/get-tasks-fillter.dto';
import { User } from '../../entity/user.entity';
import { TaskService } from '../../services/task.service';
import { StatusReponseServices } from '../../services/status-reponse.service';
export declare class TaskController {
    private taskService;
    private reponseStatus;
    private taskControllerLogger;
    constructor(taskService: TaskService, reponseStatus: StatusReponseServices);
    getAllTasks(filterDto: GetTaskFilterDto, user: User): Promise<TaskEntity[]>;
    getTaskById(id: number, user: User): Promise<TaskEntity>;
    createTask(createTaskDto: CreateTaskDTO, user: User): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    deleteTask(id: number, user: User): Promise<void>;
    updateStatus(id: number, user: User, status: TaskStatus): Promise<TaskEntity>;
}
