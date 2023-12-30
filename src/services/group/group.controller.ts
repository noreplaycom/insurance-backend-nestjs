import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Group } from 'src/@generated';

@Injectable()
export abstract class GroupController {
  abstract createOne(groupCreateArgs: Prisma.GroupCreateArgs): Promise<Group>;

  abstract createMany(groupCreateManyArgs: Prisma.GroupCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(groupFindUniqueArgs: Prisma.GroupFindUniqueArgs): Promise<Group>;

  abstract findMany(groupFindManyArgs: Prisma.GroupFindManyArgs): Promise<Group[]>;

  abstract findFirst(groupFindFirstArgs: Prisma.GroupFindFirstArgs): Promise<Group>;

  abstract updateOne(groupUpdateOneArgs: Prisma.GroupUpdateArgs): Promise<Group>;

  abstract updateMany(groupUpdateManyArgs: Prisma.GroupUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(groupDeleteArgs: Prisma.GroupDeleteArgs): Promise<boolean>;

  abstract deleteMany(groupDeleteManyArgs: Prisma.GroupDeleteManyArgs): Promise<boolean>;

  abstract aggregate(groupAggregateArgs: Prisma.GroupAggregateArgs): Promise<Prisma.GetGroupAggregateType<Prisma.GroupAggregateArgs>>;

  abstract count(groupCountArgs: Prisma.GroupCountArgs): Promise<number>;
}
