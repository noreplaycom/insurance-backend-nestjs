// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  Claim, FindManyClaimArgs,
} from 'src/@generated';
import { LoginController } from './dashboard.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { ClaimController } from '../claim/claim.controller';
import { ClaimQuantityAtCustomRangeArgs, ClaimQuantityAtCustomRangeQuery, ClaimQuantityByStatusArgs } from './claim.dto';
import { Period } from 'src/model/enums';
import { dataFakeClaim } from './claim.fake';

@Resolver(() => Claim)
export class DashboardResolver {
  constructor(private readonly claimController: ClaimController) {}

  @Query(() => [ClaimQuantityAtCustomRangeQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimQuantityAtCustomRange(
    @Args('claimQuantityAtCustomRangeArgs')
    claimQuantityAtCustomRangeArgs: ClaimQuantityAtCustomRangeArgs,
  ): Promise<ClaimQuantityAtCustomRangeQuery[]> {
    const result = [
      { period: new Date('2023-01-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-02-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-03-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-04-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-05-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-06-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-07-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-08-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-09-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-10-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-11-01').toISOString(), totalClaim: 10 },
      { period: new Date('2023-12-01').toISOString(), totalClaim: 10 },
    ]
    return result;
  }

  // @Query(() => ClaimQuantityAtCustomRangeQuery, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimTotalPercentageVsCustomPeriod(
  //   @Args()
  //   claimTotalPercentageVsCustomPeriodArgs: ClaimQuantityAtCustomRangeArgs,
  // ): Promise<ClaimQuantityAtCustomRangeQuery> {
  //   return [
  //     {
  //       period: new Date().toISOString,
  //       totalClaim: 10,
  //     }
  //   ]
  // }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimQuantityByStatus(
    @Args('claimQuantityByStatusArgs')
    claimQuantityByStatusArgs: ClaimQuantityByStatusArgs,
  ) {
    return dataFakeClaim.filter(v => v.admedicaStatus === claimQuantityByStatusArgs.where.admedicaStatus.equals).length;
  }

  @Query(() => [Claim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimFindMany(
    @Args()
    claimFindManyArgs: FindManyClaimArgs,
  ) {
    const skipped = claimFindManyArgs.skip || 0
    const taken = claimFindManyArgs.take + skipped || 10
    return dataFakeClaim.slice(skipped, taken);
  }
}
