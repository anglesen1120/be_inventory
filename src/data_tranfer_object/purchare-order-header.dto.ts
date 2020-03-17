import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderDetailDto } from './order-detail.dto';
import { PurcharseOrderDetailDto } from './purchare-order-details.dto';


export default class PurcharseOrderHeaderDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly purcharordercode: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly customercode: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly customername: string;


    @ApiProperty()
    @IsNotEmpty()
    readonly totalpurcharvalueorders: number;


    @ApiProperty()
    @IsNotEmpty()
    purcharorderstatus: number;




    @ApiProperty({ type: [PurcharseOrderDetailDto] })
    @IsNotEmpty()
    readonly purcharseorderdetail: PurcharseOrderDetailDto[];
}
