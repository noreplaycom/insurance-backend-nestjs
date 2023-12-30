import { Module } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { DiseaseResolver } from './disease.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseController } from './disease.controller';
import { FakeDiseaseController } from './disease.controller.fake';

@Module({
  providers: [
    PrismaService,
    DiseaseResolver,
    DiseaseService,
    {
      provide: DiseaseController,
      useClass: FakeDiseaseController,
    }
  ],
  exports: [
    {
      provide: DiseaseController,
      useClass: FakeDiseaseController,
    }
  ],
})
export class DiseaseModule {}
