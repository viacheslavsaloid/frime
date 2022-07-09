import { AuthController } from './auth/auth.controller';
import { TelAuthController } from './tel/tel-auth.controller';

export const AUTH_CONTROLLERS = [AuthController, TelAuthController];

export * from './auth/auth.controller';
export * from './tel/tel-auth.controller';
