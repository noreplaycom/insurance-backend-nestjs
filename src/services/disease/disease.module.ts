import { Module } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { DiseaseResolver } from './disease.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseController } from './disease.controller';

@Module({
  providers: [PrismaService, DiseaseResolver, DiseaseController, DiseaseService],
  exports: [DiseaseController],
})
export class DiseaseModule {}
