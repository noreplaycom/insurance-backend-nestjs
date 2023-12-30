import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Account } from 'src/@generated';

@Injectable()
export abstract class AccountController {
  abstract createOne(accountCreateArgs: Prisma.AccountCreateArgs): Promise<Account>;

  abstract createMany(accountCreateManyArgs: Prisma.AccountCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(accountFindUniqueArgs: Prisma.AccountFindUniqueArgs): Promise<Account>;

  abstract findMany(accountFindManyArgs: Prisma.AccountFindManyArgs): Promise<Account[]>;

  abstract findFirst(accountFindFirstArgs: Prisma.AccountFindFirstArgs): Promise<Account>;

  abstract updateOne(accountUpdateOneArgs: Prisma.AccountUpdateArgs): Promise<Account>;

  abstract updateMany(accountUpdateManyArgs: Prisma.AccountUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(accountDeleteArgs: Prisma.AccountDeleteArgs): Promise<boolean>;

  abstract deleteMany(accountDeleteManyArgs: Prisma.AccountDeleteManyArgs): Promise<boolean>;

  abstract aggregate(accountAggregateArgs: Prisma.AccountAggregateArgs): Promise<Prisma.GetAccountAggregateType<Prisma.AccountAggregateArgs>>;

  abstract count(accountCountArgs: Prisma.AccountCountArgs): Promise<number>;
}
