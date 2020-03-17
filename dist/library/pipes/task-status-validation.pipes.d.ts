import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { TaskStatus } from "../../share_models/task.enuml";
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus: TaskStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
