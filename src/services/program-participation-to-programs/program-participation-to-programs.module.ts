import { Module } from '@nestjs/common';
import { ProgramParticipationToProgramsService } from './program-participation-to-programs.service';
import { ProgramParticipationToProgramsResolver } from './program-participation-to-programs.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramParticipationToProgramsController } from './program-participation-to-programs.controller';

@Module({
  providers: [
    PrismaService,
    ProgramParticipationToProgramsResolver,
    ProgramParticipationToProgramsController,
    ProgramParticipationToProgramsService,
  ],
  exports: [ProgramParticipationToProgramsController],
})
export class ProgramParticipationToProgramsModule {}
