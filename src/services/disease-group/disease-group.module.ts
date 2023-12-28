import { Module } from '@nestjs/common';
import { DiseaseGroupService } from './diseaseGroup.service';
import { DiseaseGroupResolver } from './diseaseGroup.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseGroupController } from './diseaseGroup.controller';

@Module({
  providers: [PrismaService, DiseaseGroupResolver, DiseaseGroupController, DiseaseGroupService],
  exports: [DiseaseGroupController],
})
export class DiseaseGroupModule {}
