import { Injectable } from '@nestjs/common';
import { Permission, Prisma, Role, RoleType } from '@prisma/client';
import { RoleService } from './role.service';
import { RoleFindOneByUserArgs } from './dto/role_find_one_by_user';
import { RoleFindOneByIdArgs } from './dto/role_find_one_by_id';
import { UserController } from '../user/user.controller';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

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
    const roleType = await this.roleService.findOne({
      where: { id: roleDeleteArgs?.where?.id },
    });

    switch (roleType.roleType) {
      case RoleType.SUPERUSER:
        throw new IGraphQLError({ code: 190001 });
      case RoleType.PARTICIPANT:
        throw new IGraphQLError({ code: 190002 });
      default:
        break;
    }

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

  async findOneByUser(
    roleFindOneByUserArgs: RoleFindOneByUserArgs,
  ): Promise<Role> {
    return await this.roleService.findFirst({});
  }

  async findOneById(roleFindOneByIdArgs: RoleFindOneByIdArgs): Promise<Role> {
    return await this.roleService.findFirst({});
  }
}
