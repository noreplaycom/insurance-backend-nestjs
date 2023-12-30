import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramParticipationService } from './program-participation.service';
import { ProgramParticipationController } from './program-participation.controller';
import { ProgramParticipation } from 'src/@generated';

@Injectable()
export class PrismaProgramParticipationController implements ProgramParticipationController {
  constructor(private readonly programParticipationService: ProgramParticipationService) {}

  async createOne(programParticipationCreateArgs: Prisma.ProgramParticipationCreateArgs): Promise<ProgramParticipation> {
    return await this.programParticipationService.createOne(programParticipationCreateArgs);
  }

  async createMany(programParticipationCreateManyArgs: Prisma.ProgramParticipationCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.programParticipationService.createMany(programParticipationCreateManyArgs);
  }

  async findOne(programParticipationFindUniqueArgs: Prisma.ProgramParticipationFindUniqueArgs): Promise<ProgramParticipation> {
    return await this.programParticipationService.findOne(programParticipationFindUniqueArgs);
  }

  async findMany(programParticipationFindManyArgs: Prisma.ProgramParticipationFindManyArgs): Promise<ProgramParticipation[]> {
    return await this.programParticipationService.findMany(programParticipationFindManyArgs);
  }

  async findFirst(programParticipationFindFirstArgs: Prisma.ProgramParticipationFindFirstArgs): Promise<ProgramParticipation> {
    return await this.programParticipationService.findFirst(programParticipationFindFirstArgs);
  }

  async updateOne(programParticipationUpdateOneArgs: Prisma.ProgramParticipationUpdateArgs): Promise<ProgramParticipation> {
    return await this.programParticipationService.updateOne(programParticipationUpdateOneArgs);
  }

  async updateMany(programParticipationUpdateManyArgs: Prisma.ProgramParticipationUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.programParticipationService.updateMany(programParticipationUpdateManyArgs);
  }

  async delete(programParticipationDeleteArgs: Prisma.ProgramParticipationDeleteArgs): Promise<boolean> {
    return await this.programParticipationService.delete(programParticipationDeleteArgs);
  }

  async deleteMany(programParticipationDeleteManyArgs: Prisma.ProgramParticipationDeleteManyArgs): Promise<boolean> {
    return await this.programParticipationService.deleteMany(programParticipationDeleteManyArgs);
  }

  async aggregate(programParticipationAggregateArgs: Prisma.ProgramParticipationAggregateArgs): Promise<Prisma.GetProgramParticipationAggregateType<Prisma.ProgramParticipationAggregateArgs>> {
    return await this.programParticipationService.aggregate(programParticipationAggregateArgs);
  }

  async count(programParticipationCountArgs: Prisma.ProgramParticipationCountArgs): Promise<number> {
    return await this.programParticipationService.count(programParticipationCountArgs);
  }
}
