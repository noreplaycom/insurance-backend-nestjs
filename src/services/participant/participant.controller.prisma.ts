import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { Participant } from 'src/@generated';

@Injectable()
export class PrismaParticipantController implements ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  async createOne(participantCreateArgs: Prisma.ParticipantCreateArgs): Promise<Participant> {
    return await this.participantService.createOne(participantCreateArgs);
  }

  async createMany(participantCreateManyArgs: Prisma.ParticipantCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.participantService.createMany(participantCreateManyArgs);
  }

  async findOne(participantFindUniqueArgs: Prisma.ParticipantFindUniqueArgs): Promise<Participant> {
    return await this.participantService.findOne(participantFindUniqueArgs);
  }

  async findMany(participantFindManyArgs: Prisma.ParticipantFindManyArgs): Promise<Participant[]> {
    return await this.participantService.findMany(participantFindManyArgs);
  }

  async findFirst(participantFindFirstArgs: Prisma.ParticipantFindFirstArgs): Promise<Participant> {
    return await this.participantService.findFirst(participantFindFirstArgs);
  }

  async updateOne(participantUpdateOneArgs: Prisma.ParticipantUpdateArgs): Promise<Participant> {
    return await this.participantService.updateOne(participantUpdateOneArgs);
  }

  async updateMany(participantUpdateManyArgs: Prisma.ParticipantUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.participantService.updateMany(participantUpdateManyArgs);
  }

  async delete(participantDeleteArgs: Prisma.ParticipantDeleteArgs): Promise<boolean> {
    return await this.participantService.delete(participantDeleteArgs);
  }

  async deleteMany(participantDeleteManyArgs: Prisma.ParticipantDeleteManyArgs): Promise<boolean> {
    return await this.participantService.deleteMany(participantDeleteManyArgs);
  }

  async aggregate(participantAggregateArgs: Prisma.ParticipantAggregateArgs): Promise<Prisma.GetParticipantAggregateType<Prisma.ParticipantAggregateArgs>> {
    return await this.participantService.aggregate(participantAggregateArgs);
  }

  async count(participantCountArgs: Prisma.ParticipantCountArgs): Promise<number> {
    return await this.participantService.count(participantCountArgs);
  }
}
