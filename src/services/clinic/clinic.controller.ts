import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Clinic } from 'src/@generated';

@Injectable()
export abstract class ClinicController {
  abstract createOne(clinicCreateArgs: Prisma.ClinicCreateArgs): Promise<Clinic>;

  abstract createMany(clinicCreateManyArgs: Prisma.ClinicCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(clinicFindUniqueArgs: Prisma.ClinicFindUniqueArgs): Promise<Clinic>;

  abstract findMany(clinicFindManyArgs: Prisma.ClinicFindManyArgs): Promise<Clinic[]>;

  abstract findFirst(clinicFindFirstArgs: Prisma.ClinicFindFirstArgs): Promise<Clinic>;

  abstract updateOne(clinicUpdateOneArgs: Prisma.ClinicUpdateArgs): Promise<Clinic>;

  abstract updateMany(clinicUpdateManyArgs: Prisma.ClinicUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(clinicDeleteArgs: Prisma.ClinicDeleteArgs): Promise<boolean>;

  abstract deleteMany(clinicDeleteManyArgs: Prisma.ClinicDeleteManyArgs): Promise<boolean>;

  abstract aggregate(clinicAggregateArgs: Prisma.ClinicAggregateArgs): Promise<Prisma.GetClinicAggregateType<Prisma.ClinicAggregateArgs>>;

  abstract count(clinicCountArgs: Prisma.ClinicCountArgs): Promise<number>;
}
