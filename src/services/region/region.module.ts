import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RegionController } from './region.controller';
import { FakeRegionController } from './region.controller.fake';

@Module({
  providers: [
    PrismaService,
    RegionResolver,
    RegionService,
    {
      provide: RegionController,
      useClass: FakeRegionController,
    }
  ],
  exports: [
    {
      provide: RegionController,
      useClass: FakeRegionController,
    }
  ],
})
export class RegionModule {}
