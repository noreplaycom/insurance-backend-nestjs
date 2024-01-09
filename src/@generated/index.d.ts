import { Prisma } from '@prisma/client';
export declare enum UserScalarFieldEnum {
    id = "id",
    fullName = "fullName",
    email = "email",
    emailVerifiedAt = "emailVerifiedAt",
    password = "password",
    profilePictureUrl = "profilePictureUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    roleId = "roleId"
}
export declare enum TransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    transactionType = "transactionType",
    description = "description",
    createdAt = "createdAt",
    accountId = "accountId"
}
export declare enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    color = "color",
    isException = "isException",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum SubdistrictScalarFieldEnum {
    id = "id",
    name = "name",
    districtId = "districtId",
    postalCode = "postalCode"
}
export declare enum RolePermissionScalarFieldEnum {
    id = "id",
    roleId = "roleId",
    permission = "permission"
}
export declare enum RoleScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    higherLevelThanId = "higherLevelThanId",
    roleType = "roleType"
}
export declare enum RegionScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProvinceScalarFieldEnum {
    id = "id",
    name = "name"
}
export declare enum ProgramParticipationScalarFieldEnum {
    id = "id",
    bpjsNumber = "bpjsNumber",
    nonActiveReason = "nonActiveReason",
    effectiveDate = "effectiveDate",
    nonActiveDate = "nonActiveDate",
    santunanHarianRawatInapPlan = "santunanHarianRawatInapPlan",
    fundingId = "fundingId"
}
export declare enum ProgramScalarFieldEnum {
    id = "id",
    type = "type",
    santunanHarianRawatInapPlan = "santunanHarianRawatInapPlan",
    tambahanBantuanRawatInapType = "tambahanBantuanRawatInapType",
    maxAllowancePercentage = "maxAllowancePercentage",
    allowanceCeiling = "allowanceCeiling",
    allowanceCeilingPeriod = "allowanceCeilingPeriod",
    allowanceQuota = "allowanceQuota",
    allowanceQuotaPeriod = "allowanceQuotaPeriod",
    claimPeriodMax = "claimPeriodMax",
    reclaimPeriodMax = "reclaimPeriodMax",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}
export declare enum TransactionType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum TambahanBantuanRawatInapType {
    BPJS = "BPJS",
    NON_BPJS = "NON_BPJS"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum SantunanHarianRawatInapPlan {
    I = "I",
    II = "II",
    III = "III"
}
export declare enum RoleType {
    SUPERUSER = "SUPERUSER",
    PARTICIPANT = "PARTICIPANT",
    ADMIN = "ADMIN"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum ProgramType {
    SANTUNAN_HARIAN_RAWAT_INAP = "SANTUNAN_HARIAN_RAWAT_INAP",
    BANTUAN_BIAYA_CUCI_DARAH = "BANTUAN_BIAYA_CUCI_DARAH",
    BANTUAN_KURSI_RODA = "BANTUAN_KURSI_RODA",
    BANTUAN_WALKER = "BANTUAN_WALKER",
    BANTUAN_IGD_UGD = "BANTUAN_IGD_UGD",
    BANTUAN_RAWAT_INAP = "BANTUAN_RAWAT_INAP"
}
export declare enum Position {
    AMGR = "AMGR",
    AVP = "AVP",
    PGD = "PGD",
    MGR = "MGR",
    SASST = "SASST",
    VP = "VP",
    SAVP = "SAVP",
    SMGR = "SMGR",
    SAMGR = "SAMGR",
    ASST = "ASST"
}
export declare enum Permission {
    CREATE_CLAIM = "CREATE_CLAIM",
    UPDATE_CLAIM = "UPDATE_CLAIM",
    UPDATE_CLAIM_STATUS = "UPDATE_CLAIM_STATUS",
    UPDATE_STATUS_FINANCIAL = "UPDATE_STATUS_FINANCIAL",
    RELEASE_CLAIM = "RELEASE_CLAIM",
    DELETE_CLAIM_DOCUMENT = "DELETE_CLAIM_DOCUMENT",
    CREATE_CLAIM_DOCUMENT = "CREATE_CLAIM_DOCUMENT",
    IMPORT_CLAIM = "IMPORT_CLAIM",
    EXPORT_CLAIM = "EXPORT_CLAIM",
    CREATE_PARTICIPANT = "CREATE_PARTICIPANT",
    UPDATE_PARTICIPANT = "UPDATE_PARTICIPANT",
    IMPORT_PARTICIPANT = "IMPORT_PARTICIPANT",
    EXPORT_PARTICIPANT = "EXPORT_PARTICIPANT"
}
export declare enum Period {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
    BIENNIALLY = "BIENNIALLY",
    ALLTIME = "ALLTIME",
    EVENT = "EVENT"
}
export declare enum ParticipantStatus {
    PENSIUNAN = "PENSIUNAN",
    PASANGAN = "PASANGAN",
    YATIM = "YATIM",
    JANDADUDA6BULAN = "JANDADUDA6BULAN"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum Gender {
    UNKNOWN = "UNKNOWN",
    MALE = "MALE",
    FEMALE = "FEMALE"
}
export declare enum ExecutionType {
    MANUAL = "MANUAL",
    AUTO = "AUTO"
}
export declare enum DocumentType {
    INVOICE = "INVOICE",
    CLAIM_FORM = "CLAIM_FORM",
    REJECTION_LETTER = "REJECTION_LETTER",
    GUARANTEE_LETTER = "GUARANTEE_LETTER",
    RECAP = "RECAP",
    EXPEDITION = "EXPEDITION",
    TRANSFER = "TRANSFER"
}
export declare enum DocumentSource {
    UPLOADED = "UPLOADED",
    GENERATED = "GENERATED"
}
export declare enum Color {
    WHITE = "WHITE",
    BLUE = "BLUE",
    RED = "RED",
    YELLOW = "YELLOW",
    GREEN = "GREEN"
}
export declare enum ClaimStatusType {
    DOCUMENT = "DOCUMENT",
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    RELEASE = "RELEASE",
    PAID = "PAID",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    REOPEN = "REOPEN"
}
export declare enum ClaimChannel {
    REGULER = "REGULER",
    WA = "WA",
    EMAIL = "EMAIL"
}
export declare enum BackupType {
    DB = "DB",
    FULL = "FULL"
}
export declare enum AdmedicaStatus {
    NON_ADMEDICA = "NON_ADMEDICA",
    ADMEDICA = "ADMEDICA"
}
export declare enum ParticipantScalarFieldEnum {
    gender = "gender",
    birthDate = "birthDate",
    isActive = "isActive",
    status = "status",
    userId = "userId",
    relationId = "relationId",
    employmentId = "employmentId",
    bankAccountId = "bankAccountId",
    contactInfoId = "contactInfoId",
    programParticipationId = "programParticipationId"
}
export declare enum NotificationScalarFieldEnum {
    id = "id",
    title = "title",
    subtitle = "subtitle",
    content = "content",
    isRead = "isRead",
    isCleared = "isCleared",
    deepLink = "deepLink",
    fcmToken = "fcmToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}
export declare enum InvoiceProofScalarFieldEnum {
    id = "id",
    issuedDate = "issuedDate",
    amount = "amount",
    documentProofId = "documentProofId",
    claimProgramId = "claimProgramId"
}
export declare enum GroupScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum EmploymentScalarFieldEnum {
    id = "id",
    employmentPosition = "employmentPosition",
    branchId = "branchId",
    groupId = "groupId",
    regionId = "regionId"
}
export declare enum DocumentScalarFieldEnum {
    id = "id",
    name = "name",
    path = "path",
    size = "size",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    source = "source",
    type = "type",
    claimProgramId = "claimProgramId"
}
export declare enum DistrictScalarFieldEnum {
    id = "id",
    name = "name",
    cityId = "cityId"
}
export declare enum DiseaseScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ContactInfoScalarFieldEnum {
    id = "id",
    telp = "telp",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    addressId = "addressId"
}
export declare enum ClinicScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ClaimStatusScalarFieldEnum {
    id = "id",
    description = "description",
    rejectionReason = "rejectionReason",
    createdAt = "createdAt",
    status = "status",
    createById = "createById",
    claimId = "claimId",
    rejectionLetterId = "rejectionLetterId",
    guaranteeLetterId = "guaranteeLetterId",
    transactionLetterId = "transactionLetterId",
    bookKeepingOrderId = "bookKeepingOrderId"
}
export declare enum ClaimProgramScalarFieldEnum {
    id = "id",
    expeditionDate = "expeditionDate",
    reclaim = "reclaim",
    submissionNote = "submissionNote",
    description = "description",
    additionalNote = "additionalNote",
    startTreatment = "startTreatment",
    endTreatment = "endTreatment",
    kurisRodaOrWalkerSetoreName = "kurisRodaOrWalkerSetoreName",
    diseaseId = "diseaseId",
    clinicId = "clinicId",
    programId = "programId"
}
export declare enum ClaimFinancialScalarFieldEnum {
    id = "id",
    totalInvoiceProofAmount = "totalInvoiceProofAmount",
    requestedAmount = "requestedAmount",
    paidAmount = "paidAmount",
    rejectedAmount = "rejectedAmount",
    transactionProcessDate = "transactionProcessDate",
    transferDate = "transferDate",
    previousBalance = "previousBalance",
    remainingBalance = "remainingBalance",
    branchId = "branchId",
    claimStatusId = "claimStatusId"
}
export declare enum ClaimScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    channel = "channel",
    admedicaStatus = "admedicaStatus",
    company = "company",
    participantId = "participantId",
    claimFinancialId = "claimFinancialId",
    claimProgramId = "claimProgramId",
    inputedById = "inputedById",
    waitingForId = "waitingForId"
}
export declare enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    provinceId = "provinceId"
}
export declare enum BranchScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum BankAccountScalarFieldEnum {
    id = "id",
    accountNumber = "accountNumber",
    accountName = "accountName"
}
export declare enum BackupScalarFieldEnum {
    id = "id",
    path = "path",
    isSuccessful = "isSuccessful",
    type = "type",
    executionType = "executionType",
    createdAt = "createdAt"
}
export declare enum AnnouncementScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    imageUrl = "imageUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdById = "createdById"
}
export declare enum AddressScalarFieldEnum {
    id = "id",
    address = "address",
    subdistrictId = "subdistrictId"
}
export declare enum AccountScalarFieldEnum {
    id = "id",
    currentBalance = "currentBalance",
    currentBalanceLastUpdate = "currentBalanceLastUpdate"
}
export declare class AccountAggregateArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}
export declare class AccountAvgAggregateInput {
    id?: true;
    currentBalance?: true;
}
export declare class AccountAvgAggregate {
    id?: number;
    currentBalance?: number;
}
export declare class AccountAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
}
export declare class AccountCountAggregateInput {
    id?: true;
    currentBalance?: true;
    currentBalanceLastUpdate?: true;
    _all?: true;
}
export declare class AccountCountAggregate {
    id: number;
    currentBalance: number;
    currentBalanceLastUpdate: number;
    _all: number;
}
export declare class AccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: keyof typeof SortOrder;
}
export declare class AccountCount {
    transactions?: number;
    programParticipation?: number;
}
export declare class AccountCreateManyInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
}
export declare class AccountCreateNestedOneWithoutProgramParticipationInput {
    create?: InstanceType<typeof AccountCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProgramParticipationInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateNestedOneWithoutTransactionsInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class AccountCreateOrConnectWithoutProgramParticipationInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutProgramParticipationInput>;
}
export declare class AccountCreateOrConnectWithoutTransactionsInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
}
export declare class AccountCreateWithoutProgramParticipationInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
}
export declare class AccountCreateWithoutTransactionsInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    programParticipation?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutFundingInput>;
}
export declare class AccountCreateInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutFundingInput>;
}
export declare class AccountGroupByArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithAggregationInput>;
    by: Array<keyof typeof AccountScalarFieldEnum>;
    having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AccountCountAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgAggregateInput>;
    _sum?: InstanceType<typeof AccountSumAggregateInput>;
    _min?: InstanceType<typeof AccountMinAggregateInput>;
    _max?: InstanceType<typeof AccountMaxAggregateInput>;
}
export declare class AccountGroupBy {
    id: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class AccountMaxAggregateInput {
    id?: true;
    currentBalance?: true;
    currentBalanceLastUpdate?: true;
}
export declare class AccountMaxAggregate {
    id?: number;
    currentBalance?: number;
    currentBalanceLastUpdate?: Date | string;
}
export declare class AccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: keyof typeof SortOrder;
}
export declare class AccountMinAggregateInput {
    id?: true;
    currentBalance?: true;
    currentBalanceLastUpdate?: true;
}
export declare class AccountMinAggregate {
    id?: number;
    currentBalance?: number;
    currentBalanceLastUpdate?: Date | string;
}
export declare class AccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: keyof typeof SortOrder;
}
export declare class AccountNullableRelationFilter {
    is?: InstanceType<typeof AccountWhereInput>;
    isNot?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}
export declare class AccountOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: InstanceType<typeof SortOrderInput>;
    transactions?: InstanceType<typeof TransactionOrderByRelationAggregateInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationOrderByRelationAggregateInput>;
}
export declare class AccountRelationFilter {
    is?: InstanceType<typeof AccountWhereInput>;
    isNot?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: Array<AccountScalarWhereWithAggregatesInput>;
    OR?: Array<AccountScalarWhereWithAggregatesInput>;
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    currentBalance?: InstanceType<typeof FloatWithAggregatesFilter>;
    currentBalanceLastUpdate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class AccountSumAggregateInput {
    id?: true;
    currentBalance?: true;
}
export declare class AccountSumAggregate {
    id?: number;
    currentBalance?: number;
}
export declare class AccountSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
}
export declare class AccountUncheckedCreateWithoutProgramParticipationInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutTransactionsInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput>;
}
export declare class AccountUncheckedCreateInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput>;
}
export declare class AccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateWithoutProgramParticipationInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutTransactionsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpdateManyMutationInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AccountUpdateOneRequiredWithoutTransactionsNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionsInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutTransactionsInput>;
}
export declare class AccountUpdateOneWithoutProgramParticipationNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProgramParticipationInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutProgramParticipationInput>;
    disconnect?: InstanceType<typeof AccountWhereInput>;
    delete?: InstanceType<typeof AccountWhereInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutProgramParticipationInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutProgramParticipationInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutProgramParticipationInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutTransactionsInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutTransactionsInput>;
}
export declare class AccountUpdateWithoutProgramParticipationInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutTransactionsInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpdateInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpsertWithoutProgramParticipationInput {
    update: InstanceType<typeof AccountUpdateWithoutProgramParticipationInput>;
    create: InstanceType<typeof AccountCreateWithoutProgramParticipationInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountUpsertWithoutTransactionsInput {
    update: InstanceType<typeof AccountUpdateWithoutTransactionsInput>;
    create: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountWhereUniqueInput {
    id?: number;
    AND?: Array<AccountWhereInput>;
    OR?: Array<AccountWhereInput>;
    NOT?: Array<AccountWhereInput>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    currentBalanceLastUpdate?: InstanceType<typeof DateTimeNullableFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    programParticipation?: InstanceType<typeof ProgramParticipationListRelationFilter>;
}
export declare class AccountWhereInput {
    AND?: Array<AccountWhereInput>;
    OR?: Array<AccountWhereInput>;
    NOT?: Array<AccountWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    currentBalanceLastUpdate?: InstanceType<typeof DateTimeNullableFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    programParticipation?: InstanceType<typeof ProgramParticipationListRelationFilter>;
}
export declare class Account {
    id: number;
    currentBalance: number;
    currentBalanceLastUpdate: Date | null;
    transactions?: Array<Transaction>;
    programParticipation?: Array<ProgramParticipation>;
    _count?: InstanceType<typeof AccountCount>;
}
export declare class AggregateAccount {
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class CreateManyAccountArgs {
    data: Array<AccountCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAccountArgs {
    data: InstanceType<typeof AccountCreateInput>;
}
export declare class DeleteManyAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class DeleteOneAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class FindFirstAccountOrThrowArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindFirstAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindManyAccountArgs {
    where?: InstanceType<typeof AccountWhereInput>;
    orderBy?: Array<AccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AccountScalarFieldEnum>;
}
export declare class FindUniqueAccountOrThrowArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAccountArgs {
    data: InstanceType<typeof AccountUpdateManyMutationInput>;
    where?: InstanceType<typeof AccountWhereInput>;
}
export declare class UpdateOneAccountArgs {
    data: InstanceType<typeof AccountUpdateInput>;
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAccountArgs {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateInput>;
    update: InstanceType<typeof AccountUpdateInput>;
}
export declare class AddressAggregateArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AddressCountAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgAggregateInput>;
    _sum?: InstanceType<typeof AddressSumAggregateInput>;
    _min?: InstanceType<typeof AddressMinAggregateInput>;
    _max?: InstanceType<typeof AddressMaxAggregateInput>;
}
export declare class AddressAvgAggregateInput {
    id?: true;
    subdistrictId?: true;
}
export declare class AddressAvgAggregate {
    id?: number;
    subdistrictId?: number;
}
export declare class AddressAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressCountAggregateInput {
    id?: true;
    address?: true;
    subdistrictId?: true;
    _all?: true;
}
export declare class AddressCountAggregate {
    id: number;
    address: number;
    subdistrictId: number;
    _all: number;
}
export declare class AddressCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressCount {
    ContactInfo?: number;
}
export declare class AddressCreateManySubdistrictInputEnvelope {
    data: Array<AddressCreateManySubdistrictInput>;
    skipDuplicates?: boolean;
}
export declare class AddressCreateManySubdistrictInput {
    id?: number;
    address: string;
}
export declare class AddressCreateManyInput {
    id?: number;
    address: string;
    subdistrictId: number;
}
export declare class AddressCreateNestedManyWithoutSubdistrictInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressCreateNestedOneWithoutContactInfoInput {
    create?: InstanceType<typeof AddressCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutContactInfoInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateOrConnectWithoutContactInfoInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutContactInfoInput>;
}
export declare class AddressCreateOrConnectWithoutSubdistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutSubdistrictInput>;
}
export declare class AddressCreateWithoutContactInfoInput {
    address: string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateWithoutSubdistrictInput {
    address: string;
    ContactInfo?: InstanceType<typeof ContactInfoCreateNestedManyWithoutAddressInput>;
}
export declare class AddressCreateInput {
    address: string;
    subdistrict: InstanceType<typeof SubdistrictCreateNestedOneWithoutAddressInput>;
    ContactInfo?: InstanceType<typeof ContactInfoCreateNestedManyWithoutAddressInput>;
}
export declare class AddressGroupByArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithAggregationInput>;
    by: Array<keyof typeof AddressScalarFieldEnum>;
    having?: InstanceType<typeof AddressScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AddressCountAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgAggregateInput>;
    _sum?: InstanceType<typeof AddressSumAggregateInput>;
    _min?: InstanceType<typeof AddressMinAggregateInput>;
    _max?: InstanceType<typeof AddressMaxAggregateInput>;
}
export declare class AddressGroupBy {
    id: number;
    address: string;
    subdistrictId: number;
    _count?: InstanceType<typeof AddressCountAggregate>;
    _avg?: InstanceType<typeof AddressAvgAggregate>;
    _sum?: InstanceType<typeof AddressSumAggregate>;
    _min?: InstanceType<typeof AddressMinAggregate>;
    _max?: InstanceType<typeof AddressMaxAggregate>;
}
export declare class AddressListRelationFilter {
    every?: InstanceType<typeof AddressWhereInput>;
    some?: InstanceType<typeof AddressWhereInput>;
    none?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressMaxAggregateInput {
    id?: true;
    address?: true;
    subdistrictId?: true;
}
export declare class AddressMaxAggregate {
    id?: number;
    address?: string;
    subdistrictId?: number;
}
export declare class AddressMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressMinAggregateInput {
    id?: true;
    address?: true;
    subdistrictId?: true;
}
export declare class AddressMinAggregate {
    id?: number;
    address?: string;
    subdistrictId?: number;
}
export declare class AddressMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AddressOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AddressCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AddressMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AddressMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AddressSumOrderByAggregateInput>;
}
export declare class AddressOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
    subdistrict?: InstanceType<typeof SubdistrictOrderByWithRelationInput>;
    ContactInfo?: InstanceType<typeof ContactInfoOrderByRelationAggregateInput>;
}
export declare class AddressRelationFilter {
    is?: InstanceType<typeof AddressWhereInput>;
    isNot?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: Array<AddressScalarWhereWithAggregatesInput>;
    OR?: Array<AddressScalarWhereWithAggregatesInput>;
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    address?: InstanceType<typeof StringWithAggregatesFilter>;
    subdistrictId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class AddressScalarWhereInput {
    AND?: Array<AddressScalarWhereInput>;
    OR?: Array<AddressScalarWhereInput>;
    NOT?: Array<AddressScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    address?: InstanceType<typeof StringFilter>;
    subdistrictId?: InstanceType<typeof IntFilter>;
}
export declare class AddressSumAggregateInput {
    id?: true;
    subdistrictId?: true;
}
export declare class AddressSumAggregate {
    id?: number;
    subdistrictId?: number;
}
export declare class AddressSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    subdistrictId?: keyof typeof SortOrder;
}
export declare class AddressUncheckedCreateNestedManyWithoutSubdistrictInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressUncheckedCreateWithoutContactInfoInput {
    id?: number;
    address: string;
    subdistrictId: number;
}
export declare class AddressUncheckedCreateWithoutSubdistrictInput {
    id?: number;
    address: string;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutAddressInput>;
}
export declare class AddressUncheckedCreateInput {
    id?: number;
    address: string;
    subdistrictId: number;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutAddressInput>;
}
export declare class AddressUncheckedUpdateManyWithoutSubdistrictNestedInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutSubdistrictInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutSubdistrictInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUncheckedUpdateManyWithoutSubdistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateWithoutContactInfoInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateWithoutSubdistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrictId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUpdateManyMutationInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUpdateManyWithWhereWithoutSubdistrictInput {
    where: InstanceType<typeof AddressScalarWhereInput>;
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
}
export declare class AddressUpdateManyWithoutSubdistrictNestedInput {
    create?: Array<AddressCreateWithoutSubdistrictInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutSubdistrictInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutSubdistrictInput>;
    createMany?: InstanceType<typeof AddressCreateManySubdistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutSubdistrictInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutSubdistrictInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUpdateOneRequiredWithoutContactInfoNestedInput {
    create?: InstanceType<typeof AddressCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutContactInfoInput>;
    upsert?: InstanceType<typeof AddressUpsertWithoutContactInfoInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AddressUpdateToOneWithWhereWithoutContactInfoInput>;
}
export declare class AddressUpdateToOneWithWhereWithoutContactInfoInput {
    where?: InstanceType<typeof AddressWhereInput>;
    data: InstanceType<typeof AddressUpdateWithoutContactInfoInput>;
}
export declare class AddressUpdateWithWhereUniqueWithoutSubdistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AddressUpdateWithoutSubdistrictInput>;
}
export declare class AddressUpdateWithoutContactInfoInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutSubdistrictInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUpdateInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistrict?: InstanceType<typeof SubdistrictUpdateOneRequiredWithoutAddressNestedInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUpsertWithWhereUniqueWithoutSubdistrictInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AddressUpdateWithoutSubdistrictInput>;
    create: InstanceType<typeof AddressCreateWithoutSubdistrictInput>;
}
export declare class AddressUpsertWithoutContactInfoInput {
    update: InstanceType<typeof AddressUpdateWithoutContactInfoInput>;
    create: InstanceType<typeof AddressCreateWithoutContactInfoInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class AddressWhereUniqueInput {
    id?: number;
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    address?: InstanceType<typeof StringFilter>;
    subdistrictId?: InstanceType<typeof IntFilter>;
    subdistrict?: InstanceType<typeof SubdistrictRelationFilter>;
    ContactInfo?: InstanceType<typeof ContactInfoListRelationFilter>;
}
export declare class AddressWhereInput {
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    address?: InstanceType<typeof StringFilter>;
    subdistrictId?: InstanceType<typeof IntFilter>;
    subdistrict?: InstanceType<typeof SubdistrictRelationFilter>;
    ContactInfo?: InstanceType<typeof ContactInfoListRelationFilter>;
}
export declare class Address {
    id: number;
    address: string;
    subdistrictId: number;
    subdistrict?: InstanceType<typeof Subdistrict>;
    ContactInfo?: Array<ContactInfo>;
    _count?: InstanceType<typeof AddressCount>;
}
export declare class AggregateAddress {
    _count?: InstanceType<typeof AddressCountAggregate>;
    _avg?: InstanceType<typeof AddressAvgAggregate>;
    _sum?: InstanceType<typeof AddressSumAggregate>;
    _min?: InstanceType<typeof AddressMinAggregate>;
    _max?: InstanceType<typeof AddressMaxAggregate>;
}
export declare class CreateManyAddressArgs {
    data: Array<AddressCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAddressArgs {
    data: InstanceType<typeof AddressCreateInput>;
}
export declare class DeleteManyAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class DeleteOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class FindFirstAddressOrThrowArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindFirstAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindManyAddressArgs {
    where?: InstanceType<typeof AddressWhereInput>;
    orderBy?: Array<AddressOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
export declare class FindUniqueAddressOrThrowArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAddressArgs {
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
    where?: InstanceType<typeof AddressWhereInput>;
}
export declare class UpdateOneAddressArgs {
    data: InstanceType<typeof AddressUpdateInput>;
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAddressArgs {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateInput>;
    update: InstanceType<typeof AddressUpdateInput>;
}
export declare class AggregateAnnouncement {
    _count?: InstanceType<typeof AnnouncementCountAggregate>;
    _avg?: InstanceType<typeof AnnouncementAvgAggregate>;
    _sum?: InstanceType<typeof AnnouncementSumAggregate>;
    _min?: InstanceType<typeof AnnouncementMinAggregate>;
    _max?: InstanceType<typeof AnnouncementMaxAggregate>;
}
export declare class AnnouncementAggregateArgs {
    where?: InstanceType<typeof AnnouncementWhereInput>;
    orderBy?: Array<AnnouncementOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AnnouncementCountAggregateInput>;
    _avg?: InstanceType<typeof AnnouncementAvgAggregateInput>;
    _sum?: InstanceType<typeof AnnouncementSumAggregateInput>;
    _min?: InstanceType<typeof AnnouncementMinAggregateInput>;
    _max?: InstanceType<typeof AnnouncementMaxAggregateInput>;
}
export declare class AnnouncementAvgAggregateInput {
    id?: true;
}
export declare class AnnouncementAvgAggregate {
    id?: number;
}
export declare class AnnouncementAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class AnnouncementCountAggregateInput {
    id?: true;
    title?: true;
    content?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    _all?: true;
}
export declare class AnnouncementCountAggregate {
    id: number;
    title: number;
    content: number;
    imageUrl: number;
    createdAt: number;
    updatedAt: number;
    createdById: number;
    _all: number;
}
export declare class AnnouncementCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    imageUrl?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
}
export declare class AnnouncementCreateManyCreatedByInputEnvelope {
    data: Array<AnnouncementCreateManyCreatedByInput>;
    skipDuplicates?: boolean;
}
export declare class AnnouncementCreateManyCreatedByInput {
    id?: number;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AnnouncementCreateManyInput {
    id?: number;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
}
export declare class AnnouncementCreateNestedManyWithoutCreatedByInput {
    create?: Array<AnnouncementCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<AnnouncementCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof AnnouncementCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
}
export declare class AnnouncementCreateOrConnectWithoutCreatedByInput {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AnnouncementCreateWithoutCreatedByInput>;
}
export declare class AnnouncementCreateWithoutCreatedByInput {
    title: string;
    content: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AnnouncementCreateInput {
    title: string;
    content: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: InstanceType<typeof UserCreateNestedOneWithoutAnnouncementCreatedInput>;
}
export declare class AnnouncementGroupByArgs {
    where?: InstanceType<typeof AnnouncementWhereInput>;
    orderBy?: Array<AnnouncementOrderByWithAggregationInput>;
    by: Array<keyof typeof AnnouncementScalarFieldEnum>;
    having?: InstanceType<typeof AnnouncementScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof AnnouncementCountAggregateInput>;
    _avg?: InstanceType<typeof AnnouncementAvgAggregateInput>;
    _sum?: InstanceType<typeof AnnouncementSumAggregateInput>;
    _min?: InstanceType<typeof AnnouncementMinAggregateInput>;
    _max?: InstanceType<typeof AnnouncementMaxAggregateInput>;
}
export declare class AnnouncementGroupBy {
    id: number;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    createdById: string;
    _count?: InstanceType<typeof AnnouncementCountAggregate>;
    _avg?: InstanceType<typeof AnnouncementAvgAggregate>;
    _sum?: InstanceType<typeof AnnouncementSumAggregate>;
    _min?: InstanceType<typeof AnnouncementMinAggregate>;
    _max?: InstanceType<typeof AnnouncementMaxAggregate>;
}
export declare class AnnouncementListRelationFilter {
    every?: InstanceType<typeof AnnouncementWhereInput>;
    some?: InstanceType<typeof AnnouncementWhereInput>;
    none?: InstanceType<typeof AnnouncementWhereInput>;
}
export declare class AnnouncementMaxAggregateInput {
    id?: true;
    title?: true;
    content?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
}
export declare class AnnouncementMaxAggregate {
    id?: number;
    title?: string;
    content?: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: string;
}
export declare class AnnouncementMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    imageUrl?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
}
export declare class AnnouncementMinAggregateInput {
    id?: true;
    title?: true;
    content?: true;
    imageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
}
export declare class AnnouncementMinAggregate {
    id?: number;
    title?: string;
    content?: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById?: string;
}
export declare class AnnouncementMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    imageUrl?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
}
export declare class AnnouncementOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AnnouncementOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    imageUrl?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AnnouncementCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AnnouncementAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AnnouncementMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AnnouncementMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AnnouncementSumOrderByAggregateInput>;
}
export declare class AnnouncementOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    imageUrl?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    createdById?: keyof typeof SortOrder;
    createdBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class AnnouncementScalarWhereWithAggregatesInput {
    AND?: Array<AnnouncementScalarWhereWithAggregatesInput>;
    OR?: Array<AnnouncementScalarWhereWithAggregatesInput>;
    NOT?: Array<AnnouncementScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    imageUrl?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    createdById?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class AnnouncementScalarWhereInput {
    AND?: Array<AnnouncementScalarWhereInput>;
    OR?: Array<AnnouncementScalarWhereInput>;
    NOT?: Array<AnnouncementScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    imageUrl?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdById?: InstanceType<typeof StringFilter>;
}
export declare class AnnouncementSumAggregateInput {
    id?: true;
}
export declare class AnnouncementSumAggregate {
    id?: number;
}
export declare class AnnouncementSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<AnnouncementCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<AnnouncementCreateOrConnectWithoutCreatedByInput>;
    createMany?: InstanceType<typeof AnnouncementCreateManyCreatedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
}
export declare class AnnouncementUncheckedCreateWithoutCreatedByInput {
    id?: number;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class AnnouncementUncheckedCreateInput {
    id?: number;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
}
export declare class AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput {
    create?: Array<AnnouncementCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<AnnouncementCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof AnnouncementCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    update?: Array<AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<AnnouncementUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<AnnouncementScalarWhereInput>;
}
export declare class AnnouncementUncheckedUpdateManyWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AnnouncementUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AnnouncementUncheckedUpdateWithoutCreatedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AnnouncementUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AnnouncementUpdateManyMutationInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AnnouncementUpdateManyWithWhereWithoutCreatedByInput {
    where: InstanceType<typeof AnnouncementScalarWhereInput>;
    data: InstanceType<typeof AnnouncementUpdateManyMutationInput>;
}
export declare class AnnouncementUpdateManyWithoutCreatedByNestedInput {
    create?: Array<AnnouncementCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<AnnouncementCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: InstanceType<typeof AnnouncementCreateManyCreatedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>>;
    update?: Array<AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<AnnouncementUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<AnnouncementScalarWhereInput>;
}
export declare class AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AnnouncementUpdateWithoutCreatedByInput>;
}
export declare class AnnouncementUpdateWithoutCreatedByInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class AnnouncementUpdateInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    imageUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    createdBy?: InstanceType<typeof UserUpdateOneRequiredWithoutAnnouncementCreatedNestedInput>;
}
export declare class AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AnnouncementUpdateWithoutCreatedByInput>;
    create: InstanceType<typeof AnnouncementCreateWithoutCreatedByInput>;
}
export declare class AnnouncementWhereUniqueInput {
    id?: number;
    AND?: Array<AnnouncementWhereInput>;
    OR?: Array<AnnouncementWhereInput>;
    NOT?: Array<AnnouncementWhereInput>;
    title?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    imageUrl?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class AnnouncementWhereInput {
    AND?: Array<AnnouncementWhereInput>;
    OR?: Array<AnnouncementWhereInput>;
    NOT?: Array<AnnouncementWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    imageUrl?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    createdById?: InstanceType<typeof StringFilter>;
    createdBy?: InstanceType<typeof UserRelationFilter>;
}
export declare class Announcement {
    id: number;
    title: string;
    content: string;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    createdById: string;
    createdBy?: InstanceType<typeof User>;
}
export declare class CreateManyAnnouncementArgs {
    data: Array<AnnouncementCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneAnnouncementArgs {
    data: InstanceType<typeof AnnouncementCreateInput>;
}
export declare class DeleteManyAnnouncementArgs {
    where?: InstanceType<typeof AnnouncementWhereInput>;
}
export declare class DeleteOneAnnouncementArgs {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
}
export declare class FindFirstAnnouncementOrThrowArgs {
    where?: InstanceType<typeof AnnouncementWhereInput>;
    orderBy?: Array<AnnouncementOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AnnouncementScalarFieldEnum>;
}
export declare class FindFirstAnnouncementArgs {
    where?: InstanceType<typeof AnnouncementWhereInput>;
    orderBy?: Array<AnnouncementOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AnnouncementScalarFieldEnum>;
}
export declare class FindManyAnnouncementArgs {
    where?: InstanceType<typeof AnnouncementWhereInput>;
    orderBy?: Array<AnnouncementOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AnnouncementScalarFieldEnum>;
}
export declare class FindUniqueAnnouncementOrThrowArgs {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
}
export declare class FindUniqueAnnouncementArgs {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
}
export declare class UpdateManyAnnouncementArgs {
    data: InstanceType<typeof AnnouncementUpdateManyMutationInput>;
    where?: InstanceType<typeof AnnouncementWhereInput>;
}
export declare class UpdateOneAnnouncementArgs {
    data: InstanceType<typeof AnnouncementUpdateInput>;
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
}
export declare class UpsertOneAnnouncementArgs {
    where: Prisma.AtLeast<AnnouncementWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AnnouncementCreateInput>;
    update: InstanceType<typeof AnnouncementUpdateInput>;
}
export declare class AggregateBackup {
    _count?: InstanceType<typeof BackupCountAggregate>;
    _avg?: InstanceType<typeof BackupAvgAggregate>;
    _sum?: InstanceType<typeof BackupSumAggregate>;
    _min?: InstanceType<typeof BackupMinAggregate>;
    _max?: InstanceType<typeof BackupMaxAggregate>;
}
export declare class BackupAggregateArgs {
    where?: InstanceType<typeof BackupWhereInput>;
    orderBy?: Array<BackupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BackupCountAggregateInput>;
    _avg?: InstanceType<typeof BackupAvgAggregateInput>;
    _sum?: InstanceType<typeof BackupSumAggregateInput>;
    _min?: InstanceType<typeof BackupMinAggregateInput>;
    _max?: InstanceType<typeof BackupMaxAggregateInput>;
}
export declare class BackupAvgAggregateInput {
    id?: true;
}
export declare class BackupAvgAggregate {
    id?: number;
}
export declare class BackupAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class BackupCountAggregateInput {
    id?: true;
    path?: true;
    isSuccessful?: true;
    type?: true;
    executionType?: true;
    createdAt?: true;
    _all?: true;
}
export declare class BackupCountAggregate {
    id: number;
    path: number;
    isSuccessful: number;
    type: number;
    executionType: number;
    createdAt: number;
    _all: number;
}
export declare class BackupCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    isSuccessful?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    executionType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class BackupCreateManyInput {
    id?: number;
    path?: string;
    isSuccessful: boolean;
    type: keyof typeof BackupType;
    executionType: keyof typeof ExecutionType;
    createdAt?: Date | string;
}
export declare class BackupCreateInput {
    path?: string;
    isSuccessful: boolean;
    type: keyof typeof BackupType;
    executionType: keyof typeof ExecutionType;
    createdAt?: Date | string;
}
export declare class BackupGroupByArgs {
    where?: InstanceType<typeof BackupWhereInput>;
    orderBy?: Array<BackupOrderByWithAggregationInput>;
    by: Array<keyof typeof BackupScalarFieldEnum>;
    having?: InstanceType<typeof BackupScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BackupCountAggregateInput>;
    _avg?: InstanceType<typeof BackupAvgAggregateInput>;
    _sum?: InstanceType<typeof BackupSumAggregateInput>;
    _min?: InstanceType<typeof BackupMinAggregateInput>;
    _max?: InstanceType<typeof BackupMaxAggregateInput>;
}
export declare class BackupGroupBy {
    id: number;
    path?: string;
    isSuccessful: boolean;
    type: keyof typeof BackupType;
    executionType: keyof typeof ExecutionType;
    createdAt: Date | string;
    _count?: InstanceType<typeof BackupCountAggregate>;
    _avg?: InstanceType<typeof BackupAvgAggregate>;
    _sum?: InstanceType<typeof BackupSumAggregate>;
    _min?: InstanceType<typeof BackupMinAggregate>;
    _max?: InstanceType<typeof BackupMaxAggregate>;
}
export declare class BackupMaxAggregateInput {
    id?: true;
    path?: true;
    isSuccessful?: true;
    type?: true;
    executionType?: true;
    createdAt?: true;
}
export declare class BackupMaxAggregate {
    id?: number;
    path?: string;
    isSuccessful?: boolean;
    type?: keyof typeof BackupType;
    executionType?: keyof typeof ExecutionType;
    createdAt?: Date | string;
}
export declare class BackupMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    isSuccessful?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    executionType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class BackupMinAggregateInput {
    id?: true;
    path?: true;
    isSuccessful?: true;
    type?: true;
    executionType?: true;
    createdAt?: true;
}
export declare class BackupMinAggregate {
    id?: number;
    path?: string;
    isSuccessful?: boolean;
    type?: keyof typeof BackupType;
    executionType?: keyof typeof ExecutionType;
    createdAt?: Date | string;
}
export declare class BackupMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    isSuccessful?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    executionType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class BackupOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    path?: InstanceType<typeof SortOrderInput>;
    isSuccessful?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    executionType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BackupCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof BackupAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof BackupMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BackupMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof BackupSumOrderByAggregateInput>;
}
export declare class BackupOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    path?: InstanceType<typeof SortOrderInput>;
    isSuccessful?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    executionType?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
}
export declare class BackupScalarWhereWithAggregatesInput {
    AND?: Array<BackupScalarWhereWithAggregatesInput>;
    OR?: Array<BackupScalarWhereWithAggregatesInput>;
    NOT?: Array<BackupScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    path?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    isSuccessful?: InstanceType<typeof BoolWithAggregatesFilter>;
    type?: InstanceType<typeof EnumBackupTypeWithAggregatesFilter>;
    executionType?: InstanceType<typeof EnumExecutionTypeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class BackupSumAggregateInput {
    id?: true;
}
export declare class BackupSumAggregate {
    id?: number;
}
export declare class BackupSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class BackupUncheckedCreateInput {
    id?: number;
    path?: string;
    isSuccessful: boolean;
    type: keyof typeof BackupType;
    executionType: keyof typeof ExecutionType;
    createdAt?: Date | string;
}
export declare class BackupUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isSuccessful?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumBackupTypeFieldUpdateOperationsInput>;
    executionType?: InstanceType<typeof EnumExecutionTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class BackupUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isSuccessful?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumBackupTypeFieldUpdateOperationsInput>;
    executionType?: InstanceType<typeof EnumExecutionTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class BackupUpdateManyMutationInput {
    path?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isSuccessful?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumBackupTypeFieldUpdateOperationsInput>;
    executionType?: InstanceType<typeof EnumExecutionTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class BackupUpdateInput {
    path?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isSuccessful?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumBackupTypeFieldUpdateOperationsInput>;
    executionType?: InstanceType<typeof EnumExecutionTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class BackupWhereUniqueInput {
    id?: number;
    AND?: Array<BackupWhereInput>;
    OR?: Array<BackupWhereInput>;
    NOT?: Array<BackupWhereInput>;
    path?: InstanceType<typeof StringNullableFilter>;
    isSuccessful?: InstanceType<typeof BoolFilter>;
    type?: InstanceType<typeof EnumBackupTypeFilter>;
    executionType?: InstanceType<typeof EnumExecutionTypeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class BackupWhereInput {
    AND?: Array<BackupWhereInput>;
    OR?: Array<BackupWhereInput>;
    NOT?: Array<BackupWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    path?: InstanceType<typeof StringNullableFilter>;
    isSuccessful?: InstanceType<typeof BoolFilter>;
    type?: InstanceType<typeof EnumBackupTypeFilter>;
    executionType?: InstanceType<typeof EnumExecutionTypeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class Backup {
    id: number;
    path: string | null;
    isSuccessful: boolean;
    type: keyof typeof BackupType;
    executionType: keyof typeof ExecutionType;
    createdAt: Date;
}
export declare class CreateManyBackupArgs {
    data: Array<BackupCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBackupArgs {
    data: InstanceType<typeof BackupCreateInput>;
}
export declare class DeleteManyBackupArgs {
    where?: InstanceType<typeof BackupWhereInput>;
}
export declare class DeleteOneBackupArgs {
    where: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
}
export declare class FindFirstBackupOrThrowArgs {
    where?: InstanceType<typeof BackupWhereInput>;
    orderBy?: Array<BackupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BackupScalarFieldEnum>;
}
export declare class FindFirstBackupArgs {
    where?: InstanceType<typeof BackupWhereInput>;
    orderBy?: Array<BackupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BackupScalarFieldEnum>;
}
export declare class FindManyBackupArgs {
    where?: InstanceType<typeof BackupWhereInput>;
    orderBy?: Array<BackupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BackupScalarFieldEnum>;
}
export declare class FindUniqueBackupOrThrowArgs {
    where: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
}
export declare class FindUniqueBackupArgs {
    where: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
}
export declare class UpdateManyBackupArgs {
    data: InstanceType<typeof BackupUpdateManyMutationInput>;
    where?: InstanceType<typeof BackupWhereInput>;
}
export declare class UpdateOneBackupArgs {
    data: InstanceType<typeof BackupUpdateInput>;
    where: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
}
export declare class UpsertOneBackupArgs {
    where: Prisma.AtLeast<BackupWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BackupCreateInput>;
    update: InstanceType<typeof BackupUpdateInput>;
}
export declare class AggregateBankAccount {
    _count?: InstanceType<typeof BankAccountCountAggregate>;
    _avg?: InstanceType<typeof BankAccountAvgAggregate>;
    _sum?: InstanceType<typeof BankAccountSumAggregate>;
    _min?: InstanceType<typeof BankAccountMinAggregate>;
    _max?: InstanceType<typeof BankAccountMaxAggregate>;
}
export declare class BankAccountAggregateArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BankAccountCountAggregateInput>;
    _avg?: InstanceType<typeof BankAccountAvgAggregateInput>;
    _sum?: InstanceType<typeof BankAccountSumAggregateInput>;
    _min?: InstanceType<typeof BankAccountMinAggregateInput>;
    _max?: InstanceType<typeof BankAccountMaxAggregateInput>;
}
export declare class BankAccountAvgAggregateInput {
    id?: true;
    accountNumber?: true;
}
export declare class BankAccountAvgAggregate {
    id?: number;
    accountNumber?: number;
}
export declare class BankAccountAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
}
export declare class BankAccountCountAggregateInput {
    id?: true;
    accountNumber?: true;
    accountName?: true;
    _all?: true;
}
export declare class BankAccountCountAggregate {
    id: number;
    accountNumber: number;
    accountName: number;
    _all: number;
}
export declare class BankAccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
}
export declare class BankAccountCreateManyInput {
    id?: number;
    accountNumber: number;
    accountName: string;
}
export declare class BankAccountCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof BankAccountCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
export declare class BankAccountCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
}
export declare class BankAccountCreateWithoutParticipantInput {
    accountNumber: number;
    accountName: string;
}
export declare class BankAccountCreateInput {
    accountNumber: number;
    accountName: string;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutBankAccountInput>;
}
export declare class BankAccountGroupByArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithAggregationInput>;
    by: Array<keyof typeof BankAccountScalarFieldEnum>;
    having?: InstanceType<typeof BankAccountScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BankAccountCountAggregateInput>;
    _avg?: InstanceType<typeof BankAccountAvgAggregateInput>;
    _sum?: InstanceType<typeof BankAccountSumAggregateInput>;
    _min?: InstanceType<typeof BankAccountMinAggregateInput>;
    _max?: InstanceType<typeof BankAccountMaxAggregateInput>;
}
export declare class BankAccountGroupBy {
    id: number;
    accountNumber: number;
    accountName: string;
    _count?: InstanceType<typeof BankAccountCountAggregate>;
    _avg?: InstanceType<typeof BankAccountAvgAggregate>;
    _sum?: InstanceType<typeof BankAccountSumAggregate>;
    _min?: InstanceType<typeof BankAccountMinAggregate>;
    _max?: InstanceType<typeof BankAccountMaxAggregate>;
}
export declare class BankAccountMaxAggregateInput {
    id?: true;
    accountNumber?: true;
    accountName?: true;
}
export declare class BankAccountMaxAggregate {
    id?: number;
    accountNumber?: number;
    accountName?: string;
}
export declare class BankAccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
}
export declare class BankAccountMinAggregateInput {
    id?: true;
    accountNumber?: true;
    accountName?: true;
}
export declare class BankAccountMinAggregate {
    id?: number;
    accountNumber?: number;
    accountName?: string;
}
export declare class BankAccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
}
export declare class BankAccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BankAccountCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof BankAccountAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof BankAccountMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BankAccountMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof BankAccountSumOrderByAggregateInput>;
}
export declare class BankAccountOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
}
export declare class BankAccountRelationFilter {
    is?: InstanceType<typeof BankAccountWhereInput>;
    isNot?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class BankAccountScalarWhereWithAggregatesInput {
    AND?: Array<BankAccountScalarWhereWithAggregatesInput>;
    OR?: Array<BankAccountScalarWhereWithAggregatesInput>;
    NOT?: Array<BankAccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    accountNumber?: InstanceType<typeof FloatWithAggregatesFilter>;
    accountName?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class BankAccountSumAggregateInput {
    id?: true;
    accountNumber?: true;
}
export declare class BankAccountSumAggregate {
    id?: number;
    accountNumber?: number;
}
export declare class BankAccountSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
}
export declare class BankAccountUncheckedCreateWithoutParticipantInput {
    id?: number;
    accountNumber: number;
    accountName: string;
}
export declare class BankAccountUncheckedCreateInput {
    id?: number;
    accountNumber: number;
    accountName: string;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutBankAccountInput>;
}
export declare class BankAccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutBankAccountNestedInput>;
}
export declare class BankAccountUpdateManyMutationInput {
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUpdateOneRequiredWithoutParticipantNestedInput {
    create?: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof BankAccountCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof BankAccountUpsertWithoutParticipantInput>;
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof BankAccountUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class BankAccountUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof BankAccountWhereInput>;
    data: InstanceType<typeof BankAccountUpdateWithoutParticipantInput>;
}
export declare class BankAccountUpdateWithoutParticipantInput {
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUpdateInput {
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutBankAccountNestedInput>;
}
export declare class BankAccountUpsertWithoutParticipantInput {
    update: InstanceType<typeof BankAccountUpdateWithoutParticipantInput>;
    create: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    where?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class BankAccountWhereUniqueInput {
    id?: number;
    AND?: Array<BankAccountWhereInput>;
    OR?: Array<BankAccountWhereInput>;
    NOT?: Array<BankAccountWhereInput>;
    accountNumber?: InstanceType<typeof FloatFilter>;
    accountName?: InstanceType<typeof StringFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
}
export declare class BankAccountWhereInput {
    AND?: Array<BankAccountWhereInput>;
    OR?: Array<BankAccountWhereInput>;
    NOT?: Array<BankAccountWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    accountNumber?: InstanceType<typeof FloatFilter>;
    accountName?: InstanceType<typeof StringFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
}
export declare class BankAccount {
    id: number;
    accountNumber: number;
    accountName: string;
    participant?: InstanceType<typeof Participant> | null;
}
export declare class CreateManyBankAccountArgs {
    data: Array<BankAccountCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBankAccountArgs {
    data: InstanceType<typeof BankAccountCreateInput>;
}
export declare class DeleteManyBankAccountArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class DeleteOneBankAccountArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
export declare class FindFirstBankAccountOrThrowArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
export declare class FindFirstBankAccountArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
export declare class FindManyBankAccountArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
export declare class FindUniqueBankAccountOrThrowArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
export declare class FindUniqueBankAccountArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
export declare class UpdateManyBankAccountArgs {
    data: InstanceType<typeof BankAccountUpdateManyMutationInput>;
    where?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class UpdateOneBankAccountArgs {
    data: InstanceType<typeof BankAccountUpdateInput>;
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
}
export declare class UpsertOneBankAccountArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BankAccountCreateInput>;
    update: InstanceType<typeof BankAccountUpdateInput>;
}
export declare class AggregateBranch {
    _count?: InstanceType<typeof BranchCountAggregate>;
    _avg?: InstanceType<typeof BranchAvgAggregate>;
    _sum?: InstanceType<typeof BranchSumAggregate>;
    _min?: InstanceType<typeof BranchMinAggregate>;
    _max?: InstanceType<typeof BranchMaxAggregate>;
}
export declare class BranchAggregateArgs {
    where?: InstanceType<typeof BranchWhereInput>;
    orderBy?: Array<BranchOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BranchCountAggregateInput>;
    _avg?: InstanceType<typeof BranchAvgAggregateInput>;
    _sum?: InstanceType<typeof BranchSumAggregateInput>;
    _min?: InstanceType<typeof BranchMinAggregateInput>;
    _max?: InstanceType<typeof BranchMaxAggregateInput>;
}
export declare class BranchAvgAggregateInput {
    id?: true;
}
export declare class BranchAvgAggregate {
    id?: number;
}
export declare class BranchAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class BranchCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class BranchCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class BranchCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class BranchCount {
    employment?: number;
    claimFinancial?: number;
}
export declare class BranchCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class BranchCreateNestedOneWithoutClaimFinancialInput {
    create?: InstanceType<typeof BranchCreateWithoutClaimFinancialInput>;
    connectOrCreate?: InstanceType<typeof BranchCreateOrConnectWithoutClaimFinancialInput>;
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
}
export declare class BranchCreateNestedOneWithoutEmploymentInput {
    create?: InstanceType<typeof BranchCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof BranchCreateOrConnectWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
}
export declare class BranchCreateOrConnectWithoutClaimFinancialInput {
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BranchCreateWithoutClaimFinancialInput>;
}
export declare class BranchCreateOrConnectWithoutEmploymentInput {
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BranchCreateWithoutEmploymentInput>;
}
export declare class BranchCreateWithoutClaimFinancialInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentCreateNestedManyWithoutBranchInput>;
}
export declare class BranchCreateWithoutEmploymentInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedManyWithoutBranchPayeeInput>;
}
export declare class BranchCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentCreateNestedManyWithoutBranchInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedManyWithoutBranchPayeeInput>;
}
export declare class BranchGroupByArgs {
    where?: InstanceType<typeof BranchWhereInput>;
    orderBy?: Array<BranchOrderByWithAggregationInput>;
    by: Array<keyof typeof BranchScalarFieldEnum>;
    having?: InstanceType<typeof BranchScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BranchCountAggregateInput>;
    _avg?: InstanceType<typeof BranchAvgAggregateInput>;
    _sum?: InstanceType<typeof BranchSumAggregateInput>;
    _min?: InstanceType<typeof BranchMinAggregateInput>;
    _max?: InstanceType<typeof BranchMaxAggregateInput>;
}
export declare class BranchGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof BranchCountAggregate>;
    _avg?: InstanceType<typeof BranchAvgAggregate>;
    _sum?: InstanceType<typeof BranchSumAggregate>;
    _min?: InstanceType<typeof BranchMinAggregate>;
    _max?: InstanceType<typeof BranchMaxAggregate>;
}
export declare class BranchMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class BranchMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class BranchMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class BranchMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class BranchMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class BranchMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class BranchNullableRelationFilter {
    is?: InstanceType<typeof BranchWhereInput>;
    isNot?: InstanceType<typeof BranchWhereInput>;
}
export declare class BranchOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BranchCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof BranchAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof BranchMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BranchMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof BranchSumOrderByAggregateInput>;
}
export declare class BranchOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    employment?: InstanceType<typeof EmploymentOrderByRelationAggregateInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialOrderByRelationAggregateInput>;
}
export declare class BranchRelationFilter {
    is?: InstanceType<typeof BranchWhereInput>;
    isNot?: InstanceType<typeof BranchWhereInput>;
}
export declare class BranchScalarWhereWithAggregatesInput {
    AND?: Array<BranchScalarWhereWithAggregatesInput>;
    OR?: Array<BranchScalarWhereWithAggregatesInput>;
    NOT?: Array<BranchScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class BranchSumAggregateInput {
    id?: true;
}
export declare class BranchSumAggregate {
    id?: number;
}
export declare class BranchSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class BranchUncheckedCreateWithoutClaimFinancialInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutBranchInput>;
}
export declare class BranchUncheckedCreateWithoutEmploymentInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedManyWithoutBranchPayeeInput>;
}
export declare class BranchUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutBranchInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedManyWithoutBranchPayeeInput>;
}
export declare class BranchUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class BranchUncheckedUpdateWithoutClaimFinancialInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutBranchNestedInput>;
}
export declare class BranchUncheckedUpdateWithoutEmploymentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateManyWithoutBranchPayeeNestedInput>;
}
export declare class BranchUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutBranchNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateManyWithoutBranchPayeeNestedInput>;
}
export declare class BranchUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class BranchUpdateOneRequiredWithoutEmploymentNestedInput {
    create?: InstanceType<typeof BranchCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof BranchCreateOrConnectWithoutEmploymentInput>;
    upsert?: InstanceType<typeof BranchUpsertWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof BranchUpdateToOneWithWhereWithoutEmploymentInput>;
}
export declare class BranchUpdateOneWithoutClaimFinancialNestedInput {
    create?: InstanceType<typeof BranchCreateWithoutClaimFinancialInput>;
    connectOrCreate?: InstanceType<typeof BranchCreateOrConnectWithoutClaimFinancialInput>;
    upsert?: InstanceType<typeof BranchUpsertWithoutClaimFinancialInput>;
    disconnect?: InstanceType<typeof BranchWhereInput>;
    delete?: InstanceType<typeof BranchWhereInput>;
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof BranchUpdateToOneWithWhereWithoutClaimFinancialInput>;
}
export declare class BranchUpdateToOneWithWhereWithoutClaimFinancialInput {
    where?: InstanceType<typeof BranchWhereInput>;
    data: InstanceType<typeof BranchUpdateWithoutClaimFinancialInput>;
}
export declare class BranchUpdateToOneWithWhereWithoutEmploymentInput {
    where?: InstanceType<typeof BranchWhereInput>;
    data: InstanceType<typeof BranchUpdateWithoutEmploymentInput>;
}
export declare class BranchUpdateWithoutClaimFinancialInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUpdateManyWithoutBranchNestedInput>;
}
export declare class BranchUpdateWithoutEmploymentInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateManyWithoutBranchPayeeNestedInput>;
}
export declare class BranchUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUpdateManyWithoutBranchNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateManyWithoutBranchPayeeNestedInput>;
}
export declare class BranchUpsertWithoutClaimFinancialInput {
    update: InstanceType<typeof BranchUpdateWithoutClaimFinancialInput>;
    create: InstanceType<typeof BranchCreateWithoutClaimFinancialInput>;
    where?: InstanceType<typeof BranchWhereInput>;
}
export declare class BranchUpsertWithoutEmploymentInput {
    update: InstanceType<typeof BranchUpdateWithoutEmploymentInput>;
    create: InstanceType<typeof BranchCreateWithoutEmploymentInput>;
    where?: InstanceType<typeof BranchWhereInput>;
}
export declare class BranchWhereUniqueInput {
    id?: number;
    AND?: Array<BranchWhereInput>;
    OR?: Array<BranchWhereInput>;
    NOT?: Array<BranchWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    employment?: InstanceType<typeof EmploymentListRelationFilter>;
    claimFinancial?: InstanceType<typeof ClaimFinancialListRelationFilter>;
}
export declare class BranchWhereInput {
    AND?: Array<BranchWhereInput>;
    OR?: Array<BranchWhereInput>;
    NOT?: Array<BranchWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    employment?: InstanceType<typeof EmploymentListRelationFilter>;
    claimFinancial?: InstanceType<typeof ClaimFinancialListRelationFilter>;
}
export declare class Branch {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    employment?: Array<Employment>;
    claimFinancial?: Array<ClaimFinancial>;
    _count?: InstanceType<typeof BranchCount>;
}
export declare class CreateManyBranchArgs {
    data: Array<BranchCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBranchArgs {
    data: InstanceType<typeof BranchCreateInput>;
}
export declare class DeleteManyBranchArgs {
    where?: InstanceType<typeof BranchWhereInput>;
}
export declare class DeleteOneBranchArgs {
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
}
export declare class FindFirstBranchOrThrowArgs {
    where?: InstanceType<typeof BranchWhereInput>;
    orderBy?: Array<BranchOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BranchScalarFieldEnum>;
}
export declare class FindFirstBranchArgs {
    where?: InstanceType<typeof BranchWhereInput>;
    orderBy?: Array<BranchOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BranchScalarFieldEnum>;
}
export declare class FindManyBranchArgs {
    where?: InstanceType<typeof BranchWhereInput>;
    orderBy?: Array<BranchOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BranchScalarFieldEnum>;
}
export declare class FindUniqueBranchOrThrowArgs {
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
}
export declare class FindUniqueBranchArgs {
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
}
export declare class UpdateManyBranchArgs {
    data: InstanceType<typeof BranchUpdateManyMutationInput>;
    where?: InstanceType<typeof BranchWhereInput>;
}
export declare class UpdateOneBranchArgs {
    data: InstanceType<typeof BranchUpdateInput>;
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
}
export declare class UpsertOneBranchArgs {
    where: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BranchCreateInput>;
    update: InstanceType<typeof BranchUpdateInput>;
}
export declare class AggregateCity {
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityAggregateArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CityCountAggregateInput>;
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    _min?: InstanceType<typeof CityMinAggregateInput>;
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}
export declare class CityAvgAggregateInput {
    id?: true;
    provinceId?: true;
}
export declare class CityAvgAggregate {
    id?: number;
    provinceId?: number;
}
export declare class CityAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityCountAggregateInput {
    id?: true;
    name?: true;
    provinceId?: true;
    _all?: true;
}
export declare class CityCountAggregate {
    id: number;
    name: number;
    provinceId: number;
    _all: number;
}
export declare class CityCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityCount {
    districts?: number;
}
export declare class CityCreateManyProvinceInputEnvelope {
    data: Array<CityCreateManyProvinceInput>;
    skipDuplicates?: boolean;
}
export declare class CityCreateManyProvinceInput {
    id?: number;
    name: string;
}
export declare class CityCreateManyInput {
    id?: number;
    name: string;
    provinceId: number;
}
export declare class CityCreateNestedManyWithoutProvinceInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
}
export declare class CityCreateNestedOneWithoutDistrictsInput {
    create?: InstanceType<typeof CityCreateWithoutDistrictsInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutDistrictsInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class CityCreateOrConnectWithoutDistrictsInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateWithoutDistrictsInput>;
}
export declare class CityCreateOrConnectWithoutProvinceInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateWithoutProvinceInput>;
}
export declare class CityCreateWithoutDistrictsInput {
    name: string;
    province: InstanceType<typeof ProvinceCreateNestedOneWithoutCitiesInput>;
}
export declare class CityCreateWithoutProvinceInput {
    name: string;
    districts?: InstanceType<typeof DistrictCreateNestedManyWithoutCityInput>;
}
export declare class CityCreateInput {
    name: string;
    province: InstanceType<typeof ProvinceCreateNestedOneWithoutCitiesInput>;
    districts?: InstanceType<typeof DistrictCreateNestedManyWithoutCityInput>;
}
export declare class CityGroupByArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithAggregationInput>;
    by: Array<keyof typeof CityScalarFieldEnum>;
    having?: InstanceType<typeof CityScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CityCountAggregateInput>;
    _avg?: InstanceType<typeof CityAvgAggregateInput>;
    _sum?: InstanceType<typeof CitySumAggregateInput>;
    _min?: InstanceType<typeof CityMinAggregateInput>;
    _max?: InstanceType<typeof CityMaxAggregateInput>;
}
export declare class CityGroupBy {
    id: number;
    name: string;
    provinceId: number;
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityListRelationFilter {
    every?: InstanceType<typeof CityWhereInput>;
    some?: InstanceType<typeof CityWhereInput>;
    none?: InstanceType<typeof CityWhereInput>;
}
export declare class CityMaxAggregateInput {
    id?: true;
    name?: true;
    provinceId?: true;
}
export declare class CityMaxAggregate {
    id?: number;
    name?: string;
    provinceId?: number;
}
export declare class CityMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityMinAggregateInput {
    id?: true;
    name?: true;
    provinceId?: true;
}
export declare class CityMinAggregate {
    id?: number;
    name?: string;
    provinceId?: number;
}
export declare class CityMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CityOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CityCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CityAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CityMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CityMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CitySumOrderByAggregateInput>;
}
export declare class CityOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
    province?: InstanceType<typeof ProvinceOrderByWithRelationInput>;
    districts?: InstanceType<typeof DistrictOrderByRelationAggregateInput>;
}
export declare class CityRelationFilter {
    is?: InstanceType<typeof CityWhereInput>;
    isNot?: InstanceType<typeof CityWhereInput>;
}
export declare class CityScalarWhereWithAggregatesInput {
    AND?: Array<CityScalarWhereWithAggregatesInput>;
    OR?: Array<CityScalarWhereWithAggregatesInput>;
    NOT?: Array<CityScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    provinceId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class CityScalarWhereInput {
    AND?: Array<CityScalarWhereInput>;
    OR?: Array<CityScalarWhereInput>;
    NOT?: Array<CityScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    provinceId?: InstanceType<typeof IntFilter>;
}
export declare class CitySumAggregateInput {
    id?: true;
    provinceId?: true;
}
export declare class CitySumAggregate {
    id?: number;
    provinceId?: number;
}
export declare class CitySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    provinceId?: keyof typeof SortOrder;
}
export declare class CityUncheckedCreateNestedManyWithoutProvinceInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
}
export declare class CityUncheckedCreateWithoutDistrictsInput {
    id?: number;
    name: string;
    provinceId: number;
}
export declare class CityUncheckedCreateWithoutProvinceInput {
    id?: number;
    name: string;
    districts?: InstanceType<typeof DistrictUncheckedCreateNestedManyWithoutCityInput>;
}
export declare class CityUncheckedCreateInput {
    id?: number;
    name: string;
    provinceId: number;
    districts?: InstanceType<typeof DistrictUncheckedCreateNestedManyWithoutCityInput>;
}
export declare class CityUncheckedUpdateManyWithoutProvinceNestedInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    upsert?: Array<CityUpsertWithWhereUniqueWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    set?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    update?: Array<CityUpdateWithWhereUniqueWithoutProvinceInput>;
    updateMany?: Array<CityUpdateManyWithWhereWithoutProvinceInput>;
    deleteMany?: Array<CityScalarWhereInput>;
}
export declare class CityUncheckedUpdateManyWithoutProvinceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    provinceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateWithoutDistrictsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    provinceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateWithoutProvinceInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districts?: InstanceType<typeof DistrictUncheckedUpdateManyWithoutCityNestedInput>;
}
export declare class CityUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    provinceId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    districts?: InstanceType<typeof DistrictUncheckedUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CityUpdateManyWithWhereWithoutProvinceInput {
    where: InstanceType<typeof CityScalarWhereInput>;
    data: InstanceType<typeof CityUpdateManyMutationInput>;
}
export declare class CityUpdateManyWithoutProvinceNestedInput {
    create?: Array<CityCreateWithoutProvinceInput>;
    connectOrCreate?: Array<CityCreateOrConnectWithoutProvinceInput>;
    upsert?: Array<CityUpsertWithWhereUniqueWithoutProvinceInput>;
    createMany?: InstanceType<typeof CityCreateManyProvinceInputEnvelope>;
    set?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CityWhereUniqueInput, 'id'>>;
    update?: Array<CityUpdateWithWhereUniqueWithoutProvinceInput>;
    updateMany?: Array<CityUpdateManyWithWhereWithoutProvinceInput>;
    deleteMany?: Array<CityScalarWhereInput>;
}
export declare class CityUpdateOneRequiredWithoutDistrictsNestedInput {
    create?: InstanceType<typeof CityCreateWithoutDistrictsInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutDistrictsInput>;
    upsert?: InstanceType<typeof CityUpsertWithoutDistrictsInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof CityUpdateToOneWithWhereWithoutDistrictsInput>;
}
export declare class CityUpdateToOneWithWhereWithoutDistrictsInput {
    where?: InstanceType<typeof CityWhereInput>;
    data: InstanceType<typeof CityUpdateWithoutDistrictsInput>;
}
export declare class CityUpdateWithWhereUniqueWithoutProvinceInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CityUpdateWithoutProvinceInput>;
}
export declare class CityUpdateWithoutDistrictsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    province?: InstanceType<typeof ProvinceUpdateOneRequiredWithoutCitiesNestedInput>;
}
export declare class CityUpdateWithoutProvinceInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districts?: InstanceType<typeof DistrictUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    province?: InstanceType<typeof ProvinceUpdateOneRequiredWithoutCitiesNestedInput>;
    districts?: InstanceType<typeof DistrictUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpsertWithWhereUniqueWithoutProvinceInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CityUpdateWithoutProvinceInput>;
    create: InstanceType<typeof CityCreateWithoutProvinceInput>;
}
export declare class CityUpsertWithoutDistrictsInput {
    update: InstanceType<typeof CityUpdateWithoutDistrictsInput>;
    create: InstanceType<typeof CityCreateWithoutDistrictsInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class CityWhereUniqueInput {
    id?: number;
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    provinceId?: InstanceType<typeof IntFilter>;
    province?: InstanceType<typeof ProvinceRelationFilter>;
    districts?: InstanceType<typeof DistrictListRelationFilter>;
}
export declare class CityWhereInput {
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    provinceId?: InstanceType<typeof IntFilter>;
    province?: InstanceType<typeof ProvinceRelationFilter>;
    districts?: InstanceType<typeof DistrictListRelationFilter>;
}
export declare class City {
    id: number;
    name: string;
    provinceId: number;
    province?: InstanceType<typeof Province>;
    districts?: Array<District>;
    _count?: InstanceType<typeof CityCount>;
}
export declare class CreateManyCityArgs {
    data: Array<CityCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCityArgs {
    data: InstanceType<typeof CityCreateInput>;
}
export declare class DeleteManyCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class DeleteOneCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class FindFirstCityOrThrowArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindFirstCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindManyCityArgs {
    where?: InstanceType<typeof CityWhereInput>;
    orderBy?: Array<CityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
export declare class FindUniqueCityOrThrowArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCityArgs {
    data: InstanceType<typeof CityUpdateManyMutationInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class UpdateOneCityArgs {
    data: InstanceType<typeof CityUpdateInput>;
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCityArgs {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateInput>;
    update: InstanceType<typeof CityUpdateInput>;
}
export declare class AggregateClaim {
    _count?: InstanceType<typeof ClaimCountAggregate>;
    _avg?: InstanceType<typeof ClaimAvgAggregate>;
    _sum?: InstanceType<typeof ClaimSumAggregate>;
    _min?: InstanceType<typeof ClaimMinAggregate>;
    _max?: InstanceType<typeof ClaimMaxAggregate>;
}
export declare class ClaimAggregateArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimSumAggregateInput>;
    _min?: InstanceType<typeof ClaimMinAggregateInput>;
    _max?: InstanceType<typeof ClaimMaxAggregateInput>;
}
export declare class ClaimAvgAggregateInput {
    claimFinancialId?: true;
    claimProgramId?: true;
}
export declare class ClaimAvgAggregate {
    claimFinancialId?: number;
    claimProgramId?: number;
}
export declare class ClaimAvgOrderByAggregateInput {
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class ClaimCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    channel?: true;
    admedicaStatus?: true;
    company?: true;
    participantId?: true;
    claimFinancialId?: true;
    claimProgramId?: true;
    inputedById?: true;
    waitingForId?: true;
    _all?: true;
}
export declare class ClaimCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    channel: number;
    admedicaStatus: number;
    company: number;
    participantId: number;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById: number;
    waitingForId: number;
    _all: number;
}
export declare class ClaimCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    company?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
    inputedById?: keyof typeof SortOrder;
    waitingForId?: keyof typeof SortOrder;
}
export declare class ClaimCount {
    tags?: number;
    claimStatuses?: number;
}
export declare class ClaimCreateManyInputedByInputEnvelope {
    data: Array<ClaimCreateManyInputedByInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimCreateManyInputedByInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    waitingForId?: string;
}
export declare class ClaimCreateManyParticipantInputEnvelope {
    data: Array<ClaimCreateManyParticipantInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimCreateManyParticipantInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
}
export declare class ClaimCreateManyWaitingForInputEnvelope {
    data: Array<ClaimCreateManyWaitingForInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimCreateManyWaitingForInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
}
export declare class ClaimCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
}
export declare class ClaimCreateNestedManyWithoutInputedByInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimCreateNestedManyWithoutParticipantInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimCreateNestedManyWithoutTagsInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimCreateNestedManyWithoutWaitingForInput {
    create?: Array<ClaimCreateWithoutWaitingForInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutWaitingForInput>;
    createMany?: InstanceType<typeof ClaimCreateManyWaitingForInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimCreateNestedOneWithoutClaimFinancialsInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class ClaimCreateNestedOneWithoutClaimProgramInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProgramInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class ClaimCreateNestedOneWithoutClaimStatusesInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimStatusesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class ClaimCreateOrConnectWithoutClaimFinancialsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
}
export declare class ClaimCreateOrConnectWithoutClaimProgramInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimProgramInput>;
}
export declare class ClaimCreateOrConnectWithoutClaimStatusesInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
}
export declare class ClaimCreateOrConnectWithoutInputedByInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutInputedByInput>;
}
export declare class ClaimCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutParticipantInput>;
}
export declare class ClaimCreateOrConnectWithoutTagsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutTagsInput>;
}
export declare class ClaimCreateOrConnectWithoutWaitingForInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateWithoutWaitingForInput>;
}
export declare class ClaimCreateWithoutClaimFinancialsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutClaimProgramInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutClaimStatusesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
}
export declare class ClaimCreateWithoutInputedByInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutParticipantInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutTagsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutWaitingForInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProgram: InstanceType<typeof ClaimProgramCreateNestedOneWithoutClaimInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    waitingFor?: InstanceType<typeof UserCreateNestedOneWithoutClaimsOnWaitInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimGroupByArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithAggregationInput>;
    by: Array<keyof typeof ClaimScalarFieldEnum>;
    having?: InstanceType<typeof ClaimScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimSumAggregateInput>;
    _min?: InstanceType<typeof ClaimMinAggregateInput>;
    _max?: InstanceType<typeof ClaimMaxAggregateInput>;
}
export declare class ClaimGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
    _count?: InstanceType<typeof ClaimCountAggregate>;
    _avg?: InstanceType<typeof ClaimAvgAggregate>;
    _sum?: InstanceType<typeof ClaimSumAggregate>;
    _min?: InstanceType<typeof ClaimMinAggregate>;
    _max?: InstanceType<typeof ClaimMaxAggregate>;
}
export declare class ClaimListRelationFilter {
    every?: InstanceType<typeof ClaimWhereInput>;
    some?: InstanceType<typeof ClaimWhereInput>;
    none?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    channel?: true;
    admedicaStatus?: true;
    company?: true;
    participantId?: true;
    claimFinancialId?: true;
    claimProgramId?: true;
    inputedById?: true;
    waitingForId?: true;
}
export declare class ClaimMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel?: keyof typeof ClaimChannel;
    admedicaStatus?: keyof typeof AdmedicaStatus;
    company?: string;
    participantId?: string;
    claimFinancialId?: number;
    claimProgramId?: number;
    inputedById?: string;
    waitingForId?: string;
}
export declare class ClaimMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    company?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
    inputedById?: keyof typeof SortOrder;
    waitingForId?: keyof typeof SortOrder;
}
export declare class ClaimMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    channel?: true;
    admedicaStatus?: true;
    company?: true;
    participantId?: true;
    claimFinancialId?: true;
    claimProgramId?: true;
    inputedById?: true;
    waitingForId?: true;
}
export declare class ClaimMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel?: keyof typeof ClaimChannel;
    admedicaStatus?: keyof typeof AdmedicaStatus;
    company?: string;
    participantId?: string;
    claimFinancialId?: number;
    claimProgramId?: number;
    inputedById?: string;
    waitingForId?: string;
}
export declare class ClaimMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    company?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
    inputedById?: keyof typeof SortOrder;
    waitingForId?: keyof typeof SortOrder;
}
export declare class ClaimNullableRelationFilter {
    is?: InstanceType<typeof ClaimWhereInput>;
    isNot?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClaimOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    company?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
    inputedById?: InstanceType<typeof SortOrderInput>;
    waitingForId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ClaimCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimSumOrderByAggregateInput>;
}
export declare class ClaimOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    company?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
    inputedById?: InstanceType<typeof SortOrderInput>;
    waitingForId?: InstanceType<typeof SortOrderInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialOrderByWithRelationInput>;
    claimProgram?: InstanceType<typeof ClaimProgramOrderByWithRelationInput>;
    inputedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    waitingFor?: InstanceType<typeof UserOrderByWithRelationInput>;
    tags?: InstanceType<typeof TagOrderByRelationAggregateInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusOrderByRelationAggregateInput>;
}
export declare class ClaimRelationFilter {
    is?: InstanceType<typeof ClaimWhereInput>;
    isNot?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimScalarWhereWithAggregatesInput {
    AND?: Array<ClaimScalarWhereWithAggregatesInput>;
    OR?: Array<ClaimScalarWhereWithAggregatesInput>;
    NOT?: Array<ClaimScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    channel?: InstanceType<typeof EnumClaimChannelWithAggregatesFilter>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusWithAggregatesFilter>;
    company?: InstanceType<typeof StringWithAggregatesFilter>;
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
    claimFinancialId?: InstanceType<typeof IntWithAggregatesFilter>;
    claimProgramId?: InstanceType<typeof IntWithAggregatesFilter>;
    inputedById?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    waitingForId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class ClaimScalarWhereInput {
    AND?: Array<ClaimScalarWhereInput>;
    OR?: Array<ClaimScalarWhereInput>;
    NOT?: Array<ClaimScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    channel?: InstanceType<typeof EnumClaimChannelFilter>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFilter>;
    company?: InstanceType<typeof StringFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    claimFinancialId?: InstanceType<typeof IntFilter>;
    claimProgramId?: InstanceType<typeof IntFilter>;
    inputedById?: InstanceType<typeof StringNullableFilter>;
    waitingForId?: InstanceType<typeof StringNullableFilter>;
}
export declare class ClaimSumAggregateInput {
    claimFinancialId?: true;
    claimProgramId?: true;
}
export declare class ClaimSumAggregate {
    claimFinancialId?: number;
    claimProgramId?: number;
}
export declare class ClaimSumOrderByAggregateInput {
    claimFinancialId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class ClaimUncheckedCreateNestedManyWithoutInputedByInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutTagsInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutWaitingForInput {
    create?: Array<ClaimCreateWithoutWaitingForInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutWaitingForInput>;
    createMany?: InstanceType<typeof ClaimCreateManyWaitingForInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
}
export declare class ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class ClaimUncheckedCreateNestedOneWithoutClaimProgramInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProgramInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class ClaimUncheckedCreateWithoutClaimFinancialsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutClaimProgramInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    inputedById?: string;
    waitingForId?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutClaimStatusesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
}
export declare class ClaimUncheckedCreateWithoutInputedByInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    waitingForId?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutParticipantInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutTagsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutWaitingForInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById?: string;
    waitingForId?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutInputedByNestedInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutInputedByInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutInputedByInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutInputedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutTagsNestedInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutWaitingForNestedInput {
    create?: Array<ClaimCreateWithoutWaitingForInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutWaitingForInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutWaitingForInput>;
    createMany?: InstanceType<typeof ClaimCreateManyWaitingForInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutWaitingForInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutWaitingForInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutWaitingForInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimFinancialsInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimFinancialsInput>;
}
export declare class ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProgramInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimProgramInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimProgramInput>;
}
export declare class ClaimUncheckedUpdateWithoutClaimFinancialsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutClaimProgramInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutClaimStatusesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutInputedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutWaitingForInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    waitingForId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClaimUpdateManyWithWhereWithoutInputedByInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
}
export declare class ClaimUpdateManyWithWhereWithoutParticipantInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
}
export declare class ClaimUpdateManyWithWhereWithoutTagsInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
}
export declare class ClaimUpdateManyWithWhereWithoutWaitingForInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
}
export declare class ClaimUpdateManyWithoutInputedByNestedInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutInputedByInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutInputedByInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutParticipantNestedInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutTagsNestedInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutWaitingForNestedInput {
    create?: Array<ClaimCreateWithoutWaitingForInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutWaitingForInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutWaitingForInput>;
    createMany?: InstanceType<typeof ClaimCreateManyWaitingForInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutWaitingForInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutWaitingForInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimStatusesInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimStatusesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimStatusesInput>;
}
export declare class ClaimUpdateOneWithoutClaimFinancialsNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimFinancialsInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimFinancialsInput>;
}
export declare class ClaimUpdateOneWithoutClaimProgramNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProgramInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimProgramInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimProgramInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimFinancialsInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimFinancialsInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimProgramInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimProgramInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimStatusesInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimStatusesInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutInputedByInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    data: InstanceType<typeof ClaimUpdateWithoutInputedByInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    data: InstanceType<typeof ClaimUpdateWithoutParticipantInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    data: InstanceType<typeof ClaimUpdateWithoutTagsInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutWaitingForInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    data: InstanceType<typeof ClaimUpdateWithoutWaitingForInput>;
}
export declare class ClaimUpdateWithoutClaimFinancialsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutClaimProgramInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutClaimStatusesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
}
export declare class ClaimUpdateWithoutInputedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutWaitingForInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneRequiredWithoutClaimNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    waitingFor?: InstanceType<typeof UserUpdateOneWithoutClaimsOnWaitNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutInputedByInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update: InstanceType<typeof ClaimUpdateWithoutInputedByInput>;
    create: InstanceType<typeof ClaimCreateWithoutInputedByInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update: InstanceType<typeof ClaimUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ClaimCreateWithoutParticipantInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update: InstanceType<typeof ClaimUpdateWithoutTagsInput>;
    create: InstanceType<typeof ClaimCreateWithoutTagsInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutWaitingForInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    update: InstanceType<typeof ClaimUpdateWithoutWaitingForInput>;
    create: InstanceType<typeof ClaimCreateWithoutWaitingForInput>;
}
export declare class ClaimUpsertWithoutClaimFinancialsInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimFinancialsInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimUpsertWithoutClaimProgramInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimProgramInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimProgramInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimUpsertWithoutClaimStatusesInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimStatusesInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimWhereUniqueInput {
    id?: string;
    claimFinancialId?: number;
    claimProgramId?: number;
    AND?: Array<ClaimWhereInput>;
    OR?: Array<ClaimWhereInput>;
    NOT?: Array<ClaimWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    channel?: InstanceType<typeof EnumClaimChannelFilter>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFilter>;
    company?: InstanceType<typeof StringFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    inputedById?: InstanceType<typeof StringNullableFilter>;
    waitingForId?: InstanceType<typeof StringNullableFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    claimFinancials?: InstanceType<typeof ClaimFinancialRelationFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramRelationFilter>;
    inputedBy?: InstanceType<typeof UserNullableRelationFilter>;
    waitingFor?: InstanceType<typeof UserNullableRelationFilter>;
    tags?: InstanceType<typeof TagListRelationFilter>;
    claimStatuses?: InstanceType<typeof ClaimStatusListRelationFilter>;
}
export declare class ClaimWhereInput {
    AND?: Array<ClaimWhereInput>;
    OR?: Array<ClaimWhereInput>;
    NOT?: Array<ClaimWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    channel?: InstanceType<typeof EnumClaimChannelFilter>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFilter>;
    company?: InstanceType<typeof StringFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    claimFinancialId?: InstanceType<typeof IntFilter>;
    claimProgramId?: InstanceType<typeof IntFilter>;
    inputedById?: InstanceType<typeof StringNullableFilter>;
    waitingForId?: InstanceType<typeof StringNullableFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    claimFinancials?: InstanceType<typeof ClaimFinancialRelationFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramRelationFilter>;
    inputedBy?: InstanceType<typeof UserNullableRelationFilter>;
    waitingFor?: InstanceType<typeof UserNullableRelationFilter>;
    tags?: InstanceType<typeof TagListRelationFilter>;
    claimStatuses?: InstanceType<typeof ClaimStatusListRelationFilter>;
}
export declare class Claim {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: string;
    participantId: string;
    claimFinancialId: number;
    claimProgramId: number;
    inputedById: string | null;
    waitingForId: string | null;
    participant?: InstanceType<typeof Participant>;
    claimFinancials?: InstanceType<typeof ClaimFinancial>;
    claimProgram?: InstanceType<typeof ClaimProgram>;
    inputedBy?: InstanceType<typeof User> | null;
    waitingFor?: InstanceType<typeof User> | null;
    tags?: Array<Tag>;
    claimStatuses?: Array<ClaimStatus>;
    _count?: InstanceType<typeof ClaimCount>;
}
export declare class CreateManyClaimArgs {
    data: Array<ClaimCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClaimArgs {
    data: InstanceType<typeof ClaimCreateInput>;
}
export declare class DeleteManyClaimArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class DeleteOneClaimArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class FindFirstClaimOrThrowArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimScalarFieldEnum>;
}
export declare class FindFirstClaimArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimScalarFieldEnum>;
}
export declare class FindManyClaimArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimScalarFieldEnum>;
}
export declare class FindUniqueClaimOrThrowArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class FindUniqueClaimArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class UpdateManyClaimArgs {
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class UpdateOneClaimArgs {
    data: InstanceType<typeof ClaimUpdateInput>;
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
}
export declare class UpsertOneClaimArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProgramId'>;
    create: InstanceType<typeof ClaimCreateInput>;
    update: InstanceType<typeof ClaimUpdateInput>;
}
export declare class AggregateClaimFinancial {
    _count?: InstanceType<typeof ClaimFinancialCountAggregate>;
    _avg?: InstanceType<typeof ClaimFinancialAvgAggregate>;
    _sum?: InstanceType<typeof ClaimFinancialSumAggregate>;
    _min?: InstanceType<typeof ClaimFinancialMinAggregate>;
    _max?: InstanceType<typeof ClaimFinancialMaxAggregate>;
}
export declare class ClaimFinancialAggregateArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimFinancialCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimFinancialAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimFinancialSumAggregateInput>;
    _min?: InstanceType<typeof ClaimFinancialMinAggregateInput>;
    _max?: InstanceType<typeof ClaimFinancialMaxAggregateInput>;
}
export declare class ClaimFinancialAvgAggregateInput {
    id?: true;
    totalInvoiceProofAmount?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    previousBalance?: true;
    remainingBalance?: true;
    branchId?: true;
    claimStatusId?: true;
}
export declare class ClaimFinancialAvgAggregate {
    id?: number;
    totalInvoiceProofAmount?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    previousBalance?: number;
    remainingBalance?: number;
    branchId?: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    claimStatusId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialCountAggregateInput {
    id?: true;
    totalInvoiceProofAmount?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    transactionProcessDate?: true;
    transferDate?: true;
    previousBalance?: true;
    remainingBalance?: true;
    branchId?: true;
    claimStatusId?: true;
    _all?: true;
}
export declare class ClaimFinancialCountAggregate {
    id: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount: number;
    rejectedAmount: number;
    transactionProcessDate: number;
    transferDate: number;
    previousBalance: number;
    remainingBalance: number;
    branchId: number;
    claimStatusId: number;
    _all: number;
}
export declare class ClaimFinancialCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    transactionProcessDate?: keyof typeof SortOrder;
    transferDate?: keyof typeof SortOrder;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    claimStatusId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialCreateManyBranchPayeeInputEnvelope {
    data: Array<ClaimFinancialCreateManyBranchPayeeInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimFinancialCreateManyBranchPayeeInput {
    id?: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialCreateManyInput {
    id?: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchId?: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialCreateNestedManyWithoutBranchPayeeInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
}
export declare class ClaimFinancialCreateNestedOneWithoutClaimStatusInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimStatusInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimStatusInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class ClaimFinancialCreateNestedOneWithoutClaimInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class ClaimFinancialCreateOrConnectWithoutBranchPayeeInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutBranchPayeeInput>;
}
export declare class ClaimFinancialCreateOrConnectWithoutClaimStatusInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutClaimStatusInput>;
}
export declare class ClaimFinancialCreateOrConnectWithoutClaimInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
}
export declare class ClaimFinancialCreateWithoutBranchPayeeInput {
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimFinancialsInput>;
    claimStatus?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutClaimFinancialInput>;
}
export declare class ClaimFinancialCreateWithoutClaimStatusInput {
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchPayee?: InstanceType<typeof BranchCreateNestedOneWithoutClaimFinancialInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialCreateWithoutClaimInput {
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchPayee?: InstanceType<typeof BranchCreateNestedOneWithoutClaimFinancialInput>;
    claimStatus?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutClaimFinancialInput>;
}
export declare class ClaimFinancialCreateInput {
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchPayee?: InstanceType<typeof BranchCreateNestedOneWithoutClaimFinancialInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimFinancialsInput>;
    claimStatus?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutClaimFinancialInput>;
}
export declare class ClaimFinancialGroupByArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithAggregationInput>;
    by: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
    having?: InstanceType<typeof ClaimFinancialScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimFinancialCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimFinancialAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimFinancialSumAggregateInput>;
    _min?: InstanceType<typeof ClaimFinancialMinAggregateInput>;
    _max?: InstanceType<typeof ClaimFinancialMaxAggregateInput>;
}
export declare class ClaimFinancialGroupBy {
    id: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchId?: number;
    claimStatusId?: number;
    _count?: InstanceType<typeof ClaimFinancialCountAggregate>;
    _avg?: InstanceType<typeof ClaimFinancialAvgAggregate>;
    _sum?: InstanceType<typeof ClaimFinancialSumAggregate>;
    _min?: InstanceType<typeof ClaimFinancialMinAggregate>;
    _max?: InstanceType<typeof ClaimFinancialMaxAggregate>;
}
export declare class ClaimFinancialListRelationFilter {
    every?: InstanceType<typeof ClaimFinancialWhereInput>;
    some?: InstanceType<typeof ClaimFinancialWhereInput>;
    none?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class ClaimFinancialMaxAggregateInput {
    id?: true;
    totalInvoiceProofAmount?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    transactionProcessDate?: true;
    transferDate?: true;
    previousBalance?: true;
    remainingBalance?: true;
    branchId?: true;
    claimStatusId?: true;
}
export declare class ClaimFinancialMaxAggregate {
    id?: number;
    totalInvoiceProofAmount?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance?: number;
    remainingBalance?: number;
    branchId?: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    transactionProcessDate?: keyof typeof SortOrder;
    transferDate?: keyof typeof SortOrder;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    claimStatusId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialMinAggregateInput {
    id?: true;
    totalInvoiceProofAmount?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    transactionProcessDate?: true;
    transferDate?: true;
    previousBalance?: true;
    remainingBalance?: true;
    branchId?: true;
    claimStatusId?: true;
}
export declare class ClaimFinancialMinAggregate {
    id?: number;
    totalInvoiceProofAmount?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance?: number;
    remainingBalance?: number;
    branchId?: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    transactionProcessDate?: keyof typeof SortOrder;
    transferDate?: keyof typeof SortOrder;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    claimStatusId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialNullableRelationFilter {
    is?: InstanceType<typeof ClaimFinancialWhereInput>;
    isNot?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class ClaimFinancialOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClaimFinancialOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: InstanceType<typeof SortOrderInput>;
    rejectedAmount?: InstanceType<typeof SortOrderInput>;
    transactionProcessDate?: InstanceType<typeof SortOrderInput>;
    transferDate?: InstanceType<typeof SortOrderInput>;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: InstanceType<typeof SortOrderInput>;
    claimStatusId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ClaimFinancialCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimFinancialAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimFinancialMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimFinancialMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimFinancialSumOrderByAggregateInput>;
}
export declare class ClaimFinancialOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: InstanceType<typeof SortOrderInput>;
    rejectedAmount?: InstanceType<typeof SortOrderInput>;
    transactionProcessDate?: InstanceType<typeof SortOrderInput>;
    transferDate?: InstanceType<typeof SortOrderInput>;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: InstanceType<typeof SortOrderInput>;
    claimStatusId?: InstanceType<typeof SortOrderInput>;
    branchPayee?: InstanceType<typeof BranchOrderByWithRelationInput>;
    claim?: InstanceType<typeof ClaimOrderByWithRelationInput>;
    claimStatus?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
}
export declare class ClaimFinancialRelationFilter {
    is?: InstanceType<typeof ClaimFinancialWhereInput>;
    isNot?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class ClaimFinancialScalarWhereWithAggregatesInput {
    AND?: Array<ClaimFinancialScalarWhereWithAggregatesInput>;
    OR?: Array<ClaimFinancialScalarWhereWithAggregatesInput>;
    NOT?: Array<ClaimFinancialScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatWithAggregatesFilter>;
    requestedAmount?: InstanceType<typeof FloatWithAggregatesFilter>;
    paidAmount?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    previousBalance?: InstanceType<typeof FloatWithAggregatesFilter>;
    remainingBalance?: InstanceType<typeof FloatWithAggregatesFilter>;
    branchId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    claimStatusId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class ClaimFinancialScalarWhereInput {
    AND?: Array<ClaimFinancialScalarWhereInput>;
    OR?: Array<ClaimFinancialScalarWhereInput>;
    NOT?: Array<ClaimFinancialScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFilter>;
    requestedAmount?: InstanceType<typeof FloatFilter>;
    paidAmount?: InstanceType<typeof FloatNullableFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableFilter>;
    previousBalance?: InstanceType<typeof FloatFilter>;
    remainingBalance?: InstanceType<typeof FloatFilter>;
    branchId?: InstanceType<typeof IntNullableFilter>;
    claimStatusId?: InstanceType<typeof IntNullableFilter>;
}
export declare class ClaimFinancialSumAggregateInput {
    id?: true;
    totalInvoiceProofAmount?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    previousBalance?: true;
    remainingBalance?: true;
    branchId?: true;
    claimStatusId?: true;
}
export declare class ClaimFinancialSumAggregate {
    id?: number;
    totalInvoiceProofAmount?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    previousBalance?: number;
    remainingBalance?: number;
    branchId?: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    totalInvoiceProofAmount?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    previousBalance?: keyof typeof SortOrder;
    remainingBalance?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    claimStatusId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialUncheckedCreateNestedManyWithoutBranchPayeeInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
}
export declare class ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimStatusInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimStatusInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class ClaimFinancialUncheckedCreateWithoutBranchPayeeInput {
    id?: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    claimStatusId?: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialUncheckedCreateWithoutClaimStatusInput {
    id?: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchId?: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialUncheckedCreateWithoutClaimInput {
    id?: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchId?: number;
    claimStatusId?: number;
}
export declare class ClaimFinancialUncheckedCreateInput {
    id?: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    previousBalance: number;
    remainingBalance: number;
    branchId?: number;
    claimStatusId?: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialUncheckedUpdateManyWithoutBranchPayeeNestedInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    upsert?: Array<ClaimFinancialUpsertWithWhereUniqueWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    delete?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    update?: Array<ClaimFinancialUpdateWithWhereUniqueWithoutBranchPayeeInput>;
    updateMany?: Array<ClaimFinancialUpdateManyWithWhereWithoutBranchPayeeInput>;
    deleteMany?: Array<ClaimFinancialScalarWhereInput>;
}
export declare class ClaimFinancialUncheckedUpdateManyWithoutBranchPayeeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    claimStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claimStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimStatusInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimStatusInput>;
    upsert?: InstanceType<typeof ClaimFinancialUpsertWithoutClaimStatusInput>;
    disconnect?: InstanceType<typeof ClaimFinancialWhereInput>;
    delete?: InstanceType<typeof ClaimFinancialWhereInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    update?: InstanceType<typeof ClaimFinancialUpdateToOneWithWhereWithoutClaimStatusInput>;
}
export declare class ClaimFinancialUncheckedUpdateWithoutBranchPayeeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    claimStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUncheckedUpdateWithoutClaimStatusInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUncheckedUpdateWithoutClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claimStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claimStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUpdateManyMutationInput {
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUpdateManyWithWhereWithoutBranchPayeeInput {
    where: InstanceType<typeof ClaimFinancialScalarWhereInput>;
    data: InstanceType<typeof ClaimFinancialUpdateManyMutationInput>;
}
export declare class ClaimFinancialUpdateManyWithoutBranchPayeeNestedInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    upsert?: Array<ClaimFinancialUpsertWithWhereUniqueWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    delete?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>>;
    update?: Array<ClaimFinancialUpdateWithWhereUniqueWithoutBranchPayeeInput>;
    updateMany?: Array<ClaimFinancialUpdateManyWithWhereWithoutBranchPayeeInput>;
    deleteMany?: Array<ClaimFinancialScalarWhereInput>;
}
export declare class ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimInput>;
    upsert?: InstanceType<typeof ClaimFinancialUpsertWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    update?: InstanceType<typeof ClaimFinancialUpdateToOneWithWhereWithoutClaimInput>;
}
export declare class ClaimFinancialUpdateOneWithoutClaimStatusNestedInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimStatusInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimStatusInput>;
    upsert?: InstanceType<typeof ClaimFinancialUpsertWithoutClaimStatusInput>;
    disconnect?: InstanceType<typeof ClaimFinancialWhereInput>;
    delete?: InstanceType<typeof ClaimFinancialWhereInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    update?: InstanceType<typeof ClaimFinancialUpdateToOneWithWhereWithoutClaimStatusInput>;
}
export declare class ClaimFinancialUpdateToOneWithWhereWithoutClaimStatusInput {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    data: InstanceType<typeof ClaimFinancialUpdateWithoutClaimStatusInput>;
}
export declare class ClaimFinancialUpdateToOneWithWhereWithoutClaimInput {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    data: InstanceType<typeof ClaimFinancialUpdateWithoutClaimInput>;
}
export declare class ClaimFinancialUpdateWithWhereUniqueWithoutBranchPayeeInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    data: InstanceType<typeof ClaimFinancialUpdateWithoutBranchPayeeInput>;
}
export declare class ClaimFinancialUpdateWithoutBranchPayeeInput {
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimFinancialsNestedInput>;
    claimStatus?: InstanceType<typeof ClaimStatusUpdateOneWithoutClaimFinancialNestedInput>;
}
export declare class ClaimFinancialUpdateWithoutClaimStatusInput {
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchPayee?: InstanceType<typeof BranchUpdateOneWithoutClaimFinancialNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUpdateWithoutClaimInput {
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchPayee?: InstanceType<typeof BranchUpdateOneWithoutClaimFinancialNestedInput>;
    claimStatus?: InstanceType<typeof ClaimStatusUpdateOneWithoutClaimFinancialNestedInput>;
}
export declare class ClaimFinancialUpdateInput {
    totalInvoiceProofAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    previousBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    remainingBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    branchPayee?: InstanceType<typeof BranchUpdateOneWithoutClaimFinancialNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimFinancialsNestedInput>;
    claimStatus?: InstanceType<typeof ClaimStatusUpdateOneWithoutClaimFinancialNestedInput>;
}
export declare class ClaimFinancialUpsertWithWhereUniqueWithoutBranchPayeeInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    update: InstanceType<typeof ClaimFinancialUpdateWithoutBranchPayeeInput>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutBranchPayeeInput>;
}
export declare class ClaimFinancialUpsertWithoutClaimStatusInput {
    update: InstanceType<typeof ClaimFinancialUpdateWithoutClaimStatusInput>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutClaimStatusInput>;
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class ClaimFinancialUpsertWithoutClaimInput {
    update: InstanceType<typeof ClaimFinancialUpdateWithoutClaimInput>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class ClaimFinancialWhereUniqueInput {
    id?: number;
    claimStatusId?: number;
    AND?: Array<ClaimFinancialWhereInput>;
    OR?: Array<ClaimFinancialWhereInput>;
    NOT?: Array<ClaimFinancialWhereInput>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFilter>;
    requestedAmount?: InstanceType<typeof FloatFilter>;
    paidAmount?: InstanceType<typeof FloatNullableFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableFilter>;
    previousBalance?: InstanceType<typeof FloatFilter>;
    remainingBalance?: InstanceType<typeof FloatFilter>;
    branchId?: InstanceType<typeof IntNullableFilter>;
    branchPayee?: InstanceType<typeof BranchNullableRelationFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
    claimStatus?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
}
export declare class ClaimFinancialWhereInput {
    AND?: Array<ClaimFinancialWhereInput>;
    OR?: Array<ClaimFinancialWhereInput>;
    NOT?: Array<ClaimFinancialWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    totalInvoiceProofAmount?: InstanceType<typeof FloatFilter>;
    requestedAmount?: InstanceType<typeof FloatFilter>;
    paidAmount?: InstanceType<typeof FloatNullableFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableFilter>;
    previousBalance?: InstanceType<typeof FloatFilter>;
    remainingBalance?: InstanceType<typeof FloatFilter>;
    branchId?: InstanceType<typeof IntNullableFilter>;
    claimStatusId?: InstanceType<typeof IntNullableFilter>;
    branchPayee?: InstanceType<typeof BranchNullableRelationFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
    claimStatus?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
}
export declare class ClaimFinancial {
    id: number;
    totalInvoiceProofAmount: number;
    requestedAmount: number;
    paidAmount: number | null;
    rejectedAmount: number | null;
    transactionProcessDate: Date | null;
    transferDate: Date | null;
    previousBalance: number;
    remainingBalance: number;
    branchId: number | null;
    claimStatusId: number | null;
    branchPayee?: InstanceType<typeof Branch> | null;
    claim?: InstanceType<typeof Claim> | null;
    claimStatus?: InstanceType<typeof ClaimStatus> | null;
}
export declare class CreateManyClaimFinancialArgs {
    data: Array<ClaimFinancialCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClaimFinancialArgs {
    data: InstanceType<typeof ClaimFinancialCreateInput>;
}
export declare class DeleteManyClaimFinancialArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class DeleteOneClaimFinancialArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class FindFirstClaimFinancialOrThrowArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
}
export declare class FindFirstClaimFinancialArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
}
export declare class FindManyClaimFinancialArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
}
export declare class FindUniqueClaimFinancialOrThrowArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class FindUniqueClaimFinancialArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class UpdateManyClaimFinancialArgs {
    data: InstanceType<typeof ClaimFinancialUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class UpdateOneClaimFinancialArgs {
    data: InstanceType<typeof ClaimFinancialUpdateInput>;
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
}
export declare class UpsertOneClaimFinancialArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimStatusId'>;
    create: InstanceType<typeof ClaimFinancialCreateInput>;
    update: InstanceType<typeof ClaimFinancialUpdateInput>;
}
export declare class AggregateClaimProgram {
    _count?: InstanceType<typeof ClaimProgramCountAggregate>;
    _avg?: InstanceType<typeof ClaimProgramAvgAggregate>;
    _sum?: InstanceType<typeof ClaimProgramSumAggregate>;
    _min?: InstanceType<typeof ClaimProgramMinAggregate>;
    _max?: InstanceType<typeof ClaimProgramMaxAggregate>;
}
export declare class ClaimProgramAggregateArgs {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    orderBy?: Array<ClaimProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimProgramSumAggregateInput>;
    _min?: InstanceType<typeof ClaimProgramMinAggregateInput>;
    _max?: InstanceType<typeof ClaimProgramMaxAggregateInput>;
}
export declare class ClaimProgramAvgAggregateInput {
    id?: true;
    diseaseId?: true;
    clinicId?: true;
    programId?: true;
}
export declare class ClaimProgramAvgAggregate {
    id?: number;
    diseaseId?: number;
    clinicId?: number;
    programId?: number;
}
export declare class ClaimProgramAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ClaimProgramCountAggregateInput {
    id?: true;
    expeditionDate?: true;
    reclaim?: true;
    submissionNote?: true;
    description?: true;
    additionalNote?: true;
    startTreatment?: true;
    endTreatment?: true;
    kurisRodaOrWalkerSetoreName?: true;
    diseaseId?: true;
    clinicId?: true;
    programId?: true;
    _all?: true;
}
export declare class ClaimProgramCountAggregate {
    id: number;
    expeditionDate: number;
    reclaim: number;
    submissionNote: number;
    description: number;
    additionalNote: number;
    startTreatment: number;
    endTreatment: number;
    kurisRodaOrWalkerSetoreName: number;
    diseaseId: number;
    clinicId: number;
    programId: number;
    _all: number;
}
export declare class ClaimProgramCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    expeditionDate?: keyof typeof SortOrder;
    reclaim?: keyof typeof SortOrder;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    startTreatment?: keyof typeof SortOrder;
    endTreatment?: keyof typeof SortOrder;
    kurisRodaOrWalkerSetoreName?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ClaimProgramCount {
    documents?: number;
    invoiceProofs?: number;
}
export declare class ClaimProgramCreateManyClinicsInputEnvelope {
    data: Array<ClaimProgramCreateManyClinicsInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimProgramCreateManyClinicsInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    programId: number;
}
export declare class ClaimProgramCreateManyDiseaseInputEnvelope {
    data: Array<ClaimProgramCreateManyDiseaseInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimProgramCreateManyDiseaseInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    clinicId?: number;
    programId: number;
}
export declare class ClaimProgramCreateManyProgramInputEnvelope {
    data: Array<ClaimProgramCreateManyProgramInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimProgramCreateManyProgramInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
}
export declare class ClaimProgramCreateManyInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId: number;
}
export declare class ClaimProgramCreateNestedManyWithoutClinicsInput {
    create?: Array<ClaimProgramCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyClinicsInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
}
export declare class ClaimProgramCreateNestedManyWithoutDiseaseInput {
    create?: Array<ClaimProgramCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyDiseaseInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
}
export declare class ClaimProgramCreateNestedManyWithoutProgramInput {
    create?: Array<ClaimProgramCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
}
export declare class ClaimProgramCreateNestedOneWithoutClaimInput {
    create?: InstanceType<typeof ClaimProgramCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimProgramCreateOrConnectWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class ClaimProgramCreateNestedOneWithoutDocumentsInput {
    create?: InstanceType<typeof ClaimProgramCreateWithoutDocumentsInput>;
    connectOrCreate?: InstanceType<typeof ClaimProgramCreateOrConnectWithoutDocumentsInput>;
    connect?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class ClaimProgramCreateNestedOneWithoutInvoiceProofsInput {
    create?: InstanceType<typeof ClaimProgramCreateWithoutInvoiceProofsInput>;
    connectOrCreate?: InstanceType<typeof ClaimProgramCreateOrConnectWithoutInvoiceProofsInput>;
    connect?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class ClaimProgramCreateOrConnectWithoutClaimInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateWithoutClaimInput>;
}
export declare class ClaimProgramCreateOrConnectWithoutClinicsInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateWithoutClinicsInput>;
}
export declare class ClaimProgramCreateOrConnectWithoutDiseaseInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateWithoutDiseaseInput>;
}
export declare class ClaimProgramCreateOrConnectWithoutDocumentsInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateWithoutDocumentsInput>;
}
export declare class ClaimProgramCreateOrConnectWithoutInvoiceProofsInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateWithoutInvoiceProofsInput>;
}
export declare class ClaimProgramCreateOrConnectWithoutProgramInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateWithoutProgramInput>;
}
export declare class ClaimProgramCreateWithoutClaimInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimProgramInput>;
    clinics?: InstanceType<typeof ClinicCreateNestedOneWithoutClaimProgramInput>;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramCreateWithoutClinicsInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimProgramInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProgramInput>;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramCreateWithoutDiseaseInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    clinics?: InstanceType<typeof ClinicCreateNestedOneWithoutClaimProgramInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProgramInput>;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramCreateWithoutDocumentsInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimProgramInput>;
    clinics?: InstanceType<typeof ClinicCreateNestedOneWithoutClaimProgramInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProgramInput>;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimProgramInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramCreateWithoutInvoiceProofsInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimProgramInput>;
    clinics?: InstanceType<typeof ClinicCreateNestedOneWithoutClaimProgramInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProgramInput>;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProgrammInput>;
}
export declare class ClaimProgramCreateWithoutProgramInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimProgramInput>;
    clinics?: InstanceType<typeof ClinicCreateNestedOneWithoutClaimProgramInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramCreateInput {
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimProgramInput>;
    clinics?: InstanceType<typeof ClinicCreateNestedOneWithoutClaimProgramInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProgramInput>;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramGroupByArgs {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    orderBy?: Array<ClaimProgramOrderByWithAggregationInput>;
    by: Array<keyof typeof ClaimProgramScalarFieldEnum>;
    having?: InstanceType<typeof ClaimProgramScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimProgramSumAggregateInput>;
    _min?: InstanceType<typeof ClaimProgramMinAggregateInput>;
    _max?: InstanceType<typeof ClaimProgramMaxAggregateInput>;
}
export declare class ClaimProgramGroupBy {
    id: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId: number;
    _count?: InstanceType<typeof ClaimProgramCountAggregate>;
    _avg?: InstanceType<typeof ClaimProgramAvgAggregate>;
    _sum?: InstanceType<typeof ClaimProgramSumAggregate>;
    _min?: InstanceType<typeof ClaimProgramMinAggregate>;
    _max?: InstanceType<typeof ClaimProgramMaxAggregate>;
}
export declare class ClaimProgramListRelationFilter {
    every?: InstanceType<typeof ClaimProgramWhereInput>;
    some?: InstanceType<typeof ClaimProgramWhereInput>;
    none?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class ClaimProgramMaxAggregateInput {
    id?: true;
    expeditionDate?: true;
    reclaim?: true;
    submissionNote?: true;
    description?: true;
    additionalNote?: true;
    startTreatment?: true;
    endTreatment?: true;
    kurisRodaOrWalkerSetoreName?: true;
    diseaseId?: true;
    clinicId?: true;
    programId?: true;
}
export declare class ClaimProgramMaxAggregate {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId?: number;
}
export declare class ClaimProgramMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    expeditionDate?: keyof typeof SortOrder;
    reclaim?: keyof typeof SortOrder;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    startTreatment?: keyof typeof SortOrder;
    endTreatment?: keyof typeof SortOrder;
    kurisRodaOrWalkerSetoreName?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ClaimProgramMinAggregateInput {
    id?: true;
    expeditionDate?: true;
    reclaim?: true;
    submissionNote?: true;
    description?: true;
    additionalNote?: true;
    startTreatment?: true;
    endTreatment?: true;
    kurisRodaOrWalkerSetoreName?: true;
    diseaseId?: true;
    clinicId?: true;
    programId?: true;
}
export declare class ClaimProgramMinAggregate {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId?: number;
}
export declare class ClaimProgramMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    expeditionDate?: keyof typeof SortOrder;
    reclaim?: keyof typeof SortOrder;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    startTreatment?: keyof typeof SortOrder;
    endTreatment?: keyof typeof SortOrder;
    kurisRodaOrWalkerSetoreName?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ClaimProgramNullableRelationFilter {
    is?: InstanceType<typeof ClaimProgramWhereInput>;
    isNot?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class ClaimProgramOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClaimProgramOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    expeditionDate?: InstanceType<typeof SortOrderInput>;
    reclaim?: InstanceType<typeof SortOrderInput>;
    submissionNote?: InstanceType<typeof SortOrderInput>;
    description?: InstanceType<typeof SortOrderInput>;
    additionalNote?: InstanceType<typeof SortOrderInput>;
    startTreatment?: InstanceType<typeof SortOrderInput>;
    endTreatment?: InstanceType<typeof SortOrderInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof SortOrderInput>;
    diseaseId?: InstanceType<typeof SortOrderInput>;
    clinicId?: InstanceType<typeof SortOrderInput>;
    programId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClaimProgramCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimProgramAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimProgramMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimProgramMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimProgramSumOrderByAggregateInput>;
}
export declare class ClaimProgramOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    expeditionDate?: InstanceType<typeof SortOrderInput>;
    reclaim?: InstanceType<typeof SortOrderInput>;
    submissionNote?: InstanceType<typeof SortOrderInput>;
    description?: InstanceType<typeof SortOrderInput>;
    additionalNote?: InstanceType<typeof SortOrderInput>;
    startTreatment?: InstanceType<typeof SortOrderInput>;
    endTreatment?: InstanceType<typeof SortOrderInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof SortOrderInput>;
    diseaseId?: InstanceType<typeof SortOrderInput>;
    clinicId?: InstanceType<typeof SortOrderInput>;
    programId?: keyof typeof SortOrder;
    disease?: InstanceType<typeof DiseaseOrderByWithRelationInput>;
    clinics?: InstanceType<typeof ClinicOrderByWithRelationInput>;
    claim?: InstanceType<typeof ClaimOrderByWithRelationInput>;
    program?: InstanceType<typeof ProgramOrderByWithRelationInput>;
    documents?: InstanceType<typeof DocumentOrderByRelationAggregateInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofOrderByRelationAggregateInput>;
}
export declare class ClaimProgramRelationFilter {
    is?: InstanceType<typeof ClaimProgramWhereInput>;
    isNot?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class ClaimProgramScalarWhereWithAggregatesInput {
    AND?: Array<ClaimProgramScalarWhereWithAggregatesInput>;
    OR?: Array<ClaimProgramScalarWhereWithAggregatesInput>;
    NOT?: Array<ClaimProgramScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    expeditionDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    reclaim?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    submissionNote?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    additionalNote?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    startTreatment?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    diseaseId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    clinicId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    programId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ClaimProgramScalarWhereInput {
    AND?: Array<ClaimProgramScalarWhereInput>;
    OR?: Array<ClaimProgramScalarWhereInput>;
    NOT?: Array<ClaimProgramScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    expeditionDate?: InstanceType<typeof DateTimeNullableFilter>;
    reclaim?: InstanceType<typeof StringNullableFilter>;
    submissionNote?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    additionalNote?: InstanceType<typeof StringNullableFilter>;
    startTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof StringNullableFilter>;
    diseaseId?: InstanceType<typeof IntNullableFilter>;
    clinicId?: InstanceType<typeof IntNullableFilter>;
    programId?: InstanceType<typeof IntFilter>;
}
export declare class ClaimProgramSumAggregateInput {
    id?: true;
    diseaseId?: true;
    clinicId?: true;
    programId?: true;
}
export declare class ClaimProgramSumAggregate {
    id?: number;
    diseaseId?: number;
    clinicId?: number;
    programId?: number;
}
export declare class ClaimProgramSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ClaimProgramUncheckedCreateNestedManyWithoutClinicsInput {
    create?: Array<ClaimProgramCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyClinicsInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
}
export declare class ClaimProgramUncheckedCreateNestedManyWithoutDiseaseInput {
    create?: Array<ClaimProgramCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyDiseaseInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
}
export declare class ClaimProgramUncheckedCreateNestedManyWithoutProgramInput {
    create?: Array<ClaimProgramCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
}
export declare class ClaimProgramUncheckedCreateWithoutClaimInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId: number;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramUncheckedCreateWithoutClinicsInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    programId: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramUncheckedCreateWithoutDiseaseInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    clinicId?: number;
    programId: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramUncheckedCreateWithoutDocumentsInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProgramInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramUncheckedCreateWithoutInvoiceProofsInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput>;
}
export declare class ClaimProgramUncheckedCreateWithoutProgramInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramUncheckedCreateInput {
    id?: number;
    expeditionDate?: Date | string;
    reclaim?: string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    kurisRodaOrWalkerSetoreName?: string;
    diseaseId?: number;
    clinicId?: number;
    programId: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProgramInput>;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput>;
}
export declare class ClaimProgramUncheckedUpdateManyWithoutClinicsNestedInput {
    create?: Array<ClaimProgramCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutClinicsInput>;
    upsert?: Array<ClaimProgramUpsertWithWhereUniqueWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyClinicsInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    update?: Array<ClaimProgramUpdateWithWhereUniqueWithoutClinicsInput>;
    updateMany?: Array<ClaimProgramUpdateManyWithWhereWithoutClinicsInput>;
    deleteMany?: Array<ClaimProgramScalarWhereInput>;
}
export declare class ClaimProgramUncheckedUpdateManyWithoutClinicsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimProgramUncheckedUpdateManyWithoutDiseaseNestedInput {
    create?: Array<ClaimProgramCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutDiseaseInput>;
    upsert?: Array<ClaimProgramUpsertWithWhereUniqueWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyDiseaseInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    update?: Array<ClaimProgramUpdateWithWhereUniqueWithoutDiseaseInput>;
    updateMany?: Array<ClaimProgramUpdateManyWithWhereWithoutDiseaseInput>;
    deleteMany?: Array<ClaimProgramScalarWhereInput>;
}
export declare class ClaimProgramUncheckedUpdateManyWithoutDiseaseInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimProgramUncheckedUpdateManyWithoutProgramNestedInput {
    create?: Array<ClaimProgramCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutProgramInput>;
    upsert?: Array<ClaimProgramUpsertWithWhereUniqueWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    update?: Array<ClaimProgramUpdateWithWhereUniqueWithoutProgramInput>;
    updateMany?: Array<ClaimProgramUpdateManyWithWhereWithoutProgramInput>;
    deleteMany?: Array<ClaimProgramScalarWhereInput>;
}
export declare class ClaimProgramUncheckedUpdateManyWithoutProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ClaimProgramUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimProgramUncheckedUpdateWithoutClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUncheckedUpdateWithoutClinicsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUncheckedUpdateWithoutDiseaseInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUncheckedUpdateWithoutDocumentsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUncheckedUpdateWithoutInvoiceProofsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput>;
}
export declare class ClaimProgramUncheckedUpdateWithoutProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpdateManyMutationInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimProgramUpdateManyWithWhereWithoutClinicsInput {
    where: InstanceType<typeof ClaimProgramScalarWhereInput>;
    data: InstanceType<typeof ClaimProgramUpdateManyMutationInput>;
}
export declare class ClaimProgramUpdateManyWithWhereWithoutDiseaseInput {
    where: InstanceType<typeof ClaimProgramScalarWhereInput>;
    data: InstanceType<typeof ClaimProgramUpdateManyMutationInput>;
}
export declare class ClaimProgramUpdateManyWithWhereWithoutProgramInput {
    where: InstanceType<typeof ClaimProgramScalarWhereInput>;
    data: InstanceType<typeof ClaimProgramUpdateManyMutationInput>;
}
export declare class ClaimProgramUpdateManyWithoutClinicsNestedInput {
    create?: Array<ClaimProgramCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutClinicsInput>;
    upsert?: Array<ClaimProgramUpsertWithWhereUniqueWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyClinicsInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    update?: Array<ClaimProgramUpdateWithWhereUniqueWithoutClinicsInput>;
    updateMany?: Array<ClaimProgramUpdateManyWithWhereWithoutClinicsInput>;
    deleteMany?: Array<ClaimProgramScalarWhereInput>;
}
export declare class ClaimProgramUpdateManyWithoutDiseaseNestedInput {
    create?: Array<ClaimProgramCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutDiseaseInput>;
    upsert?: Array<ClaimProgramUpsertWithWhereUniqueWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyDiseaseInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    update?: Array<ClaimProgramUpdateWithWhereUniqueWithoutDiseaseInput>;
    updateMany?: Array<ClaimProgramUpdateManyWithWhereWithoutDiseaseInput>;
    deleteMany?: Array<ClaimProgramScalarWhereInput>;
}
export declare class ClaimProgramUpdateManyWithoutProgramNestedInput {
    create?: Array<ClaimProgramCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimProgramCreateOrConnectWithoutProgramInput>;
    upsert?: Array<ClaimProgramUpsertWithWhereUniqueWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimProgramCreateManyProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>>;
    update?: Array<ClaimProgramUpdateWithWhereUniqueWithoutProgramInput>;
    updateMany?: Array<ClaimProgramUpdateManyWithWhereWithoutProgramInput>;
    deleteMany?: Array<ClaimProgramScalarWhereInput>;
}
export declare class ClaimProgramUpdateOneRequiredWithoutClaimNestedInput {
    create?: InstanceType<typeof ClaimProgramCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimProgramCreateOrConnectWithoutClaimInput>;
    upsert?: InstanceType<typeof ClaimProgramUpsertWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ClaimProgramUpdateToOneWithWhereWithoutClaimInput>;
}
export declare class ClaimProgramUpdateOneWithoutDocumentsNestedInput {
    create?: InstanceType<typeof ClaimProgramCreateWithoutDocumentsInput>;
    connectOrCreate?: InstanceType<typeof ClaimProgramCreateOrConnectWithoutDocumentsInput>;
    upsert?: InstanceType<typeof ClaimProgramUpsertWithoutDocumentsInput>;
    disconnect?: InstanceType<typeof ClaimProgramWhereInput>;
    delete?: InstanceType<typeof ClaimProgramWhereInput>;
    connect?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ClaimProgramUpdateToOneWithWhereWithoutDocumentsInput>;
}
export declare class ClaimProgramUpdateOneWithoutInvoiceProofsNestedInput {
    create?: InstanceType<typeof ClaimProgramCreateWithoutInvoiceProofsInput>;
    connectOrCreate?: InstanceType<typeof ClaimProgramCreateOrConnectWithoutInvoiceProofsInput>;
    upsert?: InstanceType<typeof ClaimProgramUpsertWithoutInvoiceProofsInput>;
    disconnect?: InstanceType<typeof ClaimProgramWhereInput>;
    delete?: InstanceType<typeof ClaimProgramWhereInput>;
    connect?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ClaimProgramUpdateToOneWithWhereWithoutInvoiceProofsInput>;
}
export declare class ClaimProgramUpdateToOneWithWhereWithoutClaimInput {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    data: InstanceType<typeof ClaimProgramUpdateWithoutClaimInput>;
}
export declare class ClaimProgramUpdateToOneWithWhereWithoutDocumentsInput {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    data: InstanceType<typeof ClaimProgramUpdateWithoutDocumentsInput>;
}
export declare class ClaimProgramUpdateToOneWithWhereWithoutInvoiceProofsInput {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    data: InstanceType<typeof ClaimProgramUpdateWithoutInvoiceProofsInput>;
}
export declare class ClaimProgramUpdateWithWhereUniqueWithoutClinicsInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClaimProgramUpdateWithoutClinicsInput>;
}
export declare class ClaimProgramUpdateWithWhereUniqueWithoutDiseaseInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClaimProgramUpdateWithoutDiseaseInput>;
}
export declare class ClaimProgramUpdateWithWhereUniqueWithoutProgramInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClaimProgramUpdateWithoutProgramInput>;
}
export declare class ClaimProgramUpdateWithoutClaimInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimProgramNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneWithoutClaimProgramNestedInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpdateWithoutClinicsInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimProgramNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProgramNestedInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpdateWithoutDiseaseInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneWithoutClaimProgramNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProgramNestedInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpdateWithoutDocumentsInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimProgramNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneWithoutClaimProgramNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProgramNestedInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimProgramNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpdateWithoutInvoiceProofsInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimProgramNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneWithoutClaimProgramNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProgramNestedInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProgrammNestedInput>;
}
export declare class ClaimProgramUpdateWithoutProgramInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimProgramNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneWithoutClaimProgramNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpdateInput {
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimProgramNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneWithoutClaimProgramNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProgramNestedInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimProgramNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProgrammNestedInput>;
    invoiceProofs?: InstanceType<typeof InvoiceProofUpdateManyWithoutClaimProgramNestedInput>;
}
export declare class ClaimProgramUpsertWithWhereUniqueWithoutClinicsInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClaimProgramUpdateWithoutClinicsInput>;
    create: InstanceType<typeof ClaimProgramCreateWithoutClinicsInput>;
}
export declare class ClaimProgramUpsertWithWhereUniqueWithoutDiseaseInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClaimProgramUpdateWithoutDiseaseInput>;
    create: InstanceType<typeof ClaimProgramCreateWithoutDiseaseInput>;
}
export declare class ClaimProgramUpsertWithWhereUniqueWithoutProgramInput {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClaimProgramUpdateWithoutProgramInput>;
    create: InstanceType<typeof ClaimProgramCreateWithoutProgramInput>;
}
export declare class ClaimProgramUpsertWithoutClaimInput {
    update: InstanceType<typeof ClaimProgramUpdateWithoutClaimInput>;
    create: InstanceType<typeof ClaimProgramCreateWithoutClaimInput>;
    where?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class ClaimProgramUpsertWithoutDocumentsInput {
    update: InstanceType<typeof ClaimProgramUpdateWithoutDocumentsInput>;
    create: InstanceType<typeof ClaimProgramCreateWithoutDocumentsInput>;
    where?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class ClaimProgramUpsertWithoutInvoiceProofsInput {
    update: InstanceType<typeof ClaimProgramUpdateWithoutInvoiceProofsInput>;
    create: InstanceType<typeof ClaimProgramCreateWithoutInvoiceProofsInput>;
    where?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class ClaimProgramWhereUniqueInput {
    id?: number;
    AND?: Array<ClaimProgramWhereInput>;
    OR?: Array<ClaimProgramWhereInput>;
    NOT?: Array<ClaimProgramWhereInput>;
    expeditionDate?: InstanceType<typeof DateTimeNullableFilter>;
    reclaim?: InstanceType<typeof StringNullableFilter>;
    submissionNote?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    additionalNote?: InstanceType<typeof StringNullableFilter>;
    startTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof StringNullableFilter>;
    diseaseId?: InstanceType<typeof IntNullableFilter>;
    clinicId?: InstanceType<typeof IntNullableFilter>;
    programId?: InstanceType<typeof IntFilter>;
    disease?: InstanceType<typeof DiseaseNullableRelationFilter>;
    clinics?: InstanceType<typeof ClinicNullableRelationFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
    program?: InstanceType<typeof ProgramRelationFilter>;
    documents?: InstanceType<typeof DocumentListRelationFilter>;
    invoiceProofs?: InstanceType<typeof InvoiceProofListRelationFilter>;
}
export declare class ClaimProgramWhereInput {
    AND?: Array<ClaimProgramWhereInput>;
    OR?: Array<ClaimProgramWhereInput>;
    NOT?: Array<ClaimProgramWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    expeditionDate?: InstanceType<typeof DateTimeNullableFilter>;
    reclaim?: InstanceType<typeof StringNullableFilter>;
    submissionNote?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    additionalNote?: InstanceType<typeof StringNullableFilter>;
    startTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    kurisRodaOrWalkerSetoreName?: InstanceType<typeof StringNullableFilter>;
    diseaseId?: InstanceType<typeof IntNullableFilter>;
    clinicId?: InstanceType<typeof IntNullableFilter>;
    programId?: InstanceType<typeof IntFilter>;
    disease?: InstanceType<typeof DiseaseNullableRelationFilter>;
    clinics?: InstanceType<typeof ClinicNullableRelationFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
    program?: InstanceType<typeof ProgramRelationFilter>;
    documents?: InstanceType<typeof DocumentListRelationFilter>;
    invoiceProofs?: InstanceType<typeof InvoiceProofListRelationFilter>;
}
export declare class ClaimProgram {
    id: number;
    expeditionDate: Date | null;
    reclaim: string | null;
    submissionNote: string | null;
    description: string | null;
    additionalNote: string | null;
    startTreatment: Date | null;
    endTreatment: Date | null;
    kurisRodaOrWalkerSetoreName: string | null;
    diseaseId: number | null;
    clinicId: number | null;
    programId: number;
    disease?: InstanceType<typeof Disease> | null;
    clinics?: InstanceType<typeof Clinic> | null;
    claim?: InstanceType<typeof Claim> | null;
    program?: InstanceType<typeof Program>;
    documents?: Array<Document>;
    invoiceProofs?: Array<InvoiceProof>;
    _count?: InstanceType<typeof ClaimProgramCount>;
}
export declare class CreateManyClaimProgramArgs {
    data: Array<ClaimProgramCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClaimProgramArgs {
    data: InstanceType<typeof ClaimProgramCreateInput>;
}
export declare class DeleteManyClaimProgramArgs {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class DeleteOneClaimProgramArgs {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class FindFirstClaimProgramOrThrowArgs {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    orderBy?: Array<ClaimProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimProgramScalarFieldEnum>;
}
export declare class FindFirstClaimProgramArgs {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    orderBy?: Array<ClaimProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimProgramScalarFieldEnum>;
}
export declare class FindManyClaimProgramArgs {
    where?: InstanceType<typeof ClaimProgramWhereInput>;
    orderBy?: Array<ClaimProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimProgramScalarFieldEnum>;
}
export declare class FindUniqueClaimProgramOrThrowArgs {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class FindUniqueClaimProgramArgs {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class UpdateManyClaimProgramArgs {
    data: InstanceType<typeof ClaimProgramUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimProgramWhereInput>;
}
export declare class UpdateOneClaimProgramArgs {
    data: InstanceType<typeof ClaimProgramUpdateInput>;
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
}
export declare class UpsertOneClaimProgramArgs {
    where: Prisma.AtLeast<ClaimProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClaimProgramCreateInput>;
    update: InstanceType<typeof ClaimProgramUpdateInput>;
}
export declare class AggregateClaimStatus {
    _count?: InstanceType<typeof ClaimStatusCountAggregate>;
    _avg?: InstanceType<typeof ClaimStatusAvgAggregate>;
    _sum?: InstanceType<typeof ClaimStatusSumAggregate>;
    _min?: InstanceType<typeof ClaimStatusMinAggregate>;
    _max?: InstanceType<typeof ClaimStatusMaxAggregate>;
}
export declare class ClaimStatusAggregateArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimStatusCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimStatusAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimStatusSumAggregateInput>;
    _min?: InstanceType<typeof ClaimStatusMinAggregateInput>;
    _max?: InstanceType<typeof ClaimStatusMaxAggregateInput>;
}
export declare class ClaimStatusAvgAggregateInput {
    id?: true;
}
export declare class ClaimStatusAvgAggregate {
    id?: number;
}
export declare class ClaimStatusAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ClaimStatusCountAggregateInput {
    id?: true;
    description?: true;
    rejectionReason?: true;
    createdAt?: true;
    status?: true;
    createById?: true;
    claimId?: true;
    rejectionLetterId?: true;
    guaranteeLetterId?: true;
    transactionLetterId?: true;
    bookKeepingOrderId?: true;
    _all?: true;
}
export declare class ClaimStatusCountAggregate {
    id: number;
    description: number;
    rejectionReason: number;
    createdAt: number;
    status: number;
    createById: number;
    claimId: number;
    rejectionLetterId: number;
    guaranteeLetterId: number;
    transactionLetterId: number;
    bookKeepingOrderId: number;
    _all: number;
}
export declare class ClaimStatusCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createById?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    rejectionLetterId?: keyof typeof SortOrder;
    guaranteeLetterId?: keyof typeof SortOrder;
    transactionLetterId?: keyof typeof SortOrder;
    bookKeepingOrderId?: keyof typeof SortOrder;
}
export declare class ClaimStatusCreateManyClaimInputEnvelope {
    data: Array<ClaimStatusCreateManyClaimInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimStatusCreateManyClaimInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
}
export declare class ClaimStatusCreateManyCreateByInputEnvelope {
    data: Array<ClaimStatusCreateManyCreateByInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimStatusCreateManyCreateByInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
}
export declare class ClaimStatusCreateManyInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
}
export declare class ClaimStatusCreateNestedManyWithoutClaimInput {
    create?: Array<ClaimStatusCreateWithoutClaimInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutClaimInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyClaimInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
}
export declare class ClaimStatusCreateNestedManyWithoutCreateByInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
}
export declare class ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutBookKeepingOrderInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutBookKeepingOrderInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusCreateNestedOneWithoutClaimFinancialInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutClaimFinancialInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutClaimFinancialInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusCreateNestedOneWithoutRejectionLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusCreateNestedOneWithoutTransactionLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutTransactionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutTransactionLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusCreateOrConnectWithoutBookKeepingOrderInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutBookKeepingOrderInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutClaimFinancialInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutClaimFinancialInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutClaimInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutClaimInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutCreateByInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutCreateByInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutRejectionLetterInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutTransactionLetterInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutTransactionLetterInput>;
}
export declare class ClaimStatusCreateWithoutBookKeepingOrderInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusCreateWithoutClaimFinancialInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
}
export declare class ClaimStatusCreateWithoutClaimInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusCreateWithoutCreateByInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusCreateWithoutGuaranteeLetterInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusCreateWithoutRejectionLetterInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusCreateWithoutTransactionLetterInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusCreateInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
    transactionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutTransactionLetterOfInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentCreateNestedOneWithoutBookKeepingOrderOfInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusGroupByArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithAggregationInput>;
    by: Array<keyof typeof ClaimStatusScalarFieldEnum>;
    having?: InstanceType<typeof ClaimStatusScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimStatusCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimStatusAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimStatusSumAggregateInput>;
    _min?: InstanceType<typeof ClaimStatusMinAggregateInput>;
    _max?: InstanceType<typeof ClaimStatusMaxAggregateInput>;
}
export declare class ClaimStatusGroupBy {
    id: number;
    description?: string;
    rejectionReason?: string;
    createdAt: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    _count?: InstanceType<typeof ClaimStatusCountAggregate>;
    _avg?: InstanceType<typeof ClaimStatusAvgAggregate>;
    _sum?: InstanceType<typeof ClaimStatusSumAggregate>;
    _min?: InstanceType<typeof ClaimStatusMinAggregate>;
    _max?: InstanceType<typeof ClaimStatusMaxAggregate>;
}
export declare class ClaimStatusListRelationFilter {
    every?: InstanceType<typeof ClaimStatusWhereInput>;
    some?: InstanceType<typeof ClaimStatusWhereInput>;
    none?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusMaxAggregateInput {
    id?: true;
    description?: true;
    rejectionReason?: true;
    createdAt?: true;
    status?: true;
    createById?: true;
    claimId?: true;
    rejectionLetterId?: true;
    guaranteeLetterId?: true;
    transactionLetterId?: true;
    bookKeepingOrderId?: true;
}
export declare class ClaimStatusMaxAggregate {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status?: keyof typeof ClaimStatusType;
    createById?: string;
    claimId?: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
}
export declare class ClaimStatusMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createById?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    rejectionLetterId?: keyof typeof SortOrder;
    guaranteeLetterId?: keyof typeof SortOrder;
    transactionLetterId?: keyof typeof SortOrder;
    bookKeepingOrderId?: keyof typeof SortOrder;
}
export declare class ClaimStatusMinAggregateInput {
    id?: true;
    description?: true;
    rejectionReason?: true;
    createdAt?: true;
    status?: true;
    createById?: true;
    claimId?: true;
    rejectionLetterId?: true;
    guaranteeLetterId?: true;
    transactionLetterId?: true;
    bookKeepingOrderId?: true;
}
export declare class ClaimStatusMinAggregate {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status?: keyof typeof ClaimStatusType;
    createById?: string;
    claimId?: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
}
export declare class ClaimStatusMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createById?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    rejectionLetterId?: keyof typeof SortOrder;
    guaranteeLetterId?: keyof typeof SortOrder;
    transactionLetterId?: keyof typeof SortOrder;
    bookKeepingOrderId?: keyof typeof SortOrder;
}
export declare class ClaimStatusNullableRelationFilter {
    is?: InstanceType<typeof ClaimStatusWhereInput>;
    isNot?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClaimStatusOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    rejectionReason?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createById?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    rejectionLetterId?: InstanceType<typeof SortOrderInput>;
    guaranteeLetterId?: InstanceType<typeof SortOrderInput>;
    transactionLetterId?: InstanceType<typeof SortOrderInput>;
    bookKeepingOrderId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ClaimStatusCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimStatusAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimStatusMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimStatusMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimStatusSumOrderByAggregateInput>;
}
export declare class ClaimStatusOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    rejectionReason?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    createById?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    rejectionLetterId?: InstanceType<typeof SortOrderInput>;
    guaranteeLetterId?: InstanceType<typeof SortOrderInput>;
    transactionLetterId?: InstanceType<typeof SortOrderInput>;
    bookKeepingOrderId?: InstanceType<typeof SortOrderInput>;
    createBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    claim?: InstanceType<typeof ClaimOrderByWithRelationInput>;
    rejectionLetter?: InstanceType<typeof DocumentOrderByWithRelationInput>;
    guaranteeLetter?: InstanceType<typeof DocumentOrderByWithRelationInput>;
    transactionLetter?: InstanceType<typeof DocumentOrderByWithRelationInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentOrderByWithRelationInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialOrderByWithRelationInput>;
}
export declare class ClaimStatusScalarWhereWithAggregatesInput {
    AND?: Array<ClaimStatusScalarWhereWithAggregatesInput>;
    OR?: Array<ClaimStatusScalarWhereWithAggregatesInput>;
    NOT?: Array<ClaimStatusScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    rejectionReason?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumClaimStatusTypeWithAggregatesFilter>;
    createById?: InstanceType<typeof StringWithAggregatesFilter>;
    claimId?: InstanceType<typeof StringWithAggregatesFilter>;
    rejectionLetterId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    guaranteeLetterId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    transactionLetterId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    bookKeepingOrderId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class ClaimStatusScalarWhereInput {
    AND?: Array<ClaimStatusScalarWhereInput>;
    OR?: Array<ClaimStatusScalarWhereInput>;
    NOT?: Array<ClaimStatusScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumClaimStatusTypeFilter>;
    createById?: InstanceType<typeof StringFilter>;
    claimId?: InstanceType<typeof StringFilter>;
    rejectionLetterId?: InstanceType<typeof StringNullableFilter>;
    guaranteeLetterId?: InstanceType<typeof StringNullableFilter>;
    transactionLetterId?: InstanceType<typeof StringNullableFilter>;
    bookKeepingOrderId?: InstanceType<typeof StringNullableFilter>;
}
export declare class ClaimStatusSumAggregateInput {
    id?: true;
}
export declare class ClaimStatusSumAggregate {
    id?: number;
}
export declare class ClaimStatusSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ClaimStatusUncheckedCreateNestedManyWithoutClaimInput {
    create?: Array<ClaimStatusCreateWithoutClaimInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutClaimInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyClaimInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
}
export declare class ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
}
export declare class ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutBookKeepingOrderInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutBookKeepingOrderInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutTransactionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutTransactionLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class ClaimStatusUncheckedCreateWithoutBookKeepingOrderInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedCreateWithoutClaimFinancialInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
}
export declare class ClaimStatusUncheckedCreateWithoutClaimInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedCreateWithoutCreateByInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedCreateWithoutGuaranteeLetterInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedCreateWithoutRejectionLetterInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedCreateWithoutTransactionLetterInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    bookKeepingOrderId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedCreateInput {
    id?: number;
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedCreateNestedOneWithoutClaimStatusInput>;
}
export declare class ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput {
    create?: Array<ClaimStatusCreateWithoutClaimInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutClaimInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutClaimInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyClaimInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    update?: Array<ClaimStatusUpdateWithWhereUniqueWithoutClaimInput>;
    updateMany?: Array<ClaimStatusUpdateManyWithWhereWithoutClaimInput>;
    deleteMany?: Array<ClaimStatusScalarWhereInput>;
}
export declare class ClaimStatusUncheckedUpdateManyWithoutClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    update?: Array<ClaimStatusUpdateWithWhereUniqueWithoutCreateByInput>;
    updateMany?: Array<ClaimStatusUpdateManyWithWhereWithoutCreateByInput>;
    deleteMany?: Array<ClaimStatusScalarWhereInput>;
}
export declare class ClaimStatusUncheckedUpdateManyWithoutCreateByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimStatusUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutBookKeepingOrderInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutBookKeepingOrderInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutBookKeepingOrderInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutBookKeepingOrderInput>;
}
export declare class ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutGuaranteeLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutRejectionLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutRejectionLetterInput>;
}
export declare class ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutTransactionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutTransactionLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutTransactionLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutTransactionLetterInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutBookKeepingOrderInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutClaimFinancialInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutCreateByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutGuaranteeLetterInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutRejectionLetterInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUncheckedUpdateWithoutTransactionLetterInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    rejectionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guaranteeLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    transactionLetterId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bookKeepingOrderId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUncheckedUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateManyMutationInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
}
export declare class ClaimStatusUpdateManyWithWhereWithoutClaimInput {
    where: InstanceType<typeof ClaimStatusScalarWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateManyMutationInput>;
}
export declare class ClaimStatusUpdateManyWithWhereWithoutCreateByInput {
    where: InstanceType<typeof ClaimStatusScalarWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateManyMutationInput>;
}
export declare class ClaimStatusUpdateManyWithoutClaimNestedInput {
    create?: Array<ClaimStatusCreateWithoutClaimInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutClaimInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutClaimInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyClaimInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    update?: Array<ClaimStatusUpdateWithWhereUniqueWithoutClaimInput>;
    updateMany?: Array<ClaimStatusUpdateManyWithWhereWithoutClaimInput>;
    deleteMany?: Array<ClaimStatusScalarWhereInput>;
}
export declare class ClaimStatusUpdateManyWithoutCreateByNestedInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>>;
    update?: Array<ClaimStatusUpdateWithWhereUniqueWithoutCreateByInput>;
    updateMany?: Array<ClaimStatusUpdateManyWithWhereWithoutCreateByInput>;
    deleteMany?: Array<ClaimStatusScalarWhereInput>;
}
export declare class ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutBookKeepingOrderInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutBookKeepingOrderInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutBookKeepingOrderInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutBookKeepingOrderInput>;
}
export declare class ClaimStatusUpdateOneWithoutClaimFinancialNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutClaimFinancialInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutClaimFinancialInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutClaimFinancialInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutClaimFinancialInput>;
}
export declare class ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutGuaranteeLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusUpdateOneWithoutRejectionLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutRejectionLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutRejectionLetterInput>;
}
export declare class ClaimStatusUpdateOneWithoutTransactionLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutTransactionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutTransactionLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutTransactionLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutTransactionLetterInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutBookKeepingOrderInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutBookKeepingOrderInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutClaimFinancialInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutClaimFinancialInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutGuaranteeLetterInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutRejectionLetterInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutRejectionLetterInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutTransactionLetterInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutTransactionLetterInput>;
}
export declare class ClaimStatusUpdateWithWhereUniqueWithoutClaimInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutClaimInput>;
}
export declare class ClaimStatusUpdateWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutCreateByInput>;
}
export declare class ClaimStatusUpdateWithoutBookKeepingOrderInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateWithoutClaimFinancialInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
}
export declare class ClaimStatusUpdateWithoutClaimInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateWithoutCreateByInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateWithoutGuaranteeLetterInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateWithoutRejectionLetterInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateWithoutTransactionLetterInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpdateInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
    transactionLetter?: InstanceType<typeof DocumentUpdateOneWithoutTransactionLetterOfNestedInput>;
    bookKeepingOrder?: InstanceType<typeof DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput>;
    claimFinancial?: InstanceType<typeof ClaimFinancialUpdateOneWithoutClaimStatusNestedInput>;
}
export declare class ClaimStatusUpsertWithWhereUniqueWithoutClaimInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update: InstanceType<typeof ClaimStatusUpdateWithoutClaimInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutClaimInput>;
}
export declare class ClaimStatusUpsertWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    update: InstanceType<typeof ClaimStatusUpdateWithoutCreateByInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutCreateByInput>;
}
export declare class ClaimStatusUpsertWithoutBookKeepingOrderInput {
    update: InstanceType<typeof ClaimStatusUpdateWithoutBookKeepingOrderInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutBookKeepingOrderInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusUpsertWithoutClaimFinancialInput {
    update: InstanceType<typeof ClaimStatusUpdateWithoutClaimFinancialInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutClaimFinancialInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusUpsertWithoutGuaranteeLetterInput {
    update: InstanceType<typeof ClaimStatusUpdateWithoutGuaranteeLetterInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusUpsertWithoutRejectionLetterInput {
    update: InstanceType<typeof ClaimStatusUpdateWithoutRejectionLetterInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusUpsertWithoutTransactionLetterInput {
    update: InstanceType<typeof ClaimStatusUpdateWithoutTransactionLetterInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutTransactionLetterInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class ClaimStatusWhereUniqueInput {
    id?: number;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
    transactionLetterId?: string;
    bookKeepingOrderId?: string;
    AND?: Array<ClaimStatusWhereInput>;
    OR?: Array<ClaimStatusWhereInput>;
    NOT?: Array<ClaimStatusWhereInput>;
    description?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumClaimStatusTypeFilter>;
    createById?: InstanceType<typeof StringFilter>;
    claimId?: InstanceType<typeof StringFilter>;
    createBy?: InstanceType<typeof UserRelationFilter>;
    claim?: InstanceType<typeof ClaimRelationFilter>;
    rejectionLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    guaranteeLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    transactionLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    bookKeepingOrder?: InstanceType<typeof DocumentNullableRelationFilter>;
    claimFinancial?: InstanceType<typeof ClaimFinancialNullableRelationFilter>;
}
export declare class ClaimStatusWhereInput {
    AND?: Array<ClaimStatusWhereInput>;
    OR?: Array<ClaimStatusWhereInput>;
    NOT?: Array<ClaimStatusWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumClaimStatusTypeFilter>;
    createById?: InstanceType<typeof StringFilter>;
    claimId?: InstanceType<typeof StringFilter>;
    rejectionLetterId?: InstanceType<typeof StringNullableFilter>;
    guaranteeLetterId?: InstanceType<typeof StringNullableFilter>;
    transactionLetterId?: InstanceType<typeof StringNullableFilter>;
    bookKeepingOrderId?: InstanceType<typeof StringNullableFilter>;
    createBy?: InstanceType<typeof UserRelationFilter>;
    claim?: InstanceType<typeof ClaimRelationFilter>;
    rejectionLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    guaranteeLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    transactionLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    bookKeepingOrder?: InstanceType<typeof DocumentNullableRelationFilter>;
    claimFinancial?: InstanceType<typeof ClaimFinancialNullableRelationFilter>;
}
export declare class ClaimStatus {
    id: number;
    description: string | null;
    rejectionReason: string | null;
    createdAt: Date;
    status: keyof typeof ClaimStatusType;
    createById: string;
    claimId: string;
    rejectionLetterId: string | null;
    guaranteeLetterId: string | null;
    transactionLetterId: string | null;
    bookKeepingOrderId: string | null;
    createBy?: InstanceType<typeof User>;
    claim?: InstanceType<typeof Claim>;
    rejectionLetter?: InstanceType<typeof Document> | null;
    guaranteeLetter?: InstanceType<typeof Document> | null;
    transactionLetter?: InstanceType<typeof Document> | null;
    bookKeepingOrder?: InstanceType<typeof Document> | null;
    claimFinancial?: InstanceType<typeof ClaimFinancial> | null;
}
export declare class CreateManyClaimStatusArgs {
    data: Array<ClaimStatusCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClaimStatusArgs {
    data: InstanceType<typeof ClaimStatusCreateInput>;
}
export declare class DeleteManyClaimStatusArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class DeleteOneClaimStatusArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class FindFirstClaimStatusOrThrowArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimStatusScalarFieldEnum>;
}
export declare class FindFirstClaimStatusArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimStatusScalarFieldEnum>;
}
export declare class FindManyClaimStatusArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimStatusScalarFieldEnum>;
}
export declare class FindUniqueClaimStatusOrThrowArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class FindUniqueClaimStatusArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class UpdateManyClaimStatusArgs {
    data: InstanceType<typeof ClaimStatusUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class UpdateOneClaimStatusArgs {
    data: InstanceType<typeof ClaimStatusUpdateInput>;
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
}
export declare class UpsertOneClaimStatusArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId' | 'transactionLetterId' | 'bookKeepingOrderId'>;
    create: InstanceType<typeof ClaimStatusCreateInput>;
    update: InstanceType<typeof ClaimStatusUpdateInput>;
}
export declare class AggregateClinic {
    _count?: InstanceType<typeof ClinicCountAggregate>;
    _avg?: InstanceType<typeof ClinicAvgAggregate>;
    _sum?: InstanceType<typeof ClinicSumAggregate>;
    _min?: InstanceType<typeof ClinicMinAggregate>;
    _max?: InstanceType<typeof ClinicMaxAggregate>;
}
export declare class ClinicAggregateArgs {
    where?: InstanceType<typeof ClinicWhereInput>;
    orderBy?: Array<ClinicOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClinicCountAggregateInput>;
    _avg?: InstanceType<typeof ClinicAvgAggregateInput>;
    _sum?: InstanceType<typeof ClinicSumAggregateInput>;
    _min?: InstanceType<typeof ClinicMinAggregateInput>;
    _max?: InstanceType<typeof ClinicMaxAggregateInput>;
}
export declare class ClinicAvgAggregateInput {
    id?: true;
}
export declare class ClinicAvgAggregate {
    id?: number;
}
export declare class ClinicAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ClinicCountAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class ClinicCountAggregate {
    id: number;
    code: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class ClinicCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ClinicCount {
    claimProgram?: number;
}
export declare class ClinicCreateManyInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ClinicCreateNestedOneWithoutClaimProgramInput {
    create?: InstanceType<typeof ClinicCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ClinicCreateOrConnectWithoutClaimProgramInput>;
    connect?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
}
export declare class ClinicCreateOrConnectWithoutClaimProgramInput {
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClinicCreateWithoutClaimProgramInput>;
}
export declare class ClinicCreateWithoutClaimProgramInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ClinicCreateInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimProgram?: InstanceType<typeof ClaimProgramCreateNestedManyWithoutClinicsInput>;
}
export declare class ClinicGroupByArgs {
    where?: InstanceType<typeof ClinicWhereInput>;
    orderBy?: Array<ClinicOrderByWithAggregationInput>;
    by: Array<keyof typeof ClinicScalarFieldEnum>;
    having?: InstanceType<typeof ClinicScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClinicCountAggregateInput>;
    _avg?: InstanceType<typeof ClinicAvgAggregateInput>;
    _sum?: InstanceType<typeof ClinicSumAggregateInput>;
    _min?: InstanceType<typeof ClinicMinAggregateInput>;
    _max?: InstanceType<typeof ClinicMaxAggregateInput>;
}
export declare class ClinicGroupBy {
    id: number;
    code: string;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof ClinicCountAggregate>;
    _avg?: InstanceType<typeof ClinicAvgAggregate>;
    _sum?: InstanceType<typeof ClinicSumAggregate>;
    _min?: InstanceType<typeof ClinicMinAggregate>;
    _max?: InstanceType<typeof ClinicMaxAggregate>;
}
export declare class ClinicMaxAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ClinicMaxAggregate {
    id?: number;
    code?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ClinicMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ClinicMinAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class ClinicMinAggregate {
    id?: number;
    code?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ClinicMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class ClinicNullableRelationFilter {
    is?: InstanceType<typeof ClinicWhereInput>;
    isNot?: InstanceType<typeof ClinicWhereInput>;
}
export declare class ClinicOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClinicCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClinicAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClinicMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClinicMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClinicSumOrderByAggregateInput>;
}
export declare class ClinicOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    claimProgram?: InstanceType<typeof ClaimProgramOrderByRelationAggregateInput>;
}
export declare class ClinicScalarWhereWithAggregatesInput {
    AND?: Array<ClinicScalarWhereWithAggregatesInput>;
    OR?: Array<ClinicScalarWhereWithAggregatesInput>;
    NOT?: Array<ClinicScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class ClinicSumAggregateInput {
    id?: true;
}
export declare class ClinicSumAggregate {
    id?: number;
}
export declare class ClinicSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ClinicUncheckedCreateWithoutClaimProgramInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ClinicUncheckedCreateInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedCreateNestedManyWithoutClinicsInput>;
}
export declare class ClinicUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ClinicUncheckedUpdateWithoutClaimProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ClinicUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedUpdateManyWithoutClinicsNestedInput>;
}
export declare class ClinicUpdateManyMutationInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ClinicUpdateOneWithoutClaimProgramNestedInput {
    create?: InstanceType<typeof ClinicCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ClinicCreateOrConnectWithoutClaimProgramInput>;
    upsert?: InstanceType<typeof ClinicUpsertWithoutClaimProgramInput>;
    disconnect?: InstanceType<typeof ClinicWhereInput>;
    delete?: InstanceType<typeof ClinicWhereInput>;
    connect?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ClinicUpdateToOneWithWhereWithoutClaimProgramInput>;
}
export declare class ClinicUpdateToOneWithWhereWithoutClaimProgramInput {
    where?: InstanceType<typeof ClinicWhereInput>;
    data: InstanceType<typeof ClinicUpdateWithoutClaimProgramInput>;
}
export declare class ClinicUpdateWithoutClaimProgramInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ClinicUpdateInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateManyWithoutClinicsNestedInput>;
}
export declare class ClinicUpsertWithoutClaimProgramInput {
    update: InstanceType<typeof ClinicUpdateWithoutClaimProgramInput>;
    create: InstanceType<typeof ClinicCreateWithoutClaimProgramInput>;
    where?: InstanceType<typeof ClinicWhereInput>;
}
export declare class ClinicWhereUniqueInput {
    id?: number;
    AND?: Array<ClinicWhereInput>;
    OR?: Array<ClinicWhereInput>;
    NOT?: Array<ClinicWhereInput>;
    code?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramListRelationFilter>;
}
export declare class ClinicWhereInput {
    AND?: Array<ClinicWhereInput>;
    OR?: Array<ClinicWhereInput>;
    NOT?: Array<ClinicWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    code?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramListRelationFilter>;
}
export declare class Clinic {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    claimProgram?: Array<ClaimProgram>;
    _count?: InstanceType<typeof ClinicCount>;
}
export declare class CreateManyClinicArgs {
    data: Array<ClinicCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClinicArgs {
    data: InstanceType<typeof ClinicCreateInput>;
}
export declare class DeleteManyClinicArgs {
    where?: InstanceType<typeof ClinicWhereInput>;
}
export declare class DeleteOneClinicArgs {
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
}
export declare class FindFirstClinicOrThrowArgs {
    where?: InstanceType<typeof ClinicWhereInput>;
    orderBy?: Array<ClinicOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClinicScalarFieldEnum>;
}
export declare class FindFirstClinicArgs {
    where?: InstanceType<typeof ClinicWhereInput>;
    orderBy?: Array<ClinicOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClinicScalarFieldEnum>;
}
export declare class FindManyClinicArgs {
    where?: InstanceType<typeof ClinicWhereInput>;
    orderBy?: Array<ClinicOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClinicScalarFieldEnum>;
}
export declare class FindUniqueClinicOrThrowArgs {
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
}
export declare class FindUniqueClinicArgs {
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
}
export declare class UpdateManyClinicArgs {
    data: InstanceType<typeof ClinicUpdateManyMutationInput>;
    where?: InstanceType<typeof ClinicWhereInput>;
}
export declare class UpdateOneClinicArgs {
    data: InstanceType<typeof ClinicUpdateInput>;
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
}
export declare class UpsertOneClinicArgs {
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClinicCreateInput>;
    update: InstanceType<typeof ClinicUpdateInput>;
}
export declare class AggregateContactInfo {
    _count?: InstanceType<typeof ContactInfoCountAggregate>;
    _avg?: InstanceType<typeof ContactInfoAvgAggregate>;
    _sum?: InstanceType<typeof ContactInfoSumAggregate>;
    _min?: InstanceType<typeof ContactInfoMinAggregate>;
    _max?: InstanceType<typeof ContactInfoMaxAggregate>;
}
export declare class ContactInfoAggregateArgs {
    where?: InstanceType<typeof ContactInfoWhereInput>;
    orderBy?: Array<ContactInfoOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ContactInfoCountAggregateInput>;
    _avg?: InstanceType<typeof ContactInfoAvgAggregateInput>;
    _sum?: InstanceType<typeof ContactInfoSumAggregateInput>;
    _min?: InstanceType<typeof ContactInfoMinAggregateInput>;
    _max?: InstanceType<typeof ContactInfoMaxAggregateInput>;
}
export declare class ContactInfoAvgAggregateInput {
    id?: true;
    telp?: true;
    addressId?: true;
}
export declare class ContactInfoAvgAggregate {
    id?: number;
    telp?: number;
    addressId?: number;
}
export declare class ContactInfoAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoCountAggregateInput {
    id?: true;
    telp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    addressId?: true;
    _all?: true;
}
export declare class ContactInfoCountAggregate {
    id: number;
    telp: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    addressId: number;
    _all: number;
}
export declare class ContactInfoCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoCreateManyAddressInputEnvelope {
    data: Array<ContactInfoCreateManyAddressInput>;
    skipDuplicates?: boolean;
}
export declare class ContactInfoCreateManyAddressInput {
    id?: number;
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare class ContactInfoCreateManyInput {
    id?: number;
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId: number;
}
export declare class ContactInfoCreateNestedManyWithoutAddressInput {
    create?: Array<ContactInfoCreateWithoutAddressInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutAddressInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyAddressInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
}
export declare class ContactInfoCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof ContactInfoCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ContactInfoCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
}
export declare class ContactInfoCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ContactInfoCreateWithoutAddressInput>;
}
export declare class ContactInfoCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ContactInfoCreateWithoutParticipantInput>;
}
export declare class ContactInfoCreateWithoutAddressInput {
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutContactInfoInput>;
}
export declare class ContactInfoCreateWithoutParticipantInput {
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutContactInfoInput>;
}
export declare class ContactInfoCreateInput {
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutContactInfoInput>;
    address: InstanceType<typeof AddressCreateNestedOneWithoutContactInfoInput>;
}
export declare class ContactInfoGroupByArgs {
    where?: InstanceType<typeof ContactInfoWhereInput>;
    orderBy?: Array<ContactInfoOrderByWithAggregationInput>;
    by: Array<keyof typeof ContactInfoScalarFieldEnum>;
    having?: InstanceType<typeof ContactInfoScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ContactInfoCountAggregateInput>;
    _avg?: InstanceType<typeof ContactInfoAvgAggregateInput>;
    _sum?: InstanceType<typeof ContactInfoSumAggregateInput>;
    _min?: InstanceType<typeof ContactInfoMinAggregateInput>;
    _max?: InstanceType<typeof ContactInfoMaxAggregateInput>;
}
export declare class ContactInfoGroupBy {
    id: number;
    telp: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    addressId: number;
    _count?: InstanceType<typeof ContactInfoCountAggregate>;
    _avg?: InstanceType<typeof ContactInfoAvgAggregate>;
    _sum?: InstanceType<typeof ContactInfoSumAggregate>;
    _min?: InstanceType<typeof ContactInfoMinAggregate>;
    _max?: InstanceType<typeof ContactInfoMaxAggregate>;
}
export declare class ContactInfoListRelationFilter {
    every?: InstanceType<typeof ContactInfoWhereInput>;
    some?: InstanceType<typeof ContactInfoWhereInput>;
    none?: InstanceType<typeof ContactInfoWhereInput>;
}
export declare class ContactInfoMaxAggregateInput {
    id?: true;
    telp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    addressId?: true;
}
export declare class ContactInfoMaxAggregate {
    id?: number;
    telp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId?: number;
}
export declare class ContactInfoMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoMinAggregateInput {
    id?: true;
    telp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    addressId?: true;
}
export declare class ContactInfoMinAggregate {
    id?: number;
    telp?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId?: number;
}
export declare class ContactInfoMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ContactInfoOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    addressId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ContactInfoCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ContactInfoAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ContactInfoMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ContactInfoMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ContactInfoSumOrderByAggregateInput>;
}
export declare class ContactInfoOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    addressId?: keyof typeof SortOrder;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
}
export declare class ContactInfoRelationFilter {
    is?: InstanceType<typeof ContactInfoWhereInput>;
    isNot?: InstanceType<typeof ContactInfoWhereInput>;
}
export declare class ContactInfoScalarWhereWithAggregatesInput {
    AND?: Array<ContactInfoScalarWhereWithAggregatesInput>;
    OR?: Array<ContactInfoScalarWhereWithAggregatesInput>;
    NOT?: Array<ContactInfoScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    telp?: InstanceType<typeof FloatWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ContactInfoScalarWhereInput {
    AND?: Array<ContactInfoScalarWhereInput>;
    OR?: Array<ContactInfoScalarWhereInput>;
    NOT?: Array<ContactInfoScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    telp?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    addressId?: InstanceType<typeof IntFilter>;
}
export declare class ContactInfoSumAggregateInput {
    id?: true;
    telp?: true;
    addressId?: true;
}
export declare class ContactInfoSumAggregate {
    id?: number;
    telp?: number;
    addressId?: number;
}
export declare class ContactInfoSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoUncheckedCreateNestedManyWithoutAddressInput {
    create?: Array<ContactInfoCreateWithoutAddressInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutAddressInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyAddressInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
}
export declare class ContactInfoUncheckedCreateWithoutAddressInput {
    id?: number;
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutContactInfoInput>;
}
export declare class ContactInfoUncheckedCreateWithoutParticipantInput {
    id?: number;
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId: number;
}
export declare class ContactInfoUncheckedCreateInput {
    id?: number;
    telp: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutContactInfoInput>;
}
export declare class ContactInfoUncheckedUpdateManyWithoutAddressNestedInput {
    create?: Array<ContactInfoCreateWithoutAddressInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutAddressInput>;
    upsert?: Array<ContactInfoUpsertWithWhereUniqueWithoutAddressInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyAddressInputEnvelope>;
    set?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    update?: Array<ContactInfoUpdateWithWhereUniqueWithoutAddressInput>;
    updateMany?: Array<ContactInfoUpdateManyWithWhereWithoutAddressInput>;
    deleteMany?: Array<ContactInfoScalarWhereInput>;
}
export declare class ContactInfoUncheckedUpdateManyWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUpdateManyMutationInput {
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ContactInfoUpdateManyWithWhereWithoutAddressInput {
    where: InstanceType<typeof ContactInfoScalarWhereInput>;
    data: InstanceType<typeof ContactInfoUpdateManyMutationInput>;
}
export declare class ContactInfoUpdateManyWithoutAddressNestedInput {
    create?: Array<ContactInfoCreateWithoutAddressInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutAddressInput>;
    upsert?: Array<ContactInfoUpsertWithWhereUniqueWithoutAddressInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyAddressInputEnvelope>;
    set?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    update?: Array<ContactInfoUpdateWithWhereUniqueWithoutAddressInput>;
    updateMany?: Array<ContactInfoUpdateManyWithWhereWithoutAddressInput>;
    deleteMany?: Array<ContactInfoScalarWhereInput>;
}
export declare class ContactInfoUpdateOneRequiredWithoutParticipantNestedInput {
    create?: InstanceType<typeof ContactInfoCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ContactInfoCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof ContactInfoUpsertWithoutParticipantInput>;
    connect?: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ContactInfoUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class ContactInfoUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof ContactInfoWhereInput>;
    data: InstanceType<typeof ContactInfoUpdateWithoutParticipantInput>;
}
export declare class ContactInfoUpdateWithWhereUniqueWithoutAddressInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ContactInfoUpdateWithoutAddressInput>;
}
export declare class ContactInfoUpdateWithoutAddressInput {
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUpdateWithoutParticipantInput {
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUpdateInput {
    telp?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutContactInfoNestedInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUpsertWithWhereUniqueWithoutAddressInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ContactInfoUpdateWithoutAddressInput>;
    create: InstanceType<typeof ContactInfoCreateWithoutAddressInput>;
}
export declare class ContactInfoUpsertWithoutParticipantInput {
    update: InstanceType<typeof ContactInfoUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ContactInfoCreateWithoutParticipantInput>;
    where?: InstanceType<typeof ContactInfoWhereInput>;
}
export declare class ContactInfoWhereUniqueInput {
    id?: number;
    AND?: Array<ContactInfoWhereInput>;
    OR?: Array<ContactInfoWhereInput>;
    NOT?: Array<ContactInfoWhereInput>;
    telp?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
}
export declare class ContactInfoWhereInput {
    AND?: Array<ContactInfoWhereInput>;
    OR?: Array<ContactInfoWhereInput>;
    NOT?: Array<ContactInfoWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    telp?: InstanceType<typeof FloatFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
}
export declare class ContactInfo {
    id: number;
    telp: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    addressId: number;
    participant?: InstanceType<typeof Participant> | null;
    address?: InstanceType<typeof Address>;
}
export declare class CreateManyContactInfoArgs {
    data: Array<ContactInfoCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneContactInfoArgs {
    data: InstanceType<typeof ContactInfoCreateInput>;
}
export declare class DeleteManyContactInfoArgs {
    where?: InstanceType<typeof ContactInfoWhereInput>;
}
export declare class DeleteOneContactInfoArgs {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
}
export declare class FindFirstContactInfoOrThrowArgs {
    where?: InstanceType<typeof ContactInfoWhereInput>;
    orderBy?: Array<ContactInfoOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ContactInfoScalarFieldEnum>;
}
export declare class FindFirstContactInfoArgs {
    where?: InstanceType<typeof ContactInfoWhereInput>;
    orderBy?: Array<ContactInfoOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ContactInfoScalarFieldEnum>;
}
export declare class FindManyContactInfoArgs {
    where?: InstanceType<typeof ContactInfoWhereInput>;
    orderBy?: Array<ContactInfoOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ContactInfoScalarFieldEnum>;
}
export declare class FindUniqueContactInfoOrThrowArgs {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
}
export declare class FindUniqueContactInfoArgs {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
}
export declare class UpdateManyContactInfoArgs {
    data: InstanceType<typeof ContactInfoUpdateManyMutationInput>;
    where?: InstanceType<typeof ContactInfoWhereInput>;
}
export declare class UpdateOneContactInfoArgs {
    data: InstanceType<typeof ContactInfoUpdateInput>;
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
}
export declare class UpsertOneContactInfoArgs {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ContactInfoCreateInput>;
    update: InstanceType<typeof ContactInfoUpdateInput>;
}
export declare class AggregateDisease {
    _count?: InstanceType<typeof DiseaseCountAggregate>;
    _avg?: InstanceType<typeof DiseaseAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseSumAggregate>;
    _min?: InstanceType<typeof DiseaseMinAggregate>;
    _max?: InstanceType<typeof DiseaseMaxAggregate>;
}
export declare class CreateManyDiseaseArgs {
    data: Array<DiseaseCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDiseaseArgs {
    data: InstanceType<typeof DiseaseCreateInput>;
}
export declare class DeleteManyDiseaseArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class DeleteOneDiseaseArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
}
export declare class DiseaseAggregateArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DiseaseCountAggregateInput>;
    _avg?: InstanceType<typeof DiseaseAvgAggregateInput>;
    _sum?: InstanceType<typeof DiseaseSumAggregateInput>;
    _min?: InstanceType<typeof DiseaseMinAggregateInput>;
    _max?: InstanceType<typeof DiseaseMaxAggregateInput>;
}
export declare class DiseaseAvgAggregateInput {
    id?: true;
}
export declare class DiseaseAvgAggregate {
    id?: number;
}
export declare class DiseaseAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class DiseaseCountAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class DiseaseCountAggregate {
    id: number;
    code: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class DiseaseCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class DiseaseCount {
    claimProgram?: number;
}
export declare class DiseaseCreateManyInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseCreateNestedOneWithoutClaimProgramInput {
    create?: InstanceType<typeof DiseaseCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof DiseaseCreateOrConnectWithoutClaimProgramInput>;
    connect?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
}
export declare class DiseaseCreateOrConnectWithoutClaimProgramInput {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseCreateWithoutClaimProgramInput>;
}
export declare class DiseaseCreateWithoutClaimProgramInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseCreateInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimProgram?: InstanceType<typeof ClaimProgramCreateNestedManyWithoutDiseaseInput>;
}
export declare class DiseaseGroupByArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithAggregationInput>;
    by: Array<keyof typeof DiseaseScalarFieldEnum>;
    having?: InstanceType<typeof DiseaseScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DiseaseCountAggregateInput>;
    _avg?: InstanceType<typeof DiseaseAvgAggregateInput>;
    _sum?: InstanceType<typeof DiseaseSumAggregateInput>;
    _min?: InstanceType<typeof DiseaseMinAggregateInput>;
    _max?: InstanceType<typeof DiseaseMaxAggregateInput>;
}
export declare class DiseaseGroupBy {
    id: number;
    code: string;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof DiseaseCountAggregate>;
    _avg?: InstanceType<typeof DiseaseAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseSumAggregate>;
    _min?: InstanceType<typeof DiseaseMinAggregate>;
    _max?: InstanceType<typeof DiseaseMaxAggregate>;
}
export declare class DiseaseMaxAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class DiseaseMaxAggregate {
    id?: number;
    code?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class DiseaseMinAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class DiseaseMinAggregate {
    id?: number;
    code?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class DiseaseNullableRelationFilter {
    is?: InstanceType<typeof DiseaseWhereInput>;
    isNot?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class DiseaseOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DiseaseCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DiseaseAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DiseaseMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DiseaseMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DiseaseSumOrderByAggregateInput>;
}
export declare class DiseaseOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    claimProgram?: InstanceType<typeof ClaimProgramOrderByRelationAggregateInput>;
}
export declare class DiseaseScalarWhereWithAggregatesInput {
    AND?: Array<DiseaseScalarWhereWithAggregatesInput>;
    OR?: Array<DiseaseScalarWhereWithAggregatesInput>;
    NOT?: Array<DiseaseScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class DiseaseSumAggregateInput {
    id?: true;
}
export declare class DiseaseSumAggregate {
    id?: number;
}
export declare class DiseaseSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class DiseaseUncheckedCreateWithoutClaimProgramInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseUncheckedCreateInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedCreateNestedManyWithoutDiseaseInput>;
}
export declare class DiseaseUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseUncheckedUpdateWithoutClaimProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedUpdateManyWithoutDiseaseNestedInput>;
}
export declare class DiseaseUpdateManyMutationInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseUpdateOneWithoutClaimProgramNestedInput {
    create?: InstanceType<typeof DiseaseCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof DiseaseCreateOrConnectWithoutClaimProgramInput>;
    upsert?: InstanceType<typeof DiseaseUpsertWithoutClaimProgramInput>;
    disconnect?: InstanceType<typeof DiseaseWhereInput>;
    delete?: InstanceType<typeof DiseaseWhereInput>;
    connect?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DiseaseUpdateToOneWithWhereWithoutClaimProgramInput>;
}
export declare class DiseaseUpdateToOneWithWhereWithoutClaimProgramInput {
    where?: InstanceType<typeof DiseaseWhereInput>;
    data: InstanceType<typeof DiseaseUpdateWithoutClaimProgramInput>;
}
export declare class DiseaseUpdateWithoutClaimProgramInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseUpdateInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateManyWithoutDiseaseNestedInput>;
}
export declare class DiseaseUpsertWithoutClaimProgramInput {
    update: InstanceType<typeof DiseaseUpdateWithoutClaimProgramInput>;
    create: InstanceType<typeof DiseaseCreateWithoutClaimProgramInput>;
    where?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class DiseaseWhereUniqueInput {
    id?: number;
    AND?: Array<DiseaseWhereInput>;
    OR?: Array<DiseaseWhereInput>;
    NOT?: Array<DiseaseWhereInput>;
    code?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramListRelationFilter>;
}
export declare class DiseaseWhereInput {
    AND?: Array<DiseaseWhereInput>;
    OR?: Array<DiseaseWhereInput>;
    NOT?: Array<DiseaseWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    code?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramListRelationFilter>;
}
export declare class Disease {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    claimProgram?: Array<ClaimProgram>;
    _count?: InstanceType<typeof DiseaseCount>;
}
export declare class FindFirstDiseaseOrThrowArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseScalarFieldEnum>;
}
export declare class FindFirstDiseaseArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseScalarFieldEnum>;
}
export declare class FindManyDiseaseArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseScalarFieldEnum>;
}
export declare class FindUniqueDiseaseOrThrowArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDiseaseArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDiseaseArgs {
    data: InstanceType<typeof DiseaseUpdateManyMutationInput>;
    where?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class UpdateOneDiseaseArgs {
    data: InstanceType<typeof DiseaseUpdateInput>;
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDiseaseArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseCreateInput>;
    update: InstanceType<typeof DiseaseUpdateInput>;
}
export declare class AggregateDistrict {
    _count?: InstanceType<typeof DistrictCountAggregate>;
    _avg?: InstanceType<typeof DistrictAvgAggregate>;
    _sum?: InstanceType<typeof DistrictSumAggregate>;
    _min?: InstanceType<typeof DistrictMinAggregate>;
    _max?: InstanceType<typeof DistrictMaxAggregate>;
}
export declare class CreateManyDistrictArgs {
    data: Array<DistrictCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDistrictArgs {
    data: InstanceType<typeof DistrictCreateInput>;
}
export declare class DeleteManyDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DeleteOneDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class DistrictAggregateArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DistrictCountAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumAggregateInput>;
    _min?: InstanceType<typeof DistrictMinAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxAggregateInput>;
}
export declare class DistrictAvgAggregateInput {
    id?: true;
    cityId?: true;
}
export declare class DistrictAvgAggregate {
    id?: number;
    cityId?: number;
}
export declare class DistrictAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictCountAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
    _all?: true;
}
export declare class DistrictCountAggregate {
    id: number;
    name: number;
    cityId: number;
    _all: number;
}
export declare class DistrictCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictCount {
    subdistricts?: number;
}
export declare class DistrictCreateManyCityInputEnvelope {
    data: Array<DistrictCreateManyCityInput>;
    skipDuplicates?: boolean;
}
export declare class DistrictCreateManyCityInput {
    id?: number;
    name: string;
}
export declare class DistrictCreateManyInput {
    id?: number;
    name: string;
    cityId: number;
}
export declare class DistrictCreateNestedManyWithoutCityInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
}
export declare class DistrictCreateNestedOneWithoutSubdistrictsInput {
    create?: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
    connectOrCreate?: InstanceType<typeof DistrictCreateOrConnectWithoutSubdistrictsInput>;
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class DistrictCreateOrConnectWithoutCityInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateWithoutCityInput>;
}
export declare class DistrictCreateOrConnectWithoutSubdistrictsInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
}
export declare class DistrictCreateWithoutCityInput {
    name: string;
    subdistricts?: InstanceType<typeof SubdistrictCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictCreateWithoutSubdistrictsInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutDistrictsInput>;
}
export declare class DistrictCreateInput {
    name: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutDistrictsInput>;
    subdistricts?: InstanceType<typeof SubdistrictCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictGroupByArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithAggregationInput>;
    by: Array<keyof typeof DistrictScalarFieldEnum>;
    having?: InstanceType<typeof DistrictScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DistrictCountAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumAggregateInput>;
    _min?: InstanceType<typeof DistrictMinAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxAggregateInput>;
}
export declare class DistrictGroupBy {
    id: number;
    name: string;
    cityId: number;
    _count?: InstanceType<typeof DistrictCountAggregate>;
    _avg?: InstanceType<typeof DistrictAvgAggregate>;
    _sum?: InstanceType<typeof DistrictSumAggregate>;
    _min?: InstanceType<typeof DistrictMinAggregate>;
    _max?: InstanceType<typeof DistrictMaxAggregate>;
}
export declare class DistrictListRelationFilter {
    every?: InstanceType<typeof DistrictWhereInput>;
    some?: InstanceType<typeof DistrictWhereInput>;
    none?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictMaxAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
}
export declare class DistrictMaxAggregate {
    id?: number;
    name?: string;
    cityId?: number;
}
export declare class DistrictMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictMinAggregateInput {
    id?: true;
    name?: true;
    cityId?: true;
}
export declare class DistrictMinAggregate {
    id?: number;
    name?: string;
    cityId?: number;
}
export declare class DistrictMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class DistrictOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DistrictCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DistrictAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DistrictMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DistrictMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DistrictSumOrderByAggregateInput>;
}
export declare class DistrictOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
    subdistricts?: InstanceType<typeof SubdistrictOrderByRelationAggregateInput>;
}
export declare class DistrictRelationFilter {
    is?: InstanceType<typeof DistrictWhereInput>;
    isNot?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictScalarWhereWithAggregatesInput {
    AND?: Array<DistrictScalarWhereWithAggregatesInput>;
    OR?: Array<DistrictScalarWhereWithAggregatesInput>;
    NOT?: Array<DistrictScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class DistrictScalarWhereInput {
    AND?: Array<DistrictScalarWhereInput>;
    OR?: Array<DistrictScalarWhereInput>;
    NOT?: Array<DistrictScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
}
export declare class DistrictSumAggregateInput {
    id?: true;
    cityId?: true;
}
export declare class DistrictSumAggregate {
    id?: number;
    cityId?: number;
}
export declare class DistrictSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class DistrictUncheckedCreateNestedManyWithoutCityInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
}
export declare class DistrictUncheckedCreateWithoutCityInput {
    id?: number;
    name: string;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictUncheckedCreateWithoutSubdistrictsInput {
    id?: number;
    name: string;
    cityId: number;
}
export declare class DistrictUncheckedCreateInput {
    id?: number;
    name: string;
    cityId: number;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedCreateNestedManyWithoutDistrictInput>;
}
export declare class DistrictUncheckedUpdateManyWithoutCityNestedInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    upsert?: Array<DistrictUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    update?: Array<DistrictUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<DistrictUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<DistrictScalarWhereInput>;
}
export declare class DistrictUncheckedUpdateManyWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUncheckedUpdateWithoutSubdistrictsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DistrictUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    subdistricts?: InstanceType<typeof SubdistrictUncheckedUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class DistrictUpdateManyWithWhereWithoutCityInput {
    where: InstanceType<typeof DistrictScalarWhereInput>;
    data: InstanceType<typeof DistrictUpdateManyMutationInput>;
}
export declare class DistrictUpdateManyWithoutCityNestedInput {
    create?: Array<DistrictCreateWithoutCityInput>;
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;
    upsert?: Array<DistrictUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof DistrictCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>>;
    update?: Array<DistrictUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<DistrictUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<DistrictScalarWhereInput>;
}
export declare class DistrictUpdateOneRequiredWithoutSubdistrictsNestedInput {
    create?: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
    connectOrCreate?: InstanceType<typeof DistrictCreateOrConnectWithoutSubdistrictsInput>;
    upsert?: InstanceType<typeof DistrictUpsertWithoutSubdistrictsInput>;
    connect?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DistrictUpdateToOneWithWhereWithoutSubdistrictsInput>;
}
export declare class DistrictUpdateToOneWithWhereWithoutSubdistrictsInput {
    where?: InstanceType<typeof DistrictWhereInput>;
    data: InstanceType<typeof DistrictUpdateWithoutSubdistrictsInput>;
}
export declare class DistrictUpdateWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    data: InstanceType<typeof DistrictUpdateWithoutCityInput>;
}
export declare class DistrictUpdateWithoutCityInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subdistricts?: InstanceType<typeof SubdistrictUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpdateWithoutSubdistrictsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutDistrictsNestedInput>;
}
export declare class DistrictUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutDistrictsNestedInput>;
    subdistricts?: InstanceType<typeof SubdistrictUpdateManyWithoutDistrictNestedInput>;
}
export declare class DistrictUpsertWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    update: InstanceType<typeof DistrictUpdateWithoutCityInput>;
    create: InstanceType<typeof DistrictCreateWithoutCityInput>;
}
export declare class DistrictUpsertWithoutSubdistrictsInput {
    update: InstanceType<typeof DistrictUpdateWithoutSubdistrictsInput>;
    create: InstanceType<typeof DistrictCreateWithoutSubdistrictsInput>;
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class DistrictWhereUniqueInput {
    id?: number;
    AND?: Array<DistrictWhereInput>;
    OR?: Array<DistrictWhereInput>;
    NOT?: Array<DistrictWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    subdistricts?: InstanceType<typeof SubdistrictListRelationFilter>;
}
export declare class DistrictWhereInput {
    AND?: Array<DistrictWhereInput>;
    OR?: Array<DistrictWhereInput>;
    NOT?: Array<DistrictWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    subdistricts?: InstanceType<typeof SubdistrictListRelationFilter>;
}
export declare class District {
    id: number;
    name: string;
    cityId: number;
    city?: InstanceType<typeof City>;
    subdistricts?: Array<Subdistrict>;
    _count?: InstanceType<typeof DistrictCount>;
}
export declare class FindFirstDistrictOrThrowArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindFirstDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindManyDistrictArgs {
    where?: InstanceType<typeof DistrictWhereInput>;
    orderBy?: Array<DistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
export declare class FindUniqueDistrictOrThrowArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDistrictArgs {
    data: InstanceType<typeof DistrictUpdateManyMutationInput>;
    where?: InstanceType<typeof DistrictWhereInput>;
}
export declare class UpdateOneDistrictArgs {
    data: InstanceType<typeof DistrictUpdateInput>;
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDistrictArgs {
    where: Prisma.AtLeast<DistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DistrictCreateInput>;
    update: InstanceType<typeof DistrictUpdateInput>;
}
export declare class AggregateDocument {
    _count?: InstanceType<typeof DocumentCountAggregate>;
    _avg?: InstanceType<typeof DocumentAvgAggregate>;
    _sum?: InstanceType<typeof DocumentSumAggregate>;
    _min?: InstanceType<typeof DocumentMinAggregate>;
    _max?: InstanceType<typeof DocumentMaxAggregate>;
}
export declare class CreateManyDocumentArgs {
    data: Array<DocumentCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDocumentArgs {
    data: InstanceType<typeof DocumentCreateInput>;
}
export declare class DeleteManyDocumentArgs {
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DeleteOneDocumentArgs {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentAggregateArgs {
    where?: InstanceType<typeof DocumentWhereInput>;
    orderBy?: Array<DocumentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DocumentCountAggregateInput>;
    _avg?: InstanceType<typeof DocumentAvgAggregateInput>;
    _sum?: InstanceType<typeof DocumentSumAggregateInput>;
    _min?: InstanceType<typeof DocumentMinAggregateInput>;
    _max?: InstanceType<typeof DocumentMaxAggregateInput>;
}
export declare class DocumentAvgAggregateInput {
    size?: true;
    claimProgramId?: true;
}
export declare class DocumentAvgAggregate {
    size?: number;
    claimProgramId?: number;
}
export declare class DocumentAvgOrderByAggregateInput {
    size?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class DocumentCountAggregateInput {
    id?: true;
    name?: true;
    path?: true;
    size?: true;
    createdAt?: true;
    updatedAt?: true;
    source?: true;
    type?: true;
    claimProgramId?: true;
    _all?: true;
}
export declare class DocumentCountAggregate {
    id: number;
    name: number;
    path: number;
    size: number;
    createdAt: number;
    updatedAt: number;
    source: number;
    type: number;
    claimProgramId: number;
    _all: number;
}
export declare class DocumentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class DocumentCount {
    printedby?: number;
}
export declare class DocumentCreateManyClaimProgrammInputEnvelope {
    data: Array<DocumentCreateManyClaimProgrammInput>;
    skipDuplicates?: boolean;
}
export declare class DocumentCreateManyClaimProgrammInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
}
export declare class DocumentCreateManyInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
}
export declare class DocumentCreateNestedManyWithoutClaimProgrammInput {
    create?: Array<DocumentCreateWithoutClaimProgrammInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProgrammInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProgrammInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
}
export declare class DocumentCreateNestedManyWithoutPrintedbyInput {
    create?: Array<DocumentCreateWithoutPrintedbyInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutPrintedbyInput>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
}
export declare class DocumentCreateNestedOneWithoutBookKeepingOrderOfInput {
    create?: InstanceType<typeof DocumentCreateWithoutBookKeepingOrderOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutBookKeepingOrderOfInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateNestedOneWithoutGuaranteeLetterOfInput {
    create?: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutGuaranteeLetterOfInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateNestedOneWithoutInvoiceProofInput {
    create?: InstanceType<typeof DocumentCreateWithoutInvoiceProofInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutInvoiceProofInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateNestedOneWithoutRejectionLetterOfInput {
    create?: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutRejectionLetterOfInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateNestedOneWithoutTransactionLetterOfInput {
    create?: InstanceType<typeof DocumentCreateWithoutTransactionLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutTransactionLetterOfInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateOrConnectWithoutBookKeepingOrderOfInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutBookKeepingOrderOfInput>;
}
export declare class DocumentCreateOrConnectWithoutClaimProgrammInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutClaimProgrammInput>;
}
export declare class DocumentCreateOrConnectWithoutGuaranteeLetterOfInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
}
export declare class DocumentCreateOrConnectWithoutInvoiceProofInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutInvoiceProofInput>;
}
export declare class DocumentCreateOrConnectWithoutPrintedbyInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutPrintedbyInput>;
}
export declare class DocumentCreateOrConnectWithoutRejectionLetterOfInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
}
export declare class DocumentCreateOrConnectWithoutTransactionLetterOfInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutTransactionLetterOfInput>;
}
export declare class DocumentCreateWithoutBookKeepingOrderOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentCreateWithoutClaimProgrammInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentCreateWithoutGuaranteeLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentCreateWithoutInvoiceProofInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
}
export declare class DocumentCreateWithoutPrintedbyInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentCreateWithoutRejectionLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentCreateWithoutTransactionLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentCreateInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutBookKeepingOrderInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutDocumentsInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentGroupByArgs {
    where?: InstanceType<typeof DocumentWhereInput>;
    orderBy?: Array<DocumentOrderByWithAggregationInput>;
    by: Array<keyof typeof DocumentScalarFieldEnum>;
    having?: InstanceType<typeof DocumentScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DocumentCountAggregateInput>;
    _avg?: InstanceType<typeof DocumentAvgAggregateInput>;
    _sum?: InstanceType<typeof DocumentSumAggregateInput>;
    _min?: InstanceType<typeof DocumentMinAggregateInput>;
    _max?: InstanceType<typeof DocumentMaxAggregateInput>;
}
export declare class DocumentGroupBy {
    id: string;
    name: string;
    path: string;
    size: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    _count?: InstanceType<typeof DocumentCountAggregate>;
    _avg?: InstanceType<typeof DocumentAvgAggregate>;
    _sum?: InstanceType<typeof DocumentSumAggregate>;
    _min?: InstanceType<typeof DocumentMinAggregate>;
    _max?: InstanceType<typeof DocumentMaxAggregate>;
}
export declare class DocumentListRelationFilter {
    every?: InstanceType<typeof DocumentWhereInput>;
    some?: InstanceType<typeof DocumentWhereInput>;
    none?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentMaxAggregateInput {
    id?: true;
    name?: true;
    path?: true;
    size?: true;
    createdAt?: true;
    updatedAt?: true;
    source?: true;
    type?: true;
    claimProgramId?: true;
}
export declare class DocumentMaxAggregate {
    id?: string;
    name?: string;
    path?: string;
    size?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source?: keyof typeof DocumentSource;
    type?: keyof typeof DocumentType;
    claimProgramId?: number;
}
export declare class DocumentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class DocumentMinAggregateInput {
    id?: true;
    name?: true;
    path?: true;
    size?: true;
    createdAt?: true;
    updatedAt?: true;
    source?: true;
    type?: true;
    claimProgramId?: true;
}
export declare class DocumentMinAggregate {
    id?: string;
    name?: string;
    path?: string;
    size?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source?: keyof typeof DocumentSource;
    type?: keyof typeof DocumentType;
    claimProgramId?: number;
}
export declare class DocumentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class DocumentNullableRelationFilter {
    is?: InstanceType<typeof DocumentWhereInput>;
    isNot?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class DocumentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProgramId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof DocumentCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DocumentAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DocumentMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DocumentMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DocumentSumOrderByAggregateInput>;
}
export declare class DocumentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProgramId?: InstanceType<typeof SortOrderInput>;
    printedby?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramOrderByWithRelationInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofOrderByWithRelationInput>;
}
export declare class DocumentRelationFilter {
    is?: InstanceType<typeof DocumentWhereInput>;
    isNot?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentScalarWhereWithAggregatesInput {
    AND?: Array<DocumentScalarWhereWithAggregatesInput>;
    OR?: Array<DocumentScalarWhereWithAggregatesInput>;
    NOT?: Array<DocumentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    size?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    source?: InstanceType<typeof EnumDocumentSourceWithAggregatesFilter>;
    type?: InstanceType<typeof EnumDocumentTypeWithAggregatesFilter>;
    claimProgramId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class DocumentScalarWhereInput {
    AND?: Array<DocumentScalarWhereInput>;
    OR?: Array<DocumentScalarWhereInput>;
    NOT?: Array<DocumentScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    path?: InstanceType<typeof StringFilter>;
    size?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    source?: InstanceType<typeof EnumDocumentSourceFilter>;
    type?: InstanceType<typeof EnumDocumentTypeFilter>;
    claimProgramId?: InstanceType<typeof IntNullableFilter>;
}
export declare class DocumentSumAggregateInput {
    size?: true;
    claimProgramId?: true;
}
export declare class DocumentSumAggregate {
    size?: number;
    claimProgramId?: number;
}
export declare class DocumentSumOrderByAggregateInput {
    size?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class DocumentUncheckedCreateNestedManyWithoutClaimProgrammInput {
    create?: Array<DocumentCreateWithoutClaimProgrammInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProgrammInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProgrammInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
}
export declare class DocumentUncheckedCreateNestedManyWithoutPrintedbyInput {
    create?: Array<DocumentCreateWithoutPrintedbyInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutPrintedbyInput>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
}
export declare class DocumentUncheckedCreateWithoutBookKeepingOrderOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedCreateWithoutClaimProgrammInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedCreateWithoutGuaranteeLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedCreateWithoutInvoiceProofInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
}
export declare class DocumentUncheckedCreateWithoutPrintedbyInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedCreateWithoutRejectionLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedCreateWithoutTransactionLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedCreateInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId?: number;
    printedby?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDocumentPrintsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutTransactionLetterInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutBookKeepingOrderInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput>;
}
export declare class DocumentUncheckedUpdateManyWithoutClaimProgrammNestedInput {
    create?: Array<DocumentCreateWithoutClaimProgrammInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProgrammInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutClaimProgrammInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProgrammInputEnvelope>;
    set?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutClaimProgrammInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutClaimProgrammInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
export declare class DocumentUncheckedUpdateManyWithoutClaimProgrammInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
}
export declare class DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput {
    create?: Array<DocumentCreateWithoutPrintedbyInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutPrintedbyInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutPrintedbyInput>;
    set?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutPrintedbyInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutPrintedbyInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
export declare class DocumentUncheckedUpdateManyWithoutPrintedbyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class DocumentUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class DocumentUncheckedUpdateWithoutBookKeepingOrderOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutClaimProgrammInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutGuaranteeLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutInvoiceProofInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutPrintedbyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutRejectionLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutTransactionLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
}
export declare class DocumentUpdateManyWithWhereWithoutClaimProgrammInput {
    where: InstanceType<typeof DocumentScalarWhereInput>;
    data: InstanceType<typeof DocumentUpdateManyMutationInput>;
}
export declare class DocumentUpdateManyWithWhereWithoutPrintedbyInput {
    where: InstanceType<typeof DocumentScalarWhereInput>;
    data: InstanceType<typeof DocumentUpdateManyMutationInput>;
}
export declare class DocumentUpdateManyWithoutClaimProgrammNestedInput {
    create?: Array<DocumentCreateWithoutClaimProgrammInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProgrammInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutClaimProgrammInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProgrammInputEnvelope>;
    set?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutClaimProgrammInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutClaimProgrammInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
export declare class DocumentUpdateManyWithoutPrintedbyNestedInput {
    create?: Array<DocumentCreateWithoutPrintedbyInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutPrintedbyInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutPrintedbyInput>;
    set?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutPrintedbyInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutPrintedbyInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
export declare class DocumentUpdateOneRequiredWithoutInvoiceProofNestedInput {
    create?: InstanceType<typeof DocumentCreateWithoutInvoiceProofInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutInvoiceProofInput>;
    upsert?: InstanceType<typeof DocumentUpsertWithoutInvoiceProofInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DocumentUpdateToOneWithWhereWithoutInvoiceProofInput>;
}
export declare class DocumentUpdateOneWithoutBookKeepingOrderOfNestedInput {
    create?: InstanceType<typeof DocumentCreateWithoutBookKeepingOrderOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutBookKeepingOrderOfInput>;
    upsert?: InstanceType<typeof DocumentUpsertWithoutBookKeepingOrderOfInput>;
    disconnect?: InstanceType<typeof DocumentWhereInput>;
    delete?: InstanceType<typeof DocumentWhereInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DocumentUpdateToOneWithWhereWithoutBookKeepingOrderOfInput>;
}
export declare class DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput {
    create?: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutGuaranteeLetterOfInput>;
    upsert?: InstanceType<typeof DocumentUpsertWithoutGuaranteeLetterOfInput>;
    disconnect?: InstanceType<typeof DocumentWhereInput>;
    delete?: InstanceType<typeof DocumentWhereInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DocumentUpdateToOneWithWhereWithoutGuaranteeLetterOfInput>;
}
export declare class DocumentUpdateOneWithoutRejectionLetterOfNestedInput {
    create?: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutRejectionLetterOfInput>;
    upsert?: InstanceType<typeof DocumentUpsertWithoutRejectionLetterOfInput>;
    disconnect?: InstanceType<typeof DocumentWhereInput>;
    delete?: InstanceType<typeof DocumentWhereInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DocumentUpdateToOneWithWhereWithoutRejectionLetterOfInput>;
}
export declare class DocumentUpdateOneWithoutTransactionLetterOfNestedInput {
    create?: InstanceType<typeof DocumentCreateWithoutTransactionLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutTransactionLetterOfInput>;
    upsert?: InstanceType<typeof DocumentUpsertWithoutTransactionLetterOfInput>;
    disconnect?: InstanceType<typeof DocumentWhereInput>;
    delete?: InstanceType<typeof DocumentWhereInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DocumentUpdateToOneWithWhereWithoutTransactionLetterOfInput>;
}
export declare class DocumentUpdateToOneWithWhereWithoutBookKeepingOrderOfInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutBookKeepingOrderOfInput>;
}
export declare class DocumentUpdateToOneWithWhereWithoutGuaranteeLetterOfInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutGuaranteeLetterOfInput>;
}
export declare class DocumentUpdateToOneWithWhereWithoutInvoiceProofInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutInvoiceProofInput>;
}
export declare class DocumentUpdateToOneWithWhereWithoutRejectionLetterOfInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutRejectionLetterOfInput>;
}
export declare class DocumentUpdateToOneWithWhereWithoutTransactionLetterOfInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutTransactionLetterOfInput>;
}
export declare class DocumentUpdateWithWhereUniqueWithoutClaimProgrammInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof DocumentUpdateWithoutClaimProgrammInput>;
}
export declare class DocumentUpdateWithWhereUniqueWithoutPrintedbyInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof DocumentUpdateWithoutPrintedbyInput>;
}
export declare class DocumentUpdateWithoutBookKeepingOrderOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateWithoutClaimProgrammInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateWithoutGuaranteeLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateWithoutInvoiceProofInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
}
export declare class DocumentUpdateWithoutPrintedbyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateWithoutRejectionLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateWithoutTransactionLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    printedby?: InstanceType<typeof UserUpdateManyWithoutDocumentPrintsNestedInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutTransactionLetterNestedInput>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutBookKeepingOrderNestedInput>;
    claimProgramm?: InstanceType<typeof ClaimProgramUpdateOneWithoutDocumentsNestedInput>;
    invoiceProof?: InstanceType<typeof InvoiceProofUpdateOneWithoutDocumentProofNestedInput>;
}
export declare class DocumentUpsertWithWhereUniqueWithoutClaimProgrammInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof DocumentUpdateWithoutClaimProgrammInput>;
    create: InstanceType<typeof DocumentCreateWithoutClaimProgrammInput>;
}
export declare class DocumentUpsertWithWhereUniqueWithoutPrintedbyInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof DocumentUpdateWithoutPrintedbyInput>;
    create: InstanceType<typeof DocumentCreateWithoutPrintedbyInput>;
}
export declare class DocumentUpsertWithoutBookKeepingOrderOfInput {
    update: InstanceType<typeof DocumentUpdateWithoutBookKeepingOrderOfInput>;
    create: InstanceType<typeof DocumentCreateWithoutBookKeepingOrderOfInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentUpsertWithoutGuaranteeLetterOfInput {
    update: InstanceType<typeof DocumentUpdateWithoutGuaranteeLetterOfInput>;
    create: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentUpsertWithoutInvoiceProofInput {
    update: InstanceType<typeof DocumentUpdateWithoutInvoiceProofInput>;
    create: InstanceType<typeof DocumentCreateWithoutInvoiceProofInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentUpsertWithoutRejectionLetterOfInput {
    update: InstanceType<typeof DocumentUpdateWithoutRejectionLetterOfInput>;
    create: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentUpsertWithoutTransactionLetterOfInput {
    update: InstanceType<typeof DocumentUpdateWithoutTransactionLetterOfInput>;
    create: InstanceType<typeof DocumentCreateWithoutTransactionLetterOfInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentWhereUniqueInput {
    id?: string;
    AND?: Array<DocumentWhereInput>;
    OR?: Array<DocumentWhereInput>;
    NOT?: Array<DocumentWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    path?: InstanceType<typeof StringFilter>;
    size?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    source?: InstanceType<typeof EnumDocumentSourceFilter>;
    type?: InstanceType<typeof EnumDocumentTypeFilter>;
    claimProgramId?: InstanceType<typeof IntNullableFilter>;
    printedby?: InstanceType<typeof UserListRelationFilter>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    claimProgramm?: InstanceType<typeof ClaimProgramNullableRelationFilter>;
    invoiceProof?: InstanceType<typeof InvoiceProofNullableRelationFilter>;
}
export declare class DocumentWhereInput {
    AND?: Array<DocumentWhereInput>;
    OR?: Array<DocumentWhereInput>;
    NOT?: Array<DocumentWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    path?: InstanceType<typeof StringFilter>;
    size?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    source?: InstanceType<typeof EnumDocumentSourceFilter>;
    type?: InstanceType<typeof EnumDocumentTypeFilter>;
    claimProgramId?: InstanceType<typeof IntNullableFilter>;
    printedby?: InstanceType<typeof UserListRelationFilter>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    transactionLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    claimProgramm?: InstanceType<typeof ClaimProgramNullableRelationFilter>;
    invoiceProof?: InstanceType<typeof InvoiceProofNullableRelationFilter>;
}
export declare class Document {
    id: string;
    name: string;
    path: string;
    size: number;
    createdAt: Date;
    updatedAt: Date;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProgramId: number | null;
    printedby?: Array<User>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatus> | null;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatus> | null;
    transactionLetterOf?: InstanceType<typeof ClaimStatus> | null;
    bookKeepingOrderOf?: InstanceType<typeof ClaimStatus> | null;
    claimProgramm?: InstanceType<typeof ClaimProgram> | null;
    invoiceProof?: InstanceType<typeof InvoiceProof> | null;
    _count?: InstanceType<typeof DocumentCount>;
}
export declare class FindFirstDocumentOrThrowArgs {
    where?: InstanceType<typeof DocumentWhereInput>;
    orderBy?: Array<DocumentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DocumentScalarFieldEnum>;
}
export declare class FindFirstDocumentArgs {
    where?: InstanceType<typeof DocumentWhereInput>;
    orderBy?: Array<DocumentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DocumentScalarFieldEnum>;
}
export declare class FindManyDocumentArgs {
    where?: InstanceType<typeof DocumentWhereInput>;
    orderBy?: Array<DocumentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DocumentScalarFieldEnum>;
}
export declare class FindUniqueDocumentOrThrowArgs {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDocumentArgs {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDocumentArgs {
    data: InstanceType<typeof DocumentUpdateManyMutationInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class UpdateOneDocumentArgs {
    data: InstanceType<typeof DocumentUpdateInput>;
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDocumentArgs {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateInput>;
    update: InstanceType<typeof DocumentUpdateInput>;
}
export declare class AggregateEmployment {
    _count?: InstanceType<typeof EmploymentCountAggregate>;
    _avg?: InstanceType<typeof EmploymentAvgAggregate>;
    _sum?: InstanceType<typeof EmploymentSumAggregate>;
    _min?: InstanceType<typeof EmploymentMinAggregate>;
    _max?: InstanceType<typeof EmploymentMaxAggregate>;
}
export declare class CreateManyEmploymentArgs {
    data: Array<EmploymentCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneEmploymentArgs {
    data: InstanceType<typeof EmploymentCreateInput>;
}
export declare class DeleteManyEmploymentArgs {
    where?: InstanceType<typeof EmploymentWhereInput>;
}
export declare class DeleteOneEmploymentArgs {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
}
export declare class EmploymentAggregateArgs {
    where?: InstanceType<typeof EmploymentWhereInput>;
    orderBy?: Array<EmploymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EmploymentCountAggregateInput>;
    _avg?: InstanceType<typeof EmploymentAvgAggregateInput>;
    _sum?: InstanceType<typeof EmploymentSumAggregateInput>;
    _min?: InstanceType<typeof EmploymentMinAggregateInput>;
    _max?: InstanceType<typeof EmploymentMaxAggregateInput>;
}
export declare class EmploymentAvgAggregateInput {
    id?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
}
export declare class EmploymentAvgAggregate {
    id?: number;
    branchId?: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
}
export declare class EmploymentCountAggregateInput {
    id?: true;
    employmentPosition?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
    _all?: true;
}
export declare class EmploymentCountAggregate {
    id: number;
    employmentPosition: number;
    branchId: number;
    groupId: number;
    regionId: number;
    _all: number;
}
export declare class EmploymentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
}
export declare class EmploymentCreateManyBranchInputEnvelope {
    data: Array<EmploymentCreateManyBranchInput>;
    skipDuplicates?: boolean;
}
export declare class EmploymentCreateManyBranchInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentCreateManyGroupInputEnvelope {
    data: Array<EmploymentCreateManyGroupInput>;
    skipDuplicates?: boolean;
}
export declare class EmploymentCreateManyGroupInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    regionId?: number;
}
export declare class EmploymentCreateManyRegionInputEnvelope {
    data: Array<EmploymentCreateManyRegionInput>;
    skipDuplicates?: boolean;
}
export declare class EmploymentCreateManyRegionInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId?: number;
}
export declare class EmploymentCreateManyInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentCreateNestedManyWithoutBranchInput {
    create?: Array<EmploymentCreateWithoutBranchInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutBranchInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyBranchInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentCreateNestedManyWithoutGroupInput {
    create?: Array<EmploymentCreateWithoutGroupInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutGroupInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentCreateNestedManyWithoutRegionInput {
    create?: Array<EmploymentCreateWithoutRegionInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutRegionInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyRegionInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof EmploymentCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof EmploymentCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
}
export declare class EmploymentCreateOrConnectWithoutBranchInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmploymentCreateWithoutBranchInput>;
}
export declare class EmploymentCreateOrConnectWithoutGroupInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmploymentCreateWithoutGroupInput>;
}
export declare class EmploymentCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmploymentCreateWithoutParticipantInput>;
}
export declare class EmploymentCreateOrConnectWithoutRegionInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmploymentCreateWithoutRegionInput>;
}
export declare class EmploymentCreateWithoutBranchInput {
    employmentPosition: keyof typeof Position;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentInput>;
    group?: InstanceType<typeof GroupCreateNestedOneWithoutEmploymentInput>;
    region?: InstanceType<typeof RegionCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentCreateWithoutGroupInput {
    employmentPosition: keyof typeof Position;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentInput>;
    branch: InstanceType<typeof BranchCreateNestedOneWithoutEmploymentInput>;
    region?: InstanceType<typeof RegionCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentCreateWithoutParticipantInput {
    employmentPosition: keyof typeof Position;
    branch: InstanceType<typeof BranchCreateNestedOneWithoutEmploymentInput>;
    group?: InstanceType<typeof GroupCreateNestedOneWithoutEmploymentInput>;
    region?: InstanceType<typeof RegionCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentCreateWithoutRegionInput {
    employmentPosition: keyof typeof Position;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentInput>;
    branch: InstanceType<typeof BranchCreateNestedOneWithoutEmploymentInput>;
    group?: InstanceType<typeof GroupCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentCreateInput {
    employmentPosition: keyof typeof Position;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentInput>;
    branch: InstanceType<typeof BranchCreateNestedOneWithoutEmploymentInput>;
    group?: InstanceType<typeof GroupCreateNestedOneWithoutEmploymentInput>;
    region?: InstanceType<typeof RegionCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentGroupByArgs {
    where?: InstanceType<typeof EmploymentWhereInput>;
    orderBy?: Array<EmploymentOrderByWithAggregationInput>;
    by: Array<keyof typeof EmploymentScalarFieldEnum>;
    having?: InstanceType<typeof EmploymentScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EmploymentCountAggregateInput>;
    _avg?: InstanceType<typeof EmploymentAvgAggregateInput>;
    _sum?: InstanceType<typeof EmploymentSumAggregateInput>;
    _min?: InstanceType<typeof EmploymentMinAggregateInput>;
    _max?: InstanceType<typeof EmploymentMaxAggregateInput>;
}
export declare class EmploymentGroupBy {
    id: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId?: number;
    regionId?: number;
    _count?: InstanceType<typeof EmploymentCountAggregate>;
    _avg?: InstanceType<typeof EmploymentAvgAggregate>;
    _sum?: InstanceType<typeof EmploymentSumAggregate>;
    _min?: InstanceType<typeof EmploymentMinAggregate>;
    _max?: InstanceType<typeof EmploymentMaxAggregate>;
}
export declare class EmploymentListRelationFilter {
    every?: InstanceType<typeof EmploymentWhereInput>;
    some?: InstanceType<typeof EmploymentWhereInput>;
    none?: InstanceType<typeof EmploymentWhereInput>;
}
export declare class EmploymentMaxAggregateInput {
    id?: true;
    employmentPosition?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
}
export declare class EmploymentMaxAggregate {
    id?: number;
    employmentPosition?: keyof typeof Position;
    branchId?: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
}
export declare class EmploymentMinAggregateInput {
    id?: true;
    employmentPosition?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
}
export declare class EmploymentMinAggregate {
    id?: number;
    employmentPosition?: keyof typeof Position;
    branchId?: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
}
export declare class EmploymentOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class EmploymentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: InstanceType<typeof SortOrderInput>;
    regionId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof EmploymentCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof EmploymentAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof EmploymentMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof EmploymentMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof EmploymentSumOrderByAggregateInput>;
}
export declare class EmploymentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: InstanceType<typeof SortOrderInput>;
    regionId?: InstanceType<typeof SortOrderInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    branch?: InstanceType<typeof BranchOrderByWithRelationInput>;
    group?: InstanceType<typeof GroupOrderByWithRelationInput>;
    region?: InstanceType<typeof RegionOrderByWithRelationInput>;
}
export declare class EmploymentRelationFilter {
    is?: InstanceType<typeof EmploymentWhereInput>;
    isNot?: InstanceType<typeof EmploymentWhereInput>;
}
export declare class EmploymentScalarWhereWithAggregatesInput {
    AND?: Array<EmploymentScalarWhereWithAggregatesInput>;
    OR?: Array<EmploymentScalarWhereWithAggregatesInput>;
    NOT?: Array<EmploymentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    employmentPosition?: InstanceType<typeof EnumPositionWithAggregatesFilter>;
    branchId?: InstanceType<typeof IntWithAggregatesFilter>;
    groupId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    regionId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class EmploymentScalarWhereInput {
    AND?: Array<EmploymentScalarWhereInput>;
    OR?: Array<EmploymentScalarWhereInput>;
    NOT?: Array<EmploymentScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    employmentPosition?: InstanceType<typeof EnumPositionFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    groupId?: InstanceType<typeof IntNullableFilter>;
    regionId?: InstanceType<typeof IntNullableFilter>;
}
export declare class EmploymentSumAggregateInput {
    id?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
}
export declare class EmploymentSumAggregate {
    id?: number;
    branchId?: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
}
export declare class EmploymentUncheckedCreateNestedManyWithoutBranchInput {
    create?: Array<EmploymentCreateWithoutBranchInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutBranchInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyBranchInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentUncheckedCreateNestedManyWithoutGroupInput {
    create?: Array<EmploymentCreateWithoutGroupInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutGroupInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentUncheckedCreateNestedManyWithoutRegionInput {
    create?: Array<EmploymentCreateWithoutRegionInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutRegionInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyRegionInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentUncheckedCreateWithoutBranchInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    groupId?: number;
    regionId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentUncheckedCreateWithoutGroupInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    regionId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentUncheckedCreateWithoutParticipantInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentUncheckedCreateWithoutRegionInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentUncheckedCreateInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId?: number;
    regionId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutBranchNestedInput {
    create?: Array<EmploymentCreateWithoutBranchInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutBranchInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutBranchInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyBranchInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutBranchInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutBranchInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutBranchInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutGroupNestedInput {
    create?: Array<EmploymentCreateWithoutGroupInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutGroupInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutGroupInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutRegionNestedInput {
    create?: Array<EmploymentCreateWithoutRegionInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutRegionInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutRegionInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyRegionInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutRegionInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutRegionInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutRegionInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateWithoutBranchInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUncheckedUpdateWithoutGroupInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateWithoutRegionInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateManyMutationInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
}
export declare class EmploymentUpdateManyWithWhereWithoutBranchInput {
    where: InstanceType<typeof EmploymentScalarWhereInput>;
    data: InstanceType<typeof EmploymentUpdateManyMutationInput>;
}
export declare class EmploymentUpdateManyWithWhereWithoutGroupInput {
    where: InstanceType<typeof EmploymentScalarWhereInput>;
    data: InstanceType<typeof EmploymentUpdateManyMutationInput>;
}
export declare class EmploymentUpdateManyWithWhereWithoutRegionInput {
    where: InstanceType<typeof EmploymentScalarWhereInput>;
    data: InstanceType<typeof EmploymentUpdateManyMutationInput>;
}
export declare class EmploymentUpdateManyWithoutBranchNestedInput {
    create?: Array<EmploymentCreateWithoutBranchInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutBranchInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutBranchInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyBranchInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutBranchInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutBranchInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUpdateManyWithoutGroupNestedInput {
    create?: Array<EmploymentCreateWithoutGroupInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutGroupInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUpdateManyWithoutRegionNestedInput {
    create?: Array<EmploymentCreateWithoutRegionInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutRegionInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutRegionInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyRegionInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutRegionInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutRegionInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUpdateOneRequiredWithoutParticipantNestedInput {
    create?: InstanceType<typeof EmploymentCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof EmploymentCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof EmploymentUpsertWithoutParticipantInput>;
    connect?: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof EmploymentUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class EmploymentUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof EmploymentWhereInput>;
    data: InstanceType<typeof EmploymentUpdateWithoutParticipantInput>;
}
export declare class EmploymentUpdateWithWhereUniqueWithoutBranchInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutBranchInput>;
}
export declare class EmploymentUpdateWithWhereUniqueWithoutGroupInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutGroupInput>;
}
export declare class EmploymentUpdateWithWhereUniqueWithoutRegionInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutRegionInput>;
}
export declare class EmploymentUpdateWithoutBranchInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutEmploymentNestedInput>;
    group?: InstanceType<typeof GroupUpdateOneWithoutEmploymentNestedInput>;
    region?: InstanceType<typeof RegionUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateWithoutGroupInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutEmploymentNestedInput>;
    branch?: InstanceType<typeof BranchUpdateOneRequiredWithoutEmploymentNestedInput>;
    region?: InstanceType<typeof RegionUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateWithoutParticipantInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branch?: InstanceType<typeof BranchUpdateOneRequiredWithoutEmploymentNestedInput>;
    group?: InstanceType<typeof GroupUpdateOneWithoutEmploymentNestedInput>;
    region?: InstanceType<typeof RegionUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateWithoutRegionInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutEmploymentNestedInput>;
    branch?: InstanceType<typeof BranchUpdateOneRequiredWithoutEmploymentNestedInput>;
    group?: InstanceType<typeof GroupUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutEmploymentNestedInput>;
    branch?: InstanceType<typeof BranchUpdateOneRequiredWithoutEmploymentNestedInput>;
    group?: InstanceType<typeof GroupUpdateOneWithoutEmploymentNestedInput>;
    region?: InstanceType<typeof RegionUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpsertWithWhereUniqueWithoutBranchInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EmploymentUpdateWithoutBranchInput>;
    create: InstanceType<typeof EmploymentCreateWithoutBranchInput>;
}
export declare class EmploymentUpsertWithWhereUniqueWithoutGroupInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EmploymentUpdateWithoutGroupInput>;
    create: InstanceType<typeof EmploymentCreateWithoutGroupInput>;
}
export declare class EmploymentUpsertWithWhereUniqueWithoutRegionInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EmploymentUpdateWithoutRegionInput>;
    create: InstanceType<typeof EmploymentCreateWithoutRegionInput>;
}
export declare class EmploymentUpsertWithoutParticipantInput {
    update: InstanceType<typeof EmploymentUpdateWithoutParticipantInput>;
    create: InstanceType<typeof EmploymentCreateWithoutParticipantInput>;
    where?: InstanceType<typeof EmploymentWhereInput>;
}
export declare class EmploymentWhereUniqueInput {
    id?: number;
    AND?: Array<EmploymentWhereInput>;
    OR?: Array<EmploymentWhereInput>;
    NOT?: Array<EmploymentWhereInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    groupId?: InstanceType<typeof IntNullableFilter>;
    regionId?: InstanceType<typeof IntNullableFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    branch?: InstanceType<typeof BranchRelationFilter>;
    group?: InstanceType<typeof GroupNullableRelationFilter>;
    region?: InstanceType<typeof RegionNullableRelationFilter>;
}
export declare class EmploymentWhereInput {
    AND?: Array<EmploymentWhereInput>;
    OR?: Array<EmploymentWhereInput>;
    NOT?: Array<EmploymentWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    employmentPosition?: InstanceType<typeof EnumPositionFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    groupId?: InstanceType<typeof IntNullableFilter>;
    regionId?: InstanceType<typeof IntNullableFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    branch?: InstanceType<typeof BranchRelationFilter>;
    group?: InstanceType<typeof GroupNullableRelationFilter>;
    region?: InstanceType<typeof RegionNullableRelationFilter>;
}
export declare class Employment {
    id: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId: number | null;
    regionId: number | null;
    participant?: InstanceType<typeof Participant> | null;
    branch?: InstanceType<typeof Branch>;
    group?: InstanceType<typeof Group> | null;
    region?: InstanceType<typeof Region> | null;
}
export declare class FindFirstEmploymentOrThrowArgs {
    where?: InstanceType<typeof EmploymentWhereInput>;
    orderBy?: Array<EmploymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmploymentScalarFieldEnum>;
}
export declare class FindFirstEmploymentArgs {
    where?: InstanceType<typeof EmploymentWhereInput>;
    orderBy?: Array<EmploymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmploymentScalarFieldEnum>;
}
export declare class FindManyEmploymentArgs {
    where?: InstanceType<typeof EmploymentWhereInput>;
    orderBy?: Array<EmploymentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmploymentScalarFieldEnum>;
}
export declare class FindUniqueEmploymentOrThrowArgs {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
}
export declare class FindUniqueEmploymentArgs {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
}
export declare class UpdateManyEmploymentArgs {
    data: InstanceType<typeof EmploymentUpdateManyMutationInput>;
    where?: InstanceType<typeof EmploymentWhereInput>;
}
export declare class UpdateOneEmploymentArgs {
    data: InstanceType<typeof EmploymentUpdateInput>;
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
}
export declare class UpsertOneEmploymentArgs {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmploymentCreateInput>;
    update: InstanceType<typeof EmploymentUpdateInput>;
}
export declare class AggregateGroup {
    _count?: InstanceType<typeof GroupCountAggregate>;
    _avg?: InstanceType<typeof GroupAvgAggregate>;
    _sum?: InstanceType<typeof GroupSumAggregate>;
    _min?: InstanceType<typeof GroupMinAggregate>;
    _max?: InstanceType<typeof GroupMaxAggregate>;
}
export declare class CreateManyGroupArgs {
    data: Array<GroupCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneGroupArgs {
    data: InstanceType<typeof GroupCreateInput>;
}
export declare class DeleteManyGroupArgs {
    where?: InstanceType<typeof GroupWhereInput>;
}
export declare class DeleteOneGroupArgs {
    where: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
}
export declare class FindFirstGroupOrThrowArgs {
    where?: InstanceType<typeof GroupWhereInput>;
    orderBy?: Array<GroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GroupScalarFieldEnum>;
}
export declare class FindFirstGroupArgs {
    where?: InstanceType<typeof GroupWhereInput>;
    orderBy?: Array<GroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GroupScalarFieldEnum>;
}
export declare class FindManyGroupArgs {
    where?: InstanceType<typeof GroupWhereInput>;
    orderBy?: Array<GroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GroupScalarFieldEnum>;
}
export declare class FindUniqueGroupOrThrowArgs {
    where: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
}
export declare class FindUniqueGroupArgs {
    where: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
}
export declare class GroupAggregateArgs {
    where?: InstanceType<typeof GroupWhereInput>;
    orderBy?: Array<GroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GroupCountAggregateInput>;
    _avg?: InstanceType<typeof GroupAvgAggregateInput>;
    _sum?: InstanceType<typeof GroupSumAggregateInput>;
    _min?: InstanceType<typeof GroupMinAggregateInput>;
    _max?: InstanceType<typeof GroupMaxAggregateInput>;
}
export declare class GroupAvgAggregateInput {
    id?: true;
}
export declare class GroupAvgAggregate {
    id?: number;
}
export declare class GroupAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class GroupCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class GroupCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class GroupCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class GroupCount {
    employment?: number;
}
export declare class GroupCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class GroupCreateNestedOneWithoutEmploymentInput {
    create?: InstanceType<typeof GroupCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof GroupCreateOrConnectWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
}
export declare class GroupCreateOrConnectWithoutEmploymentInput {
    where: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GroupCreateWithoutEmploymentInput>;
}
export declare class GroupCreateWithoutEmploymentInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class GroupCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentCreateNestedManyWithoutGroupInput>;
}
export declare class GroupGroupByArgs {
    where?: InstanceType<typeof GroupWhereInput>;
    orderBy?: Array<GroupOrderByWithAggregationInput>;
    by: Array<keyof typeof GroupScalarFieldEnum>;
    having?: InstanceType<typeof GroupScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GroupCountAggregateInput>;
    _avg?: InstanceType<typeof GroupAvgAggregateInput>;
    _sum?: InstanceType<typeof GroupSumAggregateInput>;
    _min?: InstanceType<typeof GroupMinAggregateInput>;
    _max?: InstanceType<typeof GroupMaxAggregateInput>;
}
export declare class GroupGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof GroupCountAggregate>;
    _avg?: InstanceType<typeof GroupAvgAggregate>;
    _sum?: InstanceType<typeof GroupSumAggregate>;
    _min?: InstanceType<typeof GroupMinAggregate>;
    _max?: InstanceType<typeof GroupMaxAggregate>;
}
export declare class GroupMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class GroupMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class GroupMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class GroupMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class GroupMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class GroupMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class GroupNullableRelationFilter {
    is?: InstanceType<typeof GroupWhereInput>;
    isNot?: InstanceType<typeof GroupWhereInput>;
}
export declare class GroupOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof GroupCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof GroupAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof GroupMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof GroupMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof GroupSumOrderByAggregateInput>;
}
export declare class GroupOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    employment?: InstanceType<typeof EmploymentOrderByRelationAggregateInput>;
}
export declare class GroupScalarWhereWithAggregatesInput {
    AND?: Array<GroupScalarWhereWithAggregatesInput>;
    OR?: Array<GroupScalarWhereWithAggregatesInput>;
    NOT?: Array<GroupScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class GroupSumAggregateInput {
    id?: true;
}
export declare class GroupSumAggregate {
    id?: number;
}
export declare class GroupSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class GroupUncheckedCreateWithoutEmploymentInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class GroupUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutGroupInput>;
}
export declare class GroupUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class GroupUncheckedUpdateWithoutEmploymentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class GroupUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutGroupNestedInput>;
}
export declare class GroupUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class GroupUpdateOneWithoutEmploymentNestedInput {
    create?: InstanceType<typeof GroupCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof GroupCreateOrConnectWithoutEmploymentInput>;
    upsert?: InstanceType<typeof GroupUpsertWithoutEmploymentInput>;
    disconnect?: InstanceType<typeof GroupWhereInput>;
    delete?: InstanceType<typeof GroupWhereInput>;
    connect?: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GroupUpdateToOneWithWhereWithoutEmploymentInput>;
}
export declare class GroupUpdateToOneWithWhereWithoutEmploymentInput {
    where?: InstanceType<typeof GroupWhereInput>;
    data: InstanceType<typeof GroupUpdateWithoutEmploymentInput>;
}
export declare class GroupUpdateWithoutEmploymentInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class GroupUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUpdateManyWithoutGroupNestedInput>;
}
export declare class GroupUpsertWithoutEmploymentInput {
    update: InstanceType<typeof GroupUpdateWithoutEmploymentInput>;
    create: InstanceType<typeof GroupCreateWithoutEmploymentInput>;
    where?: InstanceType<typeof GroupWhereInput>;
}
export declare class GroupWhereUniqueInput {
    id?: number;
    AND?: Array<GroupWhereInput>;
    OR?: Array<GroupWhereInput>;
    NOT?: Array<GroupWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    employment?: InstanceType<typeof EmploymentListRelationFilter>;
}
export declare class GroupWhereInput {
    AND?: Array<GroupWhereInput>;
    OR?: Array<GroupWhereInput>;
    NOT?: Array<GroupWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    employment?: InstanceType<typeof EmploymentListRelationFilter>;
}
export declare class Group {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    employment?: Array<Employment>;
    _count?: InstanceType<typeof GroupCount>;
}
export declare class UpdateManyGroupArgs {
    data: InstanceType<typeof GroupUpdateManyMutationInput>;
    where?: InstanceType<typeof GroupWhereInput>;
}
export declare class UpdateOneGroupArgs {
    data: InstanceType<typeof GroupUpdateInput>;
    where: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
}
export declare class UpsertOneGroupArgs {
    where: Prisma.AtLeast<GroupWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GroupCreateInput>;
    update: InstanceType<typeof GroupUpdateInput>;
}
export declare class AggregateInvoiceProof {
    _count?: InstanceType<typeof InvoiceProofCountAggregate>;
    _avg?: InstanceType<typeof InvoiceProofAvgAggregate>;
    _sum?: InstanceType<typeof InvoiceProofSumAggregate>;
    _min?: InstanceType<typeof InvoiceProofMinAggregate>;
    _max?: InstanceType<typeof InvoiceProofMaxAggregate>;
}
export declare class CreateManyInvoiceProofArgs {
    data: Array<InvoiceProofCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneInvoiceProofArgs {
    data: InstanceType<typeof InvoiceProofCreateInput>;
}
export declare class DeleteManyInvoiceProofArgs {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
}
export declare class DeleteOneInvoiceProofArgs {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
}
export declare class FindFirstInvoiceProofOrThrowArgs {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
    orderBy?: Array<InvoiceProofOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvoiceProofScalarFieldEnum>;
}
export declare class FindFirstInvoiceProofArgs {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
    orderBy?: Array<InvoiceProofOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvoiceProofScalarFieldEnum>;
}
export declare class FindManyInvoiceProofArgs {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
    orderBy?: Array<InvoiceProofOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvoiceProofScalarFieldEnum>;
}
export declare class FindUniqueInvoiceProofOrThrowArgs {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
}
export declare class FindUniqueInvoiceProofArgs {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
}
export declare class InvoiceProofAggregateArgs {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
    orderBy?: Array<InvoiceProofOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InvoiceProofCountAggregateInput>;
    _avg?: InstanceType<typeof InvoiceProofAvgAggregateInput>;
    _sum?: InstanceType<typeof InvoiceProofSumAggregateInput>;
    _min?: InstanceType<typeof InvoiceProofMinAggregateInput>;
    _max?: InstanceType<typeof InvoiceProofMaxAggregateInput>;
}
export declare class InvoiceProofAvgAggregateInput {
    id?: true;
    amount?: true;
    claimProgramId?: true;
}
export declare class InvoiceProofAvgAggregate {
    id?: number;
    amount?: number;
    claimProgramId?: number;
}
export declare class InvoiceProofAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class InvoiceProofCountAggregateInput {
    id?: true;
    issuedDate?: true;
    amount?: true;
    documentProofId?: true;
    claimProgramId?: true;
    _all?: true;
}
export declare class InvoiceProofCountAggregate {
    id: number;
    issuedDate: number;
    amount: number;
    documentProofId: number;
    claimProgramId: number;
    _all: number;
}
export declare class InvoiceProofCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    issuedDate?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    documentProofId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class InvoiceProofCreateManyClaimProgramInputEnvelope {
    data: Array<InvoiceProofCreateManyClaimProgramInput>;
    skipDuplicates?: boolean;
}
export declare class InvoiceProofCreateManyClaimProgramInput {
    id?: number;
    issuedDate: Date | string;
    amount: number;
    documentProofId: string;
}
export declare class InvoiceProofCreateManyInput {
    id?: number;
    issuedDate: Date | string;
    amount: number;
    documentProofId: string;
    claimProgramId?: number;
}
export declare class InvoiceProofCreateNestedManyWithoutClaimProgramInput {
    create?: Array<InvoiceProofCreateWithoutClaimProgramInput>;
    connectOrCreate?: Array<InvoiceProofCreateOrConnectWithoutClaimProgramInput>;
    createMany?: InstanceType<typeof InvoiceProofCreateManyClaimProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
}
export declare class InvoiceProofCreateNestedOneWithoutDocumentProofInput {
    create?: InstanceType<typeof InvoiceProofCreateWithoutDocumentProofInput>;
    connectOrCreate?: InstanceType<typeof InvoiceProofCreateOrConnectWithoutDocumentProofInput>;
    connect?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
}
export declare class InvoiceProofCreateOrConnectWithoutClaimProgramInput {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    create: InstanceType<typeof InvoiceProofCreateWithoutClaimProgramInput>;
}
export declare class InvoiceProofCreateOrConnectWithoutDocumentProofInput {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    create: InstanceType<typeof InvoiceProofCreateWithoutDocumentProofInput>;
}
export declare class InvoiceProofCreateWithoutClaimProgramInput {
    issuedDate: Date | string;
    amount: number;
    documentProof: InstanceType<typeof DocumentCreateNestedOneWithoutInvoiceProofInput>;
}
export declare class InvoiceProofCreateWithoutDocumentProofInput {
    issuedDate: Date | string;
    amount: number;
    claimProgram?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutInvoiceProofsInput>;
}
export declare class InvoiceProofCreateInput {
    issuedDate: Date | string;
    amount: number;
    documentProof: InstanceType<typeof DocumentCreateNestedOneWithoutInvoiceProofInput>;
    claimProgram?: InstanceType<typeof ClaimProgramCreateNestedOneWithoutInvoiceProofsInput>;
}
export declare class InvoiceProofGroupByArgs {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
    orderBy?: Array<InvoiceProofOrderByWithAggregationInput>;
    by: Array<keyof typeof InvoiceProofScalarFieldEnum>;
    having?: InstanceType<typeof InvoiceProofScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InvoiceProofCountAggregateInput>;
    _avg?: InstanceType<typeof InvoiceProofAvgAggregateInput>;
    _sum?: InstanceType<typeof InvoiceProofSumAggregateInput>;
    _min?: InstanceType<typeof InvoiceProofMinAggregateInput>;
    _max?: InstanceType<typeof InvoiceProofMaxAggregateInput>;
}
export declare class InvoiceProofGroupBy {
    id: number;
    issuedDate: Date | string;
    amount: number;
    documentProofId: string;
    claimProgramId?: number;
    _count?: InstanceType<typeof InvoiceProofCountAggregate>;
    _avg?: InstanceType<typeof InvoiceProofAvgAggregate>;
    _sum?: InstanceType<typeof InvoiceProofSumAggregate>;
    _min?: InstanceType<typeof InvoiceProofMinAggregate>;
    _max?: InstanceType<typeof InvoiceProofMaxAggregate>;
}
export declare class InvoiceProofListRelationFilter {
    every?: InstanceType<typeof InvoiceProofWhereInput>;
    some?: InstanceType<typeof InvoiceProofWhereInput>;
    none?: InstanceType<typeof InvoiceProofWhereInput>;
}
export declare class InvoiceProofMaxAggregateInput {
    id?: true;
    issuedDate?: true;
    amount?: true;
    documentProofId?: true;
    claimProgramId?: true;
}
export declare class InvoiceProofMaxAggregate {
    id?: number;
    issuedDate?: Date | string;
    amount?: number;
    documentProofId?: string;
    claimProgramId?: number;
}
export declare class InvoiceProofMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    issuedDate?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    documentProofId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class InvoiceProofMinAggregateInput {
    id?: true;
    issuedDate?: true;
    amount?: true;
    documentProofId?: true;
    claimProgramId?: true;
}
export declare class InvoiceProofMinAggregate {
    id?: number;
    issuedDate?: Date | string;
    amount?: number;
    documentProofId?: string;
    claimProgramId?: number;
}
export declare class InvoiceProofMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    issuedDate?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    documentProofId?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class InvoiceProofNullableRelationFilter {
    is?: InstanceType<typeof InvoiceProofWhereInput>;
    isNot?: InstanceType<typeof InvoiceProofWhereInput>;
}
export declare class InvoiceProofOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class InvoiceProofOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    issuedDate?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    documentProofId?: keyof typeof SortOrder;
    claimProgramId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof InvoiceProofCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof InvoiceProofAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof InvoiceProofMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof InvoiceProofMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof InvoiceProofSumOrderByAggregateInput>;
}
export declare class InvoiceProofOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    issuedDate?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    documentProofId?: keyof typeof SortOrder;
    claimProgramId?: InstanceType<typeof SortOrderInput>;
    documentProof?: InstanceType<typeof DocumentOrderByWithRelationInput>;
    claimProgram?: InstanceType<typeof ClaimProgramOrderByWithRelationInput>;
}
export declare class InvoiceProofScalarWhereWithAggregatesInput {
    AND?: Array<InvoiceProofScalarWhereWithAggregatesInput>;
    OR?: Array<InvoiceProofScalarWhereWithAggregatesInput>;
    NOT?: Array<InvoiceProofScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    issuedDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    amount?: InstanceType<typeof IntWithAggregatesFilter>;
    documentProofId?: InstanceType<typeof StringWithAggregatesFilter>;
    claimProgramId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class InvoiceProofScalarWhereInput {
    AND?: Array<InvoiceProofScalarWhereInput>;
    OR?: Array<InvoiceProofScalarWhereInput>;
    NOT?: Array<InvoiceProofScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    issuedDate?: InstanceType<typeof DateTimeFilter>;
    amount?: InstanceType<typeof IntFilter>;
    documentProofId?: InstanceType<typeof StringFilter>;
    claimProgramId?: InstanceType<typeof IntNullableFilter>;
}
export declare class InvoiceProofSumAggregateInput {
    id?: true;
    amount?: true;
    claimProgramId?: true;
}
export declare class InvoiceProofSumAggregate {
    id?: number;
    amount?: number;
    claimProgramId?: number;
}
export declare class InvoiceProofSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    claimProgramId?: keyof typeof SortOrder;
}
export declare class InvoiceProofUncheckedCreateNestedManyWithoutClaimProgramInput {
    create?: Array<InvoiceProofCreateWithoutClaimProgramInput>;
    connectOrCreate?: Array<InvoiceProofCreateOrConnectWithoutClaimProgramInput>;
    createMany?: InstanceType<typeof InvoiceProofCreateManyClaimProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
}
export declare class InvoiceProofUncheckedCreateNestedOneWithoutDocumentProofInput {
    create?: InstanceType<typeof InvoiceProofCreateWithoutDocumentProofInput>;
    connectOrCreate?: InstanceType<typeof InvoiceProofCreateOrConnectWithoutDocumentProofInput>;
    connect?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
}
export declare class InvoiceProofUncheckedCreateWithoutClaimProgramInput {
    id?: number;
    issuedDate: Date | string;
    amount: number;
    documentProofId: string;
}
export declare class InvoiceProofUncheckedCreateWithoutDocumentProofInput {
    id?: number;
    issuedDate: Date | string;
    amount: number;
    claimProgramId?: number;
}
export declare class InvoiceProofUncheckedCreateInput {
    id?: number;
    issuedDate: Date | string;
    amount: number;
    documentProofId: string;
    claimProgramId?: number;
}
export declare class InvoiceProofUncheckedUpdateManyWithoutClaimProgramNestedInput {
    create?: Array<InvoiceProofCreateWithoutClaimProgramInput>;
    connectOrCreate?: Array<InvoiceProofCreateOrConnectWithoutClaimProgramInput>;
    upsert?: Array<InvoiceProofUpsertWithWhereUniqueWithoutClaimProgramInput>;
    createMany?: InstanceType<typeof InvoiceProofCreateManyClaimProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    disconnect?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    delete?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    connect?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    update?: Array<InvoiceProofUpdateWithWhereUniqueWithoutClaimProgramInput>;
    updateMany?: Array<InvoiceProofUpdateManyWithWhereWithoutClaimProgramInput>;
    deleteMany?: Array<InvoiceProofScalarWhereInput>;
}
export declare class InvoiceProofUncheckedUpdateManyWithoutClaimProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documentProofId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class InvoiceProofUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documentProofId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class InvoiceProofUncheckedUpdateOneWithoutDocumentProofNestedInput {
    create?: InstanceType<typeof InvoiceProofCreateWithoutDocumentProofInput>;
    connectOrCreate?: InstanceType<typeof InvoiceProofCreateOrConnectWithoutDocumentProofInput>;
    upsert?: InstanceType<typeof InvoiceProofUpsertWithoutDocumentProofInput>;
    disconnect?: InstanceType<typeof InvoiceProofWhereInput>;
    delete?: InstanceType<typeof InvoiceProofWhereInput>;
    connect?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    update?: InstanceType<typeof InvoiceProofUpdateToOneWithWhereWithoutDocumentProofInput>;
}
export declare class InvoiceProofUncheckedUpdateWithoutClaimProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documentProofId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class InvoiceProofUncheckedUpdateWithoutDocumentProofInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class InvoiceProofUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documentProofId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimProgramId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class InvoiceProofUpdateManyMutationInput {
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class InvoiceProofUpdateManyWithWhereWithoutClaimProgramInput {
    where: InstanceType<typeof InvoiceProofScalarWhereInput>;
    data: InstanceType<typeof InvoiceProofUpdateManyMutationInput>;
}
export declare class InvoiceProofUpdateManyWithoutClaimProgramNestedInput {
    create?: Array<InvoiceProofCreateWithoutClaimProgramInput>;
    connectOrCreate?: Array<InvoiceProofCreateOrConnectWithoutClaimProgramInput>;
    upsert?: Array<InvoiceProofUpsertWithWhereUniqueWithoutClaimProgramInput>;
    createMany?: InstanceType<typeof InvoiceProofCreateManyClaimProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    disconnect?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    delete?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    connect?: Array<Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>>;
    update?: Array<InvoiceProofUpdateWithWhereUniqueWithoutClaimProgramInput>;
    updateMany?: Array<InvoiceProofUpdateManyWithWhereWithoutClaimProgramInput>;
    deleteMany?: Array<InvoiceProofScalarWhereInput>;
}
export declare class InvoiceProofUpdateOneWithoutDocumentProofNestedInput {
    create?: InstanceType<typeof InvoiceProofCreateWithoutDocumentProofInput>;
    connectOrCreate?: InstanceType<typeof InvoiceProofCreateOrConnectWithoutDocumentProofInput>;
    upsert?: InstanceType<typeof InvoiceProofUpsertWithoutDocumentProofInput>;
    disconnect?: InstanceType<typeof InvoiceProofWhereInput>;
    delete?: InstanceType<typeof InvoiceProofWhereInput>;
    connect?: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    update?: InstanceType<typeof InvoiceProofUpdateToOneWithWhereWithoutDocumentProofInput>;
}
export declare class InvoiceProofUpdateToOneWithWhereWithoutDocumentProofInput {
    where?: InstanceType<typeof InvoiceProofWhereInput>;
    data: InstanceType<typeof InvoiceProofUpdateWithoutDocumentProofInput>;
}
export declare class InvoiceProofUpdateWithWhereUniqueWithoutClaimProgramInput {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    data: InstanceType<typeof InvoiceProofUpdateWithoutClaimProgramInput>;
}
export declare class InvoiceProofUpdateWithoutClaimProgramInput {
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documentProof?: InstanceType<typeof DocumentUpdateOneRequiredWithoutInvoiceProofNestedInput>;
}
export declare class InvoiceProofUpdateWithoutDocumentProofInput {
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneWithoutInvoiceProofsNestedInput>;
}
export declare class InvoiceProofUpdateInput {
    issuedDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    documentProof?: InstanceType<typeof DocumentUpdateOneRequiredWithoutInvoiceProofNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateOneWithoutInvoiceProofsNestedInput>;
}
export declare class InvoiceProofUpsertWithWhereUniqueWithoutClaimProgramInput {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    update: InstanceType<typeof InvoiceProofUpdateWithoutClaimProgramInput>;
    create: InstanceType<typeof InvoiceProofCreateWithoutClaimProgramInput>;
}
export declare class InvoiceProofUpsertWithoutDocumentProofInput {
    update: InstanceType<typeof InvoiceProofUpdateWithoutDocumentProofInput>;
    create: InstanceType<typeof InvoiceProofCreateWithoutDocumentProofInput>;
    where?: InstanceType<typeof InvoiceProofWhereInput>;
}
export declare class InvoiceProofWhereUniqueInput {
    id?: number;
    documentProofId?: string;
    AND?: Array<InvoiceProofWhereInput>;
    OR?: Array<InvoiceProofWhereInput>;
    NOT?: Array<InvoiceProofWhereInput>;
    issuedDate?: InstanceType<typeof DateTimeFilter>;
    amount?: InstanceType<typeof IntFilter>;
    claimProgramId?: InstanceType<typeof IntNullableFilter>;
    documentProof?: InstanceType<typeof DocumentRelationFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramNullableRelationFilter>;
}
export declare class InvoiceProofWhereInput {
    AND?: Array<InvoiceProofWhereInput>;
    OR?: Array<InvoiceProofWhereInput>;
    NOT?: Array<InvoiceProofWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    issuedDate?: InstanceType<typeof DateTimeFilter>;
    amount?: InstanceType<typeof IntFilter>;
    documentProofId?: InstanceType<typeof StringFilter>;
    claimProgramId?: InstanceType<typeof IntNullableFilter>;
    documentProof?: InstanceType<typeof DocumentRelationFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramNullableRelationFilter>;
}
export declare class InvoiceProof {
    id: number;
    issuedDate: Date;
    amount: number;
    documentProofId: string;
    claimProgramId: number | null;
    documentProof?: InstanceType<typeof Document>;
    claimProgram?: InstanceType<typeof ClaimProgram> | null;
}
export declare class UpdateManyInvoiceProofArgs {
    data: InstanceType<typeof InvoiceProofUpdateManyMutationInput>;
    where?: InstanceType<typeof InvoiceProofWhereInput>;
}
export declare class UpdateOneInvoiceProofArgs {
    data: InstanceType<typeof InvoiceProofUpdateInput>;
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
}
export declare class UpsertOneInvoiceProofArgs {
    where: Prisma.AtLeast<InvoiceProofWhereUniqueInput, 'id' | 'documentProofId'>;
    create: InstanceType<typeof InvoiceProofCreateInput>;
    update: InstanceType<typeof InvoiceProofUpdateInput>;
}
export declare class AggregateNotification {
    _count?: InstanceType<typeof NotificationCountAggregate>;
    _avg?: InstanceType<typeof NotificationAvgAggregate>;
    _sum?: InstanceType<typeof NotificationSumAggregate>;
    _min?: InstanceType<typeof NotificationMinAggregate>;
    _max?: InstanceType<typeof NotificationMaxAggregate>;
}
export declare class CreateManyNotificationArgs {
    data: Array<NotificationCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneNotificationArgs {
    data: InstanceType<typeof NotificationCreateInput>;
}
export declare class DeleteManyNotificationArgs {
    where?: InstanceType<typeof NotificationWhereInput>;
}
export declare class DeleteOneNotificationArgs {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
export declare class FindFirstNotificationOrThrowArgs {
    where?: InstanceType<typeof NotificationWhereInput>;
    orderBy?: Array<NotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof NotificationScalarFieldEnum>;
}
export declare class FindFirstNotificationArgs {
    where?: InstanceType<typeof NotificationWhereInput>;
    orderBy?: Array<NotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof NotificationScalarFieldEnum>;
}
export declare class FindManyNotificationArgs {
    where?: InstanceType<typeof NotificationWhereInput>;
    orderBy?: Array<NotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof NotificationScalarFieldEnum>;
}
export declare class FindUniqueNotificationOrThrowArgs {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
export declare class FindUniqueNotificationArgs {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
export declare class NotificationAggregateArgs {
    where?: InstanceType<typeof NotificationWhereInput>;
    orderBy?: Array<NotificationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof NotificationCountAggregateInput>;
    _avg?: InstanceType<typeof NotificationAvgAggregateInput>;
    _sum?: InstanceType<typeof NotificationSumAggregateInput>;
    _min?: InstanceType<typeof NotificationMinAggregateInput>;
    _max?: InstanceType<typeof NotificationMaxAggregateInput>;
}
export declare class NotificationAvgAggregateInput {
    id?: true;
}
export declare class NotificationAvgAggregate {
    id?: number;
}
export declare class NotificationAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class NotificationCountAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    isRead?: true;
    isCleared?: true;
    deepLink?: true;
    fcmToken?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
}
export declare class NotificationCountAggregate {
    id: number;
    title: number;
    subtitle: number;
    content: number;
    isRead: number;
    isCleared: number;
    deepLink: number;
    fcmToken: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
}
export declare class NotificationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class NotificationCreateManyUserInputEnvelope {
    data: Array<NotificationCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class NotificationCreateManyUserInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class NotificationCreateManyInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
}
export declare class NotificationCreateNestedManyWithoutUserInput {
    create?: Array<NotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof NotificationCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
export declare class NotificationCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof NotificationCreateWithoutUserInput>;
}
export declare class NotificationCreateWithoutUserInput {
    title: string;
    subtitle: string;
    content: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class NotificationCreateInput {
    title: string;
    subtitle: string;
    content: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutNotificationInput>;
}
export declare class NotificationGroupByArgs {
    where?: InstanceType<typeof NotificationWhereInput>;
    orderBy?: Array<NotificationOrderByWithAggregationInput>;
    by: Array<keyof typeof NotificationScalarFieldEnum>;
    having?: InstanceType<typeof NotificationScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof NotificationCountAggregateInput>;
    _avg?: InstanceType<typeof NotificationAvgAggregateInput>;
    _sum?: InstanceType<typeof NotificationSumAggregateInput>;
    _min?: InstanceType<typeof NotificationMinAggregateInput>;
    _max?: InstanceType<typeof NotificationMaxAggregateInput>;
}
export declare class NotificationGroupBy {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    isRead: boolean;
    isCleared: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId: string;
    _count?: InstanceType<typeof NotificationCountAggregate>;
    _avg?: InstanceType<typeof NotificationAvgAggregate>;
    _sum?: InstanceType<typeof NotificationSumAggregate>;
    _min?: InstanceType<typeof NotificationMinAggregate>;
    _max?: InstanceType<typeof NotificationMaxAggregate>;
}
export declare class NotificationListRelationFilter {
    every?: InstanceType<typeof NotificationWhereInput>;
    some?: InstanceType<typeof NotificationWhereInput>;
    none?: InstanceType<typeof NotificationWhereInput>;
}
export declare class NotificationMaxAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    isRead?: true;
    isCleared?: true;
    deepLink?: true;
    fcmToken?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
}
export declare class NotificationMaxAggregate {
    id?: number;
    title?: string;
    subtitle?: string;
    content?: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
export declare class NotificationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class NotificationMinAggregateInput {
    id?: true;
    title?: true;
    subtitle?: true;
    content?: true;
    isRead?: true;
    isCleared?: true;
    deepLink?: true;
    fcmToken?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
}
export declare class NotificationMinAggregate {
    id?: number;
    title?: string;
    subtitle?: string;
    content?: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string;
}
export declare class NotificationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    deepLink?: keyof typeof SortOrder;
    fcmToken?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class NotificationOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class NotificationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    deepLink?: InstanceType<typeof SortOrderInput>;
    fcmToken?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof NotificationCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof NotificationAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof NotificationMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof NotificationMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof NotificationSumOrderByAggregateInput>;
}
export declare class NotificationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    subtitle?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    isRead?: keyof typeof SortOrder;
    isCleared?: keyof typeof SortOrder;
    deepLink?: InstanceType<typeof SortOrderInput>;
    fcmToken?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class NotificationScalarWhereWithAggregatesInput {
    AND?: Array<NotificationScalarWhereWithAggregatesInput>;
    OR?: Array<NotificationScalarWhereWithAggregatesInput>;
    NOT?: Array<NotificationScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    subtitle?: InstanceType<typeof StringWithAggregatesFilter>;
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    isRead?: InstanceType<typeof BoolWithAggregatesFilter>;
    isCleared?: InstanceType<typeof BoolWithAggregatesFilter>;
    deepLink?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    fcmToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class NotificationScalarWhereInput {
    AND?: Array<NotificationScalarWhereInput>;
    OR?: Array<NotificationScalarWhereInput>;
    NOT?: Array<NotificationScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
}
export declare class NotificationSumAggregateInput {
    id?: true;
}
export declare class NotificationSumAggregate {
    id?: number;
}
export declare class NotificationSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class NotificationUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<NotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof NotificationCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
export declare class NotificationUncheckedCreateWithoutUserInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class NotificationUncheckedCreateInput {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    isRead?: boolean;
    isCleared?: boolean;
    deepLink?: string;
    fcmToken?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
}
export declare class NotificationUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<NotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutUserInput>;
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof NotificationCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    update?: Array<NotificationUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<NotificationScalarWhereInput>;
}
export declare class NotificationUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class NotificationUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class NotificationUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class NotificationUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class NotificationUpdateManyMutationInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class NotificationUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof NotificationScalarWhereInput>;
    data: InstanceType<typeof NotificationUpdateManyMutationInput>;
}
export declare class NotificationUpdateManyWithoutUserNestedInput {
    create?: Array<NotificationCreateWithoutUserInput>;
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutUserInput>;
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof NotificationCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
    update?: Array<NotificationUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<NotificationScalarWhereInput>;
}
export declare class NotificationUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof NotificationUpdateWithoutUserInput>;
}
export declare class NotificationUpdateWithoutUserInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class NotificationUpdateInput {
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subtitle?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    isRead?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    isCleared?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    deepLink?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    fcmToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutNotificationNestedInput>;
}
export declare class NotificationUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof NotificationUpdateWithoutUserInput>;
    create: InstanceType<typeof NotificationCreateWithoutUserInput>;
}
export declare class NotificationWhereUniqueInput {
    id?: number;
    AND?: Array<NotificationWhereInput>;
    OR?: Array<NotificationWhereInput>;
    NOT?: Array<NotificationWhereInput>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class NotificationWhereInput {
    AND?: Array<NotificationWhereInput>;
    OR?: Array<NotificationWhereInput>;
    NOT?: Array<NotificationWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    title?: InstanceType<typeof StringFilter>;
    subtitle?: InstanceType<typeof StringFilter>;
    content?: InstanceType<typeof StringFilter>;
    isRead?: InstanceType<typeof BoolFilter>;
    isCleared?: InstanceType<typeof BoolFilter>;
    deepLink?: InstanceType<typeof StringNullableFilter>;
    fcmToken?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    userId?: InstanceType<typeof StringFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class Notification {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    isRead: boolean;
    isCleared: boolean;
    deepLink: string | null;
    fcmToken: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user?: InstanceType<typeof User>;
}
export declare class UpdateManyNotificationArgs {
    data: InstanceType<typeof NotificationUpdateManyMutationInput>;
    where?: InstanceType<typeof NotificationWhereInput>;
}
export declare class UpdateOneNotificationArgs {
    data: InstanceType<typeof NotificationUpdateInput>;
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
export declare class UpsertOneNotificationArgs {
    where: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof NotificationCreateInput>;
    update: InstanceType<typeof NotificationUpdateInput>;
}
export declare class AggregateParticipant {
    _count?: InstanceType<typeof ParticipantCountAggregate>;
    _avg?: InstanceType<typeof ParticipantAvgAggregate>;
    _sum?: InstanceType<typeof ParticipantSumAggregate>;
    _min?: InstanceType<typeof ParticipantMinAggregate>;
    _max?: InstanceType<typeof ParticipantMaxAggregate>;
}
export declare class CreateManyParticipantArgs {
    data: Array<ParticipantCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneParticipantArgs {
    data: InstanceType<typeof ParticipantCreateInput>;
}
export declare class DeleteManyParticipantArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class DeleteOneParticipantArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class FindFirstParticipantOrThrowArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
export declare class FindFirstParticipantArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
export declare class FindManyParticipantArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
export declare class FindUniqueParticipantOrThrowArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class FindUniqueParticipantArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantAggregateArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ParticipantCountAggregateInput>;
    _avg?: InstanceType<typeof ParticipantAvgAggregateInput>;
    _sum?: InstanceType<typeof ParticipantSumAggregateInput>;
    _min?: InstanceType<typeof ParticipantMinAggregateInput>;
    _max?: InstanceType<typeof ParticipantMaxAggregateInput>;
}
export declare class ParticipantAvgAggregateInput {
    employmentId?: true;
    bankAccountId?: true;
    contactInfoId?: true;
    programParticipationId?: true;
}
export declare class ParticipantAvgAggregate {
    employmentId?: number;
    bankAccountId?: number;
    contactInfoId?: number;
    programParticipationId?: number;
}
export declare class ParticipantAvgOrderByAggregateInput {
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
}
export declare class ParticipantCountAggregateInput {
    gender?: true;
    birthDate?: true;
    isActive?: true;
    status?: true;
    userId?: true;
    relationId?: true;
    employmentId?: true;
    bankAccountId?: true;
    contactInfoId?: true;
    programParticipationId?: true;
    _all?: true;
}
export declare class ParticipantCountAggregate {
    gender: number;
    birthDate: number;
    isActive: number;
    status: number;
    userId: number;
    relationId: number;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    _all: number;
}
export declare class ParticipantCountOrderByAggregateInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: keyof typeof SortOrder;
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
}
export declare class ParticipantCount {
    claims?: number;
    participant?: number;
}
export declare class ParticipantCreateManyRelationInputEnvelope {
    data: Array<ParticipantCreateManyRelationInput>;
    skipDuplicates?: boolean;
}
export declare class ParticipantCreateManyRelationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
}
export declare class ParticipantCreateManyInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
}
export declare class ParticipantCreateNestedManyWithoutRelationInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
}
export declare class ParticipantCreateNestedOneWithoutBankAccountInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateNestedOneWithoutClaimsInput {
    create?: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateNestedOneWithoutContactInfoInput {
    create?: InstanceType<typeof ParticipantCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutContactInfoInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateNestedOneWithoutEmploymentInput {
    create?: InstanceType<typeof ParticipantCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateNestedOneWithoutProgramParticipationInput {
    create?: InstanceType<typeof ParticipantCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutProgramParticipationInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantCreateOrConnectWithoutBankAccountInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
}
export declare class ParticipantCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
}
export declare class ParticipantCreateOrConnectWithoutContactInfoInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutContactInfoInput>;
}
export declare class ParticipantCreateOrConnectWithoutEmploymentInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutEmploymentInput>;
}
export declare class ParticipantCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
}
export declare class ParticipantCreateOrConnectWithoutProgramParticipationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutProgramParticipationInput>;
}
export declare class ParticipantCreateOrConnectWithoutRelationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutRelationInput>;
}
export declare class ParticipantCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateWithoutUserInput>;
}
export declare class ParticipantCreateWithoutBankAccountInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutClaimsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutContactInfoInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutEmploymentInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutParticipantInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
}
export declare class ParticipantCreateWithoutProgramParticipationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutRelationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutUserInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    employment: InstanceType<typeof EmploymentCreateNestedOneWithoutParticipantInput>;
    bankAccount: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    contactInfo: InstanceType<typeof ContactInfoCreateNestedOneWithoutParticipantInput>;
    programParticipation: InstanceType<typeof ProgramParticipationCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantGroupByArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithAggregationInput>;
    by: Array<keyof typeof ParticipantScalarFieldEnum>;
    having?: InstanceType<typeof ParticipantScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ParticipantCountAggregateInput>;
    _avg?: InstanceType<typeof ParticipantAvgAggregateInput>;
    _sum?: InstanceType<typeof ParticipantSumAggregateInput>;
    _min?: InstanceType<typeof ParticipantMinAggregateInput>;
    _max?: InstanceType<typeof ParticipantMaxAggregateInput>;
}
export declare class ParticipantGroupBy {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    _count?: InstanceType<typeof ParticipantCountAggregate>;
    _avg?: InstanceType<typeof ParticipantAvgAggregate>;
    _sum?: InstanceType<typeof ParticipantSumAggregate>;
    _min?: InstanceType<typeof ParticipantMinAggregate>;
    _max?: InstanceType<typeof ParticipantMaxAggregate>;
}
export declare class ParticipantListRelationFilter {
    every?: InstanceType<typeof ParticipantWhereInput>;
    some?: InstanceType<typeof ParticipantWhereInput>;
    none?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantMaxAggregateInput {
    gender?: true;
    birthDate?: true;
    isActive?: true;
    status?: true;
    userId?: true;
    relationId?: true;
    employmentId?: true;
    bankAccountId?: true;
    contactInfoId?: true;
    programParticipationId?: true;
}
export declare class ParticipantMaxAggregate {
    gender?: keyof typeof Gender;
    birthDate?: Date | string;
    isActive?: boolean;
    status?: keyof typeof ParticipantStatus;
    userId?: string;
    relationId?: string;
    employmentId?: number;
    bankAccountId?: number;
    contactInfoId?: number;
    programParticipationId?: number;
}
export declare class ParticipantMaxOrderByAggregateInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: keyof typeof SortOrder;
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
}
export declare class ParticipantMinAggregateInput {
    gender?: true;
    birthDate?: true;
    isActive?: true;
    status?: true;
    userId?: true;
    relationId?: true;
    employmentId?: true;
    bankAccountId?: true;
    contactInfoId?: true;
    programParticipationId?: true;
}
export declare class ParticipantMinAggregate {
    gender?: keyof typeof Gender;
    birthDate?: Date | string;
    isActive?: boolean;
    status?: keyof typeof ParticipantStatus;
    userId?: string;
    relationId?: string;
    employmentId?: number;
    bankAccountId?: number;
    contactInfoId?: number;
    programParticipationId?: number;
}
export declare class ParticipantMinOrderByAggregateInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: keyof typeof SortOrder;
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
}
export declare class ParticipantNullableRelationFilter {
    is?: InstanceType<typeof ParticipantWhereInput>;
    isNot?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ParticipantOrderByWithAggregationInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: InstanceType<typeof SortOrderInput>;
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ParticipantCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ParticipantAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ParticipantMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ParticipantMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ParticipantSumOrderByAggregateInput>;
}
export declare class ParticipantOrderByWithRelationInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: InstanceType<typeof SortOrderInput>;
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    relation?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    employment?: InstanceType<typeof EmploymentOrderByWithRelationInput>;
    bankAccount?: InstanceType<typeof BankAccountOrderByWithRelationInput>;
    contactInfo?: InstanceType<typeof ContactInfoOrderByWithRelationInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationOrderByWithRelationInput>;
    claims?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
    participant?: InstanceType<typeof ParticipantOrderByRelationAggregateInput>;
}
export declare class ParticipantRelationFilter {
    is?: InstanceType<typeof ParticipantWhereInput>;
    isNot?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantScalarWhereWithAggregatesInput {
    AND?: Array<ParticipantScalarWhereWithAggregatesInput>;
    OR?: Array<ParticipantScalarWhereWithAggregatesInput>;
    NOT?: Array<ParticipantScalarWhereWithAggregatesInput>;
    gender?: InstanceType<typeof EnumGenderWithAggregatesFilter>;
    birthDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    isActive?: InstanceType<typeof BoolWithAggregatesFilter>;
    status?: InstanceType<typeof EnumParticipantStatusWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    relationId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    employmentId?: InstanceType<typeof IntWithAggregatesFilter>;
    bankAccountId?: InstanceType<typeof IntWithAggregatesFilter>;
    contactInfoId?: InstanceType<typeof IntWithAggregatesFilter>;
    programParticipationId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ParticipantScalarWhereInput {
    AND?: Array<ParticipantScalarWhereInput>;
    OR?: Array<ParticipantScalarWhereInput>;
    NOT?: Array<ParticipantScalarWhereInput>;
    gender?: InstanceType<typeof EnumGenderFilter>;
    birthDate?: InstanceType<typeof DateTimeFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    status?: InstanceType<typeof EnumParticipantStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    relationId?: InstanceType<typeof StringNullableFilter>;
    employmentId?: InstanceType<typeof IntFilter>;
    bankAccountId?: InstanceType<typeof IntFilter>;
    contactInfoId?: InstanceType<typeof IntFilter>;
    programParticipationId?: InstanceType<typeof IntFilter>;
}
export declare class ParticipantSumAggregateInput {
    employmentId?: true;
    bankAccountId?: true;
    contactInfoId?: true;
    programParticipationId?: true;
}
export declare class ParticipantSumAggregate {
    employmentId?: number;
    bankAccountId?: number;
    contactInfoId?: number;
    programParticipationId?: number;
}
export declare class ParticipantSumOrderByAggregateInput {
    employmentId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
    contactInfoId?: keyof typeof SortOrder;
    programParticipationId?: keyof typeof SortOrder;
}
export declare class ParticipantUncheckedCreateNestedManyWithoutRelationInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
}
export declare class ParticipantUncheckedCreateNestedOneWithoutBankAccountInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantUncheckedCreateNestedOneWithoutContactInfoInput {
    create?: InstanceType<typeof ParticipantCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutContactInfoInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantUncheckedCreateNestedOneWithoutEmploymentInput {
    create?: InstanceType<typeof ParticipantCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantUncheckedCreateNestedOneWithoutProgramParticipationInput {
    create?: InstanceType<typeof ParticipantCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutProgramParticipationInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantUncheckedCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class ParticipantUncheckedCreateWithoutBankAccountInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    contactInfoId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutClaimsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutContactInfoInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutEmploymentInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutParticipantInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
}
export declare class ParticipantUncheckedCreateWithoutProgramParticipationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutRelationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutUserInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedUpdateManyWithoutRelationNestedInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    set?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    disconnect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    delete?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutRelationInput>;
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutRelationInput>;
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
export declare class ParticipantUncheckedUpdateManyWithoutRelationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ParticipantUncheckedUpdateManyInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ParticipantUncheckedUpdateOneWithoutBankAccountNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBankAccountInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutBankAccountInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutBankAccountInput>;
}
export declare class ParticipantUncheckedUpdateOneWithoutContactInfoNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutContactInfoInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutContactInfoInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutContactInfoInput>;
}
export declare class ParticipantUncheckedUpdateOneWithoutEmploymentNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutEmploymentInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutEmploymentInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutEmploymentInput>;
}
export declare class ParticipantUncheckedUpdateOneWithoutProgramParticipationNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutProgramParticipationInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutProgramParticipationInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutProgramParticipationInput>;
}
export declare class ParticipantUncheckedUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutUserInput>;
}
export declare class ParticipantUncheckedUpdateWithoutBankAccountInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutClaimsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutContactInfoInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutEmploymentInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutParticipantInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutProgramParticipationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutRelationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutUserInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    employmentId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    contactInfoId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programParticipationId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateManyMutationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
}
export declare class ParticipantUpdateManyWithWhereWithoutRelationInput {
    where: InstanceType<typeof ParticipantScalarWhereInput>;
    data: InstanceType<typeof ParticipantUpdateManyMutationInput>;
}
export declare class ParticipantUpdateManyWithoutRelationNestedInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    set?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    disconnect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    delete?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>>;
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutRelationInput>;
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutRelationInput>;
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutClaimsNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutClaimsInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutClaimsInput>;
}
export declare class ParticipantUpdateOneWithoutBankAccountNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBankAccountInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutBankAccountInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutBankAccountInput>;
}
export declare class ParticipantUpdateOneWithoutContactInfoNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutContactInfoInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutContactInfoInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutContactInfoInput>;
}
export declare class ParticipantUpdateOneWithoutEmploymentNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutEmploymentInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutEmploymentInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutEmploymentInput>;
}
export declare class ParticipantUpdateOneWithoutParticipantNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutParticipantInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class ParticipantUpdateOneWithoutProgramParticipationNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutProgramParticipationInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutProgramParticipationInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutProgramParticipationInput>;
}
export declare class ParticipantUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutUserInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutBankAccountInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutBankAccountInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutClaimsInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutClaimsInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutContactInfoInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutContactInfoInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutEmploymentInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutEmploymentInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutParticipantInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutProgramParticipationInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutProgramParticipationInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutUserInput>;
}
export declare class ParticipantUpdateWithWhereUniqueWithoutRelationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    data: InstanceType<typeof ParticipantUpdateWithoutRelationInput>;
}
export declare class ParticipantUpdateWithoutBankAccountInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutClaimsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutContactInfoInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutEmploymentInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutParticipantInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
}
export declare class ParticipantUpdateWithoutProgramParticipationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutRelationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutUserInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    employment?: InstanceType<typeof EmploymentUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneRequiredWithoutParticipantNestedInput>;
    contactInfo?: InstanceType<typeof ContactInfoUpdateOneRequiredWithoutParticipantNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpsertWithWhereUniqueWithoutRelationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    update: InstanceType<typeof ParticipantUpdateWithoutRelationInput>;
    create: InstanceType<typeof ParticipantCreateWithoutRelationInput>;
}
export declare class ParticipantUpsertWithoutBankAccountInput {
    update: InstanceType<typeof ParticipantUpdateWithoutBankAccountInput>;
    create: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutClaimsInput {
    update: InstanceType<typeof ParticipantUpdateWithoutClaimsInput>;
    create: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutContactInfoInput {
    update: InstanceType<typeof ParticipantUpdateWithoutContactInfoInput>;
    create: InstanceType<typeof ParticipantCreateWithoutContactInfoInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutEmploymentInput {
    update: InstanceType<typeof ParticipantUpdateWithoutEmploymentInput>;
    create: InstanceType<typeof ParticipantCreateWithoutEmploymentInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutParticipantInput {
    update: InstanceType<typeof ParticipantUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutProgramParticipationInput {
    update: InstanceType<typeof ParticipantUpdateWithoutProgramParticipationInput>;
    create: InstanceType<typeof ParticipantCreateWithoutProgramParticipationInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutUserInput {
    update: InstanceType<typeof ParticipantUpdateWithoutUserInput>;
    create: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantWhereUniqueInput {
    userId?: string;
    employmentId?: number;
    bankAccountId?: number;
    contactInfoId?: number;
    programParticipationId?: number;
    AND?: Array<ParticipantWhereInput>;
    OR?: Array<ParticipantWhereInput>;
    NOT?: Array<ParticipantWhereInput>;
    gender?: InstanceType<typeof EnumGenderFilter>;
    birthDate?: InstanceType<typeof DateTimeFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    status?: InstanceType<typeof EnumParticipantStatusFilter>;
    relationId?: InstanceType<typeof StringNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    relation?: InstanceType<typeof ParticipantNullableRelationFilter>;
    employment?: InstanceType<typeof EmploymentRelationFilter>;
    bankAccount?: InstanceType<typeof BankAccountRelationFilter>;
    contactInfo?: InstanceType<typeof ContactInfoRelationFilter>;
    programParticipation?: InstanceType<typeof ProgramParticipationRelationFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
    participant?: InstanceType<typeof ParticipantListRelationFilter>;
}
export declare class ParticipantWhereInput {
    AND?: Array<ParticipantWhereInput>;
    OR?: Array<ParticipantWhereInput>;
    NOT?: Array<ParticipantWhereInput>;
    gender?: InstanceType<typeof EnumGenderFilter>;
    birthDate?: InstanceType<typeof DateTimeFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    status?: InstanceType<typeof EnumParticipantStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    relationId?: InstanceType<typeof StringNullableFilter>;
    employmentId?: InstanceType<typeof IntFilter>;
    bankAccountId?: InstanceType<typeof IntFilter>;
    contactInfoId?: InstanceType<typeof IntFilter>;
    programParticipationId?: InstanceType<typeof IntFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    relation?: InstanceType<typeof ParticipantNullableRelationFilter>;
    employment?: InstanceType<typeof EmploymentRelationFilter>;
    bankAccount?: InstanceType<typeof BankAccountRelationFilter>;
    contactInfo?: InstanceType<typeof ContactInfoRelationFilter>;
    programParticipation?: InstanceType<typeof ProgramParticipationRelationFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
    participant?: InstanceType<typeof ParticipantListRelationFilter>;
}
export declare class Participant {
    gender: keyof typeof Gender;
    birthDate: Date;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId: string | null;
    employmentId: number;
    bankAccountId: number;
    contactInfoId: number;
    programParticipationId: number;
    user?: InstanceType<typeof User>;
    relation?: InstanceType<typeof Participant> | null;
    employment?: InstanceType<typeof Employment>;
    bankAccount?: InstanceType<typeof BankAccount>;
    contactInfo?: InstanceType<typeof ContactInfo>;
    programParticipation?: InstanceType<typeof ProgramParticipation>;
    claims?: Array<Claim>;
    participant?: Array<Participant>;
    _count?: InstanceType<typeof ParticipantCount>;
}
export declare class UpdateManyParticipantArgs {
    data: InstanceType<typeof ParticipantUpdateManyMutationInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class UpdateOneParticipantArgs {
    data: InstanceType<typeof ParticipantUpdateInput>;
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
}
export declare class UpsertOneParticipantArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId' | 'employmentId' | 'bankAccountId' | 'contactInfoId' | 'programParticipationId'>;
    create: InstanceType<typeof ParticipantCreateInput>;
    update: InstanceType<typeof ParticipantUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class BoolFieldUpdateOperationsInput {
    set?: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class BoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumAdmedicaStatusFieldUpdateOperationsInput {
    set?: keyof typeof AdmedicaStatus;
}
export declare class EnumAdmedicaStatusFilter {
    equals?: keyof typeof AdmedicaStatus;
    in?: Array<keyof typeof AdmedicaStatus>;
    notIn?: Array<keyof typeof AdmedicaStatus>;
    not?: InstanceType<typeof NestedEnumAdmedicaStatusFilter>;
}
export declare class EnumAdmedicaStatusWithAggregatesFilter {
    equals?: keyof typeof AdmedicaStatus;
    in?: Array<keyof typeof AdmedicaStatus>;
    notIn?: Array<keyof typeof AdmedicaStatus>;
    not?: InstanceType<typeof NestedEnumAdmedicaStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumAdmedicaStatusFilter>;
    _max?: InstanceType<typeof NestedEnumAdmedicaStatusFilter>;
}
export declare class EnumBackupTypeFieldUpdateOperationsInput {
    set?: keyof typeof BackupType;
}
export declare class EnumBackupTypeFilter {
    equals?: keyof typeof BackupType;
    in?: Array<keyof typeof BackupType>;
    notIn?: Array<keyof typeof BackupType>;
    not?: InstanceType<typeof NestedEnumBackupTypeFilter>;
}
export declare class EnumBackupTypeWithAggregatesFilter {
    equals?: keyof typeof BackupType;
    in?: Array<keyof typeof BackupType>;
    notIn?: Array<keyof typeof BackupType>;
    not?: InstanceType<typeof NestedEnumBackupTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumBackupTypeFilter>;
    _max?: InstanceType<typeof NestedEnumBackupTypeFilter>;
}
export declare class EnumClaimChannelFieldUpdateOperationsInput {
    set?: keyof typeof ClaimChannel;
}
export declare class EnumClaimChannelFilter {
    equals?: keyof typeof ClaimChannel;
    in?: Array<keyof typeof ClaimChannel>;
    notIn?: Array<keyof typeof ClaimChannel>;
    not?: InstanceType<typeof NestedEnumClaimChannelFilter>;
}
export declare class EnumClaimChannelWithAggregatesFilter {
    equals?: keyof typeof ClaimChannel;
    in?: Array<keyof typeof ClaimChannel>;
    notIn?: Array<keyof typeof ClaimChannel>;
    not?: InstanceType<typeof NestedEnumClaimChannelWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumClaimChannelFilter>;
    _max?: InstanceType<typeof NestedEnumClaimChannelFilter>;
}
export declare class EnumClaimStatusTypeFieldUpdateOperationsInput {
    set?: keyof typeof ClaimStatusType;
}
export declare class EnumClaimStatusTypeFilter {
    equals?: keyof typeof ClaimStatusType;
    in?: Array<keyof typeof ClaimStatusType>;
    notIn?: Array<keyof typeof ClaimStatusType>;
    not?: InstanceType<typeof NestedEnumClaimStatusTypeFilter>;
}
export declare class EnumClaimStatusTypeWithAggregatesFilter {
    equals?: keyof typeof ClaimStatusType;
    in?: Array<keyof typeof ClaimStatusType>;
    notIn?: Array<keyof typeof ClaimStatusType>;
    not?: InstanceType<typeof NestedEnumClaimStatusTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumClaimStatusTypeFilter>;
    _max?: InstanceType<typeof NestedEnumClaimStatusTypeFilter>;
}
export declare class EnumColorFieldUpdateOperationsInput {
    set?: keyof typeof Color;
}
export declare class EnumColorFilter {
    equals?: keyof typeof Color;
    in?: Array<keyof typeof Color>;
    notIn?: Array<keyof typeof Color>;
    not?: InstanceType<typeof NestedEnumColorFilter>;
}
export declare class EnumColorWithAggregatesFilter {
    equals?: keyof typeof Color;
    in?: Array<keyof typeof Color>;
    notIn?: Array<keyof typeof Color>;
    not?: InstanceType<typeof NestedEnumColorWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumColorFilter>;
    _max?: InstanceType<typeof NestedEnumColorFilter>;
}
export declare class EnumDocumentSourceFieldUpdateOperationsInput {
    set?: keyof typeof DocumentSource;
}
export declare class EnumDocumentSourceFilter {
    equals?: keyof typeof DocumentSource;
    in?: Array<keyof typeof DocumentSource>;
    notIn?: Array<keyof typeof DocumentSource>;
    not?: InstanceType<typeof NestedEnumDocumentSourceFilter>;
}
export declare class EnumDocumentSourceWithAggregatesFilter {
    equals?: keyof typeof DocumentSource;
    in?: Array<keyof typeof DocumentSource>;
    notIn?: Array<keyof typeof DocumentSource>;
    not?: InstanceType<typeof NestedEnumDocumentSourceWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumDocumentSourceFilter>;
    _max?: InstanceType<typeof NestedEnumDocumentSourceFilter>;
}
export declare class EnumDocumentTypeFieldUpdateOperationsInput {
    set?: keyof typeof DocumentType;
}
export declare class EnumDocumentTypeFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: InstanceType<typeof NestedEnumDocumentTypeFilter>;
}
export declare class EnumDocumentTypeWithAggregatesFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: InstanceType<typeof NestedEnumDocumentTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumDocumentTypeFilter>;
    _max?: InstanceType<typeof NestedEnumDocumentTypeFilter>;
}
export declare class EnumExecutionTypeFieldUpdateOperationsInput {
    set?: keyof typeof ExecutionType;
}
export declare class EnumExecutionTypeFilter {
    equals?: keyof typeof ExecutionType;
    in?: Array<keyof typeof ExecutionType>;
    notIn?: Array<keyof typeof ExecutionType>;
    not?: InstanceType<typeof NestedEnumExecutionTypeFilter>;
}
export declare class EnumExecutionTypeWithAggregatesFilter {
    equals?: keyof typeof ExecutionType;
    in?: Array<keyof typeof ExecutionType>;
    notIn?: Array<keyof typeof ExecutionType>;
    not?: InstanceType<typeof NestedEnumExecutionTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumExecutionTypeFilter>;
    _max?: InstanceType<typeof NestedEnumExecutionTypeFilter>;
}
export declare class EnumGenderFieldUpdateOperationsInput {
    set?: keyof typeof Gender;
}
export declare class EnumGenderFilter {
    equals?: keyof typeof Gender;
    in?: Array<keyof typeof Gender>;
    notIn?: Array<keyof typeof Gender>;
    not?: InstanceType<typeof NestedEnumGenderFilter>;
}
export declare class EnumGenderWithAggregatesFilter {
    equals?: keyof typeof Gender;
    in?: Array<keyof typeof Gender>;
    notIn?: Array<keyof typeof Gender>;
    not?: InstanceType<typeof NestedEnumGenderWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumGenderFilter>;
    _max?: InstanceType<typeof NestedEnumGenderFilter>;
}
export declare class EnumParticipantStatusFieldUpdateOperationsInput {
    set?: keyof typeof ParticipantStatus;
}
export declare class EnumParticipantStatusFilter {
    equals?: keyof typeof ParticipantStatus;
    in?: Array<keyof typeof ParticipantStatus>;
    notIn?: Array<keyof typeof ParticipantStatus>;
    not?: InstanceType<typeof NestedEnumParticipantStatusFilter>;
}
export declare class EnumParticipantStatusWithAggregatesFilter {
    equals?: keyof typeof ParticipantStatus;
    in?: Array<keyof typeof ParticipantStatus>;
    notIn?: Array<keyof typeof ParticipantStatus>;
    not?: InstanceType<typeof NestedEnumParticipantStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumParticipantStatusFilter>;
    _max?: InstanceType<typeof NestedEnumParticipantStatusFilter>;
}
export declare class EnumPeriodNullableFilter {
    equals?: keyof typeof Period;
    in?: Array<keyof typeof Period>;
    notIn?: Array<keyof typeof Period>;
    not?: InstanceType<typeof NestedEnumPeriodNullableFilter>;
}
export declare class EnumPeriodNullableWithAggregatesFilter {
    equals?: keyof typeof Period;
    in?: Array<keyof typeof Period>;
    notIn?: Array<keyof typeof Period>;
    not?: InstanceType<typeof NestedEnumPeriodNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumPeriodNullableFilter>;
    _max?: InstanceType<typeof NestedEnumPeriodNullableFilter>;
}
export declare class EnumPermissionFieldUpdateOperationsInput {
    set?: keyof typeof Permission;
}
export declare class EnumPermissionFilter {
    equals?: keyof typeof Permission;
    in?: Array<keyof typeof Permission>;
    notIn?: Array<keyof typeof Permission>;
    not?: InstanceType<typeof NestedEnumPermissionFilter>;
}
export declare class EnumPermissionWithAggregatesFilter {
    equals?: keyof typeof Permission;
    in?: Array<keyof typeof Permission>;
    notIn?: Array<keyof typeof Permission>;
    not?: InstanceType<typeof NestedEnumPermissionWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumPermissionFilter>;
    _max?: InstanceType<typeof NestedEnumPermissionFilter>;
}
export declare class EnumPositionFieldUpdateOperationsInput {
    set?: keyof typeof Position;
}
export declare class EnumPositionFilter {
    equals?: keyof typeof Position;
    in?: Array<keyof typeof Position>;
    notIn?: Array<keyof typeof Position>;
    not?: InstanceType<typeof NestedEnumPositionFilter>;
}
export declare class EnumPositionWithAggregatesFilter {
    equals?: keyof typeof Position;
    in?: Array<keyof typeof Position>;
    notIn?: Array<keyof typeof Position>;
    not?: InstanceType<typeof NestedEnumPositionWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumPositionFilter>;
    _max?: InstanceType<typeof NestedEnumPositionFilter>;
}
export declare class EnumProgramTypeFieldUpdateOperationsInput {
    set?: keyof typeof ProgramType;
}
export declare class EnumProgramTypeFilter {
    equals?: keyof typeof ProgramType;
    in?: Array<keyof typeof ProgramType>;
    notIn?: Array<keyof typeof ProgramType>;
    not?: InstanceType<typeof NestedEnumProgramTypeFilter>;
}
export declare class EnumProgramTypeWithAggregatesFilter {
    equals?: keyof typeof ProgramType;
    in?: Array<keyof typeof ProgramType>;
    notIn?: Array<keyof typeof ProgramType>;
    not?: InstanceType<typeof NestedEnumProgramTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumProgramTypeFilter>;
    _max?: InstanceType<typeof NestedEnumProgramTypeFilter>;
}
export declare class EnumRoleTypeNullableFilter {
    equals?: keyof typeof RoleType;
    in?: Array<keyof typeof RoleType>;
    notIn?: Array<keyof typeof RoleType>;
    not?: InstanceType<typeof NestedEnumRoleTypeNullableFilter>;
}
export declare class EnumRoleTypeNullableWithAggregatesFilter {
    equals?: keyof typeof RoleType;
    in?: Array<keyof typeof RoleType>;
    notIn?: Array<keyof typeof RoleType>;
    not?: InstanceType<typeof NestedEnumRoleTypeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumRoleTypeNullableFilter>;
    _max?: InstanceType<typeof NestedEnumRoleTypeNullableFilter>;
}
export declare class EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput {
    set?: keyof typeof SantunanHarianRawatInapPlan;
}
export declare class EnumSantunanHarianRawatInapPlanFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanFilter>;
}
export declare class EnumSantunanHarianRawatInapPlanNullableFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableFilter>;
}
export declare class EnumSantunanHarianRawatInapPlanNullableWithAggregatesFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableFilter>;
    _max?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableFilter>;
}
export declare class EnumSantunanHarianRawatInapPlanWithAggregatesFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanFilter>;
    _max?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanFilter>;
}
export declare class EnumTambahanBantuanRawatInapTypeNullableFilter {
    equals?: keyof typeof TambahanBantuanRawatInapType;
    in?: Array<keyof typeof TambahanBantuanRawatInapType>;
    notIn?: Array<keyof typeof TambahanBantuanRawatInapType>;
    not?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableFilter>;
}
export declare class EnumTambahanBantuanRawatInapTypeNullableWithAggregatesFilter {
    equals?: keyof typeof TambahanBantuanRawatInapType;
    in?: Array<keyof typeof TambahanBantuanRawatInapType>;
    notIn?: Array<keyof typeof TambahanBantuanRawatInapType>;
    not?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableFilter>;
    _max?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableFilter>;
}
export declare class EnumTransactionTypeFieldUpdateOperationsInput {
    set?: keyof typeof TransactionType;
}
export declare class EnumTransactionTypeFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class EnumTransactionTypeWithAggregatesFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class FloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class FloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class FloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class FloatNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedFloatNullableFilter>;
    _min?: InstanceType<typeof NestedFloatNullableFilter>;
    _max?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class FloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedBoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumAdmedicaStatusFilter {
    equals?: keyof typeof AdmedicaStatus;
    in?: Array<keyof typeof AdmedicaStatus>;
    notIn?: Array<keyof typeof AdmedicaStatus>;
    not?: InstanceType<typeof NestedEnumAdmedicaStatusFilter>;
}
export declare class NestedEnumAdmedicaStatusWithAggregatesFilter {
    equals?: keyof typeof AdmedicaStatus;
    in?: Array<keyof typeof AdmedicaStatus>;
    notIn?: Array<keyof typeof AdmedicaStatus>;
    not?: InstanceType<typeof NestedEnumAdmedicaStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumAdmedicaStatusFilter>;
    _max?: InstanceType<typeof NestedEnumAdmedicaStatusFilter>;
}
export declare class NestedEnumBackupTypeFilter {
    equals?: keyof typeof BackupType;
    in?: Array<keyof typeof BackupType>;
    notIn?: Array<keyof typeof BackupType>;
    not?: InstanceType<typeof NestedEnumBackupTypeFilter>;
}
export declare class NestedEnumBackupTypeWithAggregatesFilter {
    equals?: keyof typeof BackupType;
    in?: Array<keyof typeof BackupType>;
    notIn?: Array<keyof typeof BackupType>;
    not?: InstanceType<typeof NestedEnumBackupTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumBackupTypeFilter>;
    _max?: InstanceType<typeof NestedEnumBackupTypeFilter>;
}
export declare class NestedEnumClaimChannelFilter {
    equals?: keyof typeof ClaimChannel;
    in?: Array<keyof typeof ClaimChannel>;
    notIn?: Array<keyof typeof ClaimChannel>;
    not?: InstanceType<typeof NestedEnumClaimChannelFilter>;
}
export declare class NestedEnumClaimChannelWithAggregatesFilter {
    equals?: keyof typeof ClaimChannel;
    in?: Array<keyof typeof ClaimChannel>;
    notIn?: Array<keyof typeof ClaimChannel>;
    not?: InstanceType<typeof NestedEnumClaimChannelWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumClaimChannelFilter>;
    _max?: InstanceType<typeof NestedEnumClaimChannelFilter>;
}
export declare class NestedEnumClaimStatusTypeFilter {
    equals?: keyof typeof ClaimStatusType;
    in?: Array<keyof typeof ClaimStatusType>;
    notIn?: Array<keyof typeof ClaimStatusType>;
    not?: InstanceType<typeof NestedEnumClaimStatusTypeFilter>;
}
export declare class NestedEnumClaimStatusTypeWithAggregatesFilter {
    equals?: keyof typeof ClaimStatusType;
    in?: Array<keyof typeof ClaimStatusType>;
    notIn?: Array<keyof typeof ClaimStatusType>;
    not?: InstanceType<typeof NestedEnumClaimStatusTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumClaimStatusTypeFilter>;
    _max?: InstanceType<typeof NestedEnumClaimStatusTypeFilter>;
}
export declare class NestedEnumColorFilter {
    equals?: keyof typeof Color;
    in?: Array<keyof typeof Color>;
    notIn?: Array<keyof typeof Color>;
    not?: InstanceType<typeof NestedEnumColorFilter>;
}
export declare class NestedEnumColorWithAggregatesFilter {
    equals?: keyof typeof Color;
    in?: Array<keyof typeof Color>;
    notIn?: Array<keyof typeof Color>;
    not?: InstanceType<typeof NestedEnumColorWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumColorFilter>;
    _max?: InstanceType<typeof NestedEnumColorFilter>;
}
export declare class NestedEnumDocumentSourceFilter {
    equals?: keyof typeof DocumentSource;
    in?: Array<keyof typeof DocumentSource>;
    notIn?: Array<keyof typeof DocumentSource>;
    not?: InstanceType<typeof NestedEnumDocumentSourceFilter>;
}
export declare class NestedEnumDocumentSourceWithAggregatesFilter {
    equals?: keyof typeof DocumentSource;
    in?: Array<keyof typeof DocumentSource>;
    notIn?: Array<keyof typeof DocumentSource>;
    not?: InstanceType<typeof NestedEnumDocumentSourceWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumDocumentSourceFilter>;
    _max?: InstanceType<typeof NestedEnumDocumentSourceFilter>;
}
export declare class NestedEnumDocumentTypeFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: InstanceType<typeof NestedEnumDocumentTypeFilter>;
}
export declare class NestedEnumDocumentTypeWithAggregatesFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: InstanceType<typeof NestedEnumDocumentTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumDocumentTypeFilter>;
    _max?: InstanceType<typeof NestedEnumDocumentTypeFilter>;
}
export declare class NestedEnumExecutionTypeFilter {
    equals?: keyof typeof ExecutionType;
    in?: Array<keyof typeof ExecutionType>;
    notIn?: Array<keyof typeof ExecutionType>;
    not?: InstanceType<typeof NestedEnumExecutionTypeFilter>;
}
export declare class NestedEnumExecutionTypeWithAggregatesFilter {
    equals?: keyof typeof ExecutionType;
    in?: Array<keyof typeof ExecutionType>;
    notIn?: Array<keyof typeof ExecutionType>;
    not?: InstanceType<typeof NestedEnumExecutionTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumExecutionTypeFilter>;
    _max?: InstanceType<typeof NestedEnumExecutionTypeFilter>;
}
export declare class NestedEnumGenderFilter {
    equals?: keyof typeof Gender;
    in?: Array<keyof typeof Gender>;
    notIn?: Array<keyof typeof Gender>;
    not?: InstanceType<typeof NestedEnumGenderFilter>;
}
export declare class NestedEnumGenderWithAggregatesFilter {
    equals?: keyof typeof Gender;
    in?: Array<keyof typeof Gender>;
    notIn?: Array<keyof typeof Gender>;
    not?: InstanceType<typeof NestedEnumGenderWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumGenderFilter>;
    _max?: InstanceType<typeof NestedEnumGenderFilter>;
}
export declare class NestedEnumParticipantStatusFilter {
    equals?: keyof typeof ParticipantStatus;
    in?: Array<keyof typeof ParticipantStatus>;
    notIn?: Array<keyof typeof ParticipantStatus>;
    not?: InstanceType<typeof NestedEnumParticipantStatusFilter>;
}
export declare class NestedEnumParticipantStatusWithAggregatesFilter {
    equals?: keyof typeof ParticipantStatus;
    in?: Array<keyof typeof ParticipantStatus>;
    notIn?: Array<keyof typeof ParticipantStatus>;
    not?: InstanceType<typeof NestedEnumParticipantStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumParticipantStatusFilter>;
    _max?: InstanceType<typeof NestedEnumParticipantStatusFilter>;
}
export declare class NestedEnumPeriodNullableFilter {
    equals?: keyof typeof Period;
    in?: Array<keyof typeof Period>;
    notIn?: Array<keyof typeof Period>;
    not?: InstanceType<typeof NestedEnumPeriodNullableFilter>;
}
export declare class NestedEnumPeriodNullableWithAggregatesFilter {
    equals?: keyof typeof Period;
    in?: Array<keyof typeof Period>;
    notIn?: Array<keyof typeof Period>;
    not?: InstanceType<typeof NestedEnumPeriodNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumPeriodNullableFilter>;
    _max?: InstanceType<typeof NestedEnumPeriodNullableFilter>;
}
export declare class NestedEnumPermissionFilter {
    equals?: keyof typeof Permission;
    in?: Array<keyof typeof Permission>;
    notIn?: Array<keyof typeof Permission>;
    not?: InstanceType<typeof NestedEnumPermissionFilter>;
}
export declare class NestedEnumPermissionWithAggregatesFilter {
    equals?: keyof typeof Permission;
    in?: Array<keyof typeof Permission>;
    notIn?: Array<keyof typeof Permission>;
    not?: InstanceType<typeof NestedEnumPermissionWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumPermissionFilter>;
    _max?: InstanceType<typeof NestedEnumPermissionFilter>;
}
export declare class NestedEnumPositionFilter {
    equals?: keyof typeof Position;
    in?: Array<keyof typeof Position>;
    notIn?: Array<keyof typeof Position>;
    not?: InstanceType<typeof NestedEnumPositionFilter>;
}
export declare class NestedEnumPositionWithAggregatesFilter {
    equals?: keyof typeof Position;
    in?: Array<keyof typeof Position>;
    notIn?: Array<keyof typeof Position>;
    not?: InstanceType<typeof NestedEnumPositionWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumPositionFilter>;
    _max?: InstanceType<typeof NestedEnumPositionFilter>;
}
export declare class NestedEnumProgramTypeFilter {
    equals?: keyof typeof ProgramType;
    in?: Array<keyof typeof ProgramType>;
    notIn?: Array<keyof typeof ProgramType>;
    not?: InstanceType<typeof NestedEnumProgramTypeFilter>;
}
export declare class NestedEnumProgramTypeWithAggregatesFilter {
    equals?: keyof typeof ProgramType;
    in?: Array<keyof typeof ProgramType>;
    notIn?: Array<keyof typeof ProgramType>;
    not?: InstanceType<typeof NestedEnumProgramTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumProgramTypeFilter>;
    _max?: InstanceType<typeof NestedEnumProgramTypeFilter>;
}
export declare class NestedEnumRoleTypeNullableFilter {
    equals?: keyof typeof RoleType;
    in?: Array<keyof typeof RoleType>;
    notIn?: Array<keyof typeof RoleType>;
    not?: InstanceType<typeof NestedEnumRoleTypeNullableFilter>;
}
export declare class NestedEnumRoleTypeNullableWithAggregatesFilter {
    equals?: keyof typeof RoleType;
    in?: Array<keyof typeof RoleType>;
    notIn?: Array<keyof typeof RoleType>;
    not?: InstanceType<typeof NestedEnumRoleTypeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumRoleTypeNullableFilter>;
    _max?: InstanceType<typeof NestedEnumRoleTypeNullableFilter>;
}
export declare class NestedEnumSantunanHarianRawatInapPlanFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanFilter>;
}
export declare class NestedEnumSantunanHarianRawatInapPlanNullableFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableFilter>;
}
export declare class NestedEnumSantunanHarianRawatInapPlanNullableWithAggregatesFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableFilter>;
    _max?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanNullableFilter>;
}
export declare class NestedEnumSantunanHarianRawatInapPlanWithAggregatesFilter {
    equals?: keyof typeof SantunanHarianRawatInapPlan;
    in?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    notIn?: Array<keyof typeof SantunanHarianRawatInapPlan>;
    not?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanFilter>;
    _max?: InstanceType<typeof NestedEnumSantunanHarianRawatInapPlanFilter>;
}
export declare class NestedEnumTambahanBantuanRawatInapTypeNullableFilter {
    equals?: keyof typeof TambahanBantuanRawatInapType;
    in?: Array<keyof typeof TambahanBantuanRawatInapType>;
    notIn?: Array<keyof typeof TambahanBantuanRawatInapType>;
    not?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableFilter>;
}
export declare class NestedEnumTambahanBantuanRawatInapTypeNullableWithAggregatesFilter {
    equals?: keyof typeof TambahanBantuanRawatInapType;
    in?: Array<keyof typeof TambahanBantuanRawatInapType>;
    notIn?: Array<keyof typeof TambahanBantuanRawatInapType>;
    not?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableFilter>;
    _max?: InstanceType<typeof NestedEnumTambahanBantuanRawatInapTypeNullableFilter>;
}
export declare class NestedEnumTransactionTypeFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class NestedEnumTransactionTypeWithAggregatesFilter {
    equals?: keyof typeof TransactionType;
    in?: Array<keyof typeof TransactionType>;
    notIn?: Array<keyof typeof TransactionType>;
    not?: InstanceType<typeof NestedEnumTransactionTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
    _max?: InstanceType<typeof NestedEnumTransactionTypeFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedFloatNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedFloatNullableFilter>;
    _min?: InstanceType<typeof NestedFloatNullableFilter>;
    _max?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedFloatWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedFloatFilter>;
    _min?: InstanceType<typeof NestedFloatFilter>;
    _max?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class NullableEnumPeriodFieldUpdateOperationsInput {
    set?: keyof typeof Period;
}
export declare class NullableEnumRoleTypeFieldUpdateOperationsInput {
    set?: keyof typeof RoleType;
}
export declare class NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput {
    set?: keyof typeof SantunanHarianRawatInapPlan;
}
export declare class NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput {
    set?: keyof typeof TambahanBantuanRawatInapType;
}
export declare class NullableFloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableIntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateProgram {
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class CreateManyProgramArgs {
    data: Array<ProgramCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProgramArgs {
    data: InstanceType<typeof ProgramCreateInput>;
}
export declare class DeleteManyProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class DeleteOneProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class FindFirstProgramOrThrowArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindFirstProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindManyProgramArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
export declare class FindUniqueProgramOrThrowArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class ProgramAggregateArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumAggregateInput>;
    _min?: InstanceType<typeof ProgramMinAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxAggregateInput>;
}
export declare class ProgramAvgAggregateInput {
    id?: true;
    maxAllowancePercentage?: true;
    allowanceCeiling?: true;
    allowanceQuota?: true;
    claimPeriodMax?: true;
    reclaimPeriodMax?: true;
}
export declare class ProgramAvgAggregate {
    id?: number;
    maxAllowancePercentage?: number;
    allowanceCeiling?: number;
    allowanceQuota?: number;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
}
export declare class ProgramAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    maxAllowancePercentage?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceQuota?: keyof typeof SortOrder;
    claimPeriodMax?: keyof typeof SortOrder;
    reclaimPeriodMax?: keyof typeof SortOrder;
}
export declare class ProgramCountAggregateInput {
    id?: true;
    type?: true;
    santunanHarianRawatInapPlan?: true;
    tambahanBantuanRawatInapType?: true;
    maxAllowancePercentage?: true;
    allowanceCeiling?: true;
    allowanceCeilingPeriod?: true;
    allowanceQuota?: true;
    allowanceQuotaPeriod?: true;
    claimPeriodMax?: true;
    reclaimPeriodMax?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
}
export declare class ProgramCountAggregate {
    id: number;
    type: number;
    santunanHarianRawatInapPlan: number;
    tambahanBantuanRawatInapType: number;
    maxAllowancePercentage: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod: number;
    allowanceQuota: number;
    allowanceQuotaPeriod: number;
    claimPeriodMax: number;
    reclaimPeriodMax: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
}
export declare class ProgramCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    tambahanBantuanRawatInapType?: keyof typeof SortOrder;
    maxAllowancePercentage?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceCeilingPeriod?: keyof typeof SortOrder;
    allowanceQuota?: keyof typeof SortOrder;
    allowanceQuotaPeriod?: keyof typeof SortOrder;
    claimPeriodMax?: keyof typeof SortOrder;
    reclaimPeriodMax?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
}
export declare class ProgramCount {
    programParticipations?: number;
    claimProgram?: number;
}
export declare class ProgramCreateManyInput {
    id?: number;
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare class ProgramCreateNestedManyWithoutProgramParticipationsInput {
    create?: Array<ProgramCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutProgramParticipationsInput>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramCreateNestedOneWithoutClaimProgramInput {
    create?: InstanceType<typeof ProgramCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutClaimProgramInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class ProgramCreateOrConnectWithoutClaimProgramInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutClaimProgramInput>;
}
export declare class ProgramCreateOrConnectWithoutProgramParticipationsInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutProgramParticipationsInput>;
}
export declare class ProgramCreateWithoutClaimProgramInput {
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutProgramsInput>;
}
export declare class ProgramCreateWithoutProgramParticipationsInput {
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    claimProgram?: InstanceType<typeof ClaimProgramCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramCreateInput {
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutProgramsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramGroupByArgs {
    where?: InstanceType<typeof ProgramWhereInput>;
    orderBy?: Array<ProgramOrderByWithAggregationInput>;
    by: Array<keyof typeof ProgramScalarFieldEnum>;
    having?: InstanceType<typeof ProgramScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumAggregateInput>;
    _min?: InstanceType<typeof ProgramMinAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxAggregateInput>;
}
export declare class ProgramGroupBy {
    id: number;
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class ProgramListRelationFilter {
    every?: InstanceType<typeof ProgramWhereInput>;
    some?: InstanceType<typeof ProgramWhereInput>;
    none?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramMaxAggregateInput {
    id?: true;
    type?: true;
    santunanHarianRawatInapPlan?: true;
    tambahanBantuanRawatInapType?: true;
    maxAllowancePercentage?: true;
    allowanceCeiling?: true;
    allowanceCeilingPeriod?: true;
    allowanceQuota?: true;
    allowanceQuotaPeriod?: true;
    claimPeriodMax?: true;
    reclaimPeriodMax?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
}
export declare class ProgramMaxAggregate {
    id?: number;
    type?: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling?: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare class ProgramMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    tambahanBantuanRawatInapType?: keyof typeof SortOrder;
    maxAllowancePercentage?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceCeilingPeriod?: keyof typeof SortOrder;
    allowanceQuota?: keyof typeof SortOrder;
    allowanceQuotaPeriod?: keyof typeof SortOrder;
    claimPeriodMax?: keyof typeof SortOrder;
    reclaimPeriodMax?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
}
export declare class ProgramMinAggregateInput {
    id?: true;
    type?: true;
    santunanHarianRawatInapPlan?: true;
    tambahanBantuanRawatInapType?: true;
    maxAllowancePercentage?: true;
    allowanceCeiling?: true;
    allowanceCeilingPeriod?: true;
    allowanceQuota?: true;
    allowanceQuotaPeriod?: true;
    claimPeriodMax?: true;
    reclaimPeriodMax?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
}
export declare class ProgramMinAggregate {
    id?: number;
    type?: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling?: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare class ProgramMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    tambahanBantuanRawatInapType?: keyof typeof SortOrder;
    maxAllowancePercentage?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceCeilingPeriod?: keyof typeof SortOrder;
    allowanceQuota?: keyof typeof SortOrder;
    allowanceQuotaPeriod?: keyof typeof SortOrder;
    claimPeriodMax?: keyof typeof SortOrder;
    reclaimPeriodMax?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
}
export declare class ProgramOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProgramOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: InstanceType<typeof SortOrderInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof SortOrderInput>;
    maxAllowancePercentage?: InstanceType<typeof SortOrderInput>;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceCeilingPeriod?: InstanceType<typeof SortOrderInput>;
    allowanceQuota?: InstanceType<typeof SortOrderInput>;
    allowanceQuotaPeriod?: InstanceType<typeof SortOrderInput>;
    claimPeriodMax?: InstanceType<typeof SortOrderInput>;
    reclaimPeriodMax?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ProgramCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumOrderByAggregateInput>;
}
export declare class ProgramOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: InstanceType<typeof SortOrderInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof SortOrderInput>;
    maxAllowancePercentage?: InstanceType<typeof SortOrderInput>;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceCeilingPeriod?: InstanceType<typeof SortOrderInput>;
    allowanceQuota?: InstanceType<typeof SortOrderInput>;
    allowanceQuotaPeriod?: InstanceType<typeof SortOrderInput>;
    claimPeriodMax?: InstanceType<typeof SortOrderInput>;
    reclaimPeriodMax?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationOrderByRelationAggregateInput>;
    claimProgram?: InstanceType<typeof ClaimProgramOrderByRelationAggregateInput>;
}
export declare class ProgramRelationFilter {
    is?: InstanceType<typeof ProgramWhereInput>;
    isNot?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramScalarWhereWithAggregatesInput {
    AND?: Array<ProgramScalarWhereWithAggregatesInput>;
    OR?: Array<ProgramScalarWhereWithAggregatesInput>;
    NOT?: Array<ProgramScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    type?: InstanceType<typeof EnumProgramTypeWithAggregatesFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanNullableWithAggregatesFilter>;
    tambahanBantuanRawatInapType?: InstanceType<typeof EnumTambahanBantuanRawatInapTypeNullableWithAggregatesFilter>;
    maxAllowancePercentage?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    allowanceCeiling?: InstanceType<typeof FloatWithAggregatesFilter>;
    allowanceCeilingPeriod?: InstanceType<typeof EnumPeriodNullableWithAggregatesFilter>;
    allowanceQuota?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    allowanceQuotaPeriod?: InstanceType<typeof EnumPeriodNullableWithAggregatesFilter>;
    claimPeriodMax?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    reclaimPeriodMax?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class ProgramScalarWhereInput {
    AND?: Array<ProgramScalarWhereInput>;
    OR?: Array<ProgramScalarWhereInput>;
    NOT?: Array<ProgramScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    type?: InstanceType<typeof EnumProgramTypeFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanNullableFilter>;
    tambahanBantuanRawatInapType?: InstanceType<typeof EnumTambahanBantuanRawatInapTypeNullableFilter>;
    maxAllowancePercentage?: InstanceType<typeof IntNullableFilter>;
    allowanceCeiling?: InstanceType<typeof FloatFilter>;
    allowanceCeilingPeriod?: InstanceType<typeof EnumPeriodNullableFilter>;
    allowanceQuota?: InstanceType<typeof IntNullableFilter>;
    allowanceQuotaPeriod?: InstanceType<typeof EnumPeriodNullableFilter>;
    claimPeriodMax?: InstanceType<typeof IntNullableFilter>;
    reclaimPeriodMax?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class ProgramSumAggregateInput {
    id?: true;
    maxAllowancePercentage?: true;
    allowanceCeiling?: true;
    allowanceQuota?: true;
    claimPeriodMax?: true;
    reclaimPeriodMax?: true;
}
export declare class ProgramSumAggregate {
    id?: number;
    maxAllowancePercentage?: number;
    allowanceCeiling?: number;
    allowanceQuota?: number;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
}
export declare class ProgramSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    maxAllowancePercentage?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    allowanceQuota?: keyof typeof SortOrder;
    claimPeriodMax?: keyof typeof SortOrder;
    reclaimPeriodMax?: keyof typeof SortOrder;
}
export declare class ProgramUncheckedCreateNestedManyWithoutProgramParticipationsInput {
    create?: Array<ProgramCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutProgramParticipationsInput>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
}
export declare class ProgramUncheckedCreateWithoutClaimProgramInput {
    id?: number;
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutProgramsInput>;
}
export declare class ProgramUncheckedCreateWithoutProgramParticipationsInput {
    id?: number;
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramUncheckedCreateInput {
    id?: number;
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    tambahanBantuanRawatInapType?: keyof typeof TambahanBantuanRawatInapType;
    maxAllowancePercentage?: number;
    allowanceCeiling: number;
    allowanceCeilingPeriod?: keyof typeof Period;
    allowanceQuota?: number;
    allowanceQuotaPeriod?: keyof typeof Period;
    claimPeriodMax?: number;
    reclaimPeriodMax?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutProgramsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutProgramParticipationsNestedInput {
    create?: Array<ProgramCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutProgramParticipationsInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutProgramParticipationsInput>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutProgramParticipationsInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutProgramParticipationsInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUncheckedUpdateManyWithoutProgramParticipationsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateWithoutClaimProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutProgramsNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutProgramParticipationsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutProgramsNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUncheckedUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpdateManyMutationInput {
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramUpdateManyWithWhereWithoutProgramParticipationsInput {
    where: InstanceType<typeof ProgramScalarWhereInput>;
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
}
export declare class ProgramUpdateManyWithoutProgramParticipationsNestedInput {
    create?: Array<ProgramCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: Array<ProgramCreateOrConnectWithoutProgramParticipationsInput>;
    upsert?: Array<ProgramUpsertWithWhereUniqueWithoutProgramParticipationsInput>;
    set?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>>;
    update?: Array<ProgramUpdateWithWhereUniqueWithoutProgramParticipationsInput>;
    updateMany?: Array<ProgramUpdateManyWithWhereWithoutProgramParticipationsInput>;
    deleteMany?: Array<ProgramScalarWhereInput>;
}
export declare class ProgramUpdateOneRequiredWithoutClaimProgramNestedInput {
    create?: InstanceType<typeof ProgramCreateWithoutClaimProgramInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutClaimProgramInput>;
    upsert?: InstanceType<typeof ProgramUpsertWithoutClaimProgramInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramUpdateToOneWithWhereWithoutClaimProgramInput>;
}
export declare class ProgramUpdateToOneWithWhereWithoutClaimProgramInput {
    where?: InstanceType<typeof ProgramWhereInput>;
    data: InstanceType<typeof ProgramUpdateWithoutClaimProgramInput>;
}
export declare class ProgramUpdateWithWhereUniqueWithoutProgramParticipationsInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramUpdateWithoutProgramParticipationsInput>;
}
export declare class ProgramUpdateWithoutClaimProgramInput {
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutProgramsNestedInput>;
}
export declare class ProgramUpdateWithoutProgramParticipationsInput {
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpdateInput {
    type?: InstanceType<typeof EnumProgramTypeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof NullableEnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    tambahanBantuanRawatInapType?: InstanceType<typeof NullableEnumTambahanBantuanRawatInapTypeFieldUpdateOperationsInput>;
    maxAllowancePercentage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    allowanceCeilingPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    allowanceQuota?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    allowanceQuotaPeriod?: InstanceType<typeof NullableEnumPeriodFieldUpdateOperationsInput>;
    claimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    reclaimPeriodMax?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutProgramsNestedInput>;
    claimProgram?: InstanceType<typeof ClaimProgramUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpsertWithWhereUniqueWithoutProgramParticipationsInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramUpdateWithoutProgramParticipationsInput>;
    create: InstanceType<typeof ProgramCreateWithoutProgramParticipationsInput>;
}
export declare class ProgramUpsertWithoutClaimProgramInput {
    update: InstanceType<typeof ProgramUpdateWithoutClaimProgramInput>;
    create: InstanceType<typeof ProgramCreateWithoutClaimProgramInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramWhereUniqueInput {
    id?: number;
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    type?: InstanceType<typeof EnumProgramTypeFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanNullableFilter>;
    tambahanBantuanRawatInapType?: InstanceType<typeof EnumTambahanBantuanRawatInapTypeNullableFilter>;
    maxAllowancePercentage?: InstanceType<typeof IntNullableFilter>;
    allowanceCeiling?: InstanceType<typeof FloatFilter>;
    allowanceCeilingPeriod?: InstanceType<typeof EnumPeriodNullableFilter>;
    allowanceQuota?: InstanceType<typeof IntNullableFilter>;
    allowanceQuotaPeriod?: InstanceType<typeof EnumPeriodNullableFilter>;
    claimPeriodMax?: InstanceType<typeof IntNullableFilter>;
    reclaimPeriodMax?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    programParticipations?: InstanceType<typeof ProgramParticipationListRelationFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramListRelationFilter>;
}
export declare class ProgramWhereInput {
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    type?: InstanceType<typeof EnumProgramTypeFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanNullableFilter>;
    tambahanBantuanRawatInapType?: InstanceType<typeof EnumTambahanBantuanRawatInapTypeNullableFilter>;
    maxAllowancePercentage?: InstanceType<typeof IntNullableFilter>;
    allowanceCeiling?: InstanceType<typeof FloatFilter>;
    allowanceCeilingPeriod?: InstanceType<typeof EnumPeriodNullableFilter>;
    allowanceQuota?: InstanceType<typeof IntNullableFilter>;
    allowanceQuotaPeriod?: InstanceType<typeof EnumPeriodNullableFilter>;
    claimPeriodMax?: InstanceType<typeof IntNullableFilter>;
    reclaimPeriodMax?: InstanceType<typeof IntNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    programParticipations?: InstanceType<typeof ProgramParticipationListRelationFilter>;
    claimProgram?: InstanceType<typeof ClaimProgramListRelationFilter>;
}
export declare class Program {
    id: number;
    type: keyof typeof ProgramType;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan | null;
    tambahanBantuanRawatInapType: keyof typeof TambahanBantuanRawatInapType | null;
    maxAllowancePercentage: number | null;
    allowanceCeiling: number;
    allowanceCeilingPeriod: keyof typeof Period | null;
    allowanceQuota: number | null;
    allowanceQuotaPeriod: keyof typeof Period | null;
    claimPeriodMax: number | null;
    reclaimPeriodMax: number | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    programParticipations?: Array<ProgramParticipation>;
    claimProgram?: Array<ClaimProgram>;
    _count?: InstanceType<typeof ProgramCount>;
}
export declare class UpdateManyProgramArgs {
    data: InstanceType<typeof ProgramUpdateManyMutationInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class UpdateOneProgramArgs {
    data: InstanceType<typeof ProgramUpdateInput>;
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProgramArgs {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateInput>;
    update: InstanceType<typeof ProgramUpdateInput>;
}
export declare class AggregateProgramParticipation {
    _count?: InstanceType<typeof ProgramParticipationCountAggregate>;
    _avg?: InstanceType<typeof ProgramParticipationAvgAggregate>;
    _sum?: InstanceType<typeof ProgramParticipationSumAggregate>;
    _min?: InstanceType<typeof ProgramParticipationMinAggregate>;
    _max?: InstanceType<typeof ProgramParticipationMaxAggregate>;
}
export declare class CreateManyProgramParticipationArgs {
    data: Array<ProgramParticipationCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProgramParticipationArgs {
    data: InstanceType<typeof ProgramParticipationCreateInput>;
}
export declare class DeleteManyProgramParticipationArgs {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
}
export declare class DeleteOneProgramParticipationArgs {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
}
export declare class FindFirstProgramParticipationOrThrowArgs {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
    orderBy?: Array<ProgramParticipationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramParticipationScalarFieldEnum>;
}
export declare class FindFirstProgramParticipationArgs {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
    orderBy?: Array<ProgramParticipationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramParticipationScalarFieldEnum>;
}
export declare class FindManyProgramParticipationArgs {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
    orderBy?: Array<ProgramParticipationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProgramParticipationScalarFieldEnum>;
}
export declare class FindUniqueProgramParticipationOrThrowArgs {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
}
export declare class FindUniqueProgramParticipationArgs {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
}
export declare class ProgramParticipationAggregateArgs {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
    orderBy?: Array<ProgramParticipationOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramParticipationCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramParticipationAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramParticipationSumAggregateInput>;
    _min?: InstanceType<typeof ProgramParticipationMinAggregateInput>;
    _max?: InstanceType<typeof ProgramParticipationMaxAggregateInput>;
}
export declare class ProgramParticipationAvgAggregateInput {
    id?: true;
    fundingId?: true;
}
export declare class ProgramParticipationAvgAggregate {
    id?: number;
    fundingId?: number;
}
export declare class ProgramParticipationAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationCountAggregateInput {
    id?: true;
    bpjsNumber?: true;
    nonActiveReason?: true;
    effectiveDate?: true;
    nonActiveDate?: true;
    santunanHarianRawatInapPlan?: true;
    fundingId?: true;
    _all?: true;
}
export declare class ProgramParticipationCountAggregate {
    id: number;
    bpjsNumber: number;
    nonActiveReason: number;
    effectiveDate: number;
    nonActiveDate: number;
    santunanHarianRawatInapPlan: number;
    fundingId: number;
    _all: number;
}
export declare class ProgramParticipationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: keyof typeof SortOrder;
    nonActiveReason?: keyof typeof SortOrder;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationCount {
    programs?: number;
}
export declare class ProgramParticipationCreateManyFundingInputEnvelope {
    data: Array<ProgramParticipationCreateManyFundingInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramParticipationCreateManyFundingInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
}
export declare class ProgramParticipationCreateManyInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
}
export declare class ProgramParticipationCreateNestedManyWithoutFundingInput {
    create?: Array<ProgramParticipationCreateWithoutFundingInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutFundingInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyFundingInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationCreateNestedManyWithoutProgramsInput {
    create?: Array<ProgramParticipationCreateWithoutProgramsInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramsInput>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof ProgramParticipationCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ProgramParticipationCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
}
export declare class ProgramParticipationCreateOrConnectWithoutFundingInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutFundingInput>;
}
export declare class ProgramParticipationCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutParticipantInput>;
}
export declare class ProgramParticipationCreateOrConnectWithoutProgramsInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutProgramsInput>;
}
export declare class ProgramParticipationCreateWithoutFundingInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutProgramParticipationInput>;
    programs?: InstanceType<typeof ProgramCreateNestedManyWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationCreateWithoutParticipantInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    funding?: InstanceType<typeof AccountCreateNestedOneWithoutProgramParticipationInput>;
    programs?: InstanceType<typeof ProgramCreateNestedManyWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationCreateWithoutProgramsInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutProgramParticipationInput>;
    funding?: InstanceType<typeof AccountCreateNestedOneWithoutProgramParticipationInput>;
}
export declare class ProgramParticipationCreateInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutProgramParticipationInput>;
    funding?: InstanceType<typeof AccountCreateNestedOneWithoutProgramParticipationInput>;
    programs?: InstanceType<typeof ProgramCreateNestedManyWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationGroupByArgs {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
    orderBy?: Array<ProgramParticipationOrderByWithAggregationInput>;
    by: Array<keyof typeof ProgramParticipationScalarFieldEnum>;
    having?: InstanceType<typeof ProgramParticipationScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProgramParticipationCountAggregateInput>;
    _avg?: InstanceType<typeof ProgramParticipationAvgAggregateInput>;
    _sum?: InstanceType<typeof ProgramParticipationSumAggregateInput>;
    _min?: InstanceType<typeof ProgramParticipationMinAggregateInput>;
    _max?: InstanceType<typeof ProgramParticipationMaxAggregateInput>;
}
export declare class ProgramParticipationGroupBy {
    id: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
    _count?: InstanceType<typeof ProgramParticipationCountAggregate>;
    _avg?: InstanceType<typeof ProgramParticipationAvgAggregate>;
    _sum?: InstanceType<typeof ProgramParticipationSumAggregate>;
    _min?: InstanceType<typeof ProgramParticipationMinAggregate>;
    _max?: InstanceType<typeof ProgramParticipationMaxAggregate>;
}
export declare class ProgramParticipationListRelationFilter {
    every?: InstanceType<typeof ProgramParticipationWhereInput>;
    some?: InstanceType<typeof ProgramParticipationWhereInput>;
    none?: InstanceType<typeof ProgramParticipationWhereInput>;
}
export declare class ProgramParticipationMaxAggregateInput {
    id?: true;
    bpjsNumber?: true;
    nonActiveReason?: true;
    effectiveDate?: true;
    nonActiveDate?: true;
    santunanHarianRawatInapPlan?: true;
    fundingId?: true;
}
export declare class ProgramParticipationMaxAggregate {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate?: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
}
export declare class ProgramParticipationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: keyof typeof SortOrder;
    nonActiveReason?: keyof typeof SortOrder;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationMinAggregateInput {
    id?: true;
    bpjsNumber?: true;
    nonActiveReason?: true;
    effectiveDate?: true;
    nonActiveDate?: true;
    santunanHarianRawatInapPlan?: true;
    fundingId?: true;
}
export declare class ProgramParticipationMinAggregate {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate?: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan?: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
}
export declare class ProgramParticipationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: keyof typeof SortOrder;
    nonActiveReason?: keyof typeof SortOrder;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: keyof typeof SortOrder;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ProgramParticipationOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: InstanceType<typeof SortOrderInput>;
    nonActiveReason?: InstanceType<typeof SortOrderInput>;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: InstanceType<typeof SortOrderInput>;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    fundingId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ProgramParticipationCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramParticipationAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramParticipationMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramParticipationMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramParticipationSumOrderByAggregateInput>;
}
export declare class ProgramParticipationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: InstanceType<typeof SortOrderInput>;
    nonActiveReason?: InstanceType<typeof SortOrderInput>;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: InstanceType<typeof SortOrderInput>;
    santunanHarianRawatInapPlan?: keyof typeof SortOrder;
    fundingId?: InstanceType<typeof SortOrderInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    funding?: InstanceType<typeof AccountOrderByWithRelationInput>;
    programs?: InstanceType<typeof ProgramOrderByRelationAggregateInput>;
}
export declare class ProgramParticipationRelationFilter {
    is?: InstanceType<typeof ProgramParticipationWhereInput>;
    isNot?: InstanceType<typeof ProgramParticipationWhereInput>;
}
export declare class ProgramParticipationScalarWhereWithAggregatesInput {
    AND?: Array<ProgramParticipationScalarWhereWithAggregatesInput>;
    OR?: Array<ProgramParticipationScalarWhereWithAggregatesInput>;
    NOT?: Array<ProgramParticipationScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    bpjsNumber?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    nonActiveReason?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    effectiveDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    nonActiveDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanWithAggregatesFilter>;
    fundingId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class ProgramParticipationScalarWhereInput {
    AND?: Array<ProgramParticipationScalarWhereInput>;
    OR?: Array<ProgramParticipationScalarWhereInput>;
    NOT?: Array<ProgramParticipationScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    bpjsNumber?: InstanceType<typeof StringNullableFilter>;
    nonActiveReason?: InstanceType<typeof StringNullableFilter>;
    effectiveDate?: InstanceType<typeof DateTimeFilter>;
    nonActiveDate?: InstanceType<typeof DateTimeNullableFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFilter>;
    fundingId?: InstanceType<typeof IntNullableFilter>;
}
export declare class ProgramParticipationSumAggregateInput {
    id?: true;
    fundingId?: true;
}
export declare class ProgramParticipationSumAggregate {
    id?: number;
    fundingId?: number;
}
export declare class ProgramParticipationSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput {
    create?: Array<ProgramParticipationCreateWithoutFundingInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutFundingInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyFundingInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationUncheckedCreateNestedManyWithoutProgramsInput {
    create?: Array<ProgramParticipationCreateWithoutProgramsInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramsInput>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationUncheckedCreateWithoutFundingInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutProgramParticipationInput>;
    programs?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationUncheckedCreateWithoutParticipantInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
    programs?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationUncheckedCreateWithoutProgramsInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutProgramParticipationInput>;
}
export declare class ProgramParticipationUncheckedCreateInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    fundingId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutProgramParticipationInput>;
    programs?: InstanceType<typeof ProgramUncheckedCreateNestedManyWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutFundingNestedInput {
    create?: Array<ProgramParticipationCreateWithoutFundingInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutFundingInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutFundingInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyFundingInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutFundingInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutFundingInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutFundingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutProgramsNestedInput {
    create?: Array<ProgramParticipationCreateWithoutProgramsInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramsInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutProgramsInput>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutProgramsInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutProgramsInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutProgramsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateWithoutFundingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutProgramParticipationNestedInput>;
    programs?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    programs?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUncheckedUpdateWithoutProgramsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutProgramParticipationNestedInput>;
}
export declare class ProgramParticipationUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutProgramParticipationNestedInput>;
    programs?: InstanceType<typeof ProgramUncheckedUpdateManyWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpdateManyMutationInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUpdateManyWithWhereWithoutFundingInput {
    where: InstanceType<typeof ProgramParticipationScalarWhereInput>;
    data: InstanceType<typeof ProgramParticipationUpdateManyMutationInput>;
}
export declare class ProgramParticipationUpdateManyWithWhereWithoutProgramsInput {
    where: InstanceType<typeof ProgramParticipationScalarWhereInput>;
    data: InstanceType<typeof ProgramParticipationUpdateManyMutationInput>;
}
export declare class ProgramParticipationUpdateManyWithoutFundingNestedInput {
    create?: Array<ProgramParticipationCreateWithoutFundingInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutFundingInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutFundingInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyFundingInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutFundingInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutFundingInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUpdateManyWithoutProgramsNestedInput {
    create?: Array<ProgramParticipationCreateWithoutProgramsInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramsInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutProgramsInput>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutProgramsInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutProgramsInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUpdateOneRequiredWithoutParticipantNestedInput {
    create?: InstanceType<typeof ProgramParticipationCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ProgramParticipationCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof ProgramParticipationUpsertWithoutParticipantInput>;
    connect?: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramParticipationUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class ProgramParticipationUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
    data: InstanceType<typeof ProgramParticipationUpdateWithoutParticipantInput>;
}
export declare class ProgramParticipationUpdateWithWhereUniqueWithoutFundingInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramParticipationUpdateWithoutFundingInput>;
}
export declare class ProgramParticipationUpdateWithWhereUniqueWithoutProgramsInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramParticipationUpdateWithoutProgramsInput>;
}
export declare class ProgramParticipationUpdateWithoutFundingInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutProgramParticipationNestedInput>;
    programs?: InstanceType<typeof ProgramUpdateManyWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpdateWithoutParticipantInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    funding?: InstanceType<typeof AccountUpdateOneWithoutProgramParticipationNestedInput>;
    programs?: InstanceType<typeof ProgramUpdateManyWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpdateWithoutProgramsInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutProgramParticipationNestedInput>;
    funding?: InstanceType<typeof AccountUpdateOneWithoutProgramParticipationNestedInput>;
}
export declare class ProgramParticipationUpdateInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutProgramParticipationNestedInput>;
    funding?: InstanceType<typeof AccountUpdateOneWithoutProgramParticipationNestedInput>;
    programs?: InstanceType<typeof ProgramUpdateManyWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpsertWithWhereUniqueWithoutFundingInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramParticipationUpdateWithoutFundingInput>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutFundingInput>;
}
export declare class ProgramParticipationUpsertWithWhereUniqueWithoutProgramsInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramParticipationUpdateWithoutProgramsInput>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutProgramsInput>;
}
export declare class ProgramParticipationUpsertWithoutParticipantInput {
    update: InstanceType<typeof ProgramParticipationUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutParticipantInput>;
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
}
export declare class ProgramParticipationWhereUniqueInput {
    id?: number;
    AND?: Array<ProgramParticipationWhereInput>;
    OR?: Array<ProgramParticipationWhereInput>;
    NOT?: Array<ProgramParticipationWhereInput>;
    bpjsNumber?: InstanceType<typeof StringNullableFilter>;
    nonActiveReason?: InstanceType<typeof StringNullableFilter>;
    effectiveDate?: InstanceType<typeof DateTimeFilter>;
    nonActiveDate?: InstanceType<typeof DateTimeNullableFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFilter>;
    fundingId?: InstanceType<typeof IntNullableFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    funding?: InstanceType<typeof AccountNullableRelationFilter>;
    programs?: InstanceType<typeof ProgramListRelationFilter>;
}
export declare class ProgramParticipationWhereInput {
    AND?: Array<ProgramParticipationWhereInput>;
    OR?: Array<ProgramParticipationWhereInput>;
    NOT?: Array<ProgramParticipationWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    bpjsNumber?: InstanceType<typeof StringNullableFilter>;
    nonActiveReason?: InstanceType<typeof StringNullableFilter>;
    effectiveDate?: InstanceType<typeof DateTimeFilter>;
    nonActiveDate?: InstanceType<typeof DateTimeNullableFilter>;
    santunanHarianRawatInapPlan?: InstanceType<typeof EnumSantunanHarianRawatInapPlanFilter>;
    fundingId?: InstanceType<typeof IntNullableFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    funding?: InstanceType<typeof AccountNullableRelationFilter>;
    programs?: InstanceType<typeof ProgramListRelationFilter>;
}
export declare class ProgramParticipation {
    id: number;
    bpjsNumber: string | null;
    nonActiveReason: string | null;
    effectiveDate: Date;
    nonActiveDate: Date | null;
    santunanHarianRawatInapPlan: keyof typeof SantunanHarianRawatInapPlan;
    fundingId: number | null;
    participant?: InstanceType<typeof Participant> | null;
    funding?: InstanceType<typeof Account> | null;
    programs?: Array<Program>;
    _count?: InstanceType<typeof ProgramParticipationCount>;
}
export declare class UpdateManyProgramParticipationArgs {
    data: InstanceType<typeof ProgramParticipationUpdateManyMutationInput>;
    where?: InstanceType<typeof ProgramParticipationWhereInput>;
}
export declare class UpdateOneProgramParticipationArgs {
    data: InstanceType<typeof ProgramParticipationUpdateInput>;
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
}
export declare class UpsertOneProgramParticipationArgs {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateInput>;
    update: InstanceType<typeof ProgramParticipationUpdateInput>;
}
export declare class AggregateProvince {
    _count?: InstanceType<typeof ProvinceCountAggregate>;
    _avg?: InstanceType<typeof ProvinceAvgAggregate>;
    _sum?: InstanceType<typeof ProvinceSumAggregate>;
    _min?: InstanceType<typeof ProvinceMinAggregate>;
    _max?: InstanceType<typeof ProvinceMaxAggregate>;
}
export declare class CreateManyProvinceArgs {
    data: Array<ProvinceCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneProvinceArgs {
    data: InstanceType<typeof ProvinceCreateInput>;
}
export declare class DeleteManyProvinceArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class DeleteOneProvinceArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindFirstProvinceOrThrowArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
export declare class FindFirstProvinceArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
export declare class FindManyProvinceArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ProvinceScalarFieldEnum>;
}
export declare class FindUniqueProvinceOrThrowArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindUniqueProvinceArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class ProvinceAggregateArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProvinceCountAggregateInput>;
    _avg?: InstanceType<typeof ProvinceAvgAggregateInput>;
    _sum?: InstanceType<typeof ProvinceSumAggregateInput>;
    _min?: InstanceType<typeof ProvinceMinAggregateInput>;
    _max?: InstanceType<typeof ProvinceMaxAggregateInput>;
}
export declare class ProvinceAvgAggregateInput {
    id?: true;
}
export declare class ProvinceAvgAggregate {
    id?: number;
}
export declare class ProvinceAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProvinceCountAggregateInput {
    id?: true;
    name?: true;
    _all?: true;
}
export declare class ProvinceCountAggregate {
    id: number;
    name: number;
    _all: number;
}
export declare class ProvinceCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ProvinceCount {
    cities?: number;
}
export declare class ProvinceCreateManyInput {
    id?: number;
    name: string;
}
export declare class ProvinceCreateNestedOneWithoutCitiesInput {
    create?: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
    connectOrCreate?: InstanceType<typeof ProvinceCreateOrConnectWithoutCitiesInput>;
    connect?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class ProvinceCreateOrConnectWithoutCitiesInput {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
}
export declare class ProvinceCreateWithoutCitiesInput {
    name: string;
}
export declare class ProvinceCreateInput {
    name: string;
    cities?: InstanceType<typeof CityCreateNestedManyWithoutProvinceInput>;
}
export declare class ProvinceGroupByArgs {
    where?: InstanceType<typeof ProvinceWhereInput>;
    orderBy?: Array<ProvinceOrderByWithAggregationInput>;
    by: Array<keyof typeof ProvinceScalarFieldEnum>;
    having?: InstanceType<typeof ProvinceScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ProvinceCountAggregateInput>;
    _avg?: InstanceType<typeof ProvinceAvgAggregateInput>;
    _sum?: InstanceType<typeof ProvinceSumAggregateInput>;
    _min?: InstanceType<typeof ProvinceMinAggregateInput>;
    _max?: InstanceType<typeof ProvinceMaxAggregateInput>;
}
export declare class ProvinceGroupBy {
    id: number;
    name: string;
    _count?: InstanceType<typeof ProvinceCountAggregate>;
    _avg?: InstanceType<typeof ProvinceAvgAggregate>;
    _sum?: InstanceType<typeof ProvinceSumAggregate>;
    _min?: InstanceType<typeof ProvinceMinAggregate>;
    _max?: InstanceType<typeof ProvinceMaxAggregate>;
}
export declare class ProvinceMaxAggregateInput {
    id?: true;
    name?: true;
}
export declare class ProvinceMaxAggregate {
    id?: number;
    name?: string;
}
export declare class ProvinceMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ProvinceMinAggregateInput {
    id?: true;
    name?: true;
}
export declare class ProvinceMinAggregate {
    id?: number;
    name?: string;
}
export declare class ProvinceMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ProvinceOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProvinceCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProvinceAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProvinceMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProvinceMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProvinceSumOrderByAggregateInput>;
}
export declare class ProvinceOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    cities?: InstanceType<typeof CityOrderByRelationAggregateInput>;
}
export declare class ProvinceRelationFilter {
    is?: InstanceType<typeof ProvinceWhereInput>;
    isNot?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class ProvinceScalarWhereWithAggregatesInput {
    AND?: Array<ProvinceScalarWhereWithAggregatesInput>;
    OR?: Array<ProvinceScalarWhereWithAggregatesInput>;
    NOT?: Array<ProvinceScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class ProvinceSumAggregateInput {
    id?: true;
}
export declare class ProvinceSumAggregate {
    id?: number;
}
export declare class ProvinceSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ProvinceUncheckedCreateWithoutCitiesInput {
    id?: number;
    name: string;
}
export declare class ProvinceUncheckedCreateInput {
    id?: number;
    name: string;
    cities?: InstanceType<typeof CityUncheckedCreateNestedManyWithoutProvinceInput>;
}
export declare class ProvinceUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUncheckedUpdateWithoutCitiesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cities?: InstanceType<typeof CityUncheckedUpdateManyWithoutProvinceNestedInput>;
}
export declare class ProvinceUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUpdateOneRequiredWithoutCitiesNestedInput {
    create?: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
    connectOrCreate?: InstanceType<typeof ProvinceCreateOrConnectWithoutCitiesInput>;
    upsert?: InstanceType<typeof ProvinceUpsertWithoutCitiesInput>;
    connect?: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    update?: InstanceType<typeof ProvinceUpdateToOneWithWhereWithoutCitiesInput>;
}
export declare class ProvinceUpdateToOneWithWhereWithoutCitiesInput {
    where?: InstanceType<typeof ProvinceWhereInput>;
    data: InstanceType<typeof ProvinceUpdateWithoutCitiesInput>;
}
export declare class ProvinceUpdateWithoutCitiesInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ProvinceUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cities?: InstanceType<typeof CityUpdateManyWithoutProvinceNestedInput>;
}
export declare class ProvinceUpsertWithoutCitiesInput {
    update: InstanceType<typeof ProvinceUpdateWithoutCitiesInput>;
    create: InstanceType<typeof ProvinceCreateWithoutCitiesInput>;
    where?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class ProvinceWhereUniqueInput {
    id?: number;
    name?: string;
    AND?: Array<ProvinceWhereInput>;
    OR?: Array<ProvinceWhereInput>;
    NOT?: Array<ProvinceWhereInput>;
    cities?: InstanceType<typeof CityListRelationFilter>;
}
export declare class ProvinceWhereInput {
    AND?: Array<ProvinceWhereInput>;
    OR?: Array<ProvinceWhereInput>;
    NOT?: Array<ProvinceWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    cities?: InstanceType<typeof CityListRelationFilter>;
}
export declare class Province {
    id: number;
    name: string;
    cities?: Array<City>;
    _count?: InstanceType<typeof ProvinceCount>;
}
export declare class UpdateManyProvinceArgs {
    data: InstanceType<typeof ProvinceUpdateManyMutationInput>;
    where?: InstanceType<typeof ProvinceWhereInput>;
}
export declare class UpdateOneProvinceArgs {
    data: InstanceType<typeof ProvinceUpdateInput>;
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpsertOneProvinceArgs {
    where: Prisma.AtLeast<ProvinceWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof ProvinceCreateInput>;
    update: InstanceType<typeof ProvinceUpdateInput>;
}
export declare class AggregateRegion {
    _count?: InstanceType<typeof RegionCountAggregate>;
    _avg?: InstanceType<typeof RegionAvgAggregate>;
    _sum?: InstanceType<typeof RegionSumAggregate>;
    _min?: InstanceType<typeof RegionMinAggregate>;
    _max?: InstanceType<typeof RegionMaxAggregate>;
}
export declare class CreateManyRegionArgs {
    data: Array<RegionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneRegionArgs {
    data: InstanceType<typeof RegionCreateInput>;
}
export declare class DeleteManyRegionArgs {
    where?: InstanceType<typeof RegionWhereInput>;
}
export declare class DeleteOneRegionArgs {
    where: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
export declare class FindFirstRegionOrThrowArgs {
    where?: InstanceType<typeof RegionWhereInput>;
    orderBy?: Array<RegionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RegionScalarFieldEnum>;
}
export declare class FindFirstRegionArgs {
    where?: InstanceType<typeof RegionWhereInput>;
    orderBy?: Array<RegionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RegionScalarFieldEnum>;
}
export declare class FindManyRegionArgs {
    where?: InstanceType<typeof RegionWhereInput>;
    orderBy?: Array<RegionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RegionScalarFieldEnum>;
}
export declare class FindUniqueRegionOrThrowArgs {
    where: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
export declare class FindUniqueRegionArgs {
    where: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
export declare class RegionAggregateArgs {
    where?: InstanceType<typeof RegionWhereInput>;
    orderBy?: Array<RegionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RegionCountAggregateInput>;
    _avg?: InstanceType<typeof RegionAvgAggregateInput>;
    _sum?: InstanceType<typeof RegionSumAggregateInput>;
    _min?: InstanceType<typeof RegionMinAggregateInput>;
    _max?: InstanceType<typeof RegionMaxAggregateInput>;
}
export declare class RegionAvgAggregateInput {
    id?: true;
}
export declare class RegionAvgAggregate {
    id?: number;
}
export declare class RegionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class RegionCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class RegionCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class RegionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RegionCount {
    employment?: number;
}
export declare class RegionCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RegionCreateNestedOneWithoutEmploymentInput {
    create?: InstanceType<typeof RegionCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof RegionCreateOrConnectWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
export declare class RegionCreateOrConnectWithoutEmploymentInput {
    where: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RegionCreateWithoutEmploymentInput>;
}
export declare class RegionCreateWithoutEmploymentInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RegionCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentCreateNestedManyWithoutRegionInput>;
}
export declare class RegionGroupByArgs {
    where?: InstanceType<typeof RegionWhereInput>;
    orderBy?: Array<RegionOrderByWithAggregationInput>;
    by: Array<keyof typeof RegionScalarFieldEnum>;
    having?: InstanceType<typeof RegionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RegionCountAggregateInput>;
    _avg?: InstanceType<typeof RegionAvgAggregateInput>;
    _sum?: InstanceType<typeof RegionSumAggregateInput>;
    _min?: InstanceType<typeof RegionMinAggregateInput>;
    _max?: InstanceType<typeof RegionMaxAggregateInput>;
}
export declare class RegionGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof RegionCountAggregate>;
    _avg?: InstanceType<typeof RegionAvgAggregate>;
    _sum?: InstanceType<typeof RegionSumAggregate>;
    _min?: InstanceType<typeof RegionMinAggregate>;
    _max?: InstanceType<typeof RegionMaxAggregate>;
}
export declare class RegionMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class RegionMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RegionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RegionMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class RegionMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RegionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class RegionNullableRelationFilter {
    is?: InstanceType<typeof RegionWhereInput>;
    isNot?: InstanceType<typeof RegionWhereInput>;
}
export declare class RegionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof RegionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RegionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RegionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RegionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RegionSumOrderByAggregateInput>;
}
export declare class RegionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    employment?: InstanceType<typeof EmploymentOrderByRelationAggregateInput>;
}
export declare class RegionScalarWhereWithAggregatesInput {
    AND?: Array<RegionScalarWhereWithAggregatesInput>;
    OR?: Array<RegionScalarWhereWithAggregatesInput>;
    NOT?: Array<RegionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class RegionSumAggregateInput {
    id?: true;
}
export declare class RegionSumAggregate {
    id?: number;
}
export declare class RegionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class RegionUncheckedCreateWithoutEmploymentInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class RegionUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employment?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutRegionInput>;
}
export declare class RegionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RegionUncheckedUpdateWithoutEmploymentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RegionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutRegionNestedInput>;
}
export declare class RegionUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RegionUpdateOneWithoutEmploymentNestedInput {
    create?: InstanceType<typeof RegionCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof RegionCreateOrConnectWithoutEmploymentInput>;
    upsert?: InstanceType<typeof RegionUpsertWithoutEmploymentInput>;
    disconnect?: InstanceType<typeof RegionWhereInput>;
    delete?: InstanceType<typeof RegionWhereInput>;
    connect?: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RegionUpdateToOneWithWhereWithoutEmploymentInput>;
}
export declare class RegionUpdateToOneWithWhereWithoutEmploymentInput {
    where?: InstanceType<typeof RegionWhereInput>;
    data: InstanceType<typeof RegionUpdateWithoutEmploymentInput>;
}
export declare class RegionUpdateWithoutEmploymentInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class RegionUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    employment?: InstanceType<typeof EmploymentUpdateManyWithoutRegionNestedInput>;
}
export declare class RegionUpsertWithoutEmploymentInput {
    update: InstanceType<typeof RegionUpdateWithoutEmploymentInput>;
    create: InstanceType<typeof RegionCreateWithoutEmploymentInput>;
    where?: InstanceType<typeof RegionWhereInput>;
}
export declare class RegionWhereUniqueInput {
    id?: number;
    AND?: Array<RegionWhereInput>;
    OR?: Array<RegionWhereInput>;
    NOT?: Array<RegionWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    employment?: InstanceType<typeof EmploymentListRelationFilter>;
}
export declare class RegionWhereInput {
    AND?: Array<RegionWhereInput>;
    OR?: Array<RegionWhereInput>;
    NOT?: Array<RegionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    employment?: InstanceType<typeof EmploymentListRelationFilter>;
}
export declare class Region {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    employment?: Array<Employment>;
    _count?: InstanceType<typeof RegionCount>;
}
export declare class UpdateManyRegionArgs {
    data: InstanceType<typeof RegionUpdateManyMutationInput>;
    where?: InstanceType<typeof RegionWhereInput>;
}
export declare class UpdateOneRegionArgs {
    data: InstanceType<typeof RegionUpdateInput>;
    where: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
}
export declare class UpsertOneRegionArgs {
    where: Prisma.AtLeast<RegionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RegionCreateInput>;
    update: InstanceType<typeof RegionUpdateInput>;
}
export declare class AggregateRole {
    _count?: InstanceType<typeof RoleCountAggregate>;
    _avg?: InstanceType<typeof RoleAvgAggregate>;
    _sum?: InstanceType<typeof RoleSumAggregate>;
    _min?: InstanceType<typeof RoleMinAggregate>;
    _max?: InstanceType<typeof RoleMaxAggregate>;
}
export declare class CreateManyRoleArgs {
    data: Array<RoleCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneRoleArgs {
    data: InstanceType<typeof RoleCreateInput>;
}
export declare class DeleteManyRoleArgs {
    where?: InstanceType<typeof RoleWhereInput>;
}
export declare class DeleteOneRoleArgs {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class FindFirstRoleOrThrowArgs {
    where?: InstanceType<typeof RoleWhereInput>;
    orderBy?: Array<RoleOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RoleScalarFieldEnum>;
}
export declare class FindFirstRoleArgs {
    where?: InstanceType<typeof RoleWhereInput>;
    orderBy?: Array<RoleOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RoleScalarFieldEnum>;
}
export declare class FindManyRoleArgs {
    where?: InstanceType<typeof RoleWhereInput>;
    orderBy?: Array<RoleOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RoleScalarFieldEnum>;
}
export declare class FindUniqueRoleOrThrowArgs {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class FindUniqueRoleArgs {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class RoleAggregateArgs {
    where?: InstanceType<typeof RoleWhereInput>;
    orderBy?: Array<RoleOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RoleCountAggregateInput>;
    _avg?: InstanceType<typeof RoleAvgAggregateInput>;
    _sum?: InstanceType<typeof RoleSumAggregateInput>;
    _min?: InstanceType<typeof RoleMinAggregateInput>;
    _max?: InstanceType<typeof RoleMaxAggregateInput>;
}
export declare class RoleAvgAggregateInput {
    id?: true;
    higherLevelThanId?: true;
}
export declare class RoleAvgAggregate {
    id?: number;
    higherLevelThanId?: number;
}
export declare class RoleAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
}
export declare class RoleCountAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    higherLevelThanId?: true;
    roleType?: true;
    _all?: true;
}
export declare class RoleCountAggregate {
    id: number;
    name: number;
    description: number;
    higherLevelThanId: number;
    roleType: number;
    _all: number;
}
export declare class RoleCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
    roleType?: keyof typeof SortOrder;
}
export declare class RoleCount {
    rolePermissions?: number;
    users?: number;
    lowerLevelThan?: number;
}
export declare class RoleCreateManyHigherLevelThanInputEnvelope {
    data: Array<RoleCreateManyHigherLevelThanInput>;
    skipDuplicates?: boolean;
}
export declare class RoleCreateManyHigherLevelThanInput {
    id?: number;
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
}
export declare class RoleCreateManyInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
}
export declare class RoleCreateNestedManyWithoutHigherLevelThanInput {
    create?: Array<RoleCreateWithoutHigherLevelThanInput>;
    connectOrCreate?: Array<RoleCreateOrConnectWithoutHigherLevelThanInput>;
    createMany?: InstanceType<typeof RoleCreateManyHigherLevelThanInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
}
export declare class RoleCreateNestedOneWithoutLowerLevelThanInput {
    create?: InstanceType<typeof RoleCreateWithoutLowerLevelThanInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutLowerLevelThanInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class RoleCreateNestedOneWithoutRolePermissionsInput {
    create?: InstanceType<typeof RoleCreateWithoutRolePermissionsInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutRolePermissionsInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class RoleCreateNestedOneWithoutUsersInput {
    create?: InstanceType<typeof RoleCreateWithoutUsersInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutUsersInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class RoleCreateOrConnectWithoutHigherLevelThanInput {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RoleCreateWithoutHigherLevelThanInput>;
}
export declare class RoleCreateOrConnectWithoutLowerLevelThanInput {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RoleCreateWithoutLowerLevelThanInput>;
}
export declare class RoleCreateOrConnectWithoutRolePermissionsInput {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RoleCreateWithoutRolePermissionsInput>;
}
export declare class RoleCreateOrConnectWithoutUsersInput {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RoleCreateWithoutUsersInput>;
}
export declare class RoleCreateWithoutHigherLevelThanInput {
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleCreateWithoutLowerLevelThanInput {
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
}
export declare class RoleCreateWithoutRolePermissionsInput {
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleCreateWithoutUsersInput {
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleCreateInput {
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleGroupByArgs {
    where?: InstanceType<typeof RoleWhereInput>;
    orderBy?: Array<RoleOrderByWithAggregationInput>;
    by: Array<keyof typeof RoleScalarFieldEnum>;
    having?: InstanceType<typeof RoleScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RoleCountAggregateInput>;
    _avg?: InstanceType<typeof RoleAvgAggregateInput>;
    _sum?: InstanceType<typeof RoleSumAggregateInput>;
    _min?: InstanceType<typeof RoleMinAggregateInput>;
    _max?: InstanceType<typeof RoleMaxAggregateInput>;
}
export declare class RoleGroupBy {
    id: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
    _count?: InstanceType<typeof RoleCountAggregate>;
    _avg?: InstanceType<typeof RoleAvgAggregate>;
    _sum?: InstanceType<typeof RoleSumAggregate>;
    _min?: InstanceType<typeof RoleMinAggregate>;
    _max?: InstanceType<typeof RoleMaxAggregate>;
}
export declare class RoleListRelationFilter {
    every?: InstanceType<typeof RoleWhereInput>;
    some?: InstanceType<typeof RoleWhereInput>;
    none?: InstanceType<typeof RoleWhereInput>;
}
export declare class RoleMaxAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    higherLevelThanId?: true;
    roleType?: true;
}
export declare class RoleMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
}
export declare class RoleMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
    roleType?: keyof typeof SortOrder;
}
export declare class RoleMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    higherLevelThanId?: true;
    roleType?: true;
}
export declare class RoleMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
}
export declare class RoleMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
    roleType?: keyof typeof SortOrder;
}
export declare class RoleNullableRelationFilter {
    is?: InstanceType<typeof RoleWhereInput>;
    isNot?: InstanceType<typeof RoleWhereInput>;
}
export declare class RoleOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class RoleOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    higherLevelThanId?: InstanceType<typeof SortOrderInput>;
    roleType?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof RoleCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RoleAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RoleMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RoleMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RoleSumOrderByAggregateInput>;
}
export declare class RoleOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    higherLevelThanId?: InstanceType<typeof SortOrderInput>;
    roleType?: InstanceType<typeof SortOrderInput>;
    higherLevelThan?: InstanceType<typeof RoleOrderByWithRelationInput>;
    rolePermissions?: InstanceType<typeof RolePermissionOrderByRelationAggregateInput>;
    users?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    lowerLevelThan?: InstanceType<typeof RoleOrderByRelationAggregateInput>;
}
export declare class RoleRelationFilter {
    is?: InstanceType<typeof RoleWhereInput>;
    isNot?: InstanceType<typeof RoleWhereInput>;
}
export declare class RoleScalarWhereWithAggregatesInput {
    AND?: Array<RoleScalarWhereWithAggregatesInput>;
    OR?: Array<RoleScalarWhereWithAggregatesInput>;
    NOT?: Array<RoleScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    higherLevelThanId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    roleType?: InstanceType<typeof EnumRoleTypeNullableWithAggregatesFilter>;
}
export declare class RoleScalarWhereInput {
    AND?: Array<RoleScalarWhereInput>;
    OR?: Array<RoleScalarWhereInput>;
    NOT?: Array<RoleScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    higherLevelThanId?: InstanceType<typeof IntNullableFilter>;
    roleType?: InstanceType<typeof EnumRoleTypeNullableFilter>;
}
export declare class RoleSumAggregateInput {
    id?: true;
    higherLevelThanId?: true;
}
export declare class RoleSumAggregate {
    id?: number;
    higherLevelThanId?: number;
}
export declare class RoleSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
}
export declare class RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput {
    create?: Array<RoleCreateWithoutHigherLevelThanInput>;
    connectOrCreate?: Array<RoleCreateOrConnectWithoutHigherLevelThanInput>;
    createMany?: InstanceType<typeof RoleCreateManyHigherLevelThanInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
}
export declare class RoleUncheckedCreateWithoutHigherLevelThanInput {
    id?: number;
    name: string;
    description?: string;
    roleType?: keyof typeof RoleType;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedCreateWithoutLowerLevelThanInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
}
export declare class RoleUncheckedCreateWithoutRolePermissionsInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedCreateWithoutUsersInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedCreateInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    roleType?: keyof typeof RoleType;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput {
    create?: Array<RoleCreateWithoutHigherLevelThanInput>;
    connectOrCreate?: Array<RoleCreateOrConnectWithoutHigherLevelThanInput>;
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutHigherLevelThanInput>;
    createMany?: InstanceType<typeof RoleCreateManyHigherLevelThanInputEnvelope>;
    set?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    update?: Array<RoleUpdateWithWhereUniqueWithoutHigherLevelThanInput>;
    updateMany?: Array<RoleUpdateManyWithWhereWithoutHigherLevelThanInput>;
    deleteMany?: Array<RoleScalarWhereInput>;
}
export declare class RoleUncheckedUpdateManyWithoutHigherLevelThanInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
}
export declare class RoleUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
}
export declare class RoleUncheckedUpdateWithoutHigherLevelThanInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUncheckedUpdateWithoutLowerLevelThanInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
}
export declare class RoleUncheckedUpdateWithoutRolePermissionsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUncheckedUpdateWithoutUsersInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
}
export declare class RoleUpdateManyWithWhereWithoutHigherLevelThanInput {
    where: InstanceType<typeof RoleScalarWhereInput>;
    data: InstanceType<typeof RoleUpdateManyMutationInput>;
}
export declare class RoleUpdateManyWithoutHigherLevelThanNestedInput {
    create?: Array<RoleCreateWithoutHigherLevelThanInput>;
    connectOrCreate?: Array<RoleCreateOrConnectWithoutHigherLevelThanInput>;
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutHigherLevelThanInput>;
    createMany?: InstanceType<typeof RoleCreateManyHigherLevelThanInputEnvelope>;
    set?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RoleWhereUniqueInput, 'id'>>;
    update?: Array<RoleUpdateWithWhereUniqueWithoutHigherLevelThanInput>;
    updateMany?: Array<RoleUpdateManyWithWhereWithoutHigherLevelThanInput>;
    deleteMany?: Array<RoleScalarWhereInput>;
}
export declare class RoleUpdateOneRequiredWithoutUsersNestedInput {
    create?: InstanceType<typeof RoleCreateWithoutUsersInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutUsersInput>;
    upsert?: InstanceType<typeof RoleUpsertWithoutUsersInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RoleUpdateToOneWithWhereWithoutUsersInput>;
}
export declare class RoleUpdateOneWithoutLowerLevelThanNestedInput {
    create?: InstanceType<typeof RoleCreateWithoutLowerLevelThanInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutLowerLevelThanInput>;
    upsert?: InstanceType<typeof RoleUpsertWithoutLowerLevelThanInput>;
    disconnect?: InstanceType<typeof RoleWhereInput>;
    delete?: InstanceType<typeof RoleWhereInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RoleUpdateToOneWithWhereWithoutLowerLevelThanInput>;
}
export declare class RoleUpdateOneWithoutRolePermissionsNestedInput {
    create?: InstanceType<typeof RoleCreateWithoutRolePermissionsInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutRolePermissionsInput>;
    upsert?: InstanceType<typeof RoleUpsertWithoutRolePermissionsInput>;
    disconnect?: InstanceType<typeof RoleWhereInput>;
    delete?: InstanceType<typeof RoleWhereInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RoleUpdateToOneWithWhereWithoutRolePermissionsInput>;
}
export declare class RoleUpdateToOneWithWhereWithoutLowerLevelThanInput {
    where?: InstanceType<typeof RoleWhereInput>;
    data: InstanceType<typeof RoleUpdateWithoutLowerLevelThanInput>;
}
export declare class RoleUpdateToOneWithWhereWithoutRolePermissionsInput {
    where?: InstanceType<typeof RoleWhereInput>;
    data: InstanceType<typeof RoleUpdateWithoutRolePermissionsInput>;
}
export declare class RoleUpdateToOneWithWhereWithoutUsersInput {
    where?: InstanceType<typeof RoleWhereInput>;
    data: InstanceType<typeof RoleUpdateWithoutUsersInput>;
}
export declare class RoleUpdateWithWhereUniqueWithoutHigherLevelThanInput {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    data: InstanceType<typeof RoleUpdateWithoutHigherLevelThanInput>;
}
export declare class RoleUpdateWithoutHigherLevelThanInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateWithoutLowerLevelThanInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
}
export declare class RoleUpdateWithoutRolePermissionsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateWithoutUsersInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    roleType?: InstanceType<typeof NullableEnumRoleTypeFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpsertWithWhereUniqueWithoutHigherLevelThanInput {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    update: InstanceType<typeof RoleUpdateWithoutHigherLevelThanInput>;
    create: InstanceType<typeof RoleCreateWithoutHigherLevelThanInput>;
}
export declare class RoleUpsertWithoutLowerLevelThanInput {
    update: InstanceType<typeof RoleUpdateWithoutLowerLevelThanInput>;
    create: InstanceType<typeof RoleCreateWithoutLowerLevelThanInput>;
    where?: InstanceType<typeof RoleWhereInput>;
}
export declare class RoleUpsertWithoutRolePermissionsInput {
    update: InstanceType<typeof RoleUpdateWithoutRolePermissionsInput>;
    create: InstanceType<typeof RoleCreateWithoutRolePermissionsInput>;
    where?: InstanceType<typeof RoleWhereInput>;
}
export declare class RoleUpsertWithoutUsersInput {
    update: InstanceType<typeof RoleUpdateWithoutUsersInput>;
    create: InstanceType<typeof RoleCreateWithoutUsersInput>;
    where?: InstanceType<typeof RoleWhereInput>;
}
export declare class RoleWhereUniqueInput {
    id?: number;
    AND?: Array<RoleWhereInput>;
    OR?: Array<RoleWhereInput>;
    NOT?: Array<RoleWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    higherLevelThanId?: InstanceType<typeof IntNullableFilter>;
    roleType?: InstanceType<typeof EnumRoleTypeNullableFilter>;
    higherLevelThan?: InstanceType<typeof RoleNullableRelationFilter>;
    rolePermissions?: InstanceType<typeof RolePermissionListRelationFilter>;
    users?: InstanceType<typeof UserListRelationFilter>;
    lowerLevelThan?: InstanceType<typeof RoleListRelationFilter>;
}
export declare class RoleWhereInput {
    AND?: Array<RoleWhereInput>;
    OR?: Array<RoleWhereInput>;
    NOT?: Array<RoleWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    higherLevelThanId?: InstanceType<typeof IntNullableFilter>;
    roleType?: InstanceType<typeof EnumRoleTypeNullableFilter>;
    higherLevelThan?: InstanceType<typeof RoleNullableRelationFilter>;
    rolePermissions?: InstanceType<typeof RolePermissionListRelationFilter>;
    users?: InstanceType<typeof UserListRelationFilter>;
    lowerLevelThan?: InstanceType<typeof RoleListRelationFilter>;
}
export declare class Role {
    id: number;
    name: string;
    description: string | null;
    higherLevelThanId: number | null;
    roleType: keyof typeof RoleType | null;
    higherLevelThan?: InstanceType<typeof Role> | null;
    rolePermissions?: Array<RolePermission>;
    users?: Array<User>;
    lowerLevelThan?: Array<Role>;
    _count?: InstanceType<typeof RoleCount>;
}
export declare class UpdateManyRoleArgs {
    data: InstanceType<typeof RoleUpdateManyMutationInput>;
    where?: InstanceType<typeof RoleWhereInput>;
}
export declare class UpdateOneRoleArgs {
    data: InstanceType<typeof RoleUpdateInput>;
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
}
export declare class UpsertOneRoleArgs {
    where: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RoleCreateInput>;
    update: InstanceType<typeof RoleUpdateInput>;
}
export declare class AggregateRolePermission {
    _count?: InstanceType<typeof RolePermissionCountAggregate>;
    _avg?: InstanceType<typeof RolePermissionAvgAggregate>;
    _sum?: InstanceType<typeof RolePermissionSumAggregate>;
    _min?: InstanceType<typeof RolePermissionMinAggregate>;
    _max?: InstanceType<typeof RolePermissionMaxAggregate>;
}
export declare class CreateManyRolePermissionArgs {
    data: Array<RolePermissionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneRolePermissionArgs {
    data: InstanceType<typeof RolePermissionCreateInput>;
}
export declare class DeleteManyRolePermissionArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
}
export declare class DeleteOneRolePermissionArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
}
export declare class FindFirstRolePermissionOrThrowArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RolePermissionScalarFieldEnum>;
}
export declare class FindFirstRolePermissionArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RolePermissionScalarFieldEnum>;
}
export declare class FindManyRolePermissionArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RolePermissionScalarFieldEnum>;
}
export declare class FindUniqueRolePermissionOrThrowArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
}
export declare class FindUniqueRolePermissionArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
}
export declare class RolePermissionAggregateArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RolePermissionCountAggregateInput>;
    _avg?: InstanceType<typeof RolePermissionAvgAggregateInput>;
    _sum?: InstanceType<typeof RolePermissionSumAggregateInput>;
    _min?: InstanceType<typeof RolePermissionMinAggregateInput>;
    _max?: InstanceType<typeof RolePermissionMaxAggregateInput>;
}
export declare class RolePermissionAvgAggregateInput {
    id?: true;
    roleId?: true;
}
export declare class RolePermissionAvgAggregate {
    id?: number;
    roleId?: number;
}
export declare class RolePermissionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
}
export declare class RolePermissionCountAggregateInput {
    id?: true;
    roleId?: true;
    permission?: true;
    _all?: true;
}
export declare class RolePermissionCountAggregate {
    id: number;
    roleId: number;
    permission: number;
    _all: number;
}
export declare class RolePermissionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
}
export declare class RolePermissionCreateManyRoleInputEnvelope {
    data: Array<RolePermissionCreateManyRoleInput>;
    skipDuplicates?: boolean;
}
export declare class RolePermissionCreateManyRoleInput {
    id?: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionCreateManyInput {
    id?: number;
    roleId?: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionCreateNestedManyWithoutRoleInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
}
export declare class RolePermissionCreateOrConnectWithoutRoleInput {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RolePermissionCreateWithoutRoleInput>;
}
export declare class RolePermissionCreateWithoutRoleInput {
    permission: keyof typeof Permission;
}
export declare class RolePermissionCreateInput {
    permission: keyof typeof Permission;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutRolePermissionsInput>;
}
export declare class RolePermissionGroupByArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithAggregationInput>;
    by: Array<keyof typeof RolePermissionScalarFieldEnum>;
    having?: InstanceType<typeof RolePermissionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RolePermissionCountAggregateInput>;
    _avg?: InstanceType<typeof RolePermissionAvgAggregateInput>;
    _sum?: InstanceType<typeof RolePermissionSumAggregateInput>;
    _min?: InstanceType<typeof RolePermissionMinAggregateInput>;
    _max?: InstanceType<typeof RolePermissionMaxAggregateInput>;
}
export declare class RolePermissionGroupBy {
    id: number;
    roleId?: number;
    permission: keyof typeof Permission;
    _count?: InstanceType<typeof RolePermissionCountAggregate>;
    _avg?: InstanceType<typeof RolePermissionAvgAggregate>;
    _sum?: InstanceType<typeof RolePermissionSumAggregate>;
    _min?: InstanceType<typeof RolePermissionMinAggregate>;
    _max?: InstanceType<typeof RolePermissionMaxAggregate>;
}
export declare class RolePermissionListRelationFilter {
    every?: InstanceType<typeof RolePermissionWhereInput>;
    some?: InstanceType<typeof RolePermissionWhereInput>;
    none?: InstanceType<typeof RolePermissionWhereInput>;
}
export declare class RolePermissionMaxAggregateInput {
    id?: true;
    roleId?: true;
    permission?: true;
}
export declare class RolePermissionMaxAggregate {
    id?: number;
    roleId?: number;
    permission?: keyof typeof Permission;
}
export declare class RolePermissionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
}
export declare class RolePermissionMinAggregateInput {
    id?: true;
    roleId?: true;
    permission?: true;
}
export declare class RolePermissionMinAggregate {
    id?: number;
    roleId?: number;
    permission?: keyof typeof Permission;
}
export declare class RolePermissionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
}
export declare class RolePermissionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class RolePermissionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    roleId?: InstanceType<typeof SortOrderInput>;
    permission?: keyof typeof SortOrder;
    _count?: InstanceType<typeof RolePermissionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RolePermissionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RolePermissionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RolePermissionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RolePermissionSumOrderByAggregateInput>;
}
export declare class RolePermissionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    roleId?: InstanceType<typeof SortOrderInput>;
    permission?: keyof typeof SortOrder;
    role?: InstanceType<typeof RoleOrderByWithRelationInput>;
}
export declare class RolePermissionScalarWhereWithAggregatesInput {
    AND?: Array<RolePermissionScalarWhereWithAggregatesInput>;
    OR?: Array<RolePermissionScalarWhereWithAggregatesInput>;
    NOT?: Array<RolePermissionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    roleId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    permission?: InstanceType<typeof EnumPermissionWithAggregatesFilter>;
}
export declare class RolePermissionScalarWhereInput {
    AND?: Array<RolePermissionScalarWhereInput>;
    OR?: Array<RolePermissionScalarWhereInput>;
    NOT?: Array<RolePermissionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    roleId?: InstanceType<typeof IntNullableFilter>;
    permission?: InstanceType<typeof EnumPermissionFilter>;
}
export declare class RolePermissionSumAggregateInput {
    id?: true;
    roleId?: true;
}
export declare class RolePermissionSumAggregate {
    id?: number;
    roleId?: number;
}
export declare class RolePermissionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
}
export declare class RolePermissionUncheckedCreateNestedManyWithoutRoleInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
}
export declare class RolePermissionUncheckedCreateWithoutRoleInput {
    id?: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionUncheckedCreateInput {
    id?: number;
    roleId?: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionUncheckedUpdateManyWithoutRoleNestedInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    upsert?: Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    set?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    update?: Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>;
    updateMany?: Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>;
    deleteMany?: Array<RolePermissionScalarWhereInput>;
}
export declare class RolePermissionUncheckedUpdateManyWithoutRoleInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUncheckedUpdateWithoutRoleInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUpdateManyMutationInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUpdateManyWithWhereWithoutRoleInput {
    where: InstanceType<typeof RolePermissionScalarWhereInput>;
    data: InstanceType<typeof RolePermissionUpdateManyMutationInput>;
}
export declare class RolePermissionUpdateManyWithoutRoleNestedInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    upsert?: Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    set?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>>;
    update?: Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>;
    updateMany?: Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>;
    deleteMany?: Array<RolePermissionScalarWhereInput>;
}
export declare class RolePermissionUpdateWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    data: InstanceType<typeof RolePermissionUpdateWithoutRoleInput>;
}
export declare class RolePermissionUpdateWithoutRoleInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUpdateInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneWithoutRolePermissionsNestedInput>;
}
export declare class RolePermissionUpsertWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    update: InstanceType<typeof RolePermissionUpdateWithoutRoleInput>;
    create: InstanceType<typeof RolePermissionCreateWithoutRoleInput>;
}
export declare class RolePermissionWhereUniqueInput {
    id?: number;
    AND?: Array<RolePermissionWhereInput>;
    OR?: Array<RolePermissionWhereInput>;
    NOT?: Array<RolePermissionWhereInput>;
    roleId?: InstanceType<typeof IntNullableFilter>;
    permission?: InstanceType<typeof EnumPermissionFilter>;
    role?: InstanceType<typeof RoleNullableRelationFilter>;
}
export declare class RolePermissionWhereInput {
    AND?: Array<RolePermissionWhereInput>;
    OR?: Array<RolePermissionWhereInput>;
    NOT?: Array<RolePermissionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    roleId?: InstanceType<typeof IntNullableFilter>;
    permission?: InstanceType<typeof EnumPermissionFilter>;
    role?: InstanceType<typeof RoleNullableRelationFilter>;
}
export declare class RolePermission {
    id: number;
    roleId: number | null;
    permission: keyof typeof Permission;
    role?: InstanceType<typeof Role> | null;
}
export declare class UpdateManyRolePermissionArgs {
    data: InstanceType<typeof RolePermissionUpdateManyMutationInput>;
    where?: InstanceType<typeof RolePermissionWhereInput>;
}
export declare class UpdateOneRolePermissionArgs {
    data: InstanceType<typeof RolePermissionUpdateInput>;
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
}
export declare class UpsertOneRolePermissionArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof RolePermissionCreateInput>;
    update: InstanceType<typeof RolePermissionUpdateInput>;
}
export declare class AggregateSubdistrict {
    _count?: InstanceType<typeof SubdistrictCountAggregate>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregate>;
    _sum?: InstanceType<typeof SubdistrictSumAggregate>;
    _min?: InstanceType<typeof SubdistrictMinAggregate>;
    _max?: InstanceType<typeof SubdistrictMaxAggregate>;
}
export declare class CreateManySubdistrictArgs {
    data: Array<SubdistrictCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSubdistrictArgs {
    data: InstanceType<typeof SubdistrictCreateInput>;
}
export declare class DeleteManySubdistrictArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class DeleteOneSubdistrictArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class FindFirstSubdistrictOrThrowArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
export declare class FindFirstSubdistrictArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
export declare class FindManySubdistrictArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubdistrictScalarFieldEnum>;
}
export declare class FindUniqueSubdistrictOrThrowArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class FindUniqueSubdistrictArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class SubdistrictAggregateArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SubdistrictCountAggregateInput>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof SubdistrictSumAggregateInput>;
    _min?: InstanceType<typeof SubdistrictMinAggregateInput>;
    _max?: InstanceType<typeof SubdistrictMaxAggregateInput>;
}
export declare class SubdistrictAvgAggregateInput {
    id?: true;
    districtId?: true;
}
export declare class SubdistrictAvgAggregate {
    id?: number;
    districtId?: number;
}
export declare class SubdistrictAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
}
export declare class SubdistrictCountAggregateInput {
    id?: true;
    name?: true;
    districtId?: true;
    postalCode?: true;
    _all?: true;
}
export declare class SubdistrictCountAggregate {
    id: number;
    name: number;
    districtId: number;
    postalCode: number;
    _all: number;
}
export declare class SubdistrictCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class SubdistrictCount {
    address?: number;
}
export declare class SubdistrictCreateManyDistrictInputEnvelope {
    data: Array<SubdistrictCreateManyDistrictInput>;
    skipDuplicates?: boolean;
}
export declare class SubdistrictCreateManyDistrictInput {
    id?: number;
    name: string;
    postalCode: string;
}
export declare class SubdistrictCreateManyInput {
    id?: number;
    name: string;
    districtId: number;
    postalCode: string;
}
export declare class SubdistrictCreateNestedManyWithoutDistrictInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
}
export declare class SubdistrictCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SubdistrictCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class SubdistrictCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
}
export declare class SubdistrictCreateOrConnectWithoutDistrictInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof SubdistrictCreateWithoutDistrictInput>;
}
export declare class SubdistrictCreateWithoutAddressInput {
    name: string;
    postalCode: string;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutSubdistrictsInput>;
}
export declare class SubdistrictCreateWithoutDistrictInput {
    name: string;
    postalCode: string;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictCreateInput {
    name: string;
    postalCode: string;
    district: InstanceType<typeof DistrictCreateNestedOneWithoutSubdistrictsInput>;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictGroupByArgs {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    orderBy?: Array<SubdistrictOrderByWithAggregationInput>;
    by: Array<keyof typeof SubdistrictScalarFieldEnum>;
    having?: InstanceType<typeof SubdistrictScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SubdistrictCountAggregateInput>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregateInput>;
    _sum?: InstanceType<typeof SubdistrictSumAggregateInput>;
    _min?: InstanceType<typeof SubdistrictMinAggregateInput>;
    _max?: InstanceType<typeof SubdistrictMaxAggregateInput>;
}
export declare class SubdistrictGroupBy {
    id: number;
    name: string;
    districtId: number;
    postalCode: string;
    _count?: InstanceType<typeof SubdistrictCountAggregate>;
    _avg?: InstanceType<typeof SubdistrictAvgAggregate>;
    _sum?: InstanceType<typeof SubdistrictSumAggregate>;
    _min?: InstanceType<typeof SubdistrictMinAggregate>;
    _max?: InstanceType<typeof SubdistrictMaxAggregate>;
}
export declare class SubdistrictListRelationFilter {
    every?: InstanceType<typeof SubdistrictWhereInput>;
    some?: InstanceType<typeof SubdistrictWhereInput>;
    none?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class SubdistrictMaxAggregateInput {
    id?: true;
    name?: true;
    districtId?: true;
    postalCode?: true;
}
export declare class SubdistrictMaxAggregate {
    id?: number;
    name?: string;
    districtId?: number;
    postalCode?: string;
}
export declare class SubdistrictMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class SubdistrictMinAggregateInput {
    id?: true;
    name?: true;
    districtId?: true;
    postalCode?: true;
}
export declare class SubdistrictMinAggregate {
    id?: number;
    name?: string;
    districtId?: number;
    postalCode?: string;
}
export declare class SubdistrictMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class SubdistrictOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class SubdistrictOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SubdistrictCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof SubdistrictAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof SubdistrictMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SubdistrictMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof SubdistrictSumOrderByAggregateInput>;
}
export declare class SubdistrictOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
    district?: InstanceType<typeof DistrictOrderByWithRelationInput>;
    address?: InstanceType<typeof AddressOrderByRelationAggregateInput>;
}
export declare class SubdistrictRelationFilter {
    is?: InstanceType<typeof SubdistrictWhereInput>;
    isNot?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class SubdistrictScalarWhereWithAggregatesInput {
    AND?: Array<SubdistrictScalarWhereWithAggregatesInput>;
    OR?: Array<SubdistrictScalarWhereWithAggregatesInput>;
    NOT?: Array<SubdistrictScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    districtId?: InstanceType<typeof IntWithAggregatesFilter>;
    postalCode?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class SubdistrictScalarWhereInput {
    AND?: Array<SubdistrictScalarWhereInput>;
    OR?: Array<SubdistrictScalarWhereInput>;
    NOT?: Array<SubdistrictScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
}
export declare class SubdistrictSumAggregateInput {
    id?: true;
    districtId?: true;
}
export declare class SubdistrictSumAggregate {
    id?: number;
    districtId?: number;
}
export declare class SubdistrictSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    districtId?: keyof typeof SortOrder;
}
export declare class SubdistrictUncheckedCreateNestedManyWithoutDistrictInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
}
export declare class SubdistrictUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    districtId: number;
    postalCode: string;
}
export declare class SubdistrictUncheckedCreateWithoutDistrictInput {
    id?: number;
    name: string;
    postalCode: string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictUncheckedCreateInput {
    id?: number;
    name: string;
    districtId: number;
    postalCode: string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutSubdistrictInput>;
}
export declare class SubdistrictUncheckedUpdateManyWithoutDistrictNestedInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    upsert?: Array<SubdistrictUpsertWithWhereUniqueWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    update?: Array<SubdistrictUpdateWithWhereUniqueWithoutDistrictInput>;
    updateMany?: Array<SubdistrictUpdateManyWithWhereWithoutDistrictInput>;
    deleteMany?: Array<SubdistrictScalarWhereInput>;
}
export declare class SubdistrictUncheckedUpdateManyWithoutDistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUncheckedUpdateWithoutDistrictInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    districtId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SubdistrictUpdateManyWithWhereWithoutDistrictInput {
    where: InstanceType<typeof SubdistrictScalarWhereInput>;
    data: InstanceType<typeof SubdistrictUpdateManyMutationInput>;
}
export declare class SubdistrictUpdateManyWithoutDistrictNestedInput {
    create?: Array<SubdistrictCreateWithoutDistrictInput>;
    connectOrCreate?: Array<SubdistrictCreateOrConnectWithoutDistrictInput>;
    upsert?: Array<SubdistrictUpsertWithWhereUniqueWithoutDistrictInput>;
    createMany?: InstanceType<typeof SubdistrictCreateManyDistrictInputEnvelope>;
    set?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>>;
    update?: Array<SubdistrictUpdateWithWhereUniqueWithoutDistrictInput>;
    updateMany?: Array<SubdistrictUpdateManyWithWhereWithoutDistrictInput>;
    deleteMany?: Array<SubdistrictScalarWhereInput>;
}
export declare class SubdistrictUpdateOneRequiredWithoutAddressNestedInput {
    create?: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof SubdistrictCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof SubdistrictUpsertWithoutAddressInput>;
    connect?: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof SubdistrictUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class SubdistrictUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof SubdistrictWhereInput>;
    data: InstanceType<typeof SubdistrictUpdateWithoutAddressInput>;
}
export declare class SubdistrictUpdateWithWhereUniqueWithoutDistrictInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    data: InstanceType<typeof SubdistrictUpdateWithoutDistrictInput>;
}
export declare class SubdistrictUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutSubdistrictsNestedInput>;
}
export declare class SubdistrictUpdateWithoutDistrictInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    district?: InstanceType<typeof DistrictUpdateOneRequiredWithoutSubdistrictsNestedInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutSubdistrictNestedInput>;
}
export declare class SubdistrictUpsertWithWhereUniqueWithoutDistrictInput {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    update: InstanceType<typeof SubdistrictUpdateWithoutDistrictInput>;
    create: InstanceType<typeof SubdistrictCreateWithoutDistrictInput>;
}
export declare class SubdistrictUpsertWithoutAddressInput {
    update: InstanceType<typeof SubdistrictUpdateWithoutAddressInput>;
    create: InstanceType<typeof SubdistrictCreateWithoutAddressInput>;
    where?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class SubdistrictWhereUniqueInput {
    id?: number;
    AND?: Array<SubdistrictWhereInput>;
    OR?: Array<SubdistrictWhereInput>;
    NOT?: Array<SubdistrictWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
    district?: InstanceType<typeof DistrictRelationFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class SubdistrictWhereInput {
    AND?: Array<SubdistrictWhereInput>;
    OR?: Array<SubdistrictWhereInput>;
    NOT?: Array<SubdistrictWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    districtId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
    district?: InstanceType<typeof DistrictRelationFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class Subdistrict {
    id: number;
    name: string;
    districtId: number;
    postalCode: string;
    district?: InstanceType<typeof District>;
    address?: Array<Address>;
    _count?: InstanceType<typeof SubdistrictCount>;
}
export declare class UpdateManySubdistrictArgs {
    data: InstanceType<typeof SubdistrictUpdateManyMutationInput>;
    where?: InstanceType<typeof SubdistrictWhereInput>;
}
export declare class UpdateOneSubdistrictArgs {
    data: InstanceType<typeof SubdistrictUpdateInput>;
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
}
export declare class UpsertOneSubdistrictArgs {
    where: Prisma.AtLeast<SubdistrictWhereUniqueInput, 'id'>;
    create: InstanceType<typeof SubdistrictCreateInput>;
    update: InstanceType<typeof SubdistrictUpdateInput>;
}
export declare class AggregateTag {
    _count?: InstanceType<typeof TagCountAggregate>;
    _avg?: InstanceType<typeof TagAvgAggregate>;
    _sum?: InstanceType<typeof TagSumAggregate>;
    _min?: InstanceType<typeof TagMinAggregate>;
    _max?: InstanceType<typeof TagMaxAggregate>;
}
export declare class CreateManyTagArgs {
    data: Array<TagCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneTagArgs {
    data: InstanceType<typeof TagCreateInput>;
}
export declare class DeleteManyTagArgs {
    where?: InstanceType<typeof TagWhereInput>;
}
export declare class DeleteOneTagArgs {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}
export declare class FindFirstTagOrThrowArgs {
    where?: InstanceType<typeof TagWhereInput>;
    orderBy?: Array<TagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
export declare class FindFirstTagArgs {
    where?: InstanceType<typeof TagWhereInput>;
    orderBy?: Array<TagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
export declare class FindManyTagArgs {
    where?: InstanceType<typeof TagWhereInput>;
    orderBy?: Array<TagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
export declare class FindUniqueTagOrThrowArgs {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}
export declare class FindUniqueTagArgs {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}
export declare class TagAggregateArgs {
    where?: InstanceType<typeof TagWhereInput>;
    orderBy?: Array<TagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TagCountAggregateInput>;
    _avg?: InstanceType<typeof TagAvgAggregateInput>;
    _sum?: InstanceType<typeof TagSumAggregateInput>;
    _min?: InstanceType<typeof TagMinAggregateInput>;
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}
export declare class TagAvgAggregateInput {
    id?: true;
}
export declare class TagAvgAggregate {
    id?: number;
}
export declare class TagAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class TagCountAggregateInput {
    id?: true;
    name?: true;
    color?: true;
    isException?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class TagCountAggregate {
    id: number;
    name: number;
    color: number;
    isException: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class TagCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    isException?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class TagCount {
    Claims?: number;
}
export declare class TagCreateManyInput {
    id?: number;
    name: string;
    color: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagCreateNestedManyWithoutClaimsInput {
    create?: Array<TagCreateWithoutClaimsInput>;
    connectOrCreate?: Array<TagCreateOrConnectWithoutClaimsInput>;
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
}
export declare class TagCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    create: InstanceType<typeof TagCreateWithoutClaimsInput>;
}
export declare class TagCreateWithoutClaimsInput {
    name: string;
    color: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagCreateInput {
    name: string;
    color: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Claims?: InstanceType<typeof ClaimCreateNestedManyWithoutTagsInput>;
}
export declare class TagGroupByArgs {
    where?: InstanceType<typeof TagWhereInput>;
    orderBy?: Array<TagOrderByWithAggregationInput>;
    by: Array<keyof typeof TagScalarFieldEnum>;
    having?: InstanceType<typeof TagScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TagCountAggregateInput>;
    _avg?: InstanceType<typeof TagAvgAggregateInput>;
    _sum?: InstanceType<typeof TagSumAggregateInput>;
    _min?: InstanceType<typeof TagMinAggregateInput>;
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}
export declare class TagGroupBy {
    id: number;
    name: string;
    color: keyof typeof Color;
    isException: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof TagCountAggregate>;
    _avg?: InstanceType<typeof TagAvgAggregate>;
    _sum?: InstanceType<typeof TagSumAggregate>;
    _min?: InstanceType<typeof TagMinAggregate>;
    _max?: InstanceType<typeof TagMaxAggregate>;
}
export declare class TagListRelationFilter {
    every?: InstanceType<typeof TagWhereInput>;
    some?: InstanceType<typeof TagWhereInput>;
    none?: InstanceType<typeof TagWhereInput>;
}
export declare class TagMaxAggregateInput {
    id?: true;
    name?: true;
    color?: true;
    isException?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class TagMaxAggregate {
    id?: number;
    name?: string;
    color?: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    isException?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class TagMinAggregateInput {
    id?: true;
    name?: true;
    color?: true;
    isException?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class TagMinAggregate {
    id?: number;
    name?: string;
    color?: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    isException?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class TagOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class TagOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    isException?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof TagCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof TagAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof TagMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof TagMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof TagSumOrderByAggregateInput>;
}
export declare class TagOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    isException?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    Claims?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
}
export declare class TagScalarWhereWithAggregatesInput {
    AND?: Array<TagScalarWhereWithAggregatesInput>;
    OR?: Array<TagScalarWhereWithAggregatesInput>;
    NOT?: Array<TagScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    color?: InstanceType<typeof EnumColorWithAggregatesFilter>;
    isException?: InstanceType<typeof BoolWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class TagScalarWhereInput {
    AND?: Array<TagScalarWhereInput>;
    OR?: Array<TagScalarWhereInput>;
    NOT?: Array<TagScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    color?: InstanceType<typeof EnumColorFilter>;
    isException?: InstanceType<typeof BoolFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}
export declare class TagSumAggregateInput {
    id?: true;
}
export declare class TagSumAggregate {
    id?: number;
}
export declare class TagSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class TagUncheckedCreateNestedManyWithoutClaimsInput {
    create?: Array<TagCreateWithoutClaimsInput>;
    connectOrCreate?: Array<TagCreateOrConnectWithoutClaimsInput>;
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
}
export declare class TagUncheckedCreateWithoutClaimsInput {
    id?: number;
    name: string;
    color: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagUncheckedCreateInput {
    id?: number;
    name: string;
    color: keyof typeof Color;
    isException?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutTagsInput>;
}
export declare class TagUncheckedUpdateManyWithoutClaimsNestedInput {
    create?: Array<TagCreateWithoutClaimsInput>;
    connectOrCreate?: Array<TagCreateOrConnectWithoutClaimsInput>;
    upsert?: Array<TagUpsertWithWhereUniqueWithoutClaimsInput>;
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    update?: Array<TagUpdateWithWhereUniqueWithoutClaimsInput>;
    updateMany?: Array<TagUpdateManyWithWhereWithoutClaimsInput>;
    deleteMany?: Array<TagScalarWhereInput>;
}
export declare class TagUncheckedUpdateManyWithoutClaimsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUncheckedUpdateWithoutClaimsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutTagsNestedInput>;
}
export declare class TagUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUpdateManyWithWhereWithoutClaimsInput {
    where: InstanceType<typeof TagScalarWhereInput>;
    data: InstanceType<typeof TagUpdateManyMutationInput>;
}
export declare class TagUpdateManyWithoutClaimsNestedInput {
    create?: Array<TagCreateWithoutClaimsInput>;
    connectOrCreate?: Array<TagCreateOrConnectWithoutClaimsInput>;
    upsert?: Array<TagUpsertWithWhereUniqueWithoutClaimsInput>;
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id'>>;
    update?: Array<TagUpdateWithWhereUniqueWithoutClaimsInput>;
    updateMany?: Array<TagUpdateManyWithWhereWithoutClaimsInput>;
    deleteMany?: Array<TagScalarWhereInput>;
}
export declare class TagUpdateWithWhereUniqueWithoutClaimsInput {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    data: InstanceType<typeof TagUpdateWithoutClaimsInput>;
}
export declare class TagUpdateWithoutClaimsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    isException?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Claims?: InstanceType<typeof ClaimUpdateManyWithoutTagsNestedInput>;
}
export declare class TagUpsertWithWhereUniqueWithoutClaimsInput {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    update: InstanceType<typeof TagUpdateWithoutClaimsInput>;
    create: InstanceType<typeof TagCreateWithoutClaimsInput>;
}
export declare class TagWhereUniqueInput {
    id?: number;
    AND?: Array<TagWhereInput>;
    OR?: Array<TagWhereInput>;
    NOT?: Array<TagWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    color?: InstanceType<typeof EnumColorFilter>;
    isException?: InstanceType<typeof BoolFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class TagWhereInput {
    AND?: Array<TagWhereInput>;
    OR?: Array<TagWhereInput>;
    NOT?: Array<TagWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    color?: InstanceType<typeof EnumColorFilter>;
    isException?: InstanceType<typeof BoolFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class Tag {
    id: number;
    name: string;
    color: keyof typeof Color;
    isException: boolean;
    createdAt: Date;
    updatedAt: Date;
    Claims?: Array<Claim>;
    _count?: InstanceType<typeof TagCount>;
}
export declare class UpdateManyTagArgs {
    data: InstanceType<typeof TagUpdateManyMutationInput>;
    where?: InstanceType<typeof TagWhereInput>;
}
export declare class UpdateOneTagArgs {
    data: InstanceType<typeof TagUpdateInput>;
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
}
export declare class UpsertOneTagArgs {
    where: Prisma.AtLeast<TagWhereUniqueInput, 'id'>;
    create: InstanceType<typeof TagCreateInput>;
    update: InstanceType<typeof TagUpdateInput>;
}
export declare class AggregateTransaction {
    _count?: InstanceType<typeof TransactionCountAggregate>;
    _avg?: InstanceType<typeof TransactionAvgAggregate>;
    _sum?: InstanceType<typeof TransactionSumAggregate>;
    _min?: InstanceType<typeof TransactionMinAggregate>;
    _max?: InstanceType<typeof TransactionMaxAggregate>;
}
export declare class CreateManyTransactionArgs {
    data: Array<TransactionCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneTransactionArgs {
    data: InstanceType<typeof TransactionCreateInput>;
}
export declare class DeleteManyTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class DeleteOneTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
}
export declare class FindFirstTransactionOrThrowArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindFirstTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindManyTransactionArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
export declare class FindUniqueTransactionOrThrowArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
}
export declare class FindUniqueTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
}
export declare class TransactionAggregateArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TransactionCountAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumAggregateInput>;
    _min?: InstanceType<typeof TransactionMinAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxAggregateInput>;
}
export declare class TransactionAvgAggregateInput {
    id?: true;
    amount?: true;
    accountId?: true;
}
export declare class TransactionAvgAggregate {
    id?: number;
    amount?: number;
    accountId?: number;
}
export declare class TransactionAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionCountAggregateInput {
    id?: true;
    amount?: true;
    transactionType?: true;
    description?: true;
    createdAt?: true;
    accountId?: true;
    _all?: true;
}
export declare class TransactionCountAggregate {
    id: number;
    amount: number;
    transactionType: number;
    description: number;
    createdAt: number;
    accountId: number;
    _all: number;
}
export declare class TransactionCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionCreateManyAccountInputEnvelope {
    data: Array<TransactionCreateManyAccountInput>;
    skipDuplicates?: boolean;
}
export declare class TransactionCreateManyAccountInput {
    id?: number;
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
}
export declare class TransactionCreateManyInput {
    id?: number;
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
    accountId: number;
}
export declare class TransactionCreateNestedManyWithoutAccountInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
}
export declare class TransactionCreateOrConnectWithoutAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof TransactionCreateWithoutAccountInput>;
}
export declare class TransactionCreateWithoutAccountInput {
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
}
export declare class TransactionCreateInput {
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
    account: InstanceType<typeof AccountCreateNestedOneWithoutTransactionsInput>;
}
export declare class TransactionGroupByArgs {
    where?: InstanceType<typeof TransactionWhereInput>;
    orderBy?: Array<TransactionOrderByWithAggregationInput>;
    by: Array<keyof typeof TransactionScalarFieldEnum>;
    having?: InstanceType<typeof TransactionScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof TransactionCountAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumAggregateInput>;
    _min?: InstanceType<typeof TransactionMinAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxAggregateInput>;
}
export declare class TransactionGroupBy {
    id: number;
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt: Date | string;
    accountId: number;
    _count?: InstanceType<typeof TransactionCountAggregate>;
    _avg?: InstanceType<typeof TransactionAvgAggregate>;
    _sum?: InstanceType<typeof TransactionSumAggregate>;
    _min?: InstanceType<typeof TransactionMinAggregate>;
    _max?: InstanceType<typeof TransactionMaxAggregate>;
}
export declare class TransactionListRelationFilter {
    every?: InstanceType<typeof TransactionWhereInput>;
    some?: InstanceType<typeof TransactionWhereInput>;
    none?: InstanceType<typeof TransactionWhereInput>;
}
export declare class TransactionMaxAggregateInput {
    id?: true;
    amount?: true;
    transactionType?: true;
    description?: true;
    createdAt?: true;
    accountId?: true;
}
export declare class TransactionMaxAggregate {
    id?: number;
    amount?: number;
    transactionType?: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
    accountId?: number;
}
export declare class TransactionMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionMinAggregateInput {
    id?: true;
    amount?: true;
    transactionType?: true;
    description?: true;
    createdAt?: true;
    accountId?: true;
}
export declare class TransactionMinAggregate {
    id?: number;
    amount?: number;
    transactionType?: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
    accountId?: number;
}
export declare class TransactionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class TransactionOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof TransactionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof TransactionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof TransactionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof TransactionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof TransactionSumOrderByAggregateInput>;
}
export declare class TransactionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    transactionType?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
    account?: InstanceType<typeof AccountOrderByWithRelationInput>;
}
export declare class TransactionScalarWhereWithAggregatesInput {
    AND?: Array<TransactionScalarWhereWithAggregatesInput>;
    OR?: Array<TransactionScalarWhereWithAggregatesInput>;
    NOT?: Array<TransactionScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    amount?: InstanceType<typeof FloatWithAggregatesFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    accountId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class TransactionScalarWhereInput {
    AND?: Array<TransactionScalarWhereInput>;
    OR?: Array<TransactionScalarWhereInput>;
    NOT?: Array<TransactionScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    accountId?: InstanceType<typeof IntFilter>;
}
export declare class TransactionSumAggregateInput {
    id?: true;
    amount?: true;
    accountId?: true;
}
export declare class TransactionSumAggregate {
    id?: number;
    amount?: number;
    accountId?: number;
}
export declare class TransactionSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    accountId?: keyof typeof SortOrder;
}
export declare class TransactionUncheckedCreateNestedManyWithoutAccountInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
}
export declare class TransactionUncheckedCreateWithoutAccountInput {
    id?: number;
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
}
export declare class TransactionUncheckedCreateInput {
    id?: number;
    amount: number;
    transactionType: keyof typeof TransactionType;
    description?: string;
    createdAt?: Date | string;
    accountId: number;
}
export declare class TransactionUncheckedUpdateManyWithoutAccountNestedInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUncheckedUpdateManyWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateWithoutAccountInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    accountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class TransactionUpdateManyMutationInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUpdateManyWithWhereWithoutAccountInput {
    where: InstanceType<typeof TransactionScalarWhereInput>;
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
}
export declare class TransactionUpdateManyWithoutAccountNestedInput {
    create?: Array<TransactionCreateWithoutAccountInput>;
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutAccountInput>;
    createMany?: InstanceType<typeof TransactionCreateManyAccountInputEnvelope>;
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
    update?: Array<TransactionUpdateWithWhereUniqueWithoutAccountInput>;
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutAccountInput>;
    deleteMany?: Array<TransactionScalarWhereInput>;
}
export declare class TransactionUpdateWithWhereUniqueWithoutAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    data: InstanceType<typeof TransactionUpdateWithoutAccountInput>;
}
export declare class TransactionUpdateWithoutAccountInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TransactionUpdateInput {
    amount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    account?: InstanceType<typeof AccountUpdateOneRequiredWithoutTransactionsNestedInput>;
}
export declare class TransactionUpsertWithWhereUniqueWithoutAccountInput {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    update: InstanceType<typeof TransactionUpdateWithoutAccountInput>;
    create: InstanceType<typeof TransactionCreateWithoutAccountInput>;
}
export declare class TransactionWhereUniqueInput {
    id?: number;
    AND?: Array<TransactionWhereInput>;
    OR?: Array<TransactionWhereInput>;
    NOT?: Array<TransactionWhereInput>;
    amount?: InstanceType<typeof FloatFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class TransactionWhereInput {
    AND?: Array<TransactionWhereInput>;
    OR?: Array<TransactionWhereInput>;
    NOT?: Array<TransactionWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    amount?: InstanceType<typeof FloatFilter>;
    transactionType?: InstanceType<typeof EnumTransactionTypeFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    accountId?: InstanceType<typeof IntFilter>;
    account?: InstanceType<typeof AccountRelationFilter>;
}
export declare class Transaction {
    id: number;
    amount: number;
    transactionType: keyof typeof TransactionType;
    description: string | null;
    createdAt: Date;
    accountId: number;
    account?: InstanceType<typeof Account>;
}
export declare class UpdateManyTransactionArgs {
    data: InstanceType<typeof TransactionUpdateManyMutationInput>;
    where?: InstanceType<typeof TransactionWhereInput>;
}
export declare class UpdateOneTransactionArgs {
    data: InstanceType<typeof TransactionUpdateInput>;
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
}
export declare class UpsertOneTransactionArgs {
    where: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;
    create: InstanceType<typeof TransactionCreateInput>;
    update: InstanceType<typeof TransactionUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserAvgAggregateInput {
    roleId?: true;
}
export declare class UserAvgAggregate {
    roleId?: number;
}
export declare class UserAvgOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
}
export declare class UserCountAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    emailVerifiedAt?: true;
    password?: true;
    profilePictureUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    roleId?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    fullName: number;
    email: number;
    emailVerifiedAt: number;
    password: number;
    profilePictureUrl: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    roleId: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    profilePictureUrl?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
}
export declare class UserCount {
    claimsInput?: number;
    claimActions?: number;
    announcementCreated?: number;
    notification?: number;
    claimsOnWait?: number;
    documentPrints?: number;
}
export declare class UserCreateManyRoleInputEnvelope {
    data: Array<UserCreateManyRoleInput>;
    skipDuplicates?: boolean;
}
export declare class UserCreateManyRoleInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare class UserCreateManyInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
}
export declare class UserCreateNestedManyWithoutDocumentPrintsInput {
    create?: Array<UserCreateWithoutDocumentPrintsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutDocumentPrintsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
export declare class UserCreateNestedManyWithoutRoleInput {
    create?: Array<UserCreateWithoutRoleInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof UserCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
export declare class UserCreateNestedOneWithoutAnnouncementCreatedInput {
    create?: InstanceType<typeof UserCreateWithoutAnnouncementCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAnnouncementCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateNestedOneWithoutClaimActionsInput {
    create?: InstanceType<typeof UserCreateWithoutClaimActionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimActionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateNestedOneWithoutClaimsInputInput {
    create?: InstanceType<typeof UserCreateWithoutClaimsInputInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimsInputInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateNestedOneWithoutClaimsOnWaitInput {
    create?: InstanceType<typeof UserCreateWithoutClaimsOnWaitInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimsOnWaitInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateNestedOneWithoutNotificationInput {
    create?: InstanceType<typeof UserCreateWithoutNotificationInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutNotificationInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof UserCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateOrConnectWithoutAnnouncementCreatedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutAnnouncementCreatedInput>;
}
export declare class UserCreateOrConnectWithoutClaimActionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutClaimActionsInput>;
}
export declare class UserCreateOrConnectWithoutClaimsInputInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutClaimsInputInput>;
}
export declare class UserCreateOrConnectWithoutClaimsOnWaitInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutClaimsOnWaitInput>;
}
export declare class UserCreateOrConnectWithoutDocumentPrintsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutDocumentPrintsInput>;
}
export declare class UserCreateOrConnectWithoutNotificationInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutNotificationInput>;
}
export declare class UserCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutParticipantInput>;
}
export declare class UserCreateOrConnectWithoutRoleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutRoleInput>;
}
export declare class UserCreateWithoutAnnouncementCreatedInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateWithoutClaimActionsInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateWithoutClaimsInputInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateWithoutClaimsOnWaitInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateWithoutDocumentPrintsInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
}
export declare class UserCreateWithoutNotificationInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateWithoutParticipantInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateWithoutRoleInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserCreateInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserListRelationFilter {
    every?: InstanceType<typeof UserWhereInput>;
    some?: InstanceType<typeof UserWhereInput>;
    none?: InstanceType<typeof UserWhereInput>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    emailVerifiedAt?: true;
    password?: true;
    profilePictureUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    roleId?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    profilePictureUrl?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    emailVerifiedAt?: true;
    password?: true;
    profilePictureUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    roleId?: true;
}
export declare class UserMinAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    profilePictureUrl?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: InstanceType<typeof SortOrderInput>;
    password?: InstanceType<typeof SortOrderInput>;
    profilePictureUrl?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    roleId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: InstanceType<typeof SortOrderInput>;
    password?: InstanceType<typeof SortOrderInput>;
    profilePictureUrl?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    roleId?: keyof typeof SortOrder;
    role?: InstanceType<typeof RoleOrderByWithRelationInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    claimsInput?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
    claimActions?: InstanceType<typeof ClaimStatusOrderByRelationAggregateInput>;
    announcementCreated?: InstanceType<typeof AnnouncementOrderByRelationAggregateInput>;
    notification?: InstanceType<typeof NotificationOrderByRelationAggregateInput>;
    claimsOnWait?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
    documentPrints?: InstanceType<typeof DocumentOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    fullName?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    emailVerifiedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    password?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    profilePictureUrl?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    roleId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    emailVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringNullableFilter>;
    profilePictureUrl?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    roleId?: InstanceType<typeof IntFilter>;
}
export declare class UserSumAggregateInput {
    roleId?: true;
}
export declare class UserSumAggregate {
    roleId?: number;
}
export declare class UserSumOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
}
export declare class UserUncheckedCreateNestedManyWithoutDocumentPrintsInput {
    create?: Array<UserCreateWithoutDocumentPrintsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutDocumentPrintsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutRoleInput {
    create?: Array<UserCreateWithoutRoleInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof UserCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
export declare class UserUncheckedCreateWithoutAnnouncementCreatedInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateWithoutClaimActionsInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateWithoutClaimsInputInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateWithoutClaimsOnWaitInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateWithoutDocumentPrintsInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
}
export declare class UserUncheckedCreateWithoutNotificationInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateWithoutParticipantInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateWithoutRoleInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    profilePictureUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput>;
    notification?: InstanceType<typeof NotificationUncheckedCreateNestedManyWithoutUserInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutWaitingForInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutPrintedbyInput>;
}
export declare class UserUncheckedUpdateManyWithoutDocumentPrintsNestedInput {
    create?: Array<UserCreateWithoutDocumentPrintsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutDocumentPrintsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDocumentPrintsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutDocumentPrintsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutDocumentPrintsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutDocumentPrintsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutRoleNestedInput {
    create?: Array<UserCreateWithoutRoleInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutRoleInput>;
    createMany?: InstanceType<typeof UserCreateManyRoleInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutRoleInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutRoleInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutRoleInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutAnnouncementCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClaimActionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClaimsInputInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClaimsOnWaitInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateWithoutDocumentPrintsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
}
export declare class UserUncheckedUpdateWithoutNotificationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateWithoutRoleInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUncheckedUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateManyWithWhereWithoutDocumentPrintsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutRoleInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithoutDocumentPrintsNestedInput {
    create?: Array<UserCreateWithoutDocumentPrintsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutDocumentPrintsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDocumentPrintsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutDocumentPrintsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutDocumentPrintsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutRoleNestedInput {
    create?: Array<UserCreateWithoutRoleInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutRoleInput>;
    createMany?: InstanceType<typeof UserCreateManyRoleInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutRoleInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutRoleInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateOneRequiredWithoutAnnouncementCreatedNestedInput {
    create?: InstanceType<typeof UserCreateWithoutAnnouncementCreatedInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutAnnouncementCreatedInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutAnnouncementCreatedInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAnnouncementCreatedInput>;
}
export declare class UserUpdateOneRequiredWithoutClaimActionsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutClaimActionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimActionsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutClaimActionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutClaimActionsInput>;
}
export declare class UserUpdateOneRequiredWithoutNotificationNestedInput {
    create?: InstanceType<typeof UserCreateWithoutNotificationInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutNotificationInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutNotificationInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutNotificationInput>;
}
export declare class UserUpdateOneRequiredWithoutParticipantNestedInput {
    create?: InstanceType<typeof UserCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutParticipantInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class UserUpdateOneWithoutClaimsInputNestedInput {
    create?: InstanceType<typeof UserCreateWithoutClaimsInputInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimsInputInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutClaimsInputInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutClaimsInputInput>;
}
export declare class UserUpdateOneWithoutClaimsOnWaitNestedInput {
    create?: InstanceType<typeof UserCreateWithoutClaimsOnWaitInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimsOnWaitInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutClaimsOnWaitInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutClaimsOnWaitInput>;
}
export declare class UserUpdateToOneWithWhereWithoutAnnouncementCreatedInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutAnnouncementCreatedInput>;
}
export declare class UserUpdateToOneWithWhereWithoutClaimActionsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutClaimActionsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutClaimsInputInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutClaimsInputInput>;
}
export declare class UserUpdateToOneWithWhereWithoutClaimsOnWaitInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutClaimsOnWaitInput>;
}
export declare class UserUpdateToOneWithWhereWithoutNotificationInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutNotificationInput>;
}
export declare class UserUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutParticipantInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutDocumentPrintsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    data: InstanceType<typeof UserUpdateWithoutDocumentPrintsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    data: InstanceType<typeof UserUpdateWithoutRoleInput>;
}
export declare class UserUpdateWithoutAnnouncementCreatedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateWithoutClaimActionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateWithoutClaimsInputInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateWithoutClaimsOnWaitInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateWithoutDocumentPrintsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
}
export declare class UserUpdateWithoutNotificationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateWithoutRoleInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    profilePictureUrl?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
    announcementCreated?: InstanceType<typeof AnnouncementUpdateManyWithoutCreatedByNestedInput>;
    notification?: InstanceType<typeof NotificationUpdateManyWithoutUserNestedInput>;
    claimsOnWait?: InstanceType<typeof ClaimUpdateManyWithoutWaitingForNestedInput>;
    documentPrints?: InstanceType<typeof DocumentUpdateManyWithoutPrintedbyNestedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutDocumentPrintsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update: InstanceType<typeof UserUpdateWithoutDocumentPrintsInput>;
    create: InstanceType<typeof UserCreateWithoutDocumentPrintsInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update: InstanceType<typeof UserUpdateWithoutRoleInput>;
    create: InstanceType<typeof UserCreateWithoutRoleInput>;
}
export declare class UserUpsertWithoutAnnouncementCreatedInput {
    update: InstanceType<typeof UserUpdateWithoutAnnouncementCreatedInput>;
    create: InstanceType<typeof UserCreateWithoutAnnouncementCreatedInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutClaimActionsInput {
    update: InstanceType<typeof UserUpdateWithoutClaimActionsInput>;
    create: InstanceType<typeof UserCreateWithoutClaimActionsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutClaimsInputInput {
    update: InstanceType<typeof UserUpdateWithoutClaimsInputInput>;
    create: InstanceType<typeof UserCreateWithoutClaimsInputInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutClaimsOnWaitInput {
    update: InstanceType<typeof UserUpdateWithoutClaimsOnWaitInput>;
    create: InstanceType<typeof UserCreateWithoutClaimsOnWaitInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutNotificationInput {
    update: InstanceType<typeof UserUpdateWithoutNotificationInput>;
    create: InstanceType<typeof UserCreateWithoutNotificationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutParticipantInput {
    update: InstanceType<typeof UserUpdateWithoutParticipantInput>;
    create: InstanceType<typeof UserCreateWithoutParticipantInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    fullName?: InstanceType<typeof StringFilter>;
    emailVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringNullableFilter>;
    profilePictureUrl?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    roleId?: InstanceType<typeof IntFilter>;
    role?: InstanceType<typeof RoleRelationFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    claimsInput?: InstanceType<typeof ClaimListRelationFilter>;
    claimActions?: InstanceType<typeof ClaimStatusListRelationFilter>;
    announcementCreated?: InstanceType<typeof AnnouncementListRelationFilter>;
    notification?: InstanceType<typeof NotificationListRelationFilter>;
    claimsOnWait?: InstanceType<typeof ClaimListRelationFilter>;
    documentPrints?: InstanceType<typeof DocumentListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    emailVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringNullableFilter>;
    profilePictureUrl?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    roleId?: InstanceType<typeof IntFilter>;
    role?: InstanceType<typeof RoleRelationFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    claimsInput?: InstanceType<typeof ClaimListRelationFilter>;
    claimActions?: InstanceType<typeof ClaimStatusListRelationFilter>;
    announcementCreated?: InstanceType<typeof AnnouncementListRelationFilter>;
    notification?: InstanceType<typeof NotificationListRelationFilter>;
    claimsOnWait?: InstanceType<typeof ClaimListRelationFilter>;
    documentPrints?: InstanceType<typeof DocumentListRelationFilter>;
}
export declare class User {
    id: string;
    fullName: string;
    email: string;
    emailVerifiedAt: Date | null;
    password: string | null;
    profilePictureUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    roleId: number;
    role?: InstanceType<typeof Role>;
    participant?: InstanceType<typeof Participant> | null;
    claimsInput?: Array<Claim>;
    claimActions?: Array<ClaimStatus>;
    announcementCreated?: Array<Announcement>;
    notification?: Array<Notification>;
    claimsOnWait?: Array<Claim>;
    documentPrints?: Array<Document>;
    _count?: InstanceType<typeof UserCount>;
}
