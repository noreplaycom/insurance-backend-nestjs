import { Module } from '@nestjs/common';
import { DiseaseGroupService } from './disease-group.service';
import { DiseaseGroupResolver } from './disease-group.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseGroupController } from './disease-group.controller';
import { FakeDiseaseGroupController } from './disease-group.controller.fake';
import { PrismaDiseaseGroupController } from './disease-group.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    DiseaseGroupResolver,
    DiseaseGroupService,
    PrismaDiseaseGroupController,
    FakeDiseaseGroupController,
    {
      provide: DiseaseGroupController,
      inject: [ConfigService, PrismaDiseaseGroupController, FakeDiseaseGroupController],
      useFactory: (config: ConfigService, prisma: PrismaDiseaseGroupController, fake: FakeDiseaseGroupController) => {
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
      provide: DiseaseGroupController,
      inject: [ConfigService, PrismaDiseaseGroupController, FakeDiseaseGroupController],
      useFactory: (config: ConfigService, prisma: PrismaDiseaseGroupController, fake: FakeDiseaseGroupController) => {
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
export class DiseaseGroupModule {}

