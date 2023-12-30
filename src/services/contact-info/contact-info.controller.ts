import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ContactInfo } from 'src/@generated';

@Injectable()
export abstract class ContactInfoController {
  abstract createOne(contactInfoCreateArgs: Prisma.ContactInfoCreateArgs): Promise<ContactInfo>;

  abstract createMany(contactInfoCreateManyArgs: Prisma.ContactInfoCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(contactInfoFindUniqueArgs: Prisma.ContactInfoFindUniqueArgs): Promise<ContactInfo>;

  abstract findMany(contactInfoFindManyArgs: Prisma.ContactInfoFindManyArgs): Promise<ContactInfo[]>;

  abstract findFirst(contactInfoFindFirstArgs: Prisma.ContactInfoFindFirstArgs): Promise<ContactInfo>;

  abstract updateOne(contactInfoUpdateOneArgs: Prisma.ContactInfoUpdateArgs): Promise<ContactInfo>;

  abstract updateMany(contactInfoUpdateManyArgs: Prisma.ContactInfoUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(contactInfoDeleteArgs: Prisma.ContactInfoDeleteArgs): Promise<boolean>;

  abstract deleteMany(contactInfoDeleteManyArgs: Prisma.ContactInfoDeleteManyArgs): Promise<boolean>;

  abstract aggregate(contactInfoAggregateArgs: Prisma.ContactInfoAggregateArgs): Promise<Prisma.GetContactInfoAggregateType<Prisma.ContactInfoAggregateArgs>>;

  abstract count(contactInfoCountArgs: Prisma.ContactInfoCountArgs): Promise<number>;
}
