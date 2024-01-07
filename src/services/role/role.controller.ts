import { Injectable } from '@nestjs/common';
import { Permission, Prisma, Role, RoleType } from '@prisma/client';
import { RoleService } from './role.service';
import { RoleFindOneByUserArgs } from './dto/role_find_one_by_user';
import { RoleFindOneByIdArgs } from './dto/role_find_one_by_id';
import { Role } from 'src/@generated';

@Injectable()
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  async onModuleInit() {
    const roles = await this.findMany({});

    //check if roles is empty
    if (roles.length === 0) {
      const permissions = Object.values(Permission);

      //create superuser role
      await this.createOne({
        data: {
          name: 'superuser',
          description: 'superuser',
          roleType: RoleType.SUPERUSER,
          rolePermissions: {
            createMany: {
              data: permissions.map((permission) => ({ permission })),
            },
          },
        },
      });

      //create participant role
      await this.createOne({
        data: {
          name: 'Peserta',
          description: 'peserta',
          roleType: RoleType.PARTICIPANT,
        },
      });

      //create admin role
      await this.createOne({
        data: {
          name: 'Admin Berkas',
          description: 'admin berkas',
          roleType: RoleType.ADMIN,
          rolePermissions: {
            createMany: {
              data: [
                { permission: Permission.CREATE_CLAIM },
                { permission: Permission.CREATE_CLAIM_DOCUMENT },
                { permission: Permission.CREATE_PARTICIPANT },
                { permission: Permission.EXPORT_CLAIM },
                { permission: Permission.EXPORT_PARTICIPANT },
                { permission: Permission.UPDATE_CLAIM },
                { permission: Permission.UPDATE_PARTICIPANT },
                { permission: Permission.UPDATE_CLAIM_STATUS },
              ],
            },
          },
        },
      });
    }
  }

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

  async findOneByUser(
    roleFindOneByUserArgs: RoleFindOneByUserArgs,
  ): Promise<Role> {
    return await this.roleService.findFirst({});
  }

  async findOneById(roleFindOneByIdArgs: RoleFindOneByIdArgs): Promise<Role> {
    return await this.roleService.findFirst({});
  }
}
