import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { CompanyController } from './company.controller';

@Module({
  providers: [PrismaService, CompanyResolver, CompanyController, CompanyService],
  exports: [CompanyController],
})
export class CompanyModule {}
