// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClaim,
  CreateManyClaimArgs,
  CreateOneClaimArgs,
  DeleteManyClaimArgs,
  DeleteOneClaimArgs,
  FindFirstClaimArgs,
  FindManyClaimArgs,
  FindUniqueClaimArgs,
  Claim,
  ClaimAggregateArgs,
  UpdateManyClaimArgs,
  UpdateOneClaimArgs,
} from 'src/@generated';
import { ClaimController } from './claim.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ClaimSelect {
  select: Prisma.ClaimSelect;
}

@Resolver(() => Claim)
export class ClaimResolver {
  constructor(private readonly claimController: ClaimController) {}

  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimCreateOne(
    @Args()
    claimCreateArgs: CreateOneClaimArgs,
    @Relations() relations: ClaimSelect,
  ): Promise<Claim | void> {
    return await this.claimController.createOne({
      ...claimCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimCreateMany(
    @Args()
    createManyClaimArgs: CreateManyClaimArgs,
  ) {
    return await this.claimController.createMany(createManyClaimArgs);
  }

  @Query(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindOne(
    @Args()
    claimFindUniqueArgs: FindUniqueClaimArgs,
    @Relations() relations: ClaimSelect,
  ): Promise<Claim | void> {
    return this.claimController.findOne({
      ...claimFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Claim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindMany(
    @Args() claimFindManyArgs: FindManyClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.findMany({
      ...claimFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindFirst(
    @Args()
    findFirstClaimArgs: FindFirstClaimArgs,
    @Relations() relations: ClaimSelect,
  ): Promise<Claim | void> {
    return this.claimController.findFirst({
      ...findFirstClaimArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimUpdateOne(
    @Args() claimUpdateOneArgs: UpdateOneClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.updateOne({
      ...replaceNullWithUndefined(claimUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimUpdateMany(@Args() updateManyClaimArgs: UpdateManyClaimArgs) {
    return this.claimController.updateMany(updateManyClaimArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimDelete(
    @Args() deleteOneClaimArgs: DeleteOneClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.delete({
      ...deleteOneClaimArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimDeleteMany(@Args() deleteManyClaimArgs: DeleteManyClaimArgs) {
    return this.claimController.deleteMany(deleteManyClaimArgs);
  }

  @Query(() => AggregateClaim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimAggregate(@Args() claimAggregateArgs: ClaimAggregateArgs) {
    return this.claimController.aggregate(claimAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCount(@Args() claimCountAggregateInput: FindManyClaimArgs) {
    return this.claimController.count(claimCountAggregateInput);
  }
}
