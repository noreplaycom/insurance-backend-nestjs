import { utils, writeFile as writeXLSXFile, read as readXLSBuffer } from 'xlsx';
// import { v4 as uuidV4 } from 'uuid';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export async function createXLSX(data: Record<string, any>[], type: string) {
  const workSheet = utils.json_to_sheet(data);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, type);

  const volume = join(process.cwd(), `volume/xlsx/`);
  const filename = `${type}.xlsx`;
  const path = `xlsx/${filename}`;
  if (!existsSync(volume)) {
    mkdirSync(volume);
  }
  writeXLSXFile(workBook, volume + filename, {
    bookType: 'xlsx',
    type: 'file',
  });
  return path;
}

export function readXLSX(data: Buffer): unknown[] {
  const workbook = readXLSBuffer(data);
  const [sheetName] = workbook.SheetNames;
  const sheet = workbook.Sheets[sheetName];
  const arrayData = utils.sheet_to_json(sheet, { defval: null });
  return arrayData;
}