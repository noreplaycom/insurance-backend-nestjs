import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { Notification } from 'src/@generated';

@Injectable()
export class PrismaNotificationController implements NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  async createOne(notificationCreateArgs: Prisma.NotificationCreateArgs): Promise<Notification> {
    return await this.notificationService.createOne(notificationCreateArgs);
  }

  async createMany(notificationCreateManyArgs: Prisma.NotificationCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.notificationService.createMany(notificationCreateManyArgs);
  }

  async findOne(notificationFindUniqueArgs: Prisma.NotificationFindUniqueArgs): Promise<Notification> {
    return await this.notificationService.findOne(notificationFindUniqueArgs);
  }

  async findMany(notificationFindManyArgs: Prisma.NotificationFindManyArgs): Promise<Notification[]> {
    return await this.notificationService.findMany(notificationFindManyArgs);
  }

  async findFirst(notificationFindFirstArgs: Prisma.NotificationFindFirstArgs): Promise<Notification> {
    return await this.notificationService.findFirst(notificationFindFirstArgs);
  }

  async updateOne(notificationUpdateOneArgs: Prisma.NotificationUpdateArgs): Promise<Notification> {
    return await this.notificationService.updateOne(notificationUpdateOneArgs);
  }

  async updateMany(notificationUpdateManyArgs: Prisma.NotificationUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.notificationService.updateMany(notificationUpdateManyArgs);
  }

  async delete(notificationDeleteArgs: Prisma.NotificationDeleteArgs): Promise<boolean> {
    return await this.notificationService.delete(notificationDeleteArgs);
  }

  async deleteMany(notificationDeleteManyArgs: Prisma.NotificationDeleteManyArgs): Promise<boolean> {
    return await this.notificationService.deleteMany(notificationDeleteManyArgs);
  }

  async aggregate(notificationAggregateArgs: Prisma.NotificationAggregateArgs): Promise<Prisma.GetNotificationAggregateType<Prisma.NotificationAggregateArgs>> {
    return await this.notificationService.aggregate(notificationAggregateArgs);
  }

  async count(notificationCountArgs: Prisma.NotificationCountArgs): Promise<number> {
    return await this.notificationService.count(notificationCountArgs);
  }
}
