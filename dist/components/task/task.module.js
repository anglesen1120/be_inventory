"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_controller_1 = require("./task.controller");
const task_service_1 = require("../../services/task.service");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_repository_1 = require("../../repository/tasks.repository");
const authenticaion_module_1 = require("../authentication/authenticaion.module");
const status_reponse_service_1 = require("../../services/status-reponse.service");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tasks_repository_1.TaskRepository]), authenticaion_module_1.AuthenticaionModule],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService, status_reponse_service_1.StatusReponseServices],
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map