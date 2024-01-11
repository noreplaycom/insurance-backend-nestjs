import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClaimService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(ClaimService.name);

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs) {
    try {
      return await this.prisma.claim.create(claimCreateArgs);
    } catch (err) {
      this.logger.error(err);
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs) {
    try {
      return await this.prisma.claim.createMany(claimCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs) {
    try {
      return await this.prisma.claim.findUnique(claimFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs) {
    try {
      return await this.prisma.claim.findMany(claimFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs) {
    try {
      return await this.prisma.claim.findFirst(claimFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs) {
    try {
      return await this.prisma.claim.update(claimUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs) {
    try {
      return await this.prisma.claim.updateMany(claimUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs) {
    try {
      await this.prisma.claim.delete(claimDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs) {
    try {
      await this.prisma.claim.deleteMany(claimDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs) {
    try {
      return await this.prisma.claim.aggregate(claimAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs) {
    try {
      return await this.prisma.claim.count(claimCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
