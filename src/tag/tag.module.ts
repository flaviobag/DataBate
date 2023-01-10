/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
