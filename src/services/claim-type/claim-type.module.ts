import { Module } from '@nestjs/common';
import { ClaimTypeService } from './claimType.service';
import { ClaimTypeResolver } from './claimType.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimTypeController } from './claimType.controller';

@Module({
  providers: [PrismaService, ClaimTypeResolver, ClaimTypeController, ClaimTypeService],
  exports: [ClaimTypeController],
})
export class ClaimTypeModule {}
