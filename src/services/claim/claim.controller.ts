import { Injectable } from '@nestjs/common';
import { Period, Prisma } from '@prisma/client';
import { ClaimService } from './claim.service';
import { Claim, ClaimChannel, ClaimStatusType } from 'src/@generated';
import { ClaimFindOneByIdArgs } from './dto/claim_find_one_by_id';
import { ClaimUpdateOneOfStatusArgs } from './dto/claim_update_one_of_status';
import { ClaimFormCreateOneArgs } from './dto/claim_create_one';
import { ClaimCountQuantityWhereArgs } from './dto/claim_count_quantity_where';
import { ClaimCountQuantityByStatusQuery } from './dto/claim_count_quantity_by_status';
import { ClaimFinancialController } from '../claim-financial/claim-financial.controller';
import {
  ClaimCountQuantityByCustomRangeAndPeriodArgs,
  ClaimCountQuantityByCustomRangeAndPeriodQuery,
} from './dto/claim_count_quantity_by_custom_range_and_period';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';
import {
  ClaimCountTotalPercentageVsCustomPeriodArgs,
  ClaimCountTotalPercentageVsCustomPeriodQuery,
} from './dto/claim_count_total_percentage_vs_custom_period';
import {
  ClaimCountTotalByCustomRangeAndPeriodArgs,
  ClaimCountTotalByCustomRangeAndPeriodQuery,
} from './dto/claim_count_total_by_custom_range_and_period';
import { FileUpload } from 'graphql-upload';
import { createXLSX, readXLSX } from 'src/utils/excel.function';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import {
  detectMimeTypeFromFilename,
  mapFileTypeEnumFromMIME,
} from 'src/utils/mime-types.function';
import { FileType } from 'src/model/enums';
import { ConfigService } from '@nestjs/config';
import { ClaimFindManyByClaimIdsArgs } from './dto/claim_find_many_by_claim_ids';

@Injectable()
export class ClaimController {
  constructor(
    private readonly configService: ConfigService,
    private readonly claimService: ClaimService,
    private readonly claimFinancialController: ClaimFinancialController,
  ) {}

  async createOne(claimCreateArgs: Prisma.ClaimCreateArgs) {
    //TODO: Auto assign claim status to new claim on claimCreateArgs
    //TODO: send notification to higher user role when new claim created
    //TODO: prevent participant doing new claim from unparticipated program and unavailable program
    return await this.claimService.createOne(claimCreateArgs);
  }

  async createMany(claimCreateManyArgs: Prisma.ClaimCreateManyArgs) {
    return await this.claimService.createMany(claimCreateManyArgs);
  }

  async findOne(claimFindUniqueArgs: Prisma.ClaimFindUniqueArgs) {
    return await this.claimService.findOne(claimFindUniqueArgs);
  }

  async findMany(claimFindManyArgs: Prisma.ClaimFindManyArgs) {
    return await this.claimService.findMany(claimFindManyArgs);
  }

  async findFirst(claimFindFirstArgs: Prisma.ClaimFindFirstArgs) {
    return await this.claimService.findFirst(claimFindFirstArgs);
  }

  async updateOne(claimUpdateOneArgs: Prisma.ClaimUpdateArgs) {
    return await this.claimService.updateOne(claimUpdateOneArgs);
  }

  async updateMany(claimUpdateManyArgs: Prisma.ClaimUpdateManyArgs) {
    return await this.claimService.updateMany(claimUpdateManyArgs);
  }

  async delete(claimDeleteArgs: Prisma.ClaimDeleteArgs) {
    return await this.claimService.delete(claimDeleteArgs);
  }

  async deleteMany(claimDeleteManyArgs: Prisma.ClaimDeleteManyArgs) {
    return await this.claimService.deleteMany(claimDeleteManyArgs);
  }

  async aggregate(claimAggregateArgs: Prisma.ClaimAggregateArgs) {
    return await this.claimService.aggregate(claimAggregateArgs);
  }

  async count(claimCountArgs: Prisma.ClaimCountArgs) {
    return await this.claimService.count(claimCountArgs);
  }

  private periodValue(period: Period): string {
    switch (period) {
      case Period.MONTHLY:
        return 'last month';
      case Period.WEEKLY:
        return 'last week';
      case Period.YEARLY:
        return 'last year';
      default:
        return 'all time';
    }
  }

  async countQuantityByCustomRangeAndPeriod(
    args: ClaimCountQuantityByCustomRangeAndPeriodArgs,
  ): Promise<ClaimCountQuantityByCustomRangeAndPeriodQuery[]> {
    const { period, end, start } = args;
    const claimCounts: ClaimCountQuantityByCustomRangeAndPeriodQuery[] = [];

    if (period === Period.ALLTIME) {
      const countedClaim = await this.claimService.count({});
      claimCounts.push({
        period: new Date().toISOString(), // Convert date to string for consistent grouping
        quantityClaims: countedClaim,
      });
    } else {
      const spreadDate: Date[] = [];
      const countedClaims: Promise<number>[] = [];
      let startDate = new Date(start);

      while (startDate <= end) {
        const until = getNextPeriodDate(startDate, period);
        spreadDate.push(startDate);
        countedClaims.push(
          this.claimService.count({
            where: {
              createdAt: { gte: startDate, lt: until },
            },
          }),
        );
        startDate = until;
      }

      const spreadClaims = await Promise.all(countedClaims);

      spreadClaims.map((spreadClaim, index) =>
        claimCounts.push({
          period: spreadDate[index].toISOString(),
          quantityClaims: spreadClaim,
        }),
      );
    }

    return claimCounts;
  }

  async countTotalPercentageVsCustomPeriod(
    args: ClaimCountTotalPercentageVsCustomPeriodArgs,
  ): Promise<ClaimCountTotalPercentageVsCustomPeriodQuery> {
    const currentStartTime = new Date();
    const currentEndTime = new Date();
    const previousStartTime = new Date();
    const previousEndTime = new Date();

    switch (args.period) {
      case Period.MONTHLY:
        currentStartTime.setMonth(currentStartTime.getMonth() - 1);
        previousEndTime.setMonth(previousEndTime.getMonth() - 1);
        previousStartTime.setMonth(previousStartTime.getMonth() - 2);
      case Period.YEARLY:
        currentStartTime.setFullYear(currentStartTime.getFullYear() - 1);
        previousEndTime.setFullYear(previousEndTime.getFullYear() - 1);
        previousStartTime.setFullYear(previousStartTime.getFullYear() - 1);
      case Period.WEEKLY:
        currentStartTime.setDate(currentStartTime.getDate() - 7);
        previousEndTime.setDate(previousEndTime.getDate() - 7);
        previousStartTime.setDate(previousStartTime.getDate() - 7);
      default:
        currentStartTime.setDate(currentStartTime.getDate() + 0);
        previousEndTime.setDate(previousEndTime.getDate() + 0);
        previousStartTime.setDate(previousStartTime.getDate() + 0);
    }

    const [currentTimeTotalClaims, previousTimeTotalClaims] = await Promise.all(
      [
        this.claimFinancialController.aggregate({
          where: {
            claim: {
              createdAt: {
                gte: currentStartTime,
                lt: currentEndTime,
              },
            },
          },
          _sum: { paidAmount: true },
        }),
        this.claimFinancialController.aggregate({
          where: {
            claim: {
              createdAt: {
                gte: previousStartTime,
                lt: previousEndTime,
              },
            },
          },
          _sum: { paidAmount: true },
        }),
      ],
    );
    const currentTotalAmount = currentTimeTotalClaims._sum.paidAmount ?? 0;
    const previousTotalAmount = previousTimeTotalClaims._sum.paidAmount ?? 0;
    const diff = currentTotalAmount - previousTotalAmount;
    const percentage = diff ? (diff / previousTotalAmount) * 100 : 0;

    return {
      versus: this.periodValue(args.period),
      percentage,
      amount: currentTotalAmount,
    };
  }

  async countTotalByCustomRangeAndPeriod(
    args: ClaimCountTotalByCustomRangeAndPeriodArgs,
  ): Promise<ClaimCountTotalByCustomRangeAndPeriodQuery[]> {
    const { period, end, start } = args;
    const claimTotal: ClaimCountTotalByCustomRangeAndPeriodQuery[] = [];

    if (period === Period.ALLTIME) {
      const totalClaims = await this.claimFinancialController.aggregate({
        _sum: { paidAmount: true },
      });
      claimTotal.push({
        period: new Date().toISOString(), // Convert date to string for consistent grouping
        totalClaims: totalClaims._sum.paidAmount ?? 0,
      });
    } else {
      const spreadDate: Date[] = [];
      const totalClaims = [];
      let startDate = new Date(start);

      while (startDate <= end) {
        const until = getNextPeriodDate(startDate, period);
        spreadDate.push(startDate);
        totalClaims.push(
          this.claimFinancialController.aggregate({
            where: {
              claim: {
                createdAt: { gte: startDate, lt: until },
              },
            },
            _sum: { paidAmount: true },
          }),
        );
        startDate = until;
      }

      const spreadClaims = await Promise.all(totalClaims);

      spreadClaims.map((spreadClaim, index) =>
        claimTotal.push({
          period: spreadDate[index].toISOString(),
          totalClaims: spreadClaim._sum.paidAmount ?? 0,
        }),
      );
    }

    return claimTotal;
  }

  async countQuantityByStatus(): Promise<ClaimCountQuantityByStatusQuery[]> {
    const statuses: string[] = [];
    const quantities: Promise<number>[] = [];
    const countedQuantitiesByStatus: ClaimCountQuantityByStatusQuery[] = [];

    for (const key in ClaimStatusType) {
      statuses.push(key);
      quantities.push(
        this.claimService.count({
          where: {
            claimStatuses: {
              some: {
                type: key as ClaimStatusType,
              },
            },
          },
        }),
      );
    }

    const countedQuantities = await Promise.all(quantities);
    statuses.map((status, index) =>
      countedQuantitiesByStatus.push({
        status: status as ClaimStatusType,
        total: countedQuantities[index],
      }),
    );

    return countedQuantitiesByStatus;
  }

  async getClaimChannels(): Promise<string[]> {
    return Object.keys(ClaimChannel);
  }

  async findOneById(
    claimFindOneByIdArgs: ClaimFindOneByIdArgs,
  ): Promise<Claim> {
    return await this.claimService.findOne({
      where: { id: claimFindOneByIdArgs.id },
    });
  }

  async updateOneOfStatus(
    claimUpdateOneOfStatusArgs: ClaimUpdateOneOfStatusArgs,
  ): Promise<Claim> {
    return await this.claimService.findOne({
      where: { id: claimUpdateOneOfStatusArgs.id },
    });
  }

  // async countWhere(
  //   claimCountQuantityWhereArgs: ClaimCountQuantityWhereArgs,
  // ): Promise<number> {
  //   return await this.claimService.count(claimCountQuantityWhereArgs);
  // }

  async import(file: FileUpload): Promise<boolean> {
    //TODO: Permission check. jika user tidak memiliki permission untuk import, maka throw error

    const { createReadStream } = file;
    const mimeTypes = detectMimeTypeFromFilename(file.filename);
    const detectedFileTypes = mapFileTypeEnumFromMIME(mimeTypes);

    if (detectedFileTypes !== FileType.XLSX)
      throw new IGraphQLError({ code: 180002 });

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
    const data = readXLSX(result);
    const expectedHeaders = [
      'id',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'channel',
      'admedicaStatus',
      'company',
      'participantId',
      'claimFinancialId',
      'claimProcessId',
      'diseaseId',
      'clinicId',
      'inputedById',
      'programId',
    ];
    const headers = Object.keys(data ? data[0] : {});
    const validHeaders = expectedHeaders.every((expectedHeader) =>
      headers.includes(expectedHeader),
    );

    if (!validHeaders) throw new IGraphQLError({ code: 180001 });

    await this.claimService.createMany({
      data: data as Claim[],
      skipDuplicates: true,
    });
    return true;
  }

  async export() {
    const claims = await this.claimService.findMany({});
    const xlsxFilePath = await createXLSX(claims, 'claim');
    return this.configService.get('APP_URL') + xlsxFilePath;
  }

  async findManyByClaimIds(
    claimFindManyByClaimIdsArgs: ClaimFindManyByClaimIdsArgs,
  ) {
    return await this.claimService.findMany({
      where: {
        id: {
          in: claimFindManyByClaimIdsArgs.ids,
        },
      },
    });
  }
}
