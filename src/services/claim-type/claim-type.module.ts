import { Module } from '@nestjs/common';
import { ClaimTypeService } from './claim-type.service';
import { ClaimTypeResolver } from './claim-type.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimTypeController } from './claim-type.controller';
import { FakeClaimTypeController } from './claim-type.controller.fake';
import { PrismaClaimTypeController } from './claim-type.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ClaimTypeResolver,
    ClaimTypeService,
    PrismaClaimTypeController,
    FakeClaimTypeController,
    {
      provide: ClaimTypeController,
      inject: [ConfigService, PrismaClaimTypeController, FakeClaimTypeController],
      useFactory: (config: ConfigService, prisma: PrismaClaimTypeController, fake: FakeClaimTypeController) => {
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
      provide: ClaimTypeController,
      inject: [ConfigService, PrismaClaimTypeController, FakeClaimTypeController],
      useFactory: (config: ConfigService, prisma: PrismaClaimTypeController, fake: FakeClaimTypeController) => {
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
export class ClaimTypeModule {}

