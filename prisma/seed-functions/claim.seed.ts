import {
  AdmedicaStatus,
  ApplicationType,
  ClaimChannel,
  ClaimStatusType,
  Class,
  Gender,
  ParticipantStatus,
  Permission,
  Position,
  Prisma,
  PrismaClient,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { populateProvinceCityDistricSubdistric } from './address.seed';

let prisma = new PrismaClient();

export async function claimSeed() {
  const subdistricts = await prisma.subdistrict.findMany();

  if (subdistricts.length <= 0) {
    await populateProvinceCityDistricSubdistric();
  }

  const roles = await prisma.role.findMany({
    include: { rolePermissions: { select: { permission: true } } },
  });

  const permissions = await prisma.rolePermission.findMany();

  if (permissions.length <= 0) {
    for (let i = 0; i < 4; i++) {
      console.log(
        await prisma.rolePermission.create({
          data: {
            permission: faker.helpers.arrayElement(Object.values(Permission)),
          },
        }),
      );
    }
  }

  if (roles.length <= 0) {
    for (let i = 0; i < 4; i++) {
      console.log(
        await prisma.role.create({
          data: {
            name: faker.name.jobTitle(),
            description: faker.lorem.paragraph(),
            order: faker.datatype.number(5),
            rolePermissions: {
              connect: { id: faker.helpers.arrayElement(permissions).id },
            },
          },
        }),
      );
    }
  }

  const newRoles = await prisma.role.findMany({
    include: { rolePermissions: { select: { permission: true } } },
  });

  const programs = await prisma.program.findMany();

  if (programs.length <= 0) {
    for (let i = 0; i < 5; i++) {
      await prisma.program.create({
        data: {
          plan: faker.helpers.arrayElement(Object.values(ApplicationType)),
          class: faker.helpers.arrayElement(Object.values(Class)),
        },
      });
    }
  }

  const participants = await prisma.participant.findMany();
  const employments = await prisma.employment.findMany();
  const branches = await prisma.branch.findMany();

  // Create claims
  for (let i = 0; i < 100; i++) {
    const userCreateInput: Prisma.UserCreateWithoutParticipantInput = {
      fullName: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: { connect: { id: faker.helpers.arrayElement(newRoles).id } },
    };

    const participantCreateInput: Prisma.ParticipantCreateNestedOneWithoutClaimsInput =
      {
        connectOrCreate: {
          where: faker.datatype.boolean()
            ? participants.length > 0
              ? { userId: faker.helpers.arrayElement(participants).userId }
              : { userId: 'ABC' }
            : { userId: 'ABC' },
          create: {
            gender: faker.helpers.arrayElement(Object.values(Gender)),
            birthDate: faker.date.past(),
            isActive: faker.datatype.boolean(),
            status: faker.helpers.arrayElement(
              Object.values(ParticipantStatus),
            ),
            user: {
              create: userCreateInput,
            },
            // relation: {
            //   connectOrCreate: {
            //     where: {userId: faker.helpers.arrayElement(participants).userId},
            //     create: {

            //     },
            //   },
            // },
            bankAccount: {
              create: {
                accountName: faker.finance.creditCardIssuer(),
                accountNumber: faker.datatype.number({
                  min: 300000,
                  max: 500000,
                }),
              },
            },
            employments: {
              connectOrCreate: {
                where:
                  employments.length > 30
                    ? {
                        id: faker.helpers.arrayElement(employments).id,
                      }
                    : { id: 1001010 },
                create: {
                  employmentPosition: faker.helpers.arrayElement(
                    Object.values(Position),
                  ),
                  branch: {
                    connectOrCreate: {
                      where:
                        branches.length > 30
                          ? {
                              id: faker.helpers.arrayElement(branches).id,
                            }
                          : { id: 1001010 },

                      create: {
                        name: faker.company.name(),
                      },
                    },
                  },
                },
              },
            },
            contactInfos: {
              create: {
                telp: faker.phone.number(),
                address: {
                  create: {
                    address: faker.address.streetAddress(),
                    subdistrict: {
                      connect: {
                        id: faker.helpers.arrayElement(subdistricts).id,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      };

    const claimCreateInput: Prisma.ClaimCreateInput = {
      id: faker.datatype.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
      admedicaStatus: faker.helpers.arrayElement(Object.values(AdmedicaStatus)),
      company: faker.company.name(),
      participant: participantCreateInput,
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
        create: {
          name: faker.lorem.word(),
          code: faker.datatype.number(100).toString(),
        },
      },
      clinics: {
        create: {
          name: faker.company.name(),
          code: faker.datatype.number(100).toString(),
        },
      },
      inputedBy: {
        create: {
          fullName: faker.name.firstName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          role: { connect: { id: faker.helpers.arrayElement(newRoles).id } },
        },
      },
      program: { connect: { id: faker.helpers.arrayElement(programs).id } },
      claimStatuses: {
        create: {
          status: faker.helpers.arrayElement(Object.values(ClaimStatusType)),
          createBy: {
            create: {
              fullName: faker.name.firstName(),
              email: faker.internet.email(),
              password: faker.internet.password(),
              role: {
                connect: { id: faker.helpers.arrayElement(newRoles).id },
              },
            },
          },
        },
      },
    };

    // Create claim
    await prisma.claim.create({
      data: claimCreateInput,
    });
  }

  console.log('Claims seeded with its relations completed.');
}
