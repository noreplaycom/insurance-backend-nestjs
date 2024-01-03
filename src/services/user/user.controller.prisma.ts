import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/@generated';
import { UserCreateOneAsParticipantArgs } from './dto/user_create_one_as_participant';
import { UserFindOneByIdArgs } from './dto/user_find_one';
import { UserUpdateOneByIdArgs } from './dto/user_update_one';
import { UserDeleteOneByIdArgs } from './dto/user_delete_one';

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

  async findManyNotParticipant(): Promise<User[]> {
    return [];
  }

  async createOneAsParticipant(userCreateOneAsParticipantArgs: UserCreateOneAsParticipantArgs): Promise<User> {
    return await this.userService.findFirst({});
  }

  async findOneById(userFindOneByIdArgs: UserFindOneByIdArgs): Promise<User> {
    return await this.userService.findFirst({});
  }

  async updateOneById(userUpdateOneByIdArgs: UserUpdateOneByIdArgs): Promise<User> {
    return await this.userService.findFirst({});
  }

  async deleteById(userDeleteOneByIdArgs: UserDeleteOneByIdArgs): Promise<boolean> {
    return true
  }
}
