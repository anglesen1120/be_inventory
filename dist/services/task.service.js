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
const tasks_repository_1 = require("../repository/tasks.repository");
const typeorm_1 = require("@nestjs/typeorm");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTasks() {
        return this.taskRepository.find();
    }
    async getTasksWithFillter(filterDto, user) {
        return this.taskRepository.getTasksWithFillter(filterDto, user);
    }
    async getTaskById(id, user) {
        const result = await this.taskRepository.findOne({ where: { id, userId: user.id } });
        if (!result) {
            throw new common_1.NotFoundException(`Task with ID '${id}' not found for user '${user.id}'`);
        }
        return result;
    }
    async createTask(createTaskDto, user) {
        return this.taskRepository.createTask(createTaskDto, user);
    }
    async deleteTask(id, user) {
        const result = await this.taskRepository.delete({ id, userId: user.id });
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Task with ID '${id}' not found or you not allow for this '${id}'`);
        }
    }
    async updateStatusTask(id, status, user) {
        const taskID = await this.getTaskById(id, user);
        taskID.status = status;
        return taskID.save();
    }
};
TaskService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tasks_repository_1.TaskRepository)),
    __metadata("design:paramtypes", [tasks_repository_1.TaskRepository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map