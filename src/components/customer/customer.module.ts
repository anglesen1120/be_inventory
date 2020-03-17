import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerServices } from '../../services/customer.services';
import { CustomerRepository } from '../../repository/customer.repository';
import { AuthenticaionModule } from '../authentication/authenticaion.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([CustomerRepository]),
        AuthenticaionModule
    ],
    controllers:[CustomerController],
    providers:[CustomerServices]
})
export class CustomerModule {}
