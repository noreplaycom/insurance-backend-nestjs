import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) {}

  async createOne(branchCreateArgs: Prisma.BranchCreateArgs) {
    try {
      return await this.prisma.branch.create(branchCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(branchCreateManyArgs: Prisma.BranchCreateManyArgs) {
    try {
      return await this.prisma.branch.createMany(branchCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(branchFindUniqueArgs: Prisma.BranchFindUniqueArgs) {
    try {
      return await this.prisma.branch.findUnique(branchFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(branchFindManyArgs: Prisma.BranchFindManyArgs) {
    try {
      return await this.prisma.branch.findMany(branchFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(branchFindFirstArgs: Prisma.BranchFindFirstArgs) {
    try {
      return await this.prisma.branch.findFirst(branchFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(branchUpdateOneArgs: Prisma.BranchUpdateArgs) {
    try {
      return await this.prisma.branch.update(branchUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(branchUpdateManyArgs: Prisma.BranchUpdateManyArgs) {
    try {
      return await this.prisma.branch.updateMany(branchUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(branchDeleteArgs: Prisma.BranchDeleteArgs) {
    try {
      await this.prisma.branch.delete(branchDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(branchDeleteManyArgs: Prisma.BranchDeleteManyArgs) {
    try {
      await this.prisma.branch.deleteMany(branchDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(branchAggregateArgs: Prisma.BranchAggregateArgs) {
    try {
      return await this.prisma.branch.aggregate(branchAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(branchCountArgs: Prisma.BranchCountArgs) {
    try {
      return await this.prisma.branch.count(branchCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
