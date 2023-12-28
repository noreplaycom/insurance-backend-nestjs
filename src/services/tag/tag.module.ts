import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TagController } from './tag.controller';

@Module({
  providers: [PrismaService, TagResolver, TagController, TagService],
  exports: [TagController],
})
export class TagModule {}
