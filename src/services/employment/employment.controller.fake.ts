import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmploymentController } from './employment.controller';
import { Employment } from 'src/@generated';
import { fakeEmploymentComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeEmploymentController implements EmploymentController {
  private employments: Employment[] = [];

  constructor() {}

  async createOne(employmentCreateArgs: Prisma.EmploymentCreateArgs): Promise<Employment> {
    const fake = fakeEmploymentComplete()
    this.employments.push(fake);
    return fake;
  }

  async createMany(employmentCreateManyArgs: Prisma.EmploymentCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = employmentCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.employments.push(fakeEmploymentComplete());
      }
      return { count: totalFake };
    } else {
      this.employments.push(fakeEmploymentComplete());
      return { count: 1 }
    }
  }

  async findOne(employmentFindUniqueArgs: Prisma.EmploymentFindUniqueArgs): Promise<Employment> {
    return this.employments.find(employment => employment.id === employmentFindUniqueArgs.where.id);
  }

  async findMany(employmentFindManyArgs: Prisma.EmploymentFindManyArgs): Promise<Employment[]> {
    return this.employments.filter(employment => employment);
  }

  async findFirst(employmentFindFirstArgs: Prisma.EmploymentFindFirstArgs): Promise<Employment> {
    return this.employments.find(employment => employment);
  }

  async updateOne(employmentUpdateOneArgs: Prisma.EmploymentUpdateArgs): Promise<Employment> {
    const idx = this.employments.findIndex(employment => employment.id === employmentUpdateOneArgs.where.id);
    this.employments[idx] = {
      ...fakeEmploymentComplete(),
      id: employmentUpdateOneArgs.where.id
    }
    return {
      ...fakeEmploymentComplete(),
      id: employmentUpdateOneArgs.where.id
    }
  }

  async updateMany(employmentUpdateManyArgs: Prisma.EmploymentUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(employmentDeleteArgs: Prisma.EmploymentDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(employmentDeleteManyArgs: Prisma.EmploymentDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(employmentAggregateArgs: Prisma.EmploymentAggregateArgs): Promise<Prisma.GetEmploymentAggregateType<Prisma.EmploymentAggregateArgs>> {
    return {
      _avg: this.employments[0],
      _count: true,
      _max: this.employments[0],
      _min: this.employments[this.employments.length - 1],
      _sum: this.employments[0]
    }
  }

  async count(employmentCountArgs: Prisma.EmploymentCountArgs): Promise<number> {
    return this.employments.length;
  }
}
