import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CityController } from './city.controller';
import { FakeCityController } from './city.controller.fake';
import { PrismaCityController } from './city.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    CityResolver,
    CityService,
    PrismaCityController,
    FakeCityController,
    {
      provide: CityController,
      inject: [ConfigService, PrismaCityController, FakeCityController],
      useFactory: (config: ConfigService, prisma: PrismaCityController, fake: FakeCityController) => {
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
      provide: CityController,
      inject: [ConfigService, PrismaCityController, FakeCityController],
      useFactory: (config: ConfigService, prisma: PrismaCityController, fake: FakeCityController) => {
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
export class CityModule {}

