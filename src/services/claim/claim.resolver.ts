// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float, ResolveField, Parent } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  FindManyClaimArgs,
  Claim,
  FindUniqueClaimArgs,
  UpdateOneClaimArgs,
  CreateOneClaimArgs,
} from 'src/@generated';
import { ClaimController } from './claim.controller';
import { ClaimCountQuantityByCustomRangeAndPeriodArgs, ClaimCountQuantityByCustomRangeAndPeriodQuery } from './dto/claim_count_quantity_by_custom_range_and_period';
import { ClaimCountQuantityByStatusArgs, ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimCountTotalByCustomRangeAndPeriodArgs, ClaimCountTotalByCustomRangeAndPeriodQuery } from './dto/claim_count_total_by_custom_range_and_period';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import { ClaimCountTotalPercentageVsCustomPeriodArgs, ClaimCountTotalPercentageVsCustomPeriodQuery } from './dto/claim_count_total_percentage_vs_custom_period';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';

interface ClaimSelect {
  select: Prisma.ClaimSelect;
}

// @UseGuards(AuthGuard)
@Resolver(() => Claim)
export class ClaimResolver {
  constructor(
    private readonly claimController: ClaimController,
  ) {}

  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimCreateOne(
    @Args()
    claimCreateArgs: CreateOneClaimArgs,
    @Relations() relations: ClaimSelect,
  ): Promise<Claim | void> {
    return await this.claimController.createOne({
      ...claimCreateArgs,
      select: relations.select,
    });
  }

  @Query(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindOne(
    @Args() claimFindUniqueArgs: FindUniqueClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.findOne({
      ...claimFindUniqueArgs,
      select: relations.select,
    });
  }

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
  
  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimUpdateOne(
    @Args() claimUpdateOneArgs: UpdateOneClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.updateOne({
      ...replaceNullWithUndefined(claimUpdateOneArgs),
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
  
  @Query(() => [String], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  getClaimChannels() {
    return this.claimController.getClaimChannels();
  }
}
