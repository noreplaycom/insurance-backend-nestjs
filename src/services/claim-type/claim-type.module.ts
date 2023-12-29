import { Module } from '@nestjs/common';
import { ClaimTypeService } from './claim-type.service';
import { ClaimTypeResolver } from './claim-type.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimTypeController } from './claim-type.controller';

@Module({
  providers: [PrismaService, ClaimTypeResolver, ClaimTypeController, ClaimTypeService],
  exports: [ClaimTypeController],
})
export class ClaimTypeModule {}
