import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Claim } from 'src/@generated';
import { ClaimCountQuantityByCustomRangeAndPeriodArgs, ClaimCountQuantityByCustomRangeAndPeriodQuery } from './dto/claim_count_quantity_by_custom_range_and_period';
import { ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimCountTotalByCustomRangeAndPeriodArgs, ClaimCountTotalByCustomRangeAndPeriodQuery } from './dto/claim_count_total_by_custom_range_and_period';
import { ClaimCountTotalPercentageVsCustomPeriodArgs, ClaimCountTotalPercentageVsCustomPeriodQuery } from './dto/claim_count_total_percentage_vs_custom_period';
import { ClaimFindOneByIdArgs } from './dto/claim_find_one_by_id';
import { ClaimUpdateOneOfStatusArgs } from './dto/claim_update_one_of_status';
import { ClaimFormCreateOneArgs } from './dto/claim_create_one';
import { ClaimCountQuantityWhereArgs } from './dto/claim_count_quantity_where';

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
  
  abstract countQuantityByCustomRangeAndPeriod(args: ClaimCountQuantityByCustomRangeAndPeriodArgs): Promise<ClaimCountQuantityByCustomRangeAndPeriodQuery[]>;
  
  abstract countQuantityByStatus(): Promise<ClaimCountQuantityByStatusQuery[]>;
  
  abstract countTotalByCustomRangeAndPeriod(args: ClaimCountTotalByCustomRangeAndPeriodArgs): Promise<ClaimCountTotalByCustomRangeAndPeriodQuery[]>;
  
  abstract countTotalPercentageVsCustomPeriod(args: ClaimCountTotalPercentageVsCustomPeriodArgs): Promise<ClaimCountTotalPercentageVsCustomPeriodQuery>;
  
  abstract getClaimChannels(): Promise<string[]>;
  
  abstract findOneById(claimFindOneByIdArgs: ClaimFindOneByIdArgs): Promise<Claim>;
  
  abstract updateOneOfStatus(claimUpdateOneOfStatusArgs: ClaimUpdateOneOfStatusArgs): Promise<Claim>;
  
  abstract createOneForm(claimFormCreateOneArgs: ClaimFormCreateOneArgs): Promise<Claim>;
  
  abstract countWhere(claimCountQuantityWhereArgs: ClaimCountQuantityWhereArgs): Promise<number>;
}
