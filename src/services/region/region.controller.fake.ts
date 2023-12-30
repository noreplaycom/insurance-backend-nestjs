import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RegionController } from './region.controller';
import { Region } from 'src/@generated';
import { fakeRegionComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeRegionController implements RegionController {
  private regions: Region[] = [];

  constructor() {
    const initial = 150;
    for (let i = 0; i < initial; i++) {
      this.regions.push(fakeRegionComplete());
    }
  }

  async createOne(regionCreateArgs: Prisma.RegionCreateArgs): Promise<Region> {
    const fake = fakeRegionComplete()
    this.regions.push(fake);
    return fake;
  }

  async createMany(regionCreateManyArgs: Prisma.RegionCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = regionCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.regions.push(fakeRegionComplete());
      }
      return { count: totalFake };
    } else {
      this.regions.push(fakeRegionComplete());
      return { count: 1 }
    }
  }

  async findOne(regionFindUniqueArgs: Prisma.RegionFindUniqueArgs): Promise<Region> {
    return this.regions.find(region => region.id === regionFindUniqueArgs.where.id);
  }

  async findMany(regionFindManyArgs: Prisma.RegionFindManyArgs): Promise<Region[]> {
    return this.regions.filter(region => region);
  }

  async findFirst(regionFindFirstArgs: Prisma.RegionFindFirstArgs): Promise<Region> {
    return this.regions.find(region => region);
  }

  async updateOne(regionUpdateOneArgs: Prisma.RegionUpdateArgs): Promise<Region> {
    const idx = this.regions.findIndex(region => region.id === regionUpdateOneArgs.where.id);
    this.regions[idx] = {
      ...fakeRegionComplete(),
      id: regionUpdateOneArgs.where.id
    }
    return {
      ...fakeRegionComplete(),
      id: regionUpdateOneArgs.where.id
    }
  }

  async updateMany(regionUpdateManyArgs: Prisma.RegionUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(regionDeleteArgs: Prisma.RegionDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(regionDeleteManyArgs: Prisma.RegionDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(regionAggregateArgs: Prisma.RegionAggregateArgs): Promise<Prisma.GetRegionAggregateType<Prisma.RegionAggregateArgs>> {
    return {
      _avg: this.regions[0],
      _count: true,
      _max: this.regions[0],
      _min: this.regions[this.regions.length - 1],
      _sum: this.regions[0]
    }
  }

  async count(regionCountArgs: Prisma.RegionCountArgs): Promise<number> {
    return this.regions.length;
  }
}
