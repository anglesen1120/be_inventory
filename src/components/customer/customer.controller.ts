import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CustomerServices } from '../../services/customer.services';
import { CustomerDto } from '../../data_tranfer_object/customer.dto';
import { CustomerEntity } from '../../entity/customer.entity';
import { CustomerCode } from '../../data_tranfer_object/customerCode.dto';
import { RepositoryModel } from '../../library/config/repository.model';
import { GetUser } from '../../library/config/get-user.decorator';
import { User } from '../../entity/user.entity';

@Controller('Customer')
@ApiTags('Customer Controller')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class CustomerController {
  constructor(private customerService: CustomerServices) { }

  @Post('/CreateCustomer')
  async createCustomer(
    @Body() customerDto: CustomerDto,
    @GetUser() user: User) {
    var result = new RepositoryModel();
    var data = await this.customerService.createCustomer(customerDto, user);
    if (data) {
      return result.InsertSuccess(data);
    } else {
      return result.SetNoContent();
    }
  }






  @Get('/GetAllCustormer')
  @UsePipes(ValidationPipe)
  async getAllProduct() {
    var result = new RepositoryModel();
    const data = await this.customerService.getAllCustomer();
    console.log('result search', result);
    if (data.length > 0) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }

  }




  @Get('/GetCustormerByCode/:CustormerCode')
  @UsePipes(ValidationPipe)
  async GetCustormerByCode(@Param() customerCode: CustomerCode) {

    var result = new RepositoryModel();
    var data = await this.customerService.getCustomerByCode(customerCode);
    console.log('result search', data);
    if (data) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }



  }
}
