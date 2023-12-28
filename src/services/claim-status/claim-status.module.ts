import { Module } from '@nestjs/common';
import { ClaimStatusService } from './claimStatus.service';
import { ClaimStatusResolver } from './claimStatus.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimStatusController } from './claimStatus.controller';

@Module({
  providers: [PrismaService, ClaimStatusResolver, ClaimStatusController, ClaimStatusService],
  exports: [ClaimStatusController],
})
export class ClaimStatusModule {}
