import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimController } from './claim.controller';
import { Claim, ClaimChannel, ClaimStatusType } from 'src/@generated';
import { fakeClaimComplete } from '../../../prisma/fake-data';
import { Period } from 'src/model/period.enum';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';
import { ClaimCountQuantityByCustomRangeAndPeriodArgs, ClaimCountQuantityByCustomRangeAndPeriodQuery } from './dto/claim_count_quantity_by_custom_range_and_period';
import { ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimCountTotalByCustomRangeAndPeriodArgs, ClaimCountTotalByCustomRangeAndPeriodQuery } from './dto/claim_count_total_by_custom_range_and_period';
import { generateRandomRupiah } from 'src/utils/generate-random-rupiah-value.function';
import { ClaimCountTotalPercentageVsCustomPeriodArgs, ClaimCountTotalPercentageVsCustomPeriodQuery } from './dto/claim_count_total_percentage_vs_custom_period';

@Injectable()
export class FakeClaimController implements ClaimController {
  private claims: Claim[] = [];

  constructor() {
    const initial = 500;
    for (let i = 0; i < initial; i++) {
      this.claims.push(fakeClaimComplete());
    }
  }

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs): Promise<Claim> {
    const fake = fakeClaimComplete()
    this.claims.push(fake);
    return fake;
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = claimCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.claims.push(fakeClaimComplete());
      }
      return { count: totalFake };
    } else {
      this.claims.push(fakeClaimComplete());
      return { count: 1 }
    }
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs): Promise<Claim> {
    return this.claims.find(claim => claim.id === claimFindUniqueArgs.where.id);
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs): Promise<Claim[]> {
    const skipped = claimFindManyArgs.skip ?? 0;
    const taken = claimFindManyArgs.take ?? 10;
    return this.claims.slice(skipped, skipped + taken);
  }

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs): Promise<Claim> {
    return this.claims.find(claim => claim);
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs): Promise<Claim> {
    const idx = this.claims.findIndex(claim => claim.id === claimUpdateOneArgs.where.id);
    this.claims[idx] = {
      ...fakeClaimComplete(),
      id: claimUpdateOneArgs.where.id
    }
    return {
      ...fakeClaimComplete(),
      id: claimUpdateOneArgs.where.id
    }
  }

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs): Promise<Prisma.GetClaimAggregateType<Prisma.ClaimAggregateArgs>> {
    return {
      _avg: this.claims[0],
      _count: true,
      _max: this.claims[0],
      _min: this.claims[this.claims.length - 1],
      _sum: this.claims[0]
    }
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs): Promise<number> {
    return this.claims.length;
  }

  async countQuantityByCustomRangeAndPeriod(args: ClaimCountQuantityByCustomRangeAndPeriodArgs): Promise<ClaimCountQuantityByCustomRangeAndPeriodQuery[]> {
    const { period, end, start } = args;

    const claimCounts: ClaimCountQuantityByCustomRangeAndPeriodQuery[] = [];

    if (period === Period.ALLTIME) {
      claimCounts.push({
        period: new Date().toISOString(), // Convert date to string for consistent grouping
        quantityClaims: Math.floor(Math.random() * 200),
      })
    } else {
      let currentDate = new Date(start);
  
      while (currentDate <= end) {
        claimCounts.push({
          period: currentDate.toISOString(), // Convert date to string for consistent grouping
          quantityClaims: Math.floor(Math.random() * 200),
        });
  
        currentDate = getNextPeriodDate(currentDate, period);
      }
    }

    return claimCounts;
  }

  async countTotalPercentageVsCustomPeriod(args: ClaimCountTotalPercentageVsCustomPeriodArgs): Promise<ClaimCountTotalPercentageVsCustomPeriodQuery> {
    const periodValue = () => {
      switch (args.period) {
        case Period.MONTHLY:
          return 'last month';
        case Period.WEEKLY:
          return 'last week';
        case Period.YEARLY:
          return 'last year';
      }
    }
    return {
      versus: periodValue(),
      percentage: Math.random() * 20,
      amount: generateRandomRupiah(),
    };
  }

  async countTotalByCustomRangeAndPeriod(args: ClaimCountTotalByCustomRangeAndPeriodArgs): Promise<ClaimCountTotalByCustomRangeAndPeriodQuery[]> {
    const { period, end, start } = args;

    const claimCounts: ClaimCountTotalByCustomRangeAndPeriodQuery[] = [];

    if (period === Period.ALLTIME) {
      claimCounts.push({
        period: new Date().toISOString(), // Convert date to string for consistent grouping
        totalClaims: generateRandomRupiah(),
      })
    } else {
      let currentDate = new Date(start);
  
      while (currentDate <= end) {
        claimCounts.push({
          period: currentDate.toISOString(), // Convert date to string for consistent grouping
          totalClaims: generateRandomRupiah(),
        });
  
        currentDate = getNextPeriodDate(currentDate, period);
      }
    }

    return claimCounts;
  }

  async countQuantityByStatus(): Promise<ClaimCountQuantityByStatusQuery[]> {
    const statuses = Object.keys(ClaimStatusType);
    const claims: ClaimCountQuantityByStatusQuery[] = [];
    statuses.forEach(status => {
      claims.push({
        status: status as ClaimStatusType,
        total: Math.floor(Math.random() * 500),
      })
    })
    return claims;
  }

  async getClaimChannels(): Promise<string[]> {
    return Object.keys(ClaimChannel);
  }
}
