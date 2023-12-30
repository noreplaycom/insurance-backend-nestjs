import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimType } from 'src/@generated';

@Injectable()
export abstract class ClaimTypeController {
  abstract createOne(claimTypeCreateArgs: Prisma.ClaimTypeCreateArgs): Promise<ClaimType>;

  abstract createMany(claimTypeCreateManyArgs: Prisma.ClaimTypeCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(claimTypeFindUniqueArgs: Prisma.ClaimTypeFindUniqueArgs): Promise<ClaimType>;

  abstract findMany(claimTypeFindManyArgs: Prisma.ClaimTypeFindManyArgs): Promise<ClaimType[]>;

  abstract findFirst(claimTypeFindFirstArgs: Prisma.ClaimTypeFindFirstArgs): Promise<ClaimType>;

  abstract updateOne(claimTypeUpdateOneArgs: Prisma.ClaimTypeUpdateArgs): Promise<ClaimType>;

  abstract updateMany(claimTypeUpdateManyArgs: Prisma.ClaimTypeUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(claimTypeDeleteArgs: Prisma.ClaimTypeDeleteArgs): Promise<boolean>;

  abstract deleteMany(claimTypeDeleteManyArgs: Prisma.ClaimTypeDeleteManyArgs): Promise<boolean>;

  abstract aggregate(claimTypeAggregateArgs: Prisma.ClaimTypeAggregateArgs): Promise<Prisma.GetClaimTypeAggregateType<Prisma.ClaimTypeAggregateArgs>>;

  abstract count(claimTypeCountArgs: Prisma.ClaimTypeCountArgs): Promise<number>;
}
