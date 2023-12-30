import { Module } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { ClaimResolver } from './claim.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimController } from './claim.controller';
import { FakeClaimController } from './claim.controller.fake';

@Module({
  providers: [
    PrismaService,
    ClaimResolver,
    ClaimService,
    {
      provide: ClaimController,
      useClass: FakeClaimController,
    }
  ],
  exports: [
    {
      provide: ClaimController,
      useClass: FakeClaimController,
    }
  ],
})
export class ClaimModule {}
