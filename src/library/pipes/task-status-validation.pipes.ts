import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../../share_models/task.enuml";

export class TaskStatusValidationPipe implements PipeTransform{
    readonly allowedStatus = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE

    ];
    transform(value: any, metadata : ArgumentMetadata){
        // value = value.toUpperCase();9
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`'${value}' is an invalid status`);
        }

        return value;
    }

    private isStatusValid(status : any){
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}