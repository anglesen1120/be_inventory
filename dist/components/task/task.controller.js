"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_enuml_1 = require("../../share_models/task.enuml");
const create_task_dto_1 = require("../../data_tranfer_object/create-task.dto");
const task_status_validation_pipes_1 = require("../../library/pipes/task-status-validation.pipes");
const get_tasks_fillter_dto_1 = require("../../data_tranfer_object/get-tasks-fillter.dto");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../../library/config/get-user.decorator");
const user_entity_1 = require("../../entity/user.entity");
const task_service_1 = require("../../services/task.service");
const swagger_1 = require("@nestjs/swagger");
const status_reponse_service_1 = require("../../services/status-reponse.service");
const repository_model_1 = require("../..//library/config/repository.model");
let TaskController = class TaskController {
    constructor(taskService, reponseStatus) {
        this.taskService = taskService;
        this.reponseStatus = reponseStatus;
        this.taskControllerLogger = new common_1.Logger('TaskController');
    }
    async getAllTasks(filterDto, user) {
        const result = await this.taskService.getTasksWithFillter(filterDto, user);
        if (result !== undefined) {
            this.taskControllerLogger.verbose(`User ${user.username} retrieving all tasks. Filter: ${JSON.stringify(filterDto)} . Data : ${JSON.stringify(result)}`);
        }
        return result;
    }
    getTaskById(id, user) {
        console.log('user decora', user);
        this.taskControllerLogger.verbose(`User '${user.username}' retrieving with taskid : ${id}`);
        return this.taskService.getTaskById(id, user);
    }
    async createTask(createTaskDto, user) {
        var data = await this.taskService.createTask(createTaskDto, user);
        var result = new repository_model_1.RepositoryModel;
        console.log('result', result.InsertSuccess({ pData: { pData: data } }));
        return result.InsertSuccess({ pData: { pData: data } });
    }
    deleteTask(id, user) {
        return this.taskService.deleteTask(id, user);
    }
    updateStatus(id, user, status) {
        return this.taskService.updateStatusTask(id, status, user);
    }
};
__decorate([
    common_1.Get('/GetAllTask'),
    swagger_1.ApiQuery({ name: 'status', required: false }),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tasks_fillter_dto_1.GetTaskFilterDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    common_1.Get('GetTaskById/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    common_1.Post('/CreateTask'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()), __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDTO, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    common_1.Delete('DeleteTask/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
__decorate([
    common_1.Put('UpdateTask/:id'),
    __param(0, common_1.Param('id')),
    __param(1, get_user_decorator_1.GetUser()),
    __param(2, common_1.Body('status', task_status_validation_pipes_1.TaskStatusValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateStatus", null);
TaskController = __decorate([
    common_1.Controller('Task'),
    common_1.UseGuards(passport_1.AuthGuard()),
    swagger_1.ApiTags('Task Controller'),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        status_reponse_service_1.StatusReponseServices])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map