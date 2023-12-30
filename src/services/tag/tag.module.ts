import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TagController } from './tag.controller';
import { FakeTagController } from './tag.controller.fake';

@Module({
  providers: [
    PrismaService,
    TagResolver,
    TagService,
    {
      provide: TagController,
      useClass: FakeTagController,
    }
  ],
  exports: [
    {
      provide: TagController,
      useClass: FakeTagController,
    }
  ],
})
export class TagModule {}
