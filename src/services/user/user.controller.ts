import { Injectable, Logger } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
import { UserFindOneByIdArgs } from './dto/user_find_one';
import { UserUpdateOneByIdArgs } from './dto/user_update_one';
import { UserDeleteOneByIdArgs } from './dto/user_delete_one';
import { UserCreateOneAsParticipantArgs } from './dto/user_create_one_as_participant';
import { encryptUserPassword } from 'src/utils/bcrypt.function';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly logger = new Logger(UserController.name);

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    const { password } = userCreateArgs.data;

    //? Event 0000: encrypt user password
    //check if password is not null
    if (password) {
      userCreateArgs.data.password = await encryptUserPassword(password);
    }

    return await this.userService.createOne(userCreateArgs);
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    return await this.userService.createMany(userCreateManyArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne(userFindUniqueArgs);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    // filter not to show participant and deleted user
    userFindManyArgs.where = {
      ...userFindManyArgs.where,
      participant: null,
      deletedAt: { equals: null },
    };

    return await this.userService.findMany(userFindManyArgs);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return await this.userService.findFirst(userFindFirstArgs);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    const { password } = userUpdateOneArgs.data;

    //encrypt user password
    if (password) {
      //check if client querying password
      if (typeof password === 'object' && password.set) {
        userUpdateOneArgs.data.password = {
          set: await encryptUserPassword(password.set),
        };
      }
    }

    return await this.userService.updateOne(userUpdateOneArgs);
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userId: string) {
    //implement soft delete

    this.updateOne({
      where: { id: userId },
      data: { deletedAt: new Date() },
    });

    return true;
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
