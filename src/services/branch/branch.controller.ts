import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Branch } from 'src/@generated';

@Injectable()
export abstract class BranchController {
  abstract createOne(branchCreateArgs: Prisma.BranchCreateArgs): Promise<Branch>;

  abstract createMany(branchCreateManyArgs: Prisma.BranchCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(branchFindUniqueArgs: Prisma.BranchFindUniqueArgs): Promise<Branch>;

  abstract findMany(branchFindManyArgs: Prisma.BranchFindManyArgs): Promise<Branch[]>;

  abstract findFirst(branchFindFirstArgs: Prisma.BranchFindFirstArgs): Promise<Branch>;

  abstract updateOne(branchUpdateOneArgs: Prisma.BranchUpdateArgs): Promise<Branch>;

  abstract updateMany(branchUpdateManyArgs: Prisma.BranchUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(branchDeleteArgs: Prisma.BranchDeleteArgs): Promise<boolean>;

  abstract deleteMany(branchDeleteManyArgs: Prisma.BranchDeleteManyArgs): Promise<boolean>;

  abstract aggregate(branchAggregateArgs: Prisma.BranchAggregateArgs): Promise<Prisma.GetBranchAggregateType<Prisma.BranchAggregateArgs>>;

  abstract count(branchCountArgs: Prisma.BranchCountArgs): Promise<number>;
}
