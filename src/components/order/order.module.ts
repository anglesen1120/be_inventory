import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderHeaderRepository } from '../../repository/orderheader.repository';
import { OrderController } from './order.controller';
import { OrderService } from '../../services/order.services';
import { AuthenticaionModule } from '../authentication/authenticaion.module';
import { CalculatorServices } from '../../services/calculator.services';
import { CaculartorRepository } from '../../repository/calculator.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderHeaderRepository, CaculartorRepository]),
    AuthenticaionModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, CalculatorServices],
})
export class OrderModule { }
