import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddressController } from './address.controller';
import { Address } from 'src/@generated';
import { fakeAddressComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeAddressController implements AddressController {
  private addresss: Address[] = [];

  constructor() {}

  async createOne(addressCreateArgs: Prisma.AddressCreateArgs): Promise<Address> {
    const fake = fakeAddressComplete()
    this.addresss.push(fake);
    return fake;
  }

  async createMany(addressCreateManyArgs: Prisma.AddressCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = addressCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.addresss.push(fakeAddressComplete());
      }
      return { count: totalFake };
    } else {
      this.addresss.push(fakeAddressComplete());
      return { count: 1 }
    }
  }

  async findOne(addressFindUniqueArgs: Prisma.AddressFindUniqueArgs): Promise<Address> {
    return this.addresss.find(address => address.id === addressFindUniqueArgs.where.id);
  }

  async findMany(addressFindManyArgs: Prisma.AddressFindManyArgs): Promise<Address[]> {
    return this.addresss.filter(address => address);
  }

  async findFirst(addressFindFirstArgs: Prisma.AddressFindFirstArgs): Promise<Address> {
    return this.addresss.find(address => address);
  }

  async updateOne(addressUpdateOneArgs: Prisma.AddressUpdateArgs): Promise<Address> {
    const idx = this.addresss.findIndex(address => address.id === addressUpdateOneArgs.where.id);
    this.addresss[idx] = {
      ...fakeAddressComplete(),
      id: addressUpdateOneArgs.where.id
    }
    return {
      ...fakeAddressComplete(),
      id: addressUpdateOneArgs.where.id
    }
  }

  async updateMany(addressUpdateManyArgs: Prisma.AddressUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(addressDeleteArgs: Prisma.AddressDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(addressDeleteManyArgs: Prisma.AddressDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(addressAggregateArgs: Prisma.AddressAggregateArgs): Promise<Prisma.GetAddressAggregateType<Prisma.AddressAggregateArgs>> {
    return {
      _avg: this.addresss[0],
      _count: true,
      _max: this.addresss[0],
      _min: this.addresss[this.addresss.length - 1],
      _sum: this.addresss[0]
    }
  }

  async count(addressCountArgs: Prisma.AddressCountArgs): Promise<number> {
    return this.addresss.length;
  }
}
