import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USERS_CONTROLLERS } from './controllers';
import { USERS_ENTITIES } from './entities';
import { USERS_SERVICES } from './services';

@Module({
  imports: [TypeOrmModule.forFeature(USERS_ENTITIES)],
  controllers: USERS_CONTROLLERS,
  providers: USERS_SERVICES,
  exports: [TypeOrmModule],
})
export class UsersModule {}
