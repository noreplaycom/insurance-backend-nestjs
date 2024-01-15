// @ts-nochecka
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProgramParticipation,
  CreateManyProgramParticipationArgs,
  CreateOneProgramParticipationArgs,
  DeleteManyProgramParticipationArgs,
  DeleteOneProgramParticipationArgs,
  FindFirstProgramParticipationArgs,
  FindManyProgramParticipationArgs,
  FindManyProgramParticipationToProgramsArgs,
  FindUniqueProgramParticipationArgs,
  ProgramParticipation,
  ProgramParticipationAggregateArgs,
  ProgramParticipationToPrograms,
  UpdateManyProgramParticipationArgs,
  UpdateOneProgramParticipationArgs,
} from 'src/@generated';
import { ProgramParticipationController } from './program-participation.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ProgramParticipationSelect {
  select: Prisma.ProgramParticipationSelect;
}

@Resolver(() => ProgramParticipation)
export class ProgramParticipationResolver {
  constructor(
    private readonly programParticipationController: ProgramParticipationController,
  ) {}

  // @Mutation(() => ProgramParticipation, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationCreateOne(
  //   @Args()
  //   programParticipationCreateArgs: CreateOneProgramParticipationArgs,
  //   @Relations() relations: ProgramParticipationSelect,
  // ): Promise<ProgramParticipation | void> {
  //   return await this.programParticipationController.createOne({
  //     ...programParticipationCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationCreateMany(
  //   @Args()
  //   createManyProgramParticipationArgs: CreateManyProgramParticipationArgs,
  // ) {
  //   return await this.programParticipationController.createMany(createManyProgramParticipationArgs);
  // }

  // @Query(() => ProgramParticipation, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationFindOne(
  //   @Args()
  //   programParticipationFindUniqueArgs: FindUniqueProgramParticipationArgs,
  //   @Relations() relations: ProgramParticipationSelect,
  // ): Promise<ProgramParticipation | void> {
  //   return this.programParticipationController.findOne({
  //     ...programParticipationFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [ProgramParticipation], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationFindMany(
  //   @Args() programParticipationFindManyArgs: FindManyProgramParticipationArgs,
  //   @Relations() relations: ProgramParticipationSelect,
  // ) {
  //   return this.programParticipationController.findMany({
  //     ...programParticipationFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => ProgramParticipation, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationFindFirst(
  //   @Args()
  //   findFirstProgramParticipationArgs: FindFirstProgramParticipationArgs,
  //   @Relations() relations: ProgramParticipationSelect,
  // ): Promise<ProgramParticipation | void> {
  //   return this.programParticipationController.findFirst({
  //     ...findFirstProgramParticipationArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => ProgramParticipation, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationUpdateOne(
  //   @Args() programParticipationUpdateOneArgs: UpdateOneProgramParticipationArgs,
  //   @Relations() relations: ProgramParticipationSelect,
  // ) {
  //   return this.programParticipationController.updateOne({
  //     ...replaceNullWithUndefined(programParticipationUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => ProgramParticipation, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationUpdateMany(@Args() updateManyProgramParticipationArgs: UpdateManyProgramParticipationArgs) {
  //   return this.programParticipationController.updateMany(updateManyProgramParticipationArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationDelete(
  //   @Args() deleteOneProgramParticipationArgs: DeleteOneProgramParticipationArgs,
  //   @Relations() relations: ProgramParticipationSelect,
  // ) {
  //   return this.programParticipationController.delete({
  //     ...deleteOneProgramParticipationArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationDeleteMany(@Args() deleteManyProgramParticipationArgs: DeleteManyProgramParticipationArgs) {
  //   return this.programParticipationController.deleteMany(deleteManyProgramParticipationArgs);
  // }

  // @Query(() => AggregateProgramParticipation, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationAggregate(@Args() programParticipationAggregateArgs: ProgramParticipationAggregateArgs) {
  //   return this.programParticipationController.aggregate(programParticipationAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationCount(@Args() programParticipationCountAggregateInput: FindManyProgramParticipationArgs) {
  //   return this.programParticipationController.count(programParticipationCountAggregateInput);
  // }

  @Query(() => [String], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  santunanHarianRawatInapPlanFindMany() {
    return this.programParticipationController.santunanHarianRawatInapPlanFindMany();
  }
}
