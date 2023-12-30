import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { EmploymentResolver } from './employment.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { EmploymentController } from './employment.controller';
import { FakeEmploymentController } from './employment.controller.fake';
import { PrismaEmploymentController } from './employment.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    EmploymentResolver,
    EmploymentService,
    PrismaEmploymentController,
    FakeEmploymentController,
    {
      provide: EmploymentController,
      inject: [ConfigService, PrismaEmploymentController, FakeEmploymentController],
      useFactory: (config: ConfigService, prisma: PrismaEmploymentController, fake: FakeEmploymentController) => {
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
      provide: EmploymentController,
      inject: [ConfigService, PrismaEmploymentController, FakeEmploymentController],
      useFactory: (config: ConfigService, prisma: PrismaEmploymentController, fake: FakeEmploymentController) => {
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
export class EmploymentModule {}

