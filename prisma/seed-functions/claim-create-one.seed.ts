import { ClaimChannel, Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function claimCreateOne() {
  //api UserFindMany
  const participantFindMany = await prisma.user.findMany({
    where: { role: { roleType: 'PARTICIPANT' } },
    include: {
      participant: {
        include: {
          programParticipation: {
            include: { programParticipationToPrograms: true },
          },
        },
      },
    },
  });

  const participant =
    faker.helpers.arrayElement(participantFindMany).participant;

  console.log(participant);

  //api documentCreateOfInvoiceProof
  const documentProofCreate = await prisma.document.create({
    data: { size: 2, source: 'GENERATED', type: 'INVOICE' },
  });

  const claimCreateInput: Prisma.ClaimCreateInput = {
    tags: {
      connectOrCreate: [
        {
          where: {
            id: 4, //API tagFindMany
          },
          create: {
            name: 'aman',
            isException: false,
            color: 'GREEN', //API colorFindMany
          },
        },
      ],
    },
    participant: {
      connect: {
        userId: participant.userId,
      },
    },
    admedicaStatus: 'ADMEDICA', //API admedicaStatusFindMany
    channel: faker.helpers.arrayElement(Object.values(ClaimChannel)), //API claimChannelFindMany
    company: 'YDDS',
    claimProgram: {
      create: {
        isReclaim: false,
        submissionNote: null,
        description: null,
        additionalNote: null,
        startTreatment: null,
        endTreatment: null,
        kurisRodaOrWalkerStoreName: null,
        programParticipationToProgram: {
          //api programParticipationToProgramFindManyByParticipantId
          connect: {
            programParticipationId_programId: {
              programParticipationId:
                participant.programParticipation
                  .programParticipationToPrograms[0].programParticipationId,
              programId:
                participant.programParticipation
                  .programParticipationToPrograms[0].programId,
            },
          },
        },
        clinics: {
          connectOrCreate: {
            where: {
              id: 2, //API clinicFindMany
            },
            create: {
              name: faker.company.name(),
              code: faker.datatype.number(4).toString(),
            },
          },
        },
        disease: {
          connectOrCreate: {
            where: {
              id: 3, // API dosesaFindMany
            },
            create: {
              name: faker.name.middleName(),
              code: faker.datatype.number(4).toString(),
            },
          },
        },
        invoiceProofs: {
          createMany: {
            data: [
              {
                issuedDate: new Date(),
                amount: 214445,
                documentProofId: documentProofCreate.id,
              },
            ],
          },
        },
        documents: {
          createMany: {
            data: [
              {
                type: 'TRANSFER', // API documentTypeFindMany
                uploadedFileUrl: 'https://www.google.com', //API fileUploader
                size: 4, //controller
                source: 'UPLOADED', //controller
              },
            ],
          },
        },
      },
    },
    claimFinancials: {
      create: {
        previousBalance: 0, //controller
        remainingBalance: 0, //controller
        requestedAmount: 0,
        totalInvoiceProofAmount: 0, //controller
      },
    },
    // claimStatuses: { create: { type: 'PENDING' ,} },
  };

  console.log(await prisma.claim.create({ data: claimCreateInput }));
}
