import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async createOne(companyCreateArgs: Prisma.CompanyCreateArgs) {
    try {
      return await this.prisma.company.create(companyCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(companyCreateManyArgs: Prisma.CompanyCreateManyArgs) {
    try {
      return await this.prisma.company.createMany(companyCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(companyFindUniqueArgs: Prisma.CompanyFindUniqueArgs) {
    try {
      return await this.prisma.company.findUnique(companyFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(companyFindManyArgs: Prisma.CompanyFindManyArgs) {
    try {
      return await this.prisma.company.findMany(companyFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(companyFindFirstArgs: Prisma.CompanyFindFirstArgs) {
    try {
      return await this.prisma.company.findFirst(companyFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(companyUpdateOneArgs: Prisma.CompanyUpdateArgs) {
    try {
      return await this.prisma.company.update(companyUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(companyUpdateManyArgs: Prisma.CompanyUpdateManyArgs) {
    try {
      return await this.prisma.company.updateMany(companyUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(companyDeleteArgs: Prisma.CompanyDeleteArgs) {
    try {
      await this.prisma.company.delete(companyDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(companyDeleteManyArgs: Prisma.CompanyDeleteManyArgs) {
    try {
      await this.prisma.company.deleteMany(companyDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(companyAggregateArgs: Prisma.CompanyAggregateArgs) {
    try {
      return await this.prisma.company.aggregate(companyAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(companyCountArgs: Prisma.CompanyCountArgs) {
    try {
      return await this.prisma.company.count(companyCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
