import { Injectable } from '@nestjs/common';
import { ClaimService } from '../claim/claim.service';
import { ClaimController } from '../claim/claim.controller';
import { ClaimQuantityAtCustomRangeArgs, ClaimQuantityAtCustomRangeQuery } from './claim.dto';

@Injectable()
export class DashboardController {
  constructor(
    private readonly claimService: ClaimService,
    private readonly claimController: ClaimController,
  ) {}

  async getClaimQuantityAtCustomRange(
    args: ClaimQuantityAtCustomRangeArgs
  ) {
    // const { end: lte, period, start: gte, where } = args
    // const claim = await this.claimController.findMany({
    //   orderBy: { createdAt: 'asc' },
    //   where: {
    //     ...where,
    //     createdAt: { gte, lte }
    //   }
    // })

    // const claimCounts: ClaimQuantityAtCustomRangeQuery[] = [];
    // let currentDate = new Date(gte);
    // while (currentDate <= lte) {
    //   const claimCount = this(users, currentDate, period);

    //   userCounts.push({
    //     period: currentDate.toISOString(), // Convert date to string for consistent grouping
    //     totalUser: userCount,
    //   });

    //   currentDate = getNextPeriodDate(currentDate, period);
    // }
  }
}