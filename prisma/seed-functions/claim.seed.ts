import {
  AdmedicaStatus,
  ClaimChannel,
  Gender,
  ParticipantStatus,
  Prisma,
  PrismaClient,
} from '@prisma/client';
import { faker } from '@faker-js/faker';

let prisma = new PrismaClient();

export async function claimSeed() {
  // Check if required entities exist
  // if (
  //   participants.length === 0 ||
  //   diseases.length === 0 ||
  //   clinics.length === 0 ||
  //   users.length === 0
  // ) {
  //   console.log('Required related models are not seeded yet.');
  //   return;
  // }

  const programs = await prisma.program.findMany({
    where: { claims: { none: {} } },
  });

  const roles = await prisma.role.findMany({
    where: { users: { none: {} } },
  });

  for (let i = 0; i < 100; i++) {
    // Fetch or create necessary related records
    // const participants = await prisma.participant.findFirst({
    //   where: { claims: { none: {} } },
    // });
    // const diseases = await prisma.disease.findFirst({
    //   where: { claims: { none: {} } },
    // });
    // const users = await prisma.user.findFirst({
    //   where: { claimActions: { none: {} } },
    // });
    // const clinics = await prisma.clinic.findFirst({
    //   where: { claims: { none: {} } },
    // });

    const userCreateOne: Prisma.UserCreateWithoutParticipantInput = {
      fullName: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: {
        connectOrCreate: {
          where: {
            id:
              roles.length > 4
                ? faker.helpers.arrayElement(roles).id
                : undefined,
          },
          create: {
            name: faker.name.jobTitle(),
            description: faker.lorem.paragraph(),
            order: faker.datatype.number(5),
          },
        },
      },
    };

    await prisma.claim.create({
      data: {
        id: faker.datatype.uuid(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
        admedicaStatus: faker.helpers.arrayElement(
          Object.values(AdmedicaStatus),
        ),
        company: faker.company.companyName(),
        participant: {
          connectOrCreate: {
            where: undefined,
            create: {
              gender: faker.helpers.arrayElement(Object.values(Gender)),
              birthDate: faker.date.past(),
              isActive: faker.datatype.boolean(),
              status: faker.helpers.arrayElement(
                Object.values(ParticipantStatus),
              ),
              user: {
                create: userCreateOne,
              },
            },
          },
        },
        claimFinancials: {
          create: {
            requestedAmount: faker.datatype.float({
              min: 300000,
              max: 3000000,
            }),
          },
        },
        claimProcesses: {
          create: {
            startTreatment: faker.date.past(),
            endTreatment: faker.date.recent(),
            submissionNote: faker.lorem.paragraph(),
            description: faker.lorem.paragraph(),
            additionalNote: faker.lorem.paragraph(),
          },
        },
        disease: {
          connectOrCreate: {
            where: undefined,
            create: {
              name: faker.lorem.word(),
              code: faker.datatype.number(100).toString(),
            },
          },
        },
        clinics: {
          connectOrCreate: {
            where: undefined,
            create: {
              name: faker.company.companyName(),
              code: faker.datatype.number(100).toString(),
            },
          },
        },
        inputedBy: {
          connectOrCreate: {
            where: undefined,
            create: userCreateOne,
          },
        },
      },
      program: {
        connectOrCreate: {
          where: { id: faker.helpers.arrayElement(programs).id },
          create: {},
        },
      },
    });
  }

  console.log('Claims seeding with its relations completed.');
}
