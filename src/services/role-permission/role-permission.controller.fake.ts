import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RolePermissionController } from './role-permission.controller';
import { RolePermission } from 'src/@generated';
import { fakeRolePermissionComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeRolePermissionController implements RolePermissionController {
  private rolePermissions: RolePermission[] = [];

  constructor() {
    const initial = 50;
    for (let i = 0; i < initial; i++) {
      this.rolePermissions.push(fakeRolePermissionComplete())
    }
  }

  async createOne(rolePermissionCreateArgs: Prisma.RolePermissionCreateArgs): Promise<RolePermission> {
    const fake = fakeRolePermissionComplete()
    this.rolePermissions.push(fake);
    return fake;
  }

  async createMany(rolePermissionCreateManyArgs: Prisma.RolePermissionCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = rolePermissionCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.rolePermissions.push(fakeRolePermissionComplete());
      }
      return { count: totalFake };
    } else {
      this.rolePermissions.push(fakeRolePermissionComplete());
      return { count: 1 }
    }
  }

  async findOne(rolePermissionFindUniqueArgs: Prisma.RolePermissionFindUniqueArgs): Promise<RolePermission> {
    return this.rolePermissions.find(rolePermission => rolePermission.roleId === rolePermissionFindUniqueArgs.where.roleId);
  }

  async findMany(rolePermissionFindManyArgs: Prisma.RolePermissionFindManyArgs): Promise<RolePermission[]> {
    return this.rolePermissions.filter(rolePermission => rolePermission);
  }

  async findFirst(rolePermissionFindFirstArgs: Prisma.RolePermissionFindFirstArgs): Promise<RolePermission> {
    return this.rolePermissions.find(rolePermission => rolePermission);
  }

  async updateOne(rolePermissionUpdateOneArgs: Prisma.RolePermissionUpdateArgs): Promise<RolePermission> {
    const idx = this.rolePermissions.findIndex(rolePermission => rolePermission.roleId === rolePermissionUpdateOneArgs.where.roleId);
    this.rolePermissions[idx] = {
      ...fakeRolePermissionComplete(),
    }
    return {
      ...fakeRolePermissionComplete(),
    }
  }

  async updateMany(rolePermissionUpdateManyArgs: Prisma.RolePermissionUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(rolePermissionDeleteArgs: Prisma.RolePermissionDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(rolePermissionDeleteManyArgs: Prisma.RolePermissionDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(rolePermissionAggregateArgs: Prisma.RolePermissionAggregateArgs): Promise<Prisma.GetRolePermissionAggregateType<Prisma.RolePermissionAggregateArgs>> {
    return {
      _avg: this.rolePermissions[0],
      _count: true,
      _max: this.rolePermissions[0],
      _min: this.rolePermissions[this.rolePermissions.length - 1],
      _sum: this.rolePermissions[0]
    }
  }

  async count(rolePermissionCountArgs: Prisma.RolePermissionCountArgs): Promise<number> {
    return this.rolePermissions.length;
  }
}
