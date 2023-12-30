import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramController } from './program.controller';
import { FakeProgramController } from './program.controller.fake';
import { PrismaProgramController } from './program.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ProgramResolver,
    ProgramService,
    PrismaProgramController,
    FakeProgramController,
    {
      provide: ProgramController,
      inject: [ConfigService, PrismaProgramController, FakeProgramController],
      useFactory: (config: ConfigService, prisma: PrismaProgramController, fake: FakeProgramController) => {
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
      provide: ProgramController,
      inject: [ConfigService, PrismaProgramController, FakeProgramController],
      useFactory: (config: ConfigService, prisma: PrismaProgramController, fake: FakeProgramController) => {
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
export class ProgramModule {}

