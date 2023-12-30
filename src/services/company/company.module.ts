import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CompanyController } from './company.controller';
import { FakeCompanyController } from './company.controller.fake';

@Module({
  providers: [
    PrismaService,
    CompanyResolver,
    CompanyService,
    {
      provide: CompanyController,
      useClass: FakeCompanyController,
    }
  ],
  exports: [
    {
      provide: CompanyController,
      useClass: FakeCompanyController,
    }
  ],
})
export class CompanyModule {}
