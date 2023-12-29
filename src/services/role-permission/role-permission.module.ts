import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionResolver } from './role-permission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RolePermissionController } from './role-permission.controller';

@Module({
  providers: [PrismaService, RolePermissionResolver, RolePermissionController, RolePermissionService],
  exports: [RolePermissionController],
})
export class RolePermissionModule {}
