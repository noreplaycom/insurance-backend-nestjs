import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Role } from 'src/@generated';
import { RoleFindOneByUserArgs } from './dto/role_find_one_by_user';
import { RoleFindOneByIdArgs } from './dto/role_find_one_by_id';

@Injectable()
export abstract class RoleController {
  abstract createOne(roleCreateArgs: Prisma.RoleCreateArgs): Promise<Role>;

  abstract createMany(roleCreateManyArgs: Prisma.RoleCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(roleFindUniqueArgs: Prisma.RoleFindUniqueArgs): Promise<Role>;
  
  abstract findMany(roleFindManyArgs: Prisma.RoleFindManyArgs): Promise<Role[]>;
  
  abstract findFirst(roleFindFirstArgs: Prisma.RoleFindFirstArgs): Promise<Role>;
  
  abstract updateOne(roleUpdateOneArgs: Prisma.RoleUpdateArgs): Promise<Role>;
  
  abstract updateMany(roleUpdateManyArgs: Prisma.RoleUpdateManyArgs): Promise<Prisma.BatchPayload>;
  
  abstract delete(roleDeleteArgs: Prisma.RoleDeleteArgs): Promise<boolean>;
  
  abstract deleteMany(roleDeleteManyArgs: Prisma.RoleDeleteManyArgs): Promise<boolean>;
  
  abstract aggregate(roleAggregateArgs: Prisma.RoleAggregateArgs): Promise<Prisma.GetRoleAggregateType<Prisma.RoleAggregateArgs>>;
  
  abstract count(roleCountArgs: Prisma.RoleCountArgs): Promise<number>;

  abstract findOneByUser(roleFindOneByUserArgs: RoleFindOneByUserArgs): Promise<Role>;
  
  abstract findOneById(roleFindOneByIdArgs: RoleFindOneByIdArgs): Promise<Role>;
}
