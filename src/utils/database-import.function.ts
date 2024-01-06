// import { v4 as uuidV4 } from 'uuid';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { exec } from 'child_process';

export async function postgresBackup(databaseConnectionString: string): Promise<string> {
  const now = new Date().toISOString();
  const volume = join(process.cwd(), `volume/database-backup`);
  const filename = `${now}.bin`;
  const path = `/database-backup/${filename}`;
  if (!existsSync(volume)) {
    mkdirSync(volume);
  }
  const targetBackupFile = join(process.cwd(), `volume/database-backup`, `${now}.bin`);
  return new Promise((resolve, reject) => {
    exec(`pg_dump -Fc -v -d "${databaseConnectionString}" -f "${targetBackupFile}"`, (err, stdout, stderr) => {
      if (err) {
        console.log('postgres backup failed.')
        console.log(err)
        resolve('')
      };
      console.log('postgres backup complete.')
      resolve(path);
    })
  })
}