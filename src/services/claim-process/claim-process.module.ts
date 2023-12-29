import { Module } from '@nestjs/common';
import { ClaimProcessService } from './claim-process.service';
import { ClaimProcessResolver } from './claim-process.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimProcessController } from './claim-process.controller';

@Module({
  providers: [PrismaService, ClaimProcessResolver, ClaimProcessController, ClaimProcessService],
  exports: [ClaimProcessController],
})
export class ClaimProcessModule {}
