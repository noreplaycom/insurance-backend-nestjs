import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class BankAccountService {
  constructor(private prisma: PrismaService) {}

  async createOne(bankAccountCreateArgs: Prisma.BankAccountCreateArgs) {
    try {
      return await this.prisma.bankAccount.create(bankAccountCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(bankAccountCreateManyArgs: Prisma.BankAccountCreateManyArgs) {
    try {
      return await this.prisma.bankAccount.createMany(bankAccountCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(bankAccountFindUniqueArgs: Prisma.BankAccountFindUniqueArgs) {
    try {
      return await this.prisma.bankAccount.findUnique(bankAccountFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(bankAccountFindManyArgs: Prisma.BankAccountFindManyArgs) {
    try {
      return await this.prisma.bankAccount.findMany(bankAccountFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(bankAccountFindFirstArgs: Prisma.BankAccountFindFirstArgs) {
    try {
      return await this.prisma.bankAccount.findFirst(bankAccountFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(bankAccountUpdateOneArgs: Prisma.BankAccountUpdateArgs) {
    try {
      return await this.prisma.bankAccount.update(bankAccountUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(bankAccountUpdateManyArgs: Prisma.BankAccountUpdateManyArgs) {
    try {
      return await this.prisma.bankAccount.updateMany(bankAccountUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(bankAccountDeleteArgs: Prisma.BankAccountDeleteArgs) {
    try {
      await this.prisma.bankAccount.delete(bankAccountDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(bankAccountDeleteManyArgs: Prisma.BankAccountDeleteManyArgs) {
    try {
      await this.prisma.bankAccount.deleteMany(bankAccountDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(bankAccountAggregateArgs: Prisma.BankAccountAggregateArgs) {
    try {
      return await this.prisma.bankAccount.aggregate(bankAccountAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(bankAccountCountArgs: Prisma.BankAccountCountArgs) {
    try {
      return await this.prisma.bankAccount.count(bankAccountCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
