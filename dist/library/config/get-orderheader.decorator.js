"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.GetOrderId = common_1.createParamDecorator((data, request) => {
    return data ? request.body && request.body[data] : request.body;
});
//# sourceMappingURL=get-orderheader.decorator.js.map