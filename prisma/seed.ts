import {
  Permission,
  Prisma,
  PrismaClient,
  SantunanHarianRawatInapPlan,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { claimSeed } from './seed-functions/claim.seed';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

async function main() {
  console.log('Start seeding ...');

  // await claimSeed();

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

  // console.log(
  //   await prisma.programParticipation.create({
  //     data: {
  //       effectiveDate: new Date(),
  //       santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.I,
  //     },
  //   }),
  // );

  // console.log(
  //   await prisma.user.create({
  //     data: {
  //       fullName: 'wew',
  //       email: 'skjfasf@fas.com',
  //       role: { connect: { id: 1 } },
  //     },
  //   }),
  // );

  // async function findGuestsSharingSameShowTime() {
  //   const guestsWithSharedSeats = await prisma.guest.findMany({
  //     where: {
  //       showTime: {
  //         not: null, // Filter out guests with no showTime
  //       },
  //     },
  //     select: {
  //       id: true,
  //       seat: true,
  //       showTime: true,
  //     },
  //     groupBy: [''      ],
  //     having: {
  //       _count: {
  //         showTime: {
  //           gte: 2, // Change this value to match the number of guests sharing the same showTime
  //         },
  //       },
  //     },
  //   });

  //   return guestsWithSharedSeats;
  // }

  // findGuestsSharingSameShowTime()
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // // create fake users
  // const numberOfUsers: number = 100;
  // const users: Prisma.UserCreateManyInput[] = [];
  // const guests: Prisma.GuestCreateManyInput[] = [];
  // const uuids: string[] = [];

  // console.log('creating uuids');
  // for (let i = 0; i < numberOfUsers; i++) {
  //   const id = faker.datatype.uuid();
  //   uuids.push(id);
  // }

  // console.log('creating users');
  // for (let i = 0; i < numberOfUsers; i++) {
  //   users.push({
  //     id: uuids[i],
  //     ...fakeUser(),
  //     guestInfoId: uuids[i],
  //     password: await bcrypt.hash('login123456', 10),
  //   });
  // }

  // console.log('creating guests');
  // for (let i = 0; i < numberOfUsers; i++) {
  //   guests.push({
  //     userId: uuids[i],
  //     category1: faker.lorem.words(5),
  //     category2: faker.lorem.words(5),
  //     description: faker.lorem.words(5),
  //     personInCharge: faker.name.firstName(),
  //     class: 'VIP',
  //     seat: faker.datatype.number(100).toString(),
  //     confirmationStatus: faker.helpers.arrayElement([
  //       ConfirmationStatus.CONFIRMED,
  //       ConfirmationStatus.REJECTED,
  //       ConfirmationStatus.UNCONFIRMED,
  //     ] as const),
  //   });
  // }

  // console.log(
  //   await prisma.user.createMany({
  //     data: users,
  //   }),
  // );

  // console.log(
  //   await prisma.guest.createMany({
  //     data: guests,
  //   }),
  // );

  console.log('Seeding finished.');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
