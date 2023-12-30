import { Module } from '@nestjs/common';
import { ClaimFinancialService } from './claim-financial.service';
import { ClaimFinancialResolver } from './claim-financial.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimFinancialController } from './claim-financial.controller';
import { FakeClaimFinancialController } from './claim-financial.controller.fake';
import { PrismaClaimFinancialController } from './claim-financial.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ClaimFinancialResolver,
    ClaimFinancialService,
    PrismaClaimFinancialController,
    FakeClaimFinancialController,
    {
      provide: ClaimFinancialController,
      inject: [ConfigService, PrismaClaimFinancialController, FakeClaimFinancialController],
      useFactory: (config: ConfigService, prisma: PrismaClaimFinancialController, fake: FakeClaimFinancialController) => {
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
      provide: ClaimFinancialController,
      inject: [ConfigService, PrismaClaimFinancialController, FakeClaimFinancialController],
      useFactory: (config: ConfigService, prisma: PrismaClaimFinancialController, fake: FakeClaimFinancialController) => {
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
export class ClaimFinancialModule {}

