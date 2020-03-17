"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const purchareorder_module_1 = require("./components/purchare-order/purchareorder.module");
const common_1 = require("@nestjs/common");
const task_module_1 = require("./components/task/task.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./library/config/typeorm.config");
const authenticaion_module_1 = require("./components/authentication/authenticaion.module");
const order_module_1 = require("./components/order/order.module");
const product_module_1 = require("./components/product/product.module");
const customer_module_1 = require("./components/customer/customer.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            purchareorder_module_1.PurchareorderModule,
            task_module_1.TaskModule,
            authenticaion_module_1.AuthenticaionModule,
            order_module_1.OrderModule,
            product_module_1.ProductModule,
            customer_module_1.CustomerModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'public'),
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map