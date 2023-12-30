import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { City } from 'src/@generated';

@Injectable()
export class PrismaCityController implements CityController {
  constructor(private readonly cityService: CityService) {}

  async createOne(cityCreateArgs: Prisma.CityCreateArgs): Promise<City> {
    return await this.cityService.createOne(cityCreateArgs);
  }

  async createMany(cityCreateManyArgs: Prisma.CityCreateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.cityService.createMany(cityCreateManyArgs);
  }

  async findOne(cityFindUniqueArgs: Prisma.CityFindUniqueArgs): Promise<City> {
    return await this.cityService.findOne(cityFindUniqueArgs);
  }

  async findMany(cityFindManyArgs: Prisma.CityFindManyArgs): Promise<City[]> {
    return await this.cityService.findMany(cityFindManyArgs);
  }

  async findFirst(cityFindFirstArgs: Prisma.CityFindFirstArgs): Promise<City> {
    return await this.cityService.findFirst(cityFindFirstArgs);
  }

  async updateOne(cityUpdateOneArgs: Prisma.CityUpdateArgs): Promise<City> {
    return await this.cityService.updateOne(cityUpdateOneArgs);
  }

  async updateMany(cityUpdateManyArgs: Prisma.CityUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return await this.cityService.updateMany(cityUpdateManyArgs);
  }

  async delete(cityDeleteArgs: Prisma.CityDeleteArgs): Promise<boolean> {
    return await this.cityService.delete(cityDeleteArgs);
  }

  async deleteMany(cityDeleteManyArgs: Prisma.CityDeleteManyArgs): Promise<boolean> {
    return await this.cityService.deleteMany(cityDeleteManyArgs);
  }

  async aggregate(cityAggregateArgs: Prisma.CityAggregateArgs): Promise<Prisma.GetCityAggregateType<Prisma.CityAggregateArgs>> {
    return await this.cityService.aggregate(cityAggregateArgs);
  }

  async count(cityCountArgs: Prisma.CityCountArgs): Promise<number> {
    return await this.cityService.count(cityCountArgs);
  }
}
