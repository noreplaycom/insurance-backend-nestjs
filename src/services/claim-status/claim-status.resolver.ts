// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClaimStatus,
  CreateManyClaimStatusArgs,
  CreateOneClaimStatusArgs,
  DeleteManyClaimStatusArgs,
  DeleteOneClaimStatusArgs,
  FindFirstClaimStatusArgs,
  FindManyClaimStatusArgs,
  FindUniqueClaimStatusArgs,
  ClaimStatus,
  ClaimStatusAggregateArgs,
  UpdateManyClaimStatusArgs,
  UpdateOneClaimStatusArgs,
} from 'src/@generated';
import { ClaimStatusController } from './claimStatus.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ClaimStatusSelect {
  select: Prisma.ClaimStatusSelect;
}

@Resolver(() => ClaimStatus)
export class ClaimStatusResolver {
  constructor(private readonly claimStatusController: ClaimStatusController) {}

  @Mutation(() => ClaimStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimStatusCreateOne(
    @Args()
    claimStatusCreateArgs: CreateOneClaimStatusArgs,
    @Relations() relations: ClaimStatusSelect,
  ): Promise<ClaimStatus | void> {
    return await this.claimStatusController.createOne({
      ...claimStatusCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimStatusCreateMany(
    @Args()
    createManyClaimStatusArgs: CreateManyClaimStatusArgs,
  ) {
    return await this.claimStatusController.createMany(createManyClaimStatusArgs);
  }

  @Query(() => ClaimStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimStatusFindOne(
    @Args()
    claimStatusFindUniqueArgs: FindUniqueClaimStatusArgs,
    @Relations() relations: ClaimStatusSelect,
  ): Promise<ClaimStatus | void> {
    return this.claimStatusController.findOne({
      ...claimStatusFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [ClaimStatus], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimStatusFindMany(
    @Args() claimStatusFindManyArgs: FindManyClaimStatusArgs,
    @Relations() relations: ClaimStatusSelect,
  ) {
    return this.claimStatusController.findMany({
      ...claimStatusFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => ClaimStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimStatusFindFirst(
    @Args()
    findFirstClaimStatusArgs: FindFirstClaimStatusArgs,
    @Relations() relations: ClaimStatusSelect,
  ): Promise<ClaimStatus | void> {
    return this.claimStatusController.findFirst({
      ...findFirstClaimStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => ClaimStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimStatusUpdateOne(
    @Args() claimStatusUpdateOneArgs: UpdateOneClaimStatusArgs,
    @Relations() relations: ClaimStatusSelect,
  ) {
    return this.claimStatusController.updateOne({
      ...replaceNullWithUndefined(claimStatusUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => ClaimStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimStatusUpdateMany(@Args() updateManyClaimStatusArgs: UpdateManyClaimStatusArgs) {
    return this.claimStatusController.updateMany(updateManyClaimStatusArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimStatusDelete(
    @Args() deleteOneClaimStatusArgs: DeleteOneClaimStatusArgs,
    @Relations() relations: ClaimStatusSelect,
  ) {
    return this.claimStatusController.delete({
      ...deleteOneClaimStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimStatusDeleteMany(@Args() deleteManyClaimStatusArgs: DeleteManyClaimStatusArgs) {
    return this.claimStatusController.deleteMany(deleteManyClaimStatusArgs);
  }

  @Query(() => AggregateClaimStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimStatusAggregate(@Args() claimStatusAggregateArgs: ClaimStatusAggregateArgs) {
    return this.claimStatusController.aggregate(claimStatusAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimStatusCount(@Args() claimStatusCountAggregateInput: FindManyClaimStatusArgs) {
    return this.claimStatusController.count(claimStatusCountAggregateInput);
  }
}
