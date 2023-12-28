// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateBankAccount,
  CreateManyBankAccountArgs,
  CreateOneBankAccountArgs,
  DeleteManyBankAccountArgs,
  DeleteOneBankAccountArgs,
  FindFirstBankAccountArgs,
  FindManyBankAccountArgs,
  FindUniqueBankAccountArgs,
  BankAccount,
  BankAccountAggregateArgs,
  UpdateManyBankAccountArgs,
  UpdateOneBankAccountArgs,
} from 'src/@generated';
import { BankAccountController } from './bankAccount.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface BankAccountSelect {
  select: Prisma.BankAccountSelect;
}

@Resolver(() => BankAccount)
export class BankAccountResolver {
  constructor(private readonly bankAccountController: BankAccountController) {}

  @Mutation(() => BankAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountCreateOne(
    @Args()
    bankAccountCreateArgs: CreateOneBankAccountArgs,
    @Relations() relations: BankAccountSelect,
  ): Promise<BankAccount | void> {
    return await this.bankAccountController.createOne({
      ...bankAccountCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountCreateMany(
    @Args()
    createManyBankAccountArgs: CreateManyBankAccountArgs,
  ) {
    return await this.bankAccountController.createMany(createManyBankAccountArgs);
  }

  @Query(() => BankAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankAccountFindOne(
    @Args()
    bankAccountFindUniqueArgs: FindUniqueBankAccountArgs,
    @Relations() relations: BankAccountSelect,
  ): Promise<BankAccount | void> {
    return this.bankAccountController.findOne({
      ...bankAccountFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [BankAccount], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankAccountFindMany(
    @Args() bankAccountFindManyArgs: FindManyBankAccountArgs,
    @Relations() relations: BankAccountSelect,
  ) {
    return this.bankAccountController.findMany({
      ...bankAccountFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => BankAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankAccountFindFirst(
    @Args()
    findFirstBankAccountArgs: FindFirstBankAccountArgs,
    @Relations() relations: BankAccountSelect,
  ): Promise<BankAccount | void> {
    return this.bankAccountController.findFirst({
      ...findFirstBankAccountArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BankAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountUpdateOne(
    @Args() bankAccountUpdateOneArgs: UpdateOneBankAccountArgs,
    @Relations() relations: BankAccountSelect,
  ) {
    return this.bankAccountController.updateOne({
      ...replaceNullWithUndefined(bankAccountUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BankAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountUpdateMany(@Args() updateManyBankAccountArgs: UpdateManyBankAccountArgs) {
    return this.bankAccountController.updateMany(updateManyBankAccountArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountDelete(
    @Args() deleteOneBankAccountArgs: DeleteOneBankAccountArgs,
    @Relations() relations: BankAccountSelect,
  ) {
    return this.bankAccountController.delete({
      ...deleteOneBankAccountArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountDeleteMany(@Args() deleteManyBankAccountArgs: DeleteManyBankAccountArgs) {
    return this.bankAccountController.deleteMany(deleteManyBankAccountArgs);
  }

  @Query(() => AggregateBankAccount, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankAccountAggregate(@Args() bankAccountAggregateArgs: BankAccountAggregateArgs) {
    return this.bankAccountController.aggregate(bankAccountAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  bankAccountCount(@Args() bankAccountCountAggregateInput: FindManyBankAccountArgs) {
    return this.bankAccountController.count(bankAccountCountAggregateInput);
  }
}
