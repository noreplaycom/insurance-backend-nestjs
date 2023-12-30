import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { Document } from 'src/@generated';

@Injectable()
export class PrismaDocumentController implements DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  async createOne(documentCreateArgs: Prisma.DocumentCreateArgs): Promise<Document> {
    return await this.documentService.createOne(documentCreateArgs);
  }

  async createMany(documentCreateManyArgs: Prisma.DocumentCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.documentService.createMany(documentCreateManyArgs);
  }

  async findOne(documentFindUniqueArgs: Prisma.DocumentFindUniqueArgs): Promise<Document> {
    return await this.documentService.findOne(documentFindUniqueArgs);
  }

  async findMany(documentFindManyArgs: Prisma.DocumentFindManyArgs): Promise<Document[]> {
    return await this.documentService.findMany(documentFindManyArgs);
  }

  async findFirst(documentFindFirstArgs: Prisma.DocumentFindFirstArgs): Promise<Document> {
    return await this.documentService.findFirst(documentFindFirstArgs);
  }

  async updateOne(documentUpdateOneArgs: Prisma.DocumentUpdateArgs): Promise<Document> {
    return await this.documentService.updateOne(documentUpdateOneArgs);
  }

  async updateMany(documentUpdateManyArgs: Prisma.DocumentUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.documentService.updateMany(documentUpdateManyArgs);
  }

  async delete(documentDeleteArgs: Prisma.DocumentDeleteArgs): Promise<boolean> {
    return await this.documentService.delete(documentDeleteArgs);
  }

  async deleteMany(documentDeleteManyArgs: Prisma.DocumentDeleteManyArgs): Promise<boolean> {
    return await this.documentService.deleteMany(documentDeleteManyArgs);
  }

  async aggregate(documentAggregateArgs: Prisma.DocumentAggregateArgs): Promise<Prisma.GetDocumentAggregateType<Prisma.DocumentAggregateArgs>> {
    return await this.documentService.aggregate(documentAggregateArgs);
  }

  async count(documentCountArgs: Prisma.DocumentCountArgs): Promise<number> {
    return await this.documentService.count(documentCountArgs);
  }
}
