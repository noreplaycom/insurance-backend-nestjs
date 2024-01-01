import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Participant } from 'src/@generated';

@Injectable()
export abstract class ParticipantController {
  abstract createOne(participantCreateArgs: Prisma.ParticipantCreateArgs): Promise<Participant>;

  abstract createMany(participantCreateManyArgs: Prisma.ParticipantCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(participantFindUniqueArgs: Prisma.ParticipantFindUniqueArgs): Promise<Participant>;

  abstract findMany(participantFindManyArgs: Prisma.ParticipantFindManyArgs): Promise<Participant[]>;

  abstract findFirst(participantFindFirstArgs: Prisma.ParticipantFindFirstArgs): Promise<Participant>;

  abstract updateOne(participantUpdateOneArgs: Prisma.ParticipantUpdateArgs): Promise<Participant>;

  abstract updateMany(participantUpdateManyArgs: Prisma.ParticipantUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(participantDeleteArgs: Prisma.ParticipantDeleteArgs): Promise<boolean>;

  abstract deleteMany(participantDeleteManyArgs: Prisma.ParticipantDeleteManyArgs): Promise<boolean>;

  abstract aggregate(participantAggregateArgs: Prisma.ParticipantAggregateArgs): Promise<Prisma.GetParticipantAggregateType<Prisma.ParticipantAggregateArgs>>;

  abstract count(participantCountArgs: Prisma.ParticipantCountArgs): Promise<number>;

  abstract getParticipantStatuses(): Promise<string[]>;
}
