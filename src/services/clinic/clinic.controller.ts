import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClinicService } from './clinic.service';

@Injectable()
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  async createOne(clinicCreateArgs: Prisma.ClinicCreateArgs) {
    return await this.clinicService.createOne(clinicCreateArgs);
  }

  async createMany(clinicCreateManyArgs: Prisma.ClinicCreateManyArgs) {
    return await this.clinicService.createMany(clinicCreateManyArgs);
  }

  async findOne(clinicFindUniqueArgs: Prisma.ClinicFindUniqueArgs) {
    return await this.clinicService.findOne(clinicFindUniqueArgs);
  }

  async findMany(clinicFindManyArgs: Prisma.ClinicFindManyArgs) {
    return await this.clinicService.findMany(clinicFindManyArgs);
  }

  async findFirst(clinicFindFirstArgs: Prisma.ClinicFindFirstArgs) {
    return await this.clinicService.findFirst(clinicFindFirstArgs);
  }

  async updateOne(clinicUpdateOneArgs: Prisma.ClinicUpdateArgs) {
    return await this.clinicService.updateOne(clinicUpdateOneArgs);
  }

  async updateMany(clinicUpdateManyArgs: Prisma.ClinicUpdateManyArgs) {
    return await this.clinicService.updateMany(clinicUpdateManyArgs);
  }

  async delete(clinicDeleteArgs: Prisma.ClinicDeleteArgs) {
    return await this.clinicService.delete(clinicDeleteArgs);
  }

  async deleteMany(clinicDeleteManyArgs: Prisma.ClinicDeleteManyArgs) {
    return await this.clinicService.deleteMany(clinicDeleteManyArgs);
  }

  async aggregate(clinicAggregateArgs: Prisma.ClinicAggregateArgs) {
    return await this.clinicService.aggregate(clinicAggregateArgs);
  }

  async count(clinicCountArgs: Prisma.ClinicCountArgs) {
    return await this.clinicService.count(clinicCountArgs);
  }
}
