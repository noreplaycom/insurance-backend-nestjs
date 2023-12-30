import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RoleController } from './role.controller';
import { FakeRoleController } from './role.controller.fake';
import { PrismaRoleController } from './role.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    RoleResolver,
    RoleService,
    PrismaRoleController,
    FakeRoleController,
    {
      provide: RoleController,
      inject: [ConfigService, PrismaRoleController, FakeRoleController],
      useFactory: (config: ConfigService, prisma: PrismaRoleController, fake: FakeRoleController) => {
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
      provide: RoleController,
      inject: [ConfigService, PrismaRoleController, FakeRoleController],
      useFactory: (config: ConfigService, prisma: PrismaRoleController, fake: FakeRoleController) => {
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
export class RoleModule {}

