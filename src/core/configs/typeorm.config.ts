import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { USERS_ENTITIES } from 'src/users';
import { CATEGORIES_ENITITES } from '../../categories';
import { DISHES_ENTITIES } from '../../dishes';

export const TYPEORM_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-database',
  entities: [...CATEGORIES_ENITITES, ...DISHES_ENTITIES, ...USERS_ENTITIES],
  synchronize: true,
};
