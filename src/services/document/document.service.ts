import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async createOne(documentCreateArgs: Prisma.DocumentCreateArgs) {
    try {
      return await this.prisma.document.create(documentCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(documentCreateManyArgs: Prisma.DocumentCreateManyArgs) {
    try {
      return await this.prisma.document.createMany(documentCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(documentFindUniqueArgs: Prisma.DocumentFindUniqueArgs) {
    try {
      return await this.prisma.document.findUnique(documentFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(documentFindManyArgs: Prisma.DocumentFindManyArgs) {
    try {
      return await this.prisma.document.findMany(documentFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(documentFindFirstArgs: Prisma.DocumentFindFirstArgs) {
    try {
      return await this.prisma.document.findFirst(documentFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(documentUpdateOneArgs: Prisma.DocumentUpdateArgs) {
    try {
      return await this.prisma.document.update(documentUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(documentUpdateManyArgs: Prisma.DocumentUpdateManyArgs) {
    try {
      return await this.prisma.document.updateMany(documentUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(documentDeleteArgs: Prisma.DocumentDeleteArgs) {
    try {
      await this.prisma.document.delete(documentDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(documentDeleteManyArgs: Prisma.DocumentDeleteManyArgs) {
    try {
      await this.prisma.document.deleteMany(documentDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(documentAggregateArgs: Prisma.DocumentAggregateArgs) {
    try {
      return await this.prisma.document.aggregate(documentAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(documentCountArgs: Prisma.DocumentCountArgs) {
    try {
      return await this.prisma.document.count(documentCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
