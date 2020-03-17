import { PurchareorderModule } from './components/purchare-order/purchareorder.module';
import { Module } from '@nestjs/common';
import { TaskModule } from './components/task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './library/config/typeorm.config';
import { AuthenticaionModule } from './components/authentication/authenticaion.module';
import { OrderModule } from './components/order/order.module';
import { ProductModule } from './components/product/product.module';
import { CustomerModule } from './components/customer/customer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
        PurchareorderModule, 
    TaskModule,
    AuthenticaionModule,
    OrderModule,
    ProductModule,
    CustomerModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
