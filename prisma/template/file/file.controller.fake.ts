import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FileController } from './file.controller';
import { File } from 'src/@generated';
import { fakeFileComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeFileController implements FileController {
  private files: File[] = [];

  constructor() {}

  async createOne(fileCreateArgs: Prisma.FileCreateArgs): Promise<File> {
    const fake = fakeFileComplete()
    this.files.push(fake);
    return fake;
  }

  async createMany(fileCreateManyArgs: Prisma.FileCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = fileCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.files.push(fakeFileComplete());
      }
      return { count: totalFake };
    } else {
      this.files.push(fakeFileComplete());
      return { count: 1 }
    }
  }

  async findOne(fileFindUniqueArgs: Prisma.FileFindUniqueArgs): Promise<File> {
    return this.files.find(file => file.id === fileFindUniqueArgs.where.id);
  }

  async findMany(fileFindManyArgs: Prisma.FileFindManyArgs): Promise<File[]> {
    return this.files.filter(file => file);
  }

  async findFirst(fileFindFirstArgs: Prisma.FileFindFirstArgs): Promise<File> {
    return this.files.find(file => file);
  }

  async updateOne(fileUpdateOneArgs: Prisma.FileUpdateArgs): Promise<File> {
    const idx = this.files.findIndex(file => file.id === fileUpdateOneArgs.where.id);
    this.files[idx] = {
      ...fakeFileComplete(),
      id: fileUpdateOneArgs.where.id
    }
    return {
      ...fakeFileComplete(),
      id: fileUpdateOneArgs.where.id
    }
  }

  async updateMany(fileUpdateManyArgs: Prisma.FileUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(fileDeleteArgs: Prisma.FileDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(fileDeleteManyArgs: Prisma.FileDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(fileAggregateArgs: Prisma.FileAggregateArgs): Promise<Prisma.GetFileAggregateType<Prisma.FileAggregateArgs>> {
    return {
      _avg: this.files[0],
      _count: true,
      _max: this.files[0],
      _min: this.files[this.files.length - 1],
      _sum: this.files[0]
    }
  }

  async count(fileCountArgs: Prisma.FileCountArgs): Promise<number> {
    return this.files.length;
  }
}
