import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { Group } from 'src/@generated';

@Injectable()
export class PrismaGroupController implements GroupController {
  constructor(private readonly groupService: GroupService) {}

  async createOne(groupCreateArgs: Prisma.GroupCreateArgs): Promise<Group> {
    return await this.groupService.createOne(groupCreateArgs);
  }

  async createMany(groupCreateManyArgs: Prisma.GroupCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.groupService.createMany(groupCreateManyArgs);
  }

  async findOne(groupFindUniqueArgs: Prisma.GroupFindUniqueArgs): Promise<Group> {
    return await this.groupService.findOne(groupFindUniqueArgs);
  }

  async findMany(groupFindManyArgs: Prisma.GroupFindManyArgs): Promise<Group[]> {
    return await this.groupService.findMany(groupFindManyArgs);
  }

  async findFirst(groupFindFirstArgs: Prisma.GroupFindFirstArgs): Promise<Group> {
    return await this.groupService.findFirst(groupFindFirstArgs);
  }

  async updateOne(groupUpdateOneArgs: Prisma.GroupUpdateArgs): Promise<Group> {
    return await this.groupService.updateOne(groupUpdateOneArgs);
  }

  async updateMany(groupUpdateManyArgs: Prisma.GroupUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.groupService.updateMany(groupUpdateManyArgs);
  }

  async delete(groupDeleteArgs: Prisma.GroupDeleteArgs): Promise<boolean> {
    return await this.groupService.delete(groupDeleteArgs);
  }

  async deleteMany(groupDeleteManyArgs: Prisma.GroupDeleteManyArgs): Promise<boolean> {
    return await this.groupService.deleteMany(groupDeleteManyArgs);
  }

  async aggregate(groupAggregateArgs: Prisma.GroupAggregateArgs): Promise<Prisma.GetGroupAggregateType<Prisma.GroupAggregateArgs>> {
    return await this.groupService.aggregate(groupAggregateArgs);
  }

  async count(groupCountArgs: Prisma.GroupCountArgs): Promise<number> {
    return await this.groupService.count(groupCountArgs);
  }
}
