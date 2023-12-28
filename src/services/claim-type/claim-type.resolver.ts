// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClaimType,
  CreateManyClaimTypeArgs,
  CreateOneClaimTypeArgs,
  DeleteManyClaimTypeArgs,
  DeleteOneClaimTypeArgs,
  FindFirstClaimTypeArgs,
  FindManyClaimTypeArgs,
  FindUniqueClaimTypeArgs,
  ClaimType,
  ClaimTypeAggregateArgs,
  UpdateManyClaimTypeArgs,
  UpdateOneClaimTypeArgs,
} from 'src/@generated';
import { ClaimTypeController } from './claimType.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ClaimTypeSelect {
  select: Prisma.ClaimTypeSelect;
}

@Resolver(() => ClaimType)
export class ClaimTypeResolver {
  constructor(private readonly claimTypeController: ClaimTypeController) {}

  @Mutation(() => ClaimType, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimTypeCreateOne(
    @Args()
    claimTypeCreateArgs: CreateOneClaimTypeArgs,
    @Relations() relations: ClaimTypeSelect,
  ): Promise<ClaimType | void> {
    return await this.claimTypeController.createOne({
      ...claimTypeCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimTypeCreateMany(
    @Args()
    createManyClaimTypeArgs: CreateManyClaimTypeArgs,
  ) {
    return await this.claimTypeController.createMany(createManyClaimTypeArgs);
  }

  @Query(() => ClaimType, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimTypeFindOne(
    @Args()
    claimTypeFindUniqueArgs: FindUniqueClaimTypeArgs,
    @Relations() relations: ClaimTypeSelect,
  ): Promise<ClaimType | void> {
    return this.claimTypeController.findOne({
      ...claimTypeFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [ClaimType], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimTypeFindMany(
    @Args() claimTypeFindManyArgs: FindManyClaimTypeArgs,
    @Relations() relations: ClaimTypeSelect,
  ) {
    return this.claimTypeController.findMany({
      ...claimTypeFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => ClaimType, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimTypeFindFirst(
    @Args()
    findFirstClaimTypeArgs: FindFirstClaimTypeArgs,
    @Relations() relations: ClaimTypeSelect,
  ): Promise<ClaimType | void> {
    return this.claimTypeController.findFirst({
      ...findFirstClaimTypeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => ClaimType, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimTypeUpdateOne(
    @Args() claimTypeUpdateOneArgs: UpdateOneClaimTypeArgs,
    @Relations() relations: ClaimTypeSelect,
  ) {
    return this.claimTypeController.updateOne({
      ...replaceNullWithUndefined(claimTypeUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => ClaimType, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimTypeUpdateMany(@Args() updateManyClaimTypeArgs: UpdateManyClaimTypeArgs) {
    return this.claimTypeController.updateMany(updateManyClaimTypeArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimTypeDelete(
    @Args() deleteOneClaimTypeArgs: DeleteOneClaimTypeArgs,
    @Relations() relations: ClaimTypeSelect,
  ) {
    return this.claimTypeController.delete({
      ...deleteOneClaimTypeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimTypeDeleteMany(@Args() deleteManyClaimTypeArgs: DeleteManyClaimTypeArgs) {
    return this.claimTypeController.deleteMany(deleteManyClaimTypeArgs);
  }

  @Query(() => AggregateClaimType, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimTypeAggregate(@Args() claimTypeAggregateArgs: ClaimTypeAggregateArgs) {
    return this.claimTypeController.aggregate(claimTypeAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimTypeCount(@Args() claimTypeCountAggregateInput: FindManyClaimTypeArgs) {
    return this.claimTypeController.count(claimTypeCountAggregateInput);
  }
}
