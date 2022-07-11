import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CryptoModule } from '../shared/crypto/crypto.module';
import { MessagesModule } from '../shared/messages/messages.module';
import { UsersModule } from '../users';
import { JWT_CONFIG } from './configs';
import { AUTH_CONTROLLERS } from './controllers';
import { AUTH_SERVICES } from './services';
import { AUTH_STRATEGIES } from './strategies';

@Module({
  controllers: AUTH_CONTROLLERS,
  imports: [
    JwtModule.register(JWT_CONFIG),
    UsersModule,
    MessagesModule,
    CryptoModule,
  ],
  providers: [...AUTH_SERVICES, ...AUTH_STRATEGIES],
  exports: AUTH_SERVICES,
})
export class AuthModule {}
