import { Module } from '@nestjs/common';
import { ClaimProcessService } from './claim-process.service';
import { ClaimProcessResolver } from './claim-process.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClaimProcessController } from './claim-process.controller';
import { FakeClaimProcessController } from './claim-process.controller.fake';
import { PrismaClaimProcessController } from './claim-process.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ClaimProcessResolver,
    ClaimProcessService,
    PrismaClaimProcessController,
    FakeClaimProcessController,
    {
      provide: ClaimProcessController,
      inject: [ConfigService, PrismaClaimProcessController, FakeClaimProcessController],
      useFactory: (config: ConfigService, prisma: PrismaClaimProcessController, fake: FakeClaimProcessController) => {
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
      provide: ClaimProcessController,
      inject: [ConfigService, PrismaClaimProcessController, FakeClaimProcessController],
      useFactory: (config: ConfigService, prisma: PrismaClaimProcessController, fake: FakeClaimProcessController) => {
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
export class ClaimProcessModule {}

