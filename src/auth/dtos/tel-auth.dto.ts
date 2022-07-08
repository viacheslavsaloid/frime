import { ApiProperty } from '@nestjs/swagger';
import { ITelAuth } from '../interfaces';

export class TelAuthDto implements ITelAuth {
  @ApiProperty()
  tel: string;
}
