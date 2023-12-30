import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TagController } from './tag.controller';
import { FakeTagController } from './tag.controller.fake';
import { PrismaTagController } from './tag.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    TagResolver,
    TagService,
    PrismaTagController,
    FakeTagController,
    {
      provide: TagController,
      inject: [ConfigService, PrismaTagController, FakeTagController],
      useFactory: (config: ConfigService, prisma: PrismaTagController, fake: FakeTagController) => {
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
      provide: TagController,
      inject: [ConfigService, PrismaTagController, FakeTagController],
      useFactory: (config: ConfigService, prisma: PrismaTagController, fake: FakeTagController) => {
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
export class TagModule {}

