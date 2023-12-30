import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Program } from 'src/@generated';

@Injectable()
export abstract class ProgramController {
  abstract createOne(programCreateArgs: Prisma.ProgramCreateArgs): Promise<Program>;

  abstract createMany(programCreateManyArgs: Prisma.ProgramCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(programFindUniqueArgs: Prisma.ProgramFindUniqueArgs): Promise<Program>;

  abstract findMany(programFindManyArgs: Prisma.ProgramFindManyArgs): Promise<Program[]>;

  abstract findFirst(programFindFirstArgs: Prisma.ProgramFindFirstArgs): Promise<Program>;

  abstract updateOne(programUpdateOneArgs: Prisma.ProgramUpdateArgs): Promise<Program>;

  abstract updateMany(programUpdateManyArgs: Prisma.ProgramUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(programDeleteArgs: Prisma.ProgramDeleteArgs): Promise<boolean>;

  abstract deleteMany(programDeleteManyArgs: Prisma.ProgramDeleteManyArgs): Promise<boolean>;

  abstract aggregate(programAggregateArgs: Prisma.ProgramAggregateArgs): Promise<Prisma.GetProgramAggregateType<Prisma.ProgramAggregateArgs>>;

  abstract count(programCountArgs: Prisma.ProgramCountArgs): Promise<number>;

  abstract getClassesProgram(): Promise<string[]>;

  abstract getApplicationTypesProgram(): Promise<string[]>;
}
