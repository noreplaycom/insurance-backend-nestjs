import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RolePermission } from 'src/@generated';
import { PermissionFindOneByUserIdArgs } from './dto/permission_find_one';

@Injectable()
export abstract class RolePermissionController {
  abstract createOne(rolePermissionCreateArgs: Prisma.RolePermissionCreateArgs): Promise<RolePermission>;

  abstract createMany(rolePermissionCreateManyArgs: Prisma.RolePermissionCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(rolePermissionFindUniqueArgs: Prisma.RolePermissionFindUniqueArgs): Promise<RolePermission>;
  
  abstract findMany(rolePermissionFindManyArgs: Prisma.RolePermissionFindManyArgs): Promise<RolePermission[]>;
  
  abstract findFirst(rolePermissionFindFirstArgs: Prisma.RolePermissionFindFirstArgs): Promise<RolePermission>;
  
  abstract updateOne(rolePermissionUpdateOneArgs: Prisma.RolePermissionUpdateArgs): Promise<RolePermission>;
  
  abstract updateMany(rolePermissionUpdateManyArgs: Prisma.RolePermissionUpdateManyArgs): Promise<Prisma.BatchPayload>;
  
  abstract delete(rolePermissionDeleteArgs: Prisma.RolePermissionDeleteArgs): Promise<boolean>;
  
  abstract deleteMany(rolePermissionDeleteManyArgs: Prisma.RolePermissionDeleteManyArgs): Promise<boolean>;
  
  abstract aggregate(rolePermissionAggregateArgs: Prisma.RolePermissionAggregateArgs): Promise<Prisma.GetRolePermissionAggregateType<Prisma.RolePermissionAggregateArgs>>;
  
  abstract count(rolePermissionCountArgs: Prisma.RolePermissionCountArgs): Promise<number>;
  
  abstract findOneByUserId(permissionFindOneByUserIdArgs: PermissionFindOneByUserIdArgs): Promise<RolePermission>;
}
