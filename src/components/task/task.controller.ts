import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Query,
  UseGuards,
  Logger,
} from '@nestjs/common';

import { TaskStatus } from '../../share_models/task.enuml';
import { CreateTaskDTO } from '../../data_tranfer_object/create-task.dto';
import { TaskStatusValidationPipe } from '../../library/pipes/task-status-validation.pipes';
import { TaskEntity } from '../../entity/task.entity';
import { GetTaskFilterDto } from '../../data_tranfer_object/get-tasks-fillter.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../library/config/get-user.decorator';
import { User } from '../../entity/user.entity';
import { TaskService } from '../../services/task.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiQuery,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { StatusReponseServices } from '../../services/status-reponse.service';
import { RepositoryModel } from '../..//library/config/repository.model';

@Controller('Task')
@UseGuards(AuthGuard())
@ApiTags('Task Controller')
// @ApiBearerAuth()
export class TaskController {
  private taskControllerLogger = new Logger('TaskController');
  constructor(
    private taskService: TaskService,
    private reponseStatus: StatusReponseServices,
  ) {}

  @Get('/GetAllTask')
  @ApiQuery({ name: 'status', required: false })
  async getAllTasks(
    @Query(ValidationPipe) filterDto: GetTaskFilterDto,
    @GetUser() user: User,
  ): Promise<TaskEntity[]> {
    //this.taskControllerLogger.verbose(`User ${user.username} retrieving all tasks. Filter: ${JSON.stringify(filterDto)}`);
    const result = await this.taskService.getTasksWithFillter(filterDto, user);
    if (result !== undefined) {
      this.taskControllerLogger.verbose(
        `User ${user.username} retrieving all tasks. Filter: ${JSON.stringify(
          filterDto,
        )} . Data : ${JSON.stringify(result)}`,
      );
    }
    return result;
  }

  @Get('GetTaskById/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<TaskEntity> {
    console.log('user decora', user);
    this.taskControllerLogger.verbose(
      `User '${user.username}' retrieving with taskid : ${id}`,
    );
    return this.taskService.getTaskById(id, user);
  }

  @Post('/CreateTask')
  @UsePipes(ValidationPipe)
  async createTask(@Body() createTaskDto: CreateTaskDTO, @GetUser() user: User) {
    // console.log('result task', this.taskService.createTask(createTaskDto, user));
    var data = await this.taskService.createTask(createTaskDto, user);
    var result = new RepositoryModel;
    console.log('result', result.InsertSuccess({ pData: { pData: data } }));
    return result.InsertSuccess({ pData: { pData: data } });
  }

  @Delete('DeleteTask/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.taskService.deleteTask(id, user);
  }

  @Put('UpdateTask/:id')
  updateStatus(
    @Param('id') id: number,
    @GetUser() user: User,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Promise<TaskEntity> {
    return this.taskService.updateStatusTask(id, status, user);
  }
}
