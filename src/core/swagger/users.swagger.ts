import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API, SWAGGER } from 'src/shared';
import { USERS, UsersModule } from 'src/users';

export function usersSwagger(app: INestApplication) {
  const config = new DocumentBuilder().setTitle(USERS).build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [UsersModule],
  });
  SwaggerModule.setup(`${API}/${SWAGGER}/${USERS}`, app, document);
}
