import { Module } from '@nestjs/common';
import { ClaimStatusService } from './claim-status.service';
import { ClaimStatusResolver } from './claim-status.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimStatusController } from './claim-status.controller';
import { FakeClaimStatusController } from './claim-status.controller.fake';
import { PrismaClaimStatusController } from './claim-status.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ClaimStatusResolver,
    ClaimStatusService,
    PrismaClaimStatusController,
    FakeClaimStatusController,
    {
      provide: ClaimStatusController,
      inject: [ConfigService, PrismaClaimStatusController, FakeClaimStatusController],
      useFactory: (config: ConfigService, prisma: PrismaClaimStatusController, fake: FakeClaimStatusController) => {
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
      provide: ClaimStatusController,
      inject: [ConfigService, PrismaClaimStatusController, FakeClaimStatusController],
      useFactory: (config: ConfigService, prisma: PrismaClaimStatusController, fake: FakeClaimStatusController) => {
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
export class ClaimStatusModule {}

