// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  CreateManyClaimArgs,
  FindManyClaimArgs,
  Claim,
} from 'src/@generated';
import { ClaimController } from './claim.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { ClaimCountQuantityByCustomRangeAndPeriodArgs, ClaimCountQuantityByCustomRangeAndPeriodQuery } from './dto/claim_count_quantity_by_custom_range_and_period';
import { ClaimCountQuantityByStatusArgs, ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimCountTotalByCustomRangeAndPeriodArgs, ClaimCountTotalByCustomRangeAndPeriodQuery } from './dto/claim_count_total_by_custom_range_and_period';
import { ClaimCountTotalPercentageVsCustomPeriodArgs, ClaimCountTotalPercentageVsCustomPeriodQuery } from './dto/claim_count_total_percentage_vs_custom_period';

interface ClaimSelect {
  select: Prisma.ClaimSelect;
}

@Resolver(() => Claim)
export class ClaimResolver {
  constructor(private readonly claimController: ClaimController) {}

  @Query(() => [Claim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindMany(
    @Args() claimFindManyArgs: FindManyClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.findMany({
      ...claimFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCount(@Args() claimCountAggregateInput: FindManyClaimArgs) {
    return this.claimController.count(claimCountAggregateInput);
  }
  
  @Query(() => [ClaimCountQuantityByCustomRangeAndPeriodQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountQuantityByCustomRangeAndPeriod(
    @Args('claimCountQuantityByCustomRangeAndPeriodArgs') 
    claimCountQuantityByCustomRangeAndPeriodArgs: ClaimCountQuantityByCustomRangeAndPeriodArgs
  ) {
    return this.claimController.countQuantityByCustomRangeAndPeriod(claimCountQuantityByCustomRangeAndPeriodArgs);
  }
  
  @Query(() => ClaimCountQuantityByStatusQuery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountQuantityByStatus(
    @Args('claimCountQuantityByStatusArgs') 
    claimCountQuantityByStatusArgs: ClaimCountQuantityByStatusArgs
  ) {
    return this.claimController.countQuantityByStatus(claimCountQuantityByStatusArgs);
  }
  
  @Query(() => ClaimCountTotalByCustomRangeAndPeriodQuery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountTotalByCustomRangeAndPeriod(
    @Args('claimCountTotalByCustomRangeAndPeriodArgs') 
    claimCountTotalByCustomRangeAndPeriodArgs: ClaimCountTotalByCustomRangeAndPeriodArgs
  ) {
    return this.claimController.countTotalByCustomRangeAndPeriod(claimCountTotalByCustomRangeAndPeriodArgs);
  }
  
  @Query(() => ClaimCountTotalPercentageVsCustomPeriodQuery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountTotalPercentageVsCustomPeriod(
    @Args('claimCountTotalPercentageVsCustomPeriodArgs')
    claimCountTotalPercentageVsCustomPeriod: ClaimCountTotalPercentageVsCustomPeriodArgs
  ) {
    return this.claimController.countTotalPercentageVsCustomPeriod(claimCountTotalPercentageVsCustomPeriod);
  }
}
