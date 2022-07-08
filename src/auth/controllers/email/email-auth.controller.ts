import { Body, Controller, Post } from '@nestjs/common';
import { AUTH, AUTH_ENDPOINTS } from 'src/auth/constants';
import { EmailAuthDto } from 'src/auth/dtos';
import { IJwt } from 'src/auth/interfaces';

import { EmailAuthService } from '../../services/email/email-auth.service';

@Controller(AUTH)
export class EmailAuthController {
  constructor(private readonly _emailAuthService: EmailAuthService) {}

  @Post(AUTH_ENDPOINTS.SEND_CODE_TO_EMAIL)
  async sendCodeToEmail(@Body() body: EmailAuthDto): Promise<IJwt> {
    return this._emailAuthService.sendCodeToEmail(body);
  }
}
