import { AuthService } from './auth/auth.service';
import { TelAuthService } from './tel/tel-auth.service';

export const AUTH_SERVICES = [AuthService, TelAuthService];

export * from './tel/tel-auth.service';
export * from './auth/auth.service';
