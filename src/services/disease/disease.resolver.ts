// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateDisease,
  CreateManyDiseaseArgs,
  CreateOneDiseaseArgs,
  DeleteManyDiseaseArgs,
  DeleteOneDiseaseArgs,
  FindFirstDiseaseArgs,
  FindManyDiseaseArgs,
  FindUniqueDiseaseArgs,
  Disease,
  DiseaseAggregateArgs,
  UpdateManyDiseaseArgs,
  UpdateOneDiseaseArgs,
} from 'src/@generated';
import { DiseaseController } from './disease.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface DiseaseSelect {
  select: Prisma.DiseaseSelect;
}

@Resolver(() => Disease)
export class DiseaseResolver {
  constructor(private readonly diseaseController: DiseaseController) {}

  @Mutation(() => Disease, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseCreateOne(
    @Args()
    diseaseCreateArgs: CreateOneDiseaseArgs,
    @Relations() relations: DiseaseSelect,
  ): Promise<Disease | void> {
    return await this.diseaseController.createOne({
      ...diseaseCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseCreateMany(
    @Args()
    createManyDiseaseArgs: CreateManyDiseaseArgs,
  ) {
    return await this.diseaseController.createMany(createManyDiseaseArgs);
  }

  @Query(() => Disease, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseFindOne(
    @Args()
    diseaseFindUniqueArgs: FindUniqueDiseaseArgs,
    @Relations() relations: DiseaseSelect,
  ): Promise<Disease | void> {
    return this.diseaseController.findOne({
      ...diseaseFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Disease], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseFindMany(
    @Args() diseaseFindManyArgs: FindManyDiseaseArgs,
    @Relations() relations: DiseaseSelect,
  ) {
    return this.diseaseController.findMany({
      ...diseaseFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Disease, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseFindFirst(
    @Args()
    findFirstDiseaseArgs: FindFirstDiseaseArgs,
    @Relations() relations: DiseaseSelect,
  ): Promise<Disease | void> {
    return this.diseaseController.findFirst({
      ...findFirstDiseaseArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Disease, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseUpdateOne(
    @Args() diseaseUpdateOneArgs: UpdateOneDiseaseArgs,
    @Relations() relations: DiseaseSelect,
  ) {
    return this.diseaseController.updateOne({
      ...replaceNullWithUndefined(diseaseUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Disease, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseUpdateMany(@Args() updateManyDiseaseArgs: UpdateManyDiseaseArgs) {
    return this.diseaseController.updateMany(updateManyDiseaseArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseDelete(
    @Args() deleteOneDiseaseArgs: DeleteOneDiseaseArgs,
    @Relations() relations: DiseaseSelect,
  ) {
    return this.diseaseController.delete({
      ...deleteOneDiseaseArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async diseaseDeleteMany(@Args() deleteManyDiseaseArgs: DeleteManyDiseaseArgs) {
    return this.diseaseController.deleteMany(deleteManyDiseaseArgs);
  }

  @Query(() => AggregateDisease, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseAggregate(@Args() diseaseAggregateArgs: DiseaseAggregateArgs) {
    return this.diseaseController.aggregate(diseaseAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  diseaseCount(@Args() diseaseCountAggregateInput: FindManyDiseaseArgs) {
    return this.diseaseController.count(diseaseCountAggregateInput);
  }
}
