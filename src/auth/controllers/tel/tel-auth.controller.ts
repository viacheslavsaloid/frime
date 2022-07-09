import { Body, Controller, Post } from '@nestjs/common';
import { TelAuthDto } from 'src/auth/dtos';
import { AUTH, AUTH_ENDPOINTS } from '../../constants';
import { IJwt } from '../../interfaces';
import { TelAuthService } from '../../services';

@Controller(AUTH)
export class TelAuthController {
  constructor(private readonly _telAuthService: TelAuthService) {}

  @Post(AUTH_ENDPOINTS.SEND_CODE_TO_PHONE)
  async sendCodeToPhone(@Body() body: TelAuthDto): Promise<IJwt> {
    return this._telAuthService.sendCodeToPhone(body);
  }
}
