import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';

import { TWILIO_CONFIG } from './configs';
import { MESSAGES_SERVICES } from './services';

@Module({
  imports: [TwilioModule.forRoot(TWILIO_CONFIG)],
  providers: MESSAGES_SERVICES,
  exports: MESSAGES_SERVICES,
})
export class MessagesModule {}
