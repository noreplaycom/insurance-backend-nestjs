// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateUser,
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserAggregateArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
} from 'src/@generated';
import { UserController } from './user.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface UserSelect {
  select: Prisma.UserSelect;
}

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userCreateOne(
    @Args()
    userCreateArgs: CreateOneUserArgs,
    @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return await this.userController.createOne({
      ...userCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userCreateMany(
    @Args()
    createManyUserArgs: CreateManyUserArgs,
  ) {
    return await this.userController.createMany(createManyUserArgs);
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindOne(
    @Args()
    userFindUniqueArgs: FindUniqueUserArgs,
    @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return this.userController.findOne({
      ...userFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [User], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindMany(
    @Args() userFindManyArgs: FindManyUserArgs,
    @Relations() relations: UserSelect,
  ) {
    return this.userController.findMany({
      ...userFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindFirst(
    @Args()
    findFirstUserArgs: FindFirstUserArgs,
    @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return this.userController.findFirst({
      ...findFirstUserArgs,
      select: relations.select,
    });
  }

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userUpdateOne(
    @Args() userUpdateOneArgs: UpdateOneUserArgs,
    @Relations() relations: UserSelect,
  ) {
    return this.userController.updateOne({
      ...replaceNullWithUndefined(userUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userUpdateMany(@Args() updateManyUserArgs: UpdateManyUserArgs) {
    return this.userController.updateMany(updateManyUserArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async userDelete(
    @Args() deleteOneUserArgs: DeleteOneUserArgs,
    @Relations() relations: UserSelect,
  ) {
    return this.userController.delete({
      ...deleteOneUserArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async userDeleteMany(@Args() deleteManyUserArgs: DeleteManyUserArgs) {
    return this.userController.deleteMany(deleteManyUserArgs);
  }

  @Query(() => AggregateUser, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userAggregate(@Args() userAggregateArgs: UserAggregateArgs) {
    return this.userController.aggregate(userAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userCount(@Args() userCountAggregateInput: FindManyUserArgs) {
    return this.userController.count(userCountAggregateInput);
  }
}
