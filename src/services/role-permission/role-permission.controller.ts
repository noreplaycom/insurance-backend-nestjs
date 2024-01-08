import { Injectable } from '@nestjs/common';
import { Permission, Prisma, RolePermission } from '@prisma/client';
import { RolePermissionService } from './role-permission.service';
import { PermissionFindOneByUserIdArgs } from './dto/permission_find_one';

@Injectable()
export class RolePermissionController {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  async createOne(rolePermissionCreateArgs: Prisma.RolePermissionCreateArgs) {
    return await this.rolePermissionService.createOne(rolePermissionCreateArgs);
  }

  async createMany(
    rolePermissionCreateManyArgs: Prisma.RolePermissionCreateManyArgs,
  ) {
    return await this.rolePermissionService.createMany(
      rolePermissionCreateManyArgs,
    );
  }

  async findOne(
    rolePermissionFindUniqueArgs: Prisma.RolePermissionFindUniqueArgs,
  ) {
    return await this.rolePermissionService.findOne(
      rolePermissionFindUniqueArgs,
    );
  }

  async findMany(
    rolePermissionFindManyArgs: Prisma.RolePermissionFindManyArgs,
  ) {
    return await this.rolePermissionService.findMany(
      rolePermissionFindManyArgs,
    );
  }

  async findFirst(
    rolePermissionFindFirstArgs: Prisma.RolePermissionFindFirstArgs,
  ) {
    return await this.rolePermissionService.findFirst(
      rolePermissionFindFirstArgs,
    );
  }

  async updateOne(
    rolePermissionUpdateOneArgs: Prisma.RolePermissionUpdateArgs,
  ) {
    return await this.rolePermissionService.updateOne(
      rolePermissionUpdateOneArgs,
    );
  }

  async updateMany(
    rolePermissionUpdateManyArgs: Prisma.RolePermissionUpdateManyArgs,
  ) {
    return await this.rolePermissionService.updateMany(
      rolePermissionUpdateManyArgs,
    );
  }

  async delete(rolePermissionDeleteArgs: Prisma.RolePermissionDeleteArgs) {
    return await this.rolePermissionService.delete(rolePermissionDeleteArgs);
  }

  async deleteMany(
    rolePermissionDeleteManyArgs: Prisma.RolePermissionDeleteManyArgs,
  ) {
    return await this.rolePermissionService.deleteMany(
      rolePermissionDeleteManyArgs,
    );
  }

  async aggregate(
    rolePermissionAggregateArgs: Prisma.RolePermissionAggregateArgs,
  ) {
    return await this.rolePermissionService.aggregate(
      rolePermissionAggregateArgs,
    );
  }

  async count(rolePermissionCountArgs: Prisma.RolePermissionCountArgs) {
    return await this.rolePermissionService.count(rolePermissionCountArgs);
  }

  async findOneByUserId(
    permissionFindOneByUserIdArgs: PermissionFindOneByUserIdArgs,
  ): Promise<RolePermission> {
    return await this.rolePermissionService.findFirst({});
  }

  async permissionFindMany(): Promise<string[]> {
    return Object.keys(Permission);
  }
}
