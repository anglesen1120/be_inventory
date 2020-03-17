import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCodeDto {
  @IsNotEmpty()
  @ApiProperty()
  ProductCode: string;

  
}
