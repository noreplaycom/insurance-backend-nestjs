// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { DiseaseGroupController } from './disease-group.controller';
// import { DiseaseGroup } from 'src/@generated';
// import { fakeDiseaseGroupComplete } from '../../../prisma/fake-data';

// @Injectable()
// export class FakeDiseaseGroupController implements DiseaseGroupController {
//   private diseaseGroups: DiseaseGroup[] = [];

//   constructor() {}

//   async createOne(diseaseGroupCreateArgs: Prisma.DiseaseGroupCreateArgs): Promise<DiseaseGroup> {
//     const fake = fakeDiseaseGroupComplete()
//     this.diseaseGroups.push(fake);
//     return fake;
//   }

//   async createMany(diseaseGroupCreateManyArgs: Prisma.DiseaseGroupCreateManyArgs): Promise<Prisma.BatchPayload> {
//     const fake = diseaseGroupCreateManyArgs.data;
//     if (Array.isArray(fake)) {
//       const totalFake = fake.length;
//       for (let i = 0; i < totalFake; i++) {
//         this.diseaseGroups.push(fakeDiseaseGroupComplete());
//       }
//       return { count: totalFake };
//     } else {
//       this.diseaseGroups.push(fakeDiseaseGroupComplete());
//       return { count: 1 }
//     }
//   }

//   async findOne(diseaseGroupFindUniqueArgs: Prisma.DiseaseGroupFindUniqueArgs): Promise<DiseaseGroup> {
//     return this.diseaseGroups.find(diseaseGroup => diseaseGroup.id === diseaseGroupFindUniqueArgs.where.id);
//   }

//   async findMany(diseaseGroupFindManyArgs: Prisma.DiseaseGroupFindManyArgs): Promise<DiseaseGroup[]> {
//     return this.diseaseGroups.filter(diseaseGroup => diseaseGroup);
//   }

//   async findFirst(diseaseGroupFindFirstArgs: Prisma.DiseaseGroupFindFirstArgs): Promise<DiseaseGroup> {
//     return this.diseaseGroups.find(diseaseGroup => diseaseGroup);
//   }

//   async updateOne(diseaseGroupUpdateOneArgs: Prisma.DiseaseGroupUpdateArgs): Promise<DiseaseGroup> {
//     const idx = this.diseaseGroups.findIndex(diseaseGroup => diseaseGroup.id === diseaseGroupUpdateOneArgs.where.id);
//     this.diseaseGroups[idx] = {
//       ...fakeDiseaseGroupComplete(),
//       id: diseaseGroupUpdateOneArgs.where.id
//     }
//     return {
//       ...fakeDiseaseGroupComplete(),
//       id: diseaseGroupUpdateOneArgs.where.id
//     }
//   }

//   async updateMany(diseaseGroupUpdateManyArgs: Prisma.DiseaseGroupUpdateManyArgs): Promise<Prisma.BatchPayload> {
//     return { count: 10 }
//   }

//   async delete(diseaseGroupDeleteArgs: Prisma.DiseaseGroupDeleteArgs): Promise<boolean> {
//     return true
//   }

//   async deleteMany(diseaseGroupDeleteManyArgs: Prisma.DiseaseGroupDeleteManyArgs): Promise<boolean> {
//     return true
//   }

//   async aggregate(diseaseGroupAggregateArgs: Prisma.DiseaseGroupAggregateArgs): Promise<Prisma.GetDiseaseGroupAggregateType<Prisma.DiseaseGroupAggregateArgs>> {
//     return {
//       _avg: this.diseaseGroups[0],
//       _count: true,
//       _max: this.diseaseGroups[0],
//       _min: this.diseaseGroups[this.diseaseGroups.length - 1],
//       _sum: this.diseaseGroups[0]
//     }
//   }

//   async count(diseaseGroupCountArgs: Prisma.DiseaseGroupCountArgs): Promise<number> {
//     return this.diseaseGroups.length;
//   }
// }
