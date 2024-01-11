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
    roleType: faker.helpers.arrayElement(Object.values(RoleType)),
    name: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    higherLevelThanId: faker.datatype.number({ min: 1, max: 7 }),
  }));

  const rolePermissionCreateManyInput: Prisma.RolePermissionCreateManyInput[] =
    Array.from({
      length: Object.values(Permission).length,
    }).map((_, index) => ({
      roleId: faker.datatype.number({
        min: 1,
        max: roleCreateManyInput.length,
      }),
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
  ];

  await prisma.program
    .createMany({
      data: programCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Programs seeded.'));

  const programFindMany = await prisma.program.findMany();

  const userCreateManyInput: Prisma.UserCreateManyInput[] = Array.from({
    length: records / 2,
  }).map((_, index) => ({
    id: faker.datatype.uuid(),
    fullName: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: faker.datatype.number({
      min: 1,
      max: roleCreateManyInput.length,
    }),
  }));

  const bankAccountCreateManyInput: Prisma.BankAccountCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      accountName: faker.finance.creditCardIssuer(),
      accountNumber: faker.datatype.number({
        min: 300000,
        max: 500000,
      }),
    }));

  const branchCreateManyInput: Prisma.BranchCreateManyInput[] = Array.from({
    length: records,
  }).map((_, index) => ({
    name: faker.company.name(),
  }));

  const employmentCreateManyInput: Prisma.EmploymentCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      employmentPosition: faker.helpers.arrayElement(Object.values(Position)),
      branchId: faker.datatype.number({
        min: 1,
        max: branchCreateManyInput.length,
      }),
    }));

  const addressCreateManyInput: Prisma.AddressCreateManyInput[] = Array.from({
    length: userCreateManyInput.length,
  }).map((_, index) => ({
    address: faker.address.streetAddress(),
    subdistrictId: faker.datatype.number({
      min: 1,
      max: subdistricts.length,
    }),
  }));

  const contactInfoCreateManyInput: Prisma.ContactInfoCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      addressId: index + 1,
    }));

  const phoneCreateManyInput: Prisma.phoneCreateManyInput[] = Array.from({
    length: userCreateManyInput.length,
  }).map((_, index) => ({
    number: faker.datatype.number({
      min: 100000,
      max: 5000000,
    }),
    contactInfoId: index + 1,
  }));

  const accountCreateManyInput: Prisma.AccountCreateManyInput[] = Array.from({
    length: userCreateManyInput.length,
  }).map((_, index) => ({
    currentBalance: 50000000,
  }));

  await prisma.account
    .createMany({
      data: accountCreateManyInput, // Replace with your actual input array for Funding
    })
    .then((i) => console.log(i.count, ' Accounts seeded.'));

  const accountFindMany = await prisma.account.findMany();

  const programParticipationCreateManyInput = accountFindMany.map(
    (record, index) => ({
      bpjsNumber: '23432525',
      effectiveDate: new Date(),
      santunanHarianRawatInapPlan: faker.helpers.arrayElement(
        Object.values(SantunanHarianRawatInapPlan),
      ),
      fundingId: record.id, // Use actual ID from created Funding records
    }),
  );

  await prisma.programParticipation
    .createMany({
      data: programParticipationCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Program participations seeded.'));

  const programParticipationFindMany =
    await prisma.programParticipation.findMany();

  const participantCreateManyInput: Prisma.ParticipantCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
      userId: userCreateManyInput[index].id,
      gender: faker.helpers.arrayElement(Object.values(Gender)),
      birthDate: faker.date.past(),
      isActive: faker.datatype.boolean(),
      status: faker.helpers.arrayElement(Object.values(ParticipantStatus)),
      bankAccountId: index + 1,
      employmentId: index + 1,
      contactInfoId: index + 1,
      programParticipationId: index + 1,
    }));

  const transactionCreateManyInput: Prisma.TransactionCreateManyInput[] =
    Array.from({
      length: accountCreateManyInput.length,
    }).map((_, index) => ({
      amount: faker.datatype.float({
        min: 300000,
        max: 3000000,
      }),
      transactionType: TransactionType.DEBIT,
      accountId: index + 1,
      description: faker.lorem.lines(),
    }));

  const claimFinancialCreateManyInput: Prisma.ClaimFinancialCreateManyInput[] =
    Array.from({
      length: userCreateManyInput.length,
    }).map((_, index) => ({
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
      transactionId: index + 1,
    }));

  const clinicCreateManyInput: Prisma.ClinicCreateManyInput[] = Array.from({
    length: records,
  }).map((_, index) => ({
    name: faker.company.name(),
    code: faker.random.numeric(5),
  }));

  const diseaseCreateManyInput: Prisma.DiseaseCreateManyInput[] = Array.from({
    length: records,
  }).map((_, index) => ({
    name: faker.lorem.word(),
    code: faker.random.numeric(5),
  }));

  let programParticipationToProgramsCreateManyInput =
    programParticipationFindMany.map((ppRecord, index) => {
      // Use modulo operation to safely loop over programRecords
      let programIndex = index % programFindMany.length;
      return {
        programParticipationId: ppRecord.id,
        programId: programFindMany[programIndex].id, // Correctly reference the program ID
        isAvailable: faker.datatype.boolean(),
        allowanceCeilingRemaining: faker.datatype.float({}),
        allowanceQuotaRemaining: faker.datatype.float({}),
      };
    });

  // Create ProgramParticipationToPrograms entries
  await prisma.programParticipationToPrograms.createMany({
    data: programParticipationToProgramsCreateManyInput,
  });

  const programParticipationToProgramsFindMany =
    await prisma.programParticipationToPrograms.findMany();

  const claimProgramCreateManyInput: Prisma.ClaimProgramCreateManyInput[] =
    Array.from({ length: userCreateManyInput.length }).map((_, index) => ({
      startTreatment: faker.date.past(),
      endTreatment: faker.date.recent(),
      submissionNote: faker.lorem.lines(),
      description: faker.lorem.lines(),
      additionalNote: faker.lorem.lines(),
      clinicId: faker.datatype.number({
        min: 1,
        max: clinicCreateManyInput.length,
      }),
      diseaseId: faker.datatype.number({
        min: 1,
        max: diseaseCreateManyInput.length,
      }),
      isReclaim: faker.datatype.boolean(),
      programParticipationToProgramsProgramParticipationId:
        programParticipationToProgramsFindMany[index].programParticipationId,
      programParticipationToProgramsProgramId:
        programParticipationToProgramsFindMany[index].programId,
    }));

  let claimCreateManyInput: Prisma.ClaimCreateManyInput[] = Array.from({
    length: claimProgramCreateManyInput.length,
  }).map((_, index) => ({
    id: faker.datatype.uuid(),
    channel: faker.helpers.arrayElement(Object.values(ClaimChannel)),
    admedicaStatus: faker.helpers.arrayElement(Object.values(AdmedicaStatus)),
    company: faker.company.name(),
    participantId: participantCreateManyInput[index].userId,
    claimFinancialId: index + 1,
    claimProgramId: index + 1,
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

  const claimProgramFindMany = await prisma.claimProgram.findMany();

  const documentCreateManyInput: Prisma.DocumentCreateManyInput[] = Array.from({
    length: records * 5,
  }).map((_, index) => ({
    size: faker.datatype.number(3),
    source: faker.helpers.arrayElement(Object.values(DocumentSource)),
    type: faker.helpers.arrayElement(Object.values(DocumentType)),
    docxPath: faker.system.filePath(),
    pdfPath: faker.system.filePath(),
    claimProgramId: faker.helpers.arrayElement(claimProgramFindMany).id,
  }));

  await prisma.document
    .createMany({
      data: documentCreateManyInput,
    })
    .then((i) => console.log(i.count, ' Documents seeded.'));

  console.log('Claims seeded with its relations completed.');
}
