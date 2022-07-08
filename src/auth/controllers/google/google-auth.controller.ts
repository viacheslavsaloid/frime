import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AUTH, AUTH_ENDPOINTS } from 'src/auth/constants';

import { IRequest } from '../../../shared/interfaces';
import { GoogleGuard } from '../../guards';
import { GoogleAuthService } from '../../services';

@Controller(AUTH)
export class GoogleAuthController {
  constructor(private readonly _googleAuthService: GoogleAuthService) {}

  @Get(AUTH_ENDPOINTS.GOOGLE)
  @UseGuards(GoogleGuard)
  google() {
    // Google  Endpoint
  }

  @Get(AUTH_ENDPOINTS.GOOGLE_CALLBACK)
  @UseGuards(GoogleGuard)
  async googleCallback(@Req() request: IRequest, @Res() response: Response) {
    return response.redirect(
      this._googleAuthService.getRedirectUrl(
        request.user,
        request.query.state.toString(),
      ),
    );
  }
}
