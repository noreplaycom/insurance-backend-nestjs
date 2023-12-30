import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ParticipantController } from './participant.controller';
import { Participant, ParticipantStatus } from 'src/@generated';
import { fakeParticipantComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeParticipantController implements ParticipantController {
  private participants: Participant[] = [];

  constructor() {
    const initial = 200;
    for (let i = 0; i < initial; i++) {
      this.participants.push(fakeParticipantComplete());
    }
  }

  async createOne(participantCreateArgs: Prisma.ParticipantCreateArgs): Promise<Participant> {
    const fake = fakeParticipantComplete()
    this.participants.push(fake);
    return fake;
  }

  async createMany(participantCreateManyArgs: Prisma.ParticipantCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = participantCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.participants.push(fakeParticipantComplete());
      }
      return { count: totalFake };
    } else {
      this.participants.push(fakeParticipantComplete());
      return { count: 1 }
    }
  }

  async findOne(participantFindUniqueArgs: Prisma.ParticipantFindUniqueArgs): Promise<Participant> {
    return this.participants.find(participant => participant.userId === participantFindUniqueArgs.where.userId);
  }

  async findMany(participantFindManyArgs: Prisma.ParticipantFindManyArgs): Promise<Participant[]> {
    return this.participants.filter(participant => participant);
  }

  async findFirst(participantFindFirstArgs: Prisma.ParticipantFindFirstArgs): Promise<Participant> {
    return this.participants.find(participant => participant);
  }

  async updateOne(participantUpdateOneArgs: Prisma.ParticipantUpdateArgs): Promise<Participant> {
    const idx = this.participants.findIndex(participant => participant.userId === participantUpdateOneArgs.where.userId);
    this.participants[idx] = {
      ...fakeParticipantComplete(),
    }
    return {
      ...fakeParticipantComplete(),
    }
  }

  async updateMany(participantUpdateManyArgs: Prisma.ParticipantUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(participantDeleteArgs: Prisma.ParticipantDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(participantDeleteManyArgs: Prisma.ParticipantDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(participantAggregateArgs: Prisma.ParticipantAggregateArgs): Promise<Prisma.GetParticipantAggregateType<Prisma.ParticipantAggregateArgs>> {
    return {
      _avg: this.participants[0],
      _count: true,
      _max: this.participants[0],
      _min: this.participants[this.participants.length - 1],
      _sum: this.participants[0]
    }
  }

  async count(participantCountArgs: Prisma.ParticipantCountArgs): Promise<number> {
    return this.participants.length;
  }

  async getParticipantStatuses(): Promise<string[]> {
    return Object.keys(ParticipantStatus);
  }
}
