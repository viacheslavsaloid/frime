import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CATEGORIES_ENITITES } from '.';
import { CATEGORIES_CONTROLLERS } from './controllers';
import { CATEGORIES_SERVICES } from './services';

@Module({
  imports: [TypeOrmModule.forFeature(CATEGORIES_ENITITES)],
  controllers: CATEGORIES_CONTROLLERS,
  providers: CATEGORIES_SERVICES,
})
export class CategoriesModule {}
