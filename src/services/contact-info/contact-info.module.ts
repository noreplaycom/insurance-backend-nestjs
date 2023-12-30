import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoResolver } from './contact-info.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ContactInfoController } from './contact-info.controller';
import { FakeContactInfoController } from './contact-info.controller.fake';
import { PrismaContactInfoController } from './contact-info.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ContactInfoResolver,
    ContactInfoService,
    PrismaContactInfoController,
    FakeContactInfoController,
    {
      provide: ContactInfoController,
      inject: [ConfigService, PrismaContactInfoController, FakeContactInfoController],
      useFactory: (config: ConfigService, prisma: PrismaContactInfoController, fake: FakeContactInfoController) => {
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
      provide: ContactInfoController,
      inject: [ConfigService, PrismaContactInfoController, FakeContactInfoController],
      useFactory: (config: ConfigService, prisma: PrismaContactInfoController, fake: FakeContactInfoController) => {
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
export class ContactInfoModule {}

