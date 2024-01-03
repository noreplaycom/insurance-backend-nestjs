import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimService } from './claim.service';
import { ClaimController } from './claim.controller';
import { Claim, ClaimChannel } from 'src/@generated';
import { ClaimCountQuantityByCustomRangeAndPeriodArgs, ClaimCountQuantityByCustomRangeAndPeriodQuery } from './dto/claim_count_quantity_by_custom_range_and_period';
import { ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimCountTotalByCustomRangeAndPeriodArgs, ClaimCountTotalByCustomRangeAndPeriodQuery } from './dto/claim_count_total_by_custom_range_and_period';
import { generateRandomRupiah } from 'src/utils/generate-random-rupiah-value.function';
import { ClaimCountTotalPercentageVsCustomPeriodArgs, ClaimCountTotalPercentageVsCustomPeriodQuery } from './dto/claim_count_total_percentage_vs_custom_period';
import { Period } from 'src/model/period.enum';
import { ClaimFindOneByIdArgs } from './dto/claim_find_one_by_id';
import { ClaimUpdateOneOfStatusArgs } from './dto/claim_update_one_of_status';
import { ClaimFormCreateOneArgs } from './dto/claim_create_one';
import { ClaimCountQuantityWhereArgs } from './dto/claim_count_quantity_where';

@Injectable()
export class PrismaClaimController implements ClaimController {
  constructor(private readonly claimService: ClaimService) {}

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs): Promise<Claim> {
    return await this.claimService.createOne(claimCreateArgs);
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimService.createMany(claimCreateManyArgs);
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs): Promise<Claim> {
    return await this.claimService.findOne(claimFindUniqueArgs);
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs): Promise<Claim[]> {
    return await this.claimService.findMany(claimFindManyArgs);
  }

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs): Promise<Claim> {
    return await this.claimService.findFirst(claimFindFirstArgs);
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs): Promise<Claim> {
    return await this.claimService.updateOne(claimUpdateOneArgs);
  }

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimService.updateMany(claimUpdateManyArgs);
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs): Promise<boolean> {
    return await this.claimService.delete(claimDeleteArgs);
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs): Promise<boolean> {
    return await this.claimService.deleteMany(claimDeleteManyArgs);
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs): Promise<Prisma.GetClaimAggregateType<Prisma.ClaimAggregateArgs>> {
    return await this.claimService.aggregate(claimAggregateArgs);
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs): Promise<number> {
    return await this.claimService.count(claimCountArgs);
  }

  async countQuantityByCustomRangeAndPeriod(args: ClaimCountQuantityByCustomRangeAndPeriodArgs): Promise<ClaimCountQuantityByCustomRangeAndPeriodQuery[]> {
    return [];
  }

  async countQuantityByStatus(): Promise<ClaimCountQuantityByStatusQuery[]> {
    return []
  }

  async countTotalByCustomRangeAndPeriod(args: ClaimCountTotalByCustomRangeAndPeriodArgs): Promise<ClaimCountTotalByCustomRangeAndPeriodQuery[]> {
    return [
      {
        period: "",
        totalClaims: 0
      }
    ]
  }

  async countTotalPercentageVsCustomPeriod(args: ClaimCountTotalPercentageVsCustomPeriodArgs): Promise<ClaimCountTotalPercentageVsCustomPeriodQuery> {
    return {
      versus: args.period,
      percentage: Math.random() * 20,
      amount: 0,
    };
  }

  async getClaimChannels(): Promise<string[]> {
    return Object.keys(ClaimChannel);
  }

  async findOneById(claimFindOneByIdArgs: ClaimFindOneByIdArgs): Promise<Claim> {
    return await this.claimService.findFirst({});
  }

  async updateOneOfStatus(claimUpdateOneOfStatusArgs: ClaimUpdateOneOfStatusArgs): Promise<Claim> {
    return await this.claimService.findFirst({});
  }

  async createOneForm(claimFormCreateOneArgs: ClaimFormCreateOneArgs): Promise<Claim> {
    return await this.claimService.findFirst({});
  }

  async countWhere(claimCountQuantityWhereArgs: ClaimCountQuantityWhereArgs): Promise<number> {
    return 10;
  }
}
