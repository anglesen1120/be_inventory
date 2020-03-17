import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PurcharseOrderDetailDto {
  @IsNotEmpty()
  @ApiProperty()
  purcharordercode: string;


  @IsNotEmpty()
  @ApiProperty()
  productcode: string;


  @IsNotEmpty()
  @ApiProperty()
  productname: string;

  @IsNotEmpty()
  @ApiProperty()
  productdescription: string;

  @IsNotEmpty()
  @ApiProperty()
  productquantity: number;

  @IsNotEmpty()
  @ApiProperty()
  purcharProductPrice: number;

  @IsNotEmpty()
  @ApiProperty()
  ordercodeid?: number;

  @IsNotEmpty()
  @ApiProperty()
  totalValuePurchar: number;


 

}
