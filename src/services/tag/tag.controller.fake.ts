import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TagController } from './tag.controller';
import { Tag } from 'src/@generated';
import { fakeTagComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeTagController implements TagController {
  private tags: Tag[] = [];

  constructor() {
    const initial = 30;
    for (let i = 0; i < initial; i++) {
      this.tags.push(fakeTagComplete());
    }
  }

  async createOne(tagCreateArgs: Prisma.TagCreateArgs): Promise<Tag> {
    const fake = fakeTagComplete()
    this.tags.push(fake);
    return fake;
  }

  async createMany(tagCreateManyArgs: Prisma.TagCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = tagCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.tags.push(fakeTagComplete());
      }
      return { count: totalFake };
    } else {
      this.tags.push(fakeTagComplete());
      return { count: 1 }
    }
  }

  async findOne(tagFindUniqueArgs: Prisma.TagFindUniqueArgs): Promise<Tag> {
    return this.tags.find(tag => tag.id === tagFindUniqueArgs.where.id);
  }

  async findMany(tagFindManyArgs: Prisma.TagFindManyArgs): Promise<Tag[]> {
    return this.tags.filter(tag => tag);
  }

  async findFirst(tagFindFirstArgs: Prisma.TagFindFirstArgs): Promise<Tag> {
    return this.tags.find(tag => tag);
  }

  async updateOne(tagUpdateOneArgs: Prisma.TagUpdateArgs): Promise<Tag> {
    const idx = this.tags.findIndex(tag => tag.id === tagUpdateOneArgs.where.id);
    this.tags[idx] = {
      ...fakeTagComplete(),
      id: tagUpdateOneArgs.where.id
    }
    return {
      ...fakeTagComplete(),
      id: tagUpdateOneArgs.where.id
    }
  }

  async updateMany(tagUpdateManyArgs: Prisma.TagUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(tagDeleteArgs: Prisma.TagDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(tagDeleteManyArgs: Prisma.TagDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(tagAggregateArgs: Prisma.TagAggregateArgs): Promise<Prisma.GetTagAggregateType<Prisma.TagAggregateArgs>> {
    return {
      _avg: this.tags[0],
      _count: true,
      _max: this.tags[0],
      _min: this.tags[this.tags.length - 1],
      _sum: this.tags[0]
    }
  }

  async count(tagCountArgs: Prisma.TagCountArgs): Promise<number> {
    return this.tags.length;
  }
}
