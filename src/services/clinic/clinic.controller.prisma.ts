import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { Clinic } from 'src/@generated';

@Injectable()
export class PrismaClinicController implements ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  async createOne(clinicCreateArgs: Prisma.ClinicCreateArgs): Promise<Clinic> {
    return await this.clinicService.createOne(clinicCreateArgs);
  }

  async createMany(clinicCreateManyArgs: Prisma.ClinicCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.clinicService.createMany(clinicCreateManyArgs);
  }

  async findOne(clinicFindUniqueArgs: Prisma.ClinicFindUniqueArgs): Promise<Clinic> {
    return await this.clinicService.findOne(clinicFindUniqueArgs);
  }

  async findMany(clinicFindManyArgs: Prisma.ClinicFindManyArgs): Promise<Clinic[]> {
    return await this.clinicService.findMany(clinicFindManyArgs);
  }

  async findFirst(clinicFindFirstArgs: Prisma.ClinicFindFirstArgs): Promise<Clinic> {
    return await this.clinicService.findFirst(clinicFindFirstArgs);
  }

  async updateOne(clinicUpdateOneArgs: Prisma.ClinicUpdateArgs): Promise<Clinic> {
    return await this.clinicService.updateOne(clinicUpdateOneArgs);
  }

  async updateMany(clinicUpdateManyArgs: Prisma.ClinicUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.clinicService.updateMany(clinicUpdateManyArgs);
  }

  async delete(clinicDeleteArgs: Prisma.ClinicDeleteArgs): Promise<boolean> {
    return await this.clinicService.delete(clinicDeleteArgs);
  }

  async deleteMany(clinicDeleteManyArgs: Prisma.ClinicDeleteManyArgs): Promise<boolean> {
    return await this.clinicService.deleteMany(clinicDeleteManyArgs);
  }

  async aggregate(clinicAggregateArgs: Prisma.ClinicAggregateArgs): Promise<Prisma.GetClinicAggregateType<Prisma.ClinicAggregateArgs>> {
    return await this.clinicService.aggregate(clinicAggregateArgs);
  }

  async count(clinicCountArgs: Prisma.ClinicCountArgs): Promise<number> {
    return await this.clinicService.count(clinicCountArgs);
  }
}
