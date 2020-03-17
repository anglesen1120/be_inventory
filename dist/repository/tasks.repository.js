"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../entity/task.entity");
const task_enuml_1 = require("../share_models/task.enuml");
const common_1 = require("@nestjs/common");
let TaskRepository = class TaskRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logTaskRepository = new common_1.Logger('TaskRepository');
    }
    async createTask(createTaskDto, user) {
        const { title, description } = createTaskDto;
        const task = new task_entity_1.TaskEntity();
        task.title = title;
        task.description = description;
        task.status = task_enuml_1.TaskStatus.OPEN;
        task.user = user;
        task.createby = user.id;
        return task.save();
    }
    async getTasksWithFillter(filterDto, user) {
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
        }
        catch (error) {
            this.logTaskRepository.error(`The user '${user.username}' has error during query for Task with Error: '${error}'`);
            throw new common_1.InternalServerErrorException();
        }
    }
};
TaskRepository = __decorate([
    typeorm_1.EntityRepository(task_entity_1.TaskEntity)
], TaskRepository);
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=tasks.repository.js.map