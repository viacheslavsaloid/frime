import { ApiProperty } from '@nestjs/swagger';
import { IEmailAuth, IVerification } from '../interfaces';

export class VerificationDto implements IVerification {
  @ApiProperty()
  verificationCode: number;
}
