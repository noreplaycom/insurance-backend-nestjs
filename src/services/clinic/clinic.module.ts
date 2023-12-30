import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicResolver } from './clinic.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClinicController } from './clinic.controller';
import { FakeClinicController } from './clinic.controller.fake';

@Module({
  providers: [
    PrismaService,
    ClinicResolver,
    ClinicService,
    {
      provide: ClinicController,
      useClass: FakeClinicController,
    }
  ],
  exports: [
    {
      provide: ClinicController,
      useClass: FakeClinicController,
    }
  ],
})
export class ClinicModule {}
