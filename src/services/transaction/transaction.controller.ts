import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Transaction } from 'src/@generated';

@Injectable()
export abstract class TransactionController {
  abstract createOne(transactionCreateArgs: Prisma.TransactionCreateArgs): Promise<Transaction>;

  abstract createMany(transactionCreateManyArgs: Prisma.TransactionCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(transactionFindUniqueArgs: Prisma.TransactionFindUniqueArgs): Promise<Transaction>;

  abstract findMany(transactionFindManyArgs: Prisma.TransactionFindManyArgs): Promise<Transaction[]>;

  abstract findFirst(transactionFindFirstArgs: Prisma.TransactionFindFirstArgs): Promise<Transaction>;

  abstract updateOne(transactionUpdateOneArgs: Prisma.TransactionUpdateArgs): Promise<Transaction>;

  abstract updateMany(transactionUpdateManyArgs: Prisma.TransactionUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(transactionDeleteArgs: Prisma.TransactionDeleteArgs): Promise<boolean>;

  abstract deleteMany(transactionDeleteManyArgs: Prisma.TransactionDeleteManyArgs): Promise<boolean>;

  abstract aggregate(transactionAggregateArgs: Prisma.TransactionAggregateArgs): Promise<Prisma.GetTransactionAggregateType<Prisma.TransactionAggregateArgs>>;

  abstract count(transactionCountArgs: Prisma.TransactionCountArgs): Promise<number>;
}
