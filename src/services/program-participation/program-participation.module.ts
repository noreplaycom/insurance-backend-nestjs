import { Module } from '@nestjs/common';
import { ProgramParticipationService } from './programParticipation.service';
import { ProgramParticipationResolver } from './programParticipation.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramParticipationController } from './programParticipation.controller';

@Module({
  providers: [PrismaService, ProgramParticipationResolver, ProgramParticipationController, ProgramParticipationService],
  exports: [ProgramParticipationController],
})
export class ProgramParticipationModule {}
