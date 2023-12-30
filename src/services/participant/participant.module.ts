import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ParticipantController } from './participant.controller';
import { FakeParticipantController } from './participant.controller.fake';

@Module({
  providers: [
    PrismaService,
    ParticipantResolver,
    ParticipantService,
    {
      provide: ParticipantController,
      useClass: FakeParticipantController,
    }
  ],
  exports: [
    {
      provide: ParticipantController,
      useClass: FakeParticipantController,
    }
  ],
})
export class ParticipantModule {}
