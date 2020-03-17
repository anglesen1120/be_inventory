import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { AuthenticationDto } from "../data_tranfer_object/authentication.dto";
export declare class UserRepository extends Repository<User> {
    registerUser(authenticationDto: AuthenticationDto): Promise<User>;
    validateUserPassword(authentication: AuthenticationDto): Promise<string>;
    private hashPassword;
}
