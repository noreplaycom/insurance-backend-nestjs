// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDiseaseCluster,
  CreateManyDiseaseClusterArgs,
  CreateOneDiseaseClusterArgs,
  DeleteManyDiseaseClusterArgs,
  DeleteOneDiseaseClusterArgs,
  FindFirstDiseaseClusterArgs,
  FindManyDiseaseClusterArgs,
  FindUniqueDiseaseClusterArgs,
  DiseaseCluster,
  DiseaseClusterAggregateArgs,
  UpdateManyDiseaseClusterArgs,
  UpdateOneDiseaseClusterArgs,
} from 'src/@generated';
import { DiseaseClusterController } from './diseaseCluster.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DiseaseClusterSelect {
  select: Prisma.DiseaseClusterSelect;
}

@Resolver(() => DiseaseCluster)
export class DiseaseClusterResolver {
  constructor(private readonly diseaseClusterController: DiseaseClusterController) {}

  @Mutation(() => DiseaseCluster, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseClusterCreateOne(
    @Args()
    diseaseClusterCreateArgs: CreateOneDiseaseClusterArgs,
    @Relations() relations: DiseaseClusterSelect,
  ): Promise<DiseaseCluster | void> {
    return await this.diseaseClusterController.createOne({
      ...diseaseClusterCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseClusterCreateMany(
    @Args()
    createManyDiseaseClusterArgs: CreateManyDiseaseClusterArgs,
  ) {
    return await this.diseaseClusterController.createMany(createManyDiseaseClusterArgs);
  }

  @Query(() => DiseaseCluster, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseClusterFindOne(
    @Args()
    diseaseClusterFindUniqueArgs: FindUniqueDiseaseClusterArgs,
    @Relations() relations: DiseaseClusterSelect,
  ): Promise<DiseaseCluster | void> {
    return this.diseaseClusterController.findOne({
      ...diseaseClusterFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [DiseaseCluster], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseClusterFindMany(
    @Args() diseaseClusterFindManyArgs: FindManyDiseaseClusterArgs,
    @Relations() relations: DiseaseClusterSelect,
  ) {
    return this.diseaseClusterController.findMany({
      ...diseaseClusterFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => DiseaseCluster, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseClusterFindFirst(
    @Args()
    findFirstDiseaseClusterArgs: FindFirstDiseaseClusterArgs,
    @Relations() relations: DiseaseClusterSelect,
  ): Promise<DiseaseCluster | void> {
    return this.diseaseClusterController.findFirst({
      ...findFirstDiseaseClusterArgs,
      select: relations.select,
    });
  }

  @Mutation(() => DiseaseCluster, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseClusterUpdateOne(
    @Args() diseaseClusterUpdateOneArgs: UpdateOneDiseaseClusterArgs,
    @Relations() relations: DiseaseClusterSelect,
  ) {
    return this.diseaseClusterController.updateOne({
      ...replaceNullWithUndefined(diseaseClusterUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => DiseaseCluster, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseClusterUpdateMany(@Args() updateManyDiseaseClusterArgs: UpdateManyDiseaseClusterArgs) {
    return this.diseaseClusterController.updateMany(updateManyDiseaseClusterArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseClusterDelete(
    @Args() deleteOneDiseaseClusterArgs: DeleteOneDiseaseClusterArgs,
    @Relations() relations: DiseaseClusterSelect,
  ) {
    return this.diseaseClusterController.delete({
      ...deleteOneDiseaseClusterArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseClusterDeleteMany(@Args() deleteManyDiseaseClusterArgs: DeleteManyDiseaseClusterArgs) {
    return this.diseaseClusterController.deleteMany(deleteManyDiseaseClusterArgs);
  }

  @Query(() => AggregateDiseaseCluster, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseClusterAggregate(@Args() diseaseClusterAggregateArgs: DiseaseClusterAggregateArgs) {
    return this.diseaseClusterController.aggregate(diseaseClusterAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseClusterCount(@Args() diseaseClusterCountAggregateInput: FindManyDiseaseClusterArgs) {
    return this.diseaseClusterController.count(diseaseClusterCountAggregateInput);
  }
}
