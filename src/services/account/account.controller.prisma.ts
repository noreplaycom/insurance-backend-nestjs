import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account } from 'src/@generated';

@Injectable()
export class PrismaAccountController implements AccountController {
  constructor(private readonly accountService: AccountService) {}

  async createOne(accountCreateArgs: Prisma.AccountCreateArgs): Promise<Account> {
    return await this.accountService.createOne(accountCreateArgs);
  }

  async createMany(accountCreateManyArgs: Prisma.AccountCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.accountService.createMany(accountCreateManyArgs);
  }

  async findOne(accountFindUniqueArgs: Prisma.AccountFindUniqueArgs): Promise<Account> {
    return await this.accountService.findOne(accountFindUniqueArgs);
  }

  async findMany(accountFindManyArgs: Prisma.AccountFindManyArgs): Promise<Account[]> {
    return await this.accountService.findMany(accountFindManyArgs);
  }

  async findFirst(accountFindFirstArgs: Prisma.AccountFindFirstArgs): Promise<Account> {
    return await this.accountService.findFirst(accountFindFirstArgs);
  }

  async updateOne(accountUpdateOneArgs: Prisma.AccountUpdateArgs): Promise<Account> {
    return await this.accountService.updateOne(accountUpdateOneArgs);
  }

  async updateMany(accountUpdateManyArgs: Prisma.AccountUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.accountService.updateMany(accountUpdateManyArgs);
  }

  async delete(accountDeleteArgs: Prisma.AccountDeleteArgs): Promise<boolean> {
    return await this.accountService.delete(accountDeleteArgs);
  }

  async deleteMany(accountDeleteManyArgs: Prisma.AccountDeleteManyArgs): Promise<boolean> {
    return await this.accountService.deleteMany(accountDeleteManyArgs);
  }

  async aggregate(accountAggregateArgs: Prisma.AccountAggregateArgs): Promise<Prisma.GetAccountAggregateType<Prisma.AccountAggregateArgs>> {
    return await this.accountService.aggregate(accountAggregateArgs);
  }

  async count(accountCountArgs: Prisma.AccountCountArgs): Promise<number> {
    return await this.accountService.count(accountCountArgs);
  }
}
