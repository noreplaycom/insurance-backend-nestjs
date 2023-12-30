import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimTypeService } from './claim-type.service';
import { ClaimTypeController } from './claim-type.controller';
import { ClaimType } from 'src/@generated';

@Injectable()
export class PrismaClaimTypeController implements ClaimTypeController {
  constructor(private readonly claimTypeService: ClaimTypeService) {}

  async createOne(claimTypeCreateArgs: Prisma.ClaimTypeCreateArgs): Promise<ClaimType> {
    return await this.claimTypeService.createOne(claimTypeCreateArgs);
  }

  async createMany(claimTypeCreateManyArgs: Prisma.ClaimTypeCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimTypeService.createMany(claimTypeCreateManyArgs);
  }

  async findOne(claimTypeFindUniqueArgs: Prisma.ClaimTypeFindUniqueArgs): Promise<ClaimType> {
    return await this.claimTypeService.findOne(claimTypeFindUniqueArgs);
  }

  async findMany(claimTypeFindManyArgs: Prisma.ClaimTypeFindManyArgs): Promise<ClaimType[]> {
    return await this.claimTypeService.findMany(claimTypeFindManyArgs);
  }

  async findFirst(claimTypeFindFirstArgs: Prisma.ClaimTypeFindFirstArgs): Promise<ClaimType> {
    return await this.claimTypeService.findFirst(claimTypeFindFirstArgs);
  }

  async updateOne(claimTypeUpdateOneArgs: Prisma.ClaimTypeUpdateArgs): Promise<ClaimType> {
    return await this.claimTypeService.updateOne(claimTypeUpdateOneArgs);
  }

  async updateMany(claimTypeUpdateManyArgs: Prisma.ClaimTypeUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.claimTypeService.updateMany(claimTypeUpdateManyArgs);
  }

  async delete(claimTypeDeleteArgs: Prisma.ClaimTypeDeleteArgs): Promise<boolean> {
    return await this.claimTypeService.delete(claimTypeDeleteArgs);
  }

  async deleteMany(claimTypeDeleteManyArgs: Prisma.ClaimTypeDeleteManyArgs): Promise<boolean> {
    return await this.claimTypeService.deleteMany(claimTypeDeleteManyArgs);
  }

  async aggregate(claimTypeAggregateArgs: Prisma.ClaimTypeAggregateArgs): Promise<Prisma.GetClaimTypeAggregateType<Prisma.ClaimTypeAggregateArgs>> {
    return await this.claimTypeService.aggregate(claimTypeAggregateArgs);
  }

  async count(claimTypeCountArgs: Prisma.ClaimTypeCountArgs): Promise<number> {
    return await this.claimTypeService.count(claimTypeCountArgs);
  }
}
