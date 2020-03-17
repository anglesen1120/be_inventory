import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { AuthenticationDto } from '../../data_tranfer_object/authentication.dto';
import { AuthenticaionService } from '../../services/authenticaion.service';

import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { User } from '../../entity/user.entity';
import { RepositoryModel } from '../../library/config/repository.model';
import { CheckLoginDto } from '../../data_tranfer_object/check-login.dto';

import { AuthGuard } from '@nestjs/passport';



@Controller('Authenticaion')
@ApiTags('Authenticaion')
export class AuthenticaionController {
  constructor(private authenticationService: AuthenticaionService) { }

  @Post('/Register')
  @ApiCreatedResponse({ description: 'Create suscceesfull..!', type: User })
  @ApiBadRequestResponse()
  async registerUser(
    @Body(ValidationPipe) authentication: AuthenticationDto,
  ) {
    var result = new RepositoryModel();
    var data = await this.authenticationService.registerUser(authentication);
    if (data) {
      return result.InsertSuccess(data);
    } else {
      return result.SetNoContent();
    }
  }

  @Post('/Login')
  async loginUser(
    @Body(ValidationPipe) authentication: AuthenticationDto,
  ) {
    var data = await this.authenticationService.loginUser(authentication);
    var result = new RepositoryModel;
    console.log('result', data);
    console.log('result fe', result.GetSuccess(data));
    if (data) {
      return result.GetSuccess(data);
    } else {
      return result.SetNoContent();
    }


  }


  @Post('/CheckLogin')
  checkLogin(@Body(ValidationPipe) token: CheckLoginDto) {
    var result = new RepositoryModel;
    const data = this.authenticationService.checkLogin(token.token);
    console.log('User', data.username);
    // return result;

    if (data.username) {
      return result.GetSuccess(data.username);

    } else {
      throw new HttpException('test', 400);
    }

  }
}
