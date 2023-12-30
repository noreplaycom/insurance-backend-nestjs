import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimStatus } from 'src/@generated';

@Injectable()
export abstract class ClaimStatusController {
  abstract createOne(claimStatusCreateArgs: Prisma.ClaimStatusCreateArgs): Promise<ClaimStatus>;

  abstract createMany(claimStatusCreateManyArgs: Prisma.ClaimStatusCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(claimStatusFindUniqueArgs: Prisma.ClaimStatusFindUniqueArgs): Promise<ClaimStatus>;

  abstract findMany(claimStatusFindManyArgs: Prisma.ClaimStatusFindManyArgs): Promise<ClaimStatus[]>;

  abstract findFirst(claimStatusFindFirstArgs: Prisma.ClaimStatusFindFirstArgs): Promise<ClaimStatus>;

  abstract updateOne(claimStatusUpdateOneArgs: Prisma.ClaimStatusUpdateArgs): Promise<ClaimStatus>;

  abstract updateMany(claimStatusUpdateManyArgs: Prisma.ClaimStatusUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(claimStatusDeleteArgs: Prisma.ClaimStatusDeleteArgs): Promise<boolean>;

  abstract deleteMany(claimStatusDeleteManyArgs: Prisma.ClaimStatusDeleteManyArgs): Promise<boolean>;

  abstract aggregate(claimStatusAggregateArgs: Prisma.ClaimStatusAggregateArgs): Promise<Prisma.GetClaimStatusAggregateType<Prisma.ClaimStatusAggregateArgs>>;

  abstract count(claimStatusCountArgs: Prisma.ClaimStatusCountArgs): Promise<number>;
}
