import { Injectable } from '@nestjs/common';
import { DocumentSource, Prisma } from '@prisma/client';
import { DocumentService } from './document.service';

@Injectable()
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  async createOne(documentCreateArgs: Prisma.DocumentCreateArgs) {
    documentCreateArgs.data.size = 2;
    documentCreateArgs.data.source = DocumentSource.UPLOADED;
    documentCreateArgs.data.docxPath = 'https://exmaple.com';
    documentCreateArgs.data.pdfPath = 'https://exmaple.com';
    return await this.documentService.createOne(documentCreateArgs);
  }

  async createMany(documentCreateManyArgs: Prisma.DocumentCreateManyArgs) {
    return await this.documentService.createMany(documentCreateManyArgs);
  }

  async findOne(documentFindUniqueArgs: Prisma.DocumentFindUniqueArgs) {
    return await this.documentService.findOne(documentFindUniqueArgs);
  }

  async findMany(documentFindManyArgs: Prisma.DocumentFindManyArgs) {
    return await this.documentService.findMany(documentFindManyArgs);
  }

  async findFirst(documentFindFirstArgs: Prisma.DocumentFindFirstArgs) {
    return await this.documentService.findFirst(documentFindFirstArgs);
  }

  async updateOne(documentUpdateOneArgs: Prisma.DocumentUpdateArgs) {
    return await this.documentService.updateOne(documentUpdateOneArgs);
  }

  async updateMany(documentUpdateManyArgs: Prisma.DocumentUpdateManyArgs) {
    return await this.documentService.updateMany(documentUpdateManyArgs);
  }

  async delete(documentDeleteArgs: Prisma.DocumentDeleteArgs) {
    return await this.documentService.delete(documentDeleteArgs);
  }

  async deleteMany(documentDeleteManyArgs: Prisma.DocumentDeleteManyArgs) {
    return await this.documentService.deleteMany(documentDeleteManyArgs);
  }

  async aggregate(documentAggregateArgs: Prisma.DocumentAggregateArgs) {
    return await this.documentService.aggregate(documentAggregateArgs);
  }

  async count(documentCountArgs: Prisma.DocumentCountArgs) {
    return await this.documentService.count(documentCountArgs);
  }
}
