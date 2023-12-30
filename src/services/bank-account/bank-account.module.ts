import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountResolver } from './bank-account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BankAccountController } from './bank-account.controller';
import { FakeBankAccountController } from './bank-account.controller.fake';
import { PrismaBankAccountController } from './bank-account.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    BankAccountResolver,
    BankAccountService,
    PrismaBankAccountController,
    FakeBankAccountController,
    {
      provide: BankAccountController,
      inject: [ConfigService, PrismaBankAccountController, FakeBankAccountController],
      useFactory: (config: ConfigService, prisma: PrismaBankAccountController, fake: FakeBankAccountController) => {
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
      provide: BankAccountController,
      inject: [ConfigService, PrismaBankAccountController, FakeBankAccountController],
      useFactory: (config: ConfigService, prisma: PrismaBankAccountController, fake: FakeBankAccountController) => {
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
export class BankAccountModule {}

