import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimStatusService } from './claim-status.service';
import { ClaimStatusController } from './claim-status.controller';
import { ClaimStatus } from 'src/@generated';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class PrismaClaimStatusController implements ClaimStatusController {
  constructor(private readonly claimStatusService: ClaimStatusService) {}

  async createOne(claimStatusCreateArgs: Prisma.ClaimStatusCreateArgs): Promise<ClaimStatus> {
    return await this.claimStatusService.createOne(claimStatusCreateArgs);
  }

  async createMany(claimStatusCreateManyArgs: Prisma.ClaimStatusCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimStatusService.createMany(claimStatusCreateManyArgs);
  }

  async findOne(claimStatusFindUniqueArgs: Prisma.ClaimStatusFindUniqueArgs): Promise<ClaimStatus> {
    return await this.claimStatusService.findOne(claimStatusFindUniqueArgs);
  }

  async findMany(claimStatusFindManyArgs: Prisma.ClaimStatusFindManyArgs): Promise<ClaimStatus[]> {
    return await this.claimStatusService.findMany(claimStatusFindManyArgs);
  }

  async findFirst(claimStatusFindFirstArgs: Prisma.ClaimStatusFindFirstArgs): Promise<ClaimStatus> {
    return await this.claimStatusService.findFirst(claimStatusFindFirstArgs);
  }

  async updateOne(claimStatusUpdateOneArgs: Prisma.ClaimStatusUpdateArgs): Promise<ClaimStatus> {
    return await this.claimStatusService.updateOne(claimStatusUpdateOneArgs);
  }

  async updateMany(claimStatusUpdateManyArgs: Prisma.ClaimStatusUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimStatusService.updateMany(claimStatusUpdateManyArgs);
  }

  async delete(claimStatusDeleteArgs: Prisma.ClaimStatusDeleteArgs): Promise<boolean> {
    return await this.claimStatusService.delete(claimStatusDeleteArgs);
  }

  async deleteMany(claimStatusDeleteManyArgs: Prisma.ClaimStatusDeleteManyArgs): Promise<boolean> {
    return await this.claimStatusService.deleteMany(claimStatusDeleteManyArgs);
  }

  async aggregate(claimStatusAggregateArgs: Prisma.ClaimStatusAggregateArgs): Promise<Prisma.GetClaimStatusAggregateType<Prisma.ClaimStatusAggregateArgs>> {
    return await this.claimStatusService.aggregate(claimStatusAggregateArgs);
  }

  async count(claimStatusCountArgs: Prisma.ClaimStatusCountArgs): Promise<number> {
    return await this.claimStatusService.count(claimStatusCountArgs);
  }

  async getClaimStatusTypes(claimStatusCountArgs: Prisma.ClaimStatusCountArgs<DefaultArgs>): Promise<string[]> {
    return [];
  }
}
