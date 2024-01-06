import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';
import { BackupModule } from 'src/services/backup/backup.module';
// import { ImagesModule } from 'src/services/images/images.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BackupModule,
  ],
  providers: [SchedulerService],
})
export class SchedulerModule {}
