import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ContactInfoController } from './contact-info.controller';
import { ContactInfo } from 'src/@generated';
import { fakeContactInfoComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeContactInfoController implements ContactInfoController {
  private contactInfos: ContactInfo[] = [];

  constructor() {}

  async createOne(contactInfoCreateArgs: Prisma.ContactInfoCreateArgs): Promise<ContactInfo> {
    const fake = fakeContactInfoComplete()
    this.contactInfos.push(fake);
    return fake;
  }

  async createMany(contactInfoCreateManyArgs: Prisma.ContactInfoCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = contactInfoCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.contactInfos.push(fakeContactInfoComplete());
      }
      return { count: totalFake };
    } else {
      this.contactInfos.push(fakeContactInfoComplete());
      return { count: 1 }
    }
  }

  async findOne(contactInfoFindUniqueArgs: Prisma.ContactInfoFindUniqueArgs): Promise<ContactInfo> {
    return this.contactInfos.find(contactInfo => contactInfo.id === contactInfoFindUniqueArgs.where.id);
  }

  async findMany(contactInfoFindManyArgs: Prisma.ContactInfoFindManyArgs): Promise<ContactInfo[]> {
    return this.contactInfos.filter(contactInfo => contactInfo);
  }

  async findFirst(contactInfoFindFirstArgs: Prisma.ContactInfoFindFirstArgs): Promise<ContactInfo> {
    return this.contactInfos.find(contactInfo => contactInfo);
  }

  async updateOne(contactInfoUpdateOneArgs: Prisma.ContactInfoUpdateArgs): Promise<ContactInfo> {
    const idx = this.contactInfos.findIndex(contactInfo => contactInfo.id === contactInfoUpdateOneArgs.where.id);
    this.contactInfos[idx] = {
      ...fakeContactInfoComplete(),
      id: contactInfoUpdateOneArgs.where.id
    }
    return {
      ...fakeContactInfoComplete(),
      id: contactInfoUpdateOneArgs.where.id
    }
  }

  async updateMany(contactInfoUpdateManyArgs: Prisma.ContactInfoUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(contactInfoDeleteArgs: Prisma.ContactInfoDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(contactInfoDeleteManyArgs: Prisma.ContactInfoDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(contactInfoAggregateArgs: Prisma.ContactInfoAggregateArgs): Promise<Prisma.GetContactInfoAggregateType<Prisma.ContactInfoAggregateArgs>> {
    return {
      _avg: this.contactInfos[0],
      _count: true,
      _max: this.contactInfos[0],
      _min: this.contactInfos[this.contactInfos.length - 1],
      _sum: this.contactInfos[0]
    }
  }

  async count(contactInfoCountArgs: Prisma.ContactInfoCountArgs): Promise<number> {
    return this.contactInfos.length;
  }
}
