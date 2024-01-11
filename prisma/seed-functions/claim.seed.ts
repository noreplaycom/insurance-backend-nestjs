import {
  AdmedicaStatus,
  ClaimChannel,
  ClaimStatusType,
  DocumentSource,
  DocumentType,
  Gender,
  ParticipantStatus,
  Period,
  Permission,
  Position,
  Prisma,
  PrismaClient,
  ProgramType,
  RoleType,
  SantunanHarianRawatInapPlan,
  TambahanBantuanRawatInapType,
  TransactionType,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { populateProvinceCityDistricSubdistric } from './address.seed';

let prisma = new PrismaClient();

export async function claimSeed() {
  let subdistricts = await prisma.subdistrict.findMany();

  if (subdistricts.length <= 0) {
    await populateProvinceCityDistricSubdistric();
    subdistricts = await prisma.subdistrict.findMany({ take: 100 });
  }
  ``;
  const records: number = 1000;

  // let [roles, rolePermissions, programs, employments, branches, participants] =
  //   await Promise.all([
  //     prisma.role.findMany({
  //       include: { rolePermissions: { select: { permission: true } } },
  //     }),
  //     prisma.rolePermission.findMany(),
  //     prisma.program.findMany(),
  //     prisma.employment.findMany(),
  //     prisma.branch.findMany(),
  //     prisma.participant.findMany({
  //       where: {
  //         programParticipation: {
  //           programParticipationToPrograms: { none: { programId: {} } },
  //         },
  //       },
  //     }),
  //   ]);
  const roleCreateManyInput: Prisma.RoleCreateManyInput[] = Array.from({
    length: 8,
  }).map((_, index) => ({
    id: index + 1,
    roleType: faker.helpers.arrayElement(Object.values(RoleType)),
    name: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    higherLevelThanId: faker.datatype.number({ min: 1, max: 7 }),
  }));

  const rolePermissionCreateManyInput: Prisma.RolePermissionCreateManyInput[] =
    Array.from({
      length: Object.values(Permission).length,
    }).map((_, index) => ({
      id: index + 1,
      roleId: faker.helpers.arrayElement(roleCreateManyInput).id,
      permission: Object.values(Permission)[index],
    }));

  const programCreateManyInput: Prisma.ProgramCreateManyInput[] = [
    /*
    Maksimal santunan 60 hari rawat inap/tahun/orang
    Masa klaim 60 hari sejak keluar rumah sakit/tanggal kuitansi
    Plan I (VP keatas)= Rp.1.250.000, Plan II (MGR -SAVP) = Rp.1.000.000, Plan III (PD - SAMGR) = Rp.750.000
    Klaim ulang maksimal 60 hari sejak tanggal pemberitahuan
    */
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
      type: ProgramType.BANTUAN_RAWAT_INAP,
      tambahanBantuanRawatInapType: TambahanBantuanRawatInapType.NON_BPJS,
      maxAllowancePercentage: 50,
      allowanceCeiling: 10000000,
      allowanceCeilingPeriod: Period.YEARLY,
      claimPeriodMax: 60,
      reclaimPeriodMax: 60,
    },
  ];

  const userCreateManyInput: Prisma.UserCreateManyInput[] = Array.from({
    length: records / 2,
  }).map((_, index) => ({
    id: faker.datatype.uuid(),
    fullName: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: faker.helpers.arrayElement(roleCreateManyInput).id,
  }));

  const bankAccountCreateManyInput: Prisma.BankAccountCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      id: index + 1,
      accountName: faker.finance.creditCardIssuer(),
      accountNumber: faker.datatype.number({
        min: 300000,
        max: 500000,
      }),
    }));

  const branchCreateManyInput: Prisma.BranchCreateManyInput[] = Array.from({
    length: records,
  }).map((_, index) => ({
    id: index + 1,
    name: faker.company.name(),
  }));

  const employmentCreateManyInput: Prisma.EmploymentCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      id: index + 1,
      employmentPosition: faker.helpers.arrayElement(Object.values(Position)),
      branchId: faker.helpers.arrayElement(branchCreateManyInput).id,
    }));

  const addressCreateManyInput: Prisma.AddressCreateManyInput[] = Array.from({
    length: userCreateManyInput.length,
  }).map((_, index) => ({
    id: index + 1,
    address: faker.address.streetAddress(),
    subdistrictId: faker.helpers.arrayElement(subdistricts).id,
  }));

  const contactInfoCreateManyInput: Prisma.ContactInfoCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      id: index + 1,
      addressId: addressCreateManyInput[index].id,
    }));

  const phoneCreateManyInput: Prisma.phoneCreateManyInput[] = Array.from({
    length: userCreateManyInput.length,
  }).map((_, index) => ({
    number: faker.datatype.number({
      min: 100000,
      max: 5000000,
    }),
    contactInfoId: contactInfoCreateManyInput[index].id,
  }));

  const accountCreateManyInput: Prisma.AccountCreateManyInput[] = Array.from({
    length: userCreateManyInput.length,
  }).map((_, index) => ({
    id: index + 1,
    currentBalance: 50000000,
  }));

  const programParticipationCreateManyInput: Prisma.ProgramParticipationCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      id: index + 1,
      bpjsNumber: '23432525',
      effectiveDate: new Date(),
      santunanHarianRawatInapPlan: faker.helpers.arrayElement(
        Object.values(SantunanHarianRawatInapPlan),
      ),
      fundingId: accountCreateManyInput[index].id,
    }));

  const participantCreateManyInput: Prisma.ParticipantCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      userId: userCreateManyInput[index].id,
      gender: faker.helpers.arrayElement(Object.values(Gender)),
      birthDate: faker.date.past(),
      isActive: faker.datatype.boolean(),
      status: faker.helpers.arrayElement(Object.values(ParticipantStatus)),
      bankAccountId: bankAccountCreateManyInput[index].id,
      employmentId: employmentCreateManyInput[index].id,
      contactInfoId: contactInfoCreateManyInput[index].id,
      programParticipationId: programParticipationCreateManyInput[index].id,
    }));

  const transactionCreateManyInput: Prisma.TransactionCreateManyInput[] =
    Array.from({
      length: accountCreateManyInput.length,
    }).map((_, index) => ({
      id: index + 1,
      amount: faker.datatype.float({
        min: 300000,
        max: 3000000,
      }),
      transactionType: TransactionType.DEBIT,
      accountId: accountCreateManyInput[index].id,
      description: faker.lorem.lines(),
    }));

  const claimFinancialCreateManyInput: Prisma.ClaimFinancialCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      id: index + 1,
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
      transactionId: transactionCreateManyInput[index].id,
    }));

  const clinicCreateManyInput: Prisma.ClinicCreateManyInput[] = Array.from({
    length: records,
  }).map((_, index) => ({
    id: index + 1,
    name: faker.company.name(),
    code: faker.random.numeric(5),
  }));

  const diseaseCreateManyInput: Prisma.DiseaseCreateManyInput[] = Array.from({
    length: records,
  }).map((_, index) => ({
    id: index + 1,
    name: faker.lorem.word(),
    code: faker.random.numeric(5),
  }));

  let programParticipationToProgramsCreateManyInput: Prisma.ProgramParticipationToProgramsCreateManyInput[] =
    Array.from({ length: userCreateManyInput.length }).map((_, index) => ({
      programParticipationId: programParticipationCreateManyInput[index].id,
      programId: faker.helpers.arrayElement(programCreateManyInput).id,
      isAvailable: faker.datatype.boolean(),
      allowanceCeilingRemaining: faker.datatype.float({}),
      allowanceQuotaRemaining: faker.datatype.float({}),
    }));

  // for (let outerIndex = 0; outerIndex < 2; outerIndex++) {
  //   for (let innerIndex = 0; innerIndex <= records / 2; innerIndex++) {
  //     const currentIndex = innerIndex % records;
  //     programParticipationToProgramsCreateManyInput.push({
  //       programParticipationId:
  //         programParticipationCreateManyInput[currentIndex].id,
  //       programId: faker.helpers.arrayElement(programCreateManyInput).id,
  //       isAvailable: faker.datatype.boolean(),
  //       allowanceCeilingRemaining:
  //         programCreateManyInput[currentIndex].allowanceCeiling,
  //       allowanceQuotaRemaining:
  //         programCreateManyInput[currentIndex].allowanceQuota,
  //     });
  //   }
  // }

  const claimProgramCreateManyInput: Prisma.ClaimProgramCreateManyInput[] =
    Array.from({ length: userCreateManyInput.length }).map((_, index) => ({
      id: index + 1,
      startTreatment: faker.date.past(),
      endTreatment: faker.date.recent(),
      submissionNote: faker.lorem.lines(),
      description: faker.lorem.lines(),
      additionalNote: faker.lorem.lines(),
      clinicId: faker.helpers.arrayElement(clinicCreateManyInput).id,
      diseaseId: faker.helpers.arrayElement(diseaseCreateManyInput).id,
      isReclaim: faker.datatype.boolean(),
      programParticipationToProgramsId:
        programParticipationToProgramsCreateManyInput[index]
          .programParticipationId,
    }));

  // let claimProgramCreateManyInput: Prisma.ClaimProgramCreateManyInput[];

  // for (let index = 0; index < 2; index++) {
  //   for (let innerIndex = 0; innerIndex <= records / 2; innerIndex++) {
  //     const currentIndex = innerIndex % records;
  //     claimProgramCreateManyInput.push({
  //       id: innerIndex + 1,
  //       startTreatment: faker.date.past(),
  //       endTreatment: faker.date.recent(),
  //       submissionNote: faker.lorem.lines(),
  //       description: faker.lorem.lines(),
  //       additionalNote: faker.lorem.lines(),
  //       clinicId: faker.helpers.arrayElement(clinicCreateManyInput).id,
  //       diseaseId: faker.helpers.arrayElement(diseaseCreateManyInput).id,
  //       isReclaim: faker.datatype.boolean(),
  //       programParticipationToProgramsId:
  //         programParticipationCreateManyInput[currentIndex].id,
  //     });
  //   }
  // }

  // let claimCreateManyInput: Prisma.ClaimCreateManyInput[] = [];

  // for (let index = 0; index < 2; index++) {
  //   for (let innerIndex = 0; innerIndex < records / 2; innerIndex++) {
  //     claimCreateManyInput.push({
  //       id: faker.datatype.uuid(),
  //       channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
  //       admedicaStatus: faker.helpers.arrayElement(
  //         Object.values(AdmedicaStatus),
  //       ),
  //       company: faker.company.name(),
  //       participantId: participantCreateManyInput[innerIndex].userId,
  //       claimFinancialId: claimFinancialCreateManyInput[innerIndex].id,
  //       claimProgramId: claimProgramCreateManyInput[innerIndex].id,
  //       inputedById: faker.helpers.arrayElement(userCreateManyInput).id,
  //       waitingForId: faker.helpers.arrayElement(userCreateManyInput).id,
  //     });
  //   }
  // }

  let claimCreateManyInput: Prisma.ClaimCreateManyInput[] = Array.from({
    length: claimProgramCreateManyInput.length,
  }).map((_, index) => ({
    id: faker.datatype.uuid(),
    channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
    admedicaStatus: faker.helpers.arrayElement(Object.values(AdmedicaStatus)),
    company: faker.company.name(),
    participantId: participantCreateManyInput[index].userId,
    claimFinancialId: claimFinancialCreateManyInput[index].id,
    claimProgramId: claimProgramCreateManyInput[index].id,
    inputedById: faker.helpers.arrayElement(userCreateManyInput).id,
    waitingForId: faker.helpers.arrayElement(userCreateManyInput).id,
  }));

  const claimStatusCreateManyInput: Prisma.ClaimStatusCreateManyInput[] =
    Array.from({ length: claimCreateManyInput.length }).map((_, index) => ({
      claimId: claimCreateManyInput[index].id,
      changedById: faker.helpers.arrayElement(userCreateManyInput).id,
      type: faker.helpers.arrayElement(Object.values(ClaimStatusType)),
    }));

  const claimStatusCreateManyInput2: Prisma.ClaimStatusCreateManyInput[] =
    Array.from({ length: records * 5 }).map((_, index) => ({
      claimId: faker.helpers.arrayElement(claimCreateManyInput).id,
      changedById: faker.helpers.arrayElement(userCreateManyInput).id,
      type: faker.helpers.arrayElement(Object.values(ClaimStatusType)),
    }));

  const documentCreateManyInput: Prisma.DocumentCreateManyInput[] = Array.from({
    length: records * 5,
  }).map((_, index) => ({
    size: faker.datatype.number(3),
    source: faker.helpers.arrayElement(Object.values(DocumentSource)),
    type: faker.helpers.arrayElement(Object.values(DocumentType)),
    docxPath: faker.system.filePath(),
    pdfPath: faker.system.filePath(),
    claimProgramId: faker.helpers.arrayElement(claimProgramCreateManyInput).id,
  }));

  await prisma.role
    .createMany({
      data: roleCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Roles seeded.'));

  await prisma.rolePermission
    .createMany({
      data: rolePermissionCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Role permissions seeded.'));

  await prisma.program
    .createMany({
      data: programCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Programs seeded.'));

  await prisma.user
    .createMany({
      data: userCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Users seeded.'));
  await prisma.bankAccount
    .createMany({
      data: bankAccountCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Bank accounts seeded.'));

  await prisma.branch
    .createMany({
      data: branchCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Branches seeded.'));

  await prisma.employment
    .createMany({
      data: employmentCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Employments seeded.'));

  await prisma.address
    .createMany({
      data: addressCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Addresses seeded.'));

  await prisma.contactInfo
    .createMany({
      data: contactInfoCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Contact infos seeded.'));

  await prisma.phone
    .createMany({
      data: phoneCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Phones seeded.'));

  await prisma.account
    .createMany({
      data: accountCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Accounts seeded.'));

  await prisma.programParticipation
    .createMany({
      data: programParticipationCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Program participations seeded.'));

  await prisma.participant
    .createMany({
      data: participantCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Participants seeded.'));

  await prisma.transaction
    .createMany({
      data: transactionCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Transactions seeded.'));

  await prisma.claimFinancial
    .createMany({
      data: claimFinancialCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Claim financials seeded.'));

  await prisma.clinic
    .createMany({
      data: clinicCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Clinics seeded.'));

  await prisma.disease
    .createMany({
      data: diseaseCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Diseases seeded.'));

  await prisma.programParticipationToPrograms
    .createMany({
      data: programParticipationToProgramsCreateManyInput,
    })
    .then((i) =>
      console.log(i.count, ' Program participation to programs seeded.'),
    );

  await prisma.claimProgram
    .createMany({
      data: claimProgramCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Claim programs seeded.'));

  await prisma.claim
    .createMany({
      data: claimCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Claims seeded.'));

  await prisma.claimStatus
    .createMany({
      data: [...claimStatusCreateManyInput, ...claimStatusCreateManyInput2],
    })
    .then((i) => console.log(i.count, ' Claim statuses seeded.'));

  await prisma.document
    .createMany({
      data: documentCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Documents seeded.'));

  // employment: {
  //   create: {
  //     employmentPosition: faker.helpers.arrayElement(
  //       Object.values(Position),
  //     ),
  //     branch: {
  //       connectOrCreate: {
  //         where:
  //           branches.length > 30
  //             ? {
  //                 id: faker.helpers.arrayElement(branches).id,
  //               }
  //             : { id: 1001010 },

  //         create: {
  //           name: faker.company.name(),
  //         },
  //       },
  //     },
  //   },
  // },
  // contactInfo: {
  //   create: {
  //     phones: {
  //       create: {
  //         number: faker.datatype.number({
  //           min: 100000,
  //           max: 5000000,
  //         }),
  //       },
  //     },
  //     address: {
  //       create: {
  //         address: faker.address.streetAddress(),
  //         subdistrict: {
  //           connect: {
  //             id: faker.helpers.arrayElement(subdistricts).id,
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  // programParticipation: {
  //   create: {
  //     bpjsNumber: '23432525',
  //     effectiveDate: new Date(),
  //     santunanHarianRawatInapPlan: faker.helpers.arrayElement(
  //       Object.values(SantunanHarianRawatInapPlan),
  //     ),
  //     programParticipationToPrograms: {
  //       createMany: {
  //         data: [
  //           {
  //             programId: faker.helpers.arrayElement(programs).id,
  //             isAvailable: true,
  //             allowanceCeilingRemaining: faker.datatype.float({}),
  //           },
  //           {
  //             programId: faker.helpers.arrayElement(programs).id,
  //             isAvailable: true,
  //             allowanceCeilingRemaining: faker.datatype.float({}),
  //           },
  //           {
  //             programId: faker.helpers.arrayElement(programs).id,
  //             isAvailable: true,
  //             allowanceCeilingRemaining: faker.datatype.float({}),
  //           },
  //           {
  //             programId: faker.helpers.arrayElement(programs).id,
  //             isAvailable: true,
  //             allowanceCeilingRemaining: faker.datatype.float({}),
  //           },
  //           {
  //             programId: faker.helpers.arrayElement(programs).id,
  //             isAvailable: true,
  //             allowanceCeilingRemaining: faker.datatype.float({}),
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },

  // if (participants.length <= 0) {
  //   for (let i = 0; i < 10; i++) {
  //     const userCreateInput: Prisma.UserCreateWithoutParticipantInput = {
  //       fullName: faker.name.firstName(),
  //       email: faker.internet.email(),
  //       password: faker.internet.password(),
  //       role: { connect: { id: faker.helpers.arrayElement(newRoles).id } },
  //     };
  //     const participantCreateInput: Prisma.ParticipantCreateInput = {
  //       gender: faker.helpers.arrayElement(Object.values(Gender)),
  //       birthDate: faker.date.past(),
  //       isActive: faker.datatype.boolean(),
  //       status: faker.helpers.arrayElement(Object.values(ParticipantStatus)),
  //       user: {
  //         create: userCreateInput,
  //       },
  //       bankAccount: {
  //         create: {
  //           accountName: faker.finance.creditCardIssuer(),
  //           accountNumber: faker.datatype.number({
  //             min: 300000,
  //             max: 500000,
  //           }),
  //         },
  //       },
  //       employment: {
  //         create: {
  //           employmentPosition: faker.helpers.arrayElement(
  //             Object.values(Position),
  //           ),
  //           branch: {
  //             connectOrCreate: {
  //               where:
  //                 branches.length > 30
  //                   ? {
  //                       id: faker.helpers.arrayElement(branches).id,
  //                     }
  //                   : { id: 1001010 },

  //               create: {
  //                 name: faker.company.name(),
  //               },
  //             },
  //           },
  //         },
  //       },
  //       contactInfo: {
  //         create: {
  //           phones: {
  //             create: {
  //               number: faker.datatype.number({
  //                 min: 100000,
  //                 max: 5000000,
  //               }),
  //             },
  //           },
  //           address: {
  //             create: {
  //               address: faker.address.streetAddress(),
  //               subdistrict: {
  //                 connect: {
  //                   id: faker.helpers.arrayElement(subdistricts).id,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //       programParticipation: {
  //         create: {
  //           bpjsNumber: '23432525',
  //           effectiveDate: new Date(),
  //           santunanHarianRawatInapPlan: faker.helpers.arrayElement(
  //             Object.values(SantunanHarianRawatInapPlan),
  //           ),
  //           programParticipationToPrograms: {
  //             createMany: {
  //               data: [
  //                 {
  //                   programId: faker.helpers.arrayElement(programs).id,
  //                   isAvailable: true,
  //                   allowanceCeilingRemaining: faker.datatype.float({}),
  //                 },
  //                 {
  //                   programId: faker.helpers.arrayElement(programs).id,
  //                   isAvailable: true,
  //                   allowanceCeilingRemaining: faker.datatype.float({}),
  //                 },
  //                 {
  //                   programId: faker.helpers.arrayElement(programs).id,
  //                   isAvailable: true,
  //                   allowanceCeilingRemaining: faker.datatype.float({}),
  //                 },
  //                 {
  //                   programId: faker.helpers.arrayElement(programs).id,
  //                   isAvailable: true,
  //                   allowanceCeilingRemaining: faker.datatype.float({}),
  //                 },
  //                 {
  //                   programId: faker.helpers.arrayElement(programs).id,
  //                   isAvailable: true,
  //                   allowanceCeilingRemaining: faker.datatype.float({}),
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //       },
  //     };
  //     console.log(
  //       await prisma.participant.create({ data: participantCreateInput }),
  //     );
  //   }
  // }

  // Create claims
  // for (let i = 0; i < 100; i++) {
  //   const claimCreateInput: Prisma.ClaimCreateInput = {
  //     id: faker.datatype.uuid(),
  //     createdAt: faker.date.past(),
  //     updatedAt: faker.date.recent(),
  //     channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
  //     admedicaStatus: faker.helpers.arrayElement(Object.values(AdmedicaStatus)),
  //     company: faker.company.name(),
  //     participant: {
  //       connect: { userId: faker.helpers.arrayElement(participants).userId },
  //     },
  //     claimFinancials: {
  //       create: {
  //         requestedAmount: faker.datatype.float({
  //           min: 300000,
  //           max: 3000000,
  //         }),
  //         totalInvoiceProofAmount: faker.datatype.float({
  //           min: 300000,
  //           max: 3000000,
  //         }),
  //         previousBalance: faker.datatype.float({
  //           min: 30000000,
  //           max: 40000000,
  //         }),
  //         remainingBalance: faker.datatype.float({
  //           min: 20000000,
  //           max: 30000000,
  //         }),
  //       },
  //     },
  //     claimProgram: {
  //       create: {
  //         startTreatment: faker.date.past(),
  //         endTreatment: faker.date.recent(),
  //         submissionNote: faker.lorem.paragraph(),
  //         description: faker.lorem.paragraph(),
  //         additionalNote: faker.lorem.paragraph(),
  //         programParticipationToProgram: {
  //           connect: {
  //             programId:
  //               faker.helpers.arrayElement(participants).programParticipationId,
  //           },
  //         },
  //       },
  //     },
  //     inputedBy: {
  //       create: {
  //         fullName: faker.name.firstName(),
  //         email: faker.internet.email(),
  //         password: faker.internet.password(),
  //         role: { connect: { id: faker.helpers.arrayElement(newRoles).id } },
  //       },
  //     },
  //     // claimStatuses: {
  //     //   create: {
  //     //     status: faker.helpers.arrayElement(Object.values(ClaimStatusType)),
  //     //     changedBy: {
  //     //       create: {
  //     //         fullName: faker.name.firstName(),
  //     //         email: faker.internet.email(),
  //     //         password: faker.internet.password(),
  //     //         role: {
  //     //           connect: { id: faker.helpers.arrayElement(newRoles).id },
  //     //         },
  //     //       },
  //     //     },
  //     //   },
  //     // },
  //   };

  //   // Create claim
  //   await prisma.claim.create({
  //     data: claimCreateInput,
  //   });

  //   //counter
  //   console.log(`Claim ${i + 1} created.`);
  // }

  console.log('Claims seeded with its relations completed.');
}
