import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimController } from './claim.controller';
import { Claim } from 'src/@generated';
import { fakeClaimComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeClaimController implements ClaimController {
  private claims: Claim[] = [];

  constructor() {}

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs): Promise<Claim> {
    const fake = fakeClaimComplete()
    this.claims.push(fake);
    return fake;
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = claimCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.claims.push(fakeClaimComplete());
      }
      return { count: totalFake };
    } else {
      this.claims.push(fakeClaimComplete());
      return { count: 1 }
    }
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs): Promise<Claim> {
    return this.claims.find(claim => claim.id === claimFindUniqueArgs.where.id);
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs): Promise<Claim[]> {
    return this.claims.filter(claim => claim);
  }

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs): Promise<Claim> {
    return this.claims.find(claim => claim);
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs): Promise<Claim> {
    const idx = this.claims.findIndex(claim => claim.id === claimUpdateOneArgs.where.id);
    this.claims[idx] = {
      ...fakeClaimComplete(),
      id: claimUpdateOneArgs.where.id
    }
    return {
      ...fakeClaimComplete(),
      id: claimUpdateOneArgs.where.id
    }
  }

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs): Promise<Prisma.GetClaimAggregateType<Prisma.ClaimAggregateArgs>> {
    return {
      _avg: this.claims[0],
      _count: true,
      _max: this.claims[0],
      _min: this.claims[this.claims.length - 1],
      _sum: this.claims[0]
    }
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs): Promise<number> {
    return this.claims.length;
  }
}
