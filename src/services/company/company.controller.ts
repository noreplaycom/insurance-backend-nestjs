import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompanyService } from './company.service';

@Injectable()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  async createOne(companyCreateArgs: Prisma.CompanyCreateArgs) {
    return await this.companyService.createOne(companyCreateArgs);
  }

  async createMany(companyCreateManyArgs: Prisma.CompanyCreateManyArgs) {
    return await this.companyService.createMany(companyCreateManyArgs);
  }

  async findOne(companyFindUniqueArgs: Prisma.CompanyFindUniqueArgs) {
    return await this.companyService.findOne(companyFindUniqueArgs);
  }

  async findMany(companyFindManyArgs: Prisma.CompanyFindManyArgs) {
    return await this.companyService.findMany(companyFindManyArgs);
  }

  async findFirst(companyFindFirstArgs: Prisma.CompanyFindFirstArgs) {
    return await this.companyService.findFirst(companyFindFirstArgs);
  }

  async updateOne(companyUpdateOneArgs: Prisma.CompanyUpdateArgs) {
    return await this.companyService.updateOne(companyUpdateOneArgs);
  }

  async updateMany(companyUpdateManyArgs: Prisma.CompanyUpdateManyArgs) {
    return await this.companyService.updateMany(companyUpdateManyArgs);
  }

  async delete(companyDeleteArgs: Prisma.CompanyDeleteArgs) {
    return await this.companyService.delete(companyDeleteArgs);
  }

  async deleteMany(companyDeleteManyArgs: Prisma.CompanyDeleteManyArgs) {
    return await this.companyService.deleteMany(companyDeleteManyArgs);
  }

  async aggregate(companyAggregateArgs: Prisma.CompanyAggregateArgs) {
    return await this.companyService.aggregate(companyAggregateArgs);
  }

  async count(companyCountArgs: Prisma.CompanyCountArgs) {
    return await this.companyService.count(companyCountArgs);
  }
}
