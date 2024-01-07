// initialization.module.ts
import { Module } from '@nestjs/common';
import { InitializationService } from './initialization.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [InitializationService, PrismaService],
  exports: [InitializationService],
})
export class InitializationModule {}
