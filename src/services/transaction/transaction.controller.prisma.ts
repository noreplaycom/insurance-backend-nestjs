import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction } from 'src/@generated';

@Injectable()
export class PrismaTransactionController implements TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  async createOne(transactionCreateArgs: Prisma.TransactionCreateArgs): Promise<Transaction> {
    return await this.transactionService.createOne(transactionCreateArgs);
  }

  async createMany(transactionCreateManyArgs: Prisma.TransactionCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.transactionService.createMany(transactionCreateManyArgs);
  }

  async findOne(transactionFindUniqueArgs: Prisma.TransactionFindUniqueArgs): Promise<Transaction> {
    return await this.transactionService.findOne(transactionFindUniqueArgs);
  }

  async findMany(transactionFindManyArgs: Prisma.TransactionFindManyArgs): Promise<Transaction[]> {
    return await this.transactionService.findMany(transactionFindManyArgs);
  }

  async findFirst(transactionFindFirstArgs: Prisma.TransactionFindFirstArgs): Promise<Transaction> {
    return await this.transactionService.findFirst(transactionFindFirstArgs);
  }

  async updateOne(transactionUpdateOneArgs: Prisma.TransactionUpdateArgs): Promise<Transaction> {
    return await this.transactionService.updateOne(transactionUpdateOneArgs);
  }

  async updateMany(transactionUpdateManyArgs: Prisma.TransactionUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.transactionService.updateMany(transactionUpdateManyArgs);
  }

  async delete(transactionDeleteArgs: Prisma.TransactionDeleteArgs): Promise<boolean> {
    return await this.transactionService.delete(transactionDeleteArgs);
  }

  async deleteMany(transactionDeleteManyArgs: Prisma.TransactionDeleteManyArgs): Promise<boolean> {
    return await this.transactionService.deleteMany(transactionDeleteManyArgs);
  }

  async aggregate(transactionAggregateArgs: Prisma.TransactionAggregateArgs): Promise<Prisma.GetTransactionAggregateType<Prisma.TransactionAggregateArgs>> {
    return await this.transactionService.aggregate(transactionAggregateArgs);
  }

  async count(transactionCountArgs: Prisma.TransactionCountArgs): Promise<number> {
    return await this.transactionService.count(transactionCountArgs);
  }
}
