import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Employment } from 'src/@generated';

@Injectable()
export abstract class EmploymentController {
  abstract createOne(employmentCreateArgs: Prisma.EmploymentCreateArgs): Promise<Employment>;

  abstract createMany(employmentCreateManyArgs: Prisma.EmploymentCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(employmentFindUniqueArgs: Prisma.EmploymentFindUniqueArgs): Promise<Employment>;

  abstract findMany(employmentFindManyArgs: Prisma.EmploymentFindManyArgs): Promise<Employment[]>;

  abstract findFirst(employmentFindFirstArgs: Prisma.EmploymentFindFirstArgs): Promise<Employment>;

  abstract updateOne(employmentUpdateOneArgs: Prisma.EmploymentUpdateArgs): Promise<Employment>;

  abstract updateMany(employmentUpdateManyArgs: Prisma.EmploymentUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(employmentDeleteArgs: Prisma.EmploymentDeleteArgs): Promise<boolean>;

  abstract deleteMany(employmentDeleteManyArgs: Prisma.EmploymentDeleteManyArgs): Promise<boolean>;

  abstract aggregate(employmentAggregateArgs: Prisma.EmploymentAggregateArgs): Promise<Prisma.GetEmploymentAggregateType<Prisma.EmploymentAggregateArgs>>;

  abstract count(employmentCountArgs: Prisma.EmploymentCountArgs): Promise<number>;
}
