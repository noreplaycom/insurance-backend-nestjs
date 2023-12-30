import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionResolver } from './role-permission.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RolePermissionController } from './role-permission.controller';
import { FakeRolePermissionController } from './role-permission.controller.fake';
import { PrismaRolePermissionController } from './role-permission.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    RolePermissionResolver,
    RolePermissionService,
    PrismaRolePermissionController,
    FakeRolePermissionController,
    {
      provide: RolePermissionController,
      inject: [ConfigService, PrismaRolePermissionController, FakeRolePermissionController],
      useFactory: (config: ConfigService, prisma: PrismaRolePermissionController, fake: FakeRolePermissionController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
          default:
            throw new Error('invalid datasource type')
        }
      },
    }
  ],
  exports: [
    {
      provide: RolePermissionController,
      inject: [ConfigService, PrismaRolePermissionController, FakeRolePermissionController],
      useFactory: (config: ConfigService, prisma: PrismaRolePermissionController, fake: FakeRolePermissionController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
        }
      },
    }
  ],
})
export class RolePermissionModule {}

