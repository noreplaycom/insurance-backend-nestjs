import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RoleService } from './role.service';

@Injectable()
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  async createOne(roleCreateArgs: Prisma.RoleCreateArgs) {
    return await this.roleService.createOne(roleCreateArgs);
  }

  async createMany(roleCreateManyArgs: Prisma.RoleCreateManyArgs) {
    return await this.roleService.createMany(roleCreateManyArgs);
  }

  async findOne(roleFindUniqueArgs: Prisma.RoleFindUniqueArgs) {
    return await this.roleService.findOne(roleFindUniqueArgs);
  }

  async findMany(roleFindManyArgs: Prisma.RoleFindManyArgs) {
    return await this.roleService.findMany(roleFindManyArgs);
  }

  async findFirst(roleFindFirstArgs: Prisma.RoleFindFirstArgs) {
    return await this.roleService.findFirst(roleFindFirstArgs);
  }

  async updateOne(roleUpdateOneArgs: Prisma.RoleUpdateArgs) {
    return await this.roleService.updateOne(roleUpdateOneArgs);
  }

  async updateMany(roleUpdateManyArgs: Prisma.RoleUpdateManyArgs) {
    return await this.roleService.updateMany(roleUpdateManyArgs);
  }

  async delete(roleDeleteArgs: Prisma.RoleDeleteArgs) {
    return await this.roleService.delete(roleDeleteArgs);
  }

  async deleteMany(roleDeleteManyArgs: Prisma.RoleDeleteManyArgs) {
    return await this.roleService.deleteMany(roleDeleteManyArgs);
  }

  async aggregate(roleAggregateArgs: Prisma.RoleAggregateArgs) {
    return await this.roleService.aggregate(roleAggregateArgs);
  }

  async count(roleCountArgs: Prisma.RoleCountArgs) {
    return await this.roleService.count(roleCountArgs);
  }
}
