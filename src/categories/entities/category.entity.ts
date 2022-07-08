import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../shared';
import { IDish } from '../../dishes';
import { CATEGORIES } from '../constants';
import { ICategory } from '../interfaces';
import { DishEntity } from '../../dishes';

@Entity({ name: CATEGORIES })
export class CategoryEntity extends BaseEntity implements ICategory {
  @Column({ default: '' })
  name: string;

  @OneToMany(() => DishEntity, (dish) => dish.category)
  dishes: IDish[];
}
