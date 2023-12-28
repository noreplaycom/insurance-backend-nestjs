import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DiseaseService {
  constructor(private prisma: PrismaService) {}

  async createOne(diseaseCreateArgs: Prisma.DiseaseCreateArgs) {
    try {
      return await this.prisma.disease.create(diseaseCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(diseaseCreateManyArgs: Prisma.DiseaseCreateManyArgs) {
    try {
      return await this.prisma.disease.createMany(diseaseCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(diseaseFindUniqueArgs: Prisma.DiseaseFindUniqueArgs) {
    try {
      return await this.prisma.disease.findUnique(diseaseFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(diseaseFindManyArgs: Prisma.DiseaseFindManyArgs) {
    try {
      return await this.prisma.disease.findMany(diseaseFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(diseaseFindFirstArgs: Prisma.DiseaseFindFirstArgs) {
    try {
      return await this.prisma.disease.findFirst(diseaseFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(diseaseUpdateOneArgs: Prisma.DiseaseUpdateArgs) {
    try {
      return await this.prisma.disease.update(diseaseUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(diseaseUpdateManyArgs: Prisma.DiseaseUpdateManyArgs) {
    try {
      return await this.prisma.disease.updateMany(diseaseUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(diseaseDeleteArgs: Prisma.DiseaseDeleteArgs) {
    try {
      await this.prisma.disease.delete(diseaseDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(diseaseDeleteManyArgs: Prisma.DiseaseDeleteManyArgs) {
    try {
      await this.prisma.disease.deleteMany(diseaseDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(diseaseAggregateArgs: Prisma.DiseaseAggregateArgs) {
    try {
      return await this.prisma.disease.aggregate(diseaseAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(diseaseCountArgs: Prisma.DiseaseCountArgs) {
    try {
      return await this.prisma.disease.count(diseaseCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
