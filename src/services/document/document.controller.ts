import { Injectable } from '@nestjs/common';
import { DocumentSource, DocumentType, Prisma } from '@prisma/client';
import { DocumentService } from './document.service';
import * as fs from 'fs';
import * as path from 'path';
import PizZip = require('pizzip');
import Docxtemplater = require('docxtemplater');

type DataGenerateSuratKelengkapanBantuanRI = {
  date: string;
  no_surat: string;
  latter_province: string;
  greeting: string;
  name: string;
  street: string;
  rt_rw: string;
  address: string;
  province: string;
  poscode: string;
  short_desc: string;
  long_desc: string;
};

@Injectable()
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  async createOne(documentCreateArgs: Prisma.DocumentCreateArgs) {
    let filePath: string;
    let size: number;

    switch (documentCreateArgs.data.type) {
      case DocumentType.REJECTION_LETTER:
        const result = await this.generateSuratKelengkapanBantuanRI({
          date: new Date().toISOString(),
          no_surat: 'YDDS/' + 'II/' + 'D/' + Math.floor(Math.random() * 1000),
          latter_province: 'Jawa Timur',
          greeting: 'Kepada Yth.',
          name: 'John Doe',
          street: '1234 Main Street',
          rt_rw: '001/001',
          address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
          province: 'Jawa Timur',
          poscode: '61257',
          short_desc: 'belum dilengkapi dengan kuitansi asli dari Rumah Sakit',
          long_desc:
            'dilengkapi dengan kuitansi asli dari Rumah Sakit, klaim ulang (untuk melengkapi berkas) diterima YDDS selambat - lambatnya 60 hari sejak tanggal pemberitahuan/surat YDDS',
        });
        filePath = result.filePath;
        size = result.size;
        break;
      default:
        throw new Error('Unsupported document type');
    }

    documentCreateArgs.data.size = size;
    documentCreateArgs.data.source = DocumentSource.GENERATED;
    documentCreateArgs.data.docxPath = filePath;

    return await this.documentService.createOne(documentCreateArgs);
  }

  async createMany(documentCreateManyArgs: Prisma.DocumentCreateManyArgs) {
    return await this.documentService.createMany(documentCreateManyArgs);
  }

  async findOne(documentFindUniqueArgs: Prisma.DocumentFindUniqueArgs) {
    return await this.documentService.findOne(documentFindUniqueArgs);
  }

  async findMany(documentFindManyArgs: Prisma.DocumentFindManyArgs) {
    return await this.documentService.findMany(documentFindManyArgs);
  }

  async findFirst(documentFindFirstArgs: Prisma.DocumentFindFirstArgs) {
    return await this.documentService.findFirst(documentFindFirstArgs);
  }

  async updateOne(documentUpdateOneArgs: Prisma.DocumentUpdateArgs) {
    return await this.documentService.updateOne(documentUpdateOneArgs);
  }

  async updateMany(documentUpdateManyArgs: Prisma.DocumentUpdateManyArgs) {
    return await this.documentService.updateMany(documentUpdateManyArgs);
  }

  async delete(documentDeleteArgs: Prisma.DocumentDeleteArgs) {
    return await this.documentService.delete(documentDeleteArgs);
  }

  async deleteMany(documentDeleteManyArgs: Prisma.DocumentDeleteManyArgs) {
    return await this.documentService.deleteMany(documentDeleteManyArgs);
  }

  async aggregate(documentAggregateArgs: Prisma.DocumentAggregateArgs) {
    return await this.documentService.aggregate(documentAggregateArgs);
  }

  async count(documentCountArgs: Prisma.DocumentCountArgs) {
    return await this.documentService.count(documentCountArgs);
  }

  async sourceFindMany() {
    return Object.values(DocumentSource);
  }

  async typeFindMany() {
    return Object.values(DocumentType);
  }

  async generateSuratKelengkapanBantuanRI(
    dataGenerateSuratKelengkapanBantuanRI: DataGenerateSuratKelengkapanBantuanRI,
  ): Promise<{ filePath: string; size: number }> {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../../../../src/data/document',
        'surat-kelengkapan-bantuan-ri.docx',
      ),
      'binary',
    );

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.render(dataGenerateSuratKelengkapanBantuanRI);

    const fileName = 'surat-kelengkapan-bantuan-ri.docx';
    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });

    const filePath = path.resolve(
      __dirname,
      '../../../../src/data/generated',
      fileName,
    );
    fs.writeFileSync(filePath, buf);

    const { size } = fs.statSync(filePath);

    return { filePath, size };
  }
}
