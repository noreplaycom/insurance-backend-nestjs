import { Module } from '@nestjs/common';
import { ProgramParticipationService } from './program-participation.service';
import { ProgramParticipationResolver } from './program-participation.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramParticipationController } from './program-participation.controller';
import { FakeProgramParticipationController } from './program-participation.controller.fake';
import { PrismaProgramParticipationController } from './program-participation.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ProgramParticipationResolver,
    ProgramParticipationService,
    PrismaProgramParticipationController,
    FakeProgramParticipationController,
    {
      provide: ProgramParticipationController,
      inject: [ConfigService, PrismaProgramParticipationController, FakeProgramParticipationController],
      useFactory: (config: ConfigService, prisma: PrismaProgramParticipationController, fake: FakeProgramParticipationController) => {
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
      provide: ProgramParticipationController,
      inject: [ConfigService, PrismaProgramParticipationController, FakeProgramParticipationController],
      useFactory: (config: ConfigService, prisma: PrismaProgramParticipationController, fake: FakeProgramParticipationController) => {
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
export class ProgramParticipationModule {}

