import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from '../../repository/product.repository';
import { AuthenticaionModule } from '../authentication/authenticaion.module';
import { ProductService } from '../../services/product.services';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository]), AuthenticaionModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
