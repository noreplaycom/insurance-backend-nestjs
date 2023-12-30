import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionController } from './transaction.controller';
import { FakeTransactionController } from './transaction.controller.fake';

@Module({
  providers: [
    PrismaService,
    TransactionResolver,
    TransactionService,
    {
      provide: TransactionController,
      useClass: FakeTransactionController,
    }
  ],
  exports: [
    {
      provide: TransactionController,
      useClass: FakeTransactionController,
    }
  ],
})
export class TransactionModule {}
