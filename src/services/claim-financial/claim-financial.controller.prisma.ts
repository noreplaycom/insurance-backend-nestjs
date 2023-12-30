import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimFinancialService } from './claim-financial.service';
import { ClaimFinancialController } from './claim-financial.controller';
import { ClaimFinancial } from 'src/@generated';

@Injectable()
export class PrismaClaimFinancialController implements ClaimFinancialController {
  constructor(private readonly claimFinancialService: ClaimFinancialService) {}

  async createOne(claimFinancialCreateArgs: Prisma.ClaimFinancialCreateArgs): Promise<ClaimFinancial> {
    return await this.claimFinancialService.createOne(claimFinancialCreateArgs);
  }

  async createMany(claimFinancialCreateManyArgs: Prisma.ClaimFinancialCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimFinancialService.createMany(claimFinancialCreateManyArgs);
  }

  async findOne(claimFinancialFindUniqueArgs: Prisma.ClaimFinancialFindUniqueArgs): Promise<ClaimFinancial> {
    return await this.claimFinancialService.findOne(claimFinancialFindUniqueArgs);
  }

  async findMany(claimFinancialFindManyArgs: Prisma.ClaimFinancialFindManyArgs): Promise<ClaimFinancial[]> {
    return await this.claimFinancialService.findMany(claimFinancialFindManyArgs);
  }

  async findFirst(claimFinancialFindFirstArgs: Prisma.ClaimFinancialFindFirstArgs): Promise<ClaimFinancial> {
    return await this.claimFinancialService.findFirst(claimFinancialFindFirstArgs);
  }

  async updateOne(claimFinancialUpdateOneArgs: Prisma.ClaimFinancialUpdateArgs): Promise<ClaimFinancial> {
    return await this.claimFinancialService.updateOne(claimFinancialUpdateOneArgs);
  }

  async updateMany(claimFinancialUpdateManyArgs: Prisma.ClaimFinancialUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimFinancialService.updateMany(claimFinancialUpdateManyArgs);
  }

  async delete(claimFinancialDeleteArgs: Prisma.ClaimFinancialDeleteArgs): Promise<boolean> {
    return await this.claimFinancialService.delete(claimFinancialDeleteArgs);
  }

  async deleteMany(claimFinancialDeleteManyArgs: Prisma.ClaimFinancialDeleteManyArgs): Promise<boolean> {
    return await this.claimFinancialService.deleteMany(claimFinancialDeleteManyArgs);
  }

  async aggregate(claimFinancialAggregateArgs: Prisma.ClaimFinancialAggregateArgs): Promise<Prisma.GetClaimFinancialAggregateType<Prisma.ClaimFinancialAggregateArgs>> {
    return await this.claimFinancialService.aggregate(claimFinancialAggregateArgs);
  }

  async count(claimFinancialCountArgs: Prisma.ClaimFinancialCountArgs): Promise<number> {
    return await this.claimFinancialService.count(claimFinancialCountArgs);
  }
}
