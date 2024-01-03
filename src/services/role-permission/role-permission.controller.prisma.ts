import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionController } from './role-permission.controller';
import { RolePermission } from 'src/@generated';
import { PermissionFindOneByUserIdArgs } from './dto/permission_find_one';

@Injectable()
export class PrismaRolePermissionController implements RolePermissionController {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  async createOne(rolePermissionCreateArgs: Prisma.RolePermissionCreateArgs): Promise<RolePermission> {
    return await this.rolePermissionService.createOne(rolePermissionCreateArgs);
  }

  async createMany(rolePermissionCreateManyArgs: Prisma.RolePermissionCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.rolePermissionService.createMany(rolePermissionCreateManyArgs);
  }

  async findOne(rolePermissionFindUniqueArgs: Prisma.RolePermissionFindUniqueArgs): Promise<RolePermission> {
    return await this.rolePermissionService.findOne(rolePermissionFindUniqueArgs);
  }

  async findMany(rolePermissionFindManyArgs: Prisma.RolePermissionFindManyArgs): Promise<RolePermission[]> {
    return await this.rolePermissionService.findMany(rolePermissionFindManyArgs);
  }

  async findFirst(rolePermissionFindFirstArgs: Prisma.RolePermissionFindFirstArgs): Promise<RolePermission> {
    return await this.rolePermissionService.findFirst(rolePermissionFindFirstArgs);
  }

  async updateOne(rolePermissionUpdateOneArgs: Prisma.RolePermissionUpdateArgs): Promise<RolePermission> {
    return await this.rolePermissionService.updateOne(rolePermissionUpdateOneArgs);
  }

  async updateMany(rolePermissionUpdateManyArgs: Prisma.RolePermissionUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.rolePermissionService.updateMany(rolePermissionUpdateManyArgs);
  }

  async delete(rolePermissionDeleteArgs: Prisma.RolePermissionDeleteArgs): Promise<boolean> {
    return await this.rolePermissionService.delete(rolePermissionDeleteArgs);
  }

  async deleteMany(rolePermissionDeleteManyArgs: Prisma.RolePermissionDeleteManyArgs): Promise<boolean> {
    return await this.rolePermissionService.deleteMany(rolePermissionDeleteManyArgs);
  }

  async aggregate(rolePermissionAggregateArgs: Prisma.RolePermissionAggregateArgs): Promise<Prisma.GetRolePermissionAggregateType<Prisma.RolePermissionAggregateArgs>> {
    return await this.rolePermissionService.aggregate(rolePermissionAggregateArgs);
  }

  async count(rolePermissionCountArgs: Prisma.RolePermissionCountArgs): Promise<number> {
    return await this.rolePermissionService.count(rolePermissionCountArgs);
  }

  async findOneByUserId(permissionFindOneByUserIdArgs: PermissionFindOneByUserIdArgs): Promise<RolePermission> {
    return await this.rolePermissionService.findFirst({});
  }
}
