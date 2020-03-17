import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @IsNotEmpty()
  @ApiProperty()
  ProductCode: string;

  @IsNotEmpty()
  @ApiProperty()
  ProductName: string;

  @IsNotEmpty()
  @ApiProperty()
  ProductDescription: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  ProductUnit: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  ProductPrimaryPrice: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  ProductSecondaryPrice: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  ProductVAT: number;


  @ApiProperty()
  isActive?: boolean;
}
