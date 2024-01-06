import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TagService } from './tag.service';

@Injectable()
export class TagController {
  constructor(private readonly tagService: TagService) {}

  async createOne(tagCreateArgs: Prisma.TagCreateArgs) {
    return await this.tagService.createOne(tagCreateArgs);
  }

  async createMany(tagCreateManyArgs: Prisma.TagCreateManyArgs) {
    return await this.tagService.createMany(tagCreateManyArgs);
  }

  async findOne(tagFindUniqueArgs: Prisma.TagFindUniqueArgs) {
    return await this.tagService.findOne(tagFindUniqueArgs);
  }

  async findMany(tagFindManyArgs: Prisma.TagFindManyArgs) {
    return await this.tagService.findMany(tagFindManyArgs);
  }

  async findFirst(tagFindFirstArgs: Prisma.TagFindFirstArgs) {
    return await this.tagService.findFirst(tagFindFirstArgs);
  }

  async updateOne(tagUpdateOneArgs: Prisma.TagUpdateArgs) {
    return await this.tagService.updateOne(tagUpdateOneArgs);
  }

  async updateMany(tagUpdateManyArgs: Prisma.TagUpdateManyArgs) {
    return await this.tagService.updateMany(tagUpdateManyArgs);
  }

  async delete(tagDeleteArgs: Prisma.TagDeleteArgs) {
    return await this.tagService.delete(tagDeleteArgs);
  }

  async deleteMany(tagDeleteManyArgs: Prisma.TagDeleteManyArgs) {
    return await this.tagService.deleteMany(tagDeleteManyArgs);
  }

  async aggregate(tagAggregateArgs: Prisma.TagAggregateArgs) {
    return await this.tagService.aggregate(tagAggregateArgs);
  }

  async count(tagCountArgs: Prisma.TagCountArgs) {
    return await this.tagService.count(tagCountArgs);
  }
}
