import { Module } from '@nestjs/common';
import { ClaimTypeService } from './claim-type.service';
import { ClaimTypeResolver } from './claim-type.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimTypeController } from './claim-type.controller';
import { FakeClaimTypeController } from './claim-type.controller.fake';

@Module({
  providers: [
    PrismaService,
    ClaimTypeResolver,
    ClaimTypeService,
    {
      provide: ClaimTypeController,
      useClass: FakeClaimTypeController,
    }
  ],
  exports: [
    {
      provide: ClaimTypeController,
      useClass: FakeClaimTypeController,
    }
  ],
})
export class ClaimTypeModule {}
