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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const task_entity_1 = require("./task.entity");
const base_entity_1 = require("../share_models/base.entity");
let User = class User extends base_entity_1.BaseModelEntity {
    async validatePassword(password) {
        const hash = await bcrypt.hash(password, this.slat);
        return hash === this.password;
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "slat", void 0);
__decorate([
    typeorm_1.OneToMany(type => task_entity_1.TaskEntity, tasks => tasks.user, { eager: false }),
    __metadata("design:type", Array)
], User.prototype, "tasks", void 0);
User = __decorate([
    typeorm_1.Entity('User'),
    typeorm_1.Unique(['username'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map