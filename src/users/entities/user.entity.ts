import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../shared/entities';
import { USERS } from '../constants';
import { UserStatusEnum } from '../enums';
import { IUser } from '../interfaces';

@Entity({ name: USERS })
export class UserEntity extends BaseEntity implements IUser {
  @Column({ default: '' })
  name: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ unique: true, nullable: true })
  googleId: string;

  @Column('bigint', { unique: true, nullable: true })
  telegramId: number;

  @Column({ unique: true, nullable: true })
  telegramToken: string;

  @Column({ unique: true, nullable: true })
  tel: string;

  @Column('int', { nullable: true })
  @Exclude({ toPlainOnly: true })
  verificationCode: number;

  @Column('enum', {
    enum: UserStatusEnum,
    default: UserStatusEnum.NOT_VERIFIED,
  })
  status: UserStatusEnum;

  @Column({ default: '', nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;
}
