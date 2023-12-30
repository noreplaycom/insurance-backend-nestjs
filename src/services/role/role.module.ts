import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RoleController } from './role.controller';
import { FakeRoleController } from './role.controller.fake';

@Module({
  providers: [
    PrismaService,
    RoleResolver,
    RoleService,
    {
      provide: RoleController,
      useClass: FakeRoleController,
    }
  ],
  exports: [
    {
      provide: RoleController,
      useClass: FakeRoleController,
    }
  ],
})
export class RoleModule {}
