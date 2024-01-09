import {
  AdmedicaStatus,
  ClaimChannel,
  ClaimStatusType,
  Gender,
  ParticipantStatus,
  Period,
  Permission,
  Position,
  Prisma,
  PrismaClient,
  ProgramType,
  SantunanHarianRawatInapPlan,
  TambahanBantuanRawatInapType,
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
            higherLevelThan: {
              connect: { id: faker.helpers.arrayElement(roles).id },
            },
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
    await createManyProgram(prisma);
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
            employment: {
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
            contactInfo: {
              create: {
                telp: 67289294,
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
            programParticipation: {
              create: {
                bpjsNumber: '23432525',
                effectiveDate: new Date(),
                santunanHarianRawatInapPlan: faker.helpers.arrayElement(
                  Object.values(SantunanHarianRawatInapPlan),
                ),
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
          totalInvoiceProofAmount: faker.datatype.float({
            min: 300000,
            max: 3000000,
          }),
          previousBalance: faker.datatype.float({
            min: 30000000,
            max: 40000000,
          }),
          remainingBalance: faker.datatype.float({
            min: 20000000,
            max: 30000000,
          }),
        },
      },
      claimProgram: {
        create: {
          startTreatment: faker.date.past(),
          endTreatment: faker.date.recent(),
          submissionNote: faker.lorem.paragraph(),
          description: faker.lorem.paragraph(),
          additionalNote: faker.lorem.paragraph(),
          program: { connect: { id: faker.helpers.arrayElement(programs).id } },
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

    //counter
    console.log(`Claim ${i + 1} created.`);
  }

  console.log('Claims seeded with its relations completed.');
}
async function createManyProgram(
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    import('@prisma/client/runtime/library').DefaultArgs
  >,
) {
  await prisma.program.createMany({
    data: [
      /*
      Maksimal santunan 60 hari rawat inap/tahun/orang
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.SANTUNAN_HARIAN_RAWAT_INAP,
        santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.I,
        allowanceCeiling: 1250000,
        allowanceCeilingPeriod: Period.DAILY,
        allowanceQuota: 60,
        allowanceQuotaPeriod: Period.WEEKLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
      Maksimal santunan 60 hari rawat inap/tahun/orang
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.SANTUNAN_HARIAN_RAWAT_INAP,
        santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.II,
        allowanceCeiling: 1000000,
        allowanceCeilingPeriod: Period.DAILY,
        allowanceQuota: 60,
        allowanceQuotaPeriod: Period.YEARLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
      /*
      Maksimal santunan 60 hari rawat inap/tahun/orang
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.SANTUNAN_HARIAN_RAWAT_INAP,
        santunanHarianRawatInapPlan: SantunanHarianRawatInapPlan.III,
        allowanceCeiling: 750000,
        allowanceCeilingPeriod: Period.DAILY,
        allowanceQuota: 60,
        allowanceQuotaPeriod: Period.YEARLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
      Plafon per orang perminggu maksimal 2 kali kunjungan, per kunjunan maksimal Rp.700.000
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.BANTUAN_BIAYA_CUCI_DARAH,
        allowanceCeiling: 700000, //per invoice by default
        allowanceCeilingPeriod: Period.EVENT,
        allowanceQuota: 2,
        allowanceQuotaPeriod: Period.WEEKLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
      Plafon per orang maksimal Rp. 2.000.000 eenmaleg (hanya 1 kali)
      Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
      Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.BANTUAN_KURSI_RODA,
        allowanceCeiling: 2000000,
        allowanceCeilingPeriod: Period.ALLTIME,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
    Plafon per orang maksimal Rp. 350.000 / 2 tahun
    Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
    Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.BANTUAN_WALKER,
        allowanceCeiling: 350000,
        allowanceCeilingPeriod: Period.BIENNIALLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
    50% dari biaya UGD/IGD, Plafon per pasangan maksimal Rp. 1.500.000 /tahun
    Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
    Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.BANTUAN_IGD_UGD,
        maxAllowancePercentage: 50,
        allowanceCeiling: 1500000,
        allowanceCeilingPeriod: Period.YEARLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
RI BPJS Kesehatan
1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 40.000.000 /tahun/pasangan
2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
RI Non BPJS Kesehatan
1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 10.000.000 /tahun/pasangan
2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.BANTUAN_RAWAT_INAP,
        tambahanBantuanRawatInapType: TambahanBantuanRawatInapType.BPJS,
        maxAllowancePercentage: 50,
        allowanceCeiling: 40000000,
        allowanceCeilingPeriod: Period.YEARLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
      /*
RI BPJS Kesehatan
1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 40.000.000 /tahun/pasangan
2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
RI Non BPJS Kesehatan
1 Biaya RS a/b pensiunan setelah dikurangi santunan OCP dibantu 50%, Plafon maksimal Rp. 10.000.000 /tahun/pasangan
2 Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
3 Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
      */
      {
        type: ProgramType.BANTUAN_RAWAT_INAP,
        tambahanBantuanRawatInapType: TambahanBantuanRawatInapType.NON_BPJS,
        maxAllowancePercentage: 50,
        allowanceCeiling: 10000000,
        allowanceCeilingPeriod: Period.YEARLY,
        claimPeriodMax: 60,
        reclaimPeriodMax: 60,
      },
    ],
  });
}
