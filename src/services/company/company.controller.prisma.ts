import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from 'src/@generated';

@Injectable()
export class PrismaCompanyController implements CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  async createOne(companyCreateArgs: Prisma.CompanyCreateArgs): Promise<Company> {
    return await this.companyService.createOne(companyCreateArgs);
  }

  async createMany(companyCreateManyArgs: Prisma.CompanyCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.companyService.createMany(companyCreateManyArgs);
  }

  async findOne(companyFindUniqueArgs: Prisma.CompanyFindUniqueArgs): Promise<Company> {
    return await this.companyService.findOne(companyFindUniqueArgs);
  }

  async findMany(companyFindManyArgs: Prisma.CompanyFindManyArgs): Promise<Company[]> {
    return await this.companyService.findMany(companyFindManyArgs);
  }

  async findFirst(companyFindFirstArgs: Prisma.CompanyFindFirstArgs): Promise<Company> {
    return await this.companyService.findFirst(companyFindFirstArgs);
  }

  async updateOne(companyUpdateOneArgs: Prisma.CompanyUpdateArgs): Promise<Company> {
    return await this.companyService.updateOne(companyUpdateOneArgs);
  }

  async updateMany(companyUpdateManyArgs: Prisma.CompanyUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.companyService.updateMany(companyUpdateManyArgs);
  }

  async delete(companyDeleteArgs: Prisma.CompanyDeleteArgs): Promise<boolean> {
    return await this.companyService.delete(companyDeleteArgs);
  }

  async deleteMany(companyDeleteManyArgs: Prisma.CompanyDeleteManyArgs): Promise<boolean> {
    return await this.companyService.deleteMany(companyDeleteManyArgs);
  }

  async aggregate(companyAggregateArgs: Prisma.CompanyAggregateArgs): Promise<Prisma.GetCompanyAggregateType<Prisma.CompanyAggregateArgs>> {
    return await this.companyService.aggregate(companyAggregateArgs);
  }

  async count(companyCountArgs: Prisma.CompanyCountArgs): Promise<number> {
    return await this.companyService.count(companyCountArgs);
  }
}
