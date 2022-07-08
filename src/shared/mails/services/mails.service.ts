import type { ISendMailOptions } from '@nestjs-modules/mailer';
import type { MailerService } from '@nestjs-modules/mailer';

export class MailsService {
  constructor(private readonly _mailerService: MailerService) {}

  async sendMail(sendMailOptions: ISendMailOptions) {
    return this._mailerService.sendMail({
      from: 'viacheslavsaloid.work@gmail.com',
      ...sendMailOptions,
    });
  }
}
