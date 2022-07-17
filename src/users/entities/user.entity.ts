import { Exclude } from 'class-transformer';
import { FileEntity, IFile } from 'src/files';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { BaseEntity } from '../../shared/entities';
import { USERS } from '../constants';
import { UserStatusEnum } from '../enums';
import { IUser } from '../interfaces';

@Entity({ name: USERS })
export class UserEntity extends BaseEntity implements IUser {
  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  nikname: string;

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

  @OneToOne(() => FileEntity, { cascade: true, eager: true })
  @JoinColumn()
  file: IFile;
}
