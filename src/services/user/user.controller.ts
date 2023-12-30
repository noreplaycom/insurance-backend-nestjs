import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from 'src/@generated';

@Injectable()
export abstract class UserController {
  abstract createOne(userCreateArgs: Prisma.UserCreateArgs): Promise<User>;

  abstract createMany(userCreateManyArgs: Prisma.UserCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs): Promise<User>;

  abstract findMany(userFindManyArgs: Prisma.UserFindManyArgs): Promise<User[]>;

  abstract findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs): Promise<User>;

  abstract updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs): Promise<User>;

  abstract updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(userDeleteArgs: Prisma.UserDeleteArgs): Promise<boolean>;

  abstract deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs): Promise<boolean>;

  abstract aggregate(userAggregateArgs: Prisma.UserAggregateArgs): Promise<Prisma.GetUserAggregateType<Prisma.UserAggregateArgs>>;

  abstract count(userCountArgs: Prisma.UserCountArgs): Promise<number>;
}
