import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DISHES, DishesModule } from 'src/dishes';
import { API, SWAGGER } from 'src/shared';

export function dishesSwagger(app: INestApplication) {
  const config = new DocumentBuilder().setTitle(DISHES).build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [DishesModule],
  });
  SwaggerModule.setup(`${API}/${SWAGGER}/${DISHES}`, app, document);
}
