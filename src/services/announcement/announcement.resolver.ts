// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateAnnouncement,
  CreateManyAnnouncementArgs,
  CreateOneAnnouncementArgs,
  DeleteManyAnnouncementArgs,
  DeleteOneAnnouncementArgs,
  FindFirstAnnouncementArgs,
  FindManyAnnouncementArgs,
  FindUniqueAnnouncementArgs,
  Announcement,
  AnnouncementAggregateArgs,
  UpdateManyAnnouncementArgs,
  UpdateOneAnnouncementArgs,
} from 'src/@generated';
import { AnnouncementController } from './announcement.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface AnnouncementSelect {
  select: Prisma.AnnouncementSelect;
}

@Resolver(() => Announcement)
export class AnnouncementResolver {
  constructor(private readonly announcementController: AnnouncementController) {}

  @Mutation(() => Announcement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async announcementCreateOne(
    @Args()
    announcementCreateArgs: CreateOneAnnouncementArgs,
    @Relations() relations: AnnouncementSelect,
  ): Promise<Announcement | void> {
    return await this.announcementController.createOne({
      ...announcementCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async announcementCreateMany(
    @Args()
    createManyAnnouncementArgs: CreateManyAnnouncementArgs,
  ) {
    return await this.announcementController.createMany(createManyAnnouncementArgs);
  }

  @Query(() => Announcement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  announcementFindOne(
    @Args()
    announcementFindUniqueArgs: FindUniqueAnnouncementArgs,
    @Relations() relations: AnnouncementSelect,
  ): Promise<Announcement | void> {
    return this.announcementController.findOne({
      ...announcementFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Announcement], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  announcementFindMany(
    @Args() announcementFindManyArgs: FindManyAnnouncementArgs,
    @Relations() relations: AnnouncementSelect,
  ) {
    return this.announcementController.findMany({
      ...announcementFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Announcement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  announcementFindFirst(
    @Args()
    findFirstAnnouncementArgs: FindFirstAnnouncementArgs,
    @Relations() relations: AnnouncementSelect,
  ): Promise<Announcement | void> {
    return this.announcementController.findFirst({
      ...findFirstAnnouncementArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Announcement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async announcementUpdateOne(
    @Args() announcementUpdateOneArgs: UpdateOneAnnouncementArgs,
    @Relations() relations: AnnouncementSelect,
  ) {
    return this.announcementController.updateOne({
      ...replaceNullWithUndefined(announcementUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Announcement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async announcementUpdateMany(@Args() updateManyAnnouncementArgs: UpdateManyAnnouncementArgs) {
    return this.announcementController.updateMany(updateManyAnnouncementArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async announcementDelete(
    @Args() deleteOneAnnouncementArgs: DeleteOneAnnouncementArgs,
    @Relations() relations: AnnouncementSelect,
  ) {
    return this.announcementController.delete({
      ...deleteOneAnnouncementArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async announcementDeleteMany(@Args() deleteManyAnnouncementArgs: DeleteManyAnnouncementArgs) {
    return this.announcementController.deleteMany(deleteManyAnnouncementArgs);
  }

  @Query(() => AggregateAnnouncement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  announcementAggregate(@Args() announcementAggregateArgs: AnnouncementAggregateArgs) {
    return this.announcementController.aggregate(announcementAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  announcementCount(@Args() announcementCountAggregateInput: FindManyAnnouncementArgs) {
    return this.announcementController.count(announcementCountAggregateInput);
  }
}
