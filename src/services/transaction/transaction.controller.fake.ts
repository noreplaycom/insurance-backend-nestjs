import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TransactionController } from './transaction.controller';
import { Transaction } from 'src/@generated';
import { fakeTransactionComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeTransactionController implements TransactionController {
  private transactions: Transaction[] = [];

  constructor() {}

  async createOne(transactionCreateArgs: Prisma.TransactionCreateArgs): Promise<Transaction> {
    const fake = fakeTransactionComplete()
    this.transactions.push(fake);
    return fake;
  }

  async createMany(transactionCreateManyArgs: Prisma.TransactionCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = transactionCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.transactions.push(fakeTransactionComplete());
      }
      return { count: totalFake };
    } else {
      this.transactions.push(fakeTransactionComplete());
      return { count: 1 }
    }
  }

  async findOne(transactionFindUniqueArgs: Prisma.TransactionFindUniqueArgs): Promise<Transaction> {
    return this.transactions.find(transaction => transaction.id === transactionFindUniqueArgs.where.id);
  }

  async findMany(transactionFindManyArgs: Prisma.TransactionFindManyArgs): Promise<Transaction[]> {
    return this.transactions.filter(transaction => transaction);
  }

  async findFirst(transactionFindFirstArgs: Prisma.TransactionFindFirstArgs): Promise<Transaction> {
    return this.transactions.find(transaction => transaction);
  }

  async updateOne(transactionUpdateOneArgs: Prisma.TransactionUpdateArgs): Promise<Transaction> {
    const idx = this.transactions.findIndex(transaction => transaction.id === transactionUpdateOneArgs.where.id);
    this.transactions[idx] = {
      ...fakeTransactionComplete(),
      id: transactionUpdateOneArgs.where.id
    }
    return {
      ...fakeTransactionComplete(),
      id: transactionUpdateOneArgs.where.id
    }
  }

  async updateMany(transactionUpdateManyArgs: Prisma.TransactionUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(transactionDeleteArgs: Prisma.TransactionDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(transactionDeleteManyArgs: Prisma.TransactionDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(transactionAggregateArgs: Prisma.TransactionAggregateArgs): Promise<Prisma.GetTransactionAggregateType<Prisma.TransactionAggregateArgs>> {
    return {
      _avg: this.transactions[0],
      _count: true,
      _max: this.transactions[0],
      _min: this.transactions[this.transactions.length - 1],
      _sum: this.transactions[0]
    }
  }

  async count(transactionCountArgs: Prisma.TransactionCountArgs): Promise<number> {
    return this.transactions.length;
  }
}
