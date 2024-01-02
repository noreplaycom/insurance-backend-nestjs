import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotificationController } from './notification.controller';
import { Notification } from 'src/@generated';
import { fakeNotificationComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeNotificationController implements NotificationController {
  private notifications: Notification[] = [];

  constructor() {
    const initial = 100;
    for (let i = 0; i < initial; i++) {
      this.notifications.push(fakeNotificationComplete());
    }
  }

  async createOne(notificationCreateArgs: Prisma.NotificationCreateArgs): Promise<Notification> {
    const fake = fakeNotificationComplete()
    this.notifications.push(fake);
    return fake;
  }

  async createMany(notificationCreateManyArgs: Prisma.NotificationCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = notificationCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.notifications.push(fakeNotificationComplete());
      }
      return { count: totalFake };
    } else {
      this.notifications.push(fakeNotificationComplete());
      return { count: 1 }
    }
  }

  async findOne(notificationFindUniqueArgs: Prisma.NotificationFindUniqueArgs): Promise<Notification> {
    return this.notifications.find(notification => notification.id === notificationFindUniqueArgs.where.id);
  }

  async findMany(notificationFindManyArgs: Prisma.NotificationFindManyArgs): Promise<Notification[]> {
    return this.notifications.filter(notification => notification);
  }

  async findFirst(notificationFindFirstArgs: Prisma.NotificationFindFirstArgs): Promise<Notification> {
    return this.notifications.find(notification => notification);
  }

  async updateOne(notificationUpdateOneArgs: Prisma.NotificationUpdateArgs): Promise<Notification> {
    const idx = this.notifications.findIndex(notification => notification.id === notificationUpdateOneArgs.where.id);
    this.notifications[idx] = {
      ...fakeNotificationComplete(),
      id: notificationUpdateOneArgs.where.id
    }
    return {
      ...fakeNotificationComplete(),
      id: notificationUpdateOneArgs.where.id
    }
  }

  async updateMany(notificationUpdateManyArgs: Prisma.NotificationUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(notificationDeleteArgs: Prisma.NotificationDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(notificationDeleteManyArgs: Prisma.NotificationDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(notificationAggregateArgs: Prisma.NotificationAggregateArgs): Promise<Prisma.GetNotificationAggregateType<Prisma.NotificationAggregateArgs>> {
    return {
      _avg: this.notifications[0],
      _count: true,
      _max: this.notifications[0],
      _min: this.notifications[this.notifications.length - 1],
      _sum: this.notifications[0]
    }
  }

  async count(notificationCountArgs: Prisma.NotificationCountArgs): Promise<number> {
    return this.notifications.length;
  }
}
