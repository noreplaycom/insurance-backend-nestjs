import { Module } from '@nestjs/common';
import { ClaimFinancialService } from './claim-financial.service';
import { ClaimFinancialResolver } from './claim-financial.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimFinancialController } from './claim-financial.controller';

@Module({
  providers: [PrismaService, ClaimFinancialResolver, ClaimFinancialController, ClaimFinancialService],
  exports: [ClaimFinancialController],
})
export class ClaimFinancialModule {}
