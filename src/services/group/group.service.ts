import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async createOne(groupCreateArgs: Prisma.GroupCreateArgs) {
    try {
      return await this.prisma.group.create(groupCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(groupCreateManyArgs: Prisma.GroupCreateManyArgs) {
    try {
      return await this.prisma.group.createMany(groupCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(groupFindUniqueArgs: Prisma.GroupFindUniqueArgs) {
    try {
      return await this.prisma.group.findUnique(groupFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(groupFindManyArgs: Prisma.GroupFindManyArgs) {
    try {
      return await this.prisma.group.findMany(groupFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(groupFindFirstArgs: Prisma.GroupFindFirstArgs) {
    try {
      return await this.prisma.group.findFirst(groupFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(groupUpdateOneArgs: Prisma.GroupUpdateArgs) {
    try {
      return await this.prisma.group.update(groupUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(groupUpdateManyArgs: Prisma.GroupUpdateManyArgs) {
    try {
      return await this.prisma.group.updateMany(groupUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(groupDeleteArgs: Prisma.GroupDeleteArgs) {
    try {
      await this.prisma.group.delete(groupDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(groupDeleteManyArgs: Prisma.GroupDeleteManyArgs) {
    try {
      await this.prisma.group.deleteMany(groupDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(groupAggregateArgs: Prisma.GroupAggregateArgs) {
    try {
      return await this.prisma.group.aggregate(groupAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(groupCountArgs: Prisma.GroupCountArgs) {
    try {
      return await this.prisma.group.count(groupCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
