import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchResolver } from './branch.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BranchController } from './branch.controller';

@Module({
  providers: [PrismaService, BranchResolver, BranchController, BranchService],
  exports: [BranchController],
})
export class BranchModule {}
