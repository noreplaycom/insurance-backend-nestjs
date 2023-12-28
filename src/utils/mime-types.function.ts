import * as mime from 'mime-types';
import { FileType } from 'src/model/enums';

export function detectMimeTypeFromFilename(filename: string): string | null {
  const mimeType = mime.lookup(filename);
  return mimeType || null;
}

export function mapFileTypeEnumFromMIME(mimeType: string | null): FileType {
  switch (mimeType) {
    case 'video/mp4':
      return FileType.MP4;
    case 'image/jpeg':
      return FileType.JPG;
    case 'image/png':
      return FileType.PNG;
    case 'application/pdf':
      return FileType.PDF;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return FileType.XLSX;
    default:
      return FileType.UNKNOWN;
  }
}
