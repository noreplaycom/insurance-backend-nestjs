import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClaimFinancialController } from './claim-financial.controller';
import { ClaimFinancial } from 'src/@generated';
import { fakeClaimFinancialComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeClaimFinancialController implements ClaimFinancialController {
  private claimFinancials: ClaimFinancial[] = [];

  constructor() {}

  async createOne(claimFinancialCreateArgs: Prisma.ClaimFinancialCreateArgs): Promise<ClaimFinancial> {
    const fake = fakeClaimFinancialComplete()
    this.claimFinancials.push(fake);
    return fake;
  }

  async createMany(claimFinancialCreateManyArgs: Prisma.ClaimFinancialCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = claimFinancialCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.claimFinancials.push(fakeClaimFinancialComplete());
      }
      return { count: totalFake };
    } else {
      this.claimFinancials.push(fakeClaimFinancialComplete());
      return { count: 1 }
    }
  }

  async findOne(claimFinancialFindUniqueArgs: Prisma.ClaimFinancialFindUniqueArgs): Promise<ClaimFinancial> {
    return this.claimFinancials.find(claimFinancial => claimFinancial.id === claimFinancialFindUniqueArgs.where.id);
  }

  async findMany(claimFinancialFindManyArgs: Prisma.ClaimFinancialFindManyArgs): Promise<ClaimFinancial[]> {
    return this.claimFinancials.filter(claimFinancial => claimFinancial);
  }

  async findFirst(claimFinancialFindFirstArgs: Prisma.ClaimFinancialFindFirstArgs): Promise<ClaimFinancial> {
    return this.claimFinancials.find(claimFinancial => claimFinancial);
  }

  async updateOne(claimFinancialUpdateOneArgs: Prisma.ClaimFinancialUpdateArgs): Promise<ClaimFinancial> {
    const idx = this.claimFinancials.findIndex(claimFinancial => claimFinancial.id === claimFinancialUpdateOneArgs.where.id);
    this.claimFinancials[idx] = {
      ...fakeClaimFinancialComplete(),
      id: claimFinancialUpdateOneArgs.where.id
    }
    return {
      ...fakeClaimFinancialComplete(),
      id: claimFinancialUpdateOneArgs.where.id
    }
  }

  async updateMany(claimFinancialUpdateManyArgs: Prisma.ClaimFinancialUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(claimFinancialDeleteArgs: Prisma.ClaimFinancialDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(claimFinancialDeleteManyArgs: Prisma.ClaimFinancialDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(claimFinancialAggregateArgs: Prisma.ClaimFinancialAggregateArgs): Promise<Prisma.GetClaimFinancialAggregateType<Prisma.ClaimFinancialAggregateArgs>> {
    return {
      _avg: this.claimFinancials[0],
      _count: true,
      _max: this.claimFinancials[0],
      _min: this.claimFinancials[this.claimFinancials.length - 1],
      _sum: this.claimFinancials[0]
    }
  }

  async count(claimFinancialCountArgs: Prisma.ClaimFinancialCountArgs): Promise<number> {
    return this.claimFinancials.length;
  }
}
