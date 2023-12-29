import { Module } from '@nestjs/common';
import { RolePermissionService } from './rolePermission.service';
import { RolePermissionResolver } from './rolePermission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RolePermissionController } from './rolePermission.controller';

@Module({
  providers: [PrismaService, RolePermissionResolver, RolePermissionController, RolePermissionService],
  exports: [RolePermissionController],
})
export class RolePermissionModule {}
