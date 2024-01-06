import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BranchService } from './branch.service';

@Injectable()
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  async createOne(branchCreateArgs: Prisma.BranchCreateArgs) {
    return await this.branchService.createOne(branchCreateArgs);
  }

  async createMany(branchCreateManyArgs: Prisma.BranchCreateManyArgs) {
    return await this.branchService.createMany(branchCreateManyArgs);
  }

  async findOne(branchFindUniqueArgs: Prisma.BranchFindUniqueArgs) {
    return await this.branchService.findOne(branchFindUniqueArgs);
  }

  async findMany(branchFindManyArgs: Prisma.BranchFindManyArgs) {
    return await this.branchService.findMany(branchFindManyArgs);
  }

  async findFirst(branchFindFirstArgs: Prisma.BranchFindFirstArgs) {
    return await this.branchService.findFirst(branchFindFirstArgs);
  }

  async updateOne(branchUpdateOneArgs: Prisma.BranchUpdateArgs) {
    return await this.branchService.updateOne(branchUpdateOneArgs);
  }

  async updateMany(branchUpdateManyArgs: Prisma.BranchUpdateManyArgs) {
    return await this.branchService.updateMany(branchUpdateManyArgs);
  }

  async delete(branchDeleteArgs: Prisma.BranchDeleteArgs) {
    return await this.branchService.delete(branchDeleteArgs);
  }

  async deleteMany(branchDeleteManyArgs: Prisma.BranchDeleteManyArgs) {
    return await this.branchService.deleteMany(branchDeleteManyArgs);
  }

  async aggregate(branchAggregateArgs: Prisma.BranchAggregateArgs) {
    return await this.branchService.aggregate(branchAggregateArgs);
  }

  async count(branchCountArgs: Prisma.BranchCountArgs) {
    return await this.branchService.count(branchCountArgs);
  }
}
