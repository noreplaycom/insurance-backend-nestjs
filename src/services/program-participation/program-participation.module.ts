import { Module } from '@nestjs/common';
import { ProgramParticipationService } from './program-participation.service';
import { ProgramParticipationResolver } from './program-participation.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramParticipationController } from './program-participation.controller';
import { FakeProgramParticipationController } from './program-participation.controller.fake';

@Module({
  providers: [
    PrismaService,
    ProgramParticipationResolver,
    ProgramParticipationService,
    {
      provide: ProgramParticipationController,
      useClass: FakeProgramParticipationController,
    }
  ],
  exports: [
    {
      provide: ProgramParticipationController,
      useClass: FakeProgramParticipationController,
    }
  ],
})
export class ProgramParticipationModule {}
