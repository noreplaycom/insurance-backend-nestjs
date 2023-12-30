import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CompanyController } from './company.controller';
import { FakeCompanyController } from './company.controller.fake';
import { PrismaCompanyController } from './company.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    CompanyResolver,
    CompanyService,
    PrismaCompanyController,
    FakeCompanyController,
    {
      provide: CompanyController,
      inject: [ConfigService, PrismaCompanyController, FakeCompanyController],
      useFactory: (config: ConfigService, prisma: PrismaCompanyController, fake: FakeCompanyController) => {
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
      provide: CompanyController,
      inject: [ConfigService, PrismaCompanyController, FakeCompanyController],
      useFactory: (config: ConfigService, prisma: PrismaCompanyController, fake: FakeCompanyController) => {
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
export class CompanyModule {}

