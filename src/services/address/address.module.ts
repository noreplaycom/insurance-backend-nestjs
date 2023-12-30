import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AddressController } from './address.controller';
import { FakeAddressController } from './address.controller.fake';
import { PrismaAddressController } from './address.controller.prisma';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    ConfigModule,
    PrismaService,
    AddressResolver,
    AddressService,
    PrismaAddressController,
    FakeAddressController,
    {
      provide: AddressController,
      inject: [ConfigService, PrismaAddressController, FakeAddressController],
      useFactory: (config: ConfigService, prisma: PrismaAddressController, fake: FakeAddressController) => {
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
      provide: AddressController,
      inject: [ConfigService, PrismaAddressController, FakeAddressController],
      useFactory: (config: ConfigService, prisma: PrismaAddressController, fake: FakeAddressController) => {
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
export class AddressModule {}

