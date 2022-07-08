import { BaseEntity as _BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity extends _BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
