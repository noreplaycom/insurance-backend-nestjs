import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramParticipationService } from './programParticipation.service';

@Injectable()
export class ProgramParticipationController {
  constructor(private readonly programParticipationService: ProgramParticipationService) {}

  async createOne(programParticipationCreateArgs: Prisma.ProgramParticipationCreateArgs) {
    return await this.programParticipationService.createOne(programParticipationCreateArgs);
  }

  async createMany(programParticipationCreateManyArgs: Prisma.ProgramParticipationCreateManyArgs) {
    return await this.programParticipationService.createMany(programParticipationCreateManyArgs);
  }

  async findOne(programParticipationFindUniqueArgs: Prisma.ProgramParticipationFindUniqueArgs) {
    return await this.programParticipationService.findOne(programParticipationFindUniqueArgs);
  }

  async findMany(programParticipationFindManyArgs: Prisma.ProgramParticipationFindManyArgs) {
    return await this.programParticipationService.findMany(programParticipationFindManyArgs);
  }

  async findFirst(programParticipationFindFirstArgs: Prisma.ProgramParticipationFindFirstArgs) {
    return await this.programParticipationService.findFirst(programParticipationFindFirstArgs);
  }

  async updateOne(programParticipationUpdateOneArgs: Prisma.ProgramParticipationUpdateArgs) {
    return await this.programParticipationService.updateOne(programParticipationUpdateOneArgs);
  }

  async updateMany(programParticipationUpdateManyArgs: Prisma.ProgramParticipationUpdateManyArgs) {
    return await this.programParticipationService.updateMany(programParticipationUpdateManyArgs);
  }

  async delete(programParticipationDeleteArgs: Prisma.ProgramParticipationDeleteArgs) {
    return await this.programParticipationService.delete(programParticipationDeleteArgs);
  }

  async deleteMany(programParticipationDeleteManyArgs: Prisma.ProgramParticipationDeleteManyArgs) {
    return await this.programParticipationService.deleteMany(programParticipationDeleteManyArgs);
  }

  async aggregate(programParticipationAggregateArgs: Prisma.ProgramParticipationAggregateArgs) {
    return await this.programParticipationService.aggregate(programParticipationAggregateArgs);
  }

  async count(programParticipationCountArgs: Prisma.ProgramParticipationCountArgs) {
    return await this.programParticipationService.count(programParticipationCountArgs);
  }
}
