import { Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

export class DatabaseTool {
  private readonly logger = new Logger('DatabaseTool');

  constructor(private readonly configService: ConfigService) {}
  
  private async execute(): Promise<boolean> {
    const now = new Date().toISOString();
    const path = join(process.cwd(), 'volume/database-backup', `${now}.bin`);
    return new Promise((resolve, reject) => {
      exec(`pg_dump -Fc -v -d "${this.configService.get('DATABASE_URL')}" -f "${path}"`, (err, stdout, stderr) => {
        if (err) reject(false);
        resolve(true);
      })
    })
  }

  // async performBackup() {
  //   try {
  //     await this.execute();
  //     this.logger.log('backup success...');
  //   } catch (error) {
  //     this.logger.error(error);
  //     this.logger.error('backup failed...')
  //   }
  // }
}