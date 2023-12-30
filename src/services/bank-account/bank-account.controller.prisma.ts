import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { BankAccount } from 'src/@generated';

@Injectable()
export class PrismaBankAccountController implements BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  async createOne(bankAccountCreateArgs: Prisma.BankAccountCreateArgs): Promise<BankAccount> {
    return await this.bankAccountService.createOne(bankAccountCreateArgs);
  }

  async createMany(bankAccountCreateManyArgs: Prisma.BankAccountCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.bankAccountService.createMany(bankAccountCreateManyArgs);
  }

  async findOne(bankAccountFindUniqueArgs: Prisma.BankAccountFindUniqueArgs): Promise<BankAccount> {
    return await this.bankAccountService.findOne(bankAccountFindUniqueArgs);
  }

  async findMany(bankAccountFindManyArgs: Prisma.BankAccountFindManyArgs): Promise<BankAccount[]> {
    return await this.bankAccountService.findMany(bankAccountFindManyArgs);
  }

  async findFirst(bankAccountFindFirstArgs: Prisma.BankAccountFindFirstArgs): Promise<BankAccount> {
    return await this.bankAccountService.findFirst(bankAccountFindFirstArgs);
  }

  async updateOne(bankAccountUpdateOneArgs: Prisma.BankAccountUpdateArgs): Promise<BankAccount> {
    return await this.bankAccountService.updateOne(bankAccountUpdateOneArgs);
  }

  async updateMany(bankAccountUpdateManyArgs: Prisma.BankAccountUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.bankAccountService.updateMany(bankAccountUpdateManyArgs);
  }

  async delete(bankAccountDeleteArgs: Prisma.BankAccountDeleteArgs): Promise<boolean> {
    return await this.bankAccountService.delete(bankAccountDeleteArgs);
  }

  async deleteMany(bankAccountDeleteManyArgs: Prisma.BankAccountDeleteManyArgs): Promise<boolean> {
    return await this.bankAccountService.deleteMany(bankAccountDeleteManyArgs);
  }

  async aggregate(bankAccountAggregateArgs: Prisma.BankAccountAggregateArgs): Promise<Prisma.GetBankAccountAggregateType<Prisma.BankAccountAggregateArgs>> {
    return await this.bankAccountService.aggregate(bankAccountAggregateArgs);
  }

  async count(bankAccountCountArgs: Prisma.BankAccountCountArgs): Promise<number> {
    return await this.bankAccountService.count(bankAccountCountArgs);
  }
}
