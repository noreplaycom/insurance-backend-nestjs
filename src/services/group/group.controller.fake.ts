import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GroupController } from './group.controller';
import { Group } from 'src/@generated';
import { fakeGroupComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeGroupController implements GroupController {
  private groups: Group[] = [];

  constructor() {}

  async createOne(groupCreateArgs: Prisma.GroupCreateArgs): Promise<Group> {
    const fake = fakeGroupComplete()
    this.groups.push(fake);
    return fake;
  }

  async createMany(groupCreateManyArgs: Prisma.GroupCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = groupCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.groups.push(fakeGroupComplete());
      }
      return { count: totalFake };
    } else {
      this.groups.push(fakeGroupComplete());
      return { count: 1 }
    }
  }

  async findOne(groupFindUniqueArgs: Prisma.GroupFindUniqueArgs): Promise<Group> {
    return this.groups.find(group => group.id === groupFindUniqueArgs.where.id);
  }

  async findMany(groupFindManyArgs: Prisma.GroupFindManyArgs): Promise<Group[]> {
    return this.groups.filter(group => group);
  }

  async findFirst(groupFindFirstArgs: Prisma.GroupFindFirstArgs): Promise<Group> {
    return this.groups.find(group => group);
  }

  async updateOne(groupUpdateOneArgs: Prisma.GroupUpdateArgs): Promise<Group> {
    const idx = this.groups.findIndex(group => group.id === groupUpdateOneArgs.where.id);
    this.groups[idx] = {
      ...fakeGroupComplete(),
      id: groupUpdateOneArgs.where.id
    }
    return {
      ...fakeGroupComplete(),
      id: groupUpdateOneArgs.where.id
    }
  }

  async updateMany(groupUpdateManyArgs: Prisma.GroupUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(groupDeleteArgs: Prisma.GroupDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(groupDeleteManyArgs: Prisma.GroupDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(groupAggregateArgs: Prisma.GroupAggregateArgs): Promise<Prisma.GetGroupAggregateType<Prisma.GroupAggregateArgs>> {
    return {
      _avg: this.groups[0],
      _count: true,
      _max: this.groups[0],
      _min: this.groups[this.groups.length - 1],
      _sum: this.groups[0]
    }
  }

  async count(groupCountArgs: Prisma.GroupCountArgs): Promise<number> {
    return this.groups.length;
  }
}
