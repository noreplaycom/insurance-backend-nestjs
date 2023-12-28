// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClinic,
  CreateManyClinicArgs,
  CreateOneClinicArgs,
  DeleteManyClinicArgs,
  DeleteOneClinicArgs,
  FindFirstClinicArgs,
  FindManyClinicArgs,
  FindUniqueClinicArgs,
  Clinic,
  ClinicAggregateArgs,
  UpdateManyClinicArgs,
  UpdateOneClinicArgs,
} from 'src/@generated';
import { ClinicController } from './clinic.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ClinicSelect {
  select: Prisma.ClinicSelect;
}

@Resolver(() => Clinic)
export class ClinicResolver {
  constructor(private readonly clinicController: ClinicController) {}

  @Mutation(() => Clinic, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async clinicCreateOne(
    @Args()
    clinicCreateArgs: CreateOneClinicArgs,
    @Relations() relations: ClinicSelect,
  ): Promise<Clinic | void> {
    return await this.clinicController.createOne({
      ...clinicCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async clinicCreateMany(
    @Args()
    createManyClinicArgs: CreateManyClinicArgs,
  ) {
    return await this.clinicController.createMany(createManyClinicArgs);
  }

  @Query(() => Clinic, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  clinicFindOne(
    @Args()
    clinicFindUniqueArgs: FindUniqueClinicArgs,
    @Relations() relations: ClinicSelect,
  ): Promise<Clinic | void> {
    return this.clinicController.findOne({
      ...clinicFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Clinic], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  clinicFindMany(
    @Args() clinicFindManyArgs: FindManyClinicArgs,
    @Relations() relations: ClinicSelect,
  ) {
    return this.clinicController.findMany({
      ...clinicFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Clinic, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  clinicFindFirst(
    @Args()
    findFirstClinicArgs: FindFirstClinicArgs,
    @Relations() relations: ClinicSelect,
  ): Promise<Clinic | void> {
    return this.clinicController.findFirst({
      ...findFirstClinicArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Clinic, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async clinicUpdateOne(
    @Args() clinicUpdateOneArgs: UpdateOneClinicArgs,
    @Relations() relations: ClinicSelect,
  ) {
    return this.clinicController.updateOne({
      ...replaceNullWithUndefined(clinicUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Clinic, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async clinicUpdateMany(@Args() updateManyClinicArgs: UpdateManyClinicArgs) {
    return this.clinicController.updateMany(updateManyClinicArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async clinicDelete(
    @Args() deleteOneClinicArgs: DeleteOneClinicArgs,
    @Relations() relations: ClinicSelect,
  ) {
    return this.clinicController.delete({
      ...deleteOneClinicArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async clinicDeleteMany(@Args() deleteManyClinicArgs: DeleteManyClinicArgs) {
    return this.clinicController.deleteMany(deleteManyClinicArgs);
  }

  @Query(() => AggregateClinic, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  clinicAggregate(@Args() clinicAggregateArgs: ClinicAggregateArgs) {
    return this.clinicController.aggregate(clinicAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  clinicCount(@Args() clinicCountAggregateInput: FindManyClinicArgs) {
    return this.clinicController.count(clinicCountAggregateInput);
  }
}
