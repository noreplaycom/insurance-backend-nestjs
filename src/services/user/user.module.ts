import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UserController } from './user.controller';
import { FakeUserController } from './user.controller.fake';
import { PrismaUserController } from './user.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    UserResolver,
    UserService,
    PrismaUserController,
    FakeUserController,
    {
      provide: UserController,
      inject: [ConfigService, PrismaUserController, FakeUserController],
      useFactory: (config: ConfigService, prisma: PrismaUserController, fake: FakeUserController) => {
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
      provide: UserController,
      inject: [ConfigService, PrismaUserController, FakeUserController],
      useFactory: (config: ConfigService, prisma: PrismaUserController, fake: FakeUserController) => {
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
export class UserModule {}

