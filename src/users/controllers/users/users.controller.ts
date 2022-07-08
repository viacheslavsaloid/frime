import { Controller } from '@nestjs/common';
import { USERS } from '../../constants';
import { CrudController } from '../../../shared';
import { UsersService } from '../../services';
import { UserEntity } from '../../entities';

@Controller(USERS)
export class UsersController extends CrudController<UserEntity> {
  constructor(private readonly _usersService: UsersService) {
    super(_usersService);
  }
}
