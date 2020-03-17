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
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("../repository/user.repository");
const jwt_1 = require("@nestjs/jwt");
let AuthenticaionService = class AuthenticaionService {
    constructor(userReporsitory, jwtService) {
        this.userReporsitory = userReporsitory;
        this.jwtService = jwtService;
    }
    async registerUser(authentication) {
        return this.userReporsitory.registerUser(authentication);
    }
    async loginUser(authentication) {
        const result = await this.userReporsitory.validateUserPassword(authentication);
        if (!result) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = { username: result };
        const Token = this.jwtService.sign(payload);
        return { Token };
    }
    checkLogin(token) {
        const result = this.jwtService.verify(token.replace(/\"/g, ""));
        console.log("result check login", result);
        return result;
    }
};
AuthenticaionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthenticaionService);
exports.AuthenticaionService = AuthenticaionService;
//# sourceMappingURL=authenticaion.service.js.map