import { Module } from '@nestjs/common';
import { DiseaseClusterService } from './diseaseCluster.service';
import { DiseaseClusterResolver } from './diseaseCluster.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseClusterController } from './diseaseCluster.controller';

@Module({
  providers: [PrismaService, DiseaseClusterResolver, DiseaseClusterController, DiseaseClusterService],
  exports: [DiseaseClusterController],
})
export class DiseaseClusterModule {}
