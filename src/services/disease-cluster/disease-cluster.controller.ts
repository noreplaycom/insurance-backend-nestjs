import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DiseaseClusterService } from './disease-cluster.service';

@Injectable()
export class DiseaseClusterController {
  constructor(private readonly diseaseClusterService: DiseaseClusterService) {}

  async createOne(diseaseClusterCreateArgs: Prisma.DiseaseClusterCreateArgs) {
    return await this.diseaseClusterService.createOne(diseaseClusterCreateArgs);
  }

  async createMany(diseaseClusterCreateManyArgs: Prisma.DiseaseClusterCreateManyArgs) {
    return await this.diseaseClusterService.createMany(diseaseClusterCreateManyArgs);
  }

  async findOne(diseaseClusterFindUniqueArgs: Prisma.DiseaseClusterFindUniqueArgs) {
    return await this.diseaseClusterService.findOne(diseaseClusterFindUniqueArgs);
  }

  async findMany(diseaseClusterFindManyArgs: Prisma.DiseaseClusterFindManyArgs) {
    return await this.diseaseClusterService.findMany(diseaseClusterFindManyArgs);
  }

  async findFirst(diseaseClusterFindFirstArgs: Prisma.DiseaseClusterFindFirstArgs) {
    return await this.diseaseClusterService.findFirst(diseaseClusterFindFirstArgs);
  }

  async updateOne(diseaseClusterUpdateOneArgs: Prisma.DiseaseClusterUpdateArgs) {
    return await this.diseaseClusterService.updateOne(diseaseClusterUpdateOneArgs);
  }

  async updateMany(diseaseClusterUpdateManyArgs: Prisma.DiseaseClusterUpdateManyArgs) {
    return await this.diseaseClusterService.updateMany(diseaseClusterUpdateManyArgs);
  }

  async delete(diseaseClusterDeleteArgs: Prisma.DiseaseClusterDeleteArgs) {
    return await this.diseaseClusterService.delete(diseaseClusterDeleteArgs);
  }

  async deleteMany(diseaseClusterDeleteManyArgs: Prisma.DiseaseClusterDeleteManyArgs) {
    return await this.diseaseClusterService.deleteMany(diseaseClusterDeleteManyArgs);
  }

  async aggregate(diseaseClusterAggregateArgs: Prisma.DiseaseClusterAggregateArgs) {
    return await this.diseaseClusterService.aggregate(diseaseClusterAggregateArgs);
  }

  async count(diseaseClusterCountArgs: Prisma.DiseaseClusterCountArgs) {
    return await this.diseaseClusterService.count(diseaseClusterCountArgs);
  }
}
