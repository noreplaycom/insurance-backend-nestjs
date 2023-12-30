import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/@generated';

@Injectable()
export class PrismaUserController implements UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs): Promise<User> {
    return await this.userService.createOne(userCreateArgs);
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.userService.createMany(userCreateManyArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs): Promise<User> {
    return await this.userService.findOne(userFindUniqueArgs);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs): Promise<User[]> {
    return await this.userService.findMany(userFindManyArgs);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs): Promise<User> {
    return await this.userService.findFirst(userFindFirstArgs);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs): Promise<User> {
    return await this.userService.updateOne(userUpdateOneArgs);
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs): Promise<boolean> {
    return await this.userService.delete(userDeleteArgs);
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs): Promise<boolean> {
    return await this.userService.deleteMany(userDeleteManyArgs);
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs): Promise<Prisma.GetUserAggregateType<Prisma.UserAggregateArgs>> {
    return await this.userService.aggregate(userAggregateArgs);
  }

  async count(userCountArgs: Prisma.UserCountArgs): Promise<number> {
    return await this.userService.count(userCountArgs);
  }
}
