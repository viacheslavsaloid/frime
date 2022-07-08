import type { MailerOptions } from '@nestjs-modules/mailer';

export const MAILER_CONFIG: MailerOptions = {
  transport: {
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: 'viacheslavsaloid.work@gmail.com',
      pass: 'inbllbkruulfdfqa',
    },
  },
};
