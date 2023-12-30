import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DiseaseController } from './disease.controller';
import { Disease } from 'src/@generated';
import { fakeDiseaseComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeDiseaseController implements DiseaseController {
  private diseases: Disease[] = [];

  constructor() {}

  async createOne(diseaseCreateArgs: Prisma.DiseaseCreateArgs): Promise<Disease> {
    const fake = fakeDiseaseComplete()
    this.diseases.push(fake);
    return fake;
  }

  async createMany(diseaseCreateManyArgs: Prisma.DiseaseCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = diseaseCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.diseases.push(fakeDiseaseComplete());
      }
      return { count: totalFake };
    } else {
      this.diseases.push(fakeDiseaseComplete());
      return { count: 1 }
    }
  }

  async findOne(diseaseFindUniqueArgs: Prisma.DiseaseFindUniqueArgs): Promise<Disease> {
    return this.diseases.find(disease => disease.id === diseaseFindUniqueArgs.where.id);
  }

  async findMany(diseaseFindManyArgs: Prisma.DiseaseFindManyArgs): Promise<Disease[]> {
    return this.diseases.filter(disease => disease);
  }

  async findFirst(diseaseFindFirstArgs: Prisma.DiseaseFindFirstArgs): Promise<Disease> {
    return this.diseases.find(disease => disease);
  }

  async updateOne(diseaseUpdateOneArgs: Prisma.DiseaseUpdateArgs): Promise<Disease> {
    const idx = this.diseases.findIndex(disease => disease.id === diseaseUpdateOneArgs.where.id);
    this.diseases[idx] = {
      ...fakeDiseaseComplete(),
      id: diseaseUpdateOneArgs.where.id
    }
    return {
      ...fakeDiseaseComplete(),
      id: diseaseUpdateOneArgs.where.id
    }
  }

  async updateMany(diseaseUpdateManyArgs: Prisma.DiseaseUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(diseaseDeleteArgs: Prisma.DiseaseDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(diseaseDeleteManyArgs: Prisma.DiseaseDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(diseaseAggregateArgs: Prisma.DiseaseAggregateArgs): Promise<Prisma.GetDiseaseAggregateType<Prisma.DiseaseAggregateArgs>> {
    return {
      _avg: this.diseases[0],
      _count: true,
      _max: this.diseases[0],
      _min: this.diseases[this.diseases.length - 1],
      _sum: this.diseases[0]
    }
  }

  async count(diseaseCountArgs: Prisma.DiseaseCountArgs): Promise<number> {
    return this.diseases.length;
  }
}
