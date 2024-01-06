import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BackupService } from './backup.service';

@Injectable()
export class BackupController {
  constructor(private readonly backupService: BackupService) {}

  async createOne(backupCreateArgs: Prisma.BackupCreateArgs) {
    return await this.backupService.createOne(backupCreateArgs);
  }

  async createMany(backupCreateManyArgs: Prisma.BackupCreateManyArgs) {
    return await this.backupService.createMany(backupCreateManyArgs);
  }

  async findOne(backupFindUniqueArgs: Prisma.BackupFindUniqueArgs) {
    return await this.backupService.findOne(backupFindUniqueArgs);
  }

  async findMany(backupFindManyArgs: Prisma.BackupFindManyArgs) {
    return await this.backupService.findMany(backupFindManyArgs);
  }

  async findFirst(backupFindFirstArgs: Prisma.BackupFindFirstArgs) {
    return await this.backupService.findFirst(backupFindFirstArgs);
  }

  async updateOne(backupUpdateOneArgs: Prisma.BackupUpdateArgs) {
    return await this.backupService.updateOne(backupUpdateOneArgs);
  }

  async updateMany(backupUpdateManyArgs: Prisma.BackupUpdateManyArgs) {
    return await this.backupService.updateMany(backupUpdateManyArgs);
  }

  async delete(backupDeleteArgs: Prisma.BackupDeleteArgs) {
    return await this.backupService.delete(backupDeleteArgs);
  }

  async deleteMany(backupDeleteManyArgs: Prisma.BackupDeleteManyArgs) {
    return await this.backupService.deleteMany(backupDeleteManyArgs);
  }

  async aggregate(backupAggregateArgs: Prisma.BackupAggregateArgs) {
    return await this.backupService.aggregate(backupAggregateArgs);
  }

  async count(backupCountArgs: Prisma.BackupCountArgs) {
    return await this.backupService.count(backupCountArgs);
  }
}
