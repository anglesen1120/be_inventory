import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from '../../services/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from '../../repository/tasks.repository';
import { AuthenticaionModule } from '../authentication/authenticaion.module';
import { StatusReponseServices } from '../../services/status-reponse.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository]), AuthenticaionModule],
  controllers: [TaskController],
  providers: [TaskService,StatusReponseServices],
})
export class TaskModule {}
