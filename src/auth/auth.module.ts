import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CryptoModule } from '../shared/crypto/crypto.module';
import { MailsModule } from '../shared/mails/mails.module';
import { MessagesModule } from '../shared/messages/messages.module';
import { UsersModule } from '../users';
import { JWT_CONFIG } from './configs';
import { AUTH_CONTROLLERS } from './controllers';
import { AUTH_SERVICES } from './services';
import { AUTH_STRATEGIES } from './strategies';
import { AUTH_SUBSCRIBERS } from './subscribers';

@Module({
  controllers: AUTH_CONTROLLERS,
  imports: [
    JwtModule.register(JWT_CONFIG),
    UsersModule,
    MailsModule,
    MessagesModule,
    CryptoModule,
  ],
  providers: [...AUTH_SERVICES, ...AUTH_STRATEGIES, ...AUTH_SUBSCRIBERS],
  exports: AUTH_SERVICES,
})
export class AuthModule {}
