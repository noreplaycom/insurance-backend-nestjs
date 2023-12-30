import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionController } from './transaction.controller';
import { FakeTransactionController } from './transaction.controller.fake';
import { PrismaTransactionController } from './transaction.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    TransactionResolver,
    TransactionService,
    PrismaTransactionController,
    FakeTransactionController,
    {
      provide: TransactionController,
      inject: [ConfigService, PrismaTransactionController, FakeTransactionController],
      useFactory: (config: ConfigService, prisma: PrismaTransactionController, fake: FakeTransactionController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
          default:
            throw new Error('invalid datasource type')
        }
      },
    }
  ],
  exports: [
    {
      provide: TransactionController,
      inject: [ConfigService, PrismaTransactionController, FakeTransactionController],
      useFactory: (config: ConfigService, prisma: PrismaTransactionController, fake: FakeTransactionController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
        }
      },
    }
  ],
})
export class TransactionModule {}

