import {
  Permission,
  Prisma,
  PrismaClient,
  SantunanHarianRawatInapPlan,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { claimSeed } from './seed-functions/claim.seed';
import { faker } from '@faker-js/faker';
import { participantCreateOne } from './seed-functions/participant-create-one.seed';
import { claimCreateOne } from './seed-functions/claim-create-one.seed';

const prisma = new PrismaClient();

export enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

async function main() {
  console.log('Start seeding ...');

  // await claimSeed();

  // await participantCreateOne();
  // await claimCreateOne();

  // for (let i = 0; i < 100; i++) {
  //   console.log(
  //     await prisma.notification.create({
  //       data: {
  //         title: 'ini judul notifikasi loh',
  //         content: 'ini konten notifikasi',
  //         subtitle: 'ini subtitle notifikasi',
  //         user: { connect: { id: '28c0d80a-0196-4aa4-bece-9de6eaa7236e' } },
  //       },
  //     }),
  //   );
  // }

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
