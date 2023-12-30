import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { Region } from 'src/@generated';

@Injectable()
export class PrismaRegionController implements RegionController {
  constructor(private readonly regionService: RegionService) {}

  async createOne(regionCreateArgs: Prisma.RegionCreateArgs): Promise<Region> {
    return await this.regionService.createOne(regionCreateArgs);
  }

  async createMany(regionCreateManyArgs: Prisma.RegionCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.regionService.createMany(regionCreateManyArgs);
  }

  async findOne(regionFindUniqueArgs: Prisma.RegionFindUniqueArgs): Promise<Region> {
    return await this.regionService.findOne(regionFindUniqueArgs);
  }

  async findMany(regionFindManyArgs: Prisma.RegionFindManyArgs): Promise<Region[]> {
    return await this.regionService.findMany(regionFindManyArgs);
  }

  async findFirst(regionFindFirstArgs: Prisma.RegionFindFirstArgs): Promise<Region> {
    return await this.regionService.findFirst(regionFindFirstArgs);
  }

  async updateOne(regionUpdateOneArgs: Prisma.RegionUpdateArgs): Promise<Region> {
    return await this.regionService.updateOne(regionUpdateOneArgs);
  }

  async updateMany(regionUpdateManyArgs: Prisma.RegionUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.regionService.updateMany(regionUpdateManyArgs);
  }

  async delete(regionDeleteArgs: Prisma.RegionDeleteArgs): Promise<boolean> {
    return await this.regionService.delete(regionDeleteArgs);
  }

  async deleteMany(regionDeleteManyArgs: Prisma.RegionDeleteManyArgs): Promise<boolean> {
    return await this.regionService.deleteMany(regionDeleteManyArgs);
  }

  async aggregate(regionAggregateArgs: Prisma.RegionAggregateArgs): Promise<Prisma.GetRegionAggregateType<Prisma.RegionAggregateArgs>> {
    return await this.regionService.aggregate(regionAggregateArgs);
  }

  async count(regionCountArgs: Prisma.RegionCountArgs): Promise<number> {
    return await this.regionService.count(regionCountArgs);
  }
}
