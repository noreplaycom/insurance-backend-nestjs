import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Claim } from 'src/@generated';

@Injectable()
export abstract class ClaimController {
  abstract createOne(claimCreateArgs: Prisma.ClaimCreateArgs): Promise<Claim>;

  abstract createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs): Promise<Claim>;

  abstract findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs): Promise<Claim[]>;

  abstract findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs): Promise<Claim>;

  abstract updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs): Promise<Claim>;

  abstract updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(claimDeleteArgs: Prisma.ClaimDeleteArgs): Promise<boolean>;

  abstract deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs): Promise<boolean>;

  abstract aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs): Promise<Prisma.GetClaimAggregateType<Prisma.ClaimAggregateArgs>>;

  abstract count(claimCountArgs: Prisma.ClaimCountArgs): Promise<number>;
}
