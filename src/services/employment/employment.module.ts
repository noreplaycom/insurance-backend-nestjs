import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { EmploymentResolver } from './employment.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EmploymentController } from './employment.controller';
import { FakeEmploymentController } from './employment.controller.fake';

@Module({
  providers: [
    PrismaService,
    EmploymentResolver,
    EmploymentService,
    {
      provide: EmploymentController,
      useClass: FakeEmploymentController,
    }
  ],
  exports: [
    {
      provide: EmploymentController,
      useClass: FakeEmploymentController,
    }
  ],
})
export class EmploymentModule {}
