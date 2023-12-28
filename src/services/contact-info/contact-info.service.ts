import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactInfoService {
  constructor(private prisma: PrismaService) {}

  async createOne(contactInfoCreateArgs: Prisma.ContactInfoCreateArgs) {
    try {
      return await this.prisma.contactInfo.create(contactInfoCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(contactInfoCreateManyArgs: Prisma.ContactInfoCreateManyArgs) {
    try {
      return await this.prisma.contactInfo.createMany(contactInfoCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(contactInfoFindUniqueArgs: Prisma.ContactInfoFindUniqueArgs) {
    try {
      return await this.prisma.contactInfo.findUnique(contactInfoFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(contactInfoFindManyArgs: Prisma.ContactInfoFindManyArgs) {
    try {
      return await this.prisma.contactInfo.findMany(contactInfoFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(contactInfoFindFirstArgs: Prisma.ContactInfoFindFirstArgs) {
    try {
      return await this.prisma.contactInfo.findFirst(contactInfoFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(contactInfoUpdateOneArgs: Prisma.ContactInfoUpdateArgs) {
    try {
      return await this.prisma.contactInfo.update(contactInfoUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(contactInfoUpdateManyArgs: Prisma.ContactInfoUpdateManyArgs) {
    try {
      return await this.prisma.contactInfo.updateMany(contactInfoUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(contactInfoDeleteArgs: Prisma.ContactInfoDeleteArgs) {
    try {
      await this.prisma.contactInfo.delete(contactInfoDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(contactInfoDeleteManyArgs: Prisma.ContactInfoDeleteManyArgs) {
    try {
      await this.prisma.contactInfo.deleteMany(contactInfoDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(contactInfoAggregateArgs: Prisma.ContactInfoAggregateArgs) {
    try {
      return await this.prisma.contactInfo.aggregate(contactInfoAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(contactInfoCountArgs: Prisma.ContactInfoCountArgs) {
    try {
      return await this.prisma.contactInfo.count(contactInfoCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
