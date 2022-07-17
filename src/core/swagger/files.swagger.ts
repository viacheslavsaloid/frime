import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FilesModule } from 'src/files/files.module';
import { FILES } from '../../files';
import { API, SWAGGER } from '../../shared';
import { UsersModule } from '../../users';

export function filesSwagger(app: INestApplication) {
  const config = new DocumentBuilder().setTitle(FILES).build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [FilesModule],
  });
  SwaggerModule.setup(`${API}/${SWAGGER}/${FILES}`, app, document);
}
