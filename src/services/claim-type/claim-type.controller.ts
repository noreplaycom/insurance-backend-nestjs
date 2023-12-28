import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimTypeService } from './claimType.service';

@Injectable()
export class ClaimTypeController {
  constructor(private readonly claimTypeService: ClaimTypeService) {}

  async createOne(claimTypeCreateArgs: Prisma.ClaimTypeCreateArgs) {
    return await this.claimTypeService.createOne(claimTypeCreateArgs);
  }

  async createMany(claimTypeCreateManyArgs: Prisma.ClaimTypeCreateManyArgs) {
    return await this.claimTypeService.createMany(claimTypeCreateManyArgs);
  }

  async findOne(claimTypeFindUniqueArgs: Prisma.ClaimTypeFindUniqueArgs) {
    return await this.claimTypeService.findOne(claimTypeFindUniqueArgs);
  }

  async findMany(claimTypeFindManyArgs: Prisma.ClaimTypeFindManyArgs) {
    return await this.claimTypeService.findMany(claimTypeFindManyArgs);
  }

  async findFirst(claimTypeFindFirstArgs: Prisma.ClaimTypeFindFirstArgs) {
    return await this.claimTypeService.findFirst(claimTypeFindFirstArgs);
  }

  async updateOne(claimTypeUpdateOneArgs: Prisma.ClaimTypeUpdateArgs) {
    return await this.claimTypeService.updateOne(claimTypeUpdateOneArgs);
  }

  async updateMany(claimTypeUpdateManyArgs: Prisma.ClaimTypeUpdateManyArgs) {
    return await this.claimTypeService.updateMany(claimTypeUpdateManyArgs);
  }

  async delete(claimTypeDeleteArgs: Prisma.ClaimTypeDeleteArgs) {
    return await this.claimTypeService.delete(claimTypeDeleteArgs);
  }

  async deleteMany(claimTypeDeleteManyArgs: Prisma.ClaimTypeDeleteManyArgs) {
    return await this.claimTypeService.deleteMany(claimTypeDeleteManyArgs);
  }

  async aggregate(claimTypeAggregateArgs: Prisma.ClaimTypeAggregateArgs) {
    return await this.claimTypeService.aggregate(claimTypeAggregateArgs);
  }

  async count(claimTypeCountArgs: Prisma.ClaimTypeCountArgs) {
    return await this.claimTypeService.count(claimTypeCountArgs);
  }
}
