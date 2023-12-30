import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { FileController } from './file.controller';
import { FakeFileController } from './file.controller.fake';

@Module({
  providers: [
    PrismaService,
    FileResolver,
    FileService,
    {
      provide: FileController,
      useClass: FakeFileController,
    }
  ],
  exports: [
    {
      provide: FileController,
      useClass: FakeFileController,
    }
  ],
})
export class FileModule {}
