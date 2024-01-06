// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClaimFinancial,
  CreateManyClaimFinancialArgs,
  CreateOneClaimFinancialArgs,
  DeleteManyClaimFinancialArgs,
  DeleteOneClaimFinancialArgs,
  FindFirstClaimFinancialArgs,
  FindManyClaimFinancialArgs,
  FindUniqueClaimFinancialArgs,
  ClaimFinancial,
  ClaimFinancialAggregateArgs,
  UpdateManyClaimFinancialArgs,
  UpdateOneClaimFinancialArgs,
} from 'src/@generated';
import { ClaimFinancialController } from './claim-financial.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ClaimFinancialSelect {
  select: Prisma.ClaimFinancialSelect;
}

@Resolver(() => ClaimFinancial)
export class ClaimFinancialResolver {
  constructor(private readonly claimFinancialController: ClaimFinancialController) {}

  // @Mutation(() => ClaimFinancial, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimFinancialCreateOne(
  //   @Args()
  //   claimFinancialCreateArgs: CreateOneClaimFinancialArgs,
  //   @Relations() relations: ClaimFinancialSelect,
  // ): Promise<ClaimFinancial | void> {
  //   return await this.claimFinancialController.createOne({
  //     ...claimFinancialCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimFinancialCreateMany(
  //   @Args()
  //   createManyClaimFinancialArgs: CreateManyClaimFinancialArgs,
  // ) {
  //   return await this.claimFinancialController.createMany(createManyClaimFinancialArgs);
  // }

  // @Query(() => ClaimFinancial, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFinancialFindOne(
  //   @Args()
  //   claimFinancialFindUniqueArgs: FindUniqueClaimFinancialArgs,
  //   @Relations() relations: ClaimFinancialSelect,
  // ): Promise<ClaimFinancial | void> {
  //   return this.claimFinancialController.findOne({
  //     ...claimFinancialFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [ClaimFinancial], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFinancialFindMany(
  //   @Args() claimFinancialFindManyArgs: FindManyClaimFinancialArgs,
  //   @Relations() relations: ClaimFinancialSelect,
  // ) {
  //   return this.claimFinancialController.findMany({
  //     ...claimFinancialFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => ClaimFinancial, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFinancialFindFirst(
  //   @Args()
  //   findFirstClaimFinancialArgs: FindFirstClaimFinancialArgs,
  //   @Relations() relations: ClaimFinancialSelect,
  // ): Promise<ClaimFinancial | void> {
  //   return this.claimFinancialController.findFirst({
  //     ...findFirstClaimFinancialArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => ClaimFinancial, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimFinancialUpdateOne(
  //   @Args() claimFinancialUpdateOneArgs: UpdateOneClaimFinancialArgs,
  //   @Relations() relations: ClaimFinancialSelect,
  // ) {
  //   return this.claimFinancialController.updateOne({
  //     ...replaceNullWithUndefined(claimFinancialUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => ClaimFinancial, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimFinancialUpdateMany(@Args() updateManyClaimFinancialArgs: UpdateManyClaimFinancialArgs) {
  //   return this.claimFinancialController.updateMany(updateManyClaimFinancialArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimFinancialDelete(
  //   @Args() deleteOneClaimFinancialArgs: DeleteOneClaimFinancialArgs,
  //   @Relations() relations: ClaimFinancialSelect,
  // ) {
  //   return this.claimFinancialController.delete({
  //     ...deleteOneClaimFinancialArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimFinancialDeleteMany(@Args() deleteManyClaimFinancialArgs: DeleteManyClaimFinancialArgs) {
  //   return this.claimFinancialController.deleteMany(deleteManyClaimFinancialArgs);
  // }

  // @Query(() => AggregateClaimFinancial, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFinancialAggregate(@Args() claimFinancialAggregateArgs: ClaimFinancialAggregateArgs) {
  //   return this.claimFinancialController.aggregate(claimFinancialAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFinancialCount(@Args() claimFinancialCountAggregateInput: FindManyClaimFinancialArgs) {
  //   return this.claimFinancialController.count(claimFinancialCountAggregateInput);
  // }
}
