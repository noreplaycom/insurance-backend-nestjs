// @ts-nocheck
import { Resolver, Query, Mutation, Args, Int, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateClaim,
  CreateManyClaimArgs,
  CreateOneClaimArgs,
  DeleteManyClaimArgs,
  DeleteOneClaimArgs,
  FindFirstClaimArgs,
  FindManyClaimArgs,
  FindUniqueClaimArgs,
  Claim,
  ClaimAggregateArgs,
  UpdateManyClaimArgs,
  UpdateOneClaimArgs,
  Permission,
} from 'src/@generated';
import { ClaimController } from './claim.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import {
  ClaimCountQuantityByCustomRangeAndPeriodArgs,
  ClaimCountQuantityByCustomRangeAndPeriodQuery,
} from './dto/claim_count_quantity_by_custom_range_and_period';
import {
  ClaimCountTotalPercentageVsCustomPeriodArgs,
  ClaimCountTotalPercentageVsCustomPeriodQuery,
} from './dto/claim_count_total_percentage_vs_custom_period';
import {
  ClaimCountTotalByCustomRangeAndPeriodArgs,
  ClaimCountTotalByCustomRangeAndPeriodQuery,
} from './dto/claim_count_total_by_custom_range_and_period';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { ClaimFindOneByIdArgs } from './dto/claim_find_one_by_id';
import { ClaimUpdateOneOfStatusArgs } from './dto/claim_update_one_of_status';
// import { ClaimFormCreateOneArgs } from './dto/claim_create_one';
// import { ClaimCountQuantityWhereArgs } from './dto/claim_count_quantity_where';
import { ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { UseGuards } from '@nestjs/common';
import { RequiredPermission } from 'src/decorator/permission.decorator';
import { PermissionGuard } from '../role-permission/role-permission.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface ClaimSelect {
  select: Prisma.ClaimSelect;
}

// @UseGuards(JwtAuthGuard)
@Resolver(() => Claim)
export class ClaimResolver {
  constructor(private readonly claimController: ClaimController) {}

  // @RequiredPermission(Permission.CREATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimCreateOne(
    @Args()
    claimCreateArgs: CreateOneClaimArgs,
    @Relations() relations: ClaimSelect,
  ): Promise<Claim | void> {
    return await this.claimController.createOne({
      ...claimCreateArgs,
      select: relations.select,
    });
  }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimCreateMany(
  //   @Args()
  //   createManyClaimArgs: CreateManyClaimArgs,
  // ) {
  //   return await this.claimController.createMany(createManyClaimArgs);
  // }

  @Query(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindOne(
    @Args()
    claimFindUniqueArgs: FindUniqueClaimArgs,
    @Relations() relations: ClaimSelect,
  ): Promise<Claim | void> {
    return this.claimController.findOne({
      ...replaceNullWithUndefined(claimFindUniqueArgs),
      select: relations.select,
    });
  }

  @Query(() => [Claim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindMany(
    @Args() claimFindManyArgs: FindManyClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.findMany({
      ...replaceNullWithUndefined(claimFindManyArgs),
      select: relations.select,
    });
  }

  // @Query(() => Claim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFindFirst(
  //   @Args()
  //   findFirstClaimArgs: FindFirstClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ): Promise<Claim | void> {
  //   return this.claimController.findFirst({
  //     ...findFirstClaimArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Claim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimUpdateOne(
  //   @Args() claimUpdateOneArgs: UpdateOneClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ) {
  //   return this.claimController.updateOne({
  //     ...replaceNullWithUndefined(claimUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Claim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimUpdateMany(@Args() updateManyClaimArgs: UpdateManyClaimArgs) {
  //   return this.claimController.updateMany(updateManyClaimArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimDelete(
  //   @Args() deleteOneClaimArgs: DeleteOneClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ) {
  //   return this.claimController.delete({
  //     ...deleteOneClaimArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimDeleteMany(@Args() deleteManyClaimArgs: DeleteManyClaimArgs) {
  //   return this.claimController.deleteMany(deleteManyClaimArgs);
  // }

  // @Query(() => AggregateClaim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimAggregate(@Args() claimAggregateArgs: ClaimAggregateArgs) {
  //   return this.claimController.aggregate(claimAggregateArgs);
  // }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCount(@Args() claimCountAggregateInput: FindManyClaimArgs) {
    return this.claimController.count(claimCountAggregateInput);
  }

  // ? DASHBOARD SCREEN
  @Query(() => [ClaimCountQuantityByCustomRangeAndPeriodQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountQuantityByCustomRangeAndPeriod(
    @Args('claimCountQuantityByCustomRangeAndPeriodArgs')
    claimCountQuantityByCustomRangeAndPeriodArgs: ClaimCountQuantityByCustomRangeAndPeriodArgs,
  ) {
    return this.claimController.countQuantityByCustomRangeAndPeriod(
      claimCountQuantityByCustomRangeAndPeriodArgs,
    );
  }

  @Query(() => ClaimCountTotalPercentageVsCustomPeriodQuery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountTotalPercentageVsCustomPeriod(
    @Args('claimCountTotalPercentageVsCustomPeriodArgs')
    claimCountTotalPercentageVsCustomPeriod: ClaimCountTotalPercentageVsCustomPeriodArgs,
  ) {
    return this.claimController.countTotalPercentageVsCustomPeriod(
      claimCountTotalPercentageVsCustomPeriod,
    );
  }

  @Query(() => [ClaimCountTotalByCustomRangeAndPeriodQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountTotalByCustomRangeAndPeriod(
    @Args('claimCountTotalByCustomRangeAndPeriodArgs')
    claimCountTotalByCustomRangeAndPeriodArgs: ClaimCountTotalByCustomRangeAndPeriodArgs,
  ) {
    return this.claimController.countTotalByCustomRangeAndPeriod(
      claimCountTotalByCustomRangeAndPeriodArgs,
    );
  }

  @Query(() => [ClaimCountQuantityByStatusQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountQuantityByStatus() {
    return this.claimController.countQuantityByStatus();
  }

  // ! USED IN CLAIM LIST SCREEN AND EXPOSED QUERY
  @Query(() => [Claim], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindMany(
    @Args() claimFindManyArgs: FindManyClaimArgs,
    @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.findMany({
      ...claimFindManyArgs,
      select: relations.select,
    });
  }

  // ? CLAIM LIST SCREEN
  @Query(() => [String], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimChannelFindMany() {
    return this.claimController.claimChannelFindMany();
  }

  // @RequiredPermission(Permission.IMPORT_CLAIM)
  // @UseGuards(PermissionGuard)
  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async claimImport(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ) {
    return await this.claimController.import(file);
    //TODO: move to utility file/abstract this function
    //     const { createReadStream } = file;
    //     const stream = createReadStream();
    //     const chunks = [];
    //     await new Promise<Buffer>((resolve, reject) => {
    //       let buffer: Buffer;
    //       stream.on('data', function (chunk: any) {
    //         chunks.push(chunk);
    //       });
    //       stream.on('end', function () {
    //         buffer = Buffer.concat(chunks);
    //         resolve(buffer);
    //       });
    //       stream.on('error', reject);
    //     });
    //     const result = Buffer.concat(chunks);
    //     const workbook = read(result);
    //     console.log(workbook.SheetNames);
    //     const sheet = workbook.Sheets['Sheet 1'];
    //     console.log(utils.sheet_to_json(sheet));
    //     return true;
  }

  // @RequiredPermission(Permission.EXPORT_CLAIM)
  // @UseGuards(PermissionGuard)
  @Query(() => String, {
    description: 'deskripsi nya disini loh',
  })
  async claimExport() {
    return this.claimController.export();
  }

  // ? CLAIM DETAIL SCREEN

  // @RequiredPermission(Permission.UPDATE_CLAIM)
  // @UseGuards(PermissionGuard)
  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimUpdateOne(
    @Args('claimUpdateOneOfStatusArgs')
    claimUpdateOneOfStatusArgs: ClaimUpdateOneOfStatusArgs,
    // @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.updateOneOfStatus(ClaimUpdateOneOfStatusArgs);
  }

  @Mutation(() => String, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async claimFileUpload(
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
    return `https://dsaagroup.com/uploaded_file/${file.filename}`;
  }

  // ? CLAIM FORM SCREEN
  // @Mutation(() => Claim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimCreateOne(
  //   @Args('claimFormCreateOneArgs')
  //   claimFormCreateOneArgs: ClaimFormCreateOneArgs,
  //   // @Relations() relations: ClaimSelect,
  // ): Promise<Claim | void> {
  //   return await this.claimController.createOneForm(claimFormCreateOneArgs);
  // }

  // @Query(() => Int, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimCount(
  //   @Args('claimCountQuantityWhereArgs')
  //   claimCountQuantityWhereArgs: ClaimCountQuantityWhereArgs,
  // ) {
  //   return this.claimController.countWhere(claimCountQuantityWhereArgs);
  // }
}
