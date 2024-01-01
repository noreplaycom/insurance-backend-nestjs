// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateRegion,
  CreateManyRegionArgs,
  CreateOneRegionArgs,
  DeleteManyRegionArgs,
  DeleteOneRegionArgs,
  FindFirstRegionArgs,
  FindManyRegionArgs,
  FindUniqueRegionArgs,
  Region,
  RegionAggregateArgs,
  UpdateManyRegionArgs,
  UpdateOneRegionArgs,
} from 'src/@generated';
import { RegionController } from './region.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface RegionSelect {
  select: Prisma.RegionSelect;
}

@Resolver(() => Region)
export class RegionResolver {
  constructor(private readonly regionController: RegionController) {}

  // @Mutation(() => Region, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async regionCreateOne(
  //   @Args()
  //   regionCreateArgs: CreateOneRegionArgs,
  //   @Relations() relations: RegionSelect,
  // ): Promise<Region | void> {
  //   return await this.regionController.createOne({
  //     ...regionCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async regionCreateMany(
  //   @Args()
  //   createManyRegionArgs: CreateManyRegionArgs,
  // ) {
  //   return await this.regionController.createMany(createManyRegionArgs);
  // }

  // @Query(() => Region, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // regionFindOne(
  //   @Args()
  //   regionFindUniqueArgs: FindUniqueRegionArgs,
  //   @Relations() relations: RegionSelect,
  // ): Promise<Region | void> {
  //   return this.regionController.findOne({
  //     ...regionFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  @Query(() => [Region], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  regionFindMany(
    @Args() regionFindManyArgs: FindManyRegionArgs,
    @Relations() relations: RegionSelect,
  ) {
    return this.regionController.findMany({
      ...regionFindManyArgs,
      select: relations.select,
    });
  }

  // @Query(() => Region, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // regionFindFirst(
  //   @Args()
  //   findFirstRegionArgs: FindFirstRegionArgs,
  //   @Relations() relations: RegionSelect,
  // ): Promise<Region | void> {
  //   return this.regionController.findFirst({
  //     ...findFirstRegionArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Region, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async regionUpdateOne(
  //   @Args() regionUpdateOneArgs: UpdateOneRegionArgs,
  //   @Relations() relations: RegionSelect,
  // ) {
  //   return this.regionController.updateOne({
  //     ...replaceNullWithUndefined(regionUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Region, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async regionUpdateMany(@Args() updateManyRegionArgs: UpdateManyRegionArgs) {
  //   return this.regionController.updateMany(updateManyRegionArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async regionDelete(
  //   @Args() deleteOneRegionArgs: DeleteOneRegionArgs,
  //   @Relations() relations: RegionSelect,
  // ) {
  //   return this.regionController.delete({
  //     ...deleteOneRegionArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async regionDeleteMany(@Args() deleteManyRegionArgs: DeleteManyRegionArgs) {
  //   return this.regionController.deleteMany(deleteManyRegionArgs);
  // }

  // @Query(() => AggregateRegion, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // regionAggregate(@Args() regionAggregateArgs: RegionAggregateArgs) {
  //   return this.regionController.aggregate(regionAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // regionCount(@Args() regionCountAggregateInput: FindManyRegionArgs) {
  //   return this.regionController.count(regionCountAggregateInput);
  // }
}
