import { Column, Entity, ManyToOne } from 'typeorm';

import { ICategory, CategoryEntity } from '../../categories';
import { IDish } from '../../dishes';
import { BaseEntity } from '../../shared';
import { DISHES } from '../constants';

@Entity({ name: DISHES })
export class DishEntity extends BaseEntity implements IDish {
  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: 0 })
  price: number;

  @ManyToOne(() => CategoryEntity, (category) => category.dishes, {
    cascade: true,
  })
  category: ICategory;
}
