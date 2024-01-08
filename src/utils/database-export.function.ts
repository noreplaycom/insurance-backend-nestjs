// import { v4 as uuidV4 } from 'uuid';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { exec } from 'child_process';

export async function postgresRestore(databaseConnectionString: string, filename: string): Promise<boolean> {
  const targetRestoreFile = join(process.cwd(), `volume/database-backup`, filename);
  return new Promise((resolve, reject) => {
    exec(`pg_restore -v --no-owner --clean -d "${databaseConnectionString}" "${targetRestoreFile}"`, (err, stdout, stderr) => {
      if (err) {
        console.log('postgres restore failed.')
        console.log(err)
        resolve(false)
      };
      console.log('postgres restore complete.')
      resolve(true);
    })
  })
}