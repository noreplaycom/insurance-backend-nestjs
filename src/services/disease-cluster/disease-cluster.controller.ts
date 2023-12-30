import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DiseaseCluster } from 'src/@generated';

@Injectable()
export abstract class DiseaseClusterController {
  abstract createOne(diseaseClusterCreateArgs: Prisma.DiseaseClusterCreateArgs): Promise<DiseaseCluster>;

  abstract createMany(diseaseClusterCreateManyArgs: Prisma.DiseaseClusterCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(diseaseClusterFindUniqueArgs: Prisma.DiseaseClusterFindUniqueArgs): Promise<DiseaseCluster>;

  abstract findMany(diseaseClusterFindManyArgs: Prisma.DiseaseClusterFindManyArgs): Promise<DiseaseCluster[]>;

  abstract findFirst(diseaseClusterFindFirstArgs: Prisma.DiseaseClusterFindFirstArgs): Promise<DiseaseCluster>;

  abstract updateOne(diseaseClusterUpdateOneArgs: Prisma.DiseaseClusterUpdateArgs): Promise<DiseaseCluster>;

  abstract updateMany(diseaseClusterUpdateManyArgs: Prisma.DiseaseClusterUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(diseaseClusterDeleteArgs: Prisma.DiseaseClusterDeleteArgs): Promise<boolean>;

  abstract deleteMany(diseaseClusterDeleteManyArgs: Prisma.DiseaseClusterDeleteManyArgs): Promise<boolean>;

  abstract aggregate(diseaseClusterAggregateArgs: Prisma.DiseaseClusterAggregateArgs): Promise<Prisma.GetDiseaseClusterAggregateType<Prisma.DiseaseClusterAggregateArgs>>;

  abstract count(diseaseClusterCountArgs: Prisma.DiseaseClusterCountArgs): Promise<number>;
}
