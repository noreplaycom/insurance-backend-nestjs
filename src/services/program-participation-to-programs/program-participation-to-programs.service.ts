import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProgramParticipationToProgramsService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    programParticipationToProgramsCreateArgs: Prisma.ProgramParticipationToProgramsCreateArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.create(
        programParticipationToProgramsCreateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    programParticipationToProgramsCreateManyArgs: Prisma.ProgramParticipationToProgramsCreateManyArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.createMany(
        programParticipationToProgramsCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    programParticipationToProgramsFindUniqueArgs: Prisma.ProgramParticipationToProgramsFindUniqueArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.findUnique(
        programParticipationToProgramsFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    programParticipationToProgramsFindManyArgs: Prisma.ProgramParticipationToProgramsFindManyArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.findMany(
        programParticipationToProgramsFindManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    programParticipationToProgramsFindFirstArgs: Prisma.ProgramParticipationToProgramsFindFirstArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.findFirst(
        programParticipationToProgramsFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(
    programParticipationToProgramsUpdateOneArgs: Prisma.ProgramParticipationToProgramsUpdateArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.update(
        programParticipationToProgramsUpdateOneArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    programParticipationToProgramsUpdateManyArgs: Prisma.ProgramParticipationToProgramsUpdateManyArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.updateMany(
        programParticipationToProgramsUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(
    programParticipationToProgramsDeleteArgs: Prisma.ProgramParticipationToProgramsDeleteArgs,
  ) {
    try {
      await this.prisma.programParticipationToPrograms.delete(
        programParticipationToProgramsDeleteArgs,
      );
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    programParticipationToProgramsDeleteManyArgs: Prisma.ProgramParticipationToProgramsDeleteManyArgs,
  ) {
    try {
      await this.prisma.programParticipationToPrograms.deleteMany(
        programParticipationToProgramsDeleteManyArgs,
      );
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    programParticipationToProgramsAggregateArgs: Prisma.ProgramParticipationToProgramsAggregateArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.aggregate(
        programParticipationToProgramsAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(
    programParticipationToProgramsCountArgs: Prisma.ProgramParticipationToProgramsCountArgs,
  ) {
    try {
      return await this.prisma.programParticipationToPrograms.count(
        programParticipationToProgramsCountArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
