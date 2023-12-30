import { Module } from '@nestjs/common';
import { ClaimFinancialService } from './claim-financial.service';
import { ClaimFinancialResolver } from './claim-financial.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimFinancialController } from './claim-financial.controller';
import { FakeClaimFinancialController } from './claim-financial.controller.fake';

@Module({
  providers: [
    PrismaService,
    ClaimFinancialResolver,
    ClaimFinancialService,
    {
      provide: ClaimFinancialController,
      useClass: FakeClaimFinancialController,
    }
  ],
  exports: [
    {
      provide: ClaimFinancialController,
      useClass: FakeClaimFinancialController,
    }
  ],
})
export class ClaimFinancialModule {}
