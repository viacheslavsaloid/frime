import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ITelAuth } from 'src/auth/interfaces';
import { ErrorsEnum, getRandomNumber } from 'src/shared';
import { UserStatusEnum } from 'src/users';
import { Repository } from 'typeorm';

import { MessagesService } from '../../../shared/messages/services';
import { UserEntity } from '../../../users/entities/user.entity';

@Injectable()
export class TelAuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
    private readonly _jwtService: JwtService,
    private readonly _messagesService: MessagesService,
  ) {}

  async signInWithTel(body: ITelAuth) {
    try {
      const { tel } = body;

      const findedUser = await this._usersRepository.findOne({
        where: { tel },
      });

      if (!findedUser) {
        throw new HttpException(
          { error: ErrorsEnum.NotUserWithThisTel },
          HttpStatus.UNAUTHORIZED,
        );
      }

      // const verificationCode = getRandomNumber(1000, 9999);
      const verificationCode = 5723;

      const userToReturn = await this._usersRepository.save({
        ...findedUser,
        ...body,
        verificationCode,
        status: UserStatusEnum.NOT_VERIFIED,
      });

      // await this._messagesService.send(verificationCode.toString(), body.tel);

      return { JWT: this._jwtService.sign(userToReturn) };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async signUpWithTel(body: ITelAuth) {
    try {
      const { tel } = body;

      const findedUser = await this._usersRepository.findOne({
        where: { tel },
      });

      if (findedUser) {
        throw new HttpException(
          { error: ErrorsEnum.UserWithThisTelExist },
          HttpStatus.UNAUTHORIZED,
        );
      }

      // const verificationCode = getRandomNumber(1000, 9999);
      const verificationCode = 5723;

      const userToReturn = await this._usersRepository.save({
        ...findedUser,
        ...body,
        verificationCode,
        status: UserStatusEnum.NOT_VERIFIED,
      });

      // await this._messagesService.send(verificationCode.toString(), body.tel);

      return { JWT: this._jwtService.sign(userToReturn) };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
