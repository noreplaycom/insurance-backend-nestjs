import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserController } from './user.controller';
import { User } from 'src/@generated';
import { fakeUserComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeUserController implements UserController {
  private users: User[] = [];

  constructor() {
    const initial = 200;
    for (let i = 0; i < initial; i++) {
      this.users.push(fakeUserComplete());
    }
  }

  async createOne(userCreateArgs: Prisma.UserCreateArgs): Promise<User> {
    const fake = fakeUserComplete()
    this.users.push(fake);
    return fake;
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = userCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.users.push(fakeUserComplete());
      }
      return { count: totalFake };
    } else {
      this.users.push(fakeUserComplete());
      return { count: 1 }
    }
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs): Promise<User> {
    return this.users.find(user => user.id === userFindUniqueArgs.where.id);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.users.filter(user => user);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs): Promise<User> {
    return this.users.find(user => user);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs): Promise<User> {
    const idx = this.users.findIndex(user => user.id === userUpdateOneArgs.where.id);
    this.users[idx] = {
      ...fakeUserComplete(),
      id: userUpdateOneArgs.where.id
    }
    return {
      ...fakeUserComplete(),
      id: userUpdateOneArgs.where.id
    }
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs): Promise<Prisma.GetUserAggregateType<Prisma.UserAggregateArgs>> {
    return {
      _avg: this.users[0],
      _count: true,
      _max: this.users[0],
      _min: this.users[this.users.length - 1],
      _sum: this.users[0]
    }
  }

  async count(userCountArgs: Prisma.UserCountArgs): Promise<number> {
    return this.users.length;
  }
}
