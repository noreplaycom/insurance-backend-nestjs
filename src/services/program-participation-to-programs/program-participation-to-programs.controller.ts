import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramParticipationToProgramsService } from './program-participation-to-programs.service';

@Injectable()
export class ProgramParticipationToProgramsController {
  constructor(
    private readonly programParticipationToProgramsService: ProgramParticipationToProgramsService,
  ) {}

  async createOne(
    programParticipationToProgramsCreateArgs: Prisma.ProgramParticipationToProgramsCreateArgs,
  ) {
    return await this.programParticipationToProgramsService.createOne(
      programParticipationToProgramsCreateArgs,
    );
  }

  async createMany(
    programParticipationToProgramsCreateManyArgs: Prisma.ProgramParticipationToProgramsCreateManyArgs,
  ) {
    return await this.programParticipationToProgramsService.createMany(
      programParticipationToProgramsCreateManyArgs,
    );
  }

  async findOne(
    programParticipationToProgramsFindUniqueArgs: Prisma.ProgramParticipationToProgramsFindUniqueArgs,
  ) {
    return await this.programParticipationToProgramsService.findOne(
      programParticipationToProgramsFindUniqueArgs,
    );
  }

  async findMany(
    programParticipationToProgramsFindManyArgs: Prisma.ProgramParticipationToProgramsFindManyArgs,
  ) {
    return await this.programParticipationToProgramsService.findMany(
      programParticipationToProgramsFindManyArgs,
    );
  }

  async findFirst(
    programParticipationToProgramsFindFirstArgs: Prisma.ProgramParticipationToProgramsFindFirstArgs,
  ) {
    return await this.programParticipationToProgramsService.findFirst(
      programParticipationToProgramsFindFirstArgs,
    );
  }

  async updateOne(
    programParticipationToProgramsUpdateOneArgs: Prisma.ProgramParticipationToProgramsUpdateArgs,
  ) {
    return await this.programParticipationToProgramsService.updateOne(
      programParticipationToProgramsUpdateOneArgs,
    );
  }

  async updateMany(
    programParticipationToProgramsUpdateManyArgs: Prisma.ProgramParticipationToProgramsUpdateManyArgs,
  ) {
    return await this.programParticipationToProgramsService.updateMany(
      programParticipationToProgramsUpdateManyArgs,
    );
  }

  async delete(
    programParticipationToProgramsDeleteArgs: Prisma.ProgramParticipationToProgramsDeleteArgs,
  ) {
    return await this.programParticipationToProgramsService.delete(
      programParticipationToProgramsDeleteArgs,
    );
  }

  async deleteMany(
    programParticipationToProgramsDeleteManyArgs: Prisma.ProgramParticipationToProgramsDeleteManyArgs,
  ) {
    return await this.programParticipationToProgramsService.deleteMany(
      programParticipationToProgramsDeleteManyArgs,
    );
  }

  async aggregate(
    programParticipationToProgramsAggregateArgs: Prisma.ProgramParticipationToProgramsAggregateArgs,
  ) {
    return await this.programParticipationToProgramsService.aggregate(
      programParticipationToProgramsAggregateArgs,
    );
  }

  async count(
    programParticipationToProgramsCountArgs: Prisma.ProgramParticipationToProgramsCountArgs,
  ) {
    return await this.programParticipationToProgramsService.count(
      programParticipationToProgramsCountArgs,
    );
  }
}
