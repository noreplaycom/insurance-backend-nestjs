// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float, ResolveField, Parent } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  FindManyClaimArgs,
  Claim,
  FindUniqueClaimArgs,
  UpdateOneClaimArgs,
  CreateOneClaimArgs,
} from 'src/@generated';
import { ClaimController } from './claim.controller';
import { ClaimCountQuantityByCustomRangeAndPeriodArgs, ClaimCountQuantityByCustomRangeAndPeriodQuery } from './dto/claim_count_quantity_by_custom_range_and_period';
import { ClaimCountQuantityByStatusArgs, ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimCountTotalByCustomRangeAndPeriodArgs, ClaimCountTotalByCustomRangeAndPeriodQuery } from './dto/claim_count_total_by_custom_range_and_period';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import { ClaimCountTotalPercentageVsCustomPeriodArgs, ClaimCountTotalPercentageVsCustomPeriodQuery } from './dto/claim_count_total_percentage_vs_custom_period';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { ClaimFindOneByIdArgs } from './dto/claim_find_one_by_id';
import { ClaimUpdateOneOfStatusArgs } from './dto/claim_update_one_of_status';

interface ClaimSelect {
  select: Prisma.ClaimSelect;
}

// @UseGuards(AuthGuard)
@Resolver(() => Claim)
export class ClaimResolver {
  constructor(
    private readonly claimController: ClaimController,
  ) {}

  // @Mutation(() => Claim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async claimCreateOne(
  //   @Args()
  //   claimCreateArgs: CreateOneClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ): Promise<Claim | void> {
  //   return await this.claimController.createOne({
  //     ...claimCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => Claim, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFindOne(
  //   @Args() claimFindUniqueArgs: FindUniqueClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ) {
  //   return this.claimController.findOne({
  //     ...claimFindUniqueArgs,
  //     select: relations.select,
  //   });
  // }

  // @Query(() => [Claim], {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimFindMany(
  //   @Args() claimFindManyArgs: FindManyClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ) {
  //   return this.claimController.findMany({
  //     ...claimFindManyArgs,
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
  // async claimUpdateOneOfStatus(
  //   @Args() claimUpdateOneArgs: UpdateOneClaimArgs,
  //   @Relations() relations: ClaimSelect,
  // ) {
  //   return this.claimController.updateOne({
  //     ...replaceNullWithUndefined(claimUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Query(() => Float, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // claimCount(@Args() claimCountAggregateInput: FindManyClaimArgs) {
  //   return this.claimController.count(claimCountAggregateInput);
  // }
  
  // ? DASHBOARD SCREEN
  @Query(() => [ClaimCountQuantityByCustomRangeAndPeriodQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountQuantityByCustomRangeAndPeriod(
    @Args('claimCountQuantityByCustomRangeAndPeriodArgs') 
    claimCountQuantityByCustomRangeAndPeriodArgs: ClaimCountQuantityByCustomRangeAndPeriodArgs
  ) {
    return this.claimController.countQuantityByCustomRangeAndPeriod(claimCountQuantityByCustomRangeAndPeriodArgs);
  }

  @Query(() => ClaimCountTotalPercentageVsCustomPeriodQuery, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountTotalPercentageVsCustomPeriod(
    @Args('claimCountTotalPercentageVsCustomPeriodArgs')
    claimCountTotalPercentageVsCustomPeriod: ClaimCountTotalPercentageVsCustomPeriodArgs
  ) {
    return this.claimController.countTotalPercentageVsCustomPeriod(claimCountTotalPercentageVsCustomPeriod);
  }

  @Query(() => [ClaimCountTotalByCustomRangeAndPeriodQuery], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimCountTotalByCustomRangeAndPeriod(
    @Args('claimCountTotalByCustomRangeAndPeriodArgs') 
    claimCountTotalByCustomRangeAndPeriodArgs: ClaimCountTotalByCustomRangeAndPeriodArgs
  ) {
    return this.claimController.countTotalByCustomRangeAndPeriod(claimCountTotalByCustomRangeAndPeriodArgs);
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
    return this.claimController.getClaimChannels();
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async claimImport(
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
    const workbook = (read(result))
    console.log(workbook.SheetNames)
    const sheet = workbook.Sheets['Sheet 1']
    console.log(utils.sheet_to_json(sheet))
    return true
  }

  @Query(() => String, {
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async claimExport() {
    return 'https://dsaagroup.com/uploaded_file/claim.xlsx'
  }

  // ? CLAIM DETAIL SCREEN
  @Query(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  claimFindOne(
    @Args('claimFindOneByIdArgs') claimFindOneByIdArgs: ClaimFindOneByIdArgs,
    // @Relations() relations: ClaimSelect,
  ) {
    return this.claimController.findOneById(claimFindOneByIdArgs);
  }

  @Mutation(() => Claim, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async claimUpdateOne(
    @Args('claimUpdateOneOfStatusArgs') claimUpdateOneOfStatusArgs: ClaimUpdateOneOfStatusArgs,
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
    return `https://dsaagroup.com/uploaded_file/${file.filename}`
  }
}
