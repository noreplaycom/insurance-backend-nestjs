import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ParticipantController } from './participant.controller';
import { AccountModule } from '../account/account.module';
import { UserModule } from '../user/user.module';

@Module({
  providers: [
    PrismaService,
    ParticipantResolver,
    ParticipantController,
    ParticipantService,
  ],
  exports: [ParticipantController],
  imports: [AccountModule, UserModule],
})
export class ParticipantModule {}
