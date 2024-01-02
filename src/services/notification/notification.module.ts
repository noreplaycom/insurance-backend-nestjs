import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { NotificationController } from './notification.controller';
import { FakeNotificationController } from './notification.controller.fake';
import { PrismaNotificationController } from './notification.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    NotificationResolver,
    NotificationService,
    PrismaNotificationController,
    FakeNotificationController,
    {
      provide: NotificationController,
      inject: [ConfigService, PrismaNotificationController, FakeNotificationController],
      useFactory: (config: ConfigService, prisma: PrismaNotificationController, fake: FakeNotificationController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
          default:
            throw new Error('invalid datasource type')
        }
      },
    }
  ],
  exports: [
    {
      provide: NotificationController,
      inject: [ConfigService, PrismaNotificationController, FakeNotificationController],
      useFactory: (config: ConfigService, prisma: PrismaNotificationController, fake: FakeNotificationController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
        }
      },
    }
  ],
})
export class NotificationModule {}

