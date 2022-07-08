import { Controller } from '@nestjs/common';
import { DishesService } from '../../services';
import type { DishEntity } from '../../entities';
import { DISHES } from '../../constants';
import { CrudController } from '../../../shared';

@Controller(DISHES)
export class DishesController extends CrudController<DishEntity> {
  constructor(private readonly _dishesService: DishesService) {
    super(_dishesService);
  }
}
