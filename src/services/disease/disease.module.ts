import { Module } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { DiseaseResolver } from './disease.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseController } from './disease.controller';
import { FakeDiseaseController } from './disease.controller.fake';
import { PrismaDiseaseController } from './disease.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    DiseaseResolver,
    DiseaseService,
    PrismaDiseaseController,
    FakeDiseaseController,
    {
      provide: DiseaseController,
      inject: [ConfigService, PrismaDiseaseController, FakeDiseaseController],
      useFactory: (config: ConfigService, prisma: PrismaDiseaseController, fake: FakeDiseaseController) => {
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
      provide: DiseaseController,
      inject: [ConfigService, PrismaDiseaseController, FakeDiseaseController],
      useFactory: (config: ConfigService, prisma: PrismaDiseaseController, fake: FakeDiseaseController) => {
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
export class DiseaseModule {}

