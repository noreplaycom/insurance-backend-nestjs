import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentResolver } from './document.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DocumentController } from './document.controller';
import { FakeDocumentController } from './document.controller.fake';
import { PrismaDocumentController } from './document.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    DocumentResolver,
    DocumentService,
    PrismaDocumentController,
    FakeDocumentController,
    {
      provide: DocumentController,
      inject: [ConfigService, PrismaDocumentController, FakeDocumentController],
      useFactory: (config: ConfigService, prisma: PrismaDocumentController, fake: FakeDocumentController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
          default:
            throw new Error('invalid datasource type')
        }
      },
    }
  ],
  exports: [
    {
      provide: DocumentController,
      inject: [ConfigService, PrismaDocumentController, FakeDocumentController],
      useFactory: (config: ConfigService, prisma: PrismaDocumentController, fake: FakeDocumentController) => {
        const datasourceType = config.get<string>('DATASOURCE_TYPE');
        switch (datasourceType) {
          case 'prisma':
            return prisma;
          case 'fake':
            return fake;
        }
      },
    }
  ],
})
export class DocumentModule {}

