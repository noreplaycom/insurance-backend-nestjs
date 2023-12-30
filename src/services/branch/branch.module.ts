import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchResolver } from './branch.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BranchController } from './branch.controller';
import { FakeBranchController } from './branch.controller.fake';
import { PrismaBranchController } from './branch.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    BranchResolver,
    BranchService,
    PrismaBranchController,
    FakeBranchController,
    {
      provide: BranchController,
      inject: [ConfigService, PrismaBranchController, FakeBranchController],
      useFactory: (config: ConfigService, prisma: PrismaBranchController, fake: FakeBranchController) => {
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
      provide: BranchController,
      inject: [ConfigService, PrismaBranchController, FakeBranchController],
      useFactory: (config: ConfigService, prisma: PrismaBranchController, fake: FakeBranchController) => {
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
export class BranchModule {}

