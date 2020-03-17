import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurcharsingHeaderRepository } from '../../repository/purcharsing-order.repository';
import { AuthenticaionModule } from '../authentication/authenticaion.module';
import { PurchareorderController } from './purchareorder.controller';
import { PurcharOrderService } from '../../services/purcharsing-order.services';

@Module({
    imports: [
        TypeOrmModule.forFeature([PurcharsingHeaderRepository]),
        AuthenticaionModule
    ],
    controllers: [PurchareorderController],
    providers: [PurcharOrderService],
})
export class PurchareorderModule {}
