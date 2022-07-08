import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IUser, UserEntity, UserStatusEnum } from '../../../users';

@Injectable()
export class GoogleAuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
    private readonly _jwtService: JwtService,
  ) {}

  async google(profile: {
    id: string;
    displayName: string;
    emails: { value: string }[];
  }) {
    const { id, displayName, emails } = profile;

    const findedUser = await this._usersRepository.findOne({
      where: { googleId: id },
    });

    if (findedUser) {
      return findedUser;
    }

    return this._usersRepository.save({
      googleId: id,
      name: displayName,
      email: emails[0].value,
      status: UserStatusEnum.VERIFIED,
    });
  }

  getRedirectUrl(user: IUser, domain: string) {
    const jwt = this._jwtService.sign(user);

    return `${domain}/auth/google/${jwt}`;
  }
}
