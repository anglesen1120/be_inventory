import { OrderDetailDto } from './order-detail.dto';
export default class OrderHeaderDto {
    readonly ordercode: string;
    readonly customercode: string;
    readonly customername: string;
    readonly totalInvoice: number;
    readonly orderdetail: OrderDetailDto[];
}
