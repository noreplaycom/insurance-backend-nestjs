// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateEmployment,
  CreateManyEmploymentArgs,
  CreateOneEmploymentArgs,
  DeleteManyEmploymentArgs,
  DeleteOneEmploymentArgs,
  FindFirstEmploymentArgs,
  FindManyEmploymentArgs,
  FindUniqueEmploymentArgs,
  Employment,
  EmploymentAggregateArgs,
  UpdateManyEmploymentArgs,
  UpdateOneEmploymentArgs,
} from 'src/@generated';
import { EmploymentController } from './employment.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface EmploymentSelect {
  select: Prisma.EmploymentSelect;
}

@Resolver(() => Employment)
export class EmploymentResolver {
  constructor(private readonly employmentController: EmploymentController) {}

  // @Mutation(() => Employment, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async employmentCreateOne(
  //   @Args()
  //   employmentCreateArgs: CreateOneEmploymentArgs,
  //   @Relations() relations: EmploymentSelect,
  // ): Promise<Employment | void> {
  //   return await this.employmentController.createOne({
  //     ...employmentCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async employmentCreateMany(
  //   @Args()
  //   createManyEmploymentArgs: CreateManyEmploymentArgs,
  // ) {
  //   return await this.employmentController.createMany(createManyEmploymentArgs);
  // }

  // @Query(() => Employment, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // employmentFindOne(
  //   @Args()
  //   employmentFindUniqueArgs: FindUniqueEmploymentArgs,
  //   @Relations() relations: EmploymentSelect,
  // ): Promise<Employment | void> {
  //   return this.employmentController.findOne({
  //     ...employmentFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [Employment], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // employmentFindMany(
  //   @Args() employmentFindManyArgs: FindManyEmploymentArgs,
  //   @Relations() relations: EmploymentSelect,
  // ) {
  //   return this.employmentController.findMany({
  //     ...employmentFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => Employment, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // employmentFindFirst(
  //   @Args()
  //   findFirstEmploymentArgs: FindFirstEmploymentArgs,
  //   @Relations() relations: EmploymentSelect,
  // ): Promise<Employment | void> {
  //   return this.employmentController.findFirst({
  //     ...findFirstEmploymentArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Employment, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async employmentUpdateOne(
  //   @Args() employmentUpdateOneArgs: UpdateOneEmploymentArgs,
  //   @Relations() relations: EmploymentSelect,
  // ) {
  //   return this.employmentController.updateOne({
  //     ...replaceNullWithUndefined(employmentUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Employment, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async employmentUpdateMany(@Args() updateManyEmploymentArgs: UpdateManyEmploymentArgs) {
  //   return this.employmentController.updateMany(updateManyEmploymentArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async employmentDelete(
  //   @Args() deleteOneEmploymentArgs: DeleteOneEmploymentArgs,
  //   @Relations() relations: EmploymentSelect,
  // ) {
  //   return this.employmentController.delete({
  //     ...deleteOneEmploymentArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async employmentDeleteMany(@Args() deleteManyEmploymentArgs: DeleteManyEmploymentArgs) {
  //   return this.employmentController.deleteMany(deleteManyEmploymentArgs);
  // }

  // @Query(() => AggregateEmployment, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // employmentAggregate(@Args() employmentAggregateArgs: EmploymentAggregateArgs) {
  //   return this.employmentController.aggregate(employmentAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // employmentCount(@Args() employmentCountAggregateInput: FindManyEmploymentArgs) {
  //   return this.employmentController.count(employmentCountAggregateInput);
  // }

  @Query(() => [String], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  getEmploymentPosition() {
    return this.employmentController.getEmploymentPosition();
  }
}
