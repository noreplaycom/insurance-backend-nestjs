// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateRole,
  CreateManyRoleArgs,
  CreateOneRoleArgs,
  DeleteManyRoleArgs,
  DeleteOneRoleArgs,
  FindFirstRoleArgs,
  FindManyRoleArgs,
  FindUniqueRoleArgs,
  Role,
  RoleAggregateArgs,
  UpdateManyRoleArgs,
  UpdateOneRoleArgs,
} from 'src/@generated';
import { RoleController } from './role.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface RoleSelect {
  select: Prisma.RoleSelect;
}

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleController: RoleController) {}

  @Mutation(() => Role, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async roleCreateOne(
    @Args()
    roleCreateArgs: CreateOneRoleArgs,
    @Relations() relations: RoleSelect,
  ): Promise<Role | void> {
    return await this.roleController.createOne({
      ...replaceNullWithUndefined(roleCreateArgs),
      select: relations.select,
    });
  }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async roleCreateMany(
  //   @Args()
  //   createManyRoleArgs: CreateManyRoleArgs,
  // ) {
  //   return await this.roleController.createMany(createManyRoleArgs);
  // }

  @Query(() => Role, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  roleFindOne(
    @Args()
    roleFindUniqueArgs: FindUniqueRoleArgs,
    @Relations() relations: RoleSelect,
  ): Promise<Role | void> {
    return this.roleController.findOne({
      ...roleFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Role], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  roleFindMany(
    @Args() roleFindManyArgs: FindManyRoleArgs,
    @Relations() relations: RoleSelect,
  ) {
    return this.roleController.findMany({
      ...roleFindManyArgs,
      select: relations.select,
    });
  }

  // @Query(() => Role, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // roleFindFirst(
  //   @Args()
  //   findFirstRoleArgs: FindFirstRoleArgs,
  //   @Relations() relations: RoleSelect,
  // ): Promise<Role | void> {
  //   return this.roleController.findFirst({
  //     ...findFirstRoleArgs,
  //     select: relations.select,
  //   });
  // }

  @Mutation(() => Role, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async roleUpdateOne(
    @Args() roleUpdateOneArgs: UpdateOneRoleArgs,
    @Relations() relations: RoleSelect,
  ) {
    return this.roleController.updateOne({
      ...replaceNullWithUndefined(roleUpdateOneArgs),
      select: relations.select,
    });
  }

  // @Mutation(() => Role, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async roleUpdateMany(@Args() updateManyRoleArgs: UpdateManyRoleArgs) {
  //   return this.roleController.updateMany(updateManyRoleArgs);
  // }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async roleDelete(@Args() deleteOneRoleArgs: DeleteOneRoleArgs) {
    return this.roleController.delete(deleteOneRoleArgs);
  }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async roleDeleteMany(@Args() deleteManyRoleArgs: DeleteManyRoleArgs) {
  //   return this.roleController.deleteMany(deleteManyRoleArgs);
  // }

  @Query(() => AggregateRole, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  roleAggregate(@Args() roleAggregateArgs: RoleAggregateArgs) {
    return this.roleController.aggregate(roleAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  roleCount(@Args() roleCountAggregateInput: FindManyRoleArgs) {
    return this.roleController.count(roleCountAggregateInput);
  }
}
