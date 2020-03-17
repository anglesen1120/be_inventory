"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const authenticaion_controller_1 = require("./authenticaion.controller");
const authenticaion_service_1 = require("../../services/authenticaion.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("../../repository/user.repository");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("../../library/config/jwt.strategy");
const config_json_1 = __importDefault(require("../../library/config/config.json"));
let AuthenticaionModule = class AuthenticaionModule {
};
AuthenticaionModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository]),
            jwt_1.JwtModule.register({
                secret: config_json_1.default.authentication.secretOrKey,
                signOptions: {
                    expiresIn: config_json_1.default.authentication.expiresIn,
                },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
        ],
        controllers: [authenticaion_controller_1.AuthenticaionController],
        providers: [authenticaion_service_1.AuthenticaionService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], AuthenticaionModule);
exports.AuthenticaionModule = AuthenticaionModule;
//# sourceMappingURL=authenticaion.module.js.map