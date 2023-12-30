import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Tag } from 'src/@generated';

@Injectable()
export abstract class TagController {
  abstract createOne(tagCreateArgs: Prisma.TagCreateArgs): Promise<Tag>;

  abstract createMany(tagCreateManyArgs: Prisma.TagCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(tagFindUniqueArgs: Prisma.TagFindUniqueArgs): Promise<Tag>;

  abstract findMany(tagFindManyArgs: Prisma.TagFindManyArgs): Promise<Tag[]>;

  abstract findFirst(tagFindFirstArgs: Prisma.TagFindFirstArgs): Promise<Tag>;

  abstract updateOne(tagUpdateOneArgs: Prisma.TagUpdateArgs): Promise<Tag>;

  abstract updateMany(tagUpdateManyArgs: Prisma.TagUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(tagDeleteArgs: Prisma.TagDeleteArgs): Promise<boolean>;

  abstract deleteMany(tagDeleteManyArgs: Prisma.TagDeleteManyArgs): Promise<boolean>;

  abstract aggregate(tagAggregateArgs: Prisma.TagAggregateArgs): Promise<Prisma.GetTagAggregateType<Prisma.TagAggregateArgs>>;

  abstract count(tagCountArgs: Prisma.TagCountArgs): Promise<number>;
}
