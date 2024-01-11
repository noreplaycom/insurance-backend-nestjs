// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateProgramParticipationToPrograms,
  CreateManyProgramParticipationToProgramsArgs,
  CreateOneProgramParticipationToProgramsArgs,
  DeleteManyProgramParticipationToProgramsArgs,
  DeleteOneProgramParticipationToProgramsArgs,
  FindFirstProgramParticipationToProgramsArgs,
  FindManyProgramParticipationToProgramsArgs,
  FindUniqueProgramParticipationToProgramsArgs,
  ProgramParticipationToPrograms,
  ProgramParticipationToProgramsAggregateArgs,
  UpdateManyProgramParticipationToProgramsArgs,
  UpdateOneProgramParticipationToProgramsArgs,
} from 'src/@generated';
import { ProgramParticipationToProgramsController } from './program-participation-to-programs.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ProgramParticipationToProgramsSelect {
  select: Prisma.ProgramParticipationToProgramsSelect;
}

@Resolver(() => ProgramParticipationToPrograms)
export class ProgramParticipationToProgramsResolver {
  constructor(
    private readonly programParticipationToProgramsController: ProgramParticipationToProgramsController,
  ) {}

  // @Mutation(() => ProgramParticipationToPrograms, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationToProgramsCreateOne(
  //   @Args()
  //   programParticipationToProgramsCreateArgs: CreateOneProgramParticipationToProgramsArgs,
  //   @Relations() relations: ProgramParticipationToProgramsSelect,
  // ): Promise<ProgramParticipationToPrograms | void> {
  //   return await this.programParticipationToProgramsController.createOne({
  //     ...replaceNullWithUndefined(programParticipationToProgramsCreateArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationToProgramsCreateMany(
  //   @Args()
  //   createManyProgramParticipationToProgramsArgs: CreateManyProgramParticipationToProgramsArgs,
  // ) {
  //   return await this.programParticipationToProgramsController.createMany(
  //     replaceNullWithUndefined(createManyProgramParticipationToProgramsArgs),
  //   );
  // }

  // @Query(() => ProgramParticipationToPrograms, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationToProgramsFindOne(
  //   @Args()
  //   programParticipationToProgramsFindUniqueArgs: FindUniqueProgramParticipationToProgramsArgs,
  //   @Relations() relations: ProgramParticipationToProgramsSelect,
  // ): Promise<ProgramParticipationToPrograms | void> {
  //   return this.programParticipationToProgramsController.findOne({
  //     ...programParticipationToProgramsFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  @Query(() => [ProgramParticipationToPrograms], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programParticipationToProgramsFindMany(
    @Args()
    programParticipationToProgramsFindManyArgs: FindManyProgramParticipationToProgramsArgs,
    @Relations() relations: ProgramParticipationToProgramsSelect,
  ) {
    return this.programParticipationToProgramsController.findMany({
      ...programParticipationToProgramsFindManyArgs,
      select: relations.select,
    });
  }

  // @Query(() => ProgramParticipationToPrograms, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationToProgramsFindFirst(
  //   @Args()
  //   findFirstProgramParticipationToProgramsArgs: FindFirstProgramParticipationToProgramsArgs,
  //   @Relations() relations: ProgramParticipationToProgramsSelect,
  // ): Promise<ProgramParticipationToPrograms | void> {
  //   return this.programParticipationToProgramsController.findFirst({
  //     ...findFirstProgramParticipationToProgramsArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => ProgramParticipationToPrograms, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationToProgramsUpdateOne(
  //   @Args()
  //   programParticipationToProgramsUpdateOneArgs: UpdateOneProgramParticipationToProgramsArgs,
  //   @Relations() relations: ProgramParticipationToProgramsSelect,
  // ) {
  //   return this.programParticipationToProgramsController.updateOne({
  //     ...replaceNullWithUndefined(programParticipationToProgramsUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => ProgramParticipationToPrograms, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationToProgramsUpdateMany(
  //   @Args()
  //   updateManyProgramParticipationToProgramsArgs: UpdateManyProgramParticipationToProgramsArgs,
  // ) {
  //   return this.programParticipationToProgramsController.updateMany(
  //     updateManyProgramParticipationToProgramsArgs,
  //   );
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationToProgramsDeleteOne(
  //   @Args()
  //   deleteOneProgramParticipationToProgramsArgs: DeleteOneProgramParticipationToProgramsArgs,
  // ) {
  //   return this.programParticipationToProgramsController.delete(
  //     deleteOneProgramParticipationToProgramsArgs,
  //   );
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async programParticipationToProgramsDeleteMany(
  //   @Args()
  //   deleteManyProgramParticipationToProgramsArgs: DeleteManyProgramParticipationToProgramsArgs,
  // ) {
  //   return this.programParticipationToProgramsController.deleteMany(
  //     deleteManyProgramParticipationToProgramsArgs,
  //   );
  // }

  // @Query(() => AggregateProgramParticipationToPrograms, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationToProgramsAggregate(
  //   @Args()
  //   programParticipationToProgramsAggregateArgs: ProgramParticipationToProgramsAggregateArgs,
  // ) {
  //   return this.programParticipationToProgramsController.aggregate(
  //     programParticipationToProgramsAggregateArgs,
  //   );
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // programParticipationToProgramsCount(
  //   @Args()
  //   programParticipationToProgramsCountAggregateInput: FindManyProgramParticipationToProgramsArgs,
  // ) {
  //   return this.programParticipationToProgramsController.count(
  //     programParticipationToProgramsCountAggregateInput,
  //   );
  // }
}
