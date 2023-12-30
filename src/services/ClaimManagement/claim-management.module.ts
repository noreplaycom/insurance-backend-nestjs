import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimController } from '../claim/claim.controller';
import { ClaimManagementResolver } from './claim-management.resolver';
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
    ClaimManagementResolver
  ],
})
export class ClaimManagementModule {}
