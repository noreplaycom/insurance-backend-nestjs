// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateCompany,
  CreateManyCompanyArgs,
  CreateOneCompanyArgs,
  DeleteManyCompanyArgs,
  DeleteOneCompanyArgs,
  FindFirstCompanyArgs,
  FindManyCompanyArgs,
  FindUniqueCompanyArgs,
  Company,
  CompanyAggregateArgs,
  UpdateManyCompanyArgs,
  UpdateOneCompanyArgs,
} from 'src/@generated';
import { CompanyController } from './company.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface CompanySelect {
  select: Prisma.CompanySelect;
}

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyController: CompanyController) {}

  @Mutation(() => Company, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async companyCreateOne(
    @Args()
    companyCreateArgs: CreateOneCompanyArgs,
    @Relations() relations: CompanySelect,
  ): Promise<Company | void> {
    return await this.companyController.createOne({
      ...companyCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async companyCreateMany(
    @Args()
    createManyCompanyArgs: CreateManyCompanyArgs,
  ) {
    return await this.companyController.createMany(createManyCompanyArgs);
  }

  @Query(() => Company, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  companyFindOne(
    @Args()
    companyFindUniqueArgs: FindUniqueCompanyArgs,
    @Relations() relations: CompanySelect,
  ): Promise<Company | void> {
    return this.companyController.findOne({
      ...companyFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Company], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  companyFindMany(
    @Args() companyFindManyArgs: FindManyCompanyArgs,
    @Relations() relations: CompanySelect,
  ) {
    return this.companyController.findMany({
      ...companyFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Company, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  companyFindFirst(
    @Args()
    findFirstCompanyArgs: FindFirstCompanyArgs,
    @Relations() relations: CompanySelect,
  ): Promise<Company | void> {
    return this.companyController.findFirst({
      ...findFirstCompanyArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Company, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async companyUpdateOne(
    @Args() companyUpdateOneArgs: UpdateOneCompanyArgs,
    @Relations() relations: CompanySelect,
  ) {
    return this.companyController.updateOne({
      ...replaceNullWithUndefined(companyUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Company, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async companyUpdateMany(@Args() updateManyCompanyArgs: UpdateManyCompanyArgs) {
    return this.companyController.updateMany(updateManyCompanyArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async companyDelete(
    @Args() deleteOneCompanyArgs: DeleteOneCompanyArgs,
    @Relations() relations: CompanySelect,
  ) {
    return this.companyController.delete({
      ...deleteOneCompanyArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async companyDeleteMany(@Args() deleteManyCompanyArgs: DeleteManyCompanyArgs) {
    return this.companyController.deleteMany(deleteManyCompanyArgs);
  }

  @Query(() => AggregateCompany, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  companyAggregate(@Args() companyAggregateArgs: CompanyAggregateArgs) {
    return this.companyController.aggregate(companyAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  companyCount(@Args() companyCountAggregateInput: FindManyCompanyArgs) {
    return this.companyController.count(companyCountAggregateInput);
  }
}
