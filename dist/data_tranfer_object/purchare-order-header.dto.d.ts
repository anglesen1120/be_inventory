import { PurcharseOrderDetailDto } from './purchare-order-details.dto';
export default class PurcharseOrderHeaderDto {
    readonly purcharordercode: string;
    readonly customercode: string;
    readonly customername: string;
    readonly totalpurcharvalueorders: number;
    purcharorderstatus: number;
    readonly purcharseorderdetail: PurcharseOrderDetailDto[];
}
