import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimProcessService } from './claim-process.service';
import { ClaimProcessController } from './claim-process.controller';
import { ClaimProcess } from 'src/@generated';

@Injectable()
export class PrismaClaimProcessController implements ClaimProcessController {
  constructor(private readonly claimProcessService: ClaimProcessService) {}

  async createOne(claimProcessCreateArgs: Prisma.ClaimProcessCreateArgs): Promise<ClaimProcess> {
    return await this.claimProcessService.createOne(claimProcessCreateArgs);
  }

  async createMany(claimProcessCreateManyArgs: Prisma.ClaimProcessCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimProcessService.createMany(claimProcessCreateManyArgs);
  }

  async findOne(claimProcessFindUniqueArgs: Prisma.ClaimProcessFindUniqueArgs): Promise<ClaimProcess> {
    return await this.claimProcessService.findOne(claimProcessFindUniqueArgs);
  }

  async findMany(claimProcessFindManyArgs: Prisma.ClaimProcessFindManyArgs): Promise<ClaimProcess[]> {
    return await this.claimProcessService.findMany(claimProcessFindManyArgs);
  }

  async findFirst(claimProcessFindFirstArgs: Prisma.ClaimProcessFindFirstArgs): Promise<ClaimProcess> {
    return await this.claimProcessService.findFirst(claimProcessFindFirstArgs);
  }

  async updateOne(claimProcessUpdateOneArgs: Prisma.ClaimProcessUpdateArgs): Promise<ClaimProcess> {
    return await this.claimProcessService.updateOne(claimProcessUpdateOneArgs);
  }

  async updateMany(claimProcessUpdateManyArgs: Prisma.ClaimProcessUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimProcessService.updateMany(claimProcessUpdateManyArgs);
  }

  async delete(claimProcessDeleteArgs: Prisma.ClaimProcessDeleteArgs): Promise<boolean> {
    return await this.claimProcessService.delete(claimProcessDeleteArgs);
  }

  async deleteMany(claimProcessDeleteManyArgs: Prisma.ClaimProcessDeleteManyArgs): Promise<boolean> {
    return await this.claimProcessService.deleteMany(claimProcessDeleteManyArgs);
  }

  async aggregate(claimProcessAggregateArgs: Prisma.ClaimProcessAggregateArgs): Promise<Prisma.GetClaimProcessAggregateType<Prisma.ClaimProcessAggregateArgs>> {
    return await this.claimProcessService.aggregate(claimProcessAggregateArgs);
  }

  async count(claimProcessCountArgs: Prisma.ClaimProcessCountArgs): Promise<number> {
    return await this.claimProcessService.count(claimProcessCountArgs);
  }
}
