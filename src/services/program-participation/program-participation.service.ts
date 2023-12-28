import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProgramParticipationService {
  constructor(private prisma: PrismaService) {}

  async createOne(programParticipationCreateArgs: Prisma.ProgramParticipationCreateArgs) {
    try {
      return await this.prisma.programParticipation.create(programParticipationCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(programParticipationCreateManyArgs: Prisma.ProgramParticipationCreateManyArgs) {
    try {
      return await this.prisma.programParticipation.createMany(programParticipationCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(programParticipationFindUniqueArgs: Prisma.ProgramParticipationFindUniqueArgs) {
    try {
      return await this.prisma.programParticipation.findUnique(programParticipationFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(programParticipationFindManyArgs: Prisma.ProgramParticipationFindManyArgs) {
    try {
      return await this.prisma.programParticipation.findMany(programParticipationFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(programParticipationFindFirstArgs: Prisma.ProgramParticipationFindFirstArgs) {
    try {
      return await this.prisma.programParticipation.findFirst(programParticipationFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(programParticipationUpdateOneArgs: Prisma.ProgramParticipationUpdateArgs) {
    try {
      return await this.prisma.programParticipation.update(programParticipationUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(programParticipationUpdateManyArgs: Prisma.ProgramParticipationUpdateManyArgs) {
    try {
      return await this.prisma.programParticipation.updateMany(programParticipationUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(programParticipationDeleteArgs: Prisma.ProgramParticipationDeleteArgs) {
    try {
      await this.prisma.programParticipation.delete(programParticipationDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(programParticipationDeleteManyArgs: Prisma.ProgramParticipationDeleteManyArgs) {
    try {
      await this.prisma.programParticipation.deleteMany(programParticipationDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(programParticipationAggregateArgs: Prisma.ProgramParticipationAggregateArgs) {
    try {
      return await this.prisma.programParticipation.aggregate(programParticipationAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(programParticipationCountArgs: Prisma.ProgramParticipationCountArgs) {
    try {
      return await this.prisma.programParticipation.count(programParticipationCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
