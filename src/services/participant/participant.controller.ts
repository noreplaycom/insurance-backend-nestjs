import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ParticipantService } from './participant.service';
import { ParticipantStatus } from 'src/@generated';

@Injectable()
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  async createOne(participantCreateArgs: Prisma.ParticipantCreateArgs) {
    return await this.participantService.createOne(participantCreateArgs);
  }

  async createMany(participantCreateManyArgs: Prisma.ParticipantCreateManyArgs) {
    return await this.participantService.createMany(participantCreateManyArgs);
  }

  async findOne(participantFindUniqueArgs: Prisma.ParticipantFindUniqueArgs) {
    return await this.participantService.findOne(participantFindUniqueArgs);
  }

  async findMany(participantFindManyArgs: Prisma.ParticipantFindManyArgs) {
    return await this.participantService.findMany(participantFindManyArgs);
  }

  async findFirst(participantFindFirstArgs: Prisma.ParticipantFindFirstArgs) {
    return await this.participantService.findFirst(participantFindFirstArgs);
  }

  async updateOne(participantUpdateOneArgs: Prisma.ParticipantUpdateArgs) {
    return await this.participantService.updateOne(participantUpdateOneArgs);
  }

  async updateMany(participantUpdateManyArgs: Prisma.ParticipantUpdateManyArgs) {
    return await this.participantService.updateMany(participantUpdateManyArgs);
  }

  async delete(participantDeleteArgs: Prisma.ParticipantDeleteArgs) {
    return await this.participantService.delete(participantDeleteArgs);
  }

  async deleteMany(participantDeleteManyArgs: Prisma.ParticipantDeleteManyArgs) {
    return await this.participantService.deleteMany(participantDeleteManyArgs);
  }

  async aggregate(participantAggregateArgs: Prisma.ParticipantAggregateArgs) {
    return await this.participantService.aggregate(participantAggregateArgs);
  }

  async count(participantCountArgs: Prisma.ParticipantCountArgs) {
    return await this.participantService.count(participantCountArgs);
  }

  async getParticipantStatuses(): Promise<string[]> {
    return Object.keys(ParticipantStatus);
  }
}
