import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountResolver } from './bank-account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BankAccountController } from './bank-account.controller';
import { FakeBankAccountController } from './bank-account.controller.fake';

@Module({
  providers: [
    PrismaService,
    BankAccountResolver,
    BankAccountService,
    {
      provide: BankAccountController,
      useClass: FakeBankAccountController,
    }
  ],
  exports: [
    {
      provide: BankAccountController,
      useClass: FakeBankAccountController,
    }
  ],
})
export class BankAccountModule {}
