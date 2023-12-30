import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AddressController } from './address.controller';
import { FakeAddressController } from './address.controller.fake';

@Module({
  providers: [
    PrismaService,
    AddressResolver,
    AddressService,
    {
      provide: AddressController,
      useClass: FakeAddressController,
    }
  ],
  exports: [
    {
      provide: AddressController,
      useClass: FakeAddressController,
    }
  ],
})
export class AddressModule {}
