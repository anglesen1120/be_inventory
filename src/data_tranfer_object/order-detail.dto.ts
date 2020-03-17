import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OrderDetailDto {
  @IsNotEmpty()
  @ApiProperty()
  productcode: string;


  @IsNotEmpty()
  @ApiProperty()
  productName: string;

  @IsNotEmpty()
  @ApiProperty()
  productdescription: string;

  @IsNotEmpty()
  @ApiProperty()
  productquantity: number;

  @IsNotEmpty()
  @ApiProperty()
  OrderCode: string;

  @IsNotEmpty()
  @ApiProperty()
  ordercodeid?: number;

  @IsNotEmpty()
  @ApiProperty()
  salesPrice: number;


  @IsNotEmpty()
  @ApiProperty()
  totalSales: number;

}
