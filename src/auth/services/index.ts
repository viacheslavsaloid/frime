import { AuthService } from './auth/auth.service';
import { EmailAuthService } from './email/email-auth.service';
import { GoogleAuthService } from './google/google-auth.service';
import { TelAuthService } from './tel/tel-auth.service';
import { TelegramAuthService } from './telegram/telegram-auth.service';

export const AUTH_SERVICES = [
  AuthService,
  EmailAuthService,
  GoogleAuthService,
  TelAuthService,
  TelegramAuthService,
];

export * from './email/email-auth.service';
export * from './google/google-auth.service';
export * from './tel/tel-auth.service';
export * from './telegram/telegram-auth.service';
export * from './auth/auth.service';
