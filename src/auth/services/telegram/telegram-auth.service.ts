import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ITelegramUser } from 'src/auth/interfaces';
import { UserStatusEnum } from 'src/users';
import { Repository } from 'typeorm';

import { UserEntity } from '../../../users/entities/user.entity';

@Injectable()
export class TelegramAuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _usersRepository: Repository<UserEntity>,
    private readonly _jwtService: JwtService,
  ) {}

  async auth(telegramUser: ITelegramUser) {
    const { id, first_name = '', last_name = '' } = telegramUser;

    const finedUser = await this._usersRepository.findOne({
      where: { telegramId: id },
    });

    const user =
      finedUser ||
      (await this._usersRepository.save({
        telegramId: id,
        name: `${first_name} ${last_name}`,
        status: UserStatusEnum.VERIFIED,
      }));

    return this._jwtService.sign(user);
  }

  async getRedirectUrl(telegramUser: ITelegramUser) {
    const jwt = await this.auth(telegramUser);

    return `${''}/${jwt}`;
  }
}
