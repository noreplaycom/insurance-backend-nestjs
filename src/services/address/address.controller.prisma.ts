import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { Address } from 'src/@generated';

@Injectable()
export class PrismaAddressController implements AddressController {
  constructor(private readonly addressService: AddressService) {}

  async createOne(addressCreateArgs: Prisma.AddressCreateArgs): Promise<Address> {
    return await this.addressService.createOne(addressCreateArgs);
  }

  async createMany(addressCreateManyArgs: Prisma.AddressCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.addressService.createMany(addressCreateManyArgs);
  }

  async findOne(addressFindUniqueArgs: Prisma.AddressFindUniqueArgs): Promise<Address> {
    return await this.addressService.findOne(addressFindUniqueArgs);
  }

  async findMany(addressFindManyArgs: Prisma.AddressFindManyArgs): Promise<Address[]> {
    return await this.addressService.findMany(addressFindManyArgs);
  }

  async findFirst(addressFindFirstArgs: Prisma.AddressFindFirstArgs): Promise<Address> {
    return await this.addressService.findFirst(addressFindFirstArgs);
  }

  async updateOne(addressUpdateOneArgs: Prisma.AddressUpdateArgs): Promise<Address> {
    return await this.addressService.updateOne(addressUpdateOneArgs);
  }

  async updateMany(addressUpdateManyArgs: Prisma.AddressUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.addressService.updateMany(addressUpdateManyArgs);
  }

  async delete(addressDeleteArgs: Prisma.AddressDeleteArgs): Promise<boolean> {
    return await this.addressService.delete(addressDeleteArgs);
  }

  async deleteMany(addressDeleteManyArgs: Prisma.AddressDeleteManyArgs): Promise<boolean> {
    return await this.addressService.deleteMany(addressDeleteManyArgs);
  }

  async aggregate(addressAggregateArgs: Prisma.AddressAggregateArgs): Promise<Prisma.GetAddressAggregateType<Prisma.AddressAggregateArgs>> {
    return await this.addressService.aggregate(addressAggregateArgs);
  }

  async count(addressCountArgs: Prisma.AddressCountArgs): Promise<number> {
    return await this.addressService.count(addressCountArgs);
  }
}
