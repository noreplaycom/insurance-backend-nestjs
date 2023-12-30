import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimProcessController } from './claim-process.controller';
import { ClaimProcess } from 'src/@generated';
import { fakeClaimProcessComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeClaimProcessController implements ClaimProcessController {
  private claimProcesss: ClaimProcess[] = [];

  constructor() {}

  async createOne(claimProcessCreateArgs: Prisma.ClaimProcessCreateArgs): Promise<ClaimProcess> {
    const fake = fakeClaimProcessComplete()
    this.claimProcesss.push(fake);
    return fake;
  }

  async createMany(claimProcessCreateManyArgs: Prisma.ClaimProcessCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = claimProcessCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.claimProcesss.push(fakeClaimProcessComplete());
      }
      return { count: totalFake };
    } else {
      this.claimProcesss.push(fakeClaimProcessComplete());
      return { count: 1 }
    }
  }

  async findOne(claimProcessFindUniqueArgs: Prisma.ClaimProcessFindUniqueArgs): Promise<ClaimProcess> {
    return this.claimProcesss.find(claimProcess => claimProcess.id === claimProcessFindUniqueArgs.where.id);
  }

  async findMany(claimProcessFindManyArgs: Prisma.ClaimProcessFindManyArgs): Promise<ClaimProcess[]> {
    return this.claimProcesss.filter(claimProcess => claimProcess);
  }

  async findFirst(claimProcessFindFirstArgs: Prisma.ClaimProcessFindFirstArgs): Promise<ClaimProcess> {
    return this.claimProcesss.find(claimProcess => claimProcess);
  }

  async updateOne(claimProcessUpdateOneArgs: Prisma.ClaimProcessUpdateArgs): Promise<ClaimProcess> {
    const idx = this.claimProcesss.findIndex(claimProcess => claimProcess.id === claimProcessUpdateOneArgs.where.id);
    this.claimProcesss[idx] = {
      ...fakeClaimProcessComplete(),
      id: claimProcessUpdateOneArgs.where.id
    }
    return {
      ...fakeClaimProcessComplete(),
      id: claimProcessUpdateOneArgs.where.id
    }
  }

  async updateMany(claimProcessUpdateManyArgs: Prisma.ClaimProcessUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(claimProcessDeleteArgs: Prisma.ClaimProcessDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(claimProcessDeleteManyArgs: Prisma.ClaimProcessDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(claimProcessAggregateArgs: Prisma.ClaimProcessAggregateArgs): Promise<Prisma.GetClaimProcessAggregateType<Prisma.ClaimProcessAggregateArgs>> {
    return {
      _avg: this.claimProcesss[0],
      _count: true,
      _max: this.claimProcesss[0],
      _min: this.claimProcesss[this.claimProcesss.length - 1],
      _sum: this.claimProcesss[0]
    }
  }

  async count(claimProcessCountArgs: Prisma.ClaimProcessCountArgs): Promise<number> {
    return this.claimProcesss.length;
  }
}
