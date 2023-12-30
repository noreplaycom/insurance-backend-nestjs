import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { DashboardController } from './dashboard.controller';
import { ClaimController } from '../claim/claim.controller';
import { DashboardResolver } from './dashboard.resolver';
import { ClaimService } from '../claim/claim.service';

@Module({
  providers: [
    PrismaService,
    ClaimController,
    ClaimService,
    DashboardResolver
  ],
})
export class DashboardModule {}
