import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimService } from './claim.service';

@Injectable()
export class ClaimController {
  constructor(private readonly claimService: ClaimService) {}

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs) {
    return await this.claimService.createOne(claimCreateArgs);
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs) {
    return await this.claimService.createMany(claimCreateManyArgs);
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs) {
    return await this.claimService.findOne(claimFindUniqueArgs);
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs) {
    return await this.claimService.findMany(claimFindManyArgs);
  }

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs) {
    return await this.claimService.findFirst(claimFindFirstArgs);
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs) {
    return await this.claimService.updateOne(claimUpdateOneArgs);
  }

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs) {
    return await this.claimService.updateMany(claimUpdateManyArgs);
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs) {
    return await this.claimService.delete(claimDeleteArgs);
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs) {
    return await this.claimService.deleteMany(claimDeleteManyArgs);
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs) {
    return await this.claimService.aggregate(claimAggregateArgs);
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs) {
    return await this.claimService.count(claimCountArgs);
  }
}
