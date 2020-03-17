import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from '../share_models/task.enuml';

import { CreateTaskDTO } from '../data_tranfer_object/create-task.dto';
import { TaskRepository } from '../repository/tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entity/task.entity';
import { GetTaskFilterDto } from '../data_tranfer_object/get-tasks-fillter.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,

    ) { }

    async getAllTasks(): Promise<TaskEntity[]> {
        return this.taskRepository.find();
    }

    async getTasksWithFillter(
        filterDto: GetTaskFilterDto,
        user: User
    ): Promise<TaskEntity[]> {
        return this.taskRepository.getTasksWithFillter(filterDto, user);

    }

    async getTaskById(
        id: number,
        user: User,
    ): Promise<TaskEntity> {
        const result = await this.taskRepository.findOne({ where: { id, userId: user.id } });
        if (!result) {
            throw new NotFoundException(`Task with ID '${id}' not found for user '${user.id}'`);
        }
        return result;

    }

    async createTask(
        createTaskDto: CreateTaskDTO,
        user: User
    ): Promise<TaskEntity> {
        return this.taskRepository.createTask(createTaskDto, user);

    }



    async deleteTask(
        id: number,
        user: User) {
        const result = await this.taskRepository.delete({ id, userId: user.id });

        if (result.affected == 0) {
            throw new NotFoundException(`Task with ID '${id}' not found or you not allow for this '${id}'`);
        }
    }

    async updateStatusTask(
        id: number, status: TaskStatus,
        user: User
    ): Promise<TaskEntity> {
        const taskID = await this.getTaskById(id, user);
        taskID.status = status;
        return taskID.save();
    }



}
