import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  async createOne(regionCreateArgs: Prisma.RegionCreateArgs) {
    try {
      return await this.prisma.region.create(regionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(regionCreateManyArgs: Prisma.RegionCreateManyArgs) {
    try {
      return await this.prisma.region.createMany(regionCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(regionFindUniqueArgs: Prisma.RegionFindUniqueArgs) {
    try {
      return await this.prisma.region.findUnique(regionFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(regionFindManyArgs: Prisma.RegionFindManyArgs) {
    try {
      return await this.prisma.region.findMany(regionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(regionFindFirstArgs: Prisma.RegionFindFirstArgs) {
    try {
      return await this.prisma.region.findFirst(regionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(regionUpdateOneArgs: Prisma.RegionUpdateArgs) {
    try {
      return await this.prisma.region.update(regionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(regionUpdateManyArgs: Prisma.RegionUpdateManyArgs) {
    try {
      return await this.prisma.region.updateMany(regionUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(regionDeleteArgs: Prisma.RegionDeleteArgs) {
    try {
      await this.prisma.region.delete(regionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(regionDeleteManyArgs: Prisma.RegionDeleteManyArgs) {
    try {
      await this.prisma.region.deleteMany(regionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(regionAggregateArgs: Prisma.RegionAggregateArgs) {
    try {
      return await this.prisma.region.aggregate(regionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(regionCountArgs: Prisma.RegionCountArgs) {
    try {
      return await this.prisma.region.count(regionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
