import { Module } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { ClaimResolver } from './claim.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimController } from './claim.controller';
import { ClaimFinancialModule } from '../claim-financial/claim-financial.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [ClaimFinancialModule, UserModule],
  providers: [PrismaService, ClaimResolver, ClaimController, ClaimService],
  exports: [ClaimController],
})
export class ClaimModule {}
