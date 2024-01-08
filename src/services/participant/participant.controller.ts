import { FileUpload } from 'graphql-upload';
import { Injectable } from '@nestjs/common';
import {
  Participant,
  Position,
  Prisma,
  SantunanHarianRawatInapPlan,
  TransactionType,
} from '@prisma/client';
import { ParticipantService } from './participant.service';
import { ParticipantStatus } from 'src/@generated';
import { createXLSX, readXLSX } from 'src/utils/excel.function';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import {
  detectMimeTypeFromFilename,
  mapFileTypeEnumFromMIME,
} from 'src/utils/mime-types.function';
import { FileType } from 'src/model/enums';
import { ConfigService } from '@nestjs/config';
import { AccountController } from '../account/account.controller';

@Injectable()
export class ParticipantController {
  constructor(
    private readonly participantService: ParticipantService,
    private readonly configService: ConfigService,
  ) {}

  async createOne(participantCreateArgs: Prisma.ParticipantCreateArgs) {
    if (participantCreateArgs?.data) {
      //create funding account for participant
      const initialBalance: number = 50000000;
      const createdDate: Date = new Date();
      //
      participantCreateArgs.data.programParticipation.create.funding = {
        create: {
          currentBalance: initialBalance,
          currentBalanceLastUpdate: createdDate,
          //create initial transaction for funding account
          transactions: {
            create: {
              amount: initialBalance,
              transactionType: TransactionType.CREDIT,
              createdAt: createdDate,
            },
          },
        },
      };

      //connect participant to certain programs

      //get employment position

      //Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
      /*

Jabatan-jabatan tersebut dapat diurutkan berdasarkan struktur organisasi secara umum dari level tertinggi hingga terendah sebagai berikut:

AVP (Assistant Vice President)
VP (Vice President)
SAVP (Senior Assistant Vice President)
PGD (Program Director)
AMGR (Assistant Manager)
SMGR (Senior Manager)
MGR (Manager)
SAMGR (Senior Assistant Manager)
SASST (Senior Assistant)
      */
      function getPlanByPosition(
        position: Position,
      ): SantunanHarianRawatInapPlan {
        switch (position) {
          case Position.AVP:
          case Position.VP:
          case Position.SAVP:
            return SantunanHarianRawatInapPlan.I;
          case Position.MGR:
          case Position.SMGR:
            return SantunanHarianRawatInapPlan.II;
          default:
            return SantunanHarianRawatInapPlan.III;
        }
      }

      participantCreateArgs.data.programParticipation.create.programs.connect =
        [{ id: 1 }, { id: 2 }];
    }

    return await this.participantService.createOne(participantCreateArgs);
  }

  async createMany(
    participantCreateManyArgs: Prisma.ParticipantCreateManyArgs,
  ) {
    return await this.participantService.createMany(participantCreateManyArgs);
  }

  async findOne(participantFindUniqueArgs: Prisma.ParticipantFindUniqueArgs) {
    return await this.participantService.findOne(participantFindUniqueArgs);
  }

  async findMany(participantFindManyArgs: Prisma.ParticipantFindManyArgs) {
    return await this.participantService.findMany(participantFindManyArgs);
  }

  async findFirst(participantFindFirstArgs: Prisma.ParticipantFindFirstArgs) {
    return await this.participantService.findFirst(participantFindFirstArgs);
  }

  async updateOne(participantUpdateOneArgs: Prisma.ParticipantUpdateArgs) {
    return await this.participantService.updateOne(participantUpdateOneArgs);
  }

  async updateMany(
    participantUpdateManyArgs: Prisma.ParticipantUpdateManyArgs,
  ) {
    return await this.participantService.updateMany(participantUpdateManyArgs);
  }

  async delete(participantDeleteArgs: Prisma.ParticipantDeleteArgs) {
    return await this.participantService.delete(participantDeleteArgs);
  }

  async deleteMany(
    participantDeleteManyArgs: Prisma.ParticipantDeleteManyArgs,
  ) {
    return await this.participantService.deleteMany(participantDeleteManyArgs);
  }

  async aggregate(participantAggregateArgs: Prisma.ParticipantAggregateArgs) {
    return await this.participantService.aggregate(participantAggregateArgs);
  }

  async count(participantCountArgs: Prisma.ParticipantCountArgs) {
    return await this.participantService.count(participantCountArgs);
  }

  async getParticipantStatuses(): Promise<string[]> {
    return Object.keys(ParticipantStatus);
  }

  async import(file: FileUpload): Promise<Boolean> {
    const { createReadStream } = file;
    const mimeTypes = detectMimeTypeFromFilename(file.filename);
    const detectedFileTypes = mapFileTypeEnumFromMIME(mimeTypes);

    if (detectedFileTypes !== FileType.XLSX)
      throw new IGraphQLError({ code: 180002 });

    const stream = createReadStream();
    const chunks = [];

    await new Promise<Buffer>((resolve, reject) => {
      let buffer: Buffer;

      stream.on('data', (chunk: any) => {
        chunks.push(chunk);
      });

      stream.on('end', () => {
        buffer = Buffer.concat(chunks);
        resolve(buffer);
      });

      stream.on('error', reject);
    });

    const result = Buffer.concat(chunks);
    const data = readXLSX(result);

    const expectedHeaders = [
      'id',
      'gender',
      'birthDate',
      'status',
      'userId',
      'relationId',
      'bankAccount',
      'claims',
    ];

    const headers = Object.keys(data && data[0] ? data[0] : {});
    const validHeaders = expectedHeaders.every((expectedHeaders) => {
      headers.includes(expectedHeaders);
    });

    if (!validHeaders) throw new IGraphQLError({ code: 180001 });

    await this.participantService.createMany({
      data: data as Participant[],
      skipDuplicates: true,
    });

    return true;
  }

  async export(): Promise<String> {
    const participants = await this.participantService.findMany({});
    const xlsxFilePath = await createXLSX(participants, 'participants');

    const appURL = await this.configService.get('APP_URL');
    const result = appURL + '/' + xlsxFilePath;

    return result;
  }
}
