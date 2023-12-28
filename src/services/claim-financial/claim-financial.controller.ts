import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimFinancialService } from './claimFinancial.service';

@Injectable()
export class ClaimFinancialController {
  constructor(private readonly claimFinancialService: ClaimFinancialService) {}

  async createOne(claimFinancialCreateArgs: Prisma.ClaimFinancialCreateArgs) {
    return await this.claimFinancialService.createOne(claimFinancialCreateArgs);
  }

  async createMany(claimFinancialCreateManyArgs: Prisma.ClaimFinancialCreateManyArgs) {
    return await this.claimFinancialService.createMany(claimFinancialCreateManyArgs);
  }

  async findOne(claimFinancialFindUniqueArgs: Prisma.ClaimFinancialFindUniqueArgs) {
    return await this.claimFinancialService.findOne(claimFinancialFindUniqueArgs);
  }

  async findMany(claimFinancialFindManyArgs: Prisma.ClaimFinancialFindManyArgs) {
    return await this.claimFinancialService.findMany(claimFinancialFindManyArgs);
  }

  async findFirst(claimFinancialFindFirstArgs: Prisma.ClaimFinancialFindFirstArgs) {
    return await this.claimFinancialService.findFirst(claimFinancialFindFirstArgs);
  }

  async updateOne(claimFinancialUpdateOneArgs: Prisma.ClaimFinancialUpdateArgs) {
    return await this.claimFinancialService.updateOne(claimFinancialUpdateOneArgs);
  }

  async updateMany(claimFinancialUpdateManyArgs: Prisma.ClaimFinancialUpdateManyArgs) {
    return await this.claimFinancialService.updateMany(claimFinancialUpdateManyArgs);
  }

  async delete(claimFinancialDeleteArgs: Prisma.ClaimFinancialDeleteArgs) {
    return await this.claimFinancialService.delete(claimFinancialDeleteArgs);
  }

  async deleteMany(claimFinancialDeleteManyArgs: Prisma.ClaimFinancialDeleteManyArgs) {
    return await this.claimFinancialService.deleteMany(claimFinancialDeleteManyArgs);
  }

  async aggregate(claimFinancialAggregateArgs: Prisma.ClaimFinancialAggregateArgs) {
    return await this.claimFinancialService.aggregate(claimFinancialAggregateArgs);
  }

  async count(claimFinancialCountArgs: Prisma.ClaimFinancialCountArgs) {
    return await this.claimFinancialService.count(claimFinancialCountArgs);
  }
}
