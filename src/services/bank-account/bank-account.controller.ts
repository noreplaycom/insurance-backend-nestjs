import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BankAccount } from 'src/@generated';

@Injectable()
export abstract class BankAccountController {
  abstract createOne(bankAccountCreateArgs: Prisma.BankAccountCreateArgs): Promise<BankAccount>;

  abstract createMany(bankAccountCreateManyArgs: Prisma.BankAccountCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(bankAccountFindUniqueArgs: Prisma.BankAccountFindUniqueArgs): Promise<BankAccount>;

  abstract findMany(bankAccountFindManyArgs: Prisma.BankAccountFindManyArgs): Promise<BankAccount[]>;

  abstract findFirst(bankAccountFindFirstArgs: Prisma.BankAccountFindFirstArgs): Promise<BankAccount>;

  abstract updateOne(bankAccountUpdateOneArgs: Prisma.BankAccountUpdateArgs): Promise<BankAccount>;

  abstract updateMany(bankAccountUpdateManyArgs: Prisma.BankAccountUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(bankAccountDeleteArgs: Prisma.BankAccountDeleteArgs): Promise<boolean>;

  abstract deleteMany(bankAccountDeleteManyArgs: Prisma.BankAccountDeleteManyArgs): Promise<boolean>;

  abstract aggregate(bankAccountAggregateArgs: Prisma.BankAccountAggregateArgs): Promise<Prisma.GetBankAccountAggregateType<Prisma.BankAccountAggregateArgs>>;

  abstract count(bankAccountCountArgs: Prisma.BankAccountCountArgs): Promise<number>;
}
