// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateRolePermission,
  CreateManyRolePermissionArgs,
  CreateOneRolePermissionArgs,
  DeleteManyRolePermissionArgs,
  DeleteOneRolePermissionArgs,
  FindFirstRolePermissionArgs,
  FindManyRolePermissionArgs,
  FindUniqueRolePermissionArgs,
  RolePermission,
  RolePermissionAggregateArgs,
  UpdateManyRolePermissionArgs,
  UpdateOneRolePermissionArgs,
} from 'src/@generated';
import { RolePermissionController } from './role-permission.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface RolePermissionSelect {
  select: Prisma.RolePermissionSelect;
}

@Resolver(() => RolePermission)
export class RolePermissionResolver {
  constructor(
    private readonly rolePermissionController: RolePermissionController,
  ) {}

  // @Mutation(() => RolePermission, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async rolePermissionCreateOne(
  //   @Args()
  //   rolePermissionCreateArgs: CreateOneRolePermissionArgs,
  //   @Relations() relations: RolePermissionSelect,
  // ): Promise<RolePermission | void> {
  //   return await this.rolePermissionController.createOne({
  //     ...rolePermissionCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async rolePermissionCreateMany(
  //   @Args()
  //   createManyRolePermissionArgs: CreateManyRolePermissionArgs,
  // ) {
  //   return await this.rolePermissionController.createMany(createManyRolePermissionArgs);
  // }

  // @Query(() => RolePermission, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // rolePermissionFindOne(
  //   @Args()
  //   rolePermissionFindUniqueArgs: FindUniqueRolePermissionArgs,
  //   @Relations() relations: RolePermissionSelect,
  // ): Promise<RolePermission | void> {
  //   return this.rolePermissionController.findOne({
  //     ...rolePermissionFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [RolePermission], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // rolePermissionFindMany(
  //   @Args() rolePermissionFindManyArgs: FindManyRolePermissionArgs,
  //   @Relations() relations: RolePermissionSelect,
  // ) {
  //   return this.rolePermissionController.findMany({
  //     ...rolePermissionFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => RolePermission, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // rolePermissionFindFirst(
  //   @Args()
  //   findFirstRolePermissionArgs: FindFirstRolePermissionArgs,
  //   @Relations() relations: RolePermissionSelect,
  // ): Promise<RolePermission | void> {
  //   return this.rolePermissionController.findFirst({
  //     ...findFirstRolePermissionArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => RolePermission, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async rolePermissionUpdateOne(
  //   @Args() rolePermissionUpdateOneArgs: UpdateOneRolePermissionArgs,
  //   @Relations() relations: RolePermissionSelect,
  // ) {
  //   return this.rolePermissionController.updateOne({
  //     ...replaceNullWithUndefined(rolePermissionUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => RolePermission, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async rolePermissionUpdateMany(@Args() updateManyRolePermissionArgs: UpdateManyRolePermissionArgs) {
  //   return this.rolePermissionController.updateMany(updateManyRolePermissionArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async rolePermissionDelete(
  //   @Args() deleteOneRolePermissionArgs: DeleteOneRolePermissionArgs,
  //   @Relations() relations: RolePermissionSelect,
  // ) {
  //   return this.rolePermissionController.delete({
  //     ...deleteOneRolePermissionArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async rolePermissionDeleteMany(@Args() deleteManyRolePermissionArgs: DeleteManyRolePermissionArgs) {
  //   return this.rolePermissionController.deleteMany(deleteManyRolePermissionArgs);
  // }

  // @Query(() => AggregateRolePermission, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // rolePermissionAggregate(@Args() rolePermissionAggregateArgs: RolePermissionAggregateArgs) {
  //   return this.rolePermissionController.aggregate(rolePermissionAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // rolePermissionCount(@Args() rolePermissionCountAggregateInput: FindManyRolePermissionArgs) {
  //   return this.rolePermissionController.count(rolePermissionCountAggregateInput);
  // }
}
