import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchResolver } from './branch.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BranchController } from './branch.controller';
import { FakeBranchController } from './branch.controller.fake';

@Module({
  providers: [
    PrismaService,
    BranchResolver,
    BranchService,
    {
      provide: BranchController,
      useClass: FakeBranchController,
    }
  ],
  exports: [
    {
      provide: BranchController,
      useClass: FakeBranchController,
    }
  ],
})
export class BranchModule {}
