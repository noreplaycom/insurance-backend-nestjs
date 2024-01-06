import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementResolver } from './announcement.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AnnouncementController } from './announcement.controller';

@Module({
  providers: [PrismaService, AnnouncementResolver, AnnouncementController, AnnouncementService],
  exports: [AnnouncementController],
})
export class AnnouncementModule {}
