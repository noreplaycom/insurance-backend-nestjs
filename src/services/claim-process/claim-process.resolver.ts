// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClaimProcess,
  CreateManyClaimProcessArgs,
  CreateOneClaimProcessArgs,
  DeleteManyClaimProcessArgs,
  DeleteOneClaimProcessArgs,
  FindFirstClaimProcessArgs,
  FindManyClaimProcessArgs,
  FindUniqueClaimProcessArgs,
  ClaimProcess,
  ClaimProcessAggregateArgs,
  UpdateManyClaimProcessArgs,
  UpdateOneClaimProcessArgs,
} from 'src/@generated';
import { ClaimProcessController } from './claimProcess.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ClaimProcessSelect {
  select: Prisma.ClaimProcessSelect;
}

@Resolver(() => ClaimProcess)
export class ClaimProcessResolver {
  constructor(private readonly claimProcessController: ClaimProcessController) {}

  @Mutation(() => ClaimProcess, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimProcessCreateOne(
    @Args()
    claimProcessCreateArgs: CreateOneClaimProcessArgs,
    @Relations() relations: ClaimProcessSelect,
  ): Promise<ClaimProcess | void> {
    return await this.claimProcessController.createOne({
      ...claimProcessCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimProcessCreateMany(
    @Args()
    createManyClaimProcessArgs: CreateManyClaimProcessArgs,
  ) {
    return await this.claimProcessController.createMany(createManyClaimProcessArgs);
  }

  @Query(() => ClaimProcess, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimProcessFindOne(
    @Args()
    claimProcessFindUniqueArgs: FindUniqueClaimProcessArgs,
    @Relations() relations: ClaimProcessSelect,
  ): Promise<ClaimProcess | void> {
    return this.claimProcessController.findOne({
      ...claimProcessFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [ClaimProcess], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimProcessFindMany(
    @Args() claimProcessFindManyArgs: FindManyClaimProcessArgs,
    @Relations() relations: ClaimProcessSelect,
  ) {
    return this.claimProcessController.findMany({
      ...claimProcessFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => ClaimProcess, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimProcessFindFirst(
    @Args()
    findFirstClaimProcessArgs: FindFirstClaimProcessArgs,
    @Relations() relations: ClaimProcessSelect,
  ): Promise<ClaimProcess | void> {
    return this.claimProcessController.findFirst({
      ...findFirstClaimProcessArgs,
      select: relations.select,
    });
  }

  @Mutation(() => ClaimProcess, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimProcessUpdateOne(
    @Args() claimProcessUpdateOneArgs: UpdateOneClaimProcessArgs,
    @Relations() relations: ClaimProcessSelect,
  ) {
    return this.claimProcessController.updateOne({
      ...replaceNullWithUndefined(claimProcessUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => ClaimProcess, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimProcessUpdateMany(@Args() updateManyClaimProcessArgs: UpdateManyClaimProcessArgs) {
    return this.claimProcessController.updateMany(updateManyClaimProcessArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimProcessDelete(
    @Args() deleteOneClaimProcessArgs: DeleteOneClaimProcessArgs,
    @Relations() relations: ClaimProcessSelect,
  ) {
    return this.claimProcessController.delete({
      ...deleteOneClaimProcessArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async claimProcessDeleteMany(@Args() deleteManyClaimProcessArgs: DeleteManyClaimProcessArgs) {
    return this.claimProcessController.deleteMany(deleteManyClaimProcessArgs);
  }

  @Query(() => AggregateClaimProcess, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimProcessAggregate(@Args() claimProcessAggregateArgs: ClaimProcessAggregateArgs) {
    return this.claimProcessController.aggregate(claimProcessAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimProcessCount(@Args() claimProcessCountAggregateInput: FindManyClaimProcessArgs) {
    return this.claimProcessController.count(claimProcessCountAggregateInput);
  }
}
