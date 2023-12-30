import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Region } from 'src/@generated';

@Injectable()
export abstract class RegionController {
  abstract createOne(regionCreateArgs: Prisma.RegionCreateArgs): Promise<Region>;

  abstract createMany(regionCreateManyArgs: Prisma.RegionCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(regionFindUniqueArgs: Prisma.RegionFindUniqueArgs): Promise<Region>;

  abstract findMany(regionFindManyArgs: Prisma.RegionFindManyArgs): Promise<Region[]>;

  abstract findFirst(regionFindFirstArgs: Prisma.RegionFindFirstArgs): Promise<Region>;

  abstract updateOne(regionUpdateOneArgs: Prisma.RegionUpdateArgs): Promise<Region>;

  abstract updateMany(regionUpdateManyArgs: Prisma.RegionUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(regionDeleteArgs: Prisma.RegionDeleteArgs): Promise<boolean>;

  abstract deleteMany(regionDeleteManyArgs: Prisma.RegionDeleteManyArgs): Promise<boolean>;

  abstract aggregate(regionAggregateArgs: Prisma.RegionAggregateArgs): Promise<Prisma.GetRegionAggregateType<Prisma.RegionAggregateArgs>>;

  abstract count(regionCountArgs: Prisma.RegionCountArgs): Promise<number>;
}
