import { createParamDecorator } from '@nestjs/common';
import { OrderHeaderEntity } from '../../entity/order-header.entity';

export const GetOrderId = createParamDecorator(
  (data, request): OrderHeaderEntity => {
    // console.log('data recode', data);
    return data ? request.body && request.body[data] : request.body;
  },
);
