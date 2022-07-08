import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DISHES_CONTROLLERS } from './controllers';
import { DISHES_ENTITIES } from './entities';
import { DISHES_SERVICES } from './services';

@Module({
  imports: [TypeOrmModule.forFeature(DISHES_ENTITIES)],
  controllers: DISHES_CONTROLLERS,
  providers: DISHES_SERVICES,
})
export class DishesModule {}
