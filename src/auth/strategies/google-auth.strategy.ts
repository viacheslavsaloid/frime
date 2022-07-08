import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

import { GOOGLE_CONFIG } from '../configs';
import { GoogleAuthService } from '../services/google/google-auth.service';

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly _googleAuthService: GoogleAuthService) {
    super(GOOGLE_CONFIG);
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: (...args: unknown[]) => void,
  ) {
    try {
      const user = await this._googleAuthService.google(profile);

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
}
