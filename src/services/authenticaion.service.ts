import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { AuthenticationDto } from '../data_tranfer_object/authentication.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../library/config/jwt-payload.interface';
import { User } from '../entity/user.entity';


@Injectable()
export class AuthenticaionService {
  constructor(
    @InjectRepository(UserRepository)
    private userReporsitory: UserRepository,
    private jwtService: JwtService,
  ) {}

  async registerUser(authentication: AuthenticationDto): Promise<User> {
    return this.userReporsitory.registerUser(authentication);
  }

  async loginUser(
    authentication: AuthenticationDto,
  ): Promise<{ Token: string }> {
    const result = await this.userReporsitory.validateUserPassword(
      authentication,
    );

    if (!result) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { username: result };
    const Token = this.jwtService.sign(payload);

    return { Token };
  }


  checkLogin (token: string){
    const result = this.jwtService.verify(token.replace(/\"/g, ""));
    console.log("result check login", result);
    return result;

    
  }
}
