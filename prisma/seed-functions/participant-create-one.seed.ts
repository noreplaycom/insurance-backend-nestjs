import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function participantCreateOne() {
  let role = await prisma.role.findFirst({
    where: { roleType: 'PARTICIPANT' },
  });

  if (!role) {
    await prisma.role.create({
      data: {
        id: 0,
        name: 'Peserta',
        description: 'peserta',
        roleType: 'PARTICIPANT',
      },
    });
  }

  role = await prisma.role.findFirst({
    where: { roleType: 'PARTICIPANT' },
  });

  const data: Prisma.ParticipantCreateInput = {
    gender: 'MALE',
    birthDate: new Date('1990-12-03T09:54:33.000Z'),
    isActive: true,
    status: 'YATIM',
    user: {
      create: {
        fullName: '9Testing Create Peserta',
        email: 'emailpeserta9@gmail.com',
        password: '123456',
        role: { connect: { id: role.id } },
      },
    },
    employment: {
      create: {
        employmentPosition: 'SAMGR',
        branch: {
          connectOrCreate: {
            where: {
              id: 1,
            },
            create: {
              name: 'Surabaya',
            },
          },
        },
        group: {
          connectOrCreate: {
            where: {
              id: 1,
            },
            create: {
              name: 'Group 1',
            },
          },
        },
        region: {
          connectOrCreate: {
            where: {
              id: 1,
            },
            create: {
              name: 'Wilayah A',
            },
          },
        },
      },
    },
    bankAccount: {
      create: {
        accountNumber: 83924732895,
        accountName: 'BCA',
      },
    },
    contactInfo: {
      create: {
        phones: {
          createMany: {
            data: [
              {
                number: 324382443425342,
              },
            ],
          },
        },
        address: {
          create: {
            address: 'jalan jalan',
            subdistrict: {
              connect: {
                id: 20,
              },
            },
          },
        },
      },
    },
    programParticipation: {
      create: {
        bpjsNumber: '32425346256334',
        nonActiveReason: null,
        effectiveDate: new Date('2019-12-03T09:54:33.000Z'),
        nonActiveDate: null,
        santunanHarianRawatInapPlan: 'II',
        funding: {
          create: {
            currentBalance: 50000000,
            currentBalanceLastUpdate: new Date('2024-01-11T10:35:15.325Z'),
            transactions: {
              create: {
                amount: 50000000,
                transactionType: 'CREDIT',
                createdAt: new Date('2024-01-11T10:35:15.325Z'),
              },
            },
          },
        },
        programParticipationToPrograms: {
          createMany: {
            data: [
              {
                programId: 4,
                isAvailable: true,
                allowanceCeilingRemaining: 700000,
                allowanceQuotaRemaining: 2,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
              {
                programId: 5,
                isAvailable: true,
                allowanceCeilingRemaining: 2000000,
                allowanceQuotaRemaining: null,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
              {
                programId: 6,
                isAvailable: true,
                allowanceCeilingRemaining: 350000,
                allowanceQuotaRemaining: null,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
              {
                programId: 7,
                isAvailable: true,
                allowanceCeilingRemaining: 1500000,
                allowanceQuotaRemaining: null,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
              {
                programId: 8,
                isAvailable: true,
                allowanceCeilingRemaining: 40000000,
                allowanceQuotaRemaining: null,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
              {
                programId: 9,
                isAvailable: true,
                allowanceCeilingRemaining: 10000000,
                allowanceQuotaRemaining: null,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
              {
                programId: 2,
                isAvailable: true,
                allowanceCeilingRemaining: 1000000,
                allowanceQuotaRemaining: 60,
                updatedAt: new Date('2024-01-11T10:35:15.632Z'),
              },
            ],
          },
        },
      },
    },
  };

  console.log(await prisma.participant.create({ data }));
}
