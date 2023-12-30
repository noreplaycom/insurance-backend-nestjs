import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { Program } from 'src/@generated';

@Injectable()
export class PrismaProgramController implements ProgramController {
  constructor(private readonly programService: ProgramService) {}

  async createOne(programCreateArgs: Prisma.ProgramCreateArgs): Promise<Program> {
    return await this.programService.createOne(programCreateArgs);
  }

  async createMany(programCreateManyArgs: Prisma.ProgramCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.programService.createMany(programCreateManyArgs);
  }

  async findOne(programFindUniqueArgs: Prisma.ProgramFindUniqueArgs): Promise<Program> {
    return await this.programService.findOne(programFindUniqueArgs);
  }

  async findMany(programFindManyArgs: Prisma.ProgramFindManyArgs): Promise<Program[]> {
    return await this.programService.findMany(programFindManyArgs);
  }

  async findFirst(programFindFirstArgs: Prisma.ProgramFindFirstArgs): Promise<Program> {
    return await this.programService.findFirst(programFindFirstArgs);
  }

  async updateOne(programUpdateOneArgs: Prisma.ProgramUpdateArgs): Promise<Program> {
    return await this.programService.updateOne(programUpdateOneArgs);
  }

  async updateMany(programUpdateManyArgs: Prisma.ProgramUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.programService.updateMany(programUpdateManyArgs);
  }

  async delete(programDeleteArgs: Prisma.ProgramDeleteArgs): Promise<boolean> {
    return await this.programService.delete(programDeleteArgs);
  }

  async deleteMany(programDeleteManyArgs: Prisma.ProgramDeleteManyArgs): Promise<boolean> {
    return await this.programService.deleteMany(programDeleteManyArgs);
  }

  async aggregate(programAggregateArgs: Prisma.ProgramAggregateArgs): Promise<Prisma.GetProgramAggregateType<Prisma.ProgramAggregateArgs>> {
    return await this.programService.aggregate(programAggregateArgs);
  }

  async count(programCountArgs: Prisma.ProgramCountArgs): Promise<number> {
    return await this.programService.count(programCountArgs);
  }

  async getClassesProgram(): Promise<string[]> {
    return [];
  }

  async getApplicationTypesProgram(): Promise<string[]> {
    return [];
  }
}
