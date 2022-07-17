import 'multer';

import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { MULTER_CONFIG } from '../configs';
import { FilesService } from '../services';
import { FILES } from '../constants';

@Controller(FILES)
export class FilesController {
  constructor(private readonly _filesService: FilesService) {}

  @Post('upload-one')
  @UseInterceptors(FileInterceptor('file', MULTER_CONFIG))
  async uploadOne(@UploadedFile() media: Express.Multer.File) {
    return this._filesService.uploadOne(media);
  }

  @Post('upload-many')
  @UseInterceptors(FilesInterceptor('files', 10, MULTER_CONFIG))
  async uploadMany(@UploadedFiles() files: Express.Multer.File[]) {
    return this._filesService.uploadMany(files);
  }
}
