import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { GroupController } from './group.controller';

@Module({
  providers: [PrismaService, GroupResolver, GroupController, GroupService],
  exports: [GroupController],
})
export class GroupModule {}
