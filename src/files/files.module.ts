import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MULTER_CONFIG, SERVE_STATIC_CONFIG } from './configs';
import { FILES_CONTROLERS } from './controllers';
import { FILES_ENTITIES } from './entities';
import { FILES_SERVICES } from './services';

@Module({
  controllers: [...FILES_CONTROLERS],
  imports: [
    TypeOrmModule.forFeature(FILES_ENTITIES),
    MulterModule.register(MULTER_CONFIG),
    ServeStaticModule.forRoot(SERVE_STATIC_CONFIG),
  ],
  providers: [...FILES_SERVICES],
  exports: [...FILES_SERVICES],
})
export class FilesModule {}
