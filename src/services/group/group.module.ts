import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { GroupController } from './group.controller';
import { FakeGroupController } from './group.controller.fake';
import { PrismaGroupController } from './group.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    GroupResolver,
    GroupService,
    PrismaGroupController,
    FakeGroupController,
    {
      provide: GroupController,
      inject: [ConfigService, PrismaGroupController, FakeGroupController],
      useFactory: (config: ConfigService, prisma: PrismaGroupController, fake: FakeGroupController) => {
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
      provide: GroupController,
      inject: [ConfigService, PrismaGroupController, FakeGroupController],
      useFactory: (config: ConfigService, prisma: PrismaGroupController, fake: FakeGroupController) => {
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
export class GroupModule {}

