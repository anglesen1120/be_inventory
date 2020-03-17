import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  CustomerCode: string;

  @ApiProperty()
  CustomerName: string;

  @ApiProperty()
  Address: string;

  @ApiPropertyOptional()
  District: string;

  @ApiPropertyOptional()
  Ward: string;

  @ApiPropertyOptional()
  City: string;
}
