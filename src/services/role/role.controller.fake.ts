import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RoleController } from './role.controller';
import { Role } from 'src/@generated';
import { fakeRoleComplete } from '../../../prisma/fake-data';
import { RoleFindOneByUserArgs } from './dto/role_find_one_by_user';
import { RoleFindOneByIdArgs } from './dto/role_find_one_by_id';

@Injectable()
export class FakeRoleController implements RoleController {
  private roles: Role[] = [];

  constructor() {
    const initial = 5;
    for (let i = 0; i < initial; i++) {
      this.roles.push(fakeRoleComplete());
    }
  }

  async createOne(roleCreateArgs: Prisma.RoleCreateArgs): Promise<Role> {
    const fake = fakeRoleComplete()
    this.roles.push(fake);
    return fake;
  }

  async createMany(roleCreateManyArgs: Prisma.RoleCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = roleCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.roles.push(fakeRoleComplete());
      }
      return { count: totalFake };
    } else {
      this.roles.push(fakeRoleComplete());
      return { count: 1 }
    }
  }

  async findOne(roleFindUniqueArgs: Prisma.RoleFindUniqueArgs): Promise<Role> {
    return this.roles.find(role => role.id === roleFindUniqueArgs.where.id);
  }

  async findMany(roleFindManyArgs: Prisma.RoleFindManyArgs): Promise<Role[]> {
    return this.roles.filter(role => role);
  }

  async findFirst(roleFindFirstArgs: Prisma.RoleFindFirstArgs): Promise<Role> {
    return this.roles.find(role => role);
  }

  async updateOne(roleUpdateOneArgs: Prisma.RoleUpdateArgs): Promise<Role> {
    const idx = this.roles.findIndex(role => role.id === roleUpdateOneArgs.where.id);
    this.roles[idx] = {
      ...fakeRoleComplete(),
      id: roleUpdateOneArgs.where.id
    }
    return {
      ...fakeRoleComplete(),
      id: roleUpdateOneArgs.where.id
    }
  }

  async updateMany(roleUpdateManyArgs: Prisma.RoleUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(roleDeleteArgs: Prisma.RoleDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(roleDeleteManyArgs: Prisma.RoleDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(roleAggregateArgs: Prisma.RoleAggregateArgs): Promise<Prisma.GetRoleAggregateType<Prisma.RoleAggregateArgs>> {
    return {
      _avg: this.roles[0],
      _count: true,
      _max: this.roles[0],
      _min: this.roles[this.roles.length - 1],
      _sum: this.roles[0]
    }
  }

  async count(roleCountArgs: Prisma.RoleCountArgs): Promise<number> {
    return this.roles.length;
  }

  async findOneByUser(roleFindOneByUserArgs: RoleFindOneByUserArgs): Promise<Role> {
    return fakeRoleComplete();
  }

  async findOneById(roleFindOneByIdArgs: RoleFindOneByIdArgs): Promise<Role> {
    return fakeRoleComplete();
  }
}
