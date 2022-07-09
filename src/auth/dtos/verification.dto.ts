import { ApiProperty } from '@nestjs/swagger';
import { IVerification } from '../interfaces';

export class VerificationDto implements IVerification {
  @ApiProperty()
  verificationCode: number;
}
