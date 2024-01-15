import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentResolver } from './document.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DocumentController } from './document.controller';

@Module({
  providers: [
    PrismaService,
    DocumentResolver,
    DocumentController,
    DocumentService,
  ],
  exports: [DocumentController],
})
export class DocumentModule {}
