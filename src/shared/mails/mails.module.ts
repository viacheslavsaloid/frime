import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';

import { MAILER_CONFIG } from './configs';
import { MAILS_SERVICES } from './services';

@Module({
  imports: [MailerModule.forRoot(MAILER_CONFIG)],
  providers: MAILS_SERVICES,
  exports: MAILS_SERVICES,
})
export class MailsModule {}
