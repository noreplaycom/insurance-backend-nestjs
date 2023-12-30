import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimController } from '../claim.controller';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Claim } from 'src/@generated';
import { fakeClaimComplete } from '../../../../prisma/fake-data';

@Injectable()
export class FakeClaimController implements ClaimController {
  private claims: Claim[] = [];

  constructor() {}

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs<DefaultArgs>): Promise<Claim> {
    return this.claims.find(claim => claim)
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs<DefaultArgs>): Promise<Claim[]> {
    const taken = claimFindManyArgs.take || 10;
    const skipped = claimFindManyArgs.skip || 0;
    return this.claims.slice(skipped, skipped + taken);
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs<DefaultArgs>): Promise<Claim> {
    return this.claims.find(claim => claim.id === claimFindUniqueArgs.where.id)
  }

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs<DefaultArgs>): Promise<Claim> {
    const claim = fakeClaimComplete();
    this.claims.push(claim);
    return claim;
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs<DefaultArgs>): Promise<Prisma.BatchPayload> {
    const claim = claimCreateManyArgs.data
    if (Array.isArray(claim)) {
      const count = claim.length
      for (let i = 0; i < count; i++) {
        this.claims.push(fakeClaimComplete())
      }
      return { count };
    } else {
      this.claims.push(fakeClaimComplete());
      return { count: 1 }
    }
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs<DefaultArgs>): Promise<Claim> {
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

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs<DefaultArgs>): Promise<Prisma.BatchPayload> {
    const filteredClaim = this.claims.filter(claim => claim.admedicaStatus === claimUpdateManyArgs.where.admedicaStatus)
    return { count: filteredClaim.length }
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs<DefaultArgs>): Promise<boolean> {
    const idx = this.claims.findIndex(claim => claim.id === claimDeleteArgs.where.id);
    this.claims.splice(idx, 1);
    return true;
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs<DefaultArgs>): Promise<boolean> {
    const filteredClaim = this.claims.filter(claim => claim.admedicaStatus === claimDeleteManyArgs.where.admedicaStatus)
    return true;
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs<DefaultArgs>): Promise<Prisma.GetClaimAggregateType<Prisma.ClaimAggregateArgs<DefaultArgs>>> {
    return {
      _avg: this.claims[0],
      _count: true,
      _max: this.claims[0],
      _min: this.claims[this.claims.length - 1],
      _sum: this.claims[0]
    }
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs<DefaultArgs>): Promise<number> {
    return this.claims.filter(claim => claim.id === claimCountArgs.where.claimStatuses).length;
  }
}