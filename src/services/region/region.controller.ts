import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RegionService } from './region.service';

@Injectable()
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  async createOne(regionCreateArgs: Prisma.RegionCreateArgs) {
    return await this.regionService.createOne(regionCreateArgs);
  }

  async createMany(regionCreateManyArgs: Prisma.RegionCreateManyArgs) {
    return await this.regionService.createMany(regionCreateManyArgs);
  }

  async findOne(regionFindUniqueArgs: Prisma.RegionFindUniqueArgs) {
    return await this.regionService.findOne(regionFindUniqueArgs);
  }

  async findMany(regionFindManyArgs: Prisma.RegionFindManyArgs) {
    return await this.regionService.findMany(regionFindManyArgs);
  }

  async findFirst(regionFindFirstArgs: Prisma.RegionFindFirstArgs) {
    return await this.regionService.findFirst(regionFindFirstArgs);
  }

  async updateOne(regionUpdateOneArgs: Prisma.RegionUpdateArgs) {
    return await this.regionService.updateOne(regionUpdateOneArgs);
  }

  async updateMany(regionUpdateManyArgs: Prisma.RegionUpdateManyArgs) {
    return await this.regionService.updateMany(regionUpdateManyArgs);
  }

  async delete(regionDeleteArgs: Prisma.RegionDeleteArgs) {
    return await this.regionService.delete(regionDeleteArgs);
  }

  async deleteMany(regionDeleteManyArgs: Prisma.RegionDeleteManyArgs) {
    return await this.regionService.deleteMany(regionDeleteManyArgs);
  }

  async aggregate(regionAggregateArgs: Prisma.RegionAggregateArgs) {
    return await this.regionService.aggregate(regionAggregateArgs);
  }

  async count(regionCountArgs: Prisma.RegionCountArgs) {
    return await this.regionService.count(regionCountArgs);
  }
}
