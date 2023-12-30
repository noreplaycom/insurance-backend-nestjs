import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { GroupController } from './group.controller';
import { FakeGroupController } from './group.controller.fake';

@Module({
  providers: [
    PrismaService,
    GroupResolver,
    GroupService,
    {
      provide: GroupController,
      useClass: FakeGroupController,
    }
  ],
  exports: [
    {
      provide: GroupController,
      useClass: FakeGroupController,
    }
  ],
})
export class GroupModule {}
