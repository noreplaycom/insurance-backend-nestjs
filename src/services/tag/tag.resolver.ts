// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateTag,
  CreateManyTagArgs,
  CreateOneTagArgs,
  DeleteManyTagArgs,
  DeleteOneTagArgs,
  FindFirstTagArgs,
  FindManyTagArgs,
  FindUniqueTagArgs,
  Tag,
  TagAggregateArgs,
  UpdateManyTagArgs,
  UpdateOneTagArgs,
} from 'src/@generated';
import { TagController } from './tag.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface TagSelect {
  select: Prisma.TagSelect;
}

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagController: TagController) {}

  // @Mutation(() => Tag, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async tagCreateOne(
  //   @Args()
  //   tagCreateArgs: CreateOneTagArgs,
  //   @Relations() relations: TagSelect,
  // ): Promise<Tag | void> {
  //   return await this.tagController.createOne({
  //     ...tagCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async tagCreateMany(
  //   @Args()
  //   createManyTagArgs: CreateManyTagArgs,
  // ) {
  //   return await this.tagController.createMany(createManyTagArgs);
  // }

  // @Query(() => Tag, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // tagFindOne(
  //   @Args()
  //   tagFindUniqueArgs: FindUniqueTagArgs,
  //   @Relations() relations: TagSelect,
  // ): Promise<Tag | void> {
  //   return this.tagController.findOne({
  //     ...tagFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [Tag], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // tagFindMany(
  //   @Args() tagFindManyArgs: FindManyTagArgs,
  //   @Relations() relations: TagSelect,
  // ) {
  //   return this.tagController.findMany({
  //     ...tagFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => Tag, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // tagFindFirst(
  //   @Args()
  //   findFirstTagArgs: FindFirstTagArgs,
  //   @Relations() relations: TagSelect,
  // ): Promise<Tag | void> {
  //   return this.tagController.findFirst({
  //     ...findFirstTagArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Tag, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async tagUpdateOne(
  //   @Args() tagUpdateOneArgs: UpdateOneTagArgs,
  //   @Relations() relations: TagSelect,
  // ) {
  //   return this.tagController.updateOne({
  //     ...replaceNullWithUndefined(tagUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Tag, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async tagUpdateMany(@Args() updateManyTagArgs: UpdateManyTagArgs) {
  //   return this.tagController.updateMany(updateManyTagArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async tagDelete(
  //   @Args() deleteOneTagArgs: DeleteOneTagArgs,
  //   @Relations() relations: TagSelect,
  // ) {
  //   return this.tagController.delete({
  //     ...deleteOneTagArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async tagDeleteMany(@Args() deleteManyTagArgs: DeleteManyTagArgs) {
  //   return this.tagController.deleteMany(deleteManyTagArgs);
  // }

  // @Query(() => AggregateTag, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // tagAggregate(@Args() tagAggregateArgs: TagAggregateArgs) {
  //   return this.tagController.aggregate(tagAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // tagCount(@Args() tagCountAggregateInput: FindManyTagArgs) {
  //   return this.tagController.count(tagCountAggregateInput);
  // }

  // ? CLAIM LIST SCREEN
  @Query(() => [Tag], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  tagFindMany(
    @Relations() relations: TagSelect,
  ) {
    return this.tagController.findMany({
      select: relations.select,
    });
  }
}
