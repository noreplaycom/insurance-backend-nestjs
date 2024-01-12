// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateContactInfo,
  CreateManyContactInfoArgs,
  CreateOneContactInfoArgs,
  DeleteManyContactInfoArgs,
  DeleteOneContactInfoArgs,
  FindFirstContactInfoArgs,
  FindManyContactInfoArgs,
  FindUniqueContactInfoArgs,
  ContactInfo,
  ContactInfoAggregateArgs,
  UpdateManyContactInfoArgs,
  UpdateOneContactInfoArgs,
} from 'src/@generated';
import { ContactInfoController } from './contact-info.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ContactInfoSelect {
  select: Prisma.ContactInfoSelect;
}

@Resolver(() => ContactInfo)
export class ContactInfoResolver {
  constructor(private readonly contactInfoController: ContactInfoController) {}

  // @Mutation(() => ContactInfo, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async contactInfoCreateOne(
  //   @Args()
  //   contactInfoCreateArgs: CreateOneContactInfoArgs,
  //   @Relations() relations: ContactInfoSelect,
  // ): Promise<ContactInfo | void> {
  //   return await this.contactInfoController.createOne({
  //     ...contactInfoCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async contactInfoCreateMany(
  //   @Args()
  //   createManyContactInfoArgs: CreateManyContactInfoArgs,
  // ) {
  //   return await this.contactInfoController.createMany(createManyContactInfoArgs);
  // }

  // @Query(() => ContactInfo, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // contactInfoFindOne(
  //   @Args()
  //   contactInfoFindUniqueArgs: FindUniqueContactInfoArgs,
  //   @Relations() relations: ContactInfoSelect,
  // ): Promise<ContactInfo | void> {
  //   return this.contactInfoController.findOne({
  //     ...contactInfoFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [ContactInfo], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // contactInfoFindMany(
  //   @Args() contactInfoFindManyArgs: FindManyContactInfoArgs,
  //   @Relations() relations: ContactInfoSelect,
  // ) {
  //   return this.contactInfoController.findMany({
  //     ...contactInfoFindManyArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => ContactInfo, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // contactInfoFindFirst(
  //   @Args()
  //   findFirstContactInfoArgs: FindFirstContactInfoArgs,
  //   @Relations() relations: ContactInfoSelect,
  // ): Promise<ContactInfo | void> {
  //   return this.contactInfoController.findFirst({
  //     ...findFirstContactInfoArgs,
  //     select: relations.select,
  //   });
  // }

  @Mutation(() => ContactInfo, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async contactInfoUpdateOne(
    @Args() contactInfoUpdateOneArgs: UpdateOneContactInfoArgs,
    @Relations() relations: ContactInfoSelect,
  ) {
    return this.contactInfoController.updateOne({
      ...replaceNullWithUndefined(contactInfoUpdateOneArgs),
      select: relations.select,
    });
  }

  // @Mutation(() => ContactInfo, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async contactInfoUpdateMany(@Args() updateManyContactInfoArgs: UpdateManyContactInfoArgs) {
  //   return this.contactInfoController.updateMany(updateManyContactInfoArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async contactInfoDelete(
  //   @Args() deleteOneContactInfoArgs: DeleteOneContactInfoArgs,
  //   @Relations() relations: ContactInfoSelect,
  // ) {
  //   return this.contactInfoController.delete({
  //     ...deleteOneContactInfoArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async contactInfoDeleteMany(@Args() deleteManyContactInfoArgs: DeleteManyContactInfoArgs) {
  //   return this.contactInfoController.deleteMany(deleteManyContactInfoArgs);
  // }

  // @Query(() => AggregateContactInfo, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // contactInfoAggregate(@Args() contactInfoAggregateArgs: ContactInfoAggregateArgs) {
  //   return this.contactInfoController.aggregate(contactInfoAggregateArgs);
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // contactInfoCount(@Args() contactInfoCountAggregateInput: FindManyContactInfoArgs) {
  //   return this.contactInfoController.count(contactInfoCountAggregateInput);
  // }
}
