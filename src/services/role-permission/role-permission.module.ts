import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionResolver } from './role-permission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RolePermissionController } from './role-permission.controller';
import { FakeRolePermissionController } from './role-permission.controller.fake';

@Module({
  providers: [
    PrismaService,
    RolePermissionResolver,
    RolePermissionService,
    {
      provide: RolePermissionController,
      useClass: FakeRolePermissionController,
    }
  ],
  exports: [
    {
      provide: RolePermissionController,
      useClass: FakeRolePermissionController,
    }
  ],
})
export class RolePermissionModule {}
