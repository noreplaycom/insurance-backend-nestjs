import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Announcement } from 'src/@generated';

@Injectable()
export abstract class AnnouncementController {
  abstract createOne(announcementCreateArgs: Prisma.AnnouncementCreateArgs): Promise<Announcement>;

  abstract createMany(announcementCreateManyArgs: Prisma.AnnouncementCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(announcementFindUniqueArgs: Prisma.AnnouncementFindUniqueArgs): Promise<Announcement>;

  abstract findMany(announcementFindManyArgs: Prisma.AnnouncementFindManyArgs): Promise<Announcement[]>;

  abstract findFirst(announcementFindFirstArgs: Prisma.AnnouncementFindFirstArgs): Promise<Announcement>;

  abstract updateOne(announcementUpdateOneArgs: Prisma.AnnouncementUpdateArgs): Promise<Announcement>;

  abstract updateMany(announcementUpdateManyArgs: Prisma.AnnouncementUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(announcementDeleteArgs: Prisma.AnnouncementDeleteArgs): Promise<boolean>;

  abstract deleteMany(announcementDeleteManyArgs: Prisma.AnnouncementDeleteManyArgs): Promise<boolean>;

  abstract aggregate(announcementAggregateArgs: Prisma.AnnouncementAggregateArgs): Promise<Prisma.GetAnnouncementAggregateType<Prisma.AnnouncementAggregateArgs>>;

  abstract count(announcementCountArgs: Prisma.AnnouncementCountArgs): Promise<number>;
}
