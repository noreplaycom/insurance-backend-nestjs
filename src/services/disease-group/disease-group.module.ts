import { Module } from '@nestjs/common';
import { DiseaseGroupService } from './disease-group.service';
import { DiseaseGroupResolver } from './disease-group.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DiseaseGroupController } from './disease-group.controller';
import { FakeDiseaseGroupController } from './disease-group.controller.fake';

@Module({
  providers: [
    PrismaService,
    DiseaseGroupResolver,
    DiseaseGroupService,
    {
      provide: DiseaseGroupController,
      useClass: FakeDiseaseGroupController,
    }
  ],
  exports: [
    {
      provide: DiseaseGroupController,
      useClass: FakeDiseaseGroupController,
    }
  ],
})
export class DiseaseGroupModule {}
