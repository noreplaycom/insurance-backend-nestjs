import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BankAccountController } from './bank-account.controller';
import { BankAccount } from 'src/@generated';
import { fakeBankAccountComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeBankAccountController implements BankAccountController {
  private bankAccounts: BankAccount[] = [];

  constructor() {}

  async createOne(bankAccountCreateArgs: Prisma.BankAccountCreateArgs): Promise<BankAccount> {
    const fake = fakeBankAccountComplete()
    this.bankAccounts.push(fake);
    return fake;
  }

  async createMany(bankAccountCreateManyArgs: Prisma.BankAccountCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = bankAccountCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.bankAccounts.push(fakeBankAccountComplete());
      }
      return { count: totalFake };
    } else {
      this.bankAccounts.push(fakeBankAccountComplete());
      return { count: 1 }
    }
  }

  async findOne(bankAccountFindUniqueArgs: Prisma.BankAccountFindUniqueArgs): Promise<BankAccount> {
    return this.bankAccounts.find(bankAccount => bankAccount.id === bankAccountFindUniqueArgs.where.id);
  }

  async findMany(bankAccountFindManyArgs: Prisma.BankAccountFindManyArgs): Promise<BankAccount[]> {
    return this.bankAccounts.filter(bankAccount => bankAccount);
  }

  async findFirst(bankAccountFindFirstArgs: Prisma.BankAccountFindFirstArgs): Promise<BankAccount> {
    return this.bankAccounts.find(bankAccount => bankAccount);
  }

  async updateOne(bankAccountUpdateOneArgs: Prisma.BankAccountUpdateArgs): Promise<BankAccount> {
    const idx = this.bankAccounts.findIndex(bankAccount => bankAccount.id === bankAccountUpdateOneArgs.where.id);
    this.bankAccounts[idx] = {
      ...fakeBankAccountComplete(),
      id: bankAccountUpdateOneArgs.where.id
    }
    return {
      ...fakeBankAccountComplete(),
      id: bankAccountUpdateOneArgs.where.id
    }
  }

  async updateMany(bankAccountUpdateManyArgs: Prisma.BankAccountUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(bankAccountDeleteArgs: Prisma.BankAccountDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(bankAccountDeleteManyArgs: Prisma.BankAccountDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(bankAccountAggregateArgs: Prisma.BankAccountAggregateArgs): Promise<Prisma.GetBankAccountAggregateType<Prisma.BankAccountAggregateArgs>> {
    return {
      _avg: this.bankAccounts[0],
      _count: true,
      _max: this.bankAccounts[0],
      _min: this.bankAccounts[this.bankAccounts.length - 1],
      _sum: this.bankAccounts[0]
    }
  }

  async count(bankAccountCountArgs: Prisma.BankAccountCountArgs): Promise<number> {
    return this.bankAccounts.length;
  }
}
