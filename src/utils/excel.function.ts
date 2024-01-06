import { utils, writeFile as writeXLSXFile, read as readXLSBuffer } from 'xlsx';
import { v4 as uuidV4 } from 'uuid';

export function createXLSX(data: Record<string, any>[]) {
  const workSheet = utils.json_to_sheet(data);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, 'List');
  const xlsBuffer = writeXLSXFile(workBook, `${uuidV4()}.xlsx`);
  return xlsBuffer;
}

export function readXLSX(data: Buffer): unknown[] {
  const workbook = readXLSBuffer(data);
  const [sheetName] = workbook.SheetNames;
  const sheet = workbook.Sheets[sheetName];
  const arrayData = utils.sheet_to_json(sheet);
  return arrayData;
}