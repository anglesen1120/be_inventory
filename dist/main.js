"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_json_1 = __importDefault(require("./library/config/config.json"));
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("./library/http-exception/http-exception.filter");
async function bootstrap() {
    const logger = new common_1.Logger('Application_Log');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = config_json_1.default.application.port;
    const options = new swagger_1.DocumentBuilder()
        .setTitle(config_json_1.default.swaggerconfig.setTitle)
        .setDescription(config_json_1.default.swaggerconfig.setDescription)
        .setVersion(config_json_1.default.swaggerconfig.setVersion)
        .addTag(config_json_1.default.swaggerconfig.addTag)
        .addServer(`${config_json_1.default.swaggerconfig.domain_pro}/api`, config_json_1.default.swaggerconfig.setTitle)
        .addServer(`${config_json_1.default.swaggerconfig.domain_pro}/api`, config_json_1.default.swaggerconfig.setTitle)
        .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            docExpansion: 'none',
            fillter: true,
            showRequestDuration: true,
        },
    });
    logger.log(`Swagger Docs enable : ${config_json_1.default.swaggerconfig.domain_pro}/api`);
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.enableCors({
        origin: 'http://localhost:4200'
    });
    await app.listen(port, () => {
        logger.log(`Application listening on port ${port}`);
        logger.log(`Application is enable on domain :  ${config_json_1.default.swaggerconfig.domain_pro}/api`);
        logger.log(`Application is enable on domain :  ${config_json_1.default.swaggerconfig.domain_pro}/api`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map