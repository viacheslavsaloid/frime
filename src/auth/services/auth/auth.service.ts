import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IJwt, IVerification } from '../../interfaces';
import { ErrorsEnum } from '../../../shared';
import { IUser, UserStatusEnum, UserEntity } from '../../../users';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
    private readonly _jwtService: JwtService,
  ) {}

  async validate(user: IUser): Promise<IUser> {
    return this._usersRepository.findOne({ where: { id: user.id } });
  }

  async verifyCode(user: IUser, body: IVerification): Promise<IJwt> {
    console.log({ user, body });
    const isVerified = user?.verificationCode === body?.verificationCode;

    if (!isVerified) {
      throw new HttpException(
        { error: ErrorsEnum.InvalidPassword },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const verifiedUser = await this._usersRepository.save({
      ...user,
      status: UserStatusEnum.VERIFIED,
      verificationCode: 0o000,
    });

    return { JWT: this._jwtService.sign(verifiedUser) };
  }

  async getMe(user: IUser): Promise<IJwt> {
    return { JWT: this._jwtService.sign(await this.validate(user)) };
  }
}
