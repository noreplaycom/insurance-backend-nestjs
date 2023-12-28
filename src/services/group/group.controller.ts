import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GroupService } from './group.service';

@Injectable()
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  async createOne(groupCreateArgs: Prisma.GroupCreateArgs) {
    return await this.groupService.createOne(groupCreateArgs);
  }

  async createMany(groupCreateManyArgs: Prisma.GroupCreateManyArgs) {
    return await this.groupService.createMany(groupCreateManyArgs);
  }

  async findOne(groupFindUniqueArgs: Prisma.GroupFindUniqueArgs) {
    return await this.groupService.findOne(groupFindUniqueArgs);
  }

  async findMany(groupFindManyArgs: Prisma.GroupFindManyArgs) {
    return await this.groupService.findMany(groupFindManyArgs);
  }

  async findFirst(groupFindFirstArgs: Prisma.GroupFindFirstArgs) {
    return await this.groupService.findFirst(groupFindFirstArgs);
  }

  async updateOne(groupUpdateOneArgs: Prisma.GroupUpdateArgs) {
    return await this.groupService.updateOne(groupUpdateOneArgs);
  }

  async updateMany(groupUpdateManyArgs: Prisma.GroupUpdateManyArgs) {
    return await this.groupService.updateMany(groupUpdateManyArgs);
  }

  async delete(groupDeleteArgs: Prisma.GroupDeleteArgs) {
    return await this.groupService.delete(groupDeleteArgs);
  }

  async deleteMany(groupDeleteManyArgs: Prisma.GroupDeleteManyArgs) {
    return await this.groupService.deleteMany(groupDeleteManyArgs);
  }

  async aggregate(groupAggregateArgs: Prisma.GroupAggregateArgs) {
    return await this.groupService.aggregate(groupAggregateArgs);
  }

  async count(groupCountArgs: Prisma.GroupCountArgs) {
    return await this.groupService.count(groupCountArgs);
  }
}
