import { Repository, EntityRepository } from "typeorm";
import { TaskEntity } from "../entity/task.entity";
import { CreateTaskDTO } from "../data_tranfer_object/create-task.dto";
import { TaskStatus } from "../share_models/task.enuml";
import { GetTaskFilterDto } from "../data_tranfer_object/get-tasks-fillter.dto";
import { User } from "../entity/user.entity";
import { Logger, InternalServerErrorException } from "@nestjs/common";


@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{
    private logTaskRepository = new Logger('TaskRepository');
    async createTask(
        createTaskDto: CreateTaskDTO,
        user: User,
    ): Promise<TaskEntity> {
        const { title, description } = createTaskDto;
        const task = new TaskEntity();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        task.user = user;
        task.createby = user.id;

        return task.save();
        // return task;

    }


    async getTasksWithFillter(
        filterDto: GetTaskFilterDto,
        user: User,
    ): Promise<TaskEntity[]> {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('Task');
        query.where('Task.userId = :userId', { userId: user.id });
        if (status) {
            query.andWhere('Task.status = :status', { status });
        }
        if (search) {
            query.andWhere('(Task.title like :search OR Task.description LIKE :search)', { search: `%${search}$%` });
        }
        try {
            this.logTaskRepository.verbose(`The user '${user.username}' retrieving Tasks with DT: ${JSON.stringify(filterDto)}`);
            return await query.getMany();
        } catch (error) {
            this.logTaskRepository.error(`The user '${user.username}' has error during query for Task with Error: '${error}'`);
            throw new InternalServerErrorException();
        }
    }

}