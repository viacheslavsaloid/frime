import type { Repository } from 'typeorm';

import { getFiltersByUrl, getFindOptionsByFilters } from '../../utils';

export class CrudService<T> {
  constructor(
    private readonly _repository: Repository<T>,
    private readonly relations: string[],
  ) {}

  async findOne(url: string) {
    const findOptions = getFindOptionsByFilters(getFiltersByUrl(url)) as any;

    return this._repository.findOneOrFail({
      where: findOptions.where,
      relations: this.relations,
    });
  }

  async getOne(id: string) {
    return this._repository.find({
      where: { id } as any,
      relations: this.relations,
    });
  }

  async getMany() {
    return this._repository.find({ relations: this.relations });
  }

  async postOne(item: T) {
    return this._repository.save(item);
  }

  async postMany(items: T[]) {
    return this._repository.save(items);
  }

  async patchOne(id: string, item: T) {
    return this._repository.save({ id, ...item });
  }

  async patchMany(items: T[]) {
    return this._repository.save(items);
  }

  async deleteOne(id: string) {
    return this._repository.delete(id);
  }

  async deleteMany(ids: string[]) {
    return this._repository.delete(ids);
  }
}
