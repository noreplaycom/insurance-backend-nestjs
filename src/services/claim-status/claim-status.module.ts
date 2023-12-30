import { Module } from '@nestjs/common';
import { ClaimStatusService } from './claim-status.service';
import { ClaimStatusResolver } from './claim-status.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimStatusController } from './claim-status.controller';
import { FakeClaimStatusController } from './claim-status.controller.fake';

@Module({
  providers: [
    PrismaService,
    ClaimStatusResolver,
    ClaimStatusService,
    {
      provide: ClaimStatusController,
      useClass: FakeClaimStatusController,
    }
  ],
  exports: [
    {
      provide: ClaimStatusController,
      useClass: FakeClaimStatusController,
    }
  ],
})
export class ClaimStatusModule {}
