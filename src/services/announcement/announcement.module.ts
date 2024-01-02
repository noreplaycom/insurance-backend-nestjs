import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementResolver } from './announcement.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AnnouncementController } from './announcement.controller';
import { FakeAnnouncementController } from './announcement.controller.fake';
import { PrismaAnnouncementController } from './announcement.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    AnnouncementResolver,
    AnnouncementService,
    PrismaAnnouncementController,
    FakeAnnouncementController,
    {
      provide: AnnouncementController,
      inject: [ConfigService, PrismaAnnouncementController, FakeAnnouncementController],
      useFactory: (config: ConfigService, prisma: PrismaAnnouncementController, fake: FakeAnnouncementController) => {
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
      provide: AnnouncementController,
      inject: [ConfigService, PrismaAnnouncementController, FakeAnnouncementController],
      useFactory: (config: ConfigService, prisma: PrismaAnnouncementController, fake: FakeAnnouncementController) => {
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
export class AnnouncementModule {}

