import { FileUpload, GraphQLUpload } from 'graphql-upload';
// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateParticipant,
  CreateManyParticipantArgs,
  CreateOneParticipantArgs,
  DeleteManyParticipantArgs,
  DeleteOneParticipantArgs,
  FindFirstParticipantArgs,
  FindManyParticipantArgs,
  FindUniqueParticipantArgs,
  Participant,
  ParticipantAggregateArgs,
  UpdateManyParticipantArgs,
  UpdateOneParticipantArgs,
} from 'src/@generated';
import { ParticipantController } from './participant.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ParticipantSelect {
  select: Prisma.ParticipantSelect;
}

@Resolver(() => Participant)
export class ParticipantResolver {
  constructor(private readonly participantController: ParticipantController) {}

  // @Mutation(() => Participant, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async participantCreateOne(
  //   @Args()
  //   participantCreateArgs: CreateOneParticipantArgs,
  //   @Relations() relations: ParticipantSelect,
  // ): Promise<Participant | void> {
  //   return await this.participantController.createOne({
  //     ...participantCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async participantCreateMany(
  //   @Args()
  //   createManyParticipantArgs: CreateManyParticipantArgs,
  // ) {
  //   return await this.participantController.createMany(createManyParticipantArgs);
  // }

  @Query(() => Participant, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  participantFindOne(
    @Args()
    participantFindUniqueArgs: FindUniqueParticipantArgs,
    @Relations() relations: ParticipantSelect,
  ): Promise<Participant | void> {
    return this.participantController.findOne({
      ...participantFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Participant], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  participantFindMany(
    @Args() participantFindManyArgs: FindManyParticipantArgs,
    @Relations() relations: ParticipantSelect,
  ) {
    return this.participantController.findMany({
      ...participantFindManyArgs,
      select: relations.select,
    });
  }

  // @Query(() => Participant, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // participantFindFirst(
  //   @Args()
  //   findFirstParticipantArgs: FindFirstParticipantArgs,
  //   @Relations() relations: ParticipantSelect,
  // ): Promise<Participant | void> {
  //   return this.participantController.findFirst({
  //     ...findFirstParticipantArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Participant, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async participantUpdateOne(
  //   @Args() participantUpdateOneArgs: UpdateOneParticipantArgs,
  //   @Relations() relations: ParticipantSelect,
  // ) {
  //   return this.participantController.updateOne({
  //     ...replaceNullWithUndefined(participantUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Participant, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async participantUpdateMany(@Args() updateManyParticipantArgs: UpdateManyParticipantArgs) {
  //   return this.participantController.updateMany(updateManyParticipantArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async participantDelete(
  //   @Args() deleteOneParticipantArgs: DeleteOneParticipantArgs,
  //   @Relations() relations: ParticipantSelect,
  // ) {
  //   return this.participantController.delete({
  //     ...deleteOneParticipantArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async participantDeleteMany(@Args() deleteManyParticipantArgs: DeleteManyParticipantArgs) {
  //   return this.participantController.deleteMany(deleteManyParticipantArgs);
  // }

  // @Query(() => AggregateParticipant, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // participantAggregate(@Args() participantAggregateArgs: ParticipantAggregateArgs) {
  //   return this.participantController.aggregate(participantAggregateArgs);
  // }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  participantCount(
    @Args() participantCountAggregateInput: FindManyParticipantArgs,
  ) {
    return this.participantController.count(participantCountAggregateInput);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Import participant data from xlsx file'
  })
  async participantImport(
    @Args({name: 'file', type: () => GraphQLUpload, nullable: true})
    file: FileUpload
  ): Promise<Boolean>{
    return await this.participantController.import(file);
  }

  @Query(() => String, {  
    description: "Export participant data to excel file (xlsx)"
  })
  async participantExport(): Promise<String>{
    return await this.participantController.export();
  }
}
