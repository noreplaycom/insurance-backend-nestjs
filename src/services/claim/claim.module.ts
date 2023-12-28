import { Module } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { ClaimResolver } from './claim.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimController } from './claim.controller';

@Module({
  providers: [PrismaService, ClaimResolver, ClaimController, ClaimService],
  exports: [ClaimController],
})
export class ClaimModule {}
