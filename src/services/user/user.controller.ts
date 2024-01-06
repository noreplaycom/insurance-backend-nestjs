import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
import { UserFindOneByIdArgs } from './dto/user_find_one';
import { UserUpdateOneByIdArgs } from './dto/user_update_one';
import { UserDeleteOneByIdArgs } from './dto/user_delete_one';
import { UserCreateOneAsParticipantArgs } from './dto/user_create_one_as_participant';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    //TODO: Auto create superuser when app first run. (username: superuser, password: superuser)
    //TODO: Auto assign role to participant when create user as participant
    return await this.userService.createOne(userCreateArgs);
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    return await this.userService.createMany(userCreateManyArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne(userFindUniqueArgs);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    return await this.userService.findMany(userFindManyArgs);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return await this.userService.findFirst(userFindFirstArgs);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    return await this.userService.updateOne(userUpdateOneArgs);
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    return await this.userService.delete(userDeleteArgs);
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    return await this.userService.deleteMany(userDeleteManyArgs);
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    return await this.userService.aggregate(userAggregateArgs);
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    return await this.userService.count(userCountArgs);
  }

  async findManyNotParticipant(): Promise<User[]> {
    return [];
  }

  async createOneAsParticipant(
    userCreateOneAsParticipantArgs: UserCreateOneAsParticipantArgs,
  ): Promise<User> {
    return await this.userService.findFirst({});
  }

  async findOneById(userFindOneByIdArgs: UserFindOneByIdArgs): Promise<User> {
    return await this.userService.findFirst({});
  }

  async updateOneById(
    userUpdateOneByIdArgs: UserUpdateOneByIdArgs,
  ): Promise<User> {
    return await this.userService.findFirst({});
  }

  async deleteById(
    userDeleteOneByIdArgs: UserDeleteOneByIdArgs,
  ): Promise<boolean> {
    return true;
  }
}
