// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { DiseaseGroupService } from './disease-group.service';
// import { DiseaseGroupController } from './disease-group.controller';
// import { DiseaseGroup } from 'src/@generated';

// @Injectable()
// export class PrismaDiseaseGroupController implements DiseaseGroupController {
//   constructor(private readonly diseaseGroupService: DiseaseGroupService) {}

//   async createOne(diseaseGroupCreateArgs: Prisma.DiseaseGroupCreateArgs): Promise<DiseaseGroup> {
//     return await this.diseaseGroupService.createOne(diseaseGroupCreateArgs);
//   }

//   async createMany(diseaseGroupCreateManyArgs: Prisma.DiseaseGroupCreateManyArgs): Promise<Prisma.BatchPayload> {
//     return await this.diseaseGroupService.createMany(diseaseGroupCreateManyArgs);
//   }

//   async findOne(diseaseGroupFindUniqueArgs: Prisma.DiseaseGroupFindUniqueArgs): Promise<DiseaseGroup> {
//     return await this.diseaseGroupService.findOne(diseaseGroupFindUniqueArgs);
//   }

//   async findMany(diseaseGroupFindManyArgs: Prisma.DiseaseGroupFindManyArgs): Promise<DiseaseGroup[]> {
//     return await this.diseaseGroupService.findMany(diseaseGroupFindManyArgs);
//   }

//   async findFirst(diseaseGroupFindFirstArgs: Prisma.DiseaseGroupFindFirstArgs): Promise<DiseaseGroup> {
//     return await this.diseaseGroupService.findFirst(diseaseGroupFindFirstArgs);
//   }

//   async updateOne(diseaseGroupUpdateOneArgs: Prisma.DiseaseGroupUpdateArgs): Promise<DiseaseGroup> {
//     return await this.diseaseGroupService.updateOne(diseaseGroupUpdateOneArgs);
//   }

//   async updateMany(diseaseGroupUpdateManyArgs: Prisma.DiseaseGroupUpdateManyArgs): Promise<Prisma.BatchPayload> {
//     return await this.diseaseGroupService.updateMany(diseaseGroupUpdateManyArgs);
//   }

//   async delete(diseaseGroupDeleteArgs: Prisma.DiseaseGroupDeleteArgs): Promise<boolean> {
//     return await this.diseaseGroupService.delete(diseaseGroupDeleteArgs);
//   }

//   async deleteMany(diseaseGroupDeleteManyArgs: Prisma.DiseaseGroupDeleteManyArgs): Promise<boolean> {
//     return await this.diseaseGroupService.deleteMany(diseaseGroupDeleteManyArgs);
//   }

//   async aggregate(diseaseGroupAggregateArgs: Prisma.DiseaseGroupAggregateArgs): Promise<Prisma.GetDiseaseGroupAggregateType<Prisma.DiseaseGroupAggregateArgs>> {
//     return await this.diseaseGroupService.aggregate(diseaseGroupAggregateArgs);
//   }

//   async count(diseaseGroupCountArgs: Prisma.DiseaseGroupCountArgs): Promise<number> {
//     return await this.diseaseGroupService.count(diseaseGroupCountArgs);
//   }
// }
