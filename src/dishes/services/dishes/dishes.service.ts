import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from 'src/shared';

import { DishEntity } from '../../entities';

@Injectable()
export class DishesService extends CrudService<DishEntity> {
  constructor(
    @InjectRepository(DishEntity) private readonly _dishesRepository,
  ) {
    super(_dishesRepository, ['category']);
  }
}
