import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Notification } from 'src/@generated';

@Injectable()
export abstract class NotificationController {
  abstract createOne(notificationCreateArgs: Prisma.NotificationCreateArgs): Promise<Notification>;

  abstract createMany(notificationCreateManyArgs: Prisma.NotificationCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(notificationFindUniqueArgs: Prisma.NotificationFindUniqueArgs): Promise<Notification>;

  abstract findMany(notificationFindManyArgs: Prisma.NotificationFindManyArgs): Promise<Notification[]>;

  abstract findFirst(notificationFindFirstArgs: Prisma.NotificationFindFirstArgs): Promise<Notification>;

  abstract updateOne(notificationUpdateOneArgs: Prisma.NotificationUpdateArgs): Promise<Notification>;

  abstract updateMany(notificationUpdateManyArgs: Prisma.NotificationUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(notificationDeleteArgs: Prisma.NotificationDeleteArgs): Promise<boolean>;

  abstract deleteMany(notificationDeleteManyArgs: Prisma.NotificationDeleteManyArgs): Promise<boolean>;

  abstract aggregate(notificationAggregateArgs: Prisma.NotificationAggregateArgs): Promise<Prisma.GetNotificationAggregateType<Prisma.NotificationAggregateArgs>>;

  abstract count(notificationCountArgs: Prisma.NotificationCountArgs): Promise<number>;
}
