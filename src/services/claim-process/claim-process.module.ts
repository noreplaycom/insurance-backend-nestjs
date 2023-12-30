import { Module } from '@nestjs/common';
import { ClaimProcessService } from './claim-process.service';
import { ClaimProcessResolver } from './claim-process.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimProcessController } from './claim-process.controller';
import { FakeClaimProcessController } from './claim-process.controller.fake';

@Module({
  providers: [
    PrismaService,
    ClaimProcessResolver,
    ClaimProcessService,
    {
      provide: ClaimProcessController,
      useClass: FakeClaimProcessController,
    }
  ],
  exports: [
    {
      provide: ClaimProcessController,
      useClass: FakeClaimProcessController,
    }
  ],
})
export class ClaimProcessModule {}
