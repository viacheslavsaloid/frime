import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FILES } from '../constants';

@Entity({ name: FILES })
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;
}
