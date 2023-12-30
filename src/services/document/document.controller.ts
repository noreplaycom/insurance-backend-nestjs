import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Document } from 'src/@generated';

@Injectable()
export abstract class DocumentController {
  abstract createOne(documentCreateArgs: Prisma.DocumentCreateArgs): Promise<Document>;

  abstract createMany(documentCreateManyArgs: Prisma.DocumentCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(documentFindUniqueArgs: Prisma.DocumentFindUniqueArgs): Promise<Document>;

  abstract findMany(documentFindManyArgs: Prisma.DocumentFindManyArgs): Promise<Document[]>;

  abstract findFirst(documentFindFirstArgs: Prisma.DocumentFindFirstArgs): Promise<Document>;

  abstract updateOne(documentUpdateOneArgs: Prisma.DocumentUpdateArgs): Promise<Document>;

  abstract updateMany(documentUpdateManyArgs: Prisma.DocumentUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(documentDeleteArgs: Prisma.DocumentDeleteArgs): Promise<boolean>;

  abstract deleteMany(documentDeleteManyArgs: Prisma.DocumentDeleteManyArgs): Promise<boolean>;

  abstract aggregate(documentAggregateArgs: Prisma.DocumentAggregateArgs): Promise<Prisma.GetDocumentAggregateType<Prisma.DocumentAggregateArgs>>;

  abstract count(documentCountArgs: Prisma.DocumentCountArgs): Promise<number>;
}
