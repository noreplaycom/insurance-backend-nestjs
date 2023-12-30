import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CompanyController } from './company.controller';
import { Company } from 'src/@generated';
import { fakeCompanyComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeCompanyController implements CompanyController {
  private companys: Company[] = [];

  constructor() {}

  async createOne(companyCreateArgs: Prisma.CompanyCreateArgs): Promise<Company> {
    const fake = fakeCompanyComplete()
    this.companys.push(fake);
    return fake;
  }

  async createMany(companyCreateManyArgs: Prisma.CompanyCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = companyCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.companys.push(fakeCompanyComplete());
      }
      return { count: totalFake };
    } else {
      this.companys.push(fakeCompanyComplete());
      return { count: 1 }
    }
  }

  async findOne(companyFindUniqueArgs: Prisma.CompanyFindUniqueArgs): Promise<Company> {
    return this.companys.find(company => company.id === companyFindUniqueArgs.where.id);
  }

  async findMany(companyFindManyArgs: Prisma.CompanyFindManyArgs): Promise<Company[]> {
    return this.companys.filter(company => company);
  }

  async findFirst(companyFindFirstArgs: Prisma.CompanyFindFirstArgs): Promise<Company> {
    return this.companys.find(company => company);
  }

  async updateOne(companyUpdateOneArgs: Prisma.CompanyUpdateArgs): Promise<Company> {
    const idx = this.companys.findIndex(company => company.id === companyUpdateOneArgs.where.id);
    this.companys[idx] = {
      ...fakeCompanyComplete(),
      id: companyUpdateOneArgs.where.id
    }
    return {
      ...fakeCompanyComplete(),
      id: companyUpdateOneArgs.where.id
    }
  }

  async updateMany(companyUpdateManyArgs: Prisma.CompanyUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(companyDeleteArgs: Prisma.CompanyDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(companyDeleteManyArgs: Prisma.CompanyDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(companyAggregateArgs: Prisma.CompanyAggregateArgs): Promise<Prisma.GetCompanyAggregateType<Prisma.CompanyAggregateArgs>> {
    return {
      _avg: this.companys[0],
      _count: true,
      _max: this.companys[0],
      _min: this.companys[this.companys.length - 1],
      _sum: this.companys[0]
    }
  }

  async count(companyCountArgs: Prisma.CompanyCountArgs): Promise<number> {
    return this.companys.length;
  }
}
