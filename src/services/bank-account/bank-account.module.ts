import { Module } from '@nestjs/common';
import { BankAccountService } from './bankAccount.service';
import { BankAccountResolver } from './bankAccount.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BankAccountController } from './bankAccount.controller';

@Module({
  providers: [PrismaService, BankAccountResolver, BankAccountController, BankAccountService],
  exports: [BankAccountController],
})
export class BankAccountModule {}
