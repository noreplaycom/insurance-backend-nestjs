import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from 'src/@generated';
import { UserCreateOneAsParticipantArgs } from './dto/user_create_one_as_participant';
import { UserFindOneByIdArgs } from './dto/user_find_one';
import { UserUpdateOneByIdArgs } from './dto/user_update_one';
import { UserDeleteOneByIdArgs } from './dto/user_delete_one';

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
  
  abstract findManyNotParticipant(): Promise<User[]>;
  
  abstract createOneAsParticipant(userCreateOneAsParticipantArgs: UserCreateOneAsParticipantArgs): Promise<User>;
  
  abstract findOneById(userFindOneByIdArgs: UserFindOneByIdArgs): Promise<User>;
  
  abstract updateOneById(userUpdateOneByIdArgs: UserUpdateOneByIdArgs): Promise<User>;
  
  abstract deleteById(userDeleteOneByIdArgs: UserDeleteOneByIdArgs): Promise<boolean>;
}
