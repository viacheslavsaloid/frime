import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DishesModule } from '../dishes';
import { AuthModule } from '../auth';
import { CategoriesModule } from '../categories';
import { TYPEORM_CONFIG } from './configs';
import { UsersModule } from 'src/users';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TYPEORM_CONFIG),
    AuthModule,
    CategoriesModule,
    DishesModule,
    UsersModule,
    FilesModule,
  ],
})
export class CoreModule {}
