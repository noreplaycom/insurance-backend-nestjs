import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Disease } from 'src/@generated';

@Injectable()
export abstract class DiseaseController {
  abstract createOne(diseaseCreateArgs: Prisma.DiseaseCreateArgs): Promise<Disease>;

  abstract createMany(diseaseCreateManyArgs: Prisma.DiseaseCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(diseaseFindUniqueArgs: Prisma.DiseaseFindUniqueArgs): Promise<Disease>;

  abstract findMany(diseaseFindManyArgs: Prisma.DiseaseFindManyArgs): Promise<Disease[]>;

  abstract findFirst(diseaseFindFirstArgs: Prisma.DiseaseFindFirstArgs): Promise<Disease>;

  abstract updateOne(diseaseUpdateOneArgs: Prisma.DiseaseUpdateArgs): Promise<Disease>;

  abstract updateMany(diseaseUpdateManyArgs: Prisma.DiseaseUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(diseaseDeleteArgs: Prisma.DiseaseDeleteArgs): Promise<boolean>;

  abstract deleteMany(diseaseDeleteManyArgs: Prisma.DiseaseDeleteManyArgs): Promise<boolean>;

  abstract aggregate(diseaseAggregateArgs: Prisma.DiseaseAggregateArgs): Promise<Prisma.GetDiseaseAggregateType<Prisma.DiseaseAggregateArgs>>;

  abstract count(diseaseCountArgs: Prisma.DiseaseCountArgs): Promise<number>;
}
