import { Module } from '@nestjs/common';
import { DiseaseGroupService } from './disease-group.service';
import { DiseaseGroupResolver } from './disease-group.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseGroupController } from './disease-group.controller';

@Module({
  providers: [PrismaService, DiseaseGroupResolver, DiseaseGroupController, DiseaseGroupService],
  exports: [DiseaseGroupController],
})
export class DiseaseGroupModule {}
