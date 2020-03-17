import { AuthenticationDto } from '../../data_tranfer_object/authentication.dto';
import { AuthenticaionService } from '../../services/authenticaion.service';
import { CheckLoginDto } from '../../data_tranfer_object/check-login.dto';
export declare class AuthenticaionController {
    private authenticationService;
    constructor(authenticationService: AuthenticaionService);
    registerUser(authentication: AuthenticationDto): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    loginUser(authentication: AuthenticationDto): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
    checkLogin(token: CheckLoginDto): Promise<import("../../data_tranfer_object/repository-model.dto").RepositoryDto>;
}
