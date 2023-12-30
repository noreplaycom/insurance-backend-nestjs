import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ParticipantController } from './participant.controller';
import { FakeParticipantController } from './participant.controller.fake';
import { PrismaParticipantController } from './participant.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ParticipantResolver,
    ParticipantService,
    PrismaParticipantController,
    FakeParticipantController,
    {
      provide: ParticipantController,
      inject: [ConfigService, PrismaParticipantController, FakeParticipantController],
      useFactory: (config: ConfigService, prisma: PrismaParticipantController, fake: FakeParticipantController) => {
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
      provide: ParticipantController,
      inject: [ConfigService, PrismaParticipantController, FakeParticipantController],
      useFactory: (config: ConfigService, prisma: PrismaParticipantController, fake: FakeParticipantController) => {
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
export class ParticipantModule {}

