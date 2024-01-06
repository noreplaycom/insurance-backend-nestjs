import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ContactInfoService } from './contact-info.service';

@Injectable()
export class ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  async createOne(contactInfoCreateArgs: Prisma.ContactInfoCreateArgs) {
    return await this.contactInfoService.createOne(contactInfoCreateArgs);
  }

  async createMany(contactInfoCreateManyArgs: Prisma.ContactInfoCreateManyArgs) {
    return await this.contactInfoService.createMany(contactInfoCreateManyArgs);
  }

  async findOne(contactInfoFindUniqueArgs: Prisma.ContactInfoFindUniqueArgs) {
    return await this.contactInfoService.findOne(contactInfoFindUniqueArgs);
  }

  async findMany(contactInfoFindManyArgs: Prisma.ContactInfoFindManyArgs) {
    return await this.contactInfoService.findMany(contactInfoFindManyArgs);
  }

  async findFirst(contactInfoFindFirstArgs: Prisma.ContactInfoFindFirstArgs) {
    return await this.contactInfoService.findFirst(contactInfoFindFirstArgs);
  }

  async updateOne(contactInfoUpdateOneArgs: Prisma.ContactInfoUpdateArgs) {
    return await this.contactInfoService.updateOne(contactInfoUpdateOneArgs);
  }

  async updateMany(contactInfoUpdateManyArgs: Prisma.ContactInfoUpdateManyArgs) {
    return await this.contactInfoService.updateMany(contactInfoUpdateManyArgs);
  }

  async delete(contactInfoDeleteArgs: Prisma.ContactInfoDeleteArgs) {
    return await this.contactInfoService.delete(contactInfoDeleteArgs);
  }

  async deleteMany(contactInfoDeleteManyArgs: Prisma.ContactInfoDeleteManyArgs) {
    return await this.contactInfoService.deleteMany(contactInfoDeleteManyArgs);
  }

  async aggregate(contactInfoAggregateArgs: Prisma.ContactInfoAggregateArgs) {
    return await this.contactInfoService.aggregate(contactInfoAggregateArgs);
  }

  async count(contactInfoCountArgs: Prisma.ContactInfoCountArgs) {
    return await this.contactInfoService.count(contactInfoCountArgs);
  }
}
