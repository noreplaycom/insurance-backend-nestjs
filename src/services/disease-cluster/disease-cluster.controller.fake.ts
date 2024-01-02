// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { DiseaseClusterController } from './disease-cluster.controller';
// import { DiseaseClus } from 'src/@generated';
// import { fakeDiseaseClusterComplete } from '../../../prisma/fake-data';

// @Injectable()
// export class FakeDiseaseClusterController implements DiseaseClusterController {
//   private diseaseClusters: DiseaseCluster[] = [];

//   constructor() {}

//   async createOne(diseaseClusterCreateArgs: Prisma.DiseaseClusterCreateArgs): Promise<DiseaseCluster> {
//     const fake = fakeDiseaseClusterComplete()
//     this.diseaseClusters.push(fake);
//     return fake;
//   }

//   async createMany(diseaseClusterCreateManyArgs: Prisma.DiseaseClusterCreateManyArgs): Promise<Prisma.BatchPayload> {
//     const fake = diseaseClusterCreateManyArgs.data;
//     if (Array.isArray(fake)) {
//       const totalFake = fake.length;
//       for (let i = 0; i < totalFake; i++) {
//         this.diseaseClusters.push(fakeDiseaseClusterComplete());
//       }
//       return { count: totalFake };
//     } else {
//       this.diseaseClusters.push(fakeDiseaseClusterComplete());
//       return { count: 1 }
//     }
//   }

//   async findOne(diseaseClusterFindUniqueArgs: Prisma.DiseaseClusterFindUniqueArgs): Promise<DiseaseCluster> {
//     return this.diseaseClusters.find(diseaseCluster => diseaseCluster.id === diseaseClusterFindUniqueArgs.where.id);
//   }

//   async findMany(diseaseClusterFindManyArgs: Prisma.DiseaseClusterFindManyArgs): Promise<DiseaseCluster[]> {
//     return this.diseaseClusters.filter(diseaseCluster => diseaseCluster);
//   }

//   async findFirst(diseaseClusterFindFirstArgs: Prisma.DiseaseClusterFindFirstArgs): Promise<DiseaseCluster> {
//     return this.diseaseClusters.find(diseaseCluster => diseaseCluster);
//   }

//   async updateOne(diseaseClusterUpdateOneArgs: Prisma.DiseaseClusterUpdateArgs): Promise<DiseaseCluster> {
//     const idx = this.diseaseClusters.findIndex(diseaseCluster => diseaseCluster.id === diseaseClusterUpdateOneArgs.where.id);
//     this.diseaseClusters[idx] = {
//       ...fakeDiseaseClusterComplete(),
//       id: diseaseClusterUpdateOneArgs.where.id
//     }
//     return {
//       ...fakeDiseaseClusterComplete(),
//       id: diseaseClusterUpdateOneArgs.where.id
//     }
//   }

//   async updateMany(diseaseClusterUpdateManyArgs: Prisma.DiseaseClusterUpdateManyArgs): Promise<Prisma.BatchPayload> {
//     return { count: 10 }
//   }

//   async delete(diseaseClusterDeleteArgs: Prisma.DiseaseClusterDeleteArgs): Promise<boolean> {
//     return true
//   }

//   async deleteMany(diseaseClusterDeleteManyArgs: Prisma.DiseaseClusterDeleteManyArgs): Promise<boolean> {
//     return true
//   }

//   async aggregate(diseaseClusterAggregateArgs: Prisma.DiseaseClusterAggregateArgs): Promise<Prisma.GetDiseaseClusterAggregateType<Prisma.DiseaseClusterAggregateArgs>> {
//     return {
//       _avg: this.diseaseClusters[0],
//       _count: true,
//       _max: this.diseaseClusters[0],
//       _min: this.diseaseClusters[this.diseaseClusters.length - 1],
//       _sum: this.diseaseClusters[0]
//     }
//   }

//   async count(diseaseClusterCountArgs: Prisma.DiseaseClusterCountArgs): Promise<number> {
//     return this.diseaseClusters.length;
//   }
// }
