import { ApiProperty } from '@nestjs/swagger';
import { IEmailAuth } from '../interfaces';

export class EmailAuthDto implements IEmailAuth {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
