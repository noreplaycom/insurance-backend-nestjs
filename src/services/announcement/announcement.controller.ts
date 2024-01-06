import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AnnouncementService } from './announcement.service';

@Injectable()
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  async createOne(announcementCreateArgs: Prisma.AnnouncementCreateArgs) {
    return await this.announcementService.createOne(announcementCreateArgs);
  }

  async createMany(announcementCreateManyArgs: Prisma.AnnouncementCreateManyArgs) {
    return await this.announcementService.createMany(announcementCreateManyArgs);
  }

  async findOne(announcementFindUniqueArgs: Prisma.AnnouncementFindUniqueArgs) {
    return await this.announcementService.findOne(announcementFindUniqueArgs);
  }

  async findMany(announcementFindManyArgs: Prisma.AnnouncementFindManyArgs) {
    return await this.announcementService.findMany(announcementFindManyArgs);
  }

  async findFirst(announcementFindFirstArgs: Prisma.AnnouncementFindFirstArgs) {
    return await this.announcementService.findFirst(announcementFindFirstArgs);
  }

  async updateOne(announcementUpdateOneArgs: Prisma.AnnouncementUpdateArgs) {
    return await this.announcementService.updateOne(announcementUpdateOneArgs);
  }

  async updateMany(announcementUpdateManyArgs: Prisma.AnnouncementUpdateManyArgs) {
    return await this.announcementService.updateMany(announcementUpdateManyArgs);
  }

  async delete(announcementDeleteArgs: Prisma.AnnouncementDeleteArgs) {
    return await this.announcementService.delete(announcementDeleteArgs);
  }

  async deleteMany(announcementDeleteManyArgs: Prisma.AnnouncementDeleteManyArgs) {
    return await this.announcementService.deleteMany(announcementDeleteManyArgs);
  }

  async aggregate(announcementAggregateArgs: Prisma.AnnouncementAggregateArgs) {
    return await this.announcementService.aggregate(announcementAggregateArgs);
  }

  async count(announcementCountArgs: Prisma.AnnouncementCountArgs) {
    return await this.announcementService.count(announcementCountArgs);
  }
}
