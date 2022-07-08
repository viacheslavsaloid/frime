import { Controller } from '@nestjs/common';
import { CategoriesService } from '../../services';
import type { CategoryEntity } from '../../entities';
import { CATEGORIES } from '../../constants';
import { CrudController } from '../../../shared';

@Controller(CATEGORIES)
export class CategoriesController extends CrudController<CategoryEntity> {
  constructor(private readonly _categoriesService: CategoriesService) {
    super(_categoriesService);
  }
}
