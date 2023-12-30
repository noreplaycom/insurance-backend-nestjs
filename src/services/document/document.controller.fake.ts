import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DocumentController } from './document.controller';
import { Document } from 'src/@generated';
import { fakeDocumentComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeDocumentController implements DocumentController {
  private documents: Document[] = [];

  constructor() {}

  async createOne(documentCreateArgs: Prisma.DocumentCreateArgs): Promise<Document> {
    const fake = fakeDocumentComplete()
    this.documents.push(fake);
    return fake;
  }

  async createMany(documentCreateManyArgs: Prisma.DocumentCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = documentCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.documents.push(fakeDocumentComplete());
      }
      return { count: totalFake };
    } else {
      this.documents.push(fakeDocumentComplete());
      return { count: 1 }
    }
  }

  async findOne(documentFindUniqueArgs: Prisma.DocumentFindUniqueArgs): Promise<Document> {
    return this.documents.find(document => document.id === documentFindUniqueArgs.where.id);
  }

  async findMany(documentFindManyArgs: Prisma.DocumentFindManyArgs): Promise<Document[]> {
    return this.documents.filter(document => document);
  }

  async findFirst(documentFindFirstArgs: Prisma.DocumentFindFirstArgs): Promise<Document> {
    return this.documents.find(document => document);
  }

  async updateOne(documentUpdateOneArgs: Prisma.DocumentUpdateArgs): Promise<Document> {
    const idx = this.documents.findIndex(document => document.id === documentUpdateOneArgs.where.id);
    this.documents[idx] = {
      ...fakeDocumentComplete(),
      id: documentUpdateOneArgs.where.id
    }
    return {
      ...fakeDocumentComplete(),
      id: documentUpdateOneArgs.where.id
    }
  }

  async updateMany(documentUpdateManyArgs: Prisma.DocumentUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(documentDeleteArgs: Prisma.DocumentDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(documentDeleteManyArgs: Prisma.DocumentDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(documentAggregateArgs: Prisma.DocumentAggregateArgs): Promise<Prisma.GetDocumentAggregateType<Prisma.DocumentAggregateArgs>> {
    return {
      _avg: this.documents[0],
      _count: true,
      _max: this.documents[0],
      _min: this.documents[this.documents.length - 1],
      _sum: this.documents[0]
    }
  }

  async count(documentCountArgs: Prisma.DocumentCountArgs): Promise<number> {
    return this.documents.length;
  }
}
