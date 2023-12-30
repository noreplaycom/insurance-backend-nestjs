import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmploymentService } from './employment.service';
import { EmploymentController } from './employment.controller';
import { Employment } from 'src/@generated';

@Injectable()
export class PrismaEmploymentController implements EmploymentController {
  constructor(private readonly employmentService: EmploymentService) {}

  async createOne(employmentCreateArgs: Prisma.EmploymentCreateArgs): Promise<Employment> {
    return await this.employmentService.createOne(employmentCreateArgs);
  }

  async createMany(employmentCreateManyArgs: Prisma.EmploymentCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.employmentService.createMany(employmentCreateManyArgs);
  }

  async findOne(employmentFindUniqueArgs: Prisma.EmploymentFindUniqueArgs): Promise<Employment> {
    return await this.employmentService.findOne(employmentFindUniqueArgs);
  }

  async findMany(employmentFindManyArgs: Prisma.EmploymentFindManyArgs): Promise<Employment[]> {
    return await this.employmentService.findMany(employmentFindManyArgs);
  }

  async findFirst(employmentFindFirstArgs: Prisma.EmploymentFindFirstArgs): Promise<Employment> {
    return await this.employmentService.findFirst(employmentFindFirstArgs);
  }

  async updateOne(employmentUpdateOneArgs: Prisma.EmploymentUpdateArgs): Promise<Employment> {
    return await this.employmentService.updateOne(employmentUpdateOneArgs);
  }

  async updateMany(employmentUpdateManyArgs: Prisma.EmploymentUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.employmentService.updateMany(employmentUpdateManyArgs);
  }

  async delete(employmentDeleteArgs: Prisma.EmploymentDeleteArgs): Promise<boolean> {
    return await this.employmentService.delete(employmentDeleteArgs);
  }

  async deleteMany(employmentDeleteManyArgs: Prisma.EmploymentDeleteManyArgs): Promise<boolean> {
    return await this.employmentService.deleteMany(employmentDeleteManyArgs);
  }

  async aggregate(employmentAggregateArgs: Prisma.EmploymentAggregateArgs): Promise<Prisma.GetEmploymentAggregateType<Prisma.EmploymentAggregateArgs>> {
    return await this.employmentService.aggregate(employmentAggregateArgs);
  }

  async count(employmentCountArgs: Prisma.EmploymentCountArgs): Promise<number> {
    return await this.employmentService.count(employmentCountArgs);
  }

  async getEmploymentPosition(): Promise<string[]> {
    return [];
  }
}
