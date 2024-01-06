// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateBackup,
  CreateManyBackupArgs,
  CreateOneBackupArgs,
  DeleteManyBackupArgs,
  DeleteOneBackupArgs,
  FindFirstBackupArgs,
  FindManyBackupArgs,
  FindUniqueBackupArgs,
  Backup,
  BackupAggregateArgs,
  UpdateManyBackupArgs,
  UpdateOneBackupArgs,
} from 'src/@generated';
import { BackupController } from './backup.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface BackupSelect {
  select: Prisma.BackupSelect;
}

@Resolver(() => Backup)
export class BackupResolver {
  constructor(private readonly backupController: BackupController) {}

  @Mutation(() => Backup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async backupCreateOne(
    @Args()
    backupCreateArgs: CreateOneBackupArgs,
    @Relations() relations: BackupSelect,
  ): Promise<Backup | void> {
    return await this.backupController.createOne({
      ...backupCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async backupCreateMany(
    @Args()
    createManyBackupArgs: CreateManyBackupArgs,
  ) {
    return await this.backupController.createMany(createManyBackupArgs);
  }

  @Query(() => Backup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  backupFindOne(
    @Args()
    backupFindUniqueArgs: FindUniqueBackupArgs,
    @Relations() relations: BackupSelect,
  ): Promise<Backup | void> {
    return this.backupController.findOne({
      ...backupFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Backup], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  backupFindMany(
    @Args() backupFindManyArgs: FindManyBackupArgs,
    @Relations() relations: BackupSelect,
  ) {
    return this.backupController.findMany({
      ...backupFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Backup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  backupFindFirst(
    @Args()
    findFirstBackupArgs: FindFirstBackupArgs,
    @Relations() relations: BackupSelect,
  ): Promise<Backup | void> {
    return this.backupController.findFirst({
      ...findFirstBackupArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Backup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async backupUpdateOne(
    @Args() backupUpdateOneArgs: UpdateOneBackupArgs,
    @Relations() relations: BackupSelect,
  ) {
    return this.backupController.updateOne({
      ...replaceNullWithUndefined(backupUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Backup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async backupUpdateMany(@Args() updateManyBackupArgs: UpdateManyBackupArgs) {
    return this.backupController.updateMany(updateManyBackupArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async backupDelete(
    @Args() deleteOneBackupArgs: DeleteOneBackupArgs,
    @Relations() relations: BackupSelect,
  ) {
    return this.backupController.delete({
      ...deleteOneBackupArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async backupDeleteMany(@Args() deleteManyBackupArgs: DeleteManyBackupArgs) {
    return this.backupController.deleteMany(deleteManyBackupArgs);
  }

  @Query(() => AggregateBackup, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  backupAggregate(@Args() backupAggregateArgs: BackupAggregateArgs) {
    return this.backupController.aggregate(backupAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  backupCount(@Args() backupCountAggregateInput: FindManyBackupArgs) {
    return this.backupController.count(backupCountAggregateInput);
  }
}
