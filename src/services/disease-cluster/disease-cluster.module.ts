import { Module } from '@nestjs/common';
import { DiseaseClusterService } from './disease-cluster.service';
import { DiseaseClusterResolver } from './disease-cluster.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseClusterController } from './disease-cluster.controller';
import { FakeDiseaseClusterController } from './disease-cluster.controller.fake';

@Module({
  providers: [
    PrismaService,
    DiseaseClusterResolver,
    DiseaseClusterService,
    {
      provide: DiseaseClusterController,
      useClass: FakeDiseaseClusterController,
    }
  ],
  exports: [
    {
      provide: DiseaseClusterController,
      useClass: FakeDiseaseClusterController,
    }
  ],
})
export class DiseaseClusterModule {}
