import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AnnouncementController } from './announcement.controller';
import { Announcement } from 'src/@generated';
import { fakeAnnouncementComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeAnnouncementController implements AnnouncementController {
  private announcements: Announcement[] = [];

  constructor() {}

  async createOne(announcementCreateArgs: Prisma.AnnouncementCreateArgs): Promise<Announcement> {
    const fake = fakeAnnouncementComplete()
    this.announcements.push(fake);
    return fake;
  }

  async createMany(announcementCreateManyArgs: Prisma.AnnouncementCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = announcementCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.announcements.push(fakeAnnouncementComplete());
      }
      return { count: totalFake };
    } else {
      this.announcements.push(fakeAnnouncementComplete());
      return { count: 1 }
    }
  }

  async findOne(announcementFindUniqueArgs: Prisma.AnnouncementFindUniqueArgs): Promise<Announcement> {
    return this.announcements.find(announcement => announcement.id === announcementFindUniqueArgs.where.id);
  }

  async findMany(announcementFindManyArgs: Prisma.AnnouncementFindManyArgs): Promise<Announcement[]> {
    return this.announcements.filter(announcement => announcement);
  }

  async findFirst(announcementFindFirstArgs: Prisma.AnnouncementFindFirstArgs): Promise<Announcement> {
    return this.announcements.find(announcement => announcement);
  }

  async updateOne(announcementUpdateOneArgs: Prisma.AnnouncementUpdateArgs): Promise<Announcement> {
    const idx = this.announcements.findIndex(announcement => announcement.id === announcementUpdateOneArgs.where.id);
    this.announcements[idx] = {
      ...fakeAnnouncementComplete(),
      id: announcementUpdateOneArgs.where.id
    }
    return {
      ...fakeAnnouncementComplete(),
      id: announcementUpdateOneArgs.where.id
    }
  }

  async updateMany(announcementUpdateManyArgs: Prisma.AnnouncementUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(announcementDeleteArgs: Prisma.AnnouncementDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(announcementDeleteManyArgs: Prisma.AnnouncementDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(announcementAggregateArgs: Prisma.AnnouncementAggregateArgs): Promise<Prisma.GetAnnouncementAggregateType<Prisma.AnnouncementAggregateArgs>> {
    return {
      _avg: this.announcements[0],
      _count: true,
      _max: this.announcements[0],
      _min: this.announcements[this.announcements.length - 1],
      _sum: this.announcements[0]
    }
  }

  async count(announcementCountArgs: Prisma.AnnouncementCountArgs): Promise<number> {
    return this.announcements.length;
  }
}
