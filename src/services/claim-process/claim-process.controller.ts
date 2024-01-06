import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimProcessService } from './claim-process.service';

@Injectable()
export class ClaimProcessController {
  constructor(private readonly claimProcessService: ClaimProcessService) {}

  async createOne(claimProcessCreateArgs: Prisma.ClaimProcessCreateArgs) {
    return await this.claimProcessService.createOne(claimProcessCreateArgs);
  }

  async createMany(claimProcessCreateManyArgs: Prisma.ClaimProcessCreateManyArgs) {
    return await this.claimProcessService.createMany(claimProcessCreateManyArgs);
  }

  async findOne(claimProcessFindUniqueArgs: Prisma.ClaimProcessFindUniqueArgs) {
    return await this.claimProcessService.findOne(claimProcessFindUniqueArgs);
  }

  async findMany(claimProcessFindManyArgs: Prisma.ClaimProcessFindManyArgs) {
    return await this.claimProcessService.findMany(claimProcessFindManyArgs);
  }

  async findFirst(claimProcessFindFirstArgs: Prisma.ClaimProcessFindFirstArgs) {
    return await this.claimProcessService.findFirst(claimProcessFindFirstArgs);
  }

  async updateOne(claimProcessUpdateOneArgs: Prisma.ClaimProcessUpdateArgs) {
    return await this.claimProcessService.updateOne(claimProcessUpdateOneArgs);
  }

  async updateMany(claimProcessUpdateManyArgs: Prisma.ClaimProcessUpdateManyArgs) {
    return await this.claimProcessService.updateMany(claimProcessUpdateManyArgs);
  }

  async delete(claimProcessDeleteArgs: Prisma.ClaimProcessDeleteArgs) {
    return await this.claimProcessService.delete(claimProcessDeleteArgs);
  }

  async deleteMany(claimProcessDeleteManyArgs: Prisma.ClaimProcessDeleteManyArgs) {
    return await this.claimProcessService.deleteMany(claimProcessDeleteManyArgs);
  }

  async aggregate(claimProcessAggregateArgs: Prisma.ClaimProcessAggregateArgs) {
    return await this.claimProcessService.aggregate(claimProcessAggregateArgs);
  }

  async count(claimProcessCountArgs: Prisma.ClaimProcessCountArgs) {
    return await this.claimProcessService.count(claimProcessCountArgs);
  }
}
