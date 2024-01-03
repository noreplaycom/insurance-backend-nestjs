import { Injectable } from '@nestjs/common';
import { ClaimStatusType, Prisma } from '@prisma/client';
import { ClaimStatusController } from './claim-status.controller';
import { ClaimStatus } from 'src/@generated';
import { fakeClaimStatusComplete } from '../../../prisma/fake-data';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ClaimStatusFindManyByClaimIdArgs } from './dto/claim_status_find_many_by_claim_id';

@Injectable()
export class FakeClaimStatusController implements ClaimStatusController {
  private claimStatuss: ClaimStatus[] = [];

  constructor() {
    const initial = 20;
    for (let i = 0; i < initial; i++) {
      this.claimStatuss.push(fakeClaimStatusComplete());
    }
  }

  async createOne(claimStatusCreateArgs: Prisma.ClaimStatusCreateArgs): Promise<ClaimStatus> {
    const fake = fakeClaimStatusComplete()
    this.claimStatuss.push(fake);
    return fake;
  }

  async createMany(claimStatusCreateManyArgs: Prisma.ClaimStatusCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = claimStatusCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.claimStatuss.push(fakeClaimStatusComplete());
      }
      return { count: totalFake };
    } else {
      this.claimStatuss.push(fakeClaimStatusComplete());
      return { count: 1 }
    }
  }

  async findOne(claimStatusFindUniqueArgs: Prisma.ClaimStatusFindUniqueArgs): Promise<ClaimStatus> {
    return this.claimStatuss.find(claimStatus => claimStatus.id === claimStatusFindUniqueArgs.where.id);
  }

  async findMany(claimStatusFindManyArgs: Prisma.ClaimStatusFindManyArgs): Promise<ClaimStatus[]> {
    return this.claimStatuss.filter(claimStatus => claimStatus);
  }

  async findFirst(claimStatusFindFirstArgs: Prisma.ClaimStatusFindFirstArgs): Promise<ClaimStatus> {
    return this.claimStatuss.find(claimStatus => claimStatus);
  }

  async updateOne(claimStatusUpdateOneArgs: Prisma.ClaimStatusUpdateArgs): Promise<ClaimStatus> {
    const idx = this.claimStatuss.findIndex(claimStatus => claimStatus.id === claimStatusUpdateOneArgs.where.id);
    this.claimStatuss[idx] = {
      ...fakeClaimStatusComplete(),
      id: claimStatusUpdateOneArgs.where.id
    }
    return {
      ...fakeClaimStatusComplete(),
      id: claimStatusUpdateOneArgs.where.id
    }
  }

  async updateMany(claimStatusUpdateManyArgs: Prisma.ClaimStatusUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(claimStatusDeleteArgs: Prisma.ClaimStatusDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(claimStatusDeleteManyArgs: Prisma.ClaimStatusDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(claimStatusAggregateArgs: Prisma.ClaimStatusAggregateArgs): Promise<Prisma.GetClaimStatusAggregateType<Prisma.ClaimStatusAggregateArgs>> {
    return {
      _avg: this.claimStatuss[0],
      _count: true,
      _max: this.claimStatuss[0],
      _min: this.claimStatuss[this.claimStatuss.length - 1],
      _sum: this.claimStatuss[0]
    }
  }

  async count(claimStatusCountArgs: Prisma.ClaimStatusCountArgs): Promise<number> {
    return this.claimStatuss.length;
  }

  async getClaimStatusTypes(claimStatusCountArgs: Prisma.ClaimStatusCountArgs<DefaultArgs>): Promise<string[]> {
    return Object.keys(ClaimStatusType)
  }

  async findManyByClaimId(claimStatusFindManyByClaimIdArgs: ClaimStatusFindManyByClaimIdArgs): Promise<ClaimStatus[]> {
    return this.claimStatuss.filter(claim => claim);
  }
}
