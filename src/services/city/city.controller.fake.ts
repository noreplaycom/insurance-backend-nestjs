import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CityController } from './city.controller';
import { City } from 'src/@generated';
import { fakeCityComplete } from '../../../prisma/fake-data';

@Injectable()
export class FakeCityController implements CityController {
  private citys: City[] = [];

  constructor() {}

  async createOne(cityCreateArgs: Prisma.CityCreateArgs): Promise<City> {
    const fake = fakeCityComplete()
    this.citys.push(fake);
    return fake;
  }

  async createMany(cityCreateManyArgs: Prisma.CityCreateManyArgs): Promise<Prisma.BatchPayload> {
    const fake = cityCreateManyArgs.data;
    if (Array.isArray(fake)) {
      const totalFake = fake.length;
      for (let i = 0; i < totalFake; i++) {
        this.citys.push(fakeCityComplete());
      }
      return { count: totalFake };
    } else {
      this.citys.push(fakeCityComplete());
      return { count: 1 }
    }
  }

  async findOne(cityFindUniqueArgs: Prisma.CityFindUniqueArgs): Promise<City> {
    return this.citys.find(city => city.id === cityFindUniqueArgs.where.id);
  }

  async findMany(cityFindManyArgs: Prisma.CityFindManyArgs): Promise<City[]> {
    return this.citys.filter(city => city);
  }

  async findFirst(cityFindFirstArgs: Prisma.CityFindFirstArgs): Promise<City> {
    return this.citys.find(city => city);
  }

  async updateOne(cityUpdateOneArgs: Prisma.CityUpdateArgs): Promise<City> {
    const idx = this.citys.findIndex(city => city.id === cityUpdateOneArgs.where.id);
    this.citys[idx] = {
      ...fakeCityComplete(),
      id: cityUpdateOneArgs.where.id
    }
    return {
      ...fakeCityComplete(),
      id: cityUpdateOneArgs.where.id
    }
  }

  async updateMany(cityUpdateManyArgs: Prisma.CityUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return { count: 10 }
  }

  async delete(cityDeleteArgs: Prisma.CityDeleteArgs): Promise<boolean> {
    return true
  }

  async deleteMany(cityDeleteManyArgs: Prisma.CityDeleteManyArgs): Promise<boolean> {
    return true
  }

  async aggregate(cityAggregateArgs: Prisma.CityAggregateArgs): Promise<Prisma.GetCityAggregateType<Prisma.CityAggregateArgs>> {
    return {
      _avg: this.citys[0],
      _count: true,
      _max: this.citys[0],
      _min: this.citys[this.citys.length - 1],
      _sum: this.citys[0]
    }
  }

  async count(cityCountArgs: Prisma.CityCountArgs): Promise<number> {
    return this.citys.length;
  }
}
