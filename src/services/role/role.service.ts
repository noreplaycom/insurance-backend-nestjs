import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createOne(roleCreateArgs: Prisma.RoleCreateArgs) {
    try {
      return await this.prisma.role.create(roleCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(roleCreateManyArgs: Prisma.RoleCreateManyArgs) {
    try {
      return await this.prisma.role.createMany(roleCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(roleFindUniqueArgs: Prisma.RoleFindUniqueArgs) {
    try {
      return await this.prisma.role.findUnique(roleFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(roleFindManyArgs: Prisma.RoleFindManyArgs) {
    try {
      return await this.prisma.role.findMany(roleFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(roleFindFirstArgs: Prisma.RoleFindFirstArgs) {
    try {
      return await this.prisma.role.findFirst(roleFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(roleUpdateOneArgs: Prisma.RoleUpdateArgs) {
    try {
      return await this.prisma.role.update(roleUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(roleUpdateManyArgs: Prisma.RoleUpdateManyArgs) {
    try {
      return await this.prisma.role.updateMany(roleUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(roleDeleteArgs: Prisma.RoleDeleteArgs) {
    try {
      await this.prisma.role.delete(roleDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(roleDeleteManyArgs: Prisma.RoleDeleteManyArgs) {
    try {
      await this.prisma.role.deleteMany(roleDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(roleAggregateArgs: Prisma.RoleAggregateArgs) {
    try {
      return await this.prisma.role.aggregate(roleAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(roleCountArgs: Prisma.RoleCountArgs) {
    try {
      return await this.prisma.role.count(roleCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
