import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccountController } from './account.controller';
import { Account } from 'src/@generated';
import { fakeAccountComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeAccountController implements AccountController {
  private accounts: Account[] = [];

  constructor() {}

  async createOne(accountCreateArgs: Prisma.AccountCreateArgs): Promise<Account> {
    const fake = fakeAccountComplete()
    this.accounts.push(fake);
    return fake;
  }

  async createMany(accountCreateManyArgs: Prisma.AccountCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = accountCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.accounts.push(fakeAccountComplete());
      }
      return { count: totalFake };
    } else {
      this.accounts.push(fakeAccountComplete());
      return { count: 1 }
    }
  }

  async findOne(accountFindUniqueArgs: Prisma.AccountFindUniqueArgs): Promise<Account> {
    return this.accounts.find(account => account.id === accountFindUniqueArgs.where.id);
  }

  async findMany(accountFindManyArgs: Prisma.AccountFindManyArgs): Promise<Account[]> {
    return this.accounts.filter(account => account);
  }

  async findFirst(accountFindFirstArgs: Prisma.AccountFindFirstArgs): Promise<Account> {
    return this.accounts.find(account => account);
  }

  async updateOne(accountUpdateOneArgs: Prisma.AccountUpdateArgs): Promise<Account> {
    const idx = this.accounts.findIndex(account => account.id === accountUpdateOneArgs.where.id);
    this.accounts[idx] = {
      ...fakeAccountComplete(),
      id: accountUpdateOneArgs.where.id
    }
    return {
      ...fakeAccountComplete(),
      id: accountUpdateOneArgs.where.id
    }
  }

  async updateMany(accountUpdateManyArgs: Prisma.AccountUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(accountDeleteArgs: Prisma.AccountDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(accountDeleteManyArgs: Prisma.AccountDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(accountAggregateArgs: Prisma.AccountAggregateArgs): Promise<Prisma.GetAccountAggregateType<Prisma.AccountAggregateArgs>> {
    return {
      _avg: this.accounts[0],
      _count: true,
      _max: this.accounts[0],
      _min: this.accounts[this.accounts.length - 1],
      _sum: this.accounts[0]
    }
  }

  async count(accountCountArgs: Prisma.AccountCountArgs): Promise<number> {
    return this.accounts.length;
  }
}
