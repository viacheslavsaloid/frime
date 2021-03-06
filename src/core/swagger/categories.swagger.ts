import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API, SWAGGER } from 'src/shared';

import { CATEGORIES, CategoriesModule } from '../../categories';

export function categoriesSwagger(app: INestApplication) {
  const config = new DocumentBuilder().setTitle(CATEGORIES).build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [CategoriesModule],
  });
  SwaggerModule.setup(`${API}/${SWAGGER}/${CATEGORIES}`, app, document);
}
