import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmploymentService {
  constructor(private prisma: PrismaService) {}

  async createOne(employmentCreateArgs: Prisma.EmploymentCreateArgs) {
    try {
      return await this.prisma.employment.create(employmentCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(employmentCreateManyArgs: Prisma.EmploymentCreateManyArgs) {
    try {
      return await this.prisma.employment.createMany(employmentCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(employmentFindUniqueArgs: Prisma.EmploymentFindUniqueArgs) {
    try {
      return await this.prisma.employment.findUnique(employmentFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(employmentFindManyArgs: Prisma.EmploymentFindManyArgs) {
    try {
      return await this.prisma.employment.findMany(employmentFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(employmentFindFirstArgs: Prisma.EmploymentFindFirstArgs) {
    try {
      return await this.prisma.employment.findFirst(employmentFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(employmentUpdateOneArgs: Prisma.EmploymentUpdateArgs) {
    try {
      return await this.prisma.employment.update(employmentUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(employmentUpdateManyArgs: Prisma.EmploymentUpdateManyArgs) {
    try {
      return await this.prisma.employment.updateMany(employmentUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(employmentDeleteArgs: Prisma.EmploymentDeleteArgs) {
    try {
      await this.prisma.employment.delete(employmentDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(employmentDeleteManyArgs: Prisma.EmploymentDeleteManyArgs) {
    try {
      await this.prisma.employment.deleteMany(employmentDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(employmentAggregateArgs: Prisma.EmploymentAggregateArgs) {
    try {
      return await this.prisma.employment.aggregate(employmentAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(employmentCountArgs: Prisma.EmploymentCountArgs) {
    try {
      return await this.prisma.employment.count(employmentCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
