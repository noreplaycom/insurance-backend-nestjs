import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DiseaseService } from './disease.service';

@Injectable()
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  async createOne(diseaseCreateArgs: Prisma.DiseaseCreateArgs) {
    return await this.diseaseService.createOne(diseaseCreateArgs);
  }

  async createMany(diseaseCreateManyArgs: Prisma.DiseaseCreateManyArgs) {
    return await this.diseaseService.createMany(diseaseCreateManyArgs);
  }

  async findOne(diseaseFindUniqueArgs: Prisma.DiseaseFindUniqueArgs) {
    return await this.diseaseService.findOne(diseaseFindUniqueArgs);
  }

  async findMany(diseaseFindManyArgs: Prisma.DiseaseFindManyArgs) {
    return await this.diseaseService.findMany(diseaseFindManyArgs);
  }

  async findFirst(diseaseFindFirstArgs: Prisma.DiseaseFindFirstArgs) {
    return await this.diseaseService.findFirst(diseaseFindFirstArgs);
  }

  async updateOne(diseaseUpdateOneArgs: Prisma.DiseaseUpdateArgs) {
    return await this.diseaseService.updateOne(diseaseUpdateOneArgs);
  }

  async updateMany(diseaseUpdateManyArgs: Prisma.DiseaseUpdateManyArgs) {
    return await this.diseaseService.updateMany(diseaseUpdateManyArgs);
  }

  async delete(diseaseDeleteArgs: Prisma.DiseaseDeleteArgs) {
    return await this.diseaseService.delete(diseaseDeleteArgs);
  }

  async deleteMany(diseaseDeleteManyArgs: Prisma.DiseaseDeleteManyArgs) {
    return await this.diseaseService.deleteMany(diseaseDeleteManyArgs);
  }

  async aggregate(diseaseAggregateArgs: Prisma.DiseaseAggregateArgs) {
    return await this.diseaseService.aggregate(diseaseAggregateArgs);
  }

  async count(diseaseCountArgs: Prisma.DiseaseCountArgs) {
    return await this.diseaseService.count(diseaseCountArgs);
  }
}
