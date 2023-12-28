import { Module } from '@nestjs/common';
import { ContactInfoService } from './contactInfo.service';
import { ContactInfoResolver } from './contactInfo.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ContactInfoController } from './contactInfo.controller';

@Module({
  providers: [PrismaService, ContactInfoResolver, ContactInfoController, ContactInfoService],
  exports: [ContactInfoController],
})
export class ContactInfoModule {}
