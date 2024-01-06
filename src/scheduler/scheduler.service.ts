import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { postgresBackup } from 'src/utils/database-import.function';
// import { UploaderService } from '../services/uploader/uploader.service';
// import { ImagesController } from 'src/services/images/images.controller';

@Injectable()
export class SchedulerService {
  constructor(
    // private readonly imagesController: ImagesController, // private readonly uploaderService: UploaderService,
    private readonly configService: ConfigService,
  ) {}
  private readonly logger = new Logger(SchedulerService.name);

  //TODO: Auto backup
  @Cron(CronExpression.EVERY_WEEK)
  async databaseLocalBackupForPostgres() {
    try {
      const postgresConnectionString = this.configService.get('DATABASE_URL');
      await postgresBackup(postgresConnectionString);
    } catch (error) {
      this.logger.error('scheduler database backup for postgres failed');
    }
  }

  //TODO: Auto Delete temporary xlsx files

  // @Cron(CronExpression.EVERY_WEEK) // Schedule every Sunday at midnight
  // async deleteOrphanedS3Objects() {
  //   try {
  //     await this.uploaderService.deleteOrphanedS3Objects();
  //     this.logger.log('deleteOrphanedS3Objects scheduler: Success');
  //   } catch (error) {
  //     this.logger.error('deleteOrphanedS3Objects scheduler: Failed');
  //   }
  // }

  // @Cron(CronExpression.EVERY_WEEK) // Schedule every Sunday at midnight
  // async imagesUpdateManyOfFileTyeAndFileSize() {
  //   try {
  //     const images = await this.imagesController.findMany({
  //       select: { id: true, url: true },
  //       where: { fileType: null },
  //     });

  //     for (const image of images) {
  //       const metadata = await this.uploaderService.getFileMetadataFromS3(
  //         image.url,
  //       );
  //       const fileType = metadata.mimeType;
  //       const fileSize = metadata.size;
  //       await this.imagesController.updateOne({
  //         where: { id: image.id },
  //         data: { fileType: { set: fileType }, fileSize: { set: fileSize } },
  //       });
  //     }

  //     this.logger.log(
  //       'imagesUpdateManyOfFileTyeAndFileSize scheduler: Success',
  //     );
  //   } catch (error) {
  //     this.logger.error(
  //       'imagesUpdateManyOfFileTyeAndFileSize scheduler: Failed',
  //     );
  //   }
  // }

  // @Cron(CronExpression.EVERY_WEEK) // Schedule every Sunday at midnight
  // async deleteOrphanedS3Objects() {
  //   try {
  //     await this.uploaderService.deleteOrphanedS3Objects();
  //     this.logger.log('deleteOrphanedS3Objects scheduler: Success');
  //   } catch (error) {
  //     this.logger.error('deleteOrphanedS3Objects scheduler: Failed');
  //   }
  // }
}
