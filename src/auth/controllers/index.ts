import { AuthController } from './auth/auth.controller';
import { EmailAuthController } from './email/email-auth.controller';
import { GoogleAuthController } from './google/google-auth.controller';
import { TelAuthController } from './tel/tel-auth.controller';

export const AUTH_CONTROLLERS = [
  AuthController,
  EmailAuthController,
  GoogleAuthController,
  TelAuthController,
];

export * from './auth/auth.controller';
export * from './google/google-auth.controller';
export * from './tel/tel-auth.controller';
