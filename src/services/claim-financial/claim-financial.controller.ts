import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimFinancial } from 'src/@generated';

@Injectable()
export abstract class ClaimFinancialController {
  abstract createOne(claimFinancialCreateArgs: Prisma.ClaimFinancialCreateArgs): Promise<ClaimFinancial>;

  abstract createMany(claimFinancialCreateManyArgs: Prisma.ClaimFinancialCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(claimFinancialFindUniqueArgs: Prisma.ClaimFinancialFindUniqueArgs): Promise<ClaimFinancial>;

  abstract findMany(claimFinancialFindManyArgs: Prisma.ClaimFinancialFindManyArgs): Promise<ClaimFinancial[]>;

  abstract findFirst(claimFinancialFindFirstArgs: Prisma.ClaimFinancialFindFirstArgs): Promise<ClaimFinancial>;

  abstract updateOne(claimFinancialUpdateOneArgs: Prisma.ClaimFinancialUpdateArgs): Promise<ClaimFinancial>;

  abstract updateMany(claimFinancialUpdateManyArgs: Prisma.ClaimFinancialUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(claimFinancialDeleteArgs: Prisma.ClaimFinancialDeleteArgs): Promise<boolean>;

  abstract deleteMany(claimFinancialDeleteManyArgs: Prisma.ClaimFinancialDeleteManyArgs): Promise<boolean>;

  abstract aggregate(claimFinancialAggregateArgs: Prisma.ClaimFinancialAggregateArgs): Promise<Prisma.GetClaimFinancialAggregateType<Prisma.ClaimFinancialAggregateArgs>>;

  abstract count(claimFinancialCountArgs: Prisma.ClaimFinancialCountArgs): Promise<number>;
}
