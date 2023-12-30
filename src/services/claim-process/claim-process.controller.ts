import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimProcess } from 'src/@generated';

@Injectable()
export abstract class ClaimProcessController {
  abstract createOne(claimProcessCreateArgs: Prisma.ClaimProcessCreateArgs): Promise<ClaimProcess>;

  abstract createMany(claimProcessCreateManyArgs: Prisma.ClaimProcessCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(claimProcessFindUniqueArgs: Prisma.ClaimProcessFindUniqueArgs): Promise<ClaimProcess>;

  abstract findMany(claimProcessFindManyArgs: Prisma.ClaimProcessFindManyArgs): Promise<ClaimProcess[]>;

  abstract findFirst(claimProcessFindFirstArgs: Prisma.ClaimProcessFindFirstArgs): Promise<ClaimProcess>;

  abstract updateOne(claimProcessUpdateOneArgs: Prisma.ClaimProcessUpdateArgs): Promise<ClaimProcess>;

  abstract updateMany(claimProcessUpdateManyArgs: Prisma.ClaimProcessUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(claimProcessDeleteArgs: Prisma.ClaimProcessDeleteArgs): Promise<boolean>;

  abstract deleteMany(claimProcessDeleteManyArgs: Prisma.ClaimProcessDeleteManyArgs): Promise<boolean>;

  abstract aggregate(claimProcessAggregateArgs: Prisma.ClaimProcessAggregateArgs): Promise<Prisma.GetClaimProcessAggregateType<Prisma.ClaimProcessAggregateArgs>>;

  abstract count(claimProcessCountArgs: Prisma.ClaimProcessCountArgs): Promise<number>;
}
