import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FileEntity } from '../entities';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly _mediasRepository: Repository<FileEntity>,
  ) {}

  async uploadOne(file: Express.Multer.File) {
    return this._mediasRepository.save({ url: file.filename });
  }

  async uploadMany(files: Express.Multer.File[]) {
    return this._mediasRepository.save([
      ...files.map((element) => ({ url: element.filename })),
    ]);
  }
}
