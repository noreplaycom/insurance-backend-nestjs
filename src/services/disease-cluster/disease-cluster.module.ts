import { Module } from '@nestjs/common';
import { DiseaseClusterService } from './disease-cluster.service';
import { DiseaseClusterResolver } from './disease-cluster.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseClusterController } from './disease-cluster.controller';

@Module({
  providers: [PrismaService, DiseaseClusterResolver, DiseaseClusterController, DiseaseClusterService],
  exports: [DiseaseClusterController],
})
export class DiseaseClusterModule {}
