import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { Branch } from 'src/@generated';

@Injectable()
export class PrismaBranchController implements BranchController {
  constructor(private readonly branchService: BranchService) {}

  async createOne(branchCreateArgs: Prisma.BranchCreateArgs): Promise<Branch> {
    return await this.branchService.createOne(branchCreateArgs);
  }

  async createMany(branchCreateManyArgs: Prisma.BranchCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.branchService.createMany(branchCreateManyArgs);
  }

  async findOne(branchFindUniqueArgs: Prisma.BranchFindUniqueArgs): Promise<Branch> {
    return await this.branchService.findOne(branchFindUniqueArgs);
  }

  async findMany(branchFindManyArgs: Prisma.BranchFindManyArgs): Promise<Branch[]> {
    return await this.branchService.findMany(branchFindManyArgs);
  }

  async findFirst(branchFindFirstArgs: Prisma.BranchFindFirstArgs): Promise<Branch> {
    return await this.branchService.findFirst(branchFindFirstArgs);
  }

  async updateOne(branchUpdateOneArgs: Prisma.BranchUpdateArgs): Promise<Branch> {
    return await this.branchService.updateOne(branchUpdateOneArgs);
  }

  async updateMany(branchUpdateManyArgs: Prisma.BranchUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.branchService.updateMany(branchUpdateManyArgs);
  }

  async delete(branchDeleteArgs: Prisma.BranchDeleteArgs): Promise<boolean> {
    return await this.branchService.delete(branchDeleteArgs);
  }

  async deleteMany(branchDeleteManyArgs: Prisma.BranchDeleteManyArgs): Promise<boolean> {
    return await this.branchService.deleteMany(branchDeleteManyArgs);
  }

  async aggregate(branchAggregateArgs: Prisma.BranchAggregateArgs): Promise<Prisma.GetBranchAggregateType<Prisma.BranchAggregateArgs>> {
    return await this.branchService.aggregate(branchAggregateArgs);
  }

  async count(branchCountArgs: Prisma.BranchCountArgs): Promise<number> {
    return await this.branchService.count(branchCountArgs);
  }
}
