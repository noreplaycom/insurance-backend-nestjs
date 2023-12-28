import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClinicService {
  constructor(private prisma: PrismaService) {}

  async createOne(clinicCreateArgs: Prisma.ClinicCreateArgs) {
    try {
      return await this.prisma.clinic.create(clinicCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(clinicCreateManyArgs: Prisma.ClinicCreateManyArgs) {
    try {
      return await this.prisma.clinic.createMany(clinicCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(clinicFindUniqueArgs: Prisma.ClinicFindUniqueArgs) {
    try {
      return await this.prisma.clinic.findUnique(clinicFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(clinicFindManyArgs: Prisma.ClinicFindManyArgs) {
    try {
      return await this.prisma.clinic.findMany(clinicFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(clinicFindFirstArgs: Prisma.ClinicFindFirstArgs) {
    try {
      return await this.prisma.clinic.findFirst(clinicFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(clinicUpdateOneArgs: Prisma.ClinicUpdateArgs) {
    try {
      return await this.prisma.clinic.update(clinicUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(clinicUpdateManyArgs: Prisma.ClinicUpdateManyArgs) {
    try {
      return await this.prisma.clinic.updateMany(clinicUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(clinicDeleteArgs: Prisma.ClinicDeleteArgs) {
    try {
      await this.prisma.clinic.delete(clinicDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(clinicDeleteManyArgs: Prisma.ClinicDeleteManyArgs) {
    try {
      await this.prisma.clinic.deleteMany(clinicDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(clinicAggregateArgs: Prisma.ClinicAggregateArgs) {
    try {
      return await this.prisma.clinic.aggregate(clinicAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(clinicCountArgs: Prisma.ClinicCountArgs) {
    try {
      return await this.prisma.clinic.count(clinicCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
