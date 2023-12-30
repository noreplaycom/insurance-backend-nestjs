import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicResolver } from './clinic.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ClinicController } from './clinic.controller';
import { FakeClinicController } from './clinic.controller.fake';
import { PrismaClinicController } from './clinic.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    ClinicResolver,
    ClinicService,
    PrismaClinicController,
    FakeClinicController,
    {
      provide: ClinicController,
      inject: [ConfigService, PrismaClinicController, FakeClinicController],
      useFactory: (config: ConfigService, prisma: PrismaClinicController, fake: FakeClinicController) => {
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
      provide: ClinicController,
      inject: [ConfigService, PrismaClinicController, FakeClinicController],
      useFactory: (config: ConfigService, prisma: PrismaClinicController, fake: FakeClinicController) => {
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
export class ClinicModule {}

