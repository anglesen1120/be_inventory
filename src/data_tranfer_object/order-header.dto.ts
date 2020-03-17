import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderDetailDto } from './order-detail.dto';


export default class OrderHeaderDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly ordercode: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly customercode: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly customername: string;


  @ApiProperty()
  @IsNotEmpty()
  readonly totalInvoice: number;




  @ApiProperty({ type: [OrderDetailDto] })
  @IsNotEmpty()
  readonly orderdetail: OrderDetailDto[];
}
