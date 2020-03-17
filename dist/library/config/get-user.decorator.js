"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.GetUser = common_1.createParamDecorator((data, request) => {
    return request.user;
});
//# sourceMappingURL=get-user.decorator.js.map