import { Body, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';

import type { CrudService } from '../../services';

export class CrudController<T> {
  constructor(private readonly _crudService: CrudService<T>) {}

  @Get('find-one')
  @ApiOperation({ summary: `Find one` })
  async findOne(@Req() request: Request) {
    return this._crudService.findOne(request.url);
  }

  @Get(':id')
  @ApiOperation({ summary: `Get one` })
  async getOne(@Param('id') id: string) {
    return this._crudService.getOne(id);
  }

  @Get()
  @ApiOperation({ summary: `Get many` })
  async getMany() {
    return this._crudService.getMany();
  }

  @Post()
  @ApiOperation({ summary: `Post one` })
  async postOne(@Body() item: T) {
    return this._crudService.postOne(item);
  }

  @Post('many')
  @ApiOperation({ summary: `Post many` })
  async postMany(@Body() items: T[]) {
    return this._crudService.postMany(items);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Patch one` })
  async patchOne(@Param('id') id: string, @Body() item: T) {
    return this._crudService.patchOne(id, item);
  }

  @Patch()
  @ApiOperation({ summary: `Patch many` })
  async patchMany(@Body() items: T[]) {
    return this._crudService.patchMany(items);
  }

  @Delete(':id')
  @ApiOperation({ summary: `Delete one` })
  async deleteOne(@Param('id') id: string) {
    return this._crudService.deleteOne(id);
  }

  @Delete()
  @ApiOperation({ summary: `Delete many` })
  async deleteMany(@Body() ids: string[]) {
    return this._crudService.deleteMany(ids);
  }
}
