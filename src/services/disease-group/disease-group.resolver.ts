// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDiseaseGroup,
  CreateManyDiseaseGroupArgs,
  CreateOneDiseaseGroupArgs,
  DeleteManyDiseaseGroupArgs,
  DeleteOneDiseaseGroupArgs,
  FindFirstDiseaseGroupArgs,
  FindManyDiseaseGroupArgs,
  FindUniqueDiseaseGroupArgs,
  DiseaseGroup,
  DiseaseGroupAggregateArgs,
  UpdateManyDiseaseGroupArgs,
  UpdateOneDiseaseGroupArgs,
} from 'src/@generated';
import { DiseaseGroupController } from './disease-group.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DiseaseGroupSelect {
  select: Prisma.DiseaseGroupSelect;
}

@Resolver(() => DiseaseGroup)
export class DiseaseGroupResolver {
  constructor(private readonly diseaseGroupController: DiseaseGroupController) {}

  @Mutation(() => DiseaseGroup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseGroupCreateOne(
    @Args()
    diseaseGroupCreateArgs: CreateOneDiseaseGroupArgs,
    @Relations() relations: DiseaseGroupSelect,
  ): Promise<DiseaseGroup | void> {
    return await this.diseaseGroupController.createOne({
      ...diseaseGroupCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseGroupCreateMany(
    @Args()
    createManyDiseaseGroupArgs: CreateManyDiseaseGroupArgs,
  ) {
    return await this.diseaseGroupController.createMany(createManyDiseaseGroupArgs);
  }

  @Query(() => DiseaseGroup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseGroupFindOne(
    @Args()
    diseaseGroupFindUniqueArgs: FindUniqueDiseaseGroupArgs,
    @Relations() relations: DiseaseGroupSelect,
  ): Promise<DiseaseGroup | void> {
    return this.diseaseGroupController.findOne({
      ...diseaseGroupFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [DiseaseGroup], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseGroupFindMany(
    @Args() diseaseGroupFindManyArgs: FindManyDiseaseGroupArgs,
    @Relations() relations: DiseaseGroupSelect,
  ) {
    return this.diseaseGroupController.findMany({
      ...diseaseGroupFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => DiseaseGroup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseGroupFindFirst(
    @Args()
    findFirstDiseaseGroupArgs: FindFirstDiseaseGroupArgs,
    @Relations() relations: DiseaseGroupSelect,
  ): Promise<DiseaseGroup | void> {
    return this.diseaseGroupController.findFirst({
      ...findFirstDiseaseGroupArgs,
      select: relations.select,
    });
  }

  @Mutation(() => DiseaseGroup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseGroupUpdateOne(
    @Args() diseaseGroupUpdateOneArgs: UpdateOneDiseaseGroupArgs,
    @Relations() relations: DiseaseGroupSelect,
  ) {
    return this.diseaseGroupController.updateOne({
      ...replaceNullWithUndefined(diseaseGroupUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => DiseaseGroup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseGroupUpdateMany(@Args() updateManyDiseaseGroupArgs: UpdateManyDiseaseGroupArgs) {
    return this.diseaseGroupController.updateMany(updateManyDiseaseGroupArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseGroupDelete(
    @Args() deleteOneDiseaseGroupArgs: DeleteOneDiseaseGroupArgs,
    @Relations() relations: DiseaseGroupSelect,
  ) {
    return this.diseaseGroupController.delete({
      ...deleteOneDiseaseGroupArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseGroupDeleteMany(@Args() deleteManyDiseaseGroupArgs: DeleteManyDiseaseGroupArgs) {
    return this.diseaseGroupController.deleteMany(deleteManyDiseaseGroupArgs);
  }

  @Query(() => AggregateDiseaseGroup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseGroupAggregate(@Args() diseaseGroupAggregateArgs: DiseaseGroupAggregateArgs) {
    return this.diseaseGroupController.aggregate(diseaseGroupAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseGroupCount(@Args() diseaseGroupCountAggregateInput: FindManyDiseaseGroupArgs) {
    return this.diseaseGroupController.count(diseaseGroupCountAggregateInput);
  }
}
