import { UserRepository } from '../repository/user.repository';
import { AuthenticationDto } from '../data_tranfer_object/authentication.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entity/user.entity';
export declare class AuthenticaionService {
    private userReporsitory;
    private jwtService;
    constructor(userReporsitory: UserRepository, jwtService: JwtService);
    registerUser(authentication: AuthenticationDto): Promise<User>;
    loginUser(authentication: AuthenticationDto): Promise<{
        Token: string;
    }>;
    checkLogin(token: string): any;
}
