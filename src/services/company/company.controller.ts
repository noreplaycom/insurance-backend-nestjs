import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Company } from 'src/@generated';

@Injectable()
export abstract class CompanyController {
  abstract createOne(companyCreateArgs: Prisma.CompanyCreateArgs): Promise<Company>;

  abstract createMany(companyCreateManyArgs: Prisma.CompanyCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(companyFindUniqueArgs: Prisma.CompanyFindUniqueArgs): Promise<Company>;

  abstract findMany(companyFindManyArgs: Prisma.CompanyFindManyArgs): Promise<Company[]>;

  abstract findFirst(companyFindFirstArgs: Prisma.CompanyFindFirstArgs): Promise<Company>;

  abstract updateOne(companyUpdateOneArgs: Prisma.CompanyUpdateArgs): Promise<Company>;

  abstract updateMany(companyUpdateManyArgs: Prisma.CompanyUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(companyDeleteArgs: Prisma.CompanyDeleteArgs): Promise<boolean>;

  abstract deleteMany(companyDeleteManyArgs: Prisma.CompanyDeleteManyArgs): Promise<boolean>;

  abstract aggregate(companyAggregateArgs: Prisma.CompanyAggregateArgs): Promise<Prisma.GetCompanyAggregateType<Prisma.CompanyAggregateArgs>>;

  abstract count(companyCountArgs: Prisma.CompanyCountArgs): Promise<number>;
}
