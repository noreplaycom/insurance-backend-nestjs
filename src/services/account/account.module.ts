import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccountController } from './account.controller';
import { FakeAccountController } from './account.controller.fake';
import { PrismaAccountController } from './account.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    AccountResolver,
    AccountService,
    PrismaAccountController,
    FakeAccountController,
    {
      provide: AccountController,
      inject: [ConfigService, PrismaAccountController, FakeAccountController],
      useFactory: (config: ConfigService, prisma: PrismaAccountController, fake: FakeAccountController) => {
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
      provide: AccountController,
      inject: [ConfigService, PrismaAccountController, FakeAccountController],
      useFactory: (config: ConfigService, prisma: PrismaAccountController, fake: FakeAccountController) => {
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
export class AccountModule {}

