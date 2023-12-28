import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  async createOne(participantCreateArgs: Prisma.ParticipantCreateArgs) {
    try {
      return await this.prisma.participant.create(participantCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(participantCreateManyArgs: Prisma.ParticipantCreateManyArgs) {
    try {
      return await this.prisma.participant.createMany(participantCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(participantFindUniqueArgs: Prisma.ParticipantFindUniqueArgs) {
    try {
      return await this.prisma.participant.findUnique(participantFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(participantFindManyArgs: Prisma.ParticipantFindManyArgs) {
    try {
      return await this.prisma.participant.findMany(participantFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(participantFindFirstArgs: Prisma.ParticipantFindFirstArgs) {
    try {
      return await this.prisma.participant.findFirst(participantFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(participantUpdateOneArgs: Prisma.ParticipantUpdateArgs) {
    try {
      return await this.prisma.participant.update(participantUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(participantUpdateManyArgs: Prisma.ParticipantUpdateManyArgs) {
    try {
      return await this.prisma.participant.updateMany(participantUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(participantDeleteArgs: Prisma.ParticipantDeleteArgs) {
    try {
      await this.prisma.participant.delete(participantDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(participantDeleteManyArgs: Prisma.ParticipantDeleteManyArgs) {
    try {
      await this.prisma.participant.deleteMany(participantDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(participantAggregateArgs: Prisma.ParticipantAggregateArgs) {
    try {
      return await this.prisma.participant.aggregate(participantAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(participantCountArgs: Prisma.ParticipantCountArgs) {
    try {
      return await this.prisma.participant.count(participantCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
