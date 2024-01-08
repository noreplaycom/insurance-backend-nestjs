import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ParticipantController } from './participant.controller';
import { UserModule } from '../user/user.module';
import { ProgramModule } from '../program/program.module';

@Module({
  providers: [
    PrismaService,
    ParticipantResolver,
    ParticipantController,
    ParticipantService,
  ],
  exports: [ParticipantController],
  imports: [ProgramModule, UserModule],
})
export class ParticipantModule {}
