import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramParticipation } from 'src/@generated';

@Injectable()
export abstract class ProgramParticipationController {
  abstract createOne(programParticipationCreateArgs: Prisma.ProgramParticipationCreateArgs): Promise<ProgramParticipation>;

  abstract createMany(programParticipationCreateManyArgs: Prisma.ProgramParticipationCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(programParticipationFindUniqueArgs: Prisma.ProgramParticipationFindUniqueArgs): Promise<ProgramParticipation>;

  abstract findMany(programParticipationFindManyArgs: Prisma.ProgramParticipationFindManyArgs): Promise<ProgramParticipation[]>;

  abstract findFirst(programParticipationFindFirstArgs: Prisma.ProgramParticipationFindFirstArgs): Promise<ProgramParticipation>;

  abstract updateOne(programParticipationUpdateOneArgs: Prisma.ProgramParticipationUpdateArgs): Promise<ProgramParticipation>;

  abstract updateMany(programParticipationUpdateManyArgs: Prisma.ProgramParticipationUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(programParticipationDeleteArgs: Prisma.ProgramParticipationDeleteArgs): Promise<boolean>;

  abstract deleteMany(programParticipationDeleteManyArgs: Prisma.ProgramParticipationDeleteManyArgs): Promise<boolean>;

  abstract aggregate(programParticipationAggregateArgs: Prisma.ProgramParticipationAggregateArgs): Promise<Prisma.GetProgramParticipationAggregateType<Prisma.ProgramParticipationAggregateArgs>>;

  abstract count(programParticipationCountArgs: Prisma.ProgramParticipationCountArgs): Promise<number>;
}
