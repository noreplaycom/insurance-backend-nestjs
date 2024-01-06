import { Module } from '@nestjs/common';
import { BackupService } from './backup.service';
import { BackupResolver } from './backup.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { BackupController } from './backup.controller';

@Module({
  providers: [PrismaService, BackupResolver, BackupController, BackupService],
  exports: [BackupController],
})
export class BackupModule {}
