import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CityController } from './city.controller';
import { FakeCityController } from './city.controller.fake';

@Module({
  providers: [
    PrismaService,
    CityResolver,
    CityService,
    {
      provide: CityController,
      useClass: FakeCityController,
    }
  ],
  exports: [
    {
      provide: CityController,
      useClass: FakeCityController,
    }
  ],
})
export class CityModule {}
