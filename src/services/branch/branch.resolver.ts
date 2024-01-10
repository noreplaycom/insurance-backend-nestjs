// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateBranch,
  CreateManyBranchArgs,
  CreateOneBranchArgs,
  DeleteManyBranchArgs,
  DeleteOneBranchArgs,
  FindFirstBranchArgs,
  FindManyBranchArgs,
  FindUniqueBranchArgs,
  Branch,
  BranchAggregateArgs,
  UpdateManyBranchArgs,
  UpdateOneBranchArgs,
} from 'src/@generated';
import { BranchController } from './branch.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface BranchSelect {
  select: Prisma.BranchSelect;
}

@Resolver(() => Branch)
export class BranchResolver {
  constructor(private readonly branchController: BranchController) {}

  // @Mutation(() => Branch, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async branchCreateOne(
  //   @Args()
  //   branchCreateArgs: CreateOneBranchArgs,
  //   @Relations() relations: BranchSelect,
  // ): Promise<Branch | void> {
  //   return await this.branchController.createOne({
  //     ...branchCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async branchCreateMany(
  //   @Args()
  //   createManyBranchArgs: CreateManyBranchArgs,
  // ) {
  //   return await this.branchController.createMany(createManyBranchArgs);
  // }

  // @Query(() => Branch, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // branchFindOne(
  //   @Args()
  //   branchFindUniqueArgs: FindUniqueBranchArgs,
  //   @Relations() relations: BranchSelect,
  // ): Promise<Branch | void> {
  //   return this.branchController.findOne({
  //     ...branchFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  @Query(() => [Branch], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  branchFindMany(
    @Args() branchFindManyArgs: FindManyBranchArgs,
    @Relations() relations: BranchSelect,
  ) {
    return this.branchController.findMany({
      ...branchFindManyArgs,
      select: relations.select,
    });
  }

  // @Query(() => Branch, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // branchFindFirst(
  //   @Args()
  //   findFirstBranchArgs: FindFirstBranchArgs,
  //   @Relations() relations: BranchSelect,
  // ): Promise<Branch | void> {
  //   return this.branchController.findFirst({
  //     ...findFirstBranchArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Branch, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async branchUpdateOne(
  //   @Args() branchUpdateOneArgs: UpdateOneBranchArgs,
  //   @Relations() relations: BranchSelect,
  // ) {
  //   return this.branchController.updateOne({
  //     ...replaceNullWithUndefined(branchUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Branch, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async branchUpdateMany(@Args() updateManyBranchArgs: UpdateManyBranchArgs) {
  //   return this.branchController.updateMany(updateManyBranchArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async branchDelete(
  //   @Args() deleteOneBranchArgs: DeleteOneBranchArgs,
  //   @Relations() relations: BranchSelect,
  // ) {
  //   return this.branchController.delete({
  //     ...deleteOneBranchArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async branchDeleteMany(@Args() deleteManyBranchArgs: DeleteManyBranchArgs) {
  //   return this.branchController.deleteMany(deleteManyBranchArgs);
  // }

  // @Query(() => AggregateBranch, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // branchAggregate(@Args() branchAggregateArgs: BranchAggregateArgs) {
  //   return this.branchController.aggregate(branchAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // branchCount(@Args() branchCountAggregateInput: FindManyBranchArgs) {
  //   return this.branchController.count(branchCountAggregateInput);
  // }
}
