import { utils, writeFile as writeXLSXFile, read as readXLSBuffer } from 'xlsx';
// import { v4 as uuidV4 } from 'uuid';
import { join } from 'path';

export function createXLSX(data: Record<string, any>[], type: string) {
  const workSheet = utils.json_to_sheet(data);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, type);

  const now = new Date().toISOString();
  const path = `xlsx/${type}/${type}-${now}.xlsx`
  const volume = `volume/${path}`;
  writeXLSXFile(workBook, join(process.cwd(), volume), {
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