// import { v4 as uuidV4 } from 'uuid';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { exec } from 'child_process';

export async function postgresBackup(databaseConnectionString: string) {
  const volume = join(process.cwd(), `volume/database-backup`);
  if (!existsSync(volume)) {
    mkdirSync(volume);
  }
  const now = new Date().toISOString();
  const path = join(process.cwd(), `volume/database-backup/`, `${now}.bin`);
  return new Promise((resolve, reject) => {
    exec(`pg_dump -Fc -v -d "${databaseConnectionString}" -f "${path}"`, (err, stdout, stderr) => {
      if (err) {
        console.log('postgres backup failed.')
        console.log(err)
        reject(false)
      };
      console.log('postgres backup complete.')
      resolve(true);
    })
  })
}