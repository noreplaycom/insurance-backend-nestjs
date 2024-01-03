// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateUser,
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserAggregateArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
} from 'src/@generated';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { UserController } from './user.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { UserCreateOneAsParticipantArgs } from './dto/user_create_one_as_participant';
import { UserFindOneByIdArgs } from './dto/user_find_one';
import { UserUpdateOneByIdArgs } from './dto/user_update_one';
import { UserDeleteOneByIdArgs } from './dto/user_delete_one';

interface UserSelect {
  select: Prisma.UserSelect;
}

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userCreateOne(
  //   @Args()
  //   userCreateArgs: CreateOneUserArgs,
  //   @Relations() relations: UserSelect,
  // ): Promise<User | void> {
  //   return await this.userController.createOne({
  //     ...userCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userCreateMany(
  //   @Args()
  //   createManyUserArgs: CreateManyUserArgs,
  // ) {
  //   return await this.userController.createMany(createManyUserArgs);
  // }

  // @Query(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userFindOne(
  //   @Args()
  //   userFindUniqueArgs: FindUniqueUserArgs,
  //   @Relations() relations: UserSelect,
  // ): Promise<User | void> {
  //   return this.userController.findOne({
  //     ...userFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [User], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userFindMany(
  //   @Args() userFindManyArgs: FindManyUserArgs,
  //   @Relations() relations: UserSelect,
  // ) {
  //   return this.userController.findMany({
  //     ...userFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userFindFirst(
  //   @Args()
  //   findFirstUserArgs: FindFirstUserArgs,
  //   @Relations() relations: UserSelect,
  // ): Promise<User | void> {
  //   return this.userController.findFirst({
  //     ...findFirstUserArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userUpdateOne(
  //   @Args() userUpdateOneArgs: UpdateOneUserArgs,
  //   @Relations() relations: UserSelect,
  // ) {
  //   return this.userController.updateOne({
  //     ...replaceNullWithUndefined(userUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => User, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userUpdateMany(@Args() updateManyUserArgs: UpdateManyUserArgs) {
  //   return this.userController.updateMany(updateManyUserArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userDeleteOne(
  //   @Args() deleteOneUserArgs: DeleteOneUserArgs,
  //   @Relations() relations: UserSelect,
  // ) {
  //   return this.userController.delete({
  //     ...deleteOneUserArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async userDeleteMany(@Args() deleteManyUserArgs: DeleteManyUserArgs) {
  //   return this.userController.deleteMany(deleteManyUserArgs);
  // }

  // @Query(() => AggregateUser, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userAggregate(@Args() userAggregateArgs: UserAggregateArgs) {
  //   return this.userController.aggregate(userAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // userCount(@Args() userCountAggregateInput: FindManyUserArgs) {
  //   return this.userController.count(userCountAggregateInput);
  // }

  // ? CLAIM LIST SCREEN
  @Query(() => [User], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindMany(
    @Relations() relations: UserSelect,
  ) {
    return this.userController.findManyNotParticipant({
      select: relations.select,
    });
  }

  // ? PARTICIPANT FORM SCREEN
  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userCreateOne(
    @Args('userCreateOneAsParticipantArgs') userCreateOneAsParticipantArgs: UserCreateOneAsParticipantArgs,
    // @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return await this.userController.createOneAsParticipant(userCreateOneAsParticipantArgs);
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindOne(
    @Args('userFindOneByIdArgs') userFindOneByIdArgs: UserFindOneByIdArgs,
    // @Relations() relations: UserSelect,
  ): Promise<User | void> {
    return this.userController.findOneById(userFindOneByIdArgs);
  }

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userUpdateOne(
    @Args('userUpdateOneByIdArgs') userUpdateOneByIdArgs: UserUpdateOneByIdArgs,
    // @Relations() relations: UserSelect,
  ) {
    return this.userController.updateOneById(userUpdateOneByIdArgs);
  }

  // ? USER LIST SCREEN
  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async userDeleteOne(
    @Args('userDeleteOneByIdArgs') userDeleteOneByIdArgs: UserDeleteOneByIdArgs,
    // @Relations() relations: UserSelect,
  ) {
    return this.userController.delete(userDeleteOneByIdArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async userImport(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ) {
    const { createReadStream } = file;
    const stream = createReadStream();
    const chunks = [];
    await new Promise<Buffer>((resolve, reject) => {
      let buffer: Buffer;
      stream.on('data', function (chunk: any) {
        chunks.push(chunk);
      });
      stream.on('end', function () {
        buffer = Buffer.concat(chunks);
        resolve(buffer);
      });
      stream.on('error', reject);
    });
    const result = Buffer.concat(chunks);
    // const workbook = (read(result))
    // console.log(workbook.SheetNames)
    // const sheet = workbook.Sheets['Sheet 1']
    // console.log(utils.sheet_to_json(sheet))
    return true
  }

  @Query(() => String, {
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async userExport() {
    return 'https://dsaagroup.com/uploaded_file/user.xlsx'
  }
}
