import { Module } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { ClaimResolver } from './claim.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimController } from './claim.controller';
import { FakeClaimController } from './claim.controller.fake';
import { PrismaClaimController } from './claim.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ClaimFinancialModule } from '../claim-financial/claim-financial.module';

@Module({
  imports: [ClaimFinancialModule],
  providers: [
    ConfigModule,
    PrismaService,
    ClaimResolver,
    ClaimService,
    PrismaClaimController,
    FakeClaimController,
    {
      provide: ClaimController,
      inject: [ConfigService, PrismaClaimController, FakeClaimController],
      useFactory: (config: ConfigService, prisma: PrismaClaimController, fake: FakeClaimController) => {
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
      provide: ClaimController,
      inject: [ConfigService, PrismaClaimController, FakeClaimController],
      useFactory: (config: ConfigService, prisma: PrismaClaimController, fake: FakeClaimController) => {
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
export class ClaimModule {}

