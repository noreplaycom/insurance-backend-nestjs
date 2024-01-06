import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountResolver } from './bank-account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BankAccountController } from './bank-account.controller';

@Module({
  providers: [PrismaService, BankAccountResolver, BankAccountController, BankAccountService],
  exports: [BankAccountController],
})
export class BankAccountModule {}
