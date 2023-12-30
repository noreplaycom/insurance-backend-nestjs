import { Module } from '@nestjs/common';
import { DiseaseClusterService } from './disease-cluster.service';
import { DiseaseClusterResolver } from './disease-cluster.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseClusterController } from './disease-cluster.controller';
import { FakeDiseaseClusterController } from './disease-cluster.controller.fake';
import { PrismaDiseaseClusterController } from './disease-cluster.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    DiseaseClusterResolver,
    DiseaseClusterService,
    PrismaDiseaseClusterController,
    FakeDiseaseClusterController,
    {
      provide: DiseaseClusterController,
      inject: [ConfigService, PrismaDiseaseClusterController, FakeDiseaseClusterController],
      useFactory: (config: ConfigService, prisma: PrismaDiseaseClusterController, fake: FakeDiseaseClusterController) => {
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
      provide: DiseaseClusterController,
      inject: [ConfigService, PrismaDiseaseClusterController, FakeDiseaseClusterController],
      useFactory: (config: ConfigService, prisma: PrismaDiseaseClusterController, fake: FakeDiseaseClusterController) => {
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
export class DiseaseClusterModule {}

