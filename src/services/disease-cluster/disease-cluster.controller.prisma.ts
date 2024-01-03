// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { DiseaseClusterService } from './disease-cluster.service';
// import { DiseaseClusterController } from './disease-cluster.controller';
// import { DiseaseCluster } from 'src/@generated';

// @Injectable()
// export class PrismaDiseaseClusterController implements DiseaseClusterController {
//   constructor(private readonly diseaseClusterService: DiseaseClusterService) {}

//   async createOne(diseaseClusterCreateArgs: Prisma.DiseaseClusterCreateArgs): Promise<DiseaseCluster> {
//     return await this.diseaseClusterService.createOne(diseaseClusterCreateArgs);
//   }

//   async createMany(diseaseClusterCreateManyArgs: Prisma.DiseaseClusterCreateManyArgs): Promise<Prisma.BatchPayload> {
//     return await this.diseaseClusterService.createMany(diseaseClusterCreateManyArgs);
//   }

//   async findOne(diseaseClusterFindUniqueArgs: Prisma.DiseaseClusterFindUniqueArgs): Promise<DiseaseCluster> {
//     return await this.diseaseClusterService.findOne(diseaseClusterFindUniqueArgs);
//   }

//   async findMany(diseaseClusterFindManyArgs: Prisma.DiseaseClusterFindManyArgs): Promise<DiseaseCluster[]> {
//     return await this.diseaseClusterService.findMany(diseaseClusterFindManyArgs);
//   }

//   async findFirst(diseaseClusterFindFirstArgs: Prisma.DiseaseClusterFindFirstArgs): Promise<DiseaseCluster> {
//     return await this.diseaseClusterService.findFirst(diseaseClusterFindFirstArgs);
//   }

//   async updateOne(diseaseClusterUpdateOneArgs: Prisma.DiseaseClusterUpdateArgs): Promise<DiseaseCluster> {
//     return await this.diseaseClusterService.updateOne(diseaseClusterUpdateOneArgs);
//   }

//   async updateMany(diseaseClusterUpdateManyArgs: Prisma.DiseaseClusterUpdateManyArgs): Promise<Prisma.BatchPayload> {
//     return await this.diseaseClusterService.updateMany(diseaseClusterUpdateManyArgs);
//   }

//   async delete(diseaseClusterDeleteArgs: Prisma.DiseaseClusterDeleteArgs): Promise<boolean> {
//     return await this.diseaseClusterService.delete(diseaseClusterDeleteArgs);
//   }

//   async deleteMany(diseaseClusterDeleteManyArgs: Prisma.DiseaseClusterDeleteManyArgs): Promise<boolean> {
//     return await this.diseaseClusterService.deleteMany(diseaseClusterDeleteManyArgs);
//   }

//   async aggregate(diseaseClusterAggregateArgs: Prisma.DiseaseClusterAggregateArgs): Promise<Prisma.GetDiseaseClusterAggregateType<Prisma.DiseaseClusterAggregateArgs>> {
//     return await this.diseaseClusterService.aggregate(diseaseClusterAggregateArgs);
//   }

//   async count(diseaseClusterCountArgs: Prisma.DiseaseClusterCountArgs): Promise<number> {
//     return await this.diseaseClusterService.count(diseaseClusterCountArgs);
//   }
// }
