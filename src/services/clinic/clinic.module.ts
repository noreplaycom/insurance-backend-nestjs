import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicResolver } from './clinic.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClinicController } from './clinic.controller';

@Module({
  providers: [PrismaService, ClinicResolver, ClinicController, ClinicService],
  exports: [ClinicController],
})
export class ClinicModule {}
