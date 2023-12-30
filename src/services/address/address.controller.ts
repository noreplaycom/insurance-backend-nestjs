import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Address } from 'src/@generated';

@Injectable()
export abstract class AddressController {
  abstract createOne(addressCreateArgs: Prisma.AddressCreateArgs): Promise<Address>;

  abstract createMany(addressCreateManyArgs: Prisma.AddressCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(addressFindUniqueArgs: Prisma.AddressFindUniqueArgs): Promise<Address>;

  abstract findMany(addressFindManyArgs: Prisma.AddressFindManyArgs): Promise<Address[]>;

  abstract findFirst(addressFindFirstArgs: Prisma.AddressFindFirstArgs): Promise<Address>;

  abstract updateOne(addressUpdateOneArgs: Prisma.AddressUpdateArgs): Promise<Address>;

  abstract updateMany(addressUpdateManyArgs: Prisma.AddressUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(addressDeleteArgs: Prisma.AddressDeleteArgs): Promise<boolean>;

  abstract deleteMany(addressDeleteManyArgs: Prisma.AddressDeleteManyArgs): Promise<boolean>;

  abstract aggregate(addressAggregateArgs: Prisma.AddressAggregateArgs): Promise<Prisma.GetAddressAggregateType<Prisma.AddressAggregateArgs>>;

  abstract count(addressCountArgs: Prisma.AddressCountArgs): Promise<number>;
}
