import { Body, Controller, Post } from '@nestjs/common';
import { TelAuthDto } from 'src/auth/dtos';
import { AUTH, AUTH_ENDPOINTS } from '../../constants';
import { IJwt } from '../../interfaces';
import { TelAuthService } from '../../services';

@Controller(AUTH)
export class TelAuthController {
  constructor(private readonly _telAuthService: TelAuthService) {}

  @Post(AUTH_ENDPOINTS.SIGN_IN_WITH_TEL)
  async signInWithTel(@Body() body: TelAuthDto): Promise<IJwt> {
    return this._telAuthService.signInWithTel(body);
  }

  @Post(AUTH_ENDPOINTS.SIGN_UP_WITH_TEL)
  async signUpWithTel(@Body() body: TelAuthDto): Promise<IJwt> {
    return this._telAuthService.signUpWithTel(body);
  }
}
