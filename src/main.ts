import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './core/swagger';
import { API, SWAGGER } from './shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(API);

  swagger(app);

  app.enableCors();

  await app.listen(3000);

  console.log(
    `🚀 Application is running on: http://192.168.68.59:${3000}/${API}`,
  );
  console.log(
    `🚀 Swagger is running on: http://192.168.68.59:${3000}/${SWAGGER}`,
  );
}

bootstrap().then();
