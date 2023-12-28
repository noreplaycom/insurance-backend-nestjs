import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RegionController } from './region.controller';

@Module({
  providers: [PrismaService, RegionResolver, RegionController, RegionService],
  exports: [RegionController],
})
export class RegionModule {}
