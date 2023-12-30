import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramParticipationController } from './program-participation.controller';
import { ProgramParticipation } from 'src/@generated';
import { fakeProgramParticipationComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeProgramParticipationController implements ProgramParticipationController {
  private programParticipations: ProgramParticipation[] = [];

  constructor() {}

  async createOne(programParticipationCreateArgs: Prisma.ProgramParticipationCreateArgs): Promise<ProgramParticipation> {
    const fake = fakeProgramParticipationComplete()
    this.programParticipations.push(fake);
    return fake;
  }

  async createMany(programParticipationCreateManyArgs: Prisma.ProgramParticipationCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = programParticipationCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.programParticipations.push(fakeProgramParticipationComplete());
      }
      return { count: totalFake };
    } else {
      this.programParticipations.push(fakeProgramParticipationComplete());
      return { count: 1 }
    }
  }

  async findOne(programParticipationFindUniqueArgs: Prisma.ProgramParticipationFindUniqueArgs): Promise<ProgramParticipation> {
    return this.programParticipations.find(programParticipation => programParticipation.id === programParticipationFindUniqueArgs.where.id);
  }

  async findMany(programParticipationFindManyArgs: Prisma.ProgramParticipationFindManyArgs): Promise<ProgramParticipation[]> {
    return this.programParticipations.filter(programParticipation => programParticipation);
  }

  async findFirst(programParticipationFindFirstArgs: Prisma.ProgramParticipationFindFirstArgs): Promise<ProgramParticipation> {
    return this.programParticipations.find(programParticipation => programParticipation);
  }

  async updateOne(programParticipationUpdateOneArgs: Prisma.ProgramParticipationUpdateArgs): Promise<ProgramParticipation> {
    const idx = this.programParticipations.findIndex(programParticipation => programParticipation.id === programParticipationUpdateOneArgs.where.id);
    this.programParticipations[idx] = {
      ...fakeProgramParticipationComplete(),
      id: programParticipationUpdateOneArgs.where.id
    }
    return {
      ...fakeProgramParticipationComplete(),
      id: programParticipationUpdateOneArgs.where.id
    }
  }

  async updateMany(programParticipationUpdateManyArgs: Prisma.ProgramParticipationUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(programParticipationDeleteArgs: Prisma.ProgramParticipationDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(programParticipationDeleteManyArgs: Prisma.ProgramParticipationDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(programParticipationAggregateArgs: Prisma.ProgramParticipationAggregateArgs): Promise<Prisma.GetProgramParticipationAggregateType<Prisma.ProgramParticipationAggregateArgs>> {
    return {
      _avg: this.programParticipations[0],
      _count: true,
      _max: this.programParticipations[0],
      _min: this.programParticipations[this.programParticipations.length - 1],
      _sum: this.programParticipations[0]
    }
  }

  async count(programParticipationCountArgs: Prisma.ProgramParticipationCountArgs): Promise<number> {
    return this.programParticipations.length;
  }
}
