import type { INestApplication } from '@nestjs/common';

import { appSwagger } from './app.swagger';
import { authSwagger } from './auth.swagger';
import { categoriesSwagger } from './categories.swagger';
import { dishesSwagger } from './dishes.swagger';
import { filesSwagger } from './files.swagger';
import { usersSwagger } from './users.swagger';

export function swagger(app: INestApplication) {
  appSwagger(app);
  authSwagger(app);
  usersSwagger(app);
  categoriesSwagger(app);
  dishesSwagger(app);
  filesSwagger(app);
}
