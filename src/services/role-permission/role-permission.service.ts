import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class RolePermissionService {
  constructor(private prisma: PrismaService) {}

  async createOne(rolePermissionCreateArgs: Prisma.RolePermissionCreateArgs) {
    try {
      return await this.prisma.rolePermission.create(rolePermissionCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(rolePermissionCreateManyArgs: Prisma.RolePermissionCreateManyArgs) {
    try {
      return await this.prisma.rolePermission.createMany(rolePermissionCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(rolePermissionFindUniqueArgs: Prisma.RolePermissionFindUniqueArgs) {
    try {
      return await this.prisma.rolePermission.findUnique(rolePermissionFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(rolePermissionFindManyArgs: Prisma.RolePermissionFindManyArgs) {
    try {
      return await this.prisma.rolePermission.findMany(rolePermissionFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(rolePermissionFindFirstArgs: Prisma.RolePermissionFindFirstArgs) {
    try {
      return await this.prisma.rolePermission.findFirst(rolePermissionFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(rolePermissionUpdateOneArgs: Prisma.RolePermissionUpdateArgs) {
    try {
      return await this.prisma.rolePermission.update(rolePermissionUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(rolePermissionUpdateManyArgs: Prisma.RolePermissionUpdateManyArgs) {
    try {
      return await this.prisma.rolePermission.updateMany(rolePermissionUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(rolePermissionDeleteArgs: Prisma.RolePermissionDeleteArgs) {
    try {
      await this.prisma.rolePermission.delete(rolePermissionDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(rolePermissionDeleteManyArgs: Prisma.RolePermissionDeleteManyArgs) {
    try {
      await this.prisma.rolePermission.deleteMany(rolePermissionDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(rolePermissionAggregateArgs: Prisma.RolePermissionAggregateArgs) {
    try {
      return await this.prisma.rolePermission.aggregate(rolePermissionAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(rolePermissionCountArgs: Prisma.RolePermissionCountArgs) {
    try {
      return await this.prisma.rolePermission.count(rolePermissionCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
