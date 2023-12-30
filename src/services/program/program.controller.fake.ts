import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramController } from './program.controller';
import { Class, Program } from 'src/@generated';
import { fakeProgramComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeProgramController implements ProgramController {
  private programs: Program[] = [];

  constructor() {}

  async createOne(programCreateArgs: Prisma.ProgramCreateArgs): Promise<Program> {
    const fake = fakeProgramComplete()
    this.programs.push(fake);
    return fake;
  }

  async createMany(programCreateManyArgs: Prisma.ProgramCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = programCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.programs.push(fakeProgramComplete());
      }
      return { count: totalFake };
    } else {
      this.programs.push(fakeProgramComplete());
      return { count: 1 }
    }
  }

  async findOne(programFindUniqueArgs: Prisma.ProgramFindUniqueArgs): Promise<Program> {
    return this.programs.find(program => program.id === programFindUniqueArgs.where.id);
  }

  async findMany(programFindManyArgs: Prisma.ProgramFindManyArgs): Promise<Program[]> {
    return this.programs.filter(program => program);
  }

  async findFirst(programFindFirstArgs: Prisma.ProgramFindFirstArgs): Promise<Program> {
    return this.programs.find(program => program);
  }

  async updateOne(programUpdateOneArgs: Prisma.ProgramUpdateArgs): Promise<Program> {
    const idx = this.programs.findIndex(program => program.id === programUpdateOneArgs.where.id);
    this.programs[idx] = {
      ...fakeProgramComplete(),
      id: programUpdateOneArgs.where.id
    }
    return {
      ...fakeProgramComplete(),
      id: programUpdateOneArgs.where.id
    }
  }

  async updateMany(programUpdateManyArgs: Prisma.ProgramUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(programDeleteArgs: Prisma.ProgramDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(programDeleteManyArgs: Prisma.ProgramDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(programAggregateArgs: Prisma.ProgramAggregateArgs): Promise<Prisma.GetProgramAggregateType<Prisma.ProgramAggregateArgs>> {
    return {
      _avg: this.programs[0],
      _count: true,
      _max: this.programs[0],
      _min: this.programs[this.programs.length - 1],
      _sum: this.programs[0]
    }
  }

  async count(programCountArgs: Prisma.ProgramCountArgs): Promise<number> {
    return this.programs.length;
  }

  async getClassProgram(): Promise<string[]> {
    return Object.keys(Class);
  }
}
