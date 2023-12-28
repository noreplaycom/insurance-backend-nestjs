import { Module } from '@nestjs/common';
import { ClaimFinancialService } from './claimFinancial.service';
import { ClaimFinancialResolver } from './claimFinancial.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimFinancialController } from './claimFinancial.controller';

@Module({
  providers: [PrismaService, ClaimFinancialResolver, ClaimFinancialController, ClaimFinancialService],
  exports: [ClaimFinancialController],
})
export class ClaimFinancialModule {}
