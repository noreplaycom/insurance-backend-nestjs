
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  email: 'email',
  emailVerifiedAt: 'emailVerifiedAt',
  password: 'password',
  profilePictureUrl: 'profilePictureUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  roleId: 'roleId',
  participantId: 'participantId'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  order: 'order',
  higherLevelThanId: 'higherLevelThanId'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  roleId: 'roleId',
  permission: 'permission'
};

exports.Prisma.ParticipantScalarFieldEnum = {
  gender: 'gender',
  birthDate: 'birthDate',
  isActive: 'isActive',
  status: 'status',
  userId: 'userId',
  relationId: 'relationId',
  bankAccountId: 'bankAccountId'
};

exports.Prisma.ContactInfoScalarFieldEnum = {
  id: 'id',
  telp: 'telp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  participantId: 'participantId',
  addressId: 'addressId'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  address: 'address',
  cityId: 'cityId',
  postalCode: 'postalCode'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BankAccountScalarFieldEnum = {
  id: 'id',
  accountNumber: 'accountNumber',
  accountName: 'accountName',
  participantId: 'participantId'
};

exports.Prisma.EmploymentScalarFieldEnum = {
  id: 'id',
  employmentPosition: 'employmentPosition',
  participantId: 'participantId',
  branchId: 'branchId',
  groupId: 'groupId',
  regionId: 'regionId'
};

exports.Prisma.BranchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RegionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AnnouncementScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdById: 'createdById'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content',
  createdAt: 'createdAt',
  isRead: 'isRead',
  isCleared: 'isCleared',
  deepLink: 'deepLink',
  fcmToken: 'fcmToken',
  userId: 'userId'
};

exports.Prisma.ProgramParticipationScalarFieldEnum = {
  id: 'id',
  bpjsNumber: 'bpjsNumber',
  nonActiveReason: 'nonActiveReason',
  effectiveDate: 'effectiveDate',
  nonActiveDate: 'nonActiveDate',
  participantId: 'participantId',
  fundingId: 'fundingId',
  programId: 'programId'
};

exports.Prisma.ProgramScalarFieldEnum = {
  id: 'id',
  plan: 'plan',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  allowanceCeiling: 'allowanceCeiling',
  class: 'class',
  maxAllowance: 'maxAllowance'
};

exports.Prisma.ClaimScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  channel: 'channel',
  admedicaStatus: 'admedicaStatus',
  company: 'company',
  participantId: 'participantId',
  claimFinancialId: 'claimFinancialId',
  claimProcessId: 'claimProcessId',
  diseaseId: 'diseaseId',
  clinicId: 'clinicId',
  inputedById: 'inputedById',
  claimTypeId: 'claimTypeId'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  path: 'path',
  size: 'size',
  printCount: 'printCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  source: 'source',
  type: 'type',
  claimProcessId: 'claimProcessId'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClaimTypeScalarFieldEnum = {
  id: 'id',
  jenis: 'jenis',
  jenisRI: 'jenisRI',
  plan: 'plan',
  programId: 'programId',
  claimId: 'claimId'
};

exports.Prisma.ClaimFinancialScalarFieldEnum = {
  id: 'id',
  requestedAmount: 'requestedAmount',
  paidAmount: 'paidAmount',
  rejectedAmount: 'rejectedAmount',
  transactionProcessDate: 'transactionProcessDate',
  transferDate: 'transferDate',
  claimId: 'claimId',
  branchId: 'branchId',
  claimStatusId: 'claimStatusId'
};

exports.Prisma.ClaimProcessScalarFieldEnum = {
  id: 'id',
  startTreatment: 'startTreatment',
  endTreatment: 'endTreatment',
  expeditionDate: 'expeditionDate',
  reclaim: 'reclaim',
  processDate: 'processDate',
  submissionNote: 'submissionNote',
  description: 'description',
  additionalNote: 'additionalNote',
  claimId: 'claimId'
};

exports.Prisma.ClaimStatusScalarFieldEnum = {
  id: 'id',
  description: 'description',
  rejectionReason: 'rejectionReason',
  createdAt: 'createdAt',
  status: 'status',
  createById: 'createById',
  claimId: 'claimId',
  rejectionLetterId: 'rejectionLetterId',
  guaranteeLetterId: 'guaranteeLetterId',
  transactionLetterId: 'transactionLetterId',
  bookKeepingOrderId: 'bookKeepingOrderId'
};

exports.Prisma.DiseaseScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClinicScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  currentBalance: 'currentBalance',
  currentBalanceLastUpdate: 'currentBalanceLastUpdate',
  participantId: 'participantId'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  transactionType: 'transactionType',
  description: 'description',
  createdAt: 'createdAt',
  accountId: 'accountId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Permission = exports.$Enums.Permission = {
  CREATE_CLAIM: 'CREATE_CLAIM',
  UPDATE_CLAIM: 'UPDATE_CLAIM',
  UPDATE_CLAIM_STATUS: 'UPDATE_CLAIM_STATUS',
  UPDATE_STATUS_FINANCIAL: 'UPDATE_STATUS_FINANCIAL',
  RELEASE_CLAIM: 'RELEASE_CLAIM',
  DELETE_CLAIM_DOCUMENT: 'DELETE_CLAIM_DOCUMENT',
  CREATE_CLAIM_DOCUMENT: 'CREATE_CLAIM_DOCUMENT',
  IMPORT_CLAIM: 'IMPORT_CLAIM',
  EXPORT_CLAIM: 'EXPORT_CLAIM',
  CREATE_PARTICIPANT: 'CREATE_PARTICIPANT',
  UPDATE_PARTICIPANT: 'UPDATE_PARTICIPANT',
  IMPORT_PARTICIPANT: 'IMPORT_PARTICIPANT',
  EXPORT_PARTICIPANT: 'EXPORT_PARTICIPANT'
};

exports.Gender = exports.$Enums.Gender = {
  UNKNOWN: 'UNKNOWN',
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.ParticipantStatus = exports.$Enums.ParticipantStatus = {
  PENSIUNAN: 'PENSIUNAN',
  PASANGAN: 'PASANGAN',
  YATIM: 'YATIM',
  JANDADUDA6BULAN: 'JANDADUDA6BULAN'
};

exports.Position = exports.$Enums.Position = {
  AMGR: 'AMGR',
  AVP: 'AVP',
  PGD: 'PGD',
  MGR: 'MGR',
  SASST: 'SASST',
  VP: 'VP',
  SAVP: 'SAVP',
  SMGR: 'SMGR',
  SAMGR: 'SAMGR',
  ASST: 'ASST'
};

exports.ApplicationType = exports.$Enums.ApplicationType = {
  SANTUNAN_HARIAN_RAWAT_INAP: 'SANTUNAN_HARIAN_RAWAT_INAP',
  BANTUAN_BIAYA_CUCI_DARAH: 'BANTUAN_BIAYA_CUCI_DARAH',
  BANTUAN_KURSI_RODA: 'BANTUAN_KURSI_RODA',
  BANTUAN_WALKER: 'BANTUAN_WALKER',
  BANTUAN_IGD_UGD: 'BANTUAN_IGD_UGD',
  BANTUAN_RAWAT_INAP: 'BANTUAN_RAWAT_INAP'
};

exports.Class = exports.$Enums.Class = {
  I: 'I',
  II: 'II',
  III: 'III'
};

exports.ClaimChannel = exports.$Enums.ClaimChannel = {
  REGULER: 'REGULER',
  WA: 'WA',
  EMAIL: 'EMAIL'
};

exports.AdmedicaStatus = exports.$Enums.AdmedicaStatus = {
  NON_ADMEDICA: 'NON_ADMEDICA',
  ADMEDICA: 'ADMEDICA'
};

exports.DocumentSource = exports.$Enums.DocumentSource = {
  UPLOADED: 'UPLOADED',
  GENERATED: 'GENERATED'
};

exports.DocumentType = exports.$Enums.DocumentType = {
  INVOICE: 'INVOICE',
  CLAIM_FORM: 'CLAIM_FORM',
  REJECTION_LETTER: 'REJECTION_LETTER',
  GUARANTEE_LETTER: 'GUARANTEE_LETTER',
  RECAP: 'RECAP',
  EXPEDITION: 'EXPEDITION',
  TRANSFER: 'TRANSFER'
};

exports.Color = exports.$Enums.Color = {
  WHITE: 'WHITE',
  BLUE: 'BLUE',
  RED: 'RED',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN'
};

exports.ClaimStatusType = exports.$Enums.ClaimStatusType = {
  DOCUMENT: 'DOCUMENT',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  RELEASE: 'RELEASE',
  PAID: 'PAID',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REOPEN: 'REOPEN'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  RolePermission: 'RolePermission',
  Participant: 'Participant',
  ContactInfo: 'ContactInfo',
  Address: 'Address',
  City: 'City',
  BankAccount: 'BankAccount',
  Employment: 'Employment',
  Branch: 'Branch',
  Group: 'Group',
  Region: 'Region',
  Announcement: 'Announcement',
  Notification: 'Notification',
  ProgramParticipation: 'ProgramParticipation',
  Program: 'Program',
  Claim: 'Claim',
  Document: 'Document',
  Tag: 'Tag',
  ClaimType: 'ClaimType',
  ClaimFinancial: 'ClaimFinancial',
  ClaimProcess: 'ClaimProcess',
  ClaimStatus: 'ClaimStatus',
  Disease: 'Disease',
  Clinic: 'Clinic',
  Account: 'Account',
  Transaction: 'Transaction'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
