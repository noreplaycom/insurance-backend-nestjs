import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DiseaseGroupService {
  constructor(private prisma: PrismaService) {}

  async createOne(diseaseGroupCreateArgs: Prisma.DiseaseGroupCreateArgs) {
    try {
      return await this.prisma.diseaseGroup.create(diseaseGroupCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(diseaseGroupCreateManyArgs: Prisma.DiseaseGroupCreateManyArgs) {
    try {
      return await this.prisma.diseaseGroup.createMany(diseaseGroupCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(diseaseGroupFindUniqueArgs: Prisma.DiseaseGroupFindUniqueArgs) {
    try {
      return await this.prisma.diseaseGroup.findUnique(diseaseGroupFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(diseaseGroupFindManyArgs: Prisma.DiseaseGroupFindManyArgs) {
    try {
      return await this.prisma.diseaseGroup.findMany(diseaseGroupFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(diseaseGroupFindFirstArgs: Prisma.DiseaseGroupFindFirstArgs) {
    try {
      return await this.prisma.diseaseGroup.findFirst(diseaseGroupFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(diseaseGroupUpdateOneArgs: Prisma.DiseaseGroupUpdateArgs) {
    try {
      return await this.prisma.diseaseGroup.update(diseaseGroupUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(diseaseGroupUpdateManyArgs: Prisma.DiseaseGroupUpdateManyArgs) {
    try {
      return await this.prisma.diseaseGroup.updateMany(diseaseGroupUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(diseaseGroupDeleteArgs: Prisma.DiseaseGroupDeleteArgs) {
    try {
      await this.prisma.diseaseGroup.delete(diseaseGroupDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(diseaseGroupDeleteManyArgs: Prisma.DiseaseGroupDeleteManyArgs) {
    try {
      await this.prisma.diseaseGroup.deleteMany(diseaseGroupDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(diseaseGroupAggregateArgs: Prisma.DiseaseGroupAggregateArgs) {
    try {
      return await this.prisma.diseaseGroup.aggregate(diseaseGroupAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(diseaseGroupCountArgs: Prisma.DiseaseGroupCountArgs) {
    try {
      return await this.prisma.diseaseGroup.count(diseaseGroupCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
