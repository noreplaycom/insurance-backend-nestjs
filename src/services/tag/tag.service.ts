import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async createOne(tagCreateArgs: Prisma.TagCreateArgs) {
    try {
      return await this.prisma.tag.create(tagCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(tagCreateManyArgs: Prisma.TagCreateManyArgs) {
    try {
      return await this.prisma.tag.createMany(tagCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(tagFindUniqueArgs: Prisma.TagFindUniqueArgs) {
    try {
      return await this.prisma.tag.findUnique(tagFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(tagFindManyArgs: Prisma.TagFindManyArgs) {
    try {
      return await this.prisma.tag.findMany(tagFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(tagFindFirstArgs: Prisma.TagFindFirstArgs) {
    try {
      return await this.prisma.tag.findFirst(tagFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(tagUpdateOneArgs: Prisma.TagUpdateArgs) {
    try {
      return await this.prisma.tag.update(tagUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(tagUpdateManyArgs: Prisma.TagUpdateManyArgs) {
    try {
      return await this.prisma.tag.updateMany(tagUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(tagDeleteArgs: Prisma.TagDeleteArgs) {
    try {
      await this.prisma.tag.delete(tagDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(tagDeleteManyArgs: Prisma.TagDeleteManyArgs) {
    try {
      await this.prisma.tag.deleteMany(tagDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(tagAggregateArgs: Prisma.TagAggregateArgs) {
    try {
      return await this.prisma.tag.aggregate(tagAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(tagCountArgs: Prisma.TagCountArgs) {
    try {
      return await this.prisma.tag.count(tagCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
