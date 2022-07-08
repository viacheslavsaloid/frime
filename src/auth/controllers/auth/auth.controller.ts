import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../../services';

import { IRequest } from '../../../shared/interfaces';
import { JwtGuard } from '../../guards';
import { AUTH, AUTH_ENDPOINTS } from '../../constants';
import { IJwt } from '../../interfaces';
import { VerificationDto } from '../../dtos';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller(AUTH)
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post(AUTH_ENDPOINTS.VERIFY_CODE)
  @UseGuards(JwtGuard)
  async verifyCode(
    @Request() request: IRequest,
    @Body() body: VerificationDto,
  ): Promise<IJwt> {
    return this._authService.verifyCode(request.user, body);
  }

  @Get(AUTH_ENDPOINTS.ME)
  @UseGuards(JwtGuard)
  async getMe(@Request() request: IRequest): Promise<IJwt> {
    return this._authService.getMe(request.user);
  }
}
