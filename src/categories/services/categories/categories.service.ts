import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../../../shared';
import { CategoryEntity } from '../../entities';

@Injectable()
export class CategoriesService extends CrudService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity) private readonly _categoriesRepository,
  ) {
    super(_categoriesRepository, []);
  }
}
