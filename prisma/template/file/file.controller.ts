import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { File } from 'src/@generated';

@Injectable()
export abstract class FileController {
  abstract createOne(fileCreateArgs: Prisma.FileCreateArgs): Promise<File>;

  abstract createMany(fileCreateManyArgs: Prisma.FileCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(fileFindUniqueArgs: Prisma.FileFindUniqueArgs): Promise<File>;

  abstract findMany(fileFindManyArgs: Prisma.FileFindManyArgs): Promise<File[]>;

  abstract findFirst(fileFindFirstArgs: Prisma.FileFindFirstArgs): Promise<File>;

  abstract updateOne(fileUpdateOneArgs: Prisma.FileUpdateArgs): Promise<File>;

  abstract updateMany(fileUpdateManyArgs: Prisma.FileUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(fileDeleteArgs: Prisma.FileDeleteArgs): Promise<boolean>;

  abstract deleteMany(fileDeleteManyArgs: Prisma.FileDeleteManyArgs): Promise<boolean>;

  abstract aggregate(fileAggregateArgs: Prisma.FileAggregateArgs): Promise<Prisma.GetFileAggregateType<Prisma.FileAggregateArgs>>;

  abstract count(fileCountArgs: Prisma.FileCountArgs): Promise<number>;
}
