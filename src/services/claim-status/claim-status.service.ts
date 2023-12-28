import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClaimStatusService {
  constructor(private prisma: PrismaService) {}

  async createOne(claimStatusCreateArgs: Prisma.ClaimStatusCreateArgs) {
    try {
      return await this.prisma.claimStatus.create(claimStatusCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(claimStatusCreateManyArgs: Prisma.ClaimStatusCreateManyArgs) {
    try {
      return await this.prisma.claimStatus.createMany(claimStatusCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(claimStatusFindUniqueArgs: Prisma.ClaimStatusFindUniqueArgs) {
    try {
      return await this.prisma.claimStatus.findUnique(claimStatusFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(claimStatusFindManyArgs: Prisma.ClaimStatusFindManyArgs) {
    try {
      return await this.prisma.claimStatus.findMany(claimStatusFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(claimStatusFindFirstArgs: Prisma.ClaimStatusFindFirstArgs) {
    try {
      return await this.prisma.claimStatus.findFirst(claimStatusFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(claimStatusUpdateOneArgs: Prisma.ClaimStatusUpdateArgs) {
    try {
      return await this.prisma.claimStatus.update(claimStatusUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(claimStatusUpdateManyArgs: Prisma.ClaimStatusUpdateManyArgs) {
    try {
      return await this.prisma.claimStatus.updateMany(claimStatusUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(claimStatusDeleteArgs: Prisma.ClaimStatusDeleteArgs) {
    try {
      await this.prisma.claimStatus.delete(claimStatusDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(claimStatusDeleteManyArgs: Prisma.ClaimStatusDeleteManyArgs) {
    try {
      await this.prisma.claimStatus.deleteMany(claimStatusDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(claimStatusAggregateArgs: Prisma.ClaimStatusAggregateArgs) {
    try {
      return await this.prisma.claimStatus.aggregate(claimStatusAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(claimStatusCountArgs: Prisma.ClaimStatusCountArgs) {
    try {
      return await this.prisma.claimStatus.count(claimStatusCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
