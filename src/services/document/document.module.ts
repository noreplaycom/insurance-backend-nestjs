import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentResolver } from './document.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DocumentController } from './document.controller';
import { FakeDocumentController } from './document.controller.fake';

@Module({
  providers: [
    PrismaService,
    DocumentResolver,
    DocumentService,
    {
      provide: DocumentController,
      useClass: FakeDocumentController,
    }
  ],
  exports: [
    {
      provide: DocumentController,
      useClass: FakeDocumentController,
    }
  ],
})
export class DocumentModule {}
