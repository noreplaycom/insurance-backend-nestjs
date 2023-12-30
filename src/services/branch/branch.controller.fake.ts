import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BranchController } from './branch.controller';
import { Branch } from 'src/@generated';
import { fakeBranchComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeBranchController implements BranchController {
  private branchs: Branch[] = [];

  constructor() {}

  async createOne(branchCreateArgs: Prisma.BranchCreateArgs): Promise<Branch> {
    const fake = fakeBranchComplete()
    this.branchs.push(fake);
    return fake;
  }

  async createMany(branchCreateManyArgs: Prisma.BranchCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = branchCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.branchs.push(fakeBranchComplete());
      }
      return { count: totalFake };
    } else {
      this.branchs.push(fakeBranchComplete());
      return { count: 1 }
    }
  }

  async findOne(branchFindUniqueArgs: Prisma.BranchFindUniqueArgs): Promise<Branch> {
    return this.branchs.find(branch => branch.id === branchFindUniqueArgs.where.id);
  }

  async findMany(branchFindManyArgs: Prisma.BranchFindManyArgs): Promise<Branch[]> {
    return this.branchs.filter(branch => branch);
  }

  async findFirst(branchFindFirstArgs: Prisma.BranchFindFirstArgs): Promise<Branch> {
    return this.branchs.find(branch => branch);
  }

  async updateOne(branchUpdateOneArgs: Prisma.BranchUpdateArgs): Promise<Branch> {
    const idx = this.branchs.findIndex(branch => branch.id === branchUpdateOneArgs.where.id);
    this.branchs[idx] = {
      ...fakeBranchComplete(),
      id: branchUpdateOneArgs.where.id
    }
    return {
      ...fakeBranchComplete(),
      id: branchUpdateOneArgs.where.id
    }
  }

  async updateMany(branchUpdateManyArgs: Prisma.BranchUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(branchDeleteArgs: Prisma.BranchDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(branchDeleteManyArgs: Prisma.BranchDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(branchAggregateArgs: Prisma.BranchAggregateArgs): Promise<Prisma.GetBranchAggregateType<Prisma.BranchAggregateArgs>> {
    return {
      _avg: this.branchs[0],
      _count: true,
      _max: this.branchs[0],
      _min: this.branchs[this.branchs.length - 1],
      _sum: this.branchs[0]
    }
  }

  async count(branchCountArgs: Prisma.BranchCountArgs): Promise<number> {
    return this.branchs.length;
  }
}
