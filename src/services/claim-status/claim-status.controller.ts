import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimStatusService } from './claim-status.service';
import { ClaimStatus, ClaimStatusType } from 'src/@generated';
import { ClaimStatusFindManyByClaimIdArgs } from './dto/claim_status_find_many_by_claim_id';

@Injectable()
export class ClaimStatusController {
  constructor(private readonly claimStatusService: ClaimStatusService) {}

  async createOne(claimStatusCreateArgs: Prisma.ClaimStatusCreateArgs) {
    return await this.claimStatusService.createOne(claimStatusCreateArgs);
  }

  async createMany(
    claimStatusCreateManyArgs: Prisma.ClaimStatusCreateManyArgs,
  ) {
    return await this.claimStatusService.createMany(claimStatusCreateManyArgs);
  }

  async findOne(claimStatusFindUniqueArgs: Prisma.ClaimStatusFindUniqueArgs) {
    return await this.claimStatusService.findOne(claimStatusFindUniqueArgs);
  }

  async findMany(claimStatusFindManyArgs: Prisma.ClaimStatusFindManyArgs) {
    return await this.claimStatusService.findMany(claimStatusFindManyArgs);
  }

  async findFirst(claimStatusFindFirstArgs: Prisma.ClaimStatusFindFirstArgs) {
    return await this.claimStatusService.findFirst(claimStatusFindFirstArgs);
  }

  async updateOne(claimStatusUpdateOneArgs: Prisma.ClaimStatusUpdateArgs) {
    return await this.claimStatusService.updateOne(claimStatusUpdateOneArgs);
  }

  async updateMany(
    claimStatusUpdateManyArgs: Prisma.ClaimStatusUpdateManyArgs,
  ) {
    return await this.claimStatusService.updateMany(claimStatusUpdateManyArgs);
  }

  async delete(claimStatusDeleteArgs: Prisma.ClaimStatusDeleteArgs) {
    return await this.claimStatusService.delete(claimStatusDeleteArgs);
  }

  async deleteMany(
    claimStatusDeleteManyArgs: Prisma.ClaimStatusDeleteManyArgs,
  ) {
    return await this.claimStatusService.deleteMany(claimStatusDeleteManyArgs);
  }

  async aggregate(claimStatusAggregateArgs: Prisma.ClaimStatusAggregateArgs) {
    return await this.claimStatusService.aggregate(claimStatusAggregateArgs);
  }

  async count(claimStatusCountArgs: Prisma.ClaimStatusCountArgs) {
    return await this.claimStatusService.count(claimStatusCountArgs);
  }

  async claimStatusTypesFindMany(): Promise<string[]> {
    return Object.keys(ClaimStatusType);
  }

  async findManyByClaimId(
    claimStatusFindManyByClaimIdArgs: ClaimStatusFindManyByClaimIdArgs,
  ): Promise<ClaimStatus[]> {
    return await this.claimStatusService.findMany({});
  }
}
