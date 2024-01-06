import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoResolver } from './contact-info.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ContactInfoController } from './contact-info.controller';

@Module({
  providers: [PrismaService, ContactInfoResolver, ContactInfoController, ContactInfoService],
  exports: [ContactInfoController],
})
export class ContactInfoModule {}
