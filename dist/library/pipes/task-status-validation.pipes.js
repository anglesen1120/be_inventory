"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const task_enuml_1 = require("../../share_models/task.enuml");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatus = [
            task_enuml_1.TaskStatus.OPEN,
            task_enuml_1.TaskStatus.IN_PROGRESS,
            task_enuml_1.TaskStatus.DONE
        ];
    }
    transform(value, metadata) {
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`'${value}' is an invalid status`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipes.js.map