import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import config from './library/config/config.json';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './library/http-exception/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('Application_Log');
  const app = await NestFactory.create(AppModule);
  const port = config.application.port;

  const options = new DocumentBuilder()
    .setTitle(config.swaggerconfig.setTitle)
    .setDescription(config.swaggerconfig.setDescription)
    .setVersion(config.swaggerconfig.setVersion)
    .addTag(config.swaggerconfig.addTag)

    .addServer(
      `${config.swaggerconfig.domain_pro}/api`,
      config.swaggerconfig.setTitle,
    )

    .addServer(
      `${config.swaggerconfig.domain_pro}/api`,
      config.swaggerconfig.setTitle,
    )

    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      fillter: true,
      showRequestDuration: true,
    },
  });
  logger.log(
    `Swagger Docs enable : ${config.swaggerconfig.domain_pro}/api`,
  );
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors({
    origin: 'http://localhost:4200'
    //allowedHeaders : ('Access-Control-Allow-Origin', '*')
  });
  await app.listen(port, () => {
    logger.log(`Application listening on port ${port}`);

    logger.log(
      `Application is enable on domain :  ${config.swaggerconfig.domain_pro}/api`,
    );

    logger.log(
      `Application is enable on domain :  ${config.swaggerconfig.domain_pro}/api`,
    );
  });
}
bootstrap();
