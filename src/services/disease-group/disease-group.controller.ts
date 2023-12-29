import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DiseaseGroupService } from './disease-group.service';

@Injectable()
export class DiseaseGroupController {
  constructor(private readonly diseaseGroupService: DiseaseGroupService) {}

  async createOne(diseaseGroupCreateArgs: Prisma.DiseaseGroupCreateArgs) {
    return await this.diseaseGroupService.createOne(diseaseGroupCreateArgs);
  }

  async createMany(diseaseGroupCreateManyArgs: Prisma.DiseaseGroupCreateManyArgs) {
    return await this.diseaseGroupService.createMany(diseaseGroupCreateManyArgs);
  }

  async findOne(diseaseGroupFindUniqueArgs: Prisma.DiseaseGroupFindUniqueArgs) {
    return await this.diseaseGroupService.findOne(diseaseGroupFindUniqueArgs);
  }

  async findMany(diseaseGroupFindManyArgs: Prisma.DiseaseGroupFindManyArgs) {
    return await this.diseaseGroupService.findMany(diseaseGroupFindManyArgs);
  }

  async findFirst(diseaseGroupFindFirstArgs: Prisma.DiseaseGroupFindFirstArgs) {
    return await this.diseaseGroupService.findFirst(diseaseGroupFindFirstArgs);
  }

  async updateOne(diseaseGroupUpdateOneArgs: Prisma.DiseaseGroupUpdateArgs) {
    return await this.diseaseGroupService.updateOne(diseaseGroupUpdateOneArgs);
  }

  async updateMany(diseaseGroupUpdateManyArgs: Prisma.DiseaseGroupUpdateManyArgs) {
    return await this.diseaseGroupService.updateMany(diseaseGroupUpdateManyArgs);
  }

  async delete(diseaseGroupDeleteArgs: Prisma.DiseaseGroupDeleteArgs) {
    return await this.diseaseGroupService.delete(diseaseGroupDeleteArgs);
  }

  async deleteMany(diseaseGroupDeleteManyArgs: Prisma.DiseaseGroupDeleteManyArgs) {
    return await this.diseaseGroupService.deleteMany(diseaseGroupDeleteManyArgs);
  }

  async aggregate(diseaseGroupAggregateArgs: Prisma.DiseaseGroupAggregateArgs) {
    return await this.diseaseGroupService.aggregate(diseaseGroupAggregateArgs);
  }

  async count(diseaseGroupCountArgs: Prisma.DiseaseGroupCountArgs) {
    return await this.diseaseGroupService.count(diseaseGroupCountArgs);
  }
}
