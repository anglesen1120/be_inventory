"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const authentication_dto_1 = require("../../data_tranfer_object/authentication.dto");
const authenticaion_service_1 = require("../../services/authenticaion.service");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../entity/user.entity");
const repository_model_1 = require("../../library/config/repository.model");
const check_login_dto_1 = require("../../data_tranfer_object/check-login.dto");
let AuthenticaionController = class AuthenticaionController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async registerUser(authentication) {
        var result = new repository_model_1.RepositoryModel();
        var data = await this.authenticationService.registerUser(authentication);
        if (data) {
            return result.InsertSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    async loginUser(authentication) {
        var data = await this.authenticationService.loginUser(authentication);
        var result = new repository_model_1.RepositoryModel;
        console.log('result', data);
        console.log('result fe', result.GetSuccess(data));
        if (data) {
            return result.GetSuccess(data);
        }
        else {
            return result.SetNoContent();
        }
    }
    checkLogin(token) {
        var result = new repository_model_1.RepositoryModel;
        const data = this.authenticationService.checkLogin(token.token);
        console.log('User', data.username);
        if (data.username) {
            return result.GetSuccess(data.username);
        }
        else {
            throw new common_1.HttpException('test', 400);
        }
    }
};
__decorate([
    common_1.Post('/Register'),
    swagger_1.ApiCreatedResponse({ description: 'Create suscceesfull..!', type: user_entity_1.User }),
    swagger_1.ApiBadRequestResponse(),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationDto]),
    __metadata("design:returntype", Promise)
], AuthenticaionController.prototype, "registerUser", null);
__decorate([
    common_1.Post('/Login'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationDto]),
    __metadata("design:returntype", Promise)
], AuthenticaionController.prototype, "loginUser", null);
__decorate([
    common_1.Post('/CheckLogin'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_login_dto_1.CheckLoginDto]),
    __metadata("design:returntype", void 0)
], AuthenticaionController.prototype, "checkLogin", null);
AuthenticaionController = __decorate([
    common_1.Controller('Authenticaion'),
    swagger_1.ApiTags('Authenticaion'),
    __metadata("design:paramtypes", [authenticaion_service_1.AuthenticaionService])
], AuthenticaionController);
exports.AuthenticaionController = AuthenticaionController;
//# sourceMappingURL=authenticaion.controller.js.map