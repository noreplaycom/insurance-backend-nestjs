import { Module } from '@nestjs/common';
import { ClaimProcessService } from './claimProcess.service';
import { ClaimProcessResolver } from './claimProcess.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimProcessController } from './claimProcess.controller';

@Module({
  providers: [PrismaService, ClaimProcessResolver, ClaimProcessController, ClaimProcessService],
  exports: [ClaimProcessController],
})
export class ClaimProcessModule {}
