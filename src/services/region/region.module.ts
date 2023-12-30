import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RegionController } from './region.controller';
import { FakeRegionController } from './region.controller.fake';
import { PrismaRegionController } from './region.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    RegionResolver,
    RegionService,
    PrismaRegionController,
    FakeRegionController,
    {
      provide: RegionController,
      inject: [ConfigService, PrismaRegionController, FakeRegionController],
      useFactory: (config: ConfigService, prisma: PrismaRegionController, fake: FakeRegionController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
          default:
            throw new Error('invalid datasource type')
        }
      },
    }
  ],
  exports: [
    {
      provide: RegionController,
      inject: [ConfigService, PrismaRegionController, FakeRegionController],
      useFactory: (config: ConfigService, prisma: PrismaRegionController, fake: FakeRegionController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
        }
      },
    }
  ],
})
export class RegionModule {}

