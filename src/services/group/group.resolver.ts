// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateGroup,
  CreateManyGroupArgs,
  CreateOneGroupArgs,
  DeleteManyGroupArgs,
  DeleteOneGroupArgs,
  FindFirstGroupArgs,
  FindManyGroupArgs,
  FindUniqueGroupArgs,
  Group,
  GroupAggregateArgs,
  UpdateManyGroupArgs,
  UpdateOneGroupArgs,
} from 'src/@generated';
import { GroupController } from './group.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface GroupSelect {
  select: Prisma.GroupSelect;
}

@Resolver(() => Group)
export class GroupResolver {
  constructor(private readonly groupController: GroupController) {}

  // @Mutation(() => Group, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async groupCreateOne(
  //   @Args()
  //   groupCreateArgs: CreateOneGroupArgs,
  //   @Relations() relations: GroupSelect,
  // ): Promise<Group | void> {
  //   return await this.groupController.createOne({
  //     ...groupCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async groupCreateMany(
  //   @Args()
  //   createManyGroupArgs: CreateManyGroupArgs,
  // ) {
  //   return await this.groupController.createMany(createManyGroupArgs);
  // }

  // @Query(() => Group, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // groupFindOne(
  //   @Args()
  //   groupFindUniqueArgs: FindUniqueGroupArgs,
  //   @Relations() relations: GroupSelect,
  // ): Promise<Group | void> {
  //   return this.groupController.findOne({
  //     ...groupFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [Group], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // groupFindMany(
  //   @Args() groupFindManyArgs: FindManyGroupArgs,
  //   @Relations() relations: GroupSelect,
  // ) {
  //   return this.groupController.findMany({
  //     ...groupFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => Group, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // groupFindFirst(
  //   @Args()
  //   findFirstGroupArgs: FindFirstGroupArgs,
  //   @Relations() relations: GroupSelect,
  // ): Promise<Group | void> {
  //   return this.groupController.findFirst({
  //     ...findFirstGroupArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Group, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async groupUpdateOne(
  //   @Args() groupUpdateOneArgs: UpdateOneGroupArgs,
  //   @Relations() relations: GroupSelect,
  // ) {
  //   return this.groupController.updateOne({
  //     ...replaceNullWithUndefined(groupUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Group, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async groupUpdateMany(@Args() updateManyGroupArgs: UpdateManyGroupArgs) {
  //   return this.groupController.updateMany(updateManyGroupArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async groupDelete(
  //   @Args() deleteOneGroupArgs: DeleteOneGroupArgs,
  //   @Relations() relations: GroupSelect,
  // ) {
  //   return this.groupController.delete({
  //     ...deleteOneGroupArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async groupDeleteMany(@Args() deleteManyGroupArgs: DeleteManyGroupArgs) {
  //   return this.groupController.deleteMany(deleteManyGroupArgs);
  // }

  // @Query(() => AggregateGroup, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // groupAggregate(@Args() groupAggregateArgs: GroupAggregateArgs) {
  //   return this.groupController.aggregate(groupAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // groupCount(@Args() groupCountAggregateInput: FindManyGroupArgs) {
  //   return this.groupController.count(groupCountAggregateInput);
  // }
}
