import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ParticipantController } from './participant.controller';

@Module({
  providers: [PrismaService, ParticipantResolver, ParticipantController, ParticipantService],
  exports: [ParticipantController],
})
export class ParticipantModule {}
