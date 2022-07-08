import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IEmailAuth, IJwt } from '../../interfaces';
import {
  CryptoService,
  MailsService,
  getRandomNumber,
  ErrorsEnum,
} from '../../../shared';
import { UserEntity, IUser } from '../../../users';

@Injectable()
export class EmailAuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
    private readonly _jwtService: JwtService,
    private readonly _cryptoService: CryptoService,
    private readonly _mailsService: MailsService,
  ) {}

  async sendCodeToEmail(body: IEmailAuth): Promise<IJwt> {
    const { email, password } = body;

    const existedUser = await this._usersRepository.findOne({
      where: { email },
    });
    const decryptedPassword = this._cryptoService.decrypt(password);

    let user: IUser = existedUser;

    if (!existedUser) {
      const verificationCode = getRandomNumber(1000, 9999);

      user = await this._usersRepository.save({
        email,
        password: decryptedPassword,
        verificationCode,
      });

      await this._mailsService.sendMail({
        to: email,
        subject: 'Verification Code',
        text: verificationCode.toString(),
      });
    } else {
      const isPasswordSame = await this._cryptoService.compare(
        decryptedPassword,
        existedUser.password,
      );

      if (!isPasswordSame) {
        throw new HttpException(
          { error: ErrorsEnum.InvalidPassword },
          HttpStatus.UNAUTHORIZED,
        );
      }
    }

    return { JWT: this._jwtService.sign(user) };
  }
}
