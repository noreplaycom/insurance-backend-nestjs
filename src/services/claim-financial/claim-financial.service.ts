import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClaimFinancialService {
  constructor(private prisma: PrismaService) {}

  async createOne(claimFinancialCreateArgs: Prisma.ClaimFinancialCreateArgs) {
    try {
      return await this.prisma.claimFinancial.create(claimFinancialCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(claimFinancialCreateManyArgs: Prisma.ClaimFinancialCreateManyArgs) {
    try {
      return await this.prisma.claimFinancial.createMany(claimFinancialCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(claimFinancialFindUniqueArgs: Prisma.ClaimFinancialFindUniqueArgs) {
    try {
      return await this.prisma.claimFinancial.findUnique(claimFinancialFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(claimFinancialFindManyArgs: Prisma.ClaimFinancialFindManyArgs) {
    try {
      return await this.prisma.claimFinancial.findMany(claimFinancialFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(claimFinancialFindFirstArgs: Prisma.ClaimFinancialFindFirstArgs) {
    try {
      return await this.prisma.claimFinancial.findFirst(claimFinancialFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(claimFinancialUpdateOneArgs: Prisma.ClaimFinancialUpdateArgs) {
    try {
      return await this.prisma.claimFinancial.update(claimFinancialUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(claimFinancialUpdateManyArgs: Prisma.ClaimFinancialUpdateManyArgs) {
    try {
      return await this.prisma.claimFinancial.updateMany(claimFinancialUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(claimFinancialDeleteArgs: Prisma.ClaimFinancialDeleteArgs) {
    try {
      await this.prisma.claimFinancial.delete(claimFinancialDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(claimFinancialDeleteManyArgs: Prisma.ClaimFinancialDeleteManyArgs) {
    try {
      await this.prisma.claimFinancial.deleteMany(claimFinancialDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(claimFinancialAggregateArgs: Prisma.ClaimFinancialAggregateArgs) {
    try {
      return await this.prisma.claimFinancial.aggregate(claimFinancialAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(claimFinancialCountArgs: Prisma.ClaimFinancialCountArgs) {
    try {
      return await this.prisma.claimFinancial.count(claimFinancialCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
