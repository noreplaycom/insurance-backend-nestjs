import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class BackupService {
  constructor(private prisma: PrismaService) {}

  async createOne(backupCreateArgs: Prisma.BackupCreateArgs) {
    try {
      return await this.prisma.backup.create(backupCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(backupCreateManyArgs: Prisma.BackupCreateManyArgs) {
    try {
      return await this.prisma.backup.createMany(backupCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(backupFindUniqueArgs: Prisma.BackupFindUniqueArgs) {
    try {
      return await this.prisma.backup.findUnique(backupFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(backupFindManyArgs: Prisma.BackupFindManyArgs) {
    try {
      return await this.prisma.backup.findMany(backupFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(backupFindFirstArgs: Prisma.BackupFindFirstArgs) {
    try {
      return await this.prisma.backup.findFirst(backupFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(backupUpdateOneArgs: Prisma.BackupUpdateArgs) {
    try {
      return await this.prisma.backup.update(backupUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(backupUpdateManyArgs: Prisma.BackupUpdateManyArgs) {
    try {
      return await this.prisma.backup.updateMany(backupUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(backupDeleteArgs: Prisma.BackupDeleteArgs) {
    try {
      await this.prisma.backup.delete(backupDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(backupDeleteManyArgs: Prisma.BackupDeleteManyArgs) {
    try {
      await this.prisma.backup.deleteMany(backupDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(backupAggregateArgs: Prisma.BackupAggregateArgs) {
    try {
      return await this.prisma.backup.aggregate(backupAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(backupCountArgs: Prisma.BackupCountArgs) {
    try {
      return await this.prisma.backup.count(backupCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
