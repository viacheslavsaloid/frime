import { InjectTwilio, TwilioClient } from 'nestjs-twilio';

export class MessagesService {
  constructor(@InjectTwilio() private readonly _twilioClient: TwilioClient) {}

  async send(body: string, to: string) {
    return this._twilioClient.messages.create({
      body,
      messagingServiceSid: 'MG41dd740877474cf2a1efb21c0f654239',
      to,
    });
  }
}
