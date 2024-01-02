import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {}

  async createOne(announcementCreateArgs: Prisma.AnnouncementCreateArgs) {
    try {
      return await this.prisma.announcement.create(announcementCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(announcementCreateManyArgs: Prisma.AnnouncementCreateManyArgs) {
    try {
      return await this.prisma.announcement.createMany(announcementCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(announcementFindUniqueArgs: Prisma.AnnouncementFindUniqueArgs) {
    try {
      return await this.prisma.announcement.findUnique(announcementFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(announcementFindManyArgs: Prisma.AnnouncementFindManyArgs) {
    try {
      return await this.prisma.announcement.findMany(announcementFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(announcementFindFirstArgs: Prisma.AnnouncementFindFirstArgs) {
    try {
      return await this.prisma.announcement.findFirst(announcementFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(announcementUpdateOneArgs: Prisma.AnnouncementUpdateArgs) {
    try {
      return await this.prisma.announcement.update(announcementUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(announcementUpdateManyArgs: Prisma.AnnouncementUpdateManyArgs) {
    try {
      return await this.prisma.announcement.updateMany(announcementUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(announcementDeleteArgs: Prisma.AnnouncementDeleteArgs) {
    try {
      await this.prisma.announcement.delete(announcementDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(announcementDeleteManyArgs: Prisma.AnnouncementDeleteManyArgs) {
    try {
      await this.prisma.announcement.deleteMany(announcementDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(announcementAggregateArgs: Prisma.AnnouncementAggregateArgs) {
    try {
      return await this.prisma.announcement.aggregate(announcementAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(announcementCountArgs: Prisma.AnnouncementCountArgs) {
    try {
      return await this.prisma.announcement.count(announcementCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
