import { Module } from '@nestjs/common';
import { ProgramParticipationService } from './program-participation.service';
import { ProgramParticipationResolver } from './program-participation.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramParticipationController } from './program-participation.controller';

@Module({
  providers: [PrismaService, ProgramParticipationResolver, ProgramParticipationController, ProgramParticipationService],
  exports: [ProgramParticipationController],
})
export class ProgramParticipationModule {}
