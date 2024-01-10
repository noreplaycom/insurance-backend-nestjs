import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmploymentService } from './employment.service';
import { Position } from 'src/@generated';

@Injectable()
export class EmploymentController {
  constructor(private readonly employmentService: EmploymentService) {}

  async createOne(employmentCreateArgs: Prisma.EmploymentCreateArgs) {
    return await this.employmentService.createOne(employmentCreateArgs);
  }

  async createMany(employmentCreateManyArgs: Prisma.EmploymentCreateManyArgs) {
    return await this.employmentService.createMany(employmentCreateManyArgs);
  }

  async findOne(employmentFindUniqueArgs: Prisma.EmploymentFindUniqueArgs) {
    return await this.employmentService.findOne(employmentFindUniqueArgs);
  }

  async findMany(employmentFindManyArgs: Prisma.EmploymentFindManyArgs) {
    return await this.employmentService.findMany(employmentFindManyArgs);
  }

  async findFirst(employmentFindFirstArgs: Prisma.EmploymentFindFirstArgs) {
    return await this.employmentService.findFirst(employmentFindFirstArgs);
  }

  async updateOne(employmentUpdateOneArgs: Prisma.EmploymentUpdateArgs) {
    return await this.employmentService.updateOne(employmentUpdateOneArgs);
  }

  async updateMany(employmentUpdateManyArgs: Prisma.EmploymentUpdateManyArgs) {
    return await this.employmentService.updateMany(employmentUpdateManyArgs);
  }

  async delete(employmentDeleteArgs: Prisma.EmploymentDeleteArgs) {
    return await this.employmentService.delete(employmentDeleteArgs);
  }

  async deleteMany(employmentDeleteManyArgs: Prisma.EmploymentDeleteManyArgs) {
    return await this.employmentService.deleteMany(employmentDeleteManyArgs);
  }

  async aggregate(employmentAggregateArgs: Prisma.EmploymentAggregateArgs) {
    return await this.employmentService.aggregate(employmentAggregateArgs);
  }

  async count(employmentCountArgs: Prisma.EmploymentCountArgs) {
    return await this.employmentService.count(employmentCountArgs);
  }

  async employmentPositionFindMany(): Promise<string[]> {
    return Object.keys(Position);
  }
}
