import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { ContactInfo } from 'src/@generated';

@Injectable()
export class PrismaContactInfoController implements ContactInfoController {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  async createOne(contactInfoCreateArgs: Prisma.ContactInfoCreateArgs): Promise<ContactInfo> {
    return await this.contactInfoService.createOne(contactInfoCreateArgs);
  }

  async createMany(contactInfoCreateManyArgs: Prisma.ContactInfoCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.contactInfoService.createMany(contactInfoCreateManyArgs);
  }

  async findOne(contactInfoFindUniqueArgs: Prisma.ContactInfoFindUniqueArgs): Promise<ContactInfo> {
    return await this.contactInfoService.findOne(contactInfoFindUniqueArgs);
  }

  async findMany(contactInfoFindManyArgs: Prisma.ContactInfoFindManyArgs): Promise<ContactInfo[]> {
    return await this.contactInfoService.findMany(contactInfoFindManyArgs);
  }

  async findFirst(contactInfoFindFirstArgs: Prisma.ContactInfoFindFirstArgs): Promise<ContactInfo> {
    return await this.contactInfoService.findFirst(contactInfoFindFirstArgs);
  }

  async updateOne(contactInfoUpdateOneArgs: Prisma.ContactInfoUpdateArgs): Promise<ContactInfo> {
    return await this.contactInfoService.updateOne(contactInfoUpdateOneArgs);
  }

  async updateMany(contactInfoUpdateManyArgs: Prisma.ContactInfoUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.contactInfoService.updateMany(contactInfoUpdateManyArgs);
  }

  async delete(contactInfoDeleteArgs: Prisma.ContactInfoDeleteArgs): Promise<boolean> {
    return await this.contactInfoService.delete(contactInfoDeleteArgs);
  }

  async deleteMany(contactInfoDeleteManyArgs: Prisma.ContactInfoDeleteManyArgs): Promise<boolean> {
    return await this.contactInfoService.deleteMany(contactInfoDeleteManyArgs);
  }

  async aggregate(contactInfoAggregateArgs: Prisma.ContactInfoAggregateArgs): Promise<Prisma.GetContactInfoAggregateType<Prisma.ContactInfoAggregateArgs>> {
    return await this.contactInfoService.aggregate(contactInfoAggregateArgs);
  }

  async count(contactInfoCountArgs: Prisma.ContactInfoCountArgs): Promise<number> {
    return await this.contactInfoService.count(contactInfoCountArgs);
  }
}
