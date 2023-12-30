import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from 'src/@generated';

@Injectable()
export class PrismaRoleController implements RoleController {
  constructor(private readonly roleService: RoleService) {}

  async createOne(roleCreateArgs: Prisma.RoleCreateArgs): Promise<Role> {
    return await this.roleService.createOne(roleCreateArgs);
  }

  async createMany(roleCreateManyArgs: Prisma.RoleCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.roleService.createMany(roleCreateManyArgs);
  }

  async findOne(roleFindUniqueArgs: Prisma.RoleFindUniqueArgs): Promise<Role> {
    return await this.roleService.findOne(roleFindUniqueArgs);
  }

  async findMany(roleFindManyArgs: Prisma.RoleFindManyArgs): Promise<Role[]> {
    return await this.roleService.findMany(roleFindManyArgs);
  }

  async findFirst(roleFindFirstArgs: Prisma.RoleFindFirstArgs): Promise<Role> {
    return await this.roleService.findFirst(roleFindFirstArgs);
  }

  async updateOne(roleUpdateOneArgs: Prisma.RoleUpdateArgs): Promise<Role> {
    return await this.roleService.updateOne(roleUpdateOneArgs);
  }

  async updateMany(roleUpdateManyArgs: Prisma.RoleUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.roleService.updateMany(roleUpdateManyArgs);
  }

  async delete(roleDeleteArgs: Prisma.RoleDeleteArgs): Promise<boolean> {
    return await this.roleService.delete(roleDeleteArgs);
  }

  async deleteMany(roleDeleteManyArgs: Prisma.RoleDeleteManyArgs): Promise<boolean> {
    return await this.roleService.deleteMany(roleDeleteManyArgs);
  }

  async aggregate(roleAggregateArgs: Prisma.RoleAggregateArgs): Promise<Prisma.GetRoleAggregateType<Prisma.RoleAggregateArgs>> {
    return await this.roleService.aggregate(roleAggregateArgs);
  }

  async count(roleCountArgs: Prisma.RoleCountArgs): Promise<number> {
    return await this.roleService.count(roleCountArgs);
  }
}
