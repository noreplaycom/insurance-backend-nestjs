import { utils, writeFile as writeXLSXFile, read as readXLSBuffer } from 'xlsx';
// import { v4 as uuidV4 } from 'uuid';
import { join } from 'path';

export function createXLSX(data: Record<string, any>[], type: string) {
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const dt = date.getDate();
  const fullDate = `${year}-${month > 10 ? month : '0' + month.toString()}-${dt > 10 ? dt : '0' + dt.toString()}`

  const workSheet = utils.json_to_sheet(data);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, type);

  const now = new Date().toISOString();
  const path = `/volume/xlsx/${type}/${type}-${now}.xlsx`
  writeXLSXFile(workBook, join(process.cwd(), path), {
    bookType: 'xlsx',
    type: 'file',
  });
  return `${type}/${type}-${now}.xlsx`;
}

export function readXLSX(data: Buffer): unknown[] {
  const workbook = readXLSBuffer(data);
  const [sheetName] = workbook.SheetNames;
  const sheet = workbook.Sheets[sheetName];
  const arrayData = utils.sheet_to_json(sheet, { defval: null });
  return arrayData;
}