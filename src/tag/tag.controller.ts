/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.services';
import { TagEntity } from './tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagsService: TagService) {}

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagsService.findAll();
    return {
      tags: tags.map((tags) => tags.name),
    };
  }
}
