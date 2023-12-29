import { Module } from '@nestjs/common';
import { ClaimStatusService } from './claim-status.service';
import { ClaimStatusResolver } from './claim-status.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimStatusController } from './claim-status.controller';

@Module({
  providers: [PrismaService, ClaimStatusResolver, ClaimStatusController, ClaimStatusService],
  exports: [ClaimStatusController],
})
export class ClaimStatusModule {}
