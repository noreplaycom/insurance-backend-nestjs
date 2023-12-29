import { Permission, ParticipantStatus, Position, Class, ClaimChannel, DocumentSource, DocumentType, Color, ApplicationType, AdmedicaStatus, Gender, ClaimStatusType, TransactionType } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeUser() {
  return {
    fullName: faker.lorem.words(5),
    email: faker.internet.email(),
    emailVerifiedAt: undefined,
    password: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    participantId: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.lorem.words(5),
    email: faker.internet.email(),
    emailVerifiedAt: undefined,
    password: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    roleId: faker.datatype.number(),
    participantId: undefined,
  };
}
export function fakeRole() {
  return {
    name: faker.name.fullName(),
    description: undefined,
  };
}
export function fakeRoleComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    description: undefined,
    higherLevelThanId: undefined,
  };
}
export function fakeRolePermission() {
  return {
    permission: faker.helpers.arrayElement([Permission.CREATE_CLAIM, Permission.UPDATE_CLAIM, Permission.UPDATE_CLAIM_STATUS, Permission.UPDATE_STATUS_FINANCIAL, Permission.RELEASE_CLAIM, Permission.DELETE_CLAIM_DOCUMENT, Permission.CREATE_CLAIM_DOCUMENT, Permission.IMPORT_CLAIM, Permission.EXPORT_CLAIM, Permission.CREATE_PARTICIPANT, Permission.UPDATE_PARTICIPANT, Permission.IMPORT_PARTICIPANT, Permission.EXPORT_PARTICIPANT] as const),
  };
}
export function fakeRolePermissionComplete() {
  return {
    roleId: faker.datatype.number(),
    permission: faker.helpers.arrayElement([Permission.CREATE_CLAIM, Permission.UPDATE_CLAIM, Permission.UPDATE_CLAIM_STATUS, Permission.UPDATE_STATUS_FINANCIAL, Permission.RELEASE_CLAIM, Permission.DELETE_CLAIM_DOCUMENT, Permission.CREATE_CLAIM_DOCUMENT, Permission.IMPORT_CLAIM, Permission.EXPORT_CLAIM, Permission.CREATE_PARTICIPANT, Permission.UPDATE_PARTICIPANT, Permission.IMPORT_PARTICIPANT, Permission.EXPORT_PARTICIPANT] as const),
  };
}
export function fakeParticipant() {
  return {
    gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE, Gender.UNKNOWN] as const),
    birthDate: faker.datatype.datetime(),
    nationalId: faker.lorem.words(5),
    familyCardNumber: faker.lorem.words(5),
    taxId: undefined,
    isActive: faker.datatype.boolean(),
    status: faker.helpers.arrayElement([ParticipantStatus.PENSIUNAN, ParticipantStatus.PASANGAN, ParticipantStatus.YATIM, ParticipantStatus.JANDADUDA6BULAN] as const),
    bankAccountId: faker.datatype.number(),
  };
}
export function fakeParticipantComplete() {
  return {
    gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE, Gender.UNKNOWN] as const),
    birthDate: faker.datatype.datetime(),
    nationalId: faker.lorem.words(5),
    familyCardNumber: faker.lorem.words(5),
    taxId: undefined,
    isActive: faker.datatype.boolean(),
    status: faker.helpers.arrayElement([ParticipantStatus.PENSIUNAN, ParticipantStatus.PASANGAN, ParticipantStatus.YATIM, ParticipantStatus.JANDADUDA6BULAN] as const),
    userId: faker.datatype.uuid(),
    relationId: undefined,
    bankAccountId: faker.datatype.number(),
  };
}
export function fakeContactInfo() {
  return {
    telp: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
  };
}
export function fakeContactInfoComplete() {
  return {
    id: faker.datatype.number(),
    telp: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    participantId: faker.datatype.uuid(),
    addressId: faker.datatype.number(),
  };
}
export function fakeAddress() {
  return {
    address: faker.lorem.words(5),
    postalCode: faker.lorem.words(5),
  };
}
export function fakeAddressComplete() {
  return {
    id: faker.datatype.number(),
    address: faker.lorem.words(5),
    cityId: faker.datatype.number(),
    postalCode: faker.lorem.words(5),
  };
}
export function fakeCity() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCityComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeBankAccount() {
  return {
    accountNumber: faker.datatype.float(),
    accountName: faker.lorem.words(5),
  };
}
export function fakeBankAccountComplete() {
  return {
    id: faker.datatype.number(),
    accountNumber: faker.datatype.float(),
    accountName: faker.lorem.words(5),
    participantId: faker.datatype.uuid(),
  };
}
export function fakeEmployment() {
  return {
    employmentPosition: faker.helpers.arrayElement([Position.AMGR, Position.AVP, Position.PGD, Position.MGR, Position.SASST, Position.VP, Position.SAVP, Position.SMGR, Position.SAMGR, Position.ASST] as const),
  };
}
export function fakeEmploymentComplete() {
  return {
    id: faker.datatype.number(),
    employmentPosition: faker.helpers.arrayElement([Position.AMGR, Position.AVP, Position.PGD, Position.MGR, Position.SASST, Position.VP, Position.SAVP, Position.SMGR, Position.SAMGR, Position.ASST] as const),
    participantId: faker.datatype.uuid(),
    branchId: faker.datatype.number(),
    groupId: faker.datatype.number(),
    regionId: faker.datatype.number(),
  };
}
export function fakeBranch() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeBranchComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeGroup() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeGroupComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeRegion() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeRegionComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeProgramParticipation() {
  return {
    bpjsNumber: undefined,
    nonActiveReason: undefined,
    effectiveDate: faker.datatype.datetime(),
    nonActiveDate: undefined,
  };
}
export function fakeProgramParticipationComplete() {
  return {
    id: faker.datatype.number(),
    bpjsNumber: undefined,
    nonActiveReason: undefined,
    effectiveDate: faker.datatype.datetime(),
    nonActiveDate: undefined,
    participantId: faker.datatype.uuid(),
    fundingId: faker.datatype.number(),
    programId: undefined,
  };
}
export function fakeProgram() {
  return {
    plan: faker.helpers.arrayElement([ApplicationType.SANTUNAN_HARIAN_RAWAT_INAP, ApplicationType.BANTUAN_BIAYA_CUCI_DARAH, ApplicationType.BANTUAN_KURSI_RODA, ApplicationType.BANTUAN_WALKER, ApplicationType.BANTUAN_IGD_UGD, ApplicationType.BANTUAN_RAWAT_INAP] as const),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    allowanceCeiling: faker.datatype.float(),
    class: faker.helpers.arrayElement([Class.I, Class.II, Class.III] as const),
    maxAllowance: faker.datatype.float(),
  };
}
export function fakeProgramComplete() {
  return {
    id: faker.datatype.number(),
    plan: faker.helpers.arrayElement([ApplicationType.SANTUNAN_HARIAN_RAWAT_INAP, ApplicationType.BANTUAN_BIAYA_CUCI_DARAH, ApplicationType.BANTUAN_KURSI_RODA, ApplicationType.BANTUAN_WALKER, ApplicationType.BANTUAN_IGD_UGD, ApplicationType.BANTUAN_RAWAT_INAP] as const),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    allowanceCeiling: faker.datatype.float(),
    class: faker.helpers.arrayElement([Class.I, Class.II, Class.III] as const),
    maxAllowance: faker.datatype.float(),
  };
}
export function fakeClaim() {
  return {
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    channel: faker.helpers.arrayElement([ClaimChannel.REGULER, ClaimChannel.WA, ClaimChannel.EMAIL] as const),
    admedicaStatus: faker.helpers.arrayElement([AdmedicaStatus.NON_ADMEDICA, AdmedicaStatus.ADMEDICA] as const),
  };
}
export function fakeClaimComplete() {
  return {
    id: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    channel: faker.helpers.arrayElement([ClaimChannel.REGULER, ClaimChannel.WA, ClaimChannel.EMAIL] as const),
    admedicaStatus: faker.helpers.arrayElement([AdmedicaStatus.NON_ADMEDICA, AdmedicaStatus.ADMEDICA] as const),
    companyId: faker.datatype.number(),
    participantId: faker.datatype.uuid(),
    claimFinancialId: faker.datatype.number(),
    claimProcessId: faker.datatype.number(),
    diseaseId: undefined,
    clinicId: faker.datatype.number(),
    inputedById: undefined,
    claimTypeId: faker.datatype.number(),
  };
}
export function fakeDocument() {
  return {
    name: faker.name.fullName(),
    path: faker.lorem.words(5),
    size: faker.datatype.number(),
    printCount: faker.datatype.number(),
    updatedAt: faker.datatype.datetime(),
    source: faker.helpers.arrayElement([DocumentSource.UPLOADED, DocumentSource.GENERATED] as const),
    type: faker.helpers.arrayElement([DocumentType.INVOICE, DocumentType.CLAIM_FORM, DocumentType.REJECTION_LETTER, DocumentType.GUARANTEE_LETTER, DocumentType.RECAP, DocumentType.EXPEDITION, DocumentType.TRANSFER] as const),
  };
}
export function fakeDocumentComplete() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    path: faker.lorem.words(5),
    size: faker.datatype.number(),
    printCount: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    source: faker.helpers.arrayElement([DocumentSource.UPLOADED, DocumentSource.GENERATED] as const),
    type: faker.helpers.arrayElement([DocumentType.INVOICE, DocumentType.CLAIM_FORM, DocumentType.REJECTION_LETTER, DocumentType.GUARANTEE_LETTER, DocumentType.RECAP, DocumentType.EXPEDITION, DocumentType.TRANSFER] as const),
    claimProcessId: undefined,
  };
}
export function fakeTag() {
  return {
    name: faker.name.fullName(),
    color: faker.helpers.arrayElement([Color.WHITE, Color.BLUE, Color.RED, Color.YELLOW, Color.GREEN] as const),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeTagComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    color: faker.helpers.arrayElement([Color.WHITE, Color.BLUE, Color.RED, Color.YELLOW, Color.GREEN] as const),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCompany() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeCompanyComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeClaimType() {
  return {
    jenis: faker.lorem.words(5),
    jenisRI: faker.lorem.words(5),
    plan: faker.lorem.words(5),
    claimPeriod: faker.datatype.number(),
    conditions: faker.lorem.words(5),
    claimId: faker.datatype.number(),
  };
}
export function fakeClaimTypeComplete() {
  return {
    id: faker.datatype.number(),
    jenis: faker.lorem.words(5),
    jenisRI: faker.lorem.words(5),
    plan: faker.lorem.words(5),
    claimPeriod: faker.datatype.number(),
    conditions: faker.lorem.words(5),
    programId: faker.datatype.number(),
    claimId: faker.datatype.number(),
  };
}
export function fakeClaimFinancial() {
  return {
    requestedAmount: faker.datatype.float(),
    paidAmount: undefined,
    rejectedAmount: undefined,
    transactionProcessDate: undefined,
    transferDate: undefined,
    claimId: faker.lorem.words(5),
  };
}
export function fakeClaimFinancialComplete() {
  return {
    id: faker.datatype.number(),
    requestedAmount: faker.datatype.float(),
    paidAmount: undefined,
    rejectedAmount: undefined,
    transactionProcessDate: undefined,
    transferDate: undefined,
    claimId: faker.lorem.words(5),
    branchId: faker.datatype.number(),
  };
}
export function fakeClaimProcess() {
  return {
    startTreatment: undefined,
    endTreatment: undefined,
    expeditionDate: undefined,
    reclaim: undefined,
    processDate: undefined,
    submissionNote: faker.lorem.words(5),
    description: faker.lorem.words(5),
    additionalNote: faker.lorem.words(5),
    claimId: faker.lorem.words(5),
  };
}
export function fakeClaimProcessComplete() {
  return {
    id: faker.datatype.number(),
    startTreatment: undefined,
    endTreatment: undefined,
    expeditionDate: undefined,
    reclaim: undefined,
    processDate: undefined,
    submissionNote: faker.lorem.words(5),
    description: faker.lorem.words(5),
    additionalNote: faker.lorem.words(5),
    claimId: faker.lorem.words(5),
  };
}
export function fakeClaimStatus() {
  return {
    description: undefined,
    rejectionReason: undefined,
    status: faker.helpers.arrayElement([ClaimStatusType.DOCUMENT, ClaimStatusType.PENDING, ClaimStatusType.APPROVED, ClaimStatusType.REJECTED, ClaimStatusType.RELEASE, ClaimStatusType.PAID, ClaimStatusType.COMPLETED, ClaimStatusType.CANCELLED, ClaimStatusType.REOPEN] as const),
  };
}
export function fakeClaimStatusComplete() {
  return {
    id: faker.datatype.number(),
    description: undefined,
    rejectionReason: undefined,
    createdAt: new Date(),
    status: faker.helpers.arrayElement([ClaimStatusType.DOCUMENT, ClaimStatusType.PENDING, ClaimStatusType.APPROVED, ClaimStatusType.REJECTED, ClaimStatusType.RELEASE, ClaimStatusType.PAID, ClaimStatusType.COMPLETED, ClaimStatusType.CANCELLED, ClaimStatusType.REOPEN] as const),
    createById: faker.datatype.uuid(),
    claimId: faker.datatype.uuid(),
    rejectionLetterId: undefined,
    guaranteeLetterId: undefined,
  };
}
export function fakeDisease() {
  return {
    code: faker.lorem.words(5),
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeDiseaseComplete() {
  return {
    id: faker.datatype.number(),
    code: faker.lorem.words(5),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    groupId: faker.datatype.number(),
  };
}
export function fakeDiseaseGroup() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeDiseaseGroupComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    diseaseClusterId: faker.datatype.number(),
  };
}
export function fakeDiseaseCluster() {
  return {
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeDiseaseClusterComplete() {
  return {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeClinic() {
  return {
    code: faker.lorem.words(5),
    name: faker.name.fullName(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeClinicComplete() {
  return {
    id: faker.datatype.number(),
    code: faker.lorem.words(5),
    name: faker.name.fullName(),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
  };
}
export function fakeAccount() {
  return {
    currentBalance: faker.datatype.float(),
    currentBalanceLastUpdate: undefined,
  };
}
export function fakeAccountComplete() {
  return {
    id: faker.datatype.number(),
    currentBalance: faker.datatype.float(),
    currentBalanceLastUpdate: undefined,
    participantId: faker.datatype.uuid(),
  };
}
export function fakeTransaction() {
  return {
    amount: faker.datatype.float(),
    transactionType: faker.lorem.words(5),
    description: undefined,
  };
}
export function fakeTransactionComplete() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.float(),
    transactionType: faker.lorem.words(5),
    description: undefined,
    createdAt: new Date(),
    accountId: faker.datatype.number(),
  };
}