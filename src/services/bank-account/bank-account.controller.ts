import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BankAccountService } from './bankAccount.service';

@Injectable()
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  async createOne(bankAccountCreateArgs: Prisma.BankAccountCreateArgs) {
    return await this.bankAccountService.createOne(bankAccountCreateArgs);
  }

  async createMany(bankAccountCreateManyArgs: Prisma.BankAccountCreateManyArgs) {
    return await this.bankAccountService.createMany(bankAccountCreateManyArgs);
  }

  async findOne(bankAccountFindUniqueArgs: Prisma.BankAccountFindUniqueArgs) {
    return await this.bankAccountService.findOne(bankAccountFindUniqueArgs);
  }

  async findMany(bankAccountFindManyArgs: Prisma.BankAccountFindManyArgs) {
    return await this.bankAccountService.findMany(bankAccountFindManyArgs);
  }

  async findFirst(bankAccountFindFirstArgs: Prisma.BankAccountFindFirstArgs) {
    return await this.bankAccountService.findFirst(bankAccountFindFirstArgs);
  }

  async updateOne(bankAccountUpdateOneArgs: Prisma.BankAccountUpdateArgs) {
    return await this.bankAccountService.updateOne(bankAccountUpdateOneArgs);
  }

  async updateMany(bankAccountUpdateManyArgs: Prisma.BankAccountUpdateManyArgs) {
    return await this.bankAccountService.updateMany(bankAccountUpdateManyArgs);
  }

  async delete(bankAccountDeleteArgs: Prisma.BankAccountDeleteArgs) {
    return await this.bankAccountService.delete(bankAccountDeleteArgs);
  }

  async deleteMany(bankAccountDeleteManyArgs: Prisma.BankAccountDeleteManyArgs) {
    return await this.bankAccountService.deleteMany(bankAccountDeleteManyArgs);
  }

  async aggregate(bankAccountAggregateArgs: Prisma.BankAccountAggregateArgs) {
    return await this.bankAccountService.aggregate(bankAccountAggregateArgs);
  }

  async count(bankAccountCountArgs: Prisma.BankAccountCountArgs) {
    return await this.bankAccountService.count(bankAccountCountArgs);
  }
}
