import { Controller, UseGuards, Post, Body, Get, UsePipes, ValidationPipe, Put, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PurcharOrderService } from '../../services/purcharsing-order.services';

import { GetUser } from '../../library/config/get-user.decorator';
import { User } from '../../entity/user.entity';
import PurcharseOrderHeaderDto from '../../data_tranfer_object/purchare-order-header.dto';
import { RepositoryModel } from '../../library/config/repository.model';

@Controller('PurChareOrder')
@ApiTags('PurChareOrder')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class PurchareorderController {
    constructor(
        private purchareOrderServices: PurcharOrderService
    ) { }


    @Post('/CreatePurchareOrder')
    async createPurChareOrder(
        @Body() purchareorder: PurcharseOrderHeaderDto,
        @GetUser() user: User
    ) {
        var result = new RepositoryModel();
        console.log('orderhearder data');
        var data = await this.purchareOrderServices.createPurcharOrder(purchareorder, user);
        console.log('orderhearder data', data);
        if (data.id != null && data.purcharorderDetail != null) {
            return result.InsertSuccess(data);
        } else {
            return result.SetNoContent();
        }

    }



    @Get('/GetListPurchareOrder')
    @UsePipes(ValidationPipe)
    async getOrderHeaderCreate() {
        var result = new RepositoryModel();
        const data = await this.purchareOrderServices.getPurchareOrderHeader();
        if (data.length > 1) {
            return result.GetSuccess(data);

        } else {
            return result.SetNoContent();
        }
    }




    @Put('/CancelPurchareOrder/:id')
    @UsePipes(ValidationPipe)
    async createCancelSalesOrder(
      @Param('id') id: number,
      @GetUser() user: User) {
      var result = new RepositoryModel();
      const data = await this.purchareOrderServices.createCancelOrderHeader(id, user);
      if (data) {
        return result.GetSuccess(data);
      } else {
        return result.SetNoContent();
      }
  
    }
}
