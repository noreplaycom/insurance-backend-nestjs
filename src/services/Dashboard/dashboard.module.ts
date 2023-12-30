import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimController } from '../claim/claim.controller';
import { DashboardResolver } from './dashboard.resolver';
import { ClaimService } from '../claim/claim.service';
import { FakeClaimController } from '../claim/controller/fake-claim.controller';

@Module({
  providers: [
    PrismaService,
    {
      provide: ClaimController,
      useClass: FakeClaimController
    },
    ClaimService,
    DashboardResolver
  ],
})
export class DashboardModule {}
