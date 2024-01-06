import {
  AdmedicaStatus,
  ApplicationType,
  ClaimChannel,
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
    populateProvinceCityDistricSubdistric();
  }

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

  const roles = await prisma.role.findMany({
    include: { rolePermissions: true },
  });

  const employments = await prisma.employment.findMany();
  const branches = await prisma.branch.findMany();

  for (let i = 0; i < 100; i++) {
    const RolePermissionCreateMany: Prisma.RolePermissionCreateManyRoleInput[] =
      [];

    const availablePermissions = Object.values(Permission);

    // Specify the desired number of random permissions
    const numRandomPermissions = 5; // Adjust this as needed

    // Create a set to store unique permissions
    const uniquePermissions = new Set();

    // Generate and add random permissions until the desired number is reached
    while (uniquePermissions.size < numRandomPermissions) {
      const randomPermission = faker.helpers.arrayElement(availablePermissions);
      uniquePermissions.add(randomPermission);
      RolePermissionCreateMany.push({
        permission: randomPermission,
      });
    }

    const roleCreateInput: Prisma.RoleCreateWithoutUsersInput = {
      name: faker.name.jobTitle(),
      description: faker.lorem.paragraph(),
      order: faker.datatype.number(5),
      rolePermissions: { createMany: { data: RolePermissionCreateMany } },
    };

    const userCreateInput: Prisma.UserCreateWithoutParticipantInput = {
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
          create: roleCreateInput,
        },
      },
    };

    const participantCreateInput: Prisma.ParticipantCreateNestedOneWithoutClaimsInput =
      {
        connectOrCreate: {
          where: {
            userId: faker.datatype.boolean()
              ? faker.helpers.arrayElement(participants).userId
              : undefined,
          },
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
            relation: {
              connect: {
                userId: faker.helpers.arrayElement(participants).userId,
              },
            },
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
                where: {
                  id:
                    employments.length > 30
                      ? faker.helpers.arrayElement(employments).id
                      : undefined,
                },
                create: {
                  employmentPosition: faker.helpers.arrayElement(
                    Object.values(Position),
                  ),
                  branch: {
                    connectOrCreate: {
                      where: {
                        id:
                          branches.length > 30
                            ? faker.helpers.arrayElement(branches).id
                            : undefined,
                      },
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
            name: faker.company.name(),
            code: faker.datatype.number(100).toString(),
          },
        },
      },
      inputedBy: {
        connectOrCreate: {
          where: undefined,
          create: userCreateInput,
        },
      },
      program: { connect: { id: faker.helpers.arrayElement(programs).id } },
    };

    // Create claim
    await prisma.claim.create({
      data: claimCreateInput,
    });
  }

  console.log('Claims seeded with its relations completed.');
}
