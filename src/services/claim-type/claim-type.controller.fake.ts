import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimTypeController } from './claim-type.controller';
import { ClaimType } from 'src/@generated';
import { fakeClaimTypeComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeClaimTypeController implements ClaimTypeController {
  private claimTypes: ClaimType[] = [];

  constructor() {}

  async createOne(claimTypeCreateArgs: Prisma.ClaimTypeCreateArgs): Promise<ClaimType> {
    const fake = fakeClaimTypeComplete()
    this.claimTypes.push(fake);
    return fake;
  }

  async createMany(claimTypeCreateManyArgs: Prisma.ClaimTypeCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = claimTypeCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.claimTypes.push(fakeClaimTypeComplete());
      }
      return { count: totalFake };
    } else {
      this.claimTypes.push(fakeClaimTypeComplete());
      return { count: 1 }
    }
  }

  async findOne(claimTypeFindUniqueArgs: Prisma.ClaimTypeFindUniqueArgs): Promise<ClaimType> {
    return this.claimTypes.find(claimType => claimType.id === claimTypeFindUniqueArgs.where.id);
  }

  async findMany(claimTypeFindManyArgs: Prisma.ClaimTypeFindManyArgs): Promise<ClaimType[]> {
    return this.claimTypes.filter(claimType => claimType);
  }

  async findFirst(claimTypeFindFirstArgs: Prisma.ClaimTypeFindFirstArgs): Promise<ClaimType> {
    return this.claimTypes.find(claimType => claimType);
  }

  async updateOne(claimTypeUpdateOneArgs: Prisma.ClaimTypeUpdateArgs): Promise<ClaimType> {
    const idx = this.claimTypes.findIndex(claimType => claimType.id === claimTypeUpdateOneArgs.where.id);
    this.claimTypes[idx] = {
      ...fakeClaimTypeComplete(),
      id: claimTypeUpdateOneArgs.where.id
    }
    return {
      ...fakeClaimTypeComplete(),
      id: claimTypeUpdateOneArgs.where.id
    }
  }

  async updateMany(claimTypeUpdateManyArgs: Prisma.ClaimTypeUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(claimTypeDeleteArgs: Prisma.ClaimTypeDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(claimTypeDeleteManyArgs: Prisma.ClaimTypeDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(claimTypeAggregateArgs: Prisma.ClaimTypeAggregateArgs): Promise<Prisma.GetClaimTypeAggregateType<Prisma.ClaimTypeAggregateArgs>> {
    return {
      _avg: this.claimTypes[0],
      _count: true,
      _max: this.claimTypes[0],
      _min: this.claimTypes[this.claimTypes.length - 1],
      _sum: this.claimTypes[0]
    }
  }

  async count(claimTypeCountArgs: Prisma.ClaimTypeCountArgs): Promise<number> {
    return this.claimTypes.length;
  }
}
