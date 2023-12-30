import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DiseaseService } from './disease.service';
import { DiseaseController } from './disease.controller';
import { Disease } from 'src/@generated';

@Injectable()
export class PrismaDiseaseController implements DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  async createOne(diseaseCreateArgs: Prisma.DiseaseCreateArgs): Promise<Disease> {
    return await this.diseaseService.createOne(diseaseCreateArgs);
  }

  async createMany(diseaseCreateManyArgs: Prisma.DiseaseCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.diseaseService.createMany(diseaseCreateManyArgs);
  }

  async findOne(diseaseFindUniqueArgs: Prisma.DiseaseFindUniqueArgs): Promise<Disease> {
    return await this.diseaseService.findOne(diseaseFindUniqueArgs);
  }

  async findMany(diseaseFindManyArgs: Prisma.DiseaseFindManyArgs): Promise<Disease[]> {
    return await this.diseaseService.findMany(diseaseFindManyArgs);
  }

  async findFirst(diseaseFindFirstArgs: Prisma.DiseaseFindFirstArgs): Promise<Disease> {
    return await this.diseaseService.findFirst(diseaseFindFirstArgs);
  }

  async updateOne(diseaseUpdateOneArgs: Prisma.DiseaseUpdateArgs): Promise<Disease> {
    return await this.diseaseService.updateOne(diseaseUpdateOneArgs);
  }

  async updateMany(diseaseUpdateManyArgs: Prisma.DiseaseUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.diseaseService.updateMany(diseaseUpdateManyArgs);
  }

  async delete(diseaseDeleteArgs: Prisma.DiseaseDeleteArgs): Promise<boolean> {
    return await this.diseaseService.delete(diseaseDeleteArgs);
  }

  async deleteMany(diseaseDeleteManyArgs: Prisma.DiseaseDeleteManyArgs): Promise<boolean> {
    return await this.diseaseService.deleteMany(diseaseDeleteManyArgs);
  }

  async aggregate(diseaseAggregateArgs: Prisma.DiseaseAggregateArgs): Promise<Prisma.GetDiseaseAggregateType<Prisma.DiseaseAggregateArgs>> {
    return await this.diseaseService.aggregate(diseaseAggregateArgs);
  }

  async count(diseaseCountArgs: Prisma.DiseaseCountArgs): Promise<number> {
    return await this.diseaseService.count(diseaseCountArgs);
  }
}
