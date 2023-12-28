import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClaimProcessService {
  constructor(private prisma: PrismaService) {}

  async createOne(claimProcessCreateArgs: Prisma.ClaimProcessCreateArgs) {
    try {
      return await this.prisma.claimProcess.create(claimProcessCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(claimProcessCreateManyArgs: Prisma.ClaimProcessCreateManyArgs) {
    try {
      return await this.prisma.claimProcess.createMany(claimProcessCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(claimProcessFindUniqueArgs: Prisma.ClaimProcessFindUniqueArgs) {
    try {
      return await this.prisma.claimProcess.findUnique(claimProcessFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(claimProcessFindManyArgs: Prisma.ClaimProcessFindManyArgs) {
    try {
      return await this.prisma.claimProcess.findMany(claimProcessFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(claimProcessFindFirstArgs: Prisma.ClaimProcessFindFirstArgs) {
    try {
      return await this.prisma.claimProcess.findFirst(claimProcessFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(claimProcessUpdateOneArgs: Prisma.ClaimProcessUpdateArgs) {
    try {
      return await this.prisma.claimProcess.update(claimProcessUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(claimProcessUpdateManyArgs: Prisma.ClaimProcessUpdateManyArgs) {
    try {
      return await this.prisma.claimProcess.updateMany(claimProcessUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(claimProcessDeleteArgs: Prisma.ClaimProcessDeleteArgs) {
    try {
      await this.prisma.claimProcess.delete(claimProcessDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(claimProcessDeleteManyArgs: Prisma.ClaimProcessDeleteManyArgs) {
    try {
      await this.prisma.claimProcess.deleteMany(claimProcessDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(claimProcessAggregateArgs: Prisma.ClaimProcessAggregateArgs) {
    try {
      return await this.prisma.claimProcess.aggregate(claimProcessAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(claimProcessCountArgs: Prisma.ClaimProcessCountArgs) {
    try {
      return await this.prisma.claimProcess.count(claimProcessCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
