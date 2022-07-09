import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API, SWAGGER } from 'src/shared';

export function appSwagger(app: INestApplication) {
  const config = new DocumentBuilder().setTitle('app').addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${API}/${SWAGGER}`, app, document);
}
