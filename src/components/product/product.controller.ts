import {
  Controller,
  Body,
  Post,
  ValidationPipe,
  UsePipes,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { ProductService } from '../../services/product.services';
import { ProductDto } from '../../data_tranfer_object/product.dto';
import { ProductEntity } from '../../entity/product.entity';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { GetUser } from '../../library/config/get-user.decorator';
import { User } from '../../entity/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ProductCodeDto } from '../../data_tranfer_object/productCode.dto';
import { RepositoryModel } from '../../library/config/repository.model';

@Controller('Product')
@ApiTags('Product Controller')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post('/CreateProduct')
  @UsePipes(ValidationPipe)
  async createProduct(
    @Body() productDto: ProductDto,
    @GetUser() user: User,
  ) {
    var result = new RepositoryModel();
    var data = await this.productService.createProduct(productDto, user);
    if (data) {
      return result.InsertSuccess(data);
    } else {
      return result.SetNoContent();
    }
  }

  @Get('/GetProduct')
  @UsePipes(ValidationPipe)
  async getAllProduct() {
    var result = new RepositoryModel();
    const data = await this.productService.getAllProduct();
    if (data) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }

  }

  @Get('/GetProductByCode/:ProductCode')
  @UsePipes(ValidationPipe)
  async getProductByCode(@Param() productCode: ProductCodeDto) {
    var result = new RepositoryModel();
    var data = await this.productService.getProducCodeByCode(productCode);
    console.log('dataget product', data);
    try {
      if (data) {
        return result.GetSuccess(data);
      } else {
        return result.SetNoContent();
      }
    } catch (error) {
      return result.SetError(error.message);
    }

  }

  updateProduct() { }
}
