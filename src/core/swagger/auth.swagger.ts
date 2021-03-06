import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API, SWAGGER } from 'src/shared';

import { AuthModule, AUTH } from '../../auth';

export function authSwagger(app: INestApplication) {
  const config = new DocumentBuilder().setTitle(AUTH).addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [AuthModule],
  });
  SwaggerModule.setup(`${API}/${SWAGGER}/${AUTH}`, app, document);
}
