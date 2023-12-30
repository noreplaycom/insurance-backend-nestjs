import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { FileController } from './file.controller';
import { FakeFileController } from './file.controller.fake';
import { PrismaFileController } from './file.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    FileResolver,
    FileService,
    PrismaFileController,
    FakeFileController,
    {
      provide: FileController,
      inject: [ConfigService, PrismaFileController, FakeFileController],
      useFactory: (config: ConfigService, prisma: PrismaFileController, fake: FakeFileController) => {
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
      provide: FileController,
      inject: [ConfigService, PrismaFileController, FakeFileController],
      useFactory: (config: ConfigService, prisma: PrismaFileController, fake: FakeFileController) => {
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
export class FileModule {}

