import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { EmploymentResolver } from './employment.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EmploymentController } from './employment.controller';

@Module({
  providers: [PrismaService, EmploymentResolver, EmploymentController, EmploymentService],
  exports: [EmploymentController],
})
export class EmploymentModule {}
