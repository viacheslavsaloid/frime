import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from 'src/shared';
import { UserEntity } from 'src/users/entities';

@Injectable()
export class UsersService extends CrudService<UserEntity> {
  constructor(@InjectRepository(UserEntity) private readonly _usersRepository) {
    super(_usersRepository, []);
  }
}
