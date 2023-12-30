import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoResolver } from './contact-info.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ContactInfoController } from './contact-info.controller';
import { FakeContactInfoController } from './contact-info.controller.fake';

@Module({
  providers: [
    PrismaService,
    ContactInfoResolver,
    ContactInfoService,
    {
      provide: ContactInfoController,
      useClass: FakeContactInfoController,
    }
  ],
  exports: [
    {
      provide: ContactInfoController,
      useClass: FakeContactInfoController,
    }
  ],
})
export class ContactInfoModule {}
