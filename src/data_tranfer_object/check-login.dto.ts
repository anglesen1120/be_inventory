import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTaskDTO } from './create-task.dto';

export class CheckLoginDto {
  @IsString()
  @MinLength(4)
  
  @ApiProperty()
  token: string;

}