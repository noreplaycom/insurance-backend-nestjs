import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { Announcement } from 'src/@generated';

@Injectable()
export class PrismaAnnouncementController implements AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  async createOne(announcementCreateArgs: Prisma.AnnouncementCreateArgs): Promise<Announcement> {
    return await this.announcementService.createOne(announcementCreateArgs);
  }

  async createMany(announcementCreateManyArgs: Prisma.AnnouncementCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.announcementService.createMany(announcementCreateManyArgs);
  }

  async findOne(announcementFindUniqueArgs: Prisma.AnnouncementFindUniqueArgs): Promise<Announcement> {
    return await this.announcementService.findOne(announcementFindUniqueArgs);
  }

  async findMany(announcementFindManyArgs: Prisma.AnnouncementFindManyArgs): Promise<Announcement[]> {
    return await this.announcementService.findMany(announcementFindManyArgs);
  }

  async findFirst(announcementFindFirstArgs: Prisma.AnnouncementFindFirstArgs): Promise<Announcement> {
    return await this.announcementService.findFirst(announcementFindFirstArgs);
  }

  async updateOne(announcementUpdateOneArgs: Prisma.AnnouncementUpdateArgs): Promise<Announcement> {
    return await this.announcementService.updateOne(announcementUpdateOneArgs);
  }

  async updateMany(announcementUpdateManyArgs: Prisma.AnnouncementUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.announcementService.updateMany(announcementUpdateManyArgs);
  }

  async delete(announcementDeleteArgs: Prisma.AnnouncementDeleteArgs): Promise<boolean> {
    return await this.announcementService.delete(announcementDeleteArgs);
  }

  async deleteMany(announcementDeleteManyArgs: Prisma.AnnouncementDeleteManyArgs): Promise<boolean> {
    return await this.announcementService.deleteMany(announcementDeleteManyArgs);
  }

  async aggregate(announcementAggregateArgs: Prisma.AnnouncementAggregateArgs): Promise<Prisma.GetAnnouncementAggregateType<Prisma.AnnouncementAggregateArgs>> {
    return await this.announcementService.aggregate(announcementAggregateArgs);
  }

  async count(announcementCountArgs: Prisma.AnnouncementCountArgs): Promise<number> {
    return await this.announcementService.count(announcementCountArgs);
  }
}
