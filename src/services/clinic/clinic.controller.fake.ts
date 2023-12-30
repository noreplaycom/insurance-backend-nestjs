import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClinicController } from './clinic.controller';
import { Clinic } from 'src/@generated';
import { fakeClinicComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeClinicController implements ClinicController {
  private clinics: Clinic[] = [];

  constructor() {}

  async createOne(clinicCreateArgs: Prisma.ClinicCreateArgs): Promise<Clinic> {
    const fake = fakeClinicComplete()
    this.clinics.push(fake);
    return fake;
  }

  async createMany(clinicCreateManyArgs: Prisma.ClinicCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = clinicCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.clinics.push(fakeClinicComplete());
      }
      return { count: totalFake };
    } else {
      this.clinics.push(fakeClinicComplete());
      return { count: 1 }
    }
  }

  async findOne(clinicFindUniqueArgs: Prisma.ClinicFindUniqueArgs): Promise<Clinic> {
    return this.clinics.find(clinic => clinic.id === clinicFindUniqueArgs.where.id);
  }

  async findMany(clinicFindManyArgs: Prisma.ClinicFindManyArgs): Promise<Clinic[]> {
    return this.clinics.filter(clinic => clinic);
  }

  async findFirst(clinicFindFirstArgs: Prisma.ClinicFindFirstArgs): Promise<Clinic> {
    return this.clinics.find(clinic => clinic);
  }

  async updateOne(clinicUpdateOneArgs: Prisma.ClinicUpdateArgs): Promise<Clinic> {
    const idx = this.clinics.findIndex(clinic => clinic.id === clinicUpdateOneArgs.where.id);
    this.clinics[idx] = {
      ...fakeClinicComplete(),
      id: clinicUpdateOneArgs.where.id
    }
    return {
      ...fakeClinicComplete(),
      id: clinicUpdateOneArgs.where.id
    }
  }

  async updateMany(clinicUpdateManyArgs: Prisma.ClinicUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(clinicDeleteArgs: Prisma.ClinicDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(clinicDeleteManyArgs: Prisma.ClinicDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(clinicAggregateArgs: Prisma.ClinicAggregateArgs): Promise<Prisma.GetClinicAggregateType<Prisma.ClinicAggregateArgs>> {
    return {
      _avg: this.clinics[0],
      _count: true,
      _max: this.clinics[0],
      _min: this.clinics[this.clinics.length - 1],
      _sum: this.clinics[0]
    }
  }

  async count(clinicCountArgs: Prisma.ClinicCountArgs): Promise<number> {
    return this.clinics.length;
  }
}
