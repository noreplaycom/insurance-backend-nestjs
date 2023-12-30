import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { File } from 'src/@generated';

@Injectable()
export class PrismaFileController implements FileController {
  constructor(private readonly fileService: FileService) {}

  async createOne(fileCreateArgs: Prisma.FileCreateArgs): Promise<File> {
    return await this.fileService.createOne(fileCreateArgs);
  }

  async createMany(fileCreateManyArgs: Prisma.FileCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.fileService.createMany(fileCreateManyArgs);
  }

  async findOne(fileFindUniqueArgs: Prisma.FileFindUniqueArgs): Promise<File> {
    return await this.fileService.findOne(fileFindUniqueArgs);
  }

  async findMany(fileFindManyArgs: Prisma.FileFindManyArgs): Promise<File[]> {
    return await this.fileService.findMany(fileFindManyArgs);
  }

  async findFirst(fileFindFirstArgs: Prisma.FileFindFirstArgs): Promise<File> {
    return await this.fileService.findFirst(fileFindFirstArgs);
  }

  async updateOne(fileUpdateOneArgs: Prisma.FileUpdateArgs): Promise<File> {
    return await this.fileService.updateOne(fileUpdateOneArgs);
  }

  async updateMany(fileUpdateManyArgs: Prisma.FileUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.fileService.updateMany(fileUpdateManyArgs);
  }

  async delete(fileDeleteArgs: Prisma.FileDeleteArgs): Promise<boolean> {
    return await this.fileService.delete(fileDeleteArgs);
  }

  async deleteMany(fileDeleteManyArgs: Prisma.FileDeleteManyArgs): Promise<boolean> {
    return await this.fileService.deleteMany(fileDeleteManyArgs);
  }

  async aggregate(fileAggregateArgs: Prisma.FileAggregateArgs): Promise<Prisma.GetFileAggregateType<Prisma.FileAggregateArgs>> {
    return await this.fileService.aggregate(fileAggregateArgs);
  }

  async count(fileCountArgs: Prisma.FileCountArgs): Promise<number> {
    return await this.fileService.count(fileCountArgs);
  }
}
