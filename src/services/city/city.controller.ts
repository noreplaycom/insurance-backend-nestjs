import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { City } from 'src/@generated';

@Injectable()
export abstract class CityController {
  abstract createOne(cityCreateArgs: Prisma.CityCreateArgs): Promise<City>;

  abstract createMany(cityCreateManyArgs: Prisma.CityCreateManyArgs): Promise<Prisma.BatchPayload>;

  abstract findOne(cityFindUniqueArgs: Prisma.CityFindUniqueArgs): Promise<City>;

  abstract findMany(cityFindManyArgs: Prisma.CityFindManyArgs): Promise<City[]>;

  abstract findFirst(cityFindFirstArgs: Prisma.CityFindFirstArgs): Promise<City>;

  abstract updateOne(cityUpdateOneArgs: Prisma.CityUpdateArgs): Promise<City>;

  abstract updateMany(cityUpdateManyArgs: Prisma.CityUpdateManyArgs): Promise<Prisma.BatchPayload>;

  abstract delete(cityDeleteArgs: Prisma.CityDeleteArgs): Promise<boolean>;

  abstract deleteMany(cityDeleteManyArgs: Prisma.CityDeleteManyArgs): Promise<boolean>;

  abstract aggregate(cityAggregateArgs: Prisma.CityAggregateArgs): Promise<Prisma.GetCityAggregateType<Prisma.CityAggregateArgs>>;

  abstract count(cityCountArgs: Prisma.CityCountArgs): Promise<number>;
}
