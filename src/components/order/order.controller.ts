import { Controller, Post, Body, UseGuards, Get, UsePipes, ValidationPipe, Put, Param } from '@nestjs/common';
import { OrderService } from '../../services/order.services';
import { OrderHeaderEntity } from '../../entity/order-header.entity';
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import OrderHeaderDto from '../../data_tranfer_object/order-header.dto';
import { AuthGuard } from '@nestjs/passport';
import { RepositoryModel } from '../../library/config/repository.model';
import { GetUser } from '../../library/config/get-user.decorator';
import { User } from '../../entity/user.entity';
import { CalculatorServices } from '../../services/calculator.services';

@Controller('Order')
@ApiTags('Order')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class OrderController {
  constructor(private orderServices: OrderService, private calcualator: CalculatorServices) { }

  @Post('/CreateOrder')
  @ApiOkResponse({ type: OrderHeaderDto })
  async createOrder(@Body() order: OrderHeaderDto, @GetUser() user: User) {
    var result = new RepositoryModel();
    console.log('orderhearder data');
    var data = await this.orderServices.createOrder(order, user);
    console.log('orderhearder data', data.orderDetail);
    if (data.id != null && data.orderDetail != null) {
      return result.InsertSuccess(data);
    } else {
      return result.SetNoContent();
    }
  }

  @Get('/GetOrderCreate')
  @UsePipes(ValidationPipe)
  async getOrderHeaderCreate() {
    var result = new RepositoryModel();
    const data = await this.orderServices.getOrderHeaderCreate();
    if (data.length > 0) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }
  }



  @Get('/GetOrderDetailByOrderID/:headerId')
  @UsePipes(ValidationPipe)
  async getOrderDetailByID(@Param('headerId') headerId: number) {
    var result = new RepositoryModel();
    const data = await this.orderServices.getOrderDetailByID(headerId);
    if (data) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }
  }



  @Put('/CancelSaleOrder/:id')
  @UsePipes(ValidationPipe)
  async createCancelSalesOrder(
    @Param('id') id: number,
    @GetUser() user: User) {
    var result = new RepositoryModel();
    const data = await this.orderServices.createCancelOrderHeader(id, user);
    if (data) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }

  }



  @Get('/CaculatorInventory')
  @UsePipes(ValidationPipe)
  async CaculatorInventory() {
    var result = new RepositoryModel();
    const data = await this.calcualator.checkCalculator();
    if (data) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }

  }
}
