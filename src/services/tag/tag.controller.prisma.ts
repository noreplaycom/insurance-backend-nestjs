import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tag } from 'src/@generated';

@Injectable()
export class PrismaTagController implements TagController {
  constructor(private readonly tagService: TagService) {}

  async createOne(tagCreateArgs: Prisma.TagCreateArgs): Promise<Tag> {
    return await this.tagService.createOne(tagCreateArgs);
  }

  async createMany(tagCreateManyArgs: Prisma.TagCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.tagService.createMany(tagCreateManyArgs);
  }

  async findOne(tagFindUniqueArgs: Prisma.TagFindUniqueArgs): Promise<Tag> {
    return await this.tagService.findOne(tagFindUniqueArgs);
  }

  async findMany(tagFindManyArgs: Prisma.TagFindManyArgs): Promise<Tag[]> {
    return await this.tagService.findMany(tagFindManyArgs);
  }

  async findFirst(tagFindFirstArgs: Prisma.TagFindFirstArgs): Promise<Tag> {
    return await this.tagService.findFirst(tagFindFirstArgs);
  }

  async updateOne(tagUpdateOneArgs: Prisma.TagUpdateArgs): Promise<Tag> {
    return await this.tagService.updateOne(tagUpdateOneArgs);
  }

  async updateMany(tagUpdateManyArgs: Prisma.TagUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.tagService.updateMany(tagUpdateManyArgs);
  }

  async delete(tagDeleteArgs: Prisma.TagDeleteArgs): Promise<boolean> {
    return await this.tagService.delete(tagDeleteArgs);
  }

  async deleteMany(tagDeleteManyArgs: Prisma.TagDeleteManyArgs): Promise<boolean> {
    return await this.tagService.deleteMany(tagDeleteManyArgs);
  }

  async aggregate(tagAggregateArgs: Prisma.TagAggregateArgs): Promise<Prisma.GetTagAggregateType<Prisma.TagAggregateArgs>> {
    return await this.tagService.aggregate(tagAggregateArgs);
  }

  async count(tagCountArgs: Prisma.TagCountArgs): Promise<number> {
    return await this.tagService.count(tagCountArgs);
  }
}
