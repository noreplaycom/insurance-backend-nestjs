import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClaimTypeService {
  constructor(private prisma: PrismaService) {}

  async createOne(claimTypeCreateArgs: Prisma.ClaimTypeCreateArgs) {
    try {
      return await this.prisma.claimType.create(claimTypeCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(claimTypeCreateManyArgs: Prisma.ClaimTypeCreateManyArgs) {
    try {
      return await this.prisma.claimType.createMany(claimTypeCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(claimTypeFindUniqueArgs: Prisma.ClaimTypeFindUniqueArgs) {
    try {
      return await this.prisma.claimType.findUnique(claimTypeFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(claimTypeFindManyArgs: Prisma.ClaimTypeFindManyArgs) {
    try {
      return await this.prisma.claimType.findMany(claimTypeFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(claimTypeFindFirstArgs: Prisma.ClaimTypeFindFirstArgs) {
    try {
      return await this.prisma.claimType.findFirst(claimTypeFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(claimTypeUpdateOneArgs: Prisma.ClaimTypeUpdateArgs) {
    try {
      return await this.prisma.claimType.update(claimTypeUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(claimTypeUpdateManyArgs: Prisma.ClaimTypeUpdateManyArgs) {
    try {
      return await this.prisma.claimType.updateMany(claimTypeUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(claimTypeDeleteArgs: Prisma.ClaimTypeDeleteArgs) {
    try {
      await this.prisma.claimType.delete(claimTypeDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(claimTypeDeleteManyArgs: Prisma.ClaimTypeDeleteManyArgs) {
    try {
      await this.prisma.claimType.deleteMany(claimTypeDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(claimTypeAggregateArgs: Prisma.ClaimTypeAggregateArgs) {
    try {
      return await this.prisma.claimType.aggregate(claimTypeAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(claimTypeCountArgs: Prisma.ClaimTypeCountArgs) {
    try {
      return await this.prisma.claimType.count(claimTypeCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
