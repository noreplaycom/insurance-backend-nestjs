import { Prisma } from '@prisma/client';
export declare enum UserScalarFieldEnum {
    id = "id",
    fullName = "fullName",
    email = "email",
    emailVerifiedAt = "emailVerifiedAt",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    roleId = "roleId",
    participantId = "participantId"
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
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum RolePermissionScalarFieldEnum {
    roleId = "roleId",
    permission = "permission"
}
export declare enum RoleScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    higherLevelThanId = "higherLevelThanId"
}
export declare enum RegionScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ProgramParticipationScalarFieldEnum {
    id = "id",
    bpjsNumber = "bpjsNumber",
    nonActiveReason = "nonActiveReason",
    effectiveDate = "effectiveDate",
    nonActiveDate = "nonActiveDate",
    participantId = "participantId",
    fundingId = "fundingId",
    programId = "programId"
}
export declare enum ProgramScalarFieldEnum {
    id = "id",
    plan = "plan",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    allowanceCeiling = "allowanceCeiling",
    'class' = "class",
    maxAllowance = "maxAllowance"
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
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
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
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNKNOWN = "UNKNOWN"
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
export declare enum Class {
    I = "I",
    II = "II",
    III = "III"
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
export declare enum ApplicationType {
    SANTUNAN_HARIAN_RAWAT_INAP = "SANTUNAN_HARIAN_RAWAT_INAP",
    BANTUAN_BIAYA_CUCI_DARAH = "BANTUAN_BIAYA_CUCI_DARAH",
    BANTUAN_KURSI_RODA = "BANTUAN_KURSI_RODA",
    BANTUAN_WALKER = "BANTUAN_WALKER",
    BANTUAN_IGD_UGD = "BANTUAN_IGD_UGD",
    BANTUAN_RAWAT_INAP = "BANTUAN_RAWAT_INAP"
}
export declare enum AdmedicaStatus {
    NON_ADMEDICA = "NON_ADMEDICA",
    ADMEDICA = "ADMEDICA"
}
export declare enum ParticipantScalarFieldEnum {
    gender = "gender",
    birthDate = "birthDate",
    nationalId = "nationalId",
    familyCardNumber = "familyCardNumber",
    taxId = "taxId",
    isActive = "isActive",
    status = "status",
    userId = "userId",
    relationId = "relationId",
    bankAccountId = "bankAccountId"
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
    participantId = "participantId",
    branchId = "branchId",
    groupId = "groupId",
    regionId = "regionId"
}
export declare enum DocumentScalarFieldEnum {
    id = "id",
    name = "name",
    path = "path",
    size = "size",
    printCount = "printCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    source = "source",
    type = "type",
    claimProcessId = "claimProcessId"
}
export declare enum DiseaseGroupScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    diseaseClusterId = "diseaseClusterId"
}
export declare enum DiseaseClusterScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum DiseaseScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    groupId = "groupId"
}
export declare enum ContactInfoScalarFieldEnum {
    id = "id",
    telp = "telp",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    participantId = "participantId",
    addressId = "addressId"
}
export declare enum CompanyScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ClinicScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}
export declare enum ClaimTypeScalarFieldEnum {
    id = "id",
    jenis = "jenis",
    jenisRI = "jenisRI",
    plan = "plan",
    claimPeriod = "claimPeriod",
    conditions = "conditions",
    programId = "programId",
    claimId = "claimId"
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
    guaranteeLetterId = "guaranteeLetterId"
}
export declare enum ClaimProcessScalarFieldEnum {
    id = "id",
    startTreatment = "startTreatment",
    endTreatment = "endTreatment",
    expeditionDate = "expeditionDate",
    reclaim = "reclaim",
    processDate = "processDate",
    submissionNote = "submissionNote",
    description = "description",
    additionalNote = "additionalNote",
    claimId = "claimId"
}
export declare enum ClaimFinancialScalarFieldEnum {
    id = "id",
    requestedAmount = "requestedAmount",
    paidAmount = "paidAmount",
    rejectedAmount = "rejectedAmount",
    transactionProcessDate = "transactionProcessDate",
    transferDate = "transferDate",
    claimId = "claimId",
    branchId = "branchId"
}
export declare enum ClaimScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    channel = "channel",
    admedicaStatus = "admedicaStatus",
    companyId = "companyId",
    participantId = "participantId",
    claimFinancialId = "claimFinancialId",
    claimProcessId = "claimProcessId",
    diseaseId = "diseaseId",
    clinicId = "clinicId",
    inputedById = "inputedById",
    claimTypeId = "claimTypeId"
}
export declare enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
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
    accountName = "accountName",
    participantId = "participantId"
}
export declare enum AddressScalarFieldEnum {
    id = "id",
    address = "address",
    cityId = "cityId",
    postalCode = "postalCode"
}
export declare enum AccountScalarFieldEnum {
    id = "id",
    currentBalance = "currentBalance",
    currentBalanceLastUpdate = "currentBalanceLastUpdate",
    participantId = "participantId"
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
    participantId?: true;
    _all?: true;
}
export declare class AccountCountAggregate {
    id: number;
    currentBalance: number;
    currentBalanceLastUpdate: number;
    participantId: number;
    _all: number;
}
export declare class AccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class AccountCount {
    transactions?: number;
    programParticipation?: number;
}
export declare class AccountCreateManyParticipantInputEnvelope {
    data: Array<AccountCreateManyParticipantInput>;
    skipDuplicates?: boolean;
}
export declare class AccountCreateManyParticipantInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
}
export declare class AccountCreateManyInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participantId: string;
}
export declare class AccountCreateNestedManyWithoutParticipantInput {
    create?: Array<AccountCreateWithoutParticipantInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof AccountCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
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
export declare class AccountCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutParticipantInput>;
}
export declare class AccountCreateOrConnectWithoutProgramParticipationInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutProgramParticipationInput>;
}
export declare class AccountCreateOrConnectWithoutTransactionsInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
}
export declare class AccountCreateWithoutParticipantInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutFundingInput>;
}
export declare class AccountCreateWithoutProgramParticipationInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutBalancesInput>;
    transactions?: InstanceType<typeof TransactionCreateNestedManyWithoutAccountInput>;
}
export declare class AccountCreateWithoutTransactionsInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutBalancesInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutFundingInput>;
}
export declare class AccountCreateInput {
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutBalancesInput>;
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
    participantId: string;
    _count?: InstanceType<typeof AccountCountAggregate>;
    _avg?: InstanceType<typeof AccountAvgAggregate>;
    _sum?: InstanceType<typeof AccountSumAggregate>;
    _min?: InstanceType<typeof AccountMinAggregate>;
    _max?: InstanceType<typeof AccountMaxAggregate>;
}
export declare class AccountListRelationFilter {
    every?: InstanceType<typeof AccountWhereInput>;
    some?: InstanceType<typeof AccountWhereInput>;
    none?: InstanceType<typeof AccountWhereInput>;
}
export declare class AccountMaxAggregateInput {
    id?: true;
    currentBalance?: true;
    currentBalanceLastUpdate?: true;
    participantId?: true;
}
export declare class AccountMaxAggregate {
    id?: number;
    currentBalance?: number;
    currentBalanceLastUpdate?: Date | string;
    participantId?: string;
}
export declare class AccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class AccountMinAggregateInput {
    id?: true;
    currentBalance?: true;
    currentBalanceLastUpdate?: true;
    participantId?: true;
}
export declare class AccountMinAggregate {
    id?: number;
    currentBalance?: number;
    currentBalanceLastUpdate?: Date | string;
    participantId?: string;
}
export declare class AccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class AccountOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    currentBalance?: keyof typeof SortOrder;
    currentBalanceLastUpdate?: InstanceType<typeof SortOrderInput>;
    participantId?: keyof typeof SortOrder;
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
    participantId?: keyof typeof SortOrder;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
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
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class AccountScalarWhereInput {
    AND?: Array<AccountScalarWhereInput>;
    OR?: Array<AccountScalarWhereInput>;
    NOT?: Array<AccountScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    currentBalance?: InstanceType<typeof FloatFilter>;
    currentBalanceLastUpdate?: InstanceType<typeof DateTimeNullableFilter>;
    participantId?: InstanceType<typeof StringFilter>;
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
export declare class AccountUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<AccountCreateWithoutParticipantInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof AccountCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
}
export declare class AccountUncheckedCreateWithoutParticipantInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput>;
}
export declare class AccountUncheckedCreateWithoutProgramParticipationInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participantId: string;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
}
export declare class AccountUncheckedCreateWithoutTransactionsInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participantId: string;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput>;
}
export declare class AccountUncheckedCreateInput {
    id?: number;
    currentBalance: number;
    currentBalanceLastUpdate?: Date | string;
    participantId: string;
    transactions?: InstanceType<typeof TransactionUncheckedCreateNestedManyWithoutAccountInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput>;
}
export declare class AccountUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<AccountCreateWithoutParticipantInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof AccountCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    update?: Array<AccountUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<AccountUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<AccountScalarWhereInput>;
}
export declare class AccountUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AccountUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutProgramParticipationInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
}
export declare class AccountUncheckedUpdateWithoutTransactionsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUncheckedUpdateManyWithoutAccountNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpdateManyMutationInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class AccountUpdateManyWithWhereWithoutParticipantInput {
    where: InstanceType<typeof AccountScalarWhereInput>;
    data: InstanceType<typeof AccountUpdateManyMutationInput>;
}
export declare class AccountUpdateManyWithoutParticipantNestedInput {
    create?: Array<AccountCreateWithoutParticipantInput>;
    connectOrCreate?: Array<AccountCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof AccountCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AccountWhereUniqueInput, 'id'>>;
    update?: Array<AccountUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<AccountUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<AccountScalarWhereInput>;
}
export declare class AccountUpdateOneRequiredWithoutProgramParticipationNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutProgramParticipationInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutProgramParticipationInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutProgramParticipationInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutProgramParticipationInput>;
}
export declare class AccountUpdateOneRequiredWithoutTransactionsNestedInput {
    create?: InstanceType<typeof AccountCreateWithoutTransactionsInput>;
    connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutTransactionsInput>;
    upsert?: InstanceType<typeof AccountUpsertWithoutTransactionsInput>;
    connect?: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutTransactionsInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutProgramParticipationInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutProgramParticipationInput>;
}
export declare class AccountUpdateToOneWithWhereWithoutTransactionsInput {
    where?: InstanceType<typeof AccountWhereInput>;
    data: InstanceType<typeof AccountUpdateWithoutTransactionsInput>;
}
export declare class AccountUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AccountUpdateWithoutParticipantInput>;
}
export declare class AccountUpdateWithoutParticipantInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpdateWithoutProgramParticipationInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutBalancesNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
}
export declare class AccountUpdateWithoutTransactionsInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutBalancesNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpdateInput {
    currentBalance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    currentBalanceLastUpdate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutBalancesNestedInput>;
    transactions?: InstanceType<typeof TransactionUpdateManyWithoutAccountNestedInput>;
    programParticipation?: InstanceType<typeof ProgramParticipationUpdateManyWithoutFundingNestedInput>;
}
export declare class AccountUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<AccountWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AccountUpdateWithoutParticipantInput>;
    create: InstanceType<typeof AccountCreateWithoutParticipantInput>;
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
    participantId?: InstanceType<typeof StringFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
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
    participantId?: InstanceType<typeof StringFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    transactions?: InstanceType<typeof TransactionListRelationFilter>;
    programParticipation?: InstanceType<typeof ProgramParticipationListRelationFilter>;
}
export declare class Account {
    id: number;
    currentBalance: number;
    currentBalanceLastUpdate: Date | null;
    participantId: string;
    participant?: InstanceType<typeof Participant>;
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
    cityId?: true;
}
export declare class AddressAvgAggregate {
    id?: number;
    cityId?: number;
}
export declare class AddressAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class AddressCountAggregateInput {
    id?: true;
    address?: true;
    cityId?: true;
    postalCode?: true;
    _all?: true;
}
export declare class AddressCountAggregate {
    id: number;
    address: number;
    cityId: number;
    postalCode: number;
    _all: number;
}
export declare class AddressCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class AddressCount {
    ContactInfo?: number;
}
export declare class AddressCreateManyCityInputEnvelope {
    data: Array<AddressCreateManyCityInput>;
    skipDuplicates?: boolean;
}
export declare class AddressCreateManyCityInput {
    id?: number;
    address: string;
    postalCode: string;
}
export declare class AddressCreateManyInput {
    id?: number;
    address: string;
    cityId: number;
    postalCode: string;
}
export declare class AddressCreateNestedManyWithoutCityInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressCreateNestedOneWithoutContactInfoInput {
    create?: InstanceType<typeof AddressCreateWithoutContactInfoInput>;
    connectOrCreate?: InstanceType<typeof AddressCreateOrConnectWithoutContactInfoInput>;
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
export declare class AddressCreateOrConnectWithoutCityInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutCityInput>;
}
export declare class AddressCreateOrConnectWithoutContactInfoInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    create: InstanceType<typeof AddressCreateWithoutContactInfoInput>;
}
export declare class AddressCreateWithoutCityInput {
    address: string;
    postalCode: string;
    ContactInfo?: InstanceType<typeof ContactInfoCreateNestedManyWithoutAddressInput>;
}
export declare class AddressCreateWithoutContactInfoInput {
    address: string;
    postalCode: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
}
export declare class AddressCreateInput {
    address: string;
    postalCode: string;
    city: InstanceType<typeof CityCreateNestedOneWithoutAddressInput>;
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
    cityId: number;
    postalCode: string;
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
    cityId?: true;
    postalCode?: true;
}
export declare class AddressMaxAggregate {
    id?: number;
    address?: string;
    cityId?: number;
    postalCode?: string;
}
export declare class AddressMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class AddressMinAggregateInput {
    id?: true;
    address?: true;
    cityId?: true;
    postalCode?: true;
}
export declare class AddressMinAggregate {
    id?: number;
    address?: string;
    cityId?: number;
    postalCode?: string;
}
export declare class AddressMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
}
export declare class AddressOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class AddressOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
    _count?: InstanceType<typeof AddressCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof AddressAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof AddressMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof AddressMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof AddressSumOrderByAggregateInput>;
}
export declare class AddressOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
    postalCode?: keyof typeof SortOrder;
    city?: InstanceType<typeof CityOrderByWithRelationInput>;
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
    cityId?: InstanceType<typeof IntWithAggregatesFilter>;
    postalCode?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class AddressScalarWhereInput {
    AND?: Array<AddressScalarWhereInput>;
    OR?: Array<AddressScalarWhereInput>;
    NOT?: Array<AddressScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    address?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
}
export declare class AddressSumAggregateInput {
    id?: true;
    cityId?: true;
}
export declare class AddressSumAggregate {
    id?: number;
    cityId?: number;
}
export declare class AddressSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    cityId?: keyof typeof SortOrder;
}
export declare class AddressUncheckedCreateNestedManyWithoutCityInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
}
export declare class AddressUncheckedCreateWithoutCityInput {
    id?: number;
    address: string;
    postalCode: string;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutAddressInput>;
}
export declare class AddressUncheckedCreateWithoutContactInfoInput {
    id?: number;
    address: string;
    cityId: number;
    postalCode: string;
}
export declare class AddressUncheckedCreateInput {
    id?: number;
    address: string;
    cityId: number;
    postalCode: string;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutAddressInput>;
}
export declare class AddressUncheckedUpdateManyWithoutCityNestedInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutCityInput>;
    deleteMany?: Array<AddressScalarWhereInput>;
}
export declare class AddressUncheckedUpdateManyWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateWithoutCityInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUncheckedUpdateWithoutContactInfoInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    cityId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUpdateManyMutationInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class AddressUpdateManyWithWhereWithoutCityInput {
    where: InstanceType<typeof AddressScalarWhereInput>;
    data: InstanceType<typeof AddressUpdateManyMutationInput>;
}
export declare class AddressUpdateManyWithoutCityNestedInput {
    create?: Array<AddressCreateWithoutCityInput>;
    connectOrCreate?: Array<AddressCreateOrConnectWithoutCityInput>;
    upsert?: Array<AddressUpsertWithWhereUniqueWithoutCityInput>;
    createMany?: InstanceType<typeof AddressCreateManyCityInputEnvelope>;
    set?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<AddressWhereUniqueInput, 'id'>>;
    update?: Array<AddressUpdateWithWhereUniqueWithoutCityInput>;
    updateMany?: Array<AddressUpdateManyWithWhereWithoutCityInput>;
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
export declare class AddressUpdateWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    data: InstanceType<typeof AddressUpdateWithoutCityInput>;
}
export declare class AddressUpdateWithoutCityInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUpdateWithoutContactInfoInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
}
export declare class AddressUpdateInput {
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    postalCode?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutAddressNestedInput>;
    ContactInfo?: InstanceType<typeof ContactInfoUpdateManyWithoutAddressNestedInput>;
}
export declare class AddressUpsertWithWhereUniqueWithoutCityInput {
    where: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
    update: InstanceType<typeof AddressUpdateWithoutCityInput>;
    create: InstanceType<typeof AddressCreateWithoutCityInput>;
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
    cityId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    ContactInfo?: InstanceType<typeof ContactInfoListRelationFilter>;
}
export declare class AddressWhereInput {
    AND?: Array<AddressWhereInput>;
    OR?: Array<AddressWhereInput>;
    NOT?: Array<AddressWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    address?: InstanceType<typeof StringFilter>;
    cityId?: InstanceType<typeof IntFilter>;
    postalCode?: InstanceType<typeof StringFilter>;
    city?: InstanceType<typeof CityRelationFilter>;
    ContactInfo?: InstanceType<typeof ContactInfoListRelationFilter>;
}
export declare class Address {
    id: number;
    address: string;
    cityId: number;
    postalCode: string;
    city?: InstanceType<typeof City>;
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
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
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
    participantId?: true;
    _all?: true;
}
export declare class BankAccountCountAggregate {
    id: number;
    accountNumber: number;
    accountName: number;
    participantId: number;
    _all: number;
}
export declare class BankAccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class BankAccountCreateManyInput {
    id?: number;
    accountNumber: number;
    accountName: string;
    participantId: string;
}
export declare class BankAccountCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof BankAccountCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
}
export declare class BankAccountCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
    create: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
}
export declare class BankAccountCreateWithoutParticipantInput {
    accountNumber: number;
    accountName: string;
}
export declare class BankAccountCreateInput {
    accountNumber: number;
    accountName: string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutBankAccountInput>;
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
    participantId: string;
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
    participantId?: true;
}
export declare class BankAccountMaxAggregate {
    id?: number;
    accountNumber?: number;
    accountName?: string;
    participantId?: string;
}
export declare class BankAccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class BankAccountMinAggregateInput {
    id?: true;
    accountNumber?: true;
    accountName?: true;
    participantId?: true;
}
export declare class BankAccountMinAggregate {
    id?: number;
    accountNumber?: number;
    accountName?: string;
    participantId?: string;
}
export declare class BankAccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class BankAccountNullableRelationFilter {
    is?: InstanceType<typeof BankAccountWhereInput>;
    isNot?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class BankAccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    accountNumber?: keyof typeof SortOrder;
    accountName?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
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
    participantId?: keyof typeof SortOrder;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
}
export declare class BankAccountScalarWhereWithAggregatesInput {
    AND?: Array<BankAccountScalarWhereWithAggregatesInput>;
    OR?: Array<BankAccountScalarWhereWithAggregatesInput>;
    NOT?: Array<BankAccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    accountNumber?: InstanceType<typeof FloatWithAggregatesFilter>;
    accountName?: InstanceType<typeof StringWithAggregatesFilter>;
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
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
export declare class BankAccountUncheckedCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof BankAccountCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
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
    participantId: string;
}
export declare class BankAccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUncheckedUpdateOneWithoutParticipantNestedInput {
    create?: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof BankAccountCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof BankAccountUpsertWithoutParticipantInput>;
    disconnect?: InstanceType<typeof BankAccountWhereInput>;
    delete?: InstanceType<typeof BankAccountWhereInput>;
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
    update?: InstanceType<typeof BankAccountUpdateToOneWithWhereWithoutParticipantInput>;
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
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUpdateManyMutationInput {
    accountNumber?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    accountName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BankAccountUpdateOneWithoutParticipantNestedInput {
    create?: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof BankAccountCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof BankAccountUpsertWithoutParticipantInput>;
    disconnect?: InstanceType<typeof BankAccountWhereInput>;
    delete?: InstanceType<typeof BankAccountWhereInput>;
    connect?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
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
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutBankAccountNestedInput>;
}
export declare class BankAccountUpsertWithoutParticipantInput {
    update: InstanceType<typeof BankAccountUpdateWithoutParticipantInput>;
    create: InstanceType<typeof BankAccountCreateWithoutParticipantInput>;
    where?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class BankAccountWhereUniqueInput {
    id?: number;
    participantId?: string;
    AND?: Array<BankAccountWhereInput>;
    OR?: Array<BankAccountWhereInput>;
    NOT?: Array<BankAccountWhereInput>;
    accountNumber?: InstanceType<typeof FloatFilter>;
    accountName?: InstanceType<typeof StringFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
}
export declare class BankAccountWhereInput {
    AND?: Array<BankAccountWhereInput>;
    OR?: Array<BankAccountWhereInput>;
    NOT?: Array<BankAccountWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    accountNumber?: InstanceType<typeof FloatFilter>;
    accountName?: InstanceType<typeof StringFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
}
export declare class BankAccount {
    id: number;
    accountNumber: number;
    accountName: string;
    participantId: string;
    participant?: InstanceType<typeof Participant>;
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
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
}
export declare class FindFirstBankAccountOrThrowArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
export declare class FindFirstBankAccountArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
export declare class FindManyBankAccountArgs {
    where?: InstanceType<typeof BankAccountWhereInput>;
    orderBy?: Array<BankAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BankAccountScalarFieldEnum>;
}
export declare class FindUniqueBankAccountOrThrowArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
}
export declare class FindUniqueBankAccountArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
}
export declare class UpdateManyBankAccountArgs {
    data: InstanceType<typeof BankAccountUpdateManyMutationInput>;
    where?: InstanceType<typeof BankAccountWhereInput>;
}
export declare class UpdateOneBankAccountArgs {
    data: InstanceType<typeof BankAccountUpdateInput>;
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
}
export declare class UpsertOneBankAccountArgs {
    where: Prisma.AtLeast<BankAccountWhereUniqueInput, 'id' | 'participantId'>;
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
export declare class BranchUpdateOneRequiredWithoutClaimFinancialNestedInput {
    create?: InstanceType<typeof BranchCreateWithoutClaimFinancialInput>;
    connectOrCreate?: InstanceType<typeof BranchCreateOrConnectWithoutClaimFinancialInput>;
    upsert?: InstanceType<typeof BranchUpsertWithoutClaimFinancialInput>;
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof BranchUpdateToOneWithWhereWithoutClaimFinancialInput>;
}
export declare class BranchUpdateOneRequiredWithoutEmploymentNestedInput {
    create?: InstanceType<typeof BranchCreateWithoutEmploymentInput>;
    connectOrCreate?: InstanceType<typeof BranchCreateOrConnectWithoutEmploymentInput>;
    upsert?: InstanceType<typeof BranchUpsertWithoutEmploymentInput>;
    connect?: Prisma.AtLeast<BranchWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof BranchUpdateToOneWithWhereWithoutEmploymentInput>;
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
}
export declare class CityAvgAggregate {
    id?: number;
}
export declare class CityAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class CityCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class CityCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class CityCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CityCount {
    address?: number;
}
export declare class CityCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CityCreateNestedOneWithoutAddressInput {
    create?: InstanceType<typeof CityCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutAddressInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
export declare class CityCreateOrConnectWithoutAddressInput {
    where: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CityCreateWithoutAddressInput>;
}
export declare class CityCreateWithoutAddressInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CityCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address?: InstanceType<typeof AddressCreateNestedManyWithoutCityInput>;
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
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof CityCountAggregate>;
    _avg?: InstanceType<typeof CityAvgAggregate>;
    _sum?: InstanceType<typeof CitySumAggregate>;
    _min?: InstanceType<typeof CityMinAggregate>;
    _max?: InstanceType<typeof CityMaxAggregate>;
}
export declare class CityMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CityMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CityMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CityMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CityMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CityMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CityOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CityCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CityAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CityMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CityMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CitySumOrderByAggregateInput>;
}
export declare class CityOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    address?: InstanceType<typeof AddressOrderByRelationAggregateInput>;
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
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class CitySumAggregateInput {
    id?: true;
}
export declare class CitySumAggregate {
    id?: number;
}
export declare class CitySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class CityUncheckedCreateWithoutAddressInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CityUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address?: InstanceType<typeof AddressUncheckedCreateNestedManyWithoutCityInput>;
}
export declare class CityUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CityUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUncheckedUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CityUpdateOneRequiredWithoutAddressNestedInput {
    create?: InstanceType<typeof CityCreateWithoutAddressInput>;
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutAddressInput>;
    upsert?: InstanceType<typeof CityUpsertWithoutAddressInput>;
    connect?: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof CityUpdateToOneWithWhereWithoutAddressInput>;
}
export declare class CityUpdateToOneWithWhereWithoutAddressInput {
    where?: InstanceType<typeof CityWhereInput>;
    data: InstanceType<typeof CityUpdateWithoutAddressInput>;
}
export declare class CityUpdateWithoutAddressInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CityUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateManyWithoutCityNestedInput>;
}
export declare class CityUpsertWithoutAddressInput {
    update: InstanceType<typeof CityUpdateWithoutAddressInput>;
    create: InstanceType<typeof CityCreateWithoutAddressInput>;
    where?: InstanceType<typeof CityWhereInput>;
}
export declare class CityWhereUniqueInput {
    id?: number;
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class CityWhereInput {
    AND?: Array<CityWhereInput>;
    OR?: Array<CityWhereInput>;
    NOT?: Array<CityWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    address?: InstanceType<typeof AddressListRelationFilter>;
}
export declare class City {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    address?: Array<Address>;
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
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimSumAggregateInput>;
    _min?: InstanceType<typeof ClaimMinAggregateInput>;
    _max?: InstanceType<typeof ClaimMaxAggregateInput>;
}
export declare class ClaimAvgAggregateInput {
    companyId?: true;
    claimFinancialId?: true;
    claimProcessId?: true;
    diseaseId?: true;
    clinicId?: true;
    claimTypeId?: true;
}
export declare class ClaimAvgAggregate {
    companyId?: number;
    claimFinancialId?: number;
    claimProcessId?: number;
    diseaseId?: number;
    clinicId?: number;
    claimTypeId?: number;
}
export declare class ClaimAvgOrderByAggregateInput {
    companyId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    claimTypeId?: keyof typeof SortOrder;
}
export declare class ClaimCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    channel?: true;
    admedicaStatus?: true;
    companyId?: true;
    participantId?: true;
    claimFinancialId?: true;
    claimProcessId?: true;
    diseaseId?: true;
    clinicId?: true;
    inputedById?: true;
    claimTypeId?: true;
    _all?: true;
}
export declare class ClaimCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    channel: number;
    admedicaStatus: number;
    companyId: number;
    participantId: number;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId: number;
    clinicId: number;
    inputedById: number;
    claimTypeId: number;
    _all: number;
}
export declare class ClaimCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    companyId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    inputedById?: keyof typeof SortOrder;
    claimTypeId?: keyof typeof SortOrder;
}
export declare class ClaimCount {
    tags?: number;
    claimStatuses?: number;
}
export declare class ClaimCreateManyClinicsInputEnvelope {
    data: Array<ClaimCreateManyClinicsInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimCreateManyClinicsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    inputedById?: string;
    claimTypeId: number;
}
export declare class ClaimCreateManyCompanyInputEnvelope {
    data: Array<ClaimCreateManyCompanyInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimCreateManyCompanyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
}
export declare class ClaimCreateManyDiseaseInputEnvelope {
    data: Array<ClaimCreateManyDiseaseInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimCreateManyDiseaseInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
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
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    claimTypeId: number;
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
    companyId: number;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
}
export declare class ClaimCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
}
export declare class ClaimCreateNestedManyWithoutClinicsInput {
    create?: Array<ClaimCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimCreateManyClinicsInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimCreateNestedManyWithoutCompanyInput {
    create?: Array<ClaimCreateWithoutCompanyInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutCompanyInput>;
    createMany?: InstanceType<typeof ClaimCreateManyCompanyInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimCreateNestedManyWithoutDiseaseInput {
    create?: Array<ClaimCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimCreateManyDiseaseInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimCreateNestedManyWithoutInputedByInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimCreateNestedManyWithoutParticipantInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimCreateNestedManyWithoutTagsInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimCreateNestedOneWithoutClaimFinancialsInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimCreateNestedOneWithoutClaimProcessesInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProcessesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProcessesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimCreateNestedOneWithoutClaimStatusesInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimStatusesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimCreateNestedOneWithoutClaimTypesInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimTypesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimTypesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimCreateOrConnectWithoutClaimFinancialsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
}
export declare class ClaimCreateOrConnectWithoutClaimProcessesInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimProcessesInput>;
}
export declare class ClaimCreateOrConnectWithoutClaimStatusesInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
}
export declare class ClaimCreateOrConnectWithoutClaimTypesInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutClaimTypesInput>;
}
export declare class ClaimCreateOrConnectWithoutClinicsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutClinicsInput>;
}
export declare class ClaimCreateOrConnectWithoutCompanyInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutCompanyInput>;
}
export declare class ClaimCreateOrConnectWithoutDiseaseInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutDiseaseInput>;
}
export declare class ClaimCreateOrConnectWithoutInputedByInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutInputedByInput>;
}
export declare class ClaimCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutParticipantInput>;
}
export declare class ClaimCreateOrConnectWithoutTagsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    create: InstanceType<typeof ClaimCreateWithoutTagsInput>;
}
export declare class ClaimCreateWithoutClaimFinancialsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutClaimProcessesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
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
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
}
export declare class ClaimCreateWithoutClaimTypesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutClinicsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutCompanyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutDiseaseInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
    tags?: InstanceType<typeof TagCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateWithoutInputedByInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
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
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
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
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    company: InstanceType<typeof CompanyCreateNestedOneWithoutClaimsInput>;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutClaimsInput>;
    claimFinancials: InstanceType<typeof ClaimFinancialCreateNestedOneWithoutClaimInput>;
    claimProcesses: InstanceType<typeof ClaimProcessCreateNestedOneWithoutClaimInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedOneWithoutClaimsInput>;
    clinics: InstanceType<typeof ClinicCreateNestedOneWithoutClaimsInput>;
    inputedBy?: InstanceType<typeof UserCreateNestedOneWithoutClaimsInputInput>;
    claimTypes: InstanceType<typeof ClaimTypeCreateNestedOneWithoutClaimsInput>;
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
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
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
    companyId?: true;
    participantId?: true;
    claimFinancialId?: true;
    claimProcessId?: true;
    diseaseId?: true;
    clinicId?: true;
    inputedById?: true;
    claimTypeId?: true;
}
export declare class ClaimMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel?: keyof typeof ClaimChannel;
    admedicaStatus?: keyof typeof AdmedicaStatus;
    companyId?: number;
    participantId?: string;
    claimFinancialId?: number;
    claimProcessId?: number;
    diseaseId?: number;
    clinicId?: number;
    inputedById?: string;
    claimTypeId?: number;
}
export declare class ClaimMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    companyId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    inputedById?: keyof typeof SortOrder;
    claimTypeId?: keyof typeof SortOrder;
}
export declare class ClaimMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    channel?: true;
    admedicaStatus?: true;
    companyId?: true;
    participantId?: true;
    claimFinancialId?: true;
    claimProcessId?: true;
    diseaseId?: true;
    clinicId?: true;
    inputedById?: true;
    claimTypeId?: true;
}
export declare class ClaimMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel?: keyof typeof ClaimChannel;
    admedicaStatus?: keyof typeof AdmedicaStatus;
    companyId?: number;
    participantId?: string;
    claimFinancialId?: number;
    claimProcessId?: number;
    diseaseId?: number;
    clinicId?: number;
    inputedById?: string;
    claimTypeId?: number;
}
export declare class ClaimMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    channel?: keyof typeof SortOrder;
    admedicaStatus?: keyof typeof SortOrder;
    companyId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    inputedById?: keyof typeof SortOrder;
    claimTypeId?: keyof typeof SortOrder;
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
    companyId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: InstanceType<typeof SortOrderInput>;
    clinicId?: keyof typeof SortOrder;
    inputedById?: InstanceType<typeof SortOrderInput>;
    claimTypeId?: keyof typeof SortOrder;
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
    companyId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: InstanceType<typeof SortOrderInput>;
    clinicId?: keyof typeof SortOrder;
    inputedById?: InstanceType<typeof SortOrderInput>;
    claimTypeId?: keyof typeof SortOrder;
    company?: InstanceType<typeof CompanyOrderByWithRelationInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialOrderByWithRelationInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessOrderByWithRelationInput>;
    disease?: InstanceType<typeof DiseaseOrderByWithRelationInput>;
    clinics?: InstanceType<typeof ClinicOrderByWithRelationInput>;
    inputedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    claimTypes?: InstanceType<typeof ClaimTypeOrderByWithRelationInput>;
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
    companyId?: InstanceType<typeof IntWithAggregatesFilter>;
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
    claimFinancialId?: InstanceType<typeof IntWithAggregatesFilter>;
    claimProcessId?: InstanceType<typeof IntWithAggregatesFilter>;
    diseaseId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    clinicId?: InstanceType<typeof IntWithAggregatesFilter>;
    inputedById?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    claimTypeId?: InstanceType<typeof IntWithAggregatesFilter>;
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
    companyId?: InstanceType<typeof IntFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    claimFinancialId?: InstanceType<typeof IntFilter>;
    claimProcessId?: InstanceType<typeof IntFilter>;
    diseaseId?: InstanceType<typeof IntNullableFilter>;
    clinicId?: InstanceType<typeof IntFilter>;
    inputedById?: InstanceType<typeof StringNullableFilter>;
    claimTypeId?: InstanceType<typeof IntFilter>;
}
export declare class ClaimSumAggregateInput {
    companyId?: true;
    claimFinancialId?: true;
    claimProcessId?: true;
    diseaseId?: true;
    clinicId?: true;
    claimTypeId?: true;
}
export declare class ClaimSumAggregate {
    companyId?: number;
    claimFinancialId?: number;
    claimProcessId?: number;
    diseaseId?: number;
    clinicId?: number;
    claimTypeId?: number;
}
export declare class ClaimSumOrderByAggregateInput {
    companyId?: keyof typeof SortOrder;
    claimFinancialId?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
    diseaseId?: keyof typeof SortOrder;
    clinicId?: keyof typeof SortOrder;
    claimTypeId?: keyof typeof SortOrder;
}
export declare class ClaimUncheckedCreateNestedManyWithoutClinicsInput {
    create?: Array<ClaimCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimCreateManyClinicsInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutCompanyInput {
    create?: Array<ClaimCreateWithoutCompanyInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutCompanyInput>;
    createMany?: InstanceType<typeof ClaimCreateManyCompanyInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutDiseaseInput {
    create?: Array<ClaimCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimCreateManyDiseaseInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutInputedByInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimUncheckedCreateNestedManyWithoutTagsInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
}
export declare class ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimUncheckedCreateNestedOneWithoutClaimProcessesInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProcessesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProcessesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimUncheckedCreateNestedOneWithoutClaimTypesInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimTypesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimTypesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class ClaimUncheckedCreateWithoutClaimFinancialsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutClaimProcessesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
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
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
}
export declare class ClaimUncheckedCreateWithoutClaimTypesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutClinicsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    inputedById?: string;
    claimTypeId: number;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutCompanyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutDiseaseInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateWithoutInputedByInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    claimTypeId: number;
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
    companyId: number;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
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
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    channel: keyof typeof ClaimChannel;
    admedicaStatus: keyof typeof AdmedicaStatus;
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId?: number;
    clinicId: number;
    inputedById?: string;
    claimTypeId: number;
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutClaimsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutClaimInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutClinicsNestedInput {
    create?: Array<ClaimCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutClinicsInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimCreateManyClinicsInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutClinicsInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutClinicsInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutClinicsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutCompanyNestedInput {
    create?: Array<ClaimCreateWithoutCompanyInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutCompanyInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutCompanyInput>;
    createMany?: InstanceType<typeof ClaimCreateManyCompanyInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutCompanyInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutCompanyInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutCompanyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutDiseaseNestedInput {
    create?: Array<ClaimCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutDiseaseInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimCreateManyDiseaseInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutDiseaseInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutDiseaseInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutDiseaseInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutInputedByNestedInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
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
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
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
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyWithoutTagsNestedInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
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
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimFinancialsInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimFinancialsInput>;
}
export declare class ClaimUncheckedUpdateOneWithoutClaimProcessesNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProcessesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProcessesInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimProcessesInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimProcessesInput>;
}
export declare class ClaimUncheckedUpdateOneWithoutClaimTypesNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimTypesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimTypesInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimTypesInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimTypesInput>;
}
export declare class ClaimUncheckedUpdateWithoutClaimFinancialsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutClaimProcessesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutClaimTypesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutClinicsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutCompanyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutDiseaseInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateWithoutInputedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    companyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimFinancialId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    diseaseId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    clinicId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    inputedById?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    claimTypeId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
}
export declare class ClaimUpdateManyWithWhereWithoutClinicsInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
}
export declare class ClaimUpdateManyWithWhereWithoutCompanyInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
}
export declare class ClaimUpdateManyWithWhereWithoutDiseaseInput {
    where: InstanceType<typeof ClaimScalarWhereInput>;
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
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
export declare class ClaimUpdateManyWithoutClinicsNestedInput {
    create?: Array<ClaimCreateWithoutClinicsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutClinicsInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutClinicsInput>;
    createMany?: InstanceType<typeof ClaimCreateManyClinicsInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutClinicsInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutClinicsInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutCompanyNestedInput {
    create?: Array<ClaimCreateWithoutCompanyInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutCompanyInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutCompanyInput>;
    createMany?: InstanceType<typeof ClaimCreateManyCompanyInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutCompanyInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutCompanyInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutDiseaseNestedInput {
    create?: Array<ClaimCreateWithoutDiseaseInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutDiseaseInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutDiseaseInput>;
    createMany?: InstanceType<typeof ClaimCreateManyDiseaseInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutDiseaseInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutDiseaseInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutInputedByNestedInput {
    create?: Array<ClaimCreateWithoutInputedByInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutInputedByInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutInputedByInput>;
    createMany?: InstanceType<typeof ClaimCreateManyInputedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutInputedByInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutInputedByInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutParticipantNestedInput {
    create?: Array<ClaimCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ClaimCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateManyWithoutTagsNestedInput {
    create?: Array<ClaimCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClaimCreateOrConnectWithoutTagsInput>;
    upsert?: Array<ClaimUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    delete?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    connect?: Array<Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>>;
    update?: Array<ClaimUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<ClaimUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<ClaimScalarWhereInput>;
}
export declare class ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimStatusesInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimStatusesInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimStatusesInput>;
}
export declare class ClaimUpdateOneWithoutClaimFinancialsNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimFinancialsInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimFinancialsInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimFinancialsInput>;
}
export declare class ClaimUpdateOneWithoutClaimProcessesNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimProcessesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimProcessesInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimProcessesInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimProcessesInput>;
}
export declare class ClaimUpdateOneWithoutClaimTypesNestedInput {
    create?: InstanceType<typeof ClaimCreateWithoutClaimTypesInput>;
    connectOrCreate?: InstanceType<typeof ClaimCreateOrConnectWithoutClaimTypesInput>;
    upsert?: InstanceType<typeof ClaimUpsertWithoutClaimTypesInput>;
    disconnect?: InstanceType<typeof ClaimWhereInput>;
    delete?: InstanceType<typeof ClaimWhereInput>;
    connect?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update?: InstanceType<typeof ClaimUpdateToOneWithWhereWithoutClaimTypesInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimFinancialsInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimFinancialsInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimProcessesInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimProcessesInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimStatusesInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimStatusesInput>;
}
export declare class ClaimUpdateToOneWithWhereWithoutClaimTypesInput {
    where?: InstanceType<typeof ClaimWhereInput>;
    data: InstanceType<typeof ClaimUpdateWithoutClaimTypesInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutClinicsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    data: InstanceType<typeof ClaimUpdateWithoutClinicsInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutCompanyInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    data: InstanceType<typeof ClaimUpdateWithoutCompanyInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutDiseaseInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    data: InstanceType<typeof ClaimUpdateWithoutDiseaseInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutInputedByInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    data: InstanceType<typeof ClaimUpdateWithoutInputedByInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    data: InstanceType<typeof ClaimUpdateWithoutParticipantInput>;
}
export declare class ClaimUpdateWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    data: InstanceType<typeof ClaimUpdateWithoutTagsInput>;
}
export declare class ClaimUpdateWithoutClaimFinancialsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutClaimProcessesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
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
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
}
export declare class ClaimUpdateWithoutClaimTypesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutClinicsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutCompanyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutDiseaseInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateWithoutInputedByInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
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
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
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
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    channel?: InstanceType<typeof EnumClaimChannelFieldUpdateOperationsInput>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFieldUpdateOperationsInput>;
    company?: InstanceType<typeof CompanyUpdateOneRequiredWithoutClaimsNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutClaimsNestedInput>;
    claimFinancials?: InstanceType<typeof ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput>;
    claimProcesses?: InstanceType<typeof ClaimProcessUpdateOneRequiredWithoutClaimNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateOneWithoutClaimsNestedInput>;
    clinics?: InstanceType<typeof ClinicUpdateOneRequiredWithoutClaimsNestedInput>;
    inputedBy?: InstanceType<typeof UserUpdateOneWithoutClaimsInputNestedInput>;
    claimTypes?: InstanceType<typeof ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput>;
    tags?: InstanceType<typeof TagUpdateManyWithoutClaimsNestedInput>;
    claimStatuses?: InstanceType<typeof ClaimStatusUpdateManyWithoutClaimNestedInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutClinicsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update: InstanceType<typeof ClaimUpdateWithoutClinicsInput>;
    create: InstanceType<typeof ClaimCreateWithoutClinicsInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutCompanyInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update: InstanceType<typeof ClaimUpdateWithoutCompanyInput>;
    create: InstanceType<typeof ClaimCreateWithoutCompanyInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutDiseaseInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update: InstanceType<typeof ClaimUpdateWithoutDiseaseInput>;
    create: InstanceType<typeof ClaimCreateWithoutDiseaseInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutInputedByInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update: InstanceType<typeof ClaimUpdateWithoutInputedByInput>;
    create: InstanceType<typeof ClaimCreateWithoutInputedByInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update: InstanceType<typeof ClaimUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ClaimCreateWithoutParticipantInput>;
}
export declare class ClaimUpsertWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    update: InstanceType<typeof ClaimUpdateWithoutTagsInput>;
    create: InstanceType<typeof ClaimCreateWithoutTagsInput>;
}
export declare class ClaimUpsertWithoutClaimFinancialsInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimFinancialsInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimFinancialsInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimUpsertWithoutClaimProcessesInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimProcessesInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimProcessesInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimUpsertWithoutClaimStatusesInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimStatusesInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimStatusesInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimUpsertWithoutClaimTypesInput {
    update: InstanceType<typeof ClaimUpdateWithoutClaimTypesInput>;
    create: InstanceType<typeof ClaimCreateWithoutClaimTypesInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class ClaimWhereUniqueInput {
    id?: string;
    claimFinancialId?: number;
    claimProcessId?: number;
    claimTypeId?: number;
    AND?: Array<ClaimWhereInput>;
    OR?: Array<ClaimWhereInput>;
    NOT?: Array<ClaimWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    channel?: InstanceType<typeof EnumClaimChannelFilter>;
    admedicaStatus?: InstanceType<typeof EnumAdmedicaStatusFilter>;
    companyId?: InstanceType<typeof IntFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    diseaseId?: InstanceType<typeof IntNullableFilter>;
    clinicId?: InstanceType<typeof IntFilter>;
    inputedById?: InstanceType<typeof StringNullableFilter>;
    company?: InstanceType<typeof CompanyRelationFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    claimFinancials?: InstanceType<typeof ClaimFinancialRelationFilter>;
    claimProcesses?: InstanceType<typeof ClaimProcessRelationFilter>;
    disease?: InstanceType<typeof DiseaseNullableRelationFilter>;
    clinics?: InstanceType<typeof ClinicRelationFilter>;
    inputedBy?: InstanceType<typeof UserNullableRelationFilter>;
    claimTypes?: InstanceType<typeof ClaimTypeRelationFilter>;
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
    companyId?: InstanceType<typeof IntFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    claimFinancialId?: InstanceType<typeof IntFilter>;
    claimProcessId?: InstanceType<typeof IntFilter>;
    diseaseId?: InstanceType<typeof IntNullableFilter>;
    clinicId?: InstanceType<typeof IntFilter>;
    inputedById?: InstanceType<typeof StringNullableFilter>;
    claimTypeId?: InstanceType<typeof IntFilter>;
    company?: InstanceType<typeof CompanyRelationFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    claimFinancials?: InstanceType<typeof ClaimFinancialRelationFilter>;
    claimProcesses?: InstanceType<typeof ClaimProcessRelationFilter>;
    disease?: InstanceType<typeof DiseaseNullableRelationFilter>;
    clinics?: InstanceType<typeof ClinicRelationFilter>;
    inputedBy?: InstanceType<typeof UserNullableRelationFilter>;
    claimTypes?: InstanceType<typeof ClaimTypeRelationFilter>;
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
    companyId: number;
    participantId: string;
    claimFinancialId: number;
    claimProcessId: number;
    diseaseId: number | null;
    clinicId: number;
    inputedById: string | null;
    claimTypeId: number;
    company?: InstanceType<typeof Company>;
    participant?: InstanceType<typeof Participant>;
    claimFinancials?: InstanceType<typeof ClaimFinancial>;
    claimProcesses?: InstanceType<typeof ClaimProcess>;
    disease?: InstanceType<typeof Disease> | null;
    clinics?: InstanceType<typeof Clinic>;
    inputedBy?: InstanceType<typeof User> | null;
    claimTypes?: InstanceType<typeof ClaimType>;
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
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class FindFirstClaimOrThrowArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimScalarFieldEnum>;
}
export declare class FindFirstClaimArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimScalarFieldEnum>;
}
export declare class FindManyClaimArgs {
    where?: InstanceType<typeof ClaimWhereInput>;
    orderBy?: Array<ClaimOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimScalarFieldEnum>;
}
export declare class FindUniqueClaimOrThrowArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class FindUniqueClaimArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class UpdateManyClaimArgs {
    data: InstanceType<typeof ClaimUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimWhereInput>;
}
export declare class UpdateOneClaimArgs {
    data: InstanceType<typeof ClaimUpdateInput>;
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
}
export declare class UpsertOneClaimArgs {
    where: Prisma.AtLeast<ClaimWhereUniqueInput, 'id' | 'claimFinancialId' | 'claimProcessId' | 'claimTypeId'>;
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
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
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
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    branchId?: true;
}
export declare class ClaimFinancialAvgAggregate {
    id?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    branchId?: number;
}
export declare class ClaimFinancialAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialCountAggregateInput {
    id?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    transactionProcessDate?: true;
    transferDate?: true;
    claimId?: true;
    branchId?: true;
    _all?: true;
}
export declare class ClaimFinancialCountAggregate {
    id: number;
    requestedAmount: number;
    paidAmount: number;
    rejectedAmount: number;
    transactionProcessDate: number;
    transferDate: number;
    claimId: number;
    branchId: number;
    _all: number;
}
export declare class ClaimFinancialCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    transactionProcessDate?: keyof typeof SortOrder;
    transferDate?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialCreateManyBranchPayeeInputEnvelope {
    data: Array<ClaimFinancialCreateManyBranchPayeeInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimFinancialCreateManyBranchPayeeInput {
    id?: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
}
export declare class ClaimFinancialCreateManyInput {
    id?: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    branchId: number;
}
export declare class ClaimFinancialCreateNestedManyWithoutBranchPayeeInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
}
export declare class ClaimFinancialCreateNestedOneWithoutClaimInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class ClaimFinancialCreateOrConnectWithoutBranchPayeeInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutBranchPayeeInput>;
}
export declare class ClaimFinancialCreateOrConnectWithoutClaimInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
}
export declare class ClaimFinancialCreateWithoutBranchPayeeInput {
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialCreateWithoutClaimInput {
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    branchPayee: InstanceType<typeof BranchCreateNestedOneWithoutClaimFinancialInput>;
}
export declare class ClaimFinancialCreateInput {
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    branchPayee: InstanceType<typeof BranchCreateNestedOneWithoutClaimFinancialInput>;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimFinancialsInput>;
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
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    branchId: number;
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
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    transactionProcessDate?: true;
    transferDate?: true;
    claimId?: true;
    branchId?: true;
}
export declare class ClaimFinancialMaxAggregate {
    id?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId?: string;
    branchId?: number;
}
export declare class ClaimFinancialMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    transactionProcessDate?: keyof typeof SortOrder;
    transferDate?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialMinAggregateInput {
    id?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    transactionProcessDate?: true;
    transferDate?: true;
    claimId?: true;
    branchId?: true;
}
export declare class ClaimFinancialMinAggregate {
    id?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId?: string;
    branchId?: number;
}
export declare class ClaimFinancialMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    transactionProcessDate?: keyof typeof SortOrder;
    transferDate?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClaimFinancialOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: InstanceType<typeof SortOrderInput>;
    rejectedAmount?: InstanceType<typeof SortOrderInput>;
    transactionProcessDate?: InstanceType<typeof SortOrderInput>;
    transferDate?: InstanceType<typeof SortOrderInput>;
    claimId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClaimFinancialCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimFinancialAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimFinancialMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimFinancialMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimFinancialSumOrderByAggregateInput>;
}
export declare class ClaimFinancialOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: InstanceType<typeof SortOrderInput>;
    rejectedAmount?: InstanceType<typeof SortOrderInput>;
    transactionProcessDate?: InstanceType<typeof SortOrderInput>;
    transferDate?: InstanceType<typeof SortOrderInput>;
    claimId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    branchPayee?: InstanceType<typeof BranchOrderByWithRelationInput>;
    claim?: InstanceType<typeof ClaimOrderByWithRelationInput>;
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
    requestedAmount?: InstanceType<typeof FloatWithAggregatesFilter>;
    paidAmount?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    claimId?: InstanceType<typeof StringWithAggregatesFilter>;
    branchId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ClaimFinancialScalarWhereInput {
    AND?: Array<ClaimFinancialScalarWhereInput>;
    OR?: Array<ClaimFinancialScalarWhereInput>;
    NOT?: Array<ClaimFinancialScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    requestedAmount?: InstanceType<typeof FloatFilter>;
    paidAmount?: InstanceType<typeof FloatNullableFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableFilter>;
    claimId?: InstanceType<typeof StringFilter>;
    branchId?: InstanceType<typeof IntFilter>;
}
export declare class ClaimFinancialSumAggregateInput {
    id?: true;
    requestedAmount?: true;
    paidAmount?: true;
    rejectedAmount?: true;
    branchId?: true;
}
export declare class ClaimFinancialSumAggregate {
    id?: number;
    requestedAmount?: number;
    paidAmount?: number;
    rejectedAmount?: number;
    branchId?: number;
}
export declare class ClaimFinancialSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    requestedAmount?: keyof typeof SortOrder;
    paidAmount?: keyof typeof SortOrder;
    rejectedAmount?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
}
export declare class ClaimFinancialUncheckedCreateNestedManyWithoutBranchPayeeInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
}
export declare class ClaimFinancialUncheckedCreateWithoutBranchPayeeInput {
    id?: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialUncheckedCreateWithoutClaimInput {
    id?: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    branchId: number;
}
export declare class ClaimFinancialUncheckedCreateInput {
    id?: number;
    requestedAmount: number;
    paidAmount?: number;
    rejectedAmount?: number;
    transactionProcessDate?: Date | string;
    transferDate?: Date | string;
    claimId: string;
    branchId: number;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimFinancialsInput>;
}
export declare class ClaimFinancialUncheckedUpdateManyWithoutBranchPayeeNestedInput {
    create?: Array<ClaimFinancialCreateWithoutBranchPayeeInput>;
    connectOrCreate?: Array<ClaimFinancialCreateOrConnectWithoutBranchPayeeInput>;
    upsert?: Array<ClaimFinancialUpsertWithWhereUniqueWithoutBranchPayeeInput>;
    createMany?: InstanceType<typeof ClaimFinancialCreateManyBranchPayeeInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    delete?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    update?: Array<ClaimFinancialUpdateWithWhereUniqueWithoutBranchPayeeInput>;
    updateMany?: Array<ClaimFinancialUpdateManyWithWhereWithoutBranchPayeeInput>;
    deleteMany?: Array<ClaimFinancialScalarWhereInput>;
}
export declare class ClaimFinancialUncheckedUpdateManyWithoutBranchPayeeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUncheckedUpdateWithoutBranchPayeeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUncheckedUpdateWithoutClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimFinancialUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUpdateManyMutationInput {
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
    set?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    delete?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    connect?: Array<Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>>;
    update?: Array<ClaimFinancialUpdateWithWhereUniqueWithoutBranchPayeeInput>;
    updateMany?: Array<ClaimFinancialUpdateManyWithWhereWithoutBranchPayeeInput>;
    deleteMany?: Array<ClaimFinancialScalarWhereInput>;
}
export declare class ClaimFinancialUpdateOneRequiredWithoutClaimNestedInput {
    create?: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimFinancialCreateOrConnectWithoutClaimInput>;
    upsert?: InstanceType<typeof ClaimFinancialUpsertWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    update?: InstanceType<typeof ClaimFinancialUpdateToOneWithWhereWithoutClaimInput>;
}
export declare class ClaimFinancialUpdateToOneWithWhereWithoutClaimInput {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    data: InstanceType<typeof ClaimFinancialUpdateWithoutClaimInput>;
}
export declare class ClaimFinancialUpdateWithWhereUniqueWithoutBranchPayeeInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    data: InstanceType<typeof ClaimFinancialUpdateWithoutBranchPayeeInput>;
}
export declare class ClaimFinancialUpdateWithoutBranchPayeeInput {
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUpdateWithoutClaimInput {
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchPayee?: InstanceType<typeof BranchUpdateOneRequiredWithoutClaimFinancialNestedInput>;
}
export declare class ClaimFinancialUpdateInput {
    requestedAmount?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    paidAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    rejectedAmount?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    transactionProcessDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    transferDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchPayee?: InstanceType<typeof BranchUpdateOneRequiredWithoutClaimFinancialNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimFinancialsNestedInput>;
}
export declare class ClaimFinancialUpsertWithWhereUniqueWithoutBranchPayeeInput {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    update: InstanceType<typeof ClaimFinancialUpdateWithoutBranchPayeeInput>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutBranchPayeeInput>;
}
export declare class ClaimFinancialUpsertWithoutClaimInput {
    update: InstanceType<typeof ClaimFinancialUpdateWithoutClaimInput>;
    create: InstanceType<typeof ClaimFinancialCreateWithoutClaimInput>;
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class ClaimFinancialWhereUniqueInput {
    id?: number;
    claimId?: string;
    AND?: Array<ClaimFinancialWhereInput>;
    OR?: Array<ClaimFinancialWhereInput>;
    NOT?: Array<ClaimFinancialWhereInput>;
    requestedAmount?: InstanceType<typeof FloatFilter>;
    paidAmount?: InstanceType<typeof FloatNullableFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    branchPayee?: InstanceType<typeof BranchRelationFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
}
export declare class ClaimFinancialWhereInput {
    AND?: Array<ClaimFinancialWhereInput>;
    OR?: Array<ClaimFinancialWhereInput>;
    NOT?: Array<ClaimFinancialWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    requestedAmount?: InstanceType<typeof FloatFilter>;
    paidAmount?: InstanceType<typeof FloatNullableFilter>;
    rejectedAmount?: InstanceType<typeof FloatNullableFilter>;
    transactionProcessDate?: InstanceType<typeof DateTimeNullableFilter>;
    transferDate?: InstanceType<typeof DateTimeNullableFilter>;
    claimId?: InstanceType<typeof StringFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    branchPayee?: InstanceType<typeof BranchRelationFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
}
export declare class ClaimFinancial {
    id: number;
    requestedAmount: number;
    paidAmount: number | null;
    rejectedAmount: number | null;
    transactionProcessDate: Date | null;
    transferDate: Date | null;
    claimId: string;
    branchId: number;
    branchPayee?: InstanceType<typeof Branch>;
    claim?: InstanceType<typeof Claim> | null;
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
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class FindFirstClaimFinancialOrThrowArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
}
export declare class FindFirstClaimFinancialArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
}
export declare class FindManyClaimFinancialArgs {
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
    orderBy?: Array<ClaimFinancialOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimFinancialScalarFieldEnum>;
}
export declare class FindUniqueClaimFinancialOrThrowArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class FindUniqueClaimFinancialArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class UpdateManyClaimFinancialArgs {
    data: InstanceType<typeof ClaimFinancialUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimFinancialWhereInput>;
}
export declare class UpdateOneClaimFinancialArgs {
    data: InstanceType<typeof ClaimFinancialUpdateInput>;
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class UpsertOneClaimFinancialArgs {
    where: Prisma.AtLeast<ClaimFinancialWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimFinancialCreateInput>;
    update: InstanceType<typeof ClaimFinancialUpdateInput>;
}
export declare class AggregateClaimProcess {
    _count?: InstanceType<typeof ClaimProcessCountAggregate>;
    _avg?: InstanceType<typeof ClaimProcessAvgAggregate>;
    _sum?: InstanceType<typeof ClaimProcessSumAggregate>;
    _min?: InstanceType<typeof ClaimProcessMinAggregate>;
    _max?: InstanceType<typeof ClaimProcessMaxAggregate>;
}
export declare class ClaimProcessAggregateArgs {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    orderBy?: Array<ClaimProcessOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimProcessCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimProcessAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimProcessSumAggregateInput>;
    _min?: InstanceType<typeof ClaimProcessMinAggregateInput>;
    _max?: InstanceType<typeof ClaimProcessMaxAggregateInput>;
}
export declare class ClaimProcessAvgAggregateInput {
    id?: true;
}
export declare class ClaimProcessAvgAggregate {
    id?: number;
}
export declare class ClaimProcessAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ClaimProcessCountAggregateInput {
    id?: true;
    startTreatment?: true;
    endTreatment?: true;
    expeditionDate?: true;
    reclaim?: true;
    processDate?: true;
    submissionNote?: true;
    description?: true;
    additionalNote?: true;
    claimId?: true;
    _all?: true;
}
export declare class ClaimProcessCountAggregate {
    id: number;
    startTreatment: number;
    endTreatment: number;
    expeditionDate: number;
    reclaim: number;
    processDate: number;
    submissionNote: number;
    description: number;
    additionalNote: number;
    claimId: number;
    _all: number;
}
export declare class ClaimProcessCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    startTreatment?: keyof typeof SortOrder;
    endTreatment?: keyof typeof SortOrder;
    expeditionDate?: keyof typeof SortOrder;
    reclaim?: keyof typeof SortOrder;
    processDate?: keyof typeof SortOrder;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimProcessCount {
    documents?: number;
}
export declare class ClaimProcessCreateManyInput {
    id?: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
}
export declare class ClaimProcessCreateNestedOneWithoutClaimInput {
    create?: InstanceType<typeof ClaimProcessCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimProcessCreateOrConnectWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class ClaimProcessCreateNestedOneWithoutDocumentsInput {
    create?: InstanceType<typeof ClaimProcessCreateWithoutDocumentsInput>;
    connectOrCreate?: InstanceType<typeof ClaimProcessCreateOrConnectWithoutDocumentsInput>;
    connect?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class ClaimProcessCreateOrConnectWithoutClaimInput {
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimProcessCreateWithoutClaimInput>;
}
export declare class ClaimProcessCreateOrConnectWithoutDocumentsInput {
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimProcessCreateWithoutDocumentsInput>;
}
export declare class ClaimProcessCreateWithoutClaimInput {
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProcessInput>;
}
export declare class ClaimProcessCreateWithoutDocumentsInput {
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProcessesInput>;
}
export declare class ClaimProcessCreateInput {
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    claim?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimProcessesInput>;
    documents?: InstanceType<typeof DocumentCreateNestedManyWithoutClaimProcessInput>;
}
export declare class ClaimProcessGroupByArgs {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    orderBy?: Array<ClaimProcessOrderByWithAggregationInput>;
    by: Array<keyof typeof ClaimProcessScalarFieldEnum>;
    having?: InstanceType<typeof ClaimProcessScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimProcessCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimProcessAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimProcessSumAggregateInput>;
    _min?: InstanceType<typeof ClaimProcessMinAggregateInput>;
    _max?: InstanceType<typeof ClaimProcessMaxAggregateInput>;
}
export declare class ClaimProcessGroupBy {
    id: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    _count?: InstanceType<typeof ClaimProcessCountAggregate>;
    _avg?: InstanceType<typeof ClaimProcessAvgAggregate>;
    _sum?: InstanceType<typeof ClaimProcessSumAggregate>;
    _min?: InstanceType<typeof ClaimProcessMinAggregate>;
    _max?: InstanceType<typeof ClaimProcessMaxAggregate>;
}
export declare class ClaimProcessMaxAggregateInput {
    id?: true;
    startTreatment?: true;
    endTreatment?: true;
    expeditionDate?: true;
    reclaim?: true;
    processDate?: true;
    submissionNote?: true;
    description?: true;
    additionalNote?: true;
    claimId?: true;
}
export declare class ClaimProcessMaxAggregate {
    id?: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    claimId?: string;
}
export declare class ClaimProcessMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    startTreatment?: keyof typeof SortOrder;
    endTreatment?: keyof typeof SortOrder;
    expeditionDate?: keyof typeof SortOrder;
    reclaim?: keyof typeof SortOrder;
    processDate?: keyof typeof SortOrder;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimProcessMinAggregateInput {
    id?: true;
    startTreatment?: true;
    endTreatment?: true;
    expeditionDate?: true;
    reclaim?: true;
    processDate?: true;
    submissionNote?: true;
    description?: true;
    additionalNote?: true;
    claimId?: true;
}
export declare class ClaimProcessMinAggregate {
    id?: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote?: string;
    description?: string;
    additionalNote?: string;
    claimId?: string;
}
export declare class ClaimProcessMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    startTreatment?: keyof typeof SortOrder;
    endTreatment?: keyof typeof SortOrder;
    expeditionDate?: keyof typeof SortOrder;
    reclaim?: keyof typeof SortOrder;
    processDate?: keyof typeof SortOrder;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimProcessNullableRelationFilter {
    is?: InstanceType<typeof ClaimProcessWhereInput>;
    isNot?: InstanceType<typeof ClaimProcessWhereInput>;
}
export declare class ClaimProcessOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    startTreatment?: InstanceType<typeof SortOrderInput>;
    endTreatment?: InstanceType<typeof SortOrderInput>;
    expeditionDate?: InstanceType<typeof SortOrderInput>;
    reclaim?: InstanceType<typeof SortOrderInput>;
    processDate?: InstanceType<typeof SortOrderInput>;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClaimProcessCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimProcessAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimProcessMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimProcessMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimProcessSumOrderByAggregateInput>;
}
export declare class ClaimProcessOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    startTreatment?: InstanceType<typeof SortOrderInput>;
    endTreatment?: InstanceType<typeof SortOrderInput>;
    expeditionDate?: InstanceType<typeof SortOrderInput>;
    reclaim?: InstanceType<typeof SortOrderInput>;
    processDate?: InstanceType<typeof SortOrderInput>;
    submissionNote?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    additionalNote?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    claim?: InstanceType<typeof ClaimOrderByWithRelationInput>;
    documents?: InstanceType<typeof DocumentOrderByRelationAggregateInput>;
}
export declare class ClaimProcessRelationFilter {
    is?: InstanceType<typeof ClaimProcessWhereInput>;
    isNot?: InstanceType<typeof ClaimProcessWhereInput>;
}
export declare class ClaimProcessScalarWhereWithAggregatesInput {
    AND?: Array<ClaimProcessScalarWhereWithAggregatesInput>;
    OR?: Array<ClaimProcessScalarWhereWithAggregatesInput>;
    NOT?: Array<ClaimProcessScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    startTreatment?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    expeditionDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    reclaim?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    processDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    submissionNote?: InstanceType<typeof StringWithAggregatesFilter>;
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    additionalNote?: InstanceType<typeof StringWithAggregatesFilter>;
    claimId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class ClaimProcessSumAggregateInput {
    id?: true;
}
export declare class ClaimProcessSumAggregate {
    id?: number;
}
export declare class ClaimProcessSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class ClaimProcessUncheckedCreateWithoutClaimInput {
    id?: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProcessInput>;
}
export declare class ClaimProcessUncheckedCreateWithoutDocumentsInput {
    id?: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProcessesInput>;
}
export declare class ClaimProcessUncheckedCreateInput {
    id?: number;
    startTreatment?: Date | string;
    endTreatment?: Date | string;
    expeditionDate?: Date | string;
    reclaim?: string;
    processDate?: Date | string;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    claim?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimProcessesInput>;
    documents?: InstanceType<typeof DocumentUncheckedCreateNestedManyWithoutClaimProcessInput>;
}
export declare class ClaimProcessUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClaimProcessUncheckedUpdateWithoutClaimInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProcessNestedInput>;
}
export declare class ClaimProcessUncheckedUpdateWithoutDocumentsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProcessesNestedInput>;
}
export declare class ClaimProcessUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimProcessesNestedInput>;
    documents?: InstanceType<typeof DocumentUncheckedUpdateManyWithoutClaimProcessNestedInput>;
}
export declare class ClaimProcessUpdateManyMutationInput {
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClaimProcessUpdateOneRequiredWithoutClaimNestedInput {
    create?: InstanceType<typeof ClaimProcessCreateWithoutClaimInput>;
    connectOrCreate?: InstanceType<typeof ClaimProcessCreateOrConnectWithoutClaimInput>;
    upsert?: InstanceType<typeof ClaimProcessUpsertWithoutClaimInput>;
    connect?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    update?: InstanceType<typeof ClaimProcessUpdateToOneWithWhereWithoutClaimInput>;
}
export declare class ClaimProcessUpdateOneWithoutDocumentsNestedInput {
    create?: InstanceType<typeof ClaimProcessCreateWithoutDocumentsInput>;
    connectOrCreate?: InstanceType<typeof ClaimProcessCreateOrConnectWithoutDocumentsInput>;
    upsert?: InstanceType<typeof ClaimProcessUpsertWithoutDocumentsInput>;
    disconnect?: InstanceType<typeof ClaimProcessWhereInput>;
    delete?: InstanceType<typeof ClaimProcessWhereInput>;
    connect?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    update?: InstanceType<typeof ClaimProcessUpdateToOneWithWhereWithoutDocumentsInput>;
}
export declare class ClaimProcessUpdateToOneWithWhereWithoutClaimInput {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    data: InstanceType<typeof ClaimProcessUpdateWithoutClaimInput>;
}
export declare class ClaimProcessUpdateToOneWithWhereWithoutDocumentsInput {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    data: InstanceType<typeof ClaimProcessUpdateWithoutDocumentsInput>;
}
export declare class ClaimProcessUpdateWithoutClaimInput {
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProcessNestedInput>;
}
export declare class ClaimProcessUpdateWithoutDocumentsInput {
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProcessesNestedInput>;
}
export declare class ClaimProcessUpdateInput {
    startTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    endTreatment?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    expeditionDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    reclaim?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    processDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    submissionNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    additionalNote?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUpdateOneWithoutClaimProcessesNestedInput>;
    documents?: InstanceType<typeof DocumentUpdateManyWithoutClaimProcessNestedInput>;
}
export declare class ClaimProcessUpsertWithoutClaimInput {
    update: InstanceType<typeof ClaimProcessUpdateWithoutClaimInput>;
    create: InstanceType<typeof ClaimProcessCreateWithoutClaimInput>;
    where?: InstanceType<typeof ClaimProcessWhereInput>;
}
export declare class ClaimProcessUpsertWithoutDocumentsInput {
    update: InstanceType<typeof ClaimProcessUpdateWithoutDocumentsInput>;
    create: InstanceType<typeof ClaimProcessCreateWithoutDocumentsInput>;
    where?: InstanceType<typeof ClaimProcessWhereInput>;
}
export declare class ClaimProcessWhereUniqueInput {
    id?: number;
    claimId?: string;
    AND?: Array<ClaimProcessWhereInput>;
    OR?: Array<ClaimProcessWhereInput>;
    NOT?: Array<ClaimProcessWhereInput>;
    startTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    expeditionDate?: InstanceType<typeof DateTimeNullableFilter>;
    reclaim?: InstanceType<typeof StringNullableFilter>;
    processDate?: InstanceType<typeof DateTimeNullableFilter>;
    submissionNote?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    additionalNote?: InstanceType<typeof StringFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
    documents?: InstanceType<typeof DocumentListRelationFilter>;
}
export declare class ClaimProcessWhereInput {
    AND?: Array<ClaimProcessWhereInput>;
    OR?: Array<ClaimProcessWhereInput>;
    NOT?: Array<ClaimProcessWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    startTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    endTreatment?: InstanceType<typeof DateTimeNullableFilter>;
    expeditionDate?: InstanceType<typeof DateTimeNullableFilter>;
    reclaim?: InstanceType<typeof StringNullableFilter>;
    processDate?: InstanceType<typeof DateTimeNullableFilter>;
    submissionNote?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringFilter>;
    additionalNote?: InstanceType<typeof StringFilter>;
    claimId?: InstanceType<typeof StringFilter>;
    claim?: InstanceType<typeof ClaimNullableRelationFilter>;
    documents?: InstanceType<typeof DocumentListRelationFilter>;
}
export declare class ClaimProcess {
    id: number;
    startTreatment: Date | null;
    endTreatment: Date | null;
    expeditionDate: Date | null;
    reclaim: string | null;
    processDate: Date | null;
    submissionNote: string;
    description: string;
    additionalNote: string;
    claimId: string;
    claim?: InstanceType<typeof Claim> | null;
    documents?: Array<Document>;
    _count?: InstanceType<typeof ClaimProcessCount>;
}
export declare class CreateManyClaimProcessArgs {
    data: Array<ClaimProcessCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClaimProcessArgs {
    data: InstanceType<typeof ClaimProcessCreateInput>;
}
export declare class DeleteManyClaimProcessArgs {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
}
export declare class DeleteOneClaimProcessArgs {
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class FindFirstClaimProcessOrThrowArgs {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    orderBy?: Array<ClaimProcessOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimProcessScalarFieldEnum>;
}
export declare class FindFirstClaimProcessArgs {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    orderBy?: Array<ClaimProcessOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimProcessScalarFieldEnum>;
}
export declare class FindManyClaimProcessArgs {
    where?: InstanceType<typeof ClaimProcessWhereInput>;
    orderBy?: Array<ClaimProcessOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimProcessScalarFieldEnum>;
}
export declare class FindUniqueClaimProcessOrThrowArgs {
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class FindUniqueClaimProcessArgs {
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class UpdateManyClaimProcessArgs {
    data: InstanceType<typeof ClaimProcessUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimProcessWhereInput>;
}
export declare class UpdateOneClaimProcessArgs {
    data: InstanceType<typeof ClaimProcessUpdateInput>;
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class UpsertOneClaimProcessArgs {
    where: Prisma.AtLeast<ClaimProcessWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimProcessCreateInput>;
    update: InstanceType<typeof ClaimProcessUpdateInput>;
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
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
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
}
export declare class ClaimStatusCreateNestedManyWithoutClaimInput {
    create?: Array<ClaimStatusCreateWithoutClaimInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutClaimInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyClaimInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
}
export declare class ClaimStatusCreateNestedManyWithoutCreateByInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
}
export declare class ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class ClaimStatusCreateNestedOneWithoutRejectionLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class ClaimStatusCreateOrConnectWithoutClaimInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutClaimInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutCreateByInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutCreateByInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusCreateOrConnectWithoutRejectionLetterInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    create: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
}
export declare class ClaimStatusCreateWithoutClaimInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
}
export declare class ClaimStatusCreateWithoutCreateByInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
}
export declare class ClaimStatusCreateWithoutGuaranteeLetterInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    rejectionLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutRejectionLetterOfInput>;
}
export declare class ClaimStatusCreateWithoutRejectionLetterInput {
    description?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    status: keyof typeof ClaimStatusType;
    createBy: InstanceType<typeof UserCreateNestedOneWithoutClaimActionsInput>;
    claim: InstanceType<typeof ClaimCreateNestedOneWithoutClaimStatusesInput>;
    guaranteeLetter?: InstanceType<typeof DocumentCreateNestedOneWithoutGuaranteeLetterOfInput>;
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
    createBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    claim?: InstanceType<typeof ClaimOrderByWithRelationInput>;
    rejectionLetter?: InstanceType<typeof DocumentOrderByWithRelationInput>;
    guaranteeLetter?: InstanceType<typeof DocumentOrderByWithRelationInput>;
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
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
}
export declare class ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
}
export declare class ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
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
}
export declare class ClaimStatusUncheckedUpdateManyWithoutClaimNestedInput {
    create?: Array<ClaimStatusCreateWithoutClaimInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutClaimInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutClaimInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyClaimInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
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
}
export declare class ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
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
}
export declare class ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutGuaranteeLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutRejectionLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutRejectionLetterInput>;
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
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    update?: Array<ClaimStatusUpdateWithWhereUniqueWithoutClaimInput>;
    updateMany?: Array<ClaimStatusUpdateManyWithWhereWithoutClaimInput>;
    deleteMany?: Array<ClaimStatusScalarWhereInput>;
}
export declare class ClaimStatusUpdateManyWithoutCreateByNestedInput {
    create?: Array<ClaimStatusCreateWithoutCreateByInput>;
    connectOrCreate?: Array<ClaimStatusCreateOrConnectWithoutCreateByInput>;
    upsert?: Array<ClaimStatusUpsertWithWhereUniqueWithoutCreateByInput>;
    createMany?: InstanceType<typeof ClaimStatusCreateManyCreateByInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    delete?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    connect?: Array<Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>>;
    update?: Array<ClaimStatusUpdateWithWhereUniqueWithoutCreateByInput>;
    updateMany?: Array<ClaimStatusUpdateManyWithWhereWithoutCreateByInput>;
    deleteMany?: Array<ClaimStatusScalarWhereInput>;
}
export declare class ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutGuaranteeLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutGuaranteeLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutGuaranteeLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusUpdateOneWithoutRejectionLetterNestedInput {
    create?: InstanceType<typeof ClaimStatusCreateWithoutRejectionLetterInput>;
    connectOrCreate?: InstanceType<typeof ClaimStatusCreateOrConnectWithoutRejectionLetterInput>;
    upsert?: InstanceType<typeof ClaimStatusUpsertWithoutRejectionLetterInput>;
    disconnect?: InstanceType<typeof ClaimStatusWhereInput>;
    delete?: InstanceType<typeof ClaimStatusWhereInput>;
    connect?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    update?: InstanceType<typeof ClaimStatusUpdateToOneWithWhereWithoutRejectionLetterInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutGuaranteeLetterInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutGuaranteeLetterInput>;
}
export declare class ClaimStatusUpdateToOneWithWhereWithoutRejectionLetterInput {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutRejectionLetterInput>;
}
export declare class ClaimStatusUpdateWithWhereUniqueWithoutClaimInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutClaimInput>;
}
export declare class ClaimStatusUpdateWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    data: InstanceType<typeof ClaimStatusUpdateWithoutCreateByInput>;
}
export declare class ClaimStatusUpdateWithoutClaimInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
}
export declare class ClaimStatusUpdateWithoutCreateByInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
}
export declare class ClaimStatusUpdateWithoutGuaranteeLetterInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    rejectionLetter?: InstanceType<typeof DocumentUpdateOneWithoutRejectionLetterOfNestedInput>;
}
export declare class ClaimStatusUpdateWithoutRejectionLetterInput {
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumClaimStatusTypeFieldUpdateOperationsInput>;
    createBy?: InstanceType<typeof UserUpdateOneRequiredWithoutClaimActionsNestedInput>;
    claim?: InstanceType<typeof ClaimUpdateOneRequiredWithoutClaimStatusesNestedInput>;
    guaranteeLetter?: InstanceType<typeof DocumentUpdateOneWithoutGuaranteeLetterOfNestedInput>;
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
}
export declare class ClaimStatusUpsertWithWhereUniqueWithoutClaimInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    update: InstanceType<typeof ClaimStatusUpdateWithoutClaimInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutClaimInput>;
}
export declare class ClaimStatusUpsertWithWhereUniqueWithoutCreateByInput {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    update: InstanceType<typeof ClaimStatusUpdateWithoutCreateByInput>;
    create: InstanceType<typeof ClaimStatusCreateWithoutCreateByInput>;
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
export declare class ClaimStatusWhereUniqueInput {
    id?: number;
    rejectionLetterId?: string;
    guaranteeLetterId?: string;
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
    createBy?: InstanceType<typeof UserRelationFilter>;
    claim?: InstanceType<typeof ClaimRelationFilter>;
    rejectionLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
    guaranteeLetter?: InstanceType<typeof DocumentNullableRelationFilter>;
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
    createBy?: InstanceType<typeof User>;
    claim?: InstanceType<typeof Claim>;
    rejectionLetter?: InstanceType<typeof Document> | null;
    guaranteeLetter?: InstanceType<typeof Document> | null;
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
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class FindFirstClaimStatusOrThrowArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimStatusScalarFieldEnum>;
}
export declare class FindFirstClaimStatusArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimStatusScalarFieldEnum>;
}
export declare class FindManyClaimStatusArgs {
    where?: InstanceType<typeof ClaimStatusWhereInput>;
    orderBy?: Array<ClaimStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimStatusScalarFieldEnum>;
}
export declare class FindUniqueClaimStatusOrThrowArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class FindUniqueClaimStatusArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class UpdateManyClaimStatusArgs {
    data: InstanceType<typeof ClaimStatusUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimStatusWhereInput>;
}
export declare class UpdateOneClaimStatusArgs {
    data: InstanceType<typeof ClaimStatusUpdateInput>;
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
}
export declare class UpsertOneClaimStatusArgs {
    where: Prisma.AtLeast<ClaimStatusWhereUniqueInput, 'id' | 'rejectionLetterId' | 'guaranteeLetterId'>;
    create: InstanceType<typeof ClaimStatusCreateInput>;
    update: InstanceType<typeof ClaimStatusUpdateInput>;
}
export declare class AggregateClaimType {
    _count?: InstanceType<typeof ClaimTypeCountAggregate>;
    _avg?: InstanceType<typeof ClaimTypeAvgAggregate>;
    _sum?: InstanceType<typeof ClaimTypeSumAggregate>;
    _min?: InstanceType<typeof ClaimTypeMinAggregate>;
    _max?: InstanceType<typeof ClaimTypeMaxAggregate>;
}
export declare class ClaimTypeAggregateArgs {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
    orderBy?: Array<ClaimTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimTypeCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimTypeAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimTypeSumAggregateInput>;
    _min?: InstanceType<typeof ClaimTypeMinAggregateInput>;
    _max?: InstanceType<typeof ClaimTypeMaxAggregateInput>;
}
export declare class ClaimTypeAvgAggregateInput {
    id?: true;
    claimPeriod?: true;
    programId?: true;
    claimId?: true;
}
export declare class ClaimTypeAvgAggregate {
    id?: number;
    claimPeriod?: number;
    programId?: number;
    claimId?: number;
}
export declare class ClaimTypeAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimTypeCountAggregateInput {
    id?: true;
    jenis?: true;
    jenisRI?: true;
    plan?: true;
    claimPeriod?: true;
    conditions?: true;
    programId?: true;
    claimId?: true;
    _all?: true;
}
export declare class ClaimTypeCountAggregate {
    id: number;
    jenis: number;
    jenisRI: number;
    plan: number;
    claimPeriod: number;
    conditions: number;
    programId: number;
    claimId: number;
    _all: number;
}
export declare class ClaimTypeCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    jenis?: keyof typeof SortOrder;
    jenisRI?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    conditions?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimTypeCreateManyProgramInputEnvelope {
    data: Array<ClaimTypeCreateManyProgramInput>;
    skipDuplicates?: boolean;
}
export declare class ClaimTypeCreateManyProgramInput {
    id?: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    claimId: number;
}
export declare class ClaimTypeCreateManyInput {
    id?: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    programId: number;
    claimId: number;
}
export declare class ClaimTypeCreateNestedManyWithoutProgramInput {
    create?: Array<ClaimTypeCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimTypeCreateOrConnectWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimTypeCreateManyProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
}
export declare class ClaimTypeCreateNestedOneWithoutClaimsInput {
    create?: InstanceType<typeof ClaimTypeCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ClaimTypeCreateOrConnectWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class ClaimTypeCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimTypeCreateWithoutClaimsInput>;
}
export declare class ClaimTypeCreateOrConnectWithoutProgramInput {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimTypeCreateWithoutProgramInput>;
}
export declare class ClaimTypeCreateWithoutClaimsInput {
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    claimId: number;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimTypeInput>;
}
export declare class ClaimTypeCreateWithoutProgramInput {
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    claimId: number;
    claims?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimTypesInput>;
}
export declare class ClaimTypeCreateInput {
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    claimId: number;
    program: InstanceType<typeof ProgramCreateNestedOneWithoutClaimTypeInput>;
    claims?: InstanceType<typeof ClaimCreateNestedOneWithoutClaimTypesInput>;
}
export declare class ClaimTypeGroupByArgs {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
    orderBy?: Array<ClaimTypeOrderByWithAggregationInput>;
    by: Array<keyof typeof ClaimTypeScalarFieldEnum>;
    having?: InstanceType<typeof ClaimTypeScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClaimTypeCountAggregateInput>;
    _avg?: InstanceType<typeof ClaimTypeAvgAggregateInput>;
    _sum?: InstanceType<typeof ClaimTypeSumAggregateInput>;
    _min?: InstanceType<typeof ClaimTypeMinAggregateInput>;
    _max?: InstanceType<typeof ClaimTypeMaxAggregateInput>;
}
export declare class ClaimTypeGroupBy {
    id: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    programId: number;
    claimId: number;
    _count?: InstanceType<typeof ClaimTypeCountAggregate>;
    _avg?: InstanceType<typeof ClaimTypeAvgAggregate>;
    _sum?: InstanceType<typeof ClaimTypeSumAggregate>;
    _min?: InstanceType<typeof ClaimTypeMinAggregate>;
    _max?: InstanceType<typeof ClaimTypeMaxAggregate>;
}
export declare class ClaimTypeListRelationFilter {
    every?: InstanceType<typeof ClaimTypeWhereInput>;
    some?: InstanceType<typeof ClaimTypeWhereInput>;
    none?: InstanceType<typeof ClaimTypeWhereInput>;
}
export declare class ClaimTypeMaxAggregateInput {
    id?: true;
    jenis?: true;
    jenisRI?: true;
    plan?: true;
    claimPeriod?: true;
    conditions?: true;
    programId?: true;
    claimId?: true;
}
export declare class ClaimTypeMaxAggregate {
    id?: number;
    jenis?: string;
    jenisRI?: string;
    plan?: string;
    claimPeriod?: number;
    conditions?: string;
    programId?: number;
    claimId?: number;
}
export declare class ClaimTypeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    jenis?: keyof typeof SortOrder;
    jenisRI?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    conditions?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimTypeMinAggregateInput {
    id?: true;
    jenis?: true;
    jenisRI?: true;
    plan?: true;
    claimPeriod?: true;
    conditions?: true;
    programId?: true;
    claimId?: true;
}
export declare class ClaimTypeMinAggregate {
    id?: number;
    jenis?: string;
    jenisRI?: string;
    plan?: string;
    claimPeriod?: number;
    conditions?: string;
    programId?: number;
    claimId?: number;
}
export declare class ClaimTypeMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    jenis?: keyof typeof SortOrder;
    jenisRI?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    conditions?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimTypeOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClaimTypeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    jenis?: keyof typeof SortOrder;
    jenisRI?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    conditions?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClaimTypeCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ClaimTypeAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ClaimTypeMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClaimTypeMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ClaimTypeSumOrderByAggregateInput>;
}
export declare class ClaimTypeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    jenis?: keyof typeof SortOrder;
    jenisRI?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    conditions?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
    program?: InstanceType<typeof ProgramOrderByWithRelationInput>;
    claims?: InstanceType<typeof ClaimOrderByWithRelationInput>;
}
export declare class ClaimTypeRelationFilter {
    is?: InstanceType<typeof ClaimTypeWhereInput>;
    isNot?: InstanceType<typeof ClaimTypeWhereInput>;
}
export declare class ClaimTypeScalarWhereWithAggregatesInput {
    AND?: Array<ClaimTypeScalarWhereWithAggregatesInput>;
    OR?: Array<ClaimTypeScalarWhereWithAggregatesInput>;
    NOT?: Array<ClaimTypeScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    jenis?: InstanceType<typeof StringWithAggregatesFilter>;
    jenisRI?: InstanceType<typeof StringWithAggregatesFilter>;
    plan?: InstanceType<typeof StringWithAggregatesFilter>;
    claimPeriod?: InstanceType<typeof IntWithAggregatesFilter>;
    conditions?: InstanceType<typeof StringWithAggregatesFilter>;
    programId?: InstanceType<typeof IntWithAggregatesFilter>;
    claimId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ClaimTypeScalarWhereInput {
    AND?: Array<ClaimTypeScalarWhereInput>;
    OR?: Array<ClaimTypeScalarWhereInput>;
    NOT?: Array<ClaimTypeScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    jenis?: InstanceType<typeof StringFilter>;
    jenisRI?: InstanceType<typeof StringFilter>;
    plan?: InstanceType<typeof StringFilter>;
    claimPeriod?: InstanceType<typeof IntFilter>;
    conditions?: InstanceType<typeof StringFilter>;
    programId?: InstanceType<typeof IntFilter>;
    claimId?: InstanceType<typeof IntFilter>;
}
export declare class ClaimTypeSumAggregateInput {
    id?: true;
    claimPeriod?: true;
    programId?: true;
    claimId?: true;
}
export declare class ClaimTypeSumAggregate {
    id?: number;
    claimPeriod?: number;
    programId?: number;
    claimId?: number;
}
export declare class ClaimTypeSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    claimPeriod?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
    claimId?: keyof typeof SortOrder;
}
export declare class ClaimTypeUncheckedCreateNestedManyWithoutProgramInput {
    create?: Array<ClaimTypeCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimTypeCreateOrConnectWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimTypeCreateManyProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
}
export declare class ClaimTypeUncheckedCreateWithoutClaimsInput {
    id?: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    programId: number;
    claimId: number;
}
export declare class ClaimTypeUncheckedCreateWithoutProgramInput {
    id?: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    claimId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimTypesInput>;
}
export declare class ClaimTypeUncheckedCreateInput {
    id?: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    programId: number;
    claimId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedOneWithoutClaimTypesInput>;
}
export declare class ClaimTypeUncheckedUpdateManyWithoutProgramNestedInput {
    create?: Array<ClaimTypeCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimTypeCreateOrConnectWithoutProgramInput>;
    upsert?: Array<ClaimTypeUpsertWithWhereUniqueWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimTypeCreateManyProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    delete?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    connect?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    update?: Array<ClaimTypeUpdateWithWhereUniqueWithoutProgramInput>;
    updateMany?: Array<ClaimTypeUpdateManyWithWhereWithoutProgramInput>;
    deleteMany?: Array<ClaimTypeScalarWhereInput>;
}
export declare class ClaimTypeUncheckedUpdateManyWithoutProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimTypeUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimTypeUncheckedUpdateWithoutClaimsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimTypeUncheckedUpdateWithoutProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimTypesNestedInput>;
}
export declare class ClaimTypeUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateOneWithoutClaimTypesNestedInput>;
}
export declare class ClaimTypeUpdateManyMutationInput {
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ClaimTypeUpdateManyWithWhereWithoutProgramInput {
    where: InstanceType<typeof ClaimTypeScalarWhereInput>;
    data: InstanceType<typeof ClaimTypeUpdateManyMutationInput>;
}
export declare class ClaimTypeUpdateManyWithoutProgramNestedInput {
    create?: Array<ClaimTypeCreateWithoutProgramInput>;
    connectOrCreate?: Array<ClaimTypeCreateOrConnectWithoutProgramInput>;
    upsert?: Array<ClaimTypeUpsertWithWhereUniqueWithoutProgramInput>;
    createMany?: InstanceType<typeof ClaimTypeCreateManyProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    disconnect?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    delete?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    connect?: Array<Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>>;
    update?: Array<ClaimTypeUpdateWithWhereUniqueWithoutProgramInput>;
    updateMany?: Array<ClaimTypeUpdateManyWithWhereWithoutProgramInput>;
    deleteMany?: Array<ClaimTypeScalarWhereInput>;
}
export declare class ClaimTypeUpdateOneRequiredWithoutClaimsNestedInput {
    create?: InstanceType<typeof ClaimTypeCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ClaimTypeCreateOrConnectWithoutClaimsInput>;
    upsert?: InstanceType<typeof ClaimTypeUpsertWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    update?: InstanceType<typeof ClaimTypeUpdateToOneWithWhereWithoutClaimsInput>;
}
export declare class ClaimTypeUpdateToOneWithWhereWithoutClaimsInput {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
    data: InstanceType<typeof ClaimTypeUpdateWithoutClaimsInput>;
}
export declare class ClaimTypeUpdateWithWhereUniqueWithoutProgramInput {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    data: InstanceType<typeof ClaimTypeUpdateWithoutProgramInput>;
}
export declare class ClaimTypeUpdateWithoutClaimsInput {
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimTypeNestedInput>;
}
export declare class ClaimTypeUpdateWithoutProgramInput {
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUpdateOneWithoutClaimTypesNestedInput>;
}
export declare class ClaimTypeUpdateInput {
    jenis?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    jenisRI?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimPeriod?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    conditions?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    claimId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    program?: InstanceType<typeof ProgramUpdateOneRequiredWithoutClaimTypeNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateOneWithoutClaimTypesNestedInput>;
}
export declare class ClaimTypeUpsertWithWhereUniqueWithoutProgramInput {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    update: InstanceType<typeof ClaimTypeUpdateWithoutProgramInput>;
    create: InstanceType<typeof ClaimTypeCreateWithoutProgramInput>;
}
export declare class ClaimTypeUpsertWithoutClaimsInput {
    update: InstanceType<typeof ClaimTypeUpdateWithoutClaimsInput>;
    create: InstanceType<typeof ClaimTypeCreateWithoutClaimsInput>;
    where?: InstanceType<typeof ClaimTypeWhereInput>;
}
export declare class ClaimTypeWhereUniqueInput {
    id?: number;
    claimId?: number;
    AND?: Array<ClaimTypeWhereInput>;
    OR?: Array<ClaimTypeWhereInput>;
    NOT?: Array<ClaimTypeWhereInput>;
    jenis?: InstanceType<typeof StringFilter>;
    jenisRI?: InstanceType<typeof StringFilter>;
    plan?: InstanceType<typeof StringFilter>;
    claimPeriod?: InstanceType<typeof IntFilter>;
    conditions?: InstanceType<typeof StringFilter>;
    programId?: InstanceType<typeof IntFilter>;
    program?: InstanceType<typeof ProgramRelationFilter>;
    claims?: InstanceType<typeof ClaimNullableRelationFilter>;
}
export declare class ClaimTypeWhereInput {
    AND?: Array<ClaimTypeWhereInput>;
    OR?: Array<ClaimTypeWhereInput>;
    NOT?: Array<ClaimTypeWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    jenis?: InstanceType<typeof StringFilter>;
    jenisRI?: InstanceType<typeof StringFilter>;
    plan?: InstanceType<typeof StringFilter>;
    claimPeriod?: InstanceType<typeof IntFilter>;
    conditions?: InstanceType<typeof StringFilter>;
    programId?: InstanceType<typeof IntFilter>;
    claimId?: InstanceType<typeof IntFilter>;
    program?: InstanceType<typeof ProgramRelationFilter>;
    claims?: InstanceType<typeof ClaimNullableRelationFilter>;
}
export declare class ClaimType {
    id: number;
    jenis: string;
    jenisRI: string;
    plan: string;
    claimPeriod: number;
    conditions: string;
    programId: number;
    claimId: number;
    program?: InstanceType<typeof Program>;
    claims?: InstanceType<typeof Claim> | null;
}
export declare class CreateManyClaimTypeArgs {
    data: Array<ClaimTypeCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClaimTypeArgs {
    data: InstanceType<typeof ClaimTypeCreateInput>;
}
export declare class DeleteManyClaimTypeArgs {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
}
export declare class DeleteOneClaimTypeArgs {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class FindFirstClaimTypeOrThrowArgs {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
    orderBy?: Array<ClaimTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimTypeScalarFieldEnum>;
}
export declare class FindFirstClaimTypeArgs {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
    orderBy?: Array<ClaimTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimTypeScalarFieldEnum>;
}
export declare class FindManyClaimTypeArgs {
    where?: InstanceType<typeof ClaimTypeWhereInput>;
    orderBy?: Array<ClaimTypeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClaimTypeScalarFieldEnum>;
}
export declare class FindUniqueClaimTypeOrThrowArgs {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class FindUniqueClaimTypeArgs {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class UpdateManyClaimTypeArgs {
    data: InstanceType<typeof ClaimTypeUpdateManyMutationInput>;
    where?: InstanceType<typeof ClaimTypeWhereInput>;
}
export declare class UpdateOneClaimTypeArgs {
    data: InstanceType<typeof ClaimTypeUpdateInput>;
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
}
export declare class UpsertOneClaimTypeArgs {
    where: Prisma.AtLeast<ClaimTypeWhereUniqueInput, 'id' | 'claimId'>;
    create: InstanceType<typeof ClaimTypeCreateInput>;
    update: InstanceType<typeof ClaimTypeUpdateInput>;
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
    claims?: number;
}
export declare class ClinicCreateManyInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class ClinicCreateNestedOneWithoutClaimsInput {
    create?: InstanceType<typeof ClinicCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ClinicCreateOrConnectWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
}
export declare class ClinicCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClinicCreateWithoutClaimsInput>;
}
export declare class ClinicCreateWithoutClaimsInput {
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
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutClinicsInput>;
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
    claims?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
}
export declare class ClinicRelationFilter {
    is?: InstanceType<typeof ClinicWhereInput>;
    isNot?: InstanceType<typeof ClinicWhereInput>;
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
export declare class ClinicUncheckedCreateWithoutClaimsInput {
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
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutClinicsInput>;
}
export declare class ClinicUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ClinicUncheckedUpdateWithoutClaimsInput {
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
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutClinicsNestedInput>;
}
export declare class ClinicUpdateManyMutationInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class ClinicUpdateOneRequiredWithoutClaimsNestedInput {
    create?: InstanceType<typeof ClinicCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ClinicCreateOrConnectWithoutClaimsInput>;
    upsert?: InstanceType<typeof ClinicUpsertWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ClinicWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ClinicUpdateToOneWithWhereWithoutClaimsInput>;
}
export declare class ClinicUpdateToOneWithWhereWithoutClaimsInput {
    where?: InstanceType<typeof ClinicWhereInput>;
    data: InstanceType<typeof ClinicUpdateWithoutClaimsInput>;
}
export declare class ClinicUpdateWithoutClaimsInput {
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
    claims?: InstanceType<typeof ClaimUpdateManyWithoutClinicsNestedInput>;
}
export declare class ClinicUpsertWithoutClaimsInput {
    update: InstanceType<typeof ClinicUpdateWithoutClaimsInput>;
    create: InstanceType<typeof ClinicCreateWithoutClaimsInput>;
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
    claims?: InstanceType<typeof ClaimListRelationFilter>;
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
    claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class Clinic {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    claims?: Array<Claim>;
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
export declare class AggregateCompany {
    _count?: InstanceType<typeof CompanyCountAggregate>;
    _avg?: InstanceType<typeof CompanyAvgAggregate>;
    _sum?: InstanceType<typeof CompanySumAggregate>;
    _min?: InstanceType<typeof CompanyMinAggregate>;
    _max?: InstanceType<typeof CompanyMaxAggregate>;
}
export declare class CompanyAggregateArgs {
    where?: InstanceType<typeof CompanyWhereInput>;
    orderBy?: Array<CompanyOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CompanyCountAggregateInput>;
    _avg?: InstanceType<typeof CompanyAvgAggregateInput>;
    _sum?: InstanceType<typeof CompanySumAggregateInput>;
    _min?: InstanceType<typeof CompanyMinAggregateInput>;
    _max?: InstanceType<typeof CompanyMaxAggregateInput>;
}
export declare class CompanyAvgAggregateInput {
    id?: true;
}
export declare class CompanyAvgAggregate {
    id?: number;
}
export declare class CompanyAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class CompanyCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class CompanyCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class CompanyCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CompanyCount {
    claims?: number;
}
export declare class CompanyCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CompanyCreateNestedOneWithoutClaimsInput {
    create?: InstanceType<typeof CompanyCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof CompanyCreateOrConnectWithoutClaimsInput>;
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
export declare class CompanyCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CompanyCreateWithoutClaimsInput>;
}
export declare class CompanyCreateWithoutClaimsInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CompanyCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutCompanyInput>;
}
export declare class CompanyGroupByArgs {
    where?: InstanceType<typeof CompanyWhereInput>;
    orderBy?: Array<CompanyOrderByWithAggregationInput>;
    by: Array<keyof typeof CompanyScalarFieldEnum>;
    having?: InstanceType<typeof CompanyScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CompanyCountAggregateInput>;
    _avg?: InstanceType<typeof CompanyAvgAggregateInput>;
    _sum?: InstanceType<typeof CompanySumAggregateInput>;
    _min?: InstanceType<typeof CompanyMinAggregateInput>;
    _max?: InstanceType<typeof CompanyMaxAggregateInput>;
}
export declare class CompanyGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof CompanyCountAggregate>;
    _avg?: InstanceType<typeof CompanyAvgAggregate>;
    _sum?: InstanceType<typeof CompanySumAggregate>;
    _min?: InstanceType<typeof CompanyMinAggregate>;
    _max?: InstanceType<typeof CompanyMaxAggregate>;
}
export declare class CompanyMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CompanyMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CompanyMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CompanyMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class CompanyMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CompanyMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class CompanyOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CompanyCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CompanyAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CompanyMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CompanyMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CompanySumOrderByAggregateInput>;
}
export declare class CompanyOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    claims?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
}
export declare class CompanyRelationFilter {
    is?: InstanceType<typeof CompanyWhereInput>;
    isNot?: InstanceType<typeof CompanyWhereInput>;
}
export declare class CompanyScalarWhereWithAggregatesInput {
    AND?: Array<CompanyScalarWhereWithAggregatesInput>;
    OR?: Array<CompanyScalarWhereWithAggregatesInput>;
    NOT?: Array<CompanyScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class CompanySumAggregateInput {
    id?: true;
}
export declare class CompanySumAggregate {
    id?: number;
}
export declare class CompanySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class CompanyUncheckedCreateWithoutClaimsInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class CompanyUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutCompanyInput>;
}
export declare class CompanyUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CompanyUncheckedUpdateWithoutClaimsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CompanyUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutCompanyNestedInput>;
}
export declare class CompanyUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CompanyUpdateOneRequiredWithoutClaimsNestedInput {
    create?: InstanceType<typeof CompanyCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof CompanyCreateOrConnectWithoutClaimsInput>;
    upsert?: InstanceType<typeof CompanyUpsertWithoutClaimsInput>;
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof CompanyUpdateToOneWithWhereWithoutClaimsInput>;
}
export declare class CompanyUpdateToOneWithWhereWithoutClaimsInput {
    where?: InstanceType<typeof CompanyWhereInput>;
    data: InstanceType<typeof CompanyUpdateWithoutClaimsInput>;
}
export declare class CompanyUpdateWithoutClaimsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CompanyUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutCompanyNestedInput>;
}
export declare class CompanyUpsertWithoutClaimsInput {
    update: InstanceType<typeof CompanyUpdateWithoutClaimsInput>;
    create: InstanceType<typeof CompanyCreateWithoutClaimsInput>;
    where?: InstanceType<typeof CompanyWhereInput>;
}
export declare class CompanyWhereUniqueInput {
    id?: number;
    AND?: Array<CompanyWhereInput>;
    OR?: Array<CompanyWhereInput>;
    NOT?: Array<CompanyWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class CompanyWhereInput {
    AND?: Array<CompanyWhereInput>;
    OR?: Array<CompanyWhereInput>;
    NOT?: Array<CompanyWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class Company {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    claims?: Array<Claim>;
    _count?: InstanceType<typeof CompanyCount>;
}
export declare class CreateManyCompanyArgs {
    data: Array<CompanyCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCompanyArgs {
    data: InstanceType<typeof CompanyCreateInput>;
}
export declare class DeleteManyCompanyArgs {
    where?: InstanceType<typeof CompanyWhereInput>;
}
export declare class DeleteOneCompanyArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
export declare class FindFirstCompanyOrThrowArgs {
    where?: InstanceType<typeof CompanyWhereInput>;
    orderBy?: Array<CompanyOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CompanyScalarFieldEnum>;
}
export declare class FindFirstCompanyArgs {
    where?: InstanceType<typeof CompanyWhereInput>;
    orderBy?: Array<CompanyOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CompanyScalarFieldEnum>;
}
export declare class FindManyCompanyArgs {
    where?: InstanceType<typeof CompanyWhereInput>;
    orderBy?: Array<CompanyOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CompanyScalarFieldEnum>;
}
export declare class FindUniqueCompanyOrThrowArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCompanyArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCompanyArgs {
    data: InstanceType<typeof CompanyUpdateManyMutationInput>;
    where?: InstanceType<typeof CompanyWhereInput>;
}
export declare class UpdateOneCompanyArgs {
    data: InstanceType<typeof CompanyUpdateInput>;
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCompanyArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CompanyCreateInput>;
    update: InstanceType<typeof CompanyUpdateInput>;
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
    addressId?: true;
}
export declare class ContactInfoAvgAggregate {
    id?: number;
    addressId?: number;
}
export declare class ContactInfoAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoCountAggregateInput {
    id?: true;
    telp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    participantId?: true;
    addressId?: true;
    _all?: true;
}
export declare class ContactInfoCountAggregate {
    id: number;
    telp: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    participantId: number;
    addressId: number;
    _all: number;
}
export declare class ContactInfoCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoCreateManyAddressInputEnvelope {
    data: Array<ContactInfoCreateManyAddressInput>;
    skipDuplicates?: boolean;
}
export declare class ContactInfoCreateManyAddressInput {
    id?: number;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId: string;
}
export declare class ContactInfoCreateManyParticipantInputEnvelope {
    data: Array<ContactInfoCreateManyParticipantInput>;
    skipDuplicates?: boolean;
}
export declare class ContactInfoCreateManyParticipantInput {
    id?: number;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId: number;
}
export declare class ContactInfoCreateManyInput {
    id?: number;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId: string;
    addressId: number;
}
export declare class ContactInfoCreateNestedManyWithoutAddressInput {
    create?: Array<ContactInfoCreateWithoutAddressInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutAddressInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyAddressInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
}
export declare class ContactInfoCreateNestedManyWithoutParticipantInput {
    create?: Array<ContactInfoCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
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
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutContactInfosInput>;
}
export declare class ContactInfoCreateWithoutParticipantInput {
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    address: InstanceType<typeof AddressCreateNestedOneWithoutContactInfoInput>;
}
export declare class ContactInfoCreateInput {
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutContactInfosInput>;
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
    telp: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    participantId: string;
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
    participantId?: true;
    addressId?: true;
}
export declare class ContactInfoMaxAggregate {
    id?: number;
    telp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: string;
    addressId?: number;
}
export declare class ContactInfoMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoMinAggregateInput {
    id?: true;
    telp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    participantId?: true;
    addressId?: true;
}
export declare class ContactInfoMinAggregate {
    id?: number;
    telp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: string;
    addressId?: number;
}
export declare class ContactInfoMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    telp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
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
    participantId?: keyof typeof SortOrder;
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
    participantId?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    address?: InstanceType<typeof AddressOrderByWithRelationInput>;
}
export declare class ContactInfoScalarWhereWithAggregatesInput {
    AND?: Array<ContactInfoScalarWhereWithAggregatesInput>;
    OR?: Array<ContactInfoScalarWhereWithAggregatesInput>;
    NOT?: Array<ContactInfoScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    telp?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
    addressId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ContactInfoScalarWhereInput {
    AND?: Array<ContactInfoScalarWhereInput>;
    OR?: Array<ContactInfoScalarWhereInput>;
    NOT?: Array<ContactInfoScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    telp?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
}
export declare class ContactInfoSumAggregateInput {
    id?: true;
    addressId?: true;
}
export declare class ContactInfoSumAggregate {
    id?: number;
    addressId?: number;
}
export declare class ContactInfoSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    addressId?: keyof typeof SortOrder;
}
export declare class ContactInfoUncheckedCreateNestedManyWithoutAddressInput {
    create?: Array<ContactInfoCreateWithoutAddressInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutAddressInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyAddressInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
}
export declare class ContactInfoUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<ContactInfoCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
}
export declare class ContactInfoUncheckedCreateWithoutAddressInput {
    id?: number;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId: string;
}
export declare class ContactInfoUncheckedCreateWithoutParticipantInput {
    id?: number;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    addressId: number;
}
export declare class ContactInfoUncheckedCreateInput {
    id?: number;
    telp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId: string;
    addressId: number;
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
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<ContactInfoCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ContactInfoUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    update?: Array<ContactInfoUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ContactInfoUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ContactInfoScalarWhereInput>;
}
export declare class ContactInfoUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateWithoutAddressInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ContactInfoUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    addressId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ContactInfoUpdateManyMutationInput {
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ContactInfoUpdateManyWithWhereWithoutAddressInput {
    where: InstanceType<typeof ContactInfoScalarWhereInput>;
    data: InstanceType<typeof ContactInfoUpdateManyMutationInput>;
}
export declare class ContactInfoUpdateManyWithWhereWithoutParticipantInput {
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
export declare class ContactInfoUpdateManyWithoutParticipantNestedInput {
    create?: Array<ContactInfoCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ContactInfoCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ContactInfoUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ContactInfoCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>>;
    update?: Array<ContactInfoUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ContactInfoUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ContactInfoScalarWhereInput>;
}
export declare class ContactInfoUpdateWithWhereUniqueWithoutAddressInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ContactInfoUpdateWithoutAddressInput>;
}
export declare class ContactInfoUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ContactInfoUpdateWithoutParticipantInput>;
}
export declare class ContactInfoUpdateWithoutAddressInput {
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutContactInfosNestedInput>;
}
export declare class ContactInfoUpdateWithoutParticipantInput {
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUpdateInput {
    telp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutContactInfosNestedInput>;
    address?: InstanceType<typeof AddressUpdateOneRequiredWithoutContactInfoNestedInput>;
}
export declare class ContactInfoUpsertWithWhereUniqueWithoutAddressInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ContactInfoUpdateWithoutAddressInput>;
    create: InstanceType<typeof ContactInfoCreateWithoutAddressInput>;
}
export declare class ContactInfoUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ContactInfoWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ContactInfoUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ContactInfoCreateWithoutParticipantInput>;
}
export declare class ContactInfoWhereUniqueInput {
    id?: number;
    AND?: Array<ContactInfoWhereInput>;
    OR?: Array<ContactInfoWhereInput>;
    NOT?: Array<ContactInfoWhereInput>;
    telp?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
}
export declare class ContactInfoWhereInput {
    AND?: Array<ContactInfoWhereInput>;
    OR?: Array<ContactInfoWhereInput>;
    NOT?: Array<ContactInfoWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    telp?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    addressId?: InstanceType<typeof IntFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    address?: InstanceType<typeof AddressRelationFilter>;
}
export declare class ContactInfo {
    id: number;
    telp: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    participantId: string;
    addressId: number;
    participant?: InstanceType<typeof Participant>;
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
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
}
export declare class DiseaseAggregateArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
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
    groupId?: true;
}
export declare class DiseaseAvgAggregate {
    id?: number;
    groupId?: number;
}
export declare class DiseaseAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
}
export declare class DiseaseCountAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
    _all?: true;
}
export declare class DiseaseCountAggregate {
    id: number;
    code: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    groupId: number;
    _all: number;
}
export declare class DiseaseCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
}
export declare class DiseaseCount {
    claims?: number;
}
export declare class DiseaseCreateManyGroupInputEnvelope {
    data: Array<DiseaseCreateManyGroupInput>;
    skipDuplicates?: boolean;
}
export declare class DiseaseCreateManyGroupInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseCreateManyInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: number;
}
export declare class DiseaseCreateNestedManyWithoutGroupInput {
    create?: Array<DiseaseCreateWithoutGroupInput>;
    connectOrCreate?: Array<DiseaseCreateOrConnectWithoutGroupInput>;
    createMany?: InstanceType<typeof DiseaseCreateManyGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
}
export declare class DiseaseCreateNestedOneWithoutClaimsInput {
    create?: InstanceType<typeof DiseaseCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof DiseaseCreateOrConnectWithoutClaimsInput>;
    connect?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
}
export declare class DiseaseCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    create: InstanceType<typeof DiseaseCreateWithoutClaimsInput>;
}
export declare class DiseaseCreateOrConnectWithoutGroupInput {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    create: InstanceType<typeof DiseaseCreateWithoutGroupInput>;
}
export declare class DiseaseCreateWithoutClaimsInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    group: InstanceType<typeof DiseaseGroupCreateNestedOneWithoutDiseaseInput>;
}
export declare class DiseaseCreateWithoutGroupInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutDiseaseInput>;
}
export declare class DiseaseCreateInput {
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    group: InstanceType<typeof DiseaseGroupCreateNestedOneWithoutDiseaseInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutDiseaseInput>;
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
    groupId: number;
    _count?: InstanceType<typeof DiseaseCountAggregate>;
    _avg?: InstanceType<typeof DiseaseAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseSumAggregate>;
    _min?: InstanceType<typeof DiseaseMinAggregate>;
    _max?: InstanceType<typeof DiseaseMaxAggregate>;
}
export declare class DiseaseListRelationFilter {
    every?: InstanceType<typeof DiseaseWhereInput>;
    some?: InstanceType<typeof DiseaseWhereInput>;
    none?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class DiseaseMaxAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
}
export declare class DiseaseMaxAggregate {
    id?: number;
    code?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId?: number;
}
export declare class DiseaseMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
}
export declare class DiseaseMinAggregateInput {
    id?: true;
    code?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
}
export declare class DiseaseMinAggregate {
    id?: number;
    code?: string;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId?: number;
}
export declare class DiseaseMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
}
export declare class DiseaseNullableRelationFilter {
    is?: InstanceType<typeof DiseaseWhereInput>;
    isNot?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class DiseaseOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class DiseaseOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    code?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
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
    groupId?: keyof typeof SortOrder;
    group?: InstanceType<typeof DiseaseGroupOrderByWithRelationInput>;
    claims?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
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
    groupId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class DiseaseScalarWhereInput {
    AND?: Array<DiseaseScalarWhereInput>;
    OR?: Array<DiseaseScalarWhereInput>;
    NOT?: Array<DiseaseScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    code?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    groupId?: InstanceType<typeof IntFilter>;
}
export declare class DiseaseSumAggregateInput {
    id?: true;
    groupId?: true;
}
export declare class DiseaseSumAggregate {
    id?: number;
    groupId?: number;
}
export declare class DiseaseSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
}
export declare class DiseaseUncheckedCreateNestedManyWithoutGroupInput {
    create?: Array<DiseaseCreateWithoutGroupInput>;
    connectOrCreate?: Array<DiseaseCreateOrConnectWithoutGroupInput>;
    createMany?: InstanceType<typeof DiseaseCreateManyGroupInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
}
export declare class DiseaseUncheckedCreateWithoutClaimsInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: number;
}
export declare class DiseaseUncheckedCreateWithoutGroupInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutDiseaseInput>;
}
export declare class DiseaseUncheckedCreateInput {
    id?: number;
    code: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutDiseaseInput>;
}
export declare class DiseaseUncheckedUpdateManyWithoutGroupNestedInput {
    create?: Array<DiseaseCreateWithoutGroupInput>;
    connectOrCreate?: Array<DiseaseCreateOrConnectWithoutGroupInput>;
    upsert?: Array<DiseaseUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: InstanceType<typeof DiseaseCreateManyGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    disconnect?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    delete?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    connect?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    update?: Array<DiseaseUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Array<DiseaseUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Array<DiseaseScalarWhereInput>;
}
export declare class DiseaseUncheckedUpdateManyWithoutGroupInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DiseaseUncheckedUpdateWithoutClaimsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DiseaseUncheckedUpdateWithoutGroupInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutDiseaseNestedInput>;
}
export declare class DiseaseUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutDiseaseNestedInput>;
}
export declare class DiseaseUpdateManyMutationInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseUpdateManyWithWhereWithoutGroupInput {
    where: InstanceType<typeof DiseaseScalarWhereInput>;
    data: InstanceType<typeof DiseaseUpdateManyMutationInput>;
}
export declare class DiseaseUpdateManyWithoutGroupNestedInput {
    create?: Array<DiseaseCreateWithoutGroupInput>;
    connectOrCreate?: Array<DiseaseCreateOrConnectWithoutGroupInput>;
    upsert?: Array<DiseaseUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: InstanceType<typeof DiseaseCreateManyGroupInputEnvelope>;
    set?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    disconnect?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    delete?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    connect?: Array<Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>>;
    update?: Array<DiseaseUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Array<DiseaseUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Array<DiseaseScalarWhereInput>;
}
export declare class DiseaseUpdateOneWithoutClaimsNestedInput {
    create?: InstanceType<typeof DiseaseCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof DiseaseCreateOrConnectWithoutClaimsInput>;
    upsert?: InstanceType<typeof DiseaseUpsertWithoutClaimsInput>;
    disconnect?: InstanceType<typeof DiseaseWhereInput>;
    delete?: InstanceType<typeof DiseaseWhereInput>;
    connect?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    update?: InstanceType<typeof DiseaseUpdateToOneWithWhereWithoutClaimsInput>;
}
export declare class DiseaseUpdateToOneWithWhereWithoutClaimsInput {
    where?: InstanceType<typeof DiseaseWhereInput>;
    data: InstanceType<typeof DiseaseUpdateWithoutClaimsInput>;
}
export declare class DiseaseUpdateWithWhereUniqueWithoutGroupInput {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    data: InstanceType<typeof DiseaseUpdateWithoutGroupInput>;
}
export declare class DiseaseUpdateWithoutClaimsInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    group?: InstanceType<typeof DiseaseGroupUpdateOneRequiredWithoutDiseaseNestedInput>;
}
export declare class DiseaseUpdateWithoutGroupInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutDiseaseNestedInput>;
}
export declare class DiseaseUpdateInput {
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    group?: InstanceType<typeof DiseaseGroupUpdateOneRequiredWithoutDiseaseNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutDiseaseNestedInput>;
}
export declare class DiseaseUpsertWithWhereUniqueWithoutGroupInput {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    update: InstanceType<typeof DiseaseUpdateWithoutGroupInput>;
    create: InstanceType<typeof DiseaseCreateWithoutGroupInput>;
}
export declare class DiseaseUpsertWithoutClaimsInput {
    update: InstanceType<typeof DiseaseUpdateWithoutClaimsInput>;
    create: InstanceType<typeof DiseaseCreateWithoutClaimsInput>;
    where?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class DiseaseWhereUniqueInput {
    id?: number;
    groupId?: number;
    AND?: Array<DiseaseWhereInput>;
    OR?: Array<DiseaseWhereInput>;
    NOT?: Array<DiseaseWhereInput>;
    code?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    group?: InstanceType<typeof DiseaseGroupRelationFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
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
    groupId?: InstanceType<typeof IntFilter>;
    group?: InstanceType<typeof DiseaseGroupRelationFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class Disease {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    groupId: number;
    group?: InstanceType<typeof DiseaseGroup>;
    claims?: Array<Claim>;
    _count?: InstanceType<typeof DiseaseCount>;
}
export declare class FindFirstDiseaseOrThrowArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseScalarFieldEnum>;
}
export declare class FindFirstDiseaseArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseScalarFieldEnum>;
}
export declare class FindManyDiseaseArgs {
    where?: InstanceType<typeof DiseaseWhereInput>;
    orderBy?: Array<DiseaseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseScalarFieldEnum>;
}
export declare class FindUniqueDiseaseOrThrowArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
}
export declare class FindUniqueDiseaseArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
}
export declare class UpdateManyDiseaseArgs {
    data: InstanceType<typeof DiseaseUpdateManyMutationInput>;
    where?: InstanceType<typeof DiseaseWhereInput>;
}
export declare class UpdateOneDiseaseArgs {
    data: InstanceType<typeof DiseaseUpdateInput>;
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
}
export declare class UpsertOneDiseaseArgs {
    where: Prisma.AtLeast<DiseaseWhereUniqueInput, 'id' | 'groupId'>;
    create: InstanceType<typeof DiseaseCreateInput>;
    update: InstanceType<typeof DiseaseUpdateInput>;
}
export declare class AggregateDiseaseCluster {
    _count?: InstanceType<typeof DiseaseClusterCountAggregate>;
    _avg?: InstanceType<typeof DiseaseClusterAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseClusterSumAggregate>;
    _min?: InstanceType<typeof DiseaseClusterMinAggregate>;
    _max?: InstanceType<typeof DiseaseClusterMaxAggregate>;
}
export declare class CreateManyDiseaseClusterArgs {
    data: Array<DiseaseClusterCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDiseaseClusterArgs {
    data: InstanceType<typeof DiseaseClusterCreateInput>;
}
export declare class DeleteManyDiseaseClusterArgs {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
}
export declare class DeleteOneDiseaseClusterArgs {
    where: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
}
export declare class DiseaseClusterAggregateArgs {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
    orderBy?: Array<DiseaseClusterOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DiseaseClusterCountAggregateInput>;
    _avg?: InstanceType<typeof DiseaseClusterAvgAggregateInput>;
    _sum?: InstanceType<typeof DiseaseClusterSumAggregateInput>;
    _min?: InstanceType<typeof DiseaseClusterMinAggregateInput>;
    _max?: InstanceType<typeof DiseaseClusterMaxAggregateInput>;
}
export declare class DiseaseClusterAvgAggregateInput {
    id?: true;
}
export declare class DiseaseClusterAvgAggregate {
    id?: number;
}
export declare class DiseaseClusterAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class DiseaseClusterCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class DiseaseClusterCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class DiseaseClusterCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class DiseaseClusterCount {
    diseaseGroups?: number;
}
export declare class DiseaseClusterCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseClusterCreateNestedOneWithoutDiseaseGroupsInput {
    create?: InstanceType<typeof DiseaseClusterCreateWithoutDiseaseGroupsInput>;
    connectOrCreate?: InstanceType<typeof DiseaseClusterCreateOrConnectWithoutDiseaseGroupsInput>;
    connect?: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
}
export declare class DiseaseClusterCreateOrConnectWithoutDiseaseGroupsInput {
    where: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseClusterCreateWithoutDiseaseGroupsInput>;
}
export declare class DiseaseClusterCreateWithoutDiseaseGroupsInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseClusterCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseGroups?: InstanceType<typeof DiseaseGroupCreateNestedManyWithoutDiseaseClusterInput>;
}
export declare class DiseaseClusterGroupByArgs {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
    orderBy?: Array<DiseaseClusterOrderByWithAggregationInput>;
    by: Array<keyof typeof DiseaseClusterScalarFieldEnum>;
    having?: InstanceType<typeof DiseaseClusterScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DiseaseClusterCountAggregateInput>;
    _avg?: InstanceType<typeof DiseaseClusterAvgAggregateInput>;
    _sum?: InstanceType<typeof DiseaseClusterSumAggregateInput>;
    _min?: InstanceType<typeof DiseaseClusterMinAggregateInput>;
    _max?: InstanceType<typeof DiseaseClusterMaxAggregateInput>;
}
export declare class DiseaseClusterGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: InstanceType<typeof DiseaseClusterCountAggregate>;
    _avg?: InstanceType<typeof DiseaseClusterAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseClusterSumAggregate>;
    _min?: InstanceType<typeof DiseaseClusterMinAggregate>;
    _max?: InstanceType<typeof DiseaseClusterMaxAggregate>;
}
export declare class DiseaseClusterMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class DiseaseClusterMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseClusterMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class DiseaseClusterMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class DiseaseClusterMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseClusterMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class DiseaseClusterOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DiseaseClusterCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DiseaseClusterAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DiseaseClusterMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DiseaseClusterMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DiseaseClusterSumOrderByAggregateInput>;
}
export declare class DiseaseClusterOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    diseaseGroups?: InstanceType<typeof DiseaseGroupOrderByRelationAggregateInput>;
}
export declare class DiseaseClusterRelationFilter {
    is?: InstanceType<typeof DiseaseClusterWhereInput>;
    isNot?: InstanceType<typeof DiseaseClusterWhereInput>;
}
export declare class DiseaseClusterScalarWhereWithAggregatesInput {
    AND?: Array<DiseaseClusterScalarWhereWithAggregatesInput>;
    OR?: Array<DiseaseClusterScalarWhereWithAggregatesInput>;
    NOT?: Array<DiseaseClusterScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class DiseaseClusterSumAggregateInput {
    id?: true;
}
export declare class DiseaseClusterSumAggregate {
    id?: number;
}
export declare class DiseaseClusterSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class DiseaseClusterUncheckedCreateWithoutDiseaseGroupsInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseClusterUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseGroups?: InstanceType<typeof DiseaseGroupUncheckedCreateNestedManyWithoutDiseaseClusterInput>;
}
export declare class DiseaseClusterUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseClusterUncheckedUpdateWithoutDiseaseGroupsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseClusterUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    diseaseGroups?: InstanceType<typeof DiseaseGroupUncheckedUpdateManyWithoutDiseaseClusterNestedInput>;
}
export declare class DiseaseClusterUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseClusterUpdateOneRequiredWithoutDiseaseGroupsNestedInput {
    create?: InstanceType<typeof DiseaseClusterCreateWithoutDiseaseGroupsInput>;
    connectOrCreate?: InstanceType<typeof DiseaseClusterCreateOrConnectWithoutDiseaseGroupsInput>;
    upsert?: InstanceType<typeof DiseaseClusterUpsertWithoutDiseaseGroupsInput>;
    connect?: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DiseaseClusterUpdateToOneWithWhereWithoutDiseaseGroupsInput>;
}
export declare class DiseaseClusterUpdateToOneWithWhereWithoutDiseaseGroupsInput {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
    data: InstanceType<typeof DiseaseClusterUpdateWithoutDiseaseGroupsInput>;
}
export declare class DiseaseClusterUpdateWithoutDiseaseGroupsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseClusterUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    diseaseGroups?: InstanceType<typeof DiseaseGroupUpdateManyWithoutDiseaseClusterNestedInput>;
}
export declare class DiseaseClusterUpsertWithoutDiseaseGroupsInput {
    update: InstanceType<typeof DiseaseClusterUpdateWithoutDiseaseGroupsInput>;
    create: InstanceType<typeof DiseaseClusterCreateWithoutDiseaseGroupsInput>;
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
}
export declare class DiseaseClusterWhereUniqueInput {
    id?: number;
    AND?: Array<DiseaseClusterWhereInput>;
    OR?: Array<DiseaseClusterWhereInput>;
    NOT?: Array<DiseaseClusterWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    diseaseGroups?: InstanceType<typeof DiseaseGroupListRelationFilter>;
}
export declare class DiseaseClusterWhereInput {
    AND?: Array<DiseaseClusterWhereInput>;
    OR?: Array<DiseaseClusterWhereInput>;
    NOT?: Array<DiseaseClusterWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    diseaseGroups?: InstanceType<typeof DiseaseGroupListRelationFilter>;
}
export declare class DiseaseCluster {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    diseaseGroups?: Array<DiseaseGroup>;
    _count?: InstanceType<typeof DiseaseClusterCount>;
}
export declare class FindFirstDiseaseClusterOrThrowArgs {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
    orderBy?: Array<DiseaseClusterOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseClusterScalarFieldEnum>;
}
export declare class FindFirstDiseaseClusterArgs {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
    orderBy?: Array<DiseaseClusterOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseClusterScalarFieldEnum>;
}
export declare class FindManyDiseaseClusterArgs {
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
    orderBy?: Array<DiseaseClusterOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseClusterScalarFieldEnum>;
}
export declare class FindUniqueDiseaseClusterOrThrowArgs {
    where: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDiseaseClusterArgs {
    where: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDiseaseClusterArgs {
    data: InstanceType<typeof DiseaseClusterUpdateManyMutationInput>;
    where?: InstanceType<typeof DiseaseClusterWhereInput>;
}
export declare class UpdateOneDiseaseClusterArgs {
    data: InstanceType<typeof DiseaseClusterUpdateInput>;
    where: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDiseaseClusterArgs {
    where: Prisma.AtLeast<DiseaseClusterWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseClusterCreateInput>;
    update: InstanceType<typeof DiseaseClusterUpdateInput>;
}
export declare class AggregateDiseaseGroup {
    _count?: InstanceType<typeof DiseaseGroupCountAggregate>;
    _avg?: InstanceType<typeof DiseaseGroupAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseGroupSumAggregate>;
    _min?: InstanceType<typeof DiseaseGroupMinAggregate>;
    _max?: InstanceType<typeof DiseaseGroupMaxAggregate>;
}
export declare class CreateManyDiseaseGroupArgs {
    data: Array<DiseaseGroupCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneDiseaseGroupArgs {
    data: InstanceType<typeof DiseaseGroupCreateInput>;
}
export declare class DeleteManyDiseaseGroupArgs {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
}
export declare class DeleteOneDiseaseGroupArgs {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
}
export declare class DiseaseGroupAggregateArgs {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
    orderBy?: Array<DiseaseGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DiseaseGroupCountAggregateInput>;
    _avg?: InstanceType<typeof DiseaseGroupAvgAggregateInput>;
    _sum?: InstanceType<typeof DiseaseGroupSumAggregateInput>;
    _min?: InstanceType<typeof DiseaseGroupMinAggregateInput>;
    _max?: InstanceType<typeof DiseaseGroupMaxAggregateInput>;
}
export declare class DiseaseGroupAvgAggregateInput {
    id?: true;
    diseaseClusterId?: true;
}
export declare class DiseaseGroupAvgAggregate {
    id?: number;
    diseaseClusterId?: number;
}
export declare class DiseaseGroupAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
}
export declare class DiseaseGroupCountAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    diseaseClusterId?: true;
    _all?: true;
}
export declare class DiseaseGroupCountAggregate {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    diseaseClusterId: number;
    _all: number;
}
export declare class DiseaseGroupCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
}
export declare class DiseaseGroupCount {
    disease?: number;
}
export declare class DiseaseGroupCreateManyDiseaseClusterInputEnvelope {
    data: Array<DiseaseGroupCreateManyDiseaseClusterInput>;
    skipDuplicates?: boolean;
}
export declare class DiseaseGroupCreateManyDiseaseClusterInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class DiseaseGroupCreateManyInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseClusterId: number;
}
export declare class DiseaseGroupCreateNestedManyWithoutDiseaseClusterInput {
    create?: Array<DiseaseGroupCreateWithoutDiseaseClusterInput>;
    connectOrCreate?: Array<DiseaseGroupCreateOrConnectWithoutDiseaseClusterInput>;
    createMany?: InstanceType<typeof DiseaseGroupCreateManyDiseaseClusterInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
}
export declare class DiseaseGroupCreateNestedOneWithoutDiseaseInput {
    create?: InstanceType<typeof DiseaseGroupCreateWithoutDiseaseInput>;
    connectOrCreate?: InstanceType<typeof DiseaseGroupCreateOrConnectWithoutDiseaseInput>;
    connect?: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
}
export declare class DiseaseGroupCreateOrConnectWithoutDiseaseClusterInput {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseGroupCreateWithoutDiseaseClusterInput>;
}
export declare class DiseaseGroupCreateOrConnectWithoutDiseaseInput {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseGroupCreateWithoutDiseaseInput>;
}
export declare class DiseaseGroupCreateWithoutDiseaseClusterInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    disease?: InstanceType<typeof DiseaseCreateNestedManyWithoutGroupInput>;
}
export declare class DiseaseGroupCreateWithoutDiseaseInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    DiseaseCluster: InstanceType<typeof DiseaseClusterCreateNestedOneWithoutDiseaseGroupsInput>;
}
export declare class DiseaseGroupCreateInput {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    DiseaseCluster: InstanceType<typeof DiseaseClusterCreateNestedOneWithoutDiseaseGroupsInput>;
    disease?: InstanceType<typeof DiseaseCreateNestedManyWithoutGroupInput>;
}
export declare class DiseaseGroupGroupByArgs {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
    orderBy?: Array<DiseaseGroupOrderByWithAggregationInput>;
    by: Array<keyof typeof DiseaseGroupScalarFieldEnum>;
    having?: InstanceType<typeof DiseaseGroupScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof DiseaseGroupCountAggregateInput>;
    _avg?: InstanceType<typeof DiseaseGroupAvgAggregateInput>;
    _sum?: InstanceType<typeof DiseaseGroupSumAggregateInput>;
    _min?: InstanceType<typeof DiseaseGroupMinAggregateInput>;
    _max?: InstanceType<typeof DiseaseGroupMaxAggregateInput>;
}
export declare class DiseaseGroupGroupBy {
    id: number;
    name: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    diseaseClusterId: number;
    _count?: InstanceType<typeof DiseaseGroupCountAggregate>;
    _avg?: InstanceType<typeof DiseaseGroupAvgAggregate>;
    _sum?: InstanceType<typeof DiseaseGroupSumAggregate>;
    _min?: InstanceType<typeof DiseaseGroupMinAggregate>;
    _max?: InstanceType<typeof DiseaseGroupMaxAggregate>;
}
export declare class DiseaseGroupListRelationFilter {
    every?: InstanceType<typeof DiseaseGroupWhereInput>;
    some?: InstanceType<typeof DiseaseGroupWhereInput>;
    none?: InstanceType<typeof DiseaseGroupWhereInput>;
}
export declare class DiseaseGroupMaxAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    diseaseClusterId?: true;
}
export declare class DiseaseGroupMaxAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseClusterId?: number;
}
export declare class DiseaseGroupMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
}
export declare class DiseaseGroupMinAggregateInput {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    diseaseClusterId?: true;
}
export declare class DiseaseGroupMinAggregate {
    id?: number;
    name?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseClusterId?: number;
}
export declare class DiseaseGroupMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
}
export declare class DiseaseGroupOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class DiseaseGroupOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof DiseaseGroupCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof DiseaseGroupAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof DiseaseGroupMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof DiseaseGroupMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof DiseaseGroupSumOrderByAggregateInput>;
}
export declare class DiseaseGroupOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
    DiseaseCluster?: InstanceType<typeof DiseaseClusterOrderByWithRelationInput>;
    disease?: InstanceType<typeof DiseaseOrderByRelationAggregateInput>;
}
export declare class DiseaseGroupRelationFilter {
    is?: InstanceType<typeof DiseaseGroupWhereInput>;
    isNot?: InstanceType<typeof DiseaseGroupWhereInput>;
}
export declare class DiseaseGroupScalarWhereWithAggregatesInput {
    AND?: Array<DiseaseGroupScalarWhereWithAggregatesInput>;
    OR?: Array<DiseaseGroupScalarWhereWithAggregatesInput>;
    NOT?: Array<DiseaseGroupScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    diseaseClusterId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class DiseaseGroupScalarWhereInput {
    AND?: Array<DiseaseGroupScalarWhereInput>;
    OR?: Array<DiseaseGroupScalarWhereInput>;
    NOT?: Array<DiseaseGroupScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    diseaseClusterId?: InstanceType<typeof IntFilter>;
}
export declare class DiseaseGroupSumAggregateInput {
    id?: true;
    diseaseClusterId?: true;
}
export declare class DiseaseGroupSumAggregate {
    id?: number;
    diseaseClusterId?: number;
}
export declare class DiseaseGroupSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    diseaseClusterId?: keyof typeof SortOrder;
}
export declare class DiseaseGroupUncheckedCreateNestedManyWithoutDiseaseClusterInput {
    create?: Array<DiseaseGroupCreateWithoutDiseaseClusterInput>;
    connectOrCreate?: Array<DiseaseGroupCreateOrConnectWithoutDiseaseClusterInput>;
    createMany?: InstanceType<typeof DiseaseGroupCreateManyDiseaseClusterInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
}
export declare class DiseaseGroupUncheckedCreateWithoutDiseaseClusterInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    disease?: InstanceType<typeof DiseaseUncheckedCreateNestedManyWithoutGroupInput>;
}
export declare class DiseaseGroupUncheckedCreateWithoutDiseaseInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseClusterId: number;
}
export declare class DiseaseGroupUncheckedCreateInput {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diseaseClusterId: number;
    disease?: InstanceType<typeof DiseaseUncheckedCreateNestedManyWithoutGroupInput>;
}
export declare class DiseaseGroupUncheckedUpdateManyWithoutDiseaseClusterNestedInput {
    create?: Array<DiseaseGroupCreateWithoutDiseaseClusterInput>;
    connectOrCreate?: Array<DiseaseGroupCreateOrConnectWithoutDiseaseClusterInput>;
    upsert?: Array<DiseaseGroupUpsertWithWhereUniqueWithoutDiseaseClusterInput>;
    createMany?: InstanceType<typeof DiseaseGroupCreateManyDiseaseClusterInputEnvelope>;
    set?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    update?: Array<DiseaseGroupUpdateWithWhereUniqueWithoutDiseaseClusterInput>;
    updateMany?: Array<DiseaseGroupUpdateManyWithWhereWithoutDiseaseClusterInput>;
    deleteMany?: Array<DiseaseGroupScalarWhereInput>;
}
export declare class DiseaseGroupUncheckedUpdateManyWithoutDiseaseClusterInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseGroupUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    diseaseClusterId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DiseaseGroupUncheckedUpdateWithoutDiseaseClusterInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUncheckedUpdateManyWithoutGroupNestedInput>;
}
export declare class DiseaseGroupUncheckedUpdateWithoutDiseaseInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    diseaseClusterId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class DiseaseGroupUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    diseaseClusterId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUncheckedUpdateManyWithoutGroupNestedInput>;
}
export declare class DiseaseGroupUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class DiseaseGroupUpdateManyWithWhereWithoutDiseaseClusterInput {
    where: InstanceType<typeof DiseaseGroupScalarWhereInput>;
    data: InstanceType<typeof DiseaseGroupUpdateManyMutationInput>;
}
export declare class DiseaseGroupUpdateManyWithoutDiseaseClusterNestedInput {
    create?: Array<DiseaseGroupCreateWithoutDiseaseClusterInput>;
    connectOrCreate?: Array<DiseaseGroupCreateOrConnectWithoutDiseaseClusterInput>;
    upsert?: Array<DiseaseGroupUpsertWithWhereUniqueWithoutDiseaseClusterInput>;
    createMany?: InstanceType<typeof DiseaseGroupCreateManyDiseaseClusterInputEnvelope>;
    set?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>>;
    update?: Array<DiseaseGroupUpdateWithWhereUniqueWithoutDiseaseClusterInput>;
    updateMany?: Array<DiseaseGroupUpdateManyWithWhereWithoutDiseaseClusterInput>;
    deleteMany?: Array<DiseaseGroupScalarWhereInput>;
}
export declare class DiseaseGroupUpdateOneRequiredWithoutDiseaseNestedInput {
    create?: InstanceType<typeof DiseaseGroupCreateWithoutDiseaseInput>;
    connectOrCreate?: InstanceType<typeof DiseaseGroupCreateOrConnectWithoutDiseaseInput>;
    upsert?: InstanceType<typeof DiseaseGroupUpsertWithoutDiseaseInput>;
    connect?: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof DiseaseGroupUpdateToOneWithWhereWithoutDiseaseInput>;
}
export declare class DiseaseGroupUpdateToOneWithWhereWithoutDiseaseInput {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
    data: InstanceType<typeof DiseaseGroupUpdateWithoutDiseaseInput>;
}
export declare class DiseaseGroupUpdateWithWhereUniqueWithoutDiseaseClusterInput {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    data: InstanceType<typeof DiseaseGroupUpdateWithoutDiseaseClusterInput>;
}
export declare class DiseaseGroupUpdateWithoutDiseaseClusterInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    disease?: InstanceType<typeof DiseaseUpdateManyWithoutGroupNestedInput>;
}
export declare class DiseaseGroupUpdateWithoutDiseaseInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    DiseaseCluster?: InstanceType<typeof DiseaseClusterUpdateOneRequiredWithoutDiseaseGroupsNestedInput>;
}
export declare class DiseaseGroupUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    DiseaseCluster?: InstanceType<typeof DiseaseClusterUpdateOneRequiredWithoutDiseaseGroupsNestedInput>;
    disease?: InstanceType<typeof DiseaseUpdateManyWithoutGroupNestedInput>;
}
export declare class DiseaseGroupUpsertWithWhereUniqueWithoutDiseaseClusterInput {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    update: InstanceType<typeof DiseaseGroupUpdateWithoutDiseaseClusterInput>;
    create: InstanceType<typeof DiseaseGroupCreateWithoutDiseaseClusterInput>;
}
export declare class DiseaseGroupUpsertWithoutDiseaseInput {
    update: InstanceType<typeof DiseaseGroupUpdateWithoutDiseaseInput>;
    create: InstanceType<typeof DiseaseGroupCreateWithoutDiseaseInput>;
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
}
export declare class DiseaseGroupWhereUniqueInput {
    id?: number;
    AND?: Array<DiseaseGroupWhereInput>;
    OR?: Array<DiseaseGroupWhereInput>;
    NOT?: Array<DiseaseGroupWhereInput>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    diseaseClusterId?: InstanceType<typeof IntFilter>;
    DiseaseCluster?: InstanceType<typeof DiseaseClusterRelationFilter>;
    disease?: InstanceType<typeof DiseaseListRelationFilter>;
}
export declare class DiseaseGroupWhereInput {
    AND?: Array<DiseaseGroupWhereInput>;
    OR?: Array<DiseaseGroupWhereInput>;
    NOT?: Array<DiseaseGroupWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    diseaseClusterId?: InstanceType<typeof IntFilter>;
    DiseaseCluster?: InstanceType<typeof DiseaseClusterRelationFilter>;
    disease?: InstanceType<typeof DiseaseListRelationFilter>;
}
export declare class DiseaseGroup {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    diseaseClusterId: number;
    DiseaseCluster?: InstanceType<typeof DiseaseCluster>;
    disease?: Array<Disease>;
    _count?: InstanceType<typeof DiseaseGroupCount>;
}
export declare class FindFirstDiseaseGroupOrThrowArgs {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
    orderBy?: Array<DiseaseGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseGroupScalarFieldEnum>;
}
export declare class FindFirstDiseaseGroupArgs {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
    orderBy?: Array<DiseaseGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseGroupScalarFieldEnum>;
}
export declare class FindManyDiseaseGroupArgs {
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
    orderBy?: Array<DiseaseGroupOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DiseaseGroupScalarFieldEnum>;
}
export declare class FindUniqueDiseaseGroupOrThrowArgs {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
}
export declare class FindUniqueDiseaseGroupArgs {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
}
export declare class UpdateManyDiseaseGroupArgs {
    data: InstanceType<typeof DiseaseGroupUpdateManyMutationInput>;
    where?: InstanceType<typeof DiseaseGroupWhereInput>;
}
export declare class UpdateOneDiseaseGroupArgs {
    data: InstanceType<typeof DiseaseGroupUpdateInput>;
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
}
export declare class UpsertOneDiseaseGroupArgs {
    where: Prisma.AtLeast<DiseaseGroupWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DiseaseGroupCreateInput>;
    update: InstanceType<typeof DiseaseGroupUpdateInput>;
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
    printCount?: true;
    claimProcessId?: true;
}
export declare class DocumentAvgAggregate {
    size?: number;
    printCount?: number;
    claimProcessId?: number;
}
export declare class DocumentAvgOrderByAggregateInput {
    size?: keyof typeof SortOrder;
    printCount?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
}
export declare class DocumentCountAggregateInput {
    id?: true;
    name?: true;
    path?: true;
    size?: true;
    printCount?: true;
    createdAt?: true;
    updatedAt?: true;
    source?: true;
    type?: true;
    claimProcessId?: true;
    _all?: true;
}
export declare class DocumentCountAggregate {
    id: number;
    name: number;
    path: number;
    size: number;
    printCount: number;
    createdAt: number;
    updatedAt: number;
    source: number;
    type: number;
    claimProcessId: number;
    _all: number;
}
export declare class DocumentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    printCount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
}
export declare class DocumentCreateManyClaimProcessInputEnvelope {
    data: Array<DocumentCreateManyClaimProcessInput>;
    skipDuplicates?: boolean;
}
export declare class DocumentCreateManyClaimProcessInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
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
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProcessId?: number;
}
export declare class DocumentCreateNestedManyWithoutClaimProcessInput {
    create?: Array<DocumentCreateWithoutClaimProcessInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProcessInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProcessInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
}
export declare class DocumentCreateNestedOneWithoutGuaranteeLetterOfInput {
    create?: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutGuaranteeLetterOfInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateNestedOneWithoutRejectionLetterOfInput {
    create?: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
    connectOrCreate?: InstanceType<typeof DocumentCreateOrConnectWithoutRejectionLetterOfInput>;
    connect?: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
}
export declare class DocumentCreateOrConnectWithoutClaimProcessInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutClaimProcessInput>;
}
export declare class DocumentCreateOrConnectWithoutGuaranteeLetterOfInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
}
export declare class DocumentCreateOrConnectWithoutRejectionLetterOfInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    create: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
}
export declare class DocumentCreateWithoutClaimProcessInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
}
export declare class DocumentCreateWithoutGuaranteeLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    claimProcess?: InstanceType<typeof ClaimProcessCreateNestedOneWithoutDocumentsInput>;
}
export declare class DocumentCreateWithoutRejectionLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    claimProcess?: InstanceType<typeof ClaimProcessCreateNestedOneWithoutDocumentsInput>;
}
export declare class DocumentCreateInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusCreateNestedOneWithoutGuaranteeLetterInput>;
    claimProcess?: InstanceType<typeof ClaimProcessCreateNestedOneWithoutDocumentsInput>;
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
    printCount: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProcessId?: number;
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
    printCount?: true;
    createdAt?: true;
    updatedAt?: true;
    source?: true;
    type?: true;
    claimProcessId?: true;
}
export declare class DocumentMaxAggregate {
    id?: string;
    name?: string;
    path?: string;
    size?: number;
    printCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source?: keyof typeof DocumentSource;
    type?: keyof typeof DocumentType;
    claimProcessId?: number;
}
export declare class DocumentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    printCount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
}
export declare class DocumentMinAggregateInput {
    id?: true;
    name?: true;
    path?: true;
    size?: true;
    printCount?: true;
    createdAt?: true;
    updatedAt?: true;
    source?: true;
    type?: true;
    claimProcessId?: true;
}
export declare class DocumentMinAggregate {
    id?: string;
    name?: string;
    path?: string;
    size?: number;
    printCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source?: keyof typeof DocumentSource;
    type?: keyof typeof DocumentType;
    claimProcessId?: number;
}
export declare class DocumentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    size?: keyof typeof SortOrder;
    printCount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
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
    printCount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProcessId?: InstanceType<typeof SortOrderInput>;
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
    printCount?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    claimProcessId?: InstanceType<typeof SortOrderInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusOrderByWithRelationInput>;
    claimProcess?: InstanceType<typeof ClaimProcessOrderByWithRelationInput>;
}
export declare class DocumentScalarWhereWithAggregatesInput {
    AND?: Array<DocumentScalarWhereWithAggregatesInput>;
    OR?: Array<DocumentScalarWhereWithAggregatesInput>;
    NOT?: Array<DocumentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    size?: InstanceType<typeof IntWithAggregatesFilter>;
    printCount?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    source?: InstanceType<typeof EnumDocumentSourceWithAggregatesFilter>;
    type?: InstanceType<typeof EnumDocumentTypeWithAggregatesFilter>;
    claimProcessId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class DocumentScalarWhereInput {
    AND?: Array<DocumentScalarWhereInput>;
    OR?: Array<DocumentScalarWhereInput>;
    NOT?: Array<DocumentScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    path?: InstanceType<typeof StringFilter>;
    size?: InstanceType<typeof IntFilter>;
    printCount?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    source?: InstanceType<typeof EnumDocumentSourceFilter>;
    type?: InstanceType<typeof EnumDocumentTypeFilter>;
    claimProcessId?: InstanceType<typeof IntNullableFilter>;
}
export declare class DocumentSumAggregateInput {
    size?: true;
    printCount?: true;
    claimProcessId?: true;
}
export declare class DocumentSumAggregate {
    size?: number;
    printCount?: number;
    claimProcessId?: number;
}
export declare class DocumentSumOrderByAggregateInput {
    size?: keyof typeof SortOrder;
    printCount?: keyof typeof SortOrder;
    claimProcessId?: keyof typeof SortOrder;
}
export declare class DocumentUncheckedCreateNestedManyWithoutClaimProcessInput {
    create?: Array<DocumentCreateWithoutClaimProcessInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProcessInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProcessInputEnvelope>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
}
export declare class DocumentUncheckedCreateWithoutClaimProcessInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
}
export declare class DocumentUncheckedCreateWithoutGuaranteeLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProcessId?: number;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
}
export declare class DocumentUncheckedCreateWithoutRejectionLetterOfInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProcessId?: number;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
}
export declare class DocumentUncheckedCreateInput {
    id?: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProcessId?: number;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutRejectionLetterInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedCreateNestedOneWithoutGuaranteeLetterInput>;
}
export declare class DocumentUncheckedUpdateManyWithoutClaimProcessNestedInput {
    create?: Array<DocumentCreateWithoutClaimProcessInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProcessInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutClaimProcessInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProcessInputEnvelope>;
    set?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutClaimProcessInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutClaimProcessInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
export declare class DocumentUncheckedUpdateManyWithoutClaimProcessInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
}
export declare class DocumentUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class DocumentUncheckedUpdateWithoutClaimProcessInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutGuaranteeLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
}
export declare class DocumentUncheckedUpdateWithoutRejectionLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
}
export declare class DocumentUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    claimProcessId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUncheckedUpdateOneWithoutGuaranteeLetterNestedInput>;
}
export declare class DocumentUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
}
export declare class DocumentUpdateManyWithWhereWithoutClaimProcessInput {
    where: InstanceType<typeof DocumentScalarWhereInput>;
    data: InstanceType<typeof DocumentUpdateManyMutationInput>;
}
export declare class DocumentUpdateManyWithoutClaimProcessNestedInput {
    create?: Array<DocumentCreateWithoutClaimProcessInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutClaimProcessInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutClaimProcessInput>;
    createMany?: InstanceType<typeof DocumentCreateManyClaimProcessInputEnvelope>;
    set?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutClaimProcessInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutClaimProcessInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
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
export declare class DocumentUpdateToOneWithWhereWithoutGuaranteeLetterOfInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutGuaranteeLetterOfInput>;
}
export declare class DocumentUpdateToOneWithWhereWithoutRejectionLetterOfInput {
    where?: InstanceType<typeof DocumentWhereInput>;
    data: InstanceType<typeof DocumentUpdateWithoutRejectionLetterOfInput>;
}
export declare class DocumentUpdateWithWhereUniqueWithoutClaimProcessInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof DocumentUpdateWithoutClaimProcessInput>;
}
export declare class DocumentUpdateWithoutClaimProcessInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
}
export declare class DocumentUpdateWithoutGuaranteeLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    claimProcess?: InstanceType<typeof ClaimProcessUpdateOneWithoutDocumentsNestedInput>;
}
export declare class DocumentUpdateWithoutRejectionLetterOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    claimProcess?: InstanceType<typeof ClaimProcessUpdateOneWithoutDocumentsNestedInput>;
}
export declare class DocumentUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    size?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    printCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    source?: InstanceType<typeof EnumDocumentSourceFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumDocumentTypeFieldUpdateOperationsInput>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutRejectionLetterNestedInput>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusUpdateOneWithoutGuaranteeLetterNestedInput>;
    claimProcess?: InstanceType<typeof ClaimProcessUpdateOneWithoutDocumentsNestedInput>;
}
export declare class DocumentUpsertWithWhereUniqueWithoutClaimProcessInput {
    where: Prisma.AtLeast<DocumentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof DocumentUpdateWithoutClaimProcessInput>;
    create: InstanceType<typeof DocumentCreateWithoutClaimProcessInput>;
}
export declare class DocumentUpsertWithoutGuaranteeLetterOfInput {
    update: InstanceType<typeof DocumentUpdateWithoutGuaranteeLetterOfInput>;
    create: InstanceType<typeof DocumentCreateWithoutGuaranteeLetterOfInput>;
    where?: InstanceType<typeof DocumentWhereInput>;
}
export declare class DocumentUpsertWithoutRejectionLetterOfInput {
    update: InstanceType<typeof DocumentUpdateWithoutRejectionLetterOfInput>;
    create: InstanceType<typeof DocumentCreateWithoutRejectionLetterOfInput>;
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
    printCount?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    source?: InstanceType<typeof EnumDocumentSourceFilter>;
    type?: InstanceType<typeof EnumDocumentTypeFilter>;
    claimProcessId?: InstanceType<typeof IntNullableFilter>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    claimProcess?: InstanceType<typeof ClaimProcessNullableRelationFilter>;
}
export declare class DocumentWhereInput {
    AND?: Array<DocumentWhereInput>;
    OR?: Array<DocumentWhereInput>;
    NOT?: Array<DocumentWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    name?: InstanceType<typeof StringFilter>;
    path?: InstanceType<typeof StringFilter>;
    size?: InstanceType<typeof IntFilter>;
    printCount?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    source?: InstanceType<typeof EnumDocumentSourceFilter>;
    type?: InstanceType<typeof EnumDocumentTypeFilter>;
    claimProcessId?: InstanceType<typeof IntNullableFilter>;
    rejectionLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatusNullableRelationFilter>;
    claimProcess?: InstanceType<typeof ClaimProcessNullableRelationFilter>;
}
export declare class Document {
    id: string;
    name: string;
    path: string;
    size: number;
    printCount: number;
    createdAt: Date;
    updatedAt: Date;
    source: keyof typeof DocumentSource;
    type: keyof typeof DocumentType;
    claimProcessId: number | null;
    rejectionLetterOf?: InstanceType<typeof ClaimStatus> | null;
    guaranteeLetterOf?: InstanceType<typeof ClaimStatus> | null;
    claimProcess?: InstanceType<typeof ClaimProcess> | null;
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
    participantId?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
    _all?: true;
}
export declare class EmploymentCountAggregate {
    id: number;
    employmentPosition: number;
    participantId: number;
    branchId: number;
    groupId: number;
    regionId: number;
    _all: number;
}
export declare class EmploymentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
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
    participantId: string;
    groupId: number;
    regionId: number;
}
export declare class EmploymentCreateManyGroupInputEnvelope {
    data: Array<EmploymentCreateManyGroupInput>;
    skipDuplicates?: boolean;
}
export declare class EmploymentCreateManyGroupInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    regionId: number;
}
export declare class EmploymentCreateManyParticipantInputEnvelope {
    data: Array<EmploymentCreateManyParticipantInput>;
    skipDuplicates?: boolean;
}
export declare class EmploymentCreateManyParticipantInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId: number;
    regionId: number;
}
export declare class EmploymentCreateManyRegionInputEnvelope {
    data: Array<EmploymentCreateManyRegionInput>;
    skipDuplicates?: boolean;
}
export declare class EmploymentCreateManyRegionInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    groupId: number;
}
export declare class EmploymentCreateManyInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    groupId: number;
    regionId: number;
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
export declare class EmploymentCreateNestedManyWithoutParticipantInput {
    create?: Array<EmploymentCreateWithoutParticipantInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
}
export declare class EmploymentCreateNestedManyWithoutRegionInput {
    create?: Array<EmploymentCreateWithoutRegionInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutRegionInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyRegionInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
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
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentsInput>;
    group?: InstanceType<typeof GroupCreateNestedOneWithoutEmploymentInput>;
    region?: InstanceType<typeof RegionCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentCreateWithoutGroupInput {
    employmentPosition: keyof typeof Position;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentsInput>;
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
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentsInput>;
    branch: InstanceType<typeof BranchCreateNestedOneWithoutEmploymentInput>;
    group?: InstanceType<typeof GroupCreateNestedOneWithoutEmploymentInput>;
}
export declare class EmploymentCreateInput {
    employmentPosition: keyof typeof Position;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutEmploymentsInput>;
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
    participantId: string;
    branchId: number;
    groupId: number;
    regionId: number;
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
    participantId?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
}
export declare class EmploymentMaxAggregate {
    id?: number;
    employmentPosition?: keyof typeof Position;
    participantId?: string;
    branchId?: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
}
export declare class EmploymentMinAggregateInput {
    id?: true;
    employmentPosition?: true;
    participantId?: true;
    branchId?: true;
    groupId?: true;
    regionId?: true;
}
export declare class EmploymentMinAggregate {
    id?: number;
    employmentPosition?: keyof typeof Position;
    participantId?: string;
    branchId?: number;
    groupId?: number;
    regionId?: number;
}
export declare class EmploymentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
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
    participantId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof EmploymentCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof EmploymentAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof EmploymentMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof EmploymentMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof EmploymentSumOrderByAggregateInput>;
}
export declare class EmploymentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    employmentPosition?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    branchId?: keyof typeof SortOrder;
    groupId?: keyof typeof SortOrder;
    regionId?: keyof typeof SortOrder;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    branch?: InstanceType<typeof BranchOrderByWithRelationInput>;
    group?: InstanceType<typeof GroupOrderByWithRelationInput>;
    region?: InstanceType<typeof RegionOrderByWithRelationInput>;
}
export declare class EmploymentScalarWhereWithAggregatesInput {
    AND?: Array<EmploymentScalarWhereWithAggregatesInput>;
    OR?: Array<EmploymentScalarWhereWithAggregatesInput>;
    NOT?: Array<EmploymentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    employmentPosition?: InstanceType<typeof EnumPositionWithAggregatesFilter>;
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
    branchId?: InstanceType<typeof IntWithAggregatesFilter>;
    groupId?: InstanceType<typeof IntWithAggregatesFilter>;
    regionId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class EmploymentScalarWhereInput {
    AND?: Array<EmploymentScalarWhereInput>;
    OR?: Array<EmploymentScalarWhereInput>;
    NOT?: Array<EmploymentScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    employmentPosition?: InstanceType<typeof EnumPositionFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    groupId?: InstanceType<typeof IntFilter>;
    regionId?: InstanceType<typeof IntFilter>;
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
export declare class EmploymentUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<EmploymentCreateWithoutParticipantInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyParticipantInputEnvelope>;
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
    participantId: string;
    groupId: number;
    regionId: number;
}
export declare class EmploymentUncheckedCreateWithoutGroupInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    regionId: number;
}
export declare class EmploymentUncheckedCreateWithoutParticipantInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    branchId: number;
    groupId: number;
    regionId: number;
}
export declare class EmploymentUncheckedCreateWithoutRegionInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    groupId: number;
}
export declare class EmploymentUncheckedCreateInput {
    id?: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    groupId: number;
    regionId: number;
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
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<EmploymentCreateWithoutParticipantInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<EmploymentScalarWhereInput>;
}
export declare class EmploymentUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateWithoutBranchInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateWithoutGroupInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateWithoutRegionInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class EmploymentUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    branchId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    groupId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    regionId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
export declare class EmploymentUpdateManyWithWhereWithoutParticipantInput {
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
export declare class EmploymentUpdateManyWithoutParticipantNestedInput {
    create?: Array<EmploymentCreateWithoutParticipantInput>;
    connectOrCreate?: Array<EmploymentCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<EmploymentUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof EmploymentCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>>;
    update?: Array<EmploymentUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<EmploymentUpdateManyWithWhereWithoutParticipantInput>;
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
export declare class EmploymentUpdateWithWhereUniqueWithoutBranchInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutBranchInput>;
}
export declare class EmploymentUpdateWithWhereUniqueWithoutGroupInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutGroupInput>;
}
export declare class EmploymentUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutParticipantInput>;
}
export declare class EmploymentUpdateWithWhereUniqueWithoutRegionInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmploymentUpdateWithoutRegionInput>;
}
export declare class EmploymentUpdateWithoutBranchInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutEmploymentsNestedInput>;
    group?: InstanceType<typeof GroupUpdateOneWithoutEmploymentNestedInput>;
    region?: InstanceType<typeof RegionUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateWithoutGroupInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutEmploymentsNestedInput>;
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
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutEmploymentsNestedInput>;
    branch?: InstanceType<typeof BranchUpdateOneRequiredWithoutEmploymentNestedInput>;
    group?: InstanceType<typeof GroupUpdateOneWithoutEmploymentNestedInput>;
}
export declare class EmploymentUpdateInput {
    employmentPosition?: InstanceType<typeof EnumPositionFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutEmploymentsNestedInput>;
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
export declare class EmploymentUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EmploymentUpdateWithoutParticipantInput>;
    create: InstanceType<typeof EmploymentCreateWithoutParticipantInput>;
}
export declare class EmploymentUpsertWithWhereUniqueWithoutRegionInput {
    where: Prisma.AtLeast<EmploymentWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EmploymentUpdateWithoutRegionInput>;
    create: InstanceType<typeof EmploymentCreateWithoutRegionInput>;
}
export declare class EmploymentWhereUniqueInput {
    id?: number;
    AND?: Array<EmploymentWhereInput>;
    OR?: Array<EmploymentWhereInput>;
    NOT?: Array<EmploymentWhereInput>;
    employmentPosition?: InstanceType<typeof EnumPositionFilter>;
    participantId?: InstanceType<typeof StringFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    groupId?: InstanceType<typeof IntFilter>;
    regionId?: InstanceType<typeof IntFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
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
    participantId?: InstanceType<typeof StringFilter>;
    branchId?: InstanceType<typeof IntFilter>;
    groupId?: InstanceType<typeof IntFilter>;
    regionId?: InstanceType<typeof IntFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    branch?: InstanceType<typeof BranchRelationFilter>;
    group?: InstanceType<typeof GroupNullableRelationFilter>;
    region?: InstanceType<typeof RegionNullableRelationFilter>;
}
export declare class Employment {
    id: number;
    employmentPosition: keyof typeof Position;
    participantId: string;
    branchId: number;
    groupId: number;
    regionId: number;
    participant?: InstanceType<typeof Participant>;
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
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class FindFirstParticipantOrThrowArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
export declare class FindFirstParticipantArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
export declare class FindManyParticipantArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ParticipantScalarFieldEnum>;
}
export declare class FindUniqueParticipantOrThrowArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class FindUniqueParticipantArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantAggregateArgs {
    where?: InstanceType<typeof ParticipantWhereInput>;
    orderBy?: Array<ParticipantOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ParticipantCountAggregateInput>;
    _avg?: InstanceType<typeof ParticipantAvgAggregateInput>;
    _sum?: InstanceType<typeof ParticipantSumAggregateInput>;
    _min?: InstanceType<typeof ParticipantMinAggregateInput>;
    _max?: InstanceType<typeof ParticipantMaxAggregateInput>;
}
export declare class ParticipantAvgAggregateInput {
    bankAccountId?: true;
}
export declare class ParticipantAvgAggregate {
    bankAccountId?: number;
}
export declare class ParticipantAvgOrderByAggregateInput {
    bankAccountId?: keyof typeof SortOrder;
}
export declare class ParticipantCountAggregateInput {
    gender?: true;
    birthDate?: true;
    nationalId?: true;
    familyCardNumber?: true;
    taxId?: true;
    isActive?: true;
    status?: true;
    userId?: true;
    relationId?: true;
    bankAccountId?: true;
    _all?: true;
}
export declare class ParticipantCountAggregate {
    gender: number;
    birthDate: number;
    nationalId: number;
    familyCardNumber: number;
    taxId: number;
    isActive: number;
    status: number;
    userId: number;
    relationId: number;
    bankAccountId: number;
    _all: number;
}
export declare class ParticipantCountOrderByAggregateInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    nationalId?: keyof typeof SortOrder;
    familyCardNumber?: keyof typeof SortOrder;
    taxId?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
}
export declare class ParticipantCount {
    claims?: number;
    employments?: number;
    contactInfos?: number;
    programParticipations?: number;
    balances?: number;
    Participant?: number;
}
export declare class ParticipantCreateManyRelationInputEnvelope {
    data: Array<ParticipantCreateManyRelationInput>;
    skipDuplicates?: boolean;
}
export declare class ParticipantCreateManyRelationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    bankAccountId: number;
}
export declare class ParticipantCreateManyInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
}
export declare class ParticipantCreateNestedManyWithoutRelationInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
}
export declare class ParticipantCreateNestedOneWithoutBalancesInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBalancesInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBalancesInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutBankAccountInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutClaimsInput {
    create?: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutContactInfosInput {
    create?: InstanceType<typeof ParticipantCreateWithoutContactInfosInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutContactInfosInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutEmploymentsInput {
    create?: InstanceType<typeof ParticipantCreateWithoutEmploymentsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutEmploymentsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutProgramParticipationsInput {
    create?: InstanceType<typeof ParticipantCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutProgramParticipationsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantCreateOrConnectWithoutBalancesInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutBalancesInput>;
}
export declare class ParticipantCreateOrConnectWithoutBankAccountInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
}
export declare class ParticipantCreateOrConnectWithoutClaimsInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
}
export declare class ParticipantCreateOrConnectWithoutContactInfosInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutContactInfosInput>;
}
export declare class ParticipantCreateOrConnectWithoutEmploymentsInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutEmploymentsInput>;
}
export declare class ParticipantCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
}
export declare class ParticipantCreateOrConnectWithoutProgramParticipationsInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutProgramParticipationsInput>;
}
export declare class ParticipantCreateOrConnectWithoutRelationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutRelationInput>;
}
export declare class ParticipantCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof ParticipantCreateWithoutUserInput>;
}
export declare class ParticipantCreateWithoutBalancesInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutBankAccountInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutClaimsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutContactInfosInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutEmploymentsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutParticipantInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
}
export declare class ParticipantCreateWithoutProgramParticipationsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutRelationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateWithoutUserInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantCreateInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    bankAccountId: number;
    user: InstanceType<typeof UserCreateNestedOneWithoutParticipantInput>;
    relation?: InstanceType<typeof ParticipantCreateNestedOneWithoutParticipantInput>;
    bankAccount?: InstanceType<typeof BankAccountCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantCreateNestedManyWithoutRelationInput>;
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
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
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
    nationalId?: true;
    familyCardNumber?: true;
    taxId?: true;
    isActive?: true;
    status?: true;
    userId?: true;
    relationId?: true;
    bankAccountId?: true;
}
export declare class ParticipantMaxAggregate {
    gender?: keyof typeof Gender;
    birthDate?: Date | string;
    nationalId?: string;
    familyCardNumber?: string;
    taxId?: string;
    isActive?: boolean;
    status?: keyof typeof ParticipantStatus;
    userId?: string;
    relationId?: string;
    bankAccountId?: number;
}
export declare class ParticipantMaxOrderByAggregateInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    nationalId?: keyof typeof SortOrder;
    familyCardNumber?: keyof typeof SortOrder;
    taxId?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
}
export declare class ParticipantMinAggregateInput {
    gender?: true;
    birthDate?: true;
    nationalId?: true;
    familyCardNumber?: true;
    taxId?: true;
    isActive?: true;
    status?: true;
    userId?: true;
    relationId?: true;
    bankAccountId?: true;
}
export declare class ParticipantMinAggregate {
    gender?: keyof typeof Gender;
    birthDate?: Date | string;
    nationalId?: string;
    familyCardNumber?: string;
    taxId?: string;
    isActive?: boolean;
    status?: keyof typeof ParticipantStatus;
    userId?: string;
    relationId?: string;
    bankAccountId?: number;
}
export declare class ParticipantMinOrderByAggregateInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    nationalId?: keyof typeof SortOrder;
    familyCardNumber?: keyof typeof SortOrder;
    taxId?: keyof typeof SortOrder;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: keyof typeof SortOrder;
    bankAccountId?: keyof typeof SortOrder;
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
    nationalId?: keyof typeof SortOrder;
    familyCardNumber?: keyof typeof SortOrder;
    taxId?: InstanceType<typeof SortOrderInput>;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: InstanceType<typeof SortOrderInput>;
    bankAccountId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ParticipantCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ParticipantAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ParticipantMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ParticipantMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ParticipantSumOrderByAggregateInput>;
}
export declare class ParticipantOrderByWithRelationInput {
    gender?: keyof typeof SortOrder;
    birthDate?: keyof typeof SortOrder;
    nationalId?: keyof typeof SortOrder;
    familyCardNumber?: keyof typeof SortOrder;
    taxId?: InstanceType<typeof SortOrderInput>;
    isActive?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    relationId?: InstanceType<typeof SortOrderInput>;
    bankAccountId?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    relation?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    bankAccount?: InstanceType<typeof BankAccountOrderByWithRelationInput>;
    claims?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
    employments?: InstanceType<typeof EmploymentOrderByRelationAggregateInput>;
    contactInfos?: InstanceType<typeof ContactInfoOrderByRelationAggregateInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationOrderByRelationAggregateInput>;
    balances?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
    Participant?: InstanceType<typeof ParticipantOrderByRelationAggregateInput>;
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
    nationalId?: InstanceType<typeof StringWithAggregatesFilter>;
    familyCardNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    taxId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    isActive?: InstanceType<typeof BoolWithAggregatesFilter>;
    status?: InstanceType<typeof EnumParticipantStatusWithAggregatesFilter>;
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    relationId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    bankAccountId?: InstanceType<typeof IntWithAggregatesFilter>;
}
export declare class ParticipantScalarWhereInput {
    AND?: Array<ParticipantScalarWhereInput>;
    OR?: Array<ParticipantScalarWhereInput>;
    NOT?: Array<ParticipantScalarWhereInput>;
    gender?: InstanceType<typeof EnumGenderFilter>;
    birthDate?: InstanceType<typeof DateTimeFilter>;
    nationalId?: InstanceType<typeof StringFilter>;
    familyCardNumber?: InstanceType<typeof StringFilter>;
    taxId?: InstanceType<typeof StringNullableFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    status?: InstanceType<typeof EnumParticipantStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    relationId?: InstanceType<typeof StringNullableFilter>;
    bankAccountId?: InstanceType<typeof IntFilter>;
}
export declare class ParticipantSumAggregateInput {
    bankAccountId?: true;
}
export declare class ParticipantSumAggregate {
    bankAccountId?: number;
}
export declare class ParticipantSumOrderByAggregateInput {
    bankAccountId?: keyof typeof SortOrder;
}
export declare class ParticipantUncheckedCreateNestedManyWithoutRelationInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
}
export declare class ParticipantUncheckedCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class ParticipantUncheckedCreateWithoutBalancesInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutBankAccountInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutClaimsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutContactInfosInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutEmploymentsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutParticipantInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
}
export declare class ParticipantUncheckedCreateWithoutProgramParticipationsInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutRelationInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateWithoutUserInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedCreateInput {
    gender: keyof typeof Gender;
    birthDate: Date | string;
    nationalId: string;
    familyCardNumber: string;
    taxId?: string;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId?: string;
    bankAccountId: number;
    bankAccount?: InstanceType<typeof BankAccountUncheckedCreateNestedOneWithoutParticipantInput>;
    claims?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutParticipantInput>;
    employments?: InstanceType<typeof EmploymentUncheckedCreateNestedManyWithoutParticipantInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedCreateNestedManyWithoutParticipantInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput>;
    balances?: InstanceType<typeof AccountUncheckedCreateNestedManyWithoutParticipantInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedCreateNestedManyWithoutRelationInput>;
}
export declare class ParticipantUncheckedUpdateManyWithoutRelationNestedInput {
    create?: Array<ParticipantCreateWithoutRelationInput>;
    connectOrCreate?: Array<ParticipantCreateOrConnectWithoutRelationInput>;
    upsert?: Array<ParticipantUpsertWithWhereUniqueWithoutRelationInput>;
    createMany?: InstanceType<typeof ParticipantCreateManyRelationInputEnvelope>;
    set?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    disconnect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    delete?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutRelationInput>;
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutRelationInput>;
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
export declare class ParticipantUncheckedUpdateManyWithoutRelationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ParticipantUncheckedUpdateManyInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ParticipantUncheckedUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutUserInput>;
}
export declare class ParticipantUncheckedUpdateWithoutBalancesInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutBankAccountInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutClaimsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutContactInfosInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutEmploymentsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutParticipantInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutProgramParticipationsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutRelationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateWithoutUserInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUncheckedUpdateInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    relationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bankAccount?: InstanceType<typeof BankAccountUncheckedUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUncheckedUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUncheckedUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUncheckedUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUncheckedUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateManyMutationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    set?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    disconnect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    delete?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    connect?: Array<Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>>;
    update?: Array<ParticipantUpdateWithWhereUniqueWithoutRelationInput>;
    updateMany?: Array<ParticipantUpdateManyWithWhereWithoutRelationInput>;
    deleteMany?: Array<ParticipantScalarWhereInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutBalancesNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBalancesInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBalancesInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutBalancesInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutBalancesInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutBankAccountNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutBankAccountInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutBankAccountInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutBankAccountInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutBankAccountInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutClaimsNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutClaimsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutClaimsInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutClaimsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutClaimsInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutContactInfosNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutContactInfosInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutContactInfosInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutContactInfosInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutContactInfosInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutEmploymentsNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutEmploymentsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutEmploymentsInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutEmploymentsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutEmploymentsInput>;
}
export declare class ParticipantUpdateOneRequiredWithoutProgramParticipationsNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutProgramParticipationsInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutProgramParticipationsInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutProgramParticipationsInput>;
}
export declare class ParticipantUpdateOneWithoutParticipantNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutParticipantInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutParticipantInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutParticipantInput>;
}
export declare class ParticipantUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof ParticipantCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof ParticipantUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof ParticipantWhereInput>;
    delete?: InstanceType<typeof ParticipantWhereInput>;
    connect?: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof ParticipantUpdateToOneWithWhereWithoutUserInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutBalancesInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutBalancesInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutBankAccountInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutBankAccountInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutClaimsInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutClaimsInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutContactInfosInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutContactInfosInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutEmploymentsInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutEmploymentsInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutParticipantInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutProgramParticipationsInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutProgramParticipationsInput>;
}
export declare class ParticipantUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof ParticipantWhereInput>;
    data: InstanceType<typeof ParticipantUpdateWithoutUserInput>;
}
export declare class ParticipantUpdateWithWhereUniqueWithoutRelationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    data: InstanceType<typeof ParticipantUpdateWithoutRelationInput>;
}
export declare class ParticipantUpdateWithoutBalancesInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutBankAccountInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutClaimsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutContactInfosInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutEmploymentsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutParticipantInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
}
export declare class ParticipantUpdateWithoutProgramParticipationsInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutRelationInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateWithoutUserInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpdateInput {
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    birthDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nationalId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    familyCardNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    taxId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    isActive?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumParticipantStatusFieldUpdateOperationsInput>;
    bankAccountId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutParticipantNestedInput>;
    relation?: InstanceType<typeof ParticipantUpdateOneWithoutParticipantNestedInput>;
    bankAccount?: InstanceType<typeof BankAccountUpdateOneWithoutParticipantNestedInput>;
    claims?: InstanceType<typeof ClaimUpdateManyWithoutParticipantNestedInput>;
    employments?: InstanceType<typeof EmploymentUpdateManyWithoutParticipantNestedInput>;
    contactInfos?: InstanceType<typeof ContactInfoUpdateManyWithoutParticipantNestedInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutParticipantNestedInput>;
    balances?: InstanceType<typeof AccountUpdateManyWithoutParticipantNestedInput>;
    Participant?: InstanceType<typeof ParticipantUpdateManyWithoutRelationNestedInput>;
}
export declare class ParticipantUpsertWithWhereUniqueWithoutRelationInput {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
    update: InstanceType<typeof ParticipantUpdateWithoutRelationInput>;
    create: InstanceType<typeof ParticipantCreateWithoutRelationInput>;
}
export declare class ParticipantUpsertWithoutBalancesInput {
    update: InstanceType<typeof ParticipantUpdateWithoutBalancesInput>;
    create: InstanceType<typeof ParticipantCreateWithoutBalancesInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
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
export declare class ParticipantUpsertWithoutContactInfosInput {
    update: InstanceType<typeof ParticipantUpdateWithoutContactInfosInput>;
    create: InstanceType<typeof ParticipantCreateWithoutContactInfosInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutEmploymentsInput {
    update: InstanceType<typeof ParticipantUpdateWithoutEmploymentsInput>;
    create: InstanceType<typeof ParticipantCreateWithoutEmploymentsInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutParticipantInput {
    update: InstanceType<typeof ParticipantUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ParticipantCreateWithoutParticipantInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutProgramParticipationsInput {
    update: InstanceType<typeof ParticipantUpdateWithoutProgramParticipationsInput>;
    create: InstanceType<typeof ParticipantCreateWithoutProgramParticipationsInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantUpsertWithoutUserInput {
    update: InstanceType<typeof ParticipantUpdateWithoutUserInput>;
    create: InstanceType<typeof ParticipantCreateWithoutUserInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class ParticipantWhereUniqueInput {
    userId?: string;
    AND?: Array<ParticipantWhereInput>;
    OR?: Array<ParticipantWhereInput>;
    NOT?: Array<ParticipantWhereInput>;
    gender?: InstanceType<typeof EnumGenderFilter>;
    birthDate?: InstanceType<typeof DateTimeFilter>;
    nationalId?: InstanceType<typeof StringFilter>;
    familyCardNumber?: InstanceType<typeof StringFilter>;
    taxId?: InstanceType<typeof StringNullableFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    status?: InstanceType<typeof EnumParticipantStatusFilter>;
    relationId?: InstanceType<typeof StringNullableFilter>;
    bankAccountId?: InstanceType<typeof IntFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    relation?: InstanceType<typeof ParticipantNullableRelationFilter>;
    bankAccount?: InstanceType<typeof BankAccountNullableRelationFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
    employments?: InstanceType<typeof EmploymentListRelationFilter>;
    contactInfos?: InstanceType<typeof ContactInfoListRelationFilter>;
    programParticipations?: InstanceType<typeof ProgramParticipationListRelationFilter>;
    balances?: InstanceType<typeof AccountListRelationFilter>;
    Participant?: InstanceType<typeof ParticipantListRelationFilter>;
}
export declare class ParticipantWhereInput {
    AND?: Array<ParticipantWhereInput>;
    OR?: Array<ParticipantWhereInput>;
    NOT?: Array<ParticipantWhereInput>;
    gender?: InstanceType<typeof EnumGenderFilter>;
    birthDate?: InstanceType<typeof DateTimeFilter>;
    nationalId?: InstanceType<typeof StringFilter>;
    familyCardNumber?: InstanceType<typeof StringFilter>;
    taxId?: InstanceType<typeof StringNullableFilter>;
    isActive?: InstanceType<typeof BoolFilter>;
    status?: InstanceType<typeof EnumParticipantStatusFilter>;
    userId?: InstanceType<typeof StringFilter>;
    relationId?: InstanceType<typeof StringNullableFilter>;
    bankAccountId?: InstanceType<typeof IntFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    relation?: InstanceType<typeof ParticipantNullableRelationFilter>;
    bankAccount?: InstanceType<typeof BankAccountNullableRelationFilter>;
    claims?: InstanceType<typeof ClaimListRelationFilter>;
    employments?: InstanceType<typeof EmploymentListRelationFilter>;
    contactInfos?: InstanceType<typeof ContactInfoListRelationFilter>;
    programParticipations?: InstanceType<typeof ProgramParticipationListRelationFilter>;
    balances?: InstanceType<typeof AccountListRelationFilter>;
    Participant?: InstanceType<typeof ParticipantListRelationFilter>;
}
export declare class Participant {
    gender: keyof typeof Gender;
    birthDate: Date;
    nationalId: string;
    familyCardNumber: string;
    taxId: string | null;
    isActive: boolean;
    status: keyof typeof ParticipantStatus;
    userId: string;
    relationId: string | null;
    bankAccountId: number;
    user?: InstanceType<typeof User>;
    relation?: InstanceType<typeof Participant> | null;
    bankAccount?: InstanceType<typeof BankAccount> | null;
    claims?: Array<Claim>;
    employments?: Array<Employment>;
    contactInfos?: Array<ContactInfo>;
    programParticipations?: Array<ProgramParticipation>;
    balances?: Array<Account>;
    Participant?: Array<Participant>;
    _count?: InstanceType<typeof ParticipantCount>;
}
export declare class UpdateManyParticipantArgs {
    data: InstanceType<typeof ParticipantUpdateManyMutationInput>;
    where?: InstanceType<typeof ParticipantWhereInput>;
}
export declare class UpdateOneParticipantArgs {
    data: InstanceType<typeof ParticipantUpdateInput>;
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
}
export declare class UpsertOneParticipantArgs {
    where: Prisma.AtLeast<ParticipantWhereUniqueInput, 'userId'>;
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
export declare class EnumApplicationTypeFieldUpdateOperationsInput {
    set?: keyof typeof ApplicationType;
}
export declare class EnumApplicationTypeFilter {
    equals?: keyof typeof ApplicationType;
    in?: Array<keyof typeof ApplicationType>;
    notIn?: Array<keyof typeof ApplicationType>;
    not?: InstanceType<typeof NestedEnumApplicationTypeFilter>;
}
export declare class EnumApplicationTypeWithAggregatesFilter {
    equals?: keyof typeof ApplicationType;
    in?: Array<keyof typeof ApplicationType>;
    notIn?: Array<keyof typeof ApplicationType>;
    not?: InstanceType<typeof NestedEnumApplicationTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumApplicationTypeFilter>;
    _max?: InstanceType<typeof NestedEnumApplicationTypeFilter>;
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
export declare class EnumClassFieldUpdateOperationsInput {
    set?: keyof typeof Class;
}
export declare class EnumClassFilter {
    equals?: keyof typeof Class;
    in?: Array<keyof typeof Class>;
    notIn?: Array<keyof typeof Class>;
    not?: InstanceType<typeof NestedEnumClassFilter>;
}
export declare class EnumClassWithAggregatesFilter {
    equals?: keyof typeof Class;
    in?: Array<keyof typeof Class>;
    notIn?: Array<keyof typeof Class>;
    not?: InstanceType<typeof NestedEnumClassWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumClassFilter>;
    _max?: InstanceType<typeof NestedEnumClassFilter>;
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
export declare class NestedEnumApplicationTypeFilter {
    equals?: keyof typeof ApplicationType;
    in?: Array<keyof typeof ApplicationType>;
    notIn?: Array<keyof typeof ApplicationType>;
    not?: InstanceType<typeof NestedEnumApplicationTypeFilter>;
}
export declare class NestedEnumApplicationTypeWithAggregatesFilter {
    equals?: keyof typeof ApplicationType;
    in?: Array<keyof typeof ApplicationType>;
    notIn?: Array<keyof typeof ApplicationType>;
    not?: InstanceType<typeof NestedEnumApplicationTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumApplicationTypeFilter>;
    _max?: InstanceType<typeof NestedEnumApplicationTypeFilter>;
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
export declare class NestedEnumClassFilter {
    equals?: keyof typeof Class;
    in?: Array<keyof typeof Class>;
    notIn?: Array<keyof typeof Class>;
    not?: InstanceType<typeof NestedEnumClassFilter>;
}
export declare class NestedEnumClassWithAggregatesFilter {
    equals?: keyof typeof Class;
    in?: Array<keyof typeof Class>;
    notIn?: Array<keyof typeof Class>;
    not?: InstanceType<typeof NestedEnumClassWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumClassFilter>;
    _max?: InstanceType<typeof NestedEnumClassFilter>;
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
    allowanceCeiling?: true;
    maxAllowance?: true;
}
export declare class ProgramAvgAggregate {
    id?: number;
    allowanceCeiling?: number;
    maxAllowance?: number;
}
export declare class ProgramAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
}
export declare class ProgramCountAggregateInput {
    id?: true;
    plan?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    allowanceCeiling?: true;
    class?: true;
    maxAllowance?: true;
    _all?: true;
}
export declare class ProgramCountAggregate {
    id: number;
    plan: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    allowanceCeiling: number;
    class: number;
    maxAllowance: number;
    _all: number;
}
export declare class ProgramCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
}
export declare class ProgramCount {
    programParticipations?: number;
    claimType?: number;
}
export declare class ProgramCreateManyInput {
    id?: number;
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
}
export declare class ProgramCreateNestedOneWithoutClaimTypeInput {
    create?: InstanceType<typeof ProgramCreateWithoutClaimTypeInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutClaimTypeInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class ProgramCreateNestedOneWithoutProgramParticipationsInput {
    create?: InstanceType<typeof ProgramCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutProgramParticipationsInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
}
export declare class ProgramCreateOrConnectWithoutClaimTypeInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutClaimTypeInput>;
}
export declare class ProgramCreateOrConnectWithoutProgramParticipationsInput {
    where: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramCreateWithoutProgramParticipationsInput>;
}
export declare class ProgramCreateWithoutClaimTypeInput {
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramCreateWithoutProgramParticipationsInput {
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    claimType?: InstanceType<typeof ClaimTypeCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramCreateInput {
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    programParticipations?: InstanceType<typeof ProgramParticipationCreateNestedManyWithoutProgramInput>;
    claimType?: InstanceType<typeof ClaimTypeCreateNestedManyWithoutProgramInput>;
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
    plan: keyof typeof ApplicationType;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    _count?: InstanceType<typeof ProgramCountAggregate>;
    _avg?: InstanceType<typeof ProgramAvgAggregate>;
    _sum?: InstanceType<typeof ProgramSumAggregate>;
    _min?: InstanceType<typeof ProgramMinAggregate>;
    _max?: InstanceType<typeof ProgramMaxAggregate>;
}
export declare class ProgramMaxAggregateInput {
    id?: true;
    plan?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    allowanceCeiling?: true;
    class?: true;
    maxAllowance?: true;
}
export declare class ProgramMaxAggregate {
    id?: number;
    plan?: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling?: number;
    class?: keyof typeof Class;
    maxAllowance?: number;
}
export declare class ProgramMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
}
export declare class ProgramMinAggregateInput {
    id?: true;
    plan?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    allowanceCeiling?: true;
    class?: true;
    maxAllowance?: true;
}
export declare class ProgramMinAggregate {
    id?: number;
    plan?: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling?: number;
    class?: keyof typeof Class;
    maxAllowance?: number;
}
export declare class ProgramMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
}
export declare class ProgramNullableRelationFilter {
    is?: InstanceType<typeof ProgramWhereInput>;
    isNot?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    allowanceCeiling?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ProgramCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof ProgramAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof ProgramMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ProgramMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof ProgramSumOrderByAggregateInput>;
}
export declare class ProgramOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    plan?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    allowanceCeiling?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
    programParticipations?: InstanceType<typeof ProgramParticipationOrderByRelationAggregateInput>;
    claimType?: InstanceType<typeof ClaimTypeOrderByRelationAggregateInput>;
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
    plan?: InstanceType<typeof EnumApplicationTypeWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    allowanceCeiling?: InstanceType<typeof FloatWithAggregatesFilter>;
    class?: InstanceType<typeof EnumClassWithAggregatesFilter>;
    maxAllowance?: InstanceType<typeof FloatWithAggregatesFilter>;
}
export declare class ProgramSumAggregateInput {
    id?: true;
    allowanceCeiling?: true;
    maxAllowance?: true;
}
export declare class ProgramSumAggregate {
    id?: number;
    allowanceCeiling?: number;
    maxAllowance?: number;
}
export declare class ProgramSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    allowanceCeiling?: keyof typeof SortOrder;
    maxAllowance?: keyof typeof SortOrder;
}
export declare class ProgramUncheckedCreateWithoutClaimTypeInput {
    id?: number;
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramUncheckedCreateWithoutProgramParticipationsInput {
    id?: number;
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    claimType?: InstanceType<typeof ClaimTypeUncheckedCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramUncheckedCreateInput {
    id?: number;
    plan: keyof typeof ApplicationType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedCreateNestedManyWithoutProgramInput>;
    claimType?: InstanceType<typeof ClaimTypeUncheckedCreateNestedManyWithoutProgramInput>;
}
export declare class ProgramUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class ProgramUncheckedUpdateWithoutClaimTypeInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUncheckedUpdateWithoutProgramParticipationsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    claimType?: InstanceType<typeof ClaimTypeUncheckedUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUncheckedUpdateManyWithoutProgramNestedInput>;
    claimType?: InstanceType<typeof ClaimTypeUncheckedUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpdateManyMutationInput {
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
}
export declare class ProgramUpdateOneRequiredWithoutClaimTypeNestedInput {
    create?: InstanceType<typeof ProgramCreateWithoutClaimTypeInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutClaimTypeInput>;
    upsert?: InstanceType<typeof ProgramUpsertWithoutClaimTypeInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramUpdateToOneWithWhereWithoutClaimTypeInput>;
}
export declare class ProgramUpdateOneWithoutProgramParticipationsNestedInput {
    create?: InstanceType<typeof ProgramCreateWithoutProgramParticipationsInput>;
    connectOrCreate?: InstanceType<typeof ProgramCreateOrConnectWithoutProgramParticipationsInput>;
    upsert?: InstanceType<typeof ProgramUpsertWithoutProgramParticipationsInput>;
    disconnect?: InstanceType<typeof ProgramWhereInput>;
    delete?: InstanceType<typeof ProgramWhereInput>;
    connect?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ProgramUpdateToOneWithWhereWithoutProgramParticipationsInput>;
}
export declare class ProgramUpdateToOneWithWhereWithoutClaimTypeInput {
    where?: InstanceType<typeof ProgramWhereInput>;
    data: InstanceType<typeof ProgramUpdateWithoutClaimTypeInput>;
}
export declare class ProgramUpdateToOneWithWhereWithoutProgramParticipationsInput {
    where?: InstanceType<typeof ProgramWhereInput>;
    data: InstanceType<typeof ProgramUpdateWithoutProgramParticipationsInput>;
}
export declare class ProgramUpdateWithoutClaimTypeInput {
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpdateWithoutProgramParticipationsInput {
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    claimType?: InstanceType<typeof ClaimTypeUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpdateInput {
    plan?: InstanceType<typeof EnumApplicationTypeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    allowanceCeiling?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    class?: InstanceType<typeof EnumClassFieldUpdateOperationsInput>;
    maxAllowance?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    programParticipations?: InstanceType<typeof ProgramParticipationUpdateManyWithoutProgramNestedInput>;
    claimType?: InstanceType<typeof ClaimTypeUpdateManyWithoutProgramNestedInput>;
}
export declare class ProgramUpsertWithoutClaimTypeInput {
    update: InstanceType<typeof ProgramUpdateWithoutClaimTypeInput>;
    create: InstanceType<typeof ProgramCreateWithoutClaimTypeInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramUpsertWithoutProgramParticipationsInput {
    update: InstanceType<typeof ProgramUpdateWithoutProgramParticipationsInput>;
    create: InstanceType<typeof ProgramCreateWithoutProgramParticipationsInput>;
    where?: InstanceType<typeof ProgramWhereInput>;
}
export declare class ProgramWhereUniqueInput {
    id?: number;
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    plan?: InstanceType<typeof EnumApplicationTypeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    allowanceCeiling?: InstanceType<typeof FloatFilter>;
    class?: InstanceType<typeof EnumClassFilter>;
    maxAllowance?: InstanceType<typeof FloatFilter>;
    programParticipations?: InstanceType<typeof ProgramParticipationListRelationFilter>;
    claimType?: InstanceType<typeof ClaimTypeListRelationFilter>;
}
export declare class ProgramWhereInput {
    AND?: Array<ProgramWhereInput>;
    OR?: Array<ProgramWhereInput>;
    NOT?: Array<ProgramWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    plan?: InstanceType<typeof EnumApplicationTypeFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    allowanceCeiling?: InstanceType<typeof FloatFilter>;
    class?: InstanceType<typeof EnumClassFilter>;
    maxAllowance?: InstanceType<typeof FloatFilter>;
    programParticipations?: InstanceType<typeof ProgramParticipationListRelationFilter>;
    claimType?: InstanceType<typeof ClaimTypeListRelationFilter>;
}
export declare class Program {
    id: number;
    plan: keyof typeof ApplicationType;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    allowanceCeiling: number;
    class: keyof typeof Class;
    maxAllowance: number;
    programParticipations?: Array<ProgramParticipation>;
    claimType?: Array<ClaimType>;
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
    programId?: true;
}
export declare class ProgramParticipationAvgAggregate {
    id?: number;
    fundingId?: number;
    programId?: number;
}
export declare class ProgramParticipationAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationCountAggregateInput {
    id?: true;
    bpjsNumber?: true;
    nonActiveReason?: true;
    effectiveDate?: true;
    nonActiveDate?: true;
    participantId?: true;
    fundingId?: true;
    programId?: true;
    _all?: true;
}
export declare class ProgramParticipationCountAggregate {
    id: number;
    bpjsNumber: number;
    nonActiveReason: number;
    effectiveDate: number;
    nonActiveDate: number;
    participantId: number;
    fundingId: number;
    programId: number;
    _all: number;
}
export declare class ProgramParticipationCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: keyof typeof SortOrder;
    nonActiveReason?: keyof typeof SortOrder;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
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
    participantId: string;
    programId?: number;
}
export declare class ProgramParticipationCreateManyParticipantInputEnvelope {
    data: Array<ProgramParticipationCreateManyParticipantInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramParticipationCreateManyParticipantInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    fundingId: number;
    programId?: number;
}
export declare class ProgramParticipationCreateManyProgramInputEnvelope {
    data: Array<ProgramParticipationCreateManyProgramInput>;
    skipDuplicates?: boolean;
}
export declare class ProgramParticipationCreateManyProgramInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participantId: string;
    fundingId: number;
}
export declare class ProgramParticipationCreateManyInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participantId: string;
    fundingId: number;
    programId?: number;
}
export declare class ProgramParticipationCreateNestedManyWithoutFundingInput {
    create?: Array<ProgramParticipationCreateWithoutFundingInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutFundingInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyFundingInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationCreateNestedManyWithoutParticipantInput {
    create?: Array<ProgramParticipationCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationCreateNestedManyWithoutProgramInput {
    create?: Array<ProgramParticipationCreateWithoutProgramInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationCreateOrConnectWithoutFundingInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutFundingInput>;
}
export declare class ProgramParticipationCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutParticipantInput>;
}
export declare class ProgramParticipationCreateOrConnectWithoutProgramInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutProgramInput>;
}
export declare class ProgramParticipationCreateWithoutFundingInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutProgramParticipationsInput>;
    Program?: InstanceType<typeof ProgramCreateNestedOneWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationCreateWithoutParticipantInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    funding: InstanceType<typeof AccountCreateNestedOneWithoutProgramParticipationInput>;
    Program?: InstanceType<typeof ProgramCreateNestedOneWithoutProgramParticipationsInput>;
}
export declare class ProgramParticipationCreateWithoutProgramInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutProgramParticipationsInput>;
    funding: InstanceType<typeof AccountCreateNestedOneWithoutProgramParticipationInput>;
}
export declare class ProgramParticipationCreateInput {
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participant: InstanceType<typeof ParticipantCreateNestedOneWithoutProgramParticipationsInput>;
    funding: InstanceType<typeof AccountCreateNestedOneWithoutProgramParticipationInput>;
    Program?: InstanceType<typeof ProgramCreateNestedOneWithoutProgramParticipationsInput>;
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
    participantId: string;
    fundingId: number;
    programId?: number;
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
    participantId?: true;
    fundingId?: true;
    programId?: true;
}
export declare class ProgramParticipationMaxAggregate {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate?: Date | string;
    nonActiveDate?: Date | string;
    participantId?: string;
    fundingId?: number;
    programId?: number;
}
export declare class ProgramParticipationMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: keyof typeof SortOrder;
    nonActiveReason?: keyof typeof SortOrder;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationMinAggregateInput {
    id?: true;
    bpjsNumber?: true;
    nonActiveReason?: true;
    effectiveDate?: true;
    nonActiveDate?: true;
    participantId?: true;
    fundingId?: true;
    programId?: true;
}
export declare class ProgramParticipationMinAggregate {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate?: Date | string;
    nonActiveDate?: Date | string;
    participantId?: string;
    fundingId?: number;
    programId?: number;
}
export declare class ProgramParticipationMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    bpjsNumber?: keyof typeof SortOrder;
    nonActiveReason?: keyof typeof SortOrder;
    effectiveDate?: keyof typeof SortOrder;
    nonActiveDate?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
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
    participantId?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: InstanceType<typeof SortOrderInput>;
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
    participantId?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: InstanceType<typeof SortOrderInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    funding?: InstanceType<typeof AccountOrderByWithRelationInput>;
    Program?: InstanceType<typeof ProgramOrderByWithRelationInput>;
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
    participantId?: InstanceType<typeof StringWithAggregatesFilter>;
    fundingId?: InstanceType<typeof IntWithAggregatesFilter>;
    programId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
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
    participantId?: InstanceType<typeof StringFilter>;
    fundingId?: InstanceType<typeof IntFilter>;
    programId?: InstanceType<typeof IntNullableFilter>;
}
export declare class ProgramParticipationSumAggregateInput {
    id?: true;
    fundingId?: true;
    programId?: true;
}
export declare class ProgramParticipationSumAggregate {
    id?: number;
    fundingId?: number;
    programId?: number;
}
export declare class ProgramParticipationSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fundingId?: keyof typeof SortOrder;
    programId?: keyof typeof SortOrder;
}
export declare class ProgramParticipationUncheckedCreateNestedManyWithoutFundingInput {
    create?: Array<ProgramParticipationCreateWithoutFundingInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutFundingInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyFundingInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationUncheckedCreateNestedManyWithoutParticipantInput {
    create?: Array<ProgramParticipationCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutParticipantInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyParticipantInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationUncheckedCreateNestedManyWithoutProgramInput {
    create?: Array<ProgramParticipationCreateWithoutProgramInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyProgramInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
}
export declare class ProgramParticipationUncheckedCreateWithoutFundingInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participantId: string;
    programId?: number;
}
export declare class ProgramParticipationUncheckedCreateWithoutParticipantInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    fundingId: number;
    programId?: number;
}
export declare class ProgramParticipationUncheckedCreateWithoutProgramInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participantId: string;
    fundingId: number;
}
export declare class ProgramParticipationUncheckedCreateInput {
    id?: number;
    bpjsNumber?: string;
    nonActiveReason?: string;
    effectiveDate: Date | string;
    nonActiveDate?: Date | string;
    participantId: string;
    fundingId: number;
    programId?: number;
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
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutParticipantNestedInput {
    create?: Array<ProgramParticipationCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutProgramNestedInput {
    create?: Array<ProgramParticipationCreateWithoutProgramInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutProgramInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutProgramInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutProgramInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyWithoutProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateWithoutFundingInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateWithoutProgramInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fundingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    programId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUpdateManyMutationInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class ProgramParticipationUpdateManyWithWhereWithoutFundingInput {
    where: InstanceType<typeof ProgramParticipationScalarWhereInput>;
    data: InstanceType<typeof ProgramParticipationUpdateManyMutationInput>;
}
export declare class ProgramParticipationUpdateManyWithWhereWithoutParticipantInput {
    where: InstanceType<typeof ProgramParticipationScalarWhereInput>;
    data: InstanceType<typeof ProgramParticipationUpdateManyMutationInput>;
}
export declare class ProgramParticipationUpdateManyWithWhereWithoutProgramInput {
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
export declare class ProgramParticipationUpdateManyWithoutParticipantNestedInput {
    create?: Array<ProgramParticipationCreateWithoutParticipantInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutParticipantInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutParticipantInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyParticipantInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutParticipantInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutParticipantInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUpdateManyWithoutProgramNestedInput {
    create?: Array<ProgramParticipationCreateWithoutProgramInput>;
    connectOrCreate?: Array<ProgramParticipationCreateOrConnectWithoutProgramInput>;
    upsert?: Array<ProgramParticipationUpsertWithWhereUniqueWithoutProgramInput>;
    createMany?: InstanceType<typeof ProgramParticipationCreateManyProgramInputEnvelope>;
    set?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>>;
    update?: Array<ProgramParticipationUpdateWithWhereUniqueWithoutProgramInput>;
    updateMany?: Array<ProgramParticipationUpdateManyWithWhereWithoutProgramInput>;
    deleteMany?: Array<ProgramParticipationScalarWhereInput>;
}
export declare class ProgramParticipationUpdateWithWhereUniqueWithoutFundingInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramParticipationUpdateWithoutFundingInput>;
}
export declare class ProgramParticipationUpdateWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramParticipationUpdateWithoutParticipantInput>;
}
export declare class ProgramParticipationUpdateWithWhereUniqueWithoutProgramInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ProgramParticipationUpdateWithoutProgramInput>;
}
export declare class ProgramParticipationUpdateWithoutFundingInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutProgramParticipationsNestedInput>;
    Program?: InstanceType<typeof ProgramUpdateOneWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpdateWithoutParticipantInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    funding?: InstanceType<typeof AccountUpdateOneRequiredWithoutProgramParticipationNestedInput>;
    Program?: InstanceType<typeof ProgramUpdateOneWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpdateWithoutProgramInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutProgramParticipationsNestedInput>;
    funding?: InstanceType<typeof AccountUpdateOneRequiredWithoutProgramParticipationNestedInput>;
}
export declare class ProgramParticipationUpdateInput {
    bpjsNumber?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    nonActiveReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    effectiveDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    nonActiveDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneRequiredWithoutProgramParticipationsNestedInput>;
    funding?: InstanceType<typeof AccountUpdateOneRequiredWithoutProgramParticipationNestedInput>;
    Program?: InstanceType<typeof ProgramUpdateOneWithoutProgramParticipationsNestedInput>;
}
export declare class ProgramParticipationUpsertWithWhereUniqueWithoutFundingInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramParticipationUpdateWithoutFundingInput>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutFundingInput>;
}
export declare class ProgramParticipationUpsertWithWhereUniqueWithoutParticipantInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramParticipationUpdateWithoutParticipantInput>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutParticipantInput>;
}
export declare class ProgramParticipationUpsertWithWhereUniqueWithoutProgramInput {
    where: Prisma.AtLeast<ProgramParticipationWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ProgramParticipationUpdateWithoutProgramInput>;
    create: InstanceType<typeof ProgramParticipationCreateWithoutProgramInput>;
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
    participantId?: InstanceType<typeof StringFilter>;
    fundingId?: InstanceType<typeof IntFilter>;
    programId?: InstanceType<typeof IntNullableFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    funding?: InstanceType<typeof AccountRelationFilter>;
    Program?: InstanceType<typeof ProgramNullableRelationFilter>;
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
    participantId?: InstanceType<typeof StringFilter>;
    fundingId?: InstanceType<typeof IntFilter>;
    programId?: InstanceType<typeof IntNullableFilter>;
    participant?: InstanceType<typeof ParticipantRelationFilter>;
    funding?: InstanceType<typeof AccountRelationFilter>;
    Program?: InstanceType<typeof ProgramNullableRelationFilter>;
}
export declare class ProgramParticipation {
    id: number;
    bpjsNumber: string | null;
    nonActiveReason: string | null;
    effectiveDate: Date;
    nonActiveDate: Date | null;
    participantId: string;
    fundingId: number;
    programId: number | null;
    participant?: InstanceType<typeof Participant>;
    funding?: InstanceType<typeof Account>;
    Program?: InstanceType<typeof Program> | null;
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
    _all?: true;
}
export declare class RoleCountAggregate {
    id: number;
    name: number;
    description: number;
    higherLevelThanId: number;
    _all: number;
}
export declare class RoleCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
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
}
export declare class RoleCreateManyInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
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
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleCreateWithoutLowerLevelThanInput {
    name: string;
    description?: string;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
}
export declare class RoleCreateWithoutRolePermissionsInput {
    name: string;
    description?: string;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    users?: InstanceType<typeof UserCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleCreateWithoutUsersInput {
    name: string;
    description?: string;
    higherLevelThan?: InstanceType<typeof RoleCreateNestedOneWithoutLowerLevelThanInput>;
    rolePermissions?: InstanceType<typeof RolePermissionCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleCreateInput {
    name: string;
    description?: string;
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
}
export declare class RoleMaxAggregate {
    id?: number;
    name?: string;
    description?: string;
    higherLevelThanId?: number;
}
export declare class RoleMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
}
export declare class RoleMinAggregateInput {
    id?: true;
    name?: true;
    description?: true;
    higherLevelThanId?: true;
}
export declare class RoleMinAggregate {
    id?: number;
    name?: string;
    description?: string;
    higherLevelThanId?: number;
}
export declare class RoleMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    higherLevelThanId?: keyof typeof SortOrder;
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
}
export declare class RoleScalarWhereInput {
    AND?: Array<RoleScalarWhereInput>;
    OR?: Array<RoleScalarWhereInput>;
    NOT?: Array<RoleScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    name?: InstanceType<typeof StringFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    higherLevelThanId?: InstanceType<typeof IntNullableFilter>;
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
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedCreateWithoutLowerLevelThanInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
}
export declare class RoleUncheckedCreateWithoutRolePermissionsInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedCreateWithoutUsersInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedCreateNestedManyWithoutRoleInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedCreateNestedManyWithoutHigherLevelThanInput>;
}
export declare class RoleUncheckedCreateInput {
    id?: number;
    name: string;
    description?: string;
    higherLevelThanId?: number;
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
}
export declare class RoleUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class RoleUncheckedUpdateWithoutHigherLevelThanInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUncheckedUpdateWithoutLowerLevelThanInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
}
export declare class RoleUncheckedUpdateWithoutRolePermissionsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUncheckedUpdateWithoutUsersInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThanId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUncheckedUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUncheckedUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
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
export declare class RoleUpdateOneRequiredWithoutRolePermissionsNestedInput {
    create?: InstanceType<typeof RoleCreateWithoutRolePermissionsInput>;
    connectOrCreate?: InstanceType<typeof RoleCreateOrConnectWithoutRolePermissionsInput>;
    upsert?: InstanceType<typeof RoleUpsertWithoutRolePermissionsInput>;
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof RoleUpdateToOneWithWhereWithoutRolePermissionsInput>;
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
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateWithoutLowerLevelThanInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
}
export declare class RoleUpdateWithoutRolePermissionsInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    users?: InstanceType<typeof UserUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateWithoutUsersInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    higherLevelThan?: InstanceType<typeof RoleUpdateOneWithoutLowerLevelThanNestedInput>;
    rolePermissions?: InstanceType<typeof RolePermissionUpdateManyWithoutRoleNestedInput>;
    lowerLevelThan?: InstanceType<typeof RoleUpdateManyWithoutHigherLevelThanNestedInput>;
}
export declare class RoleUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
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
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
}
export declare class FindFirstRolePermissionOrThrowArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RolePermissionScalarFieldEnum>;
}
export declare class FindFirstRolePermissionArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RolePermissionScalarFieldEnum>;
}
export declare class FindManyRolePermissionArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof RolePermissionScalarFieldEnum>;
}
export declare class FindUniqueRolePermissionOrThrowArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
}
export declare class FindUniqueRolePermissionArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
}
export declare class RolePermissionAggregateArgs {
    where?: InstanceType<typeof RolePermissionWhereInput>;
    orderBy?: Array<RolePermissionOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof RolePermissionCountAggregateInput>;
    _avg?: InstanceType<typeof RolePermissionAvgAggregateInput>;
    _sum?: InstanceType<typeof RolePermissionSumAggregateInput>;
    _min?: InstanceType<typeof RolePermissionMinAggregateInput>;
    _max?: InstanceType<typeof RolePermissionMaxAggregateInput>;
}
export declare class RolePermissionAvgAggregateInput {
    roleId?: true;
}
export declare class RolePermissionAvgAggregate {
    roleId?: number;
}
export declare class RolePermissionAvgOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
}
export declare class RolePermissionCountAggregateInput {
    roleId?: true;
    permission?: true;
    _all?: true;
}
export declare class RolePermissionCountAggregate {
    roleId: number;
    permission: number;
    _all: number;
}
export declare class RolePermissionCountOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
}
export declare class RolePermissionCreateManyRoleInputEnvelope {
    data: Array<RolePermissionCreateManyRoleInput>;
    skipDuplicates?: boolean;
}
export declare class RolePermissionCreateManyRoleInput {
    permission: keyof typeof Permission;
}
export declare class RolePermissionCreateManyInput {
    roleId: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionCreateNestedManyWithoutRoleInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
}
export declare class RolePermissionCreateOrConnectWithoutRoleInput {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    create: InstanceType<typeof RolePermissionCreateWithoutRoleInput>;
}
export declare class RolePermissionCreateWithoutRoleInput {
    permission: keyof typeof Permission;
}
export declare class RolePermissionCreateInput {
    permission: keyof typeof Permission;
    role: InstanceType<typeof RoleCreateNestedOneWithoutRolePermissionsInput>;
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
    roleId: number;
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
    roleId?: true;
    permission?: true;
}
export declare class RolePermissionMaxAggregate {
    roleId?: number;
    permission?: keyof typeof Permission;
}
export declare class RolePermissionMaxOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
}
export declare class RolePermissionMinAggregateInput {
    roleId?: true;
    permission?: true;
}
export declare class RolePermissionMinAggregate {
    roleId?: number;
    permission?: keyof typeof Permission;
}
export declare class RolePermissionMinOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
}
export declare class RolePermissionOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class RolePermissionOrderByWithAggregationInput {
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
    _count?: InstanceType<typeof RolePermissionCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof RolePermissionAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof RolePermissionMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof RolePermissionMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof RolePermissionSumOrderByAggregateInput>;
}
export declare class RolePermissionOrderByWithRelationInput {
    roleId?: keyof typeof SortOrder;
    permission?: keyof typeof SortOrder;
    role?: InstanceType<typeof RoleOrderByWithRelationInput>;
}
export declare class RolePermissionRoleIdPermissionCompoundUniqueInput {
    roleId: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionScalarWhereWithAggregatesInput {
    AND?: Array<RolePermissionScalarWhereWithAggregatesInput>;
    OR?: Array<RolePermissionScalarWhereWithAggregatesInput>;
    NOT?: Array<RolePermissionScalarWhereWithAggregatesInput>;
    roleId?: InstanceType<typeof IntWithAggregatesFilter>;
    permission?: InstanceType<typeof EnumPermissionWithAggregatesFilter>;
}
export declare class RolePermissionScalarWhereInput {
    AND?: Array<RolePermissionScalarWhereInput>;
    OR?: Array<RolePermissionScalarWhereInput>;
    NOT?: Array<RolePermissionScalarWhereInput>;
    roleId?: InstanceType<typeof IntFilter>;
    permission?: InstanceType<typeof EnumPermissionFilter>;
}
export declare class RolePermissionSumAggregateInput {
    roleId?: true;
}
export declare class RolePermissionSumAggregate {
    roleId?: number;
}
export declare class RolePermissionSumOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
}
export declare class RolePermissionUncheckedCreateNestedManyWithoutRoleInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
}
export declare class RolePermissionUncheckedCreateWithoutRoleInput {
    permission: keyof typeof Permission;
}
export declare class RolePermissionUncheckedCreateInput {
    roleId: number;
    permission: keyof typeof Permission;
}
export declare class RolePermissionUncheckedUpdateManyWithoutRoleNestedInput {
    create?: Array<RolePermissionCreateWithoutRoleInput>;
    connectOrCreate?: Array<RolePermissionCreateOrConnectWithoutRoleInput>;
    upsert?: Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>;
    createMany?: InstanceType<typeof RolePermissionCreateManyRoleInputEnvelope>;
    set?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    disconnect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    delete?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    update?: Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>;
    updateMany?: Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>;
    deleteMany?: Array<RolePermissionScalarWhereInput>;
}
export declare class RolePermissionUncheckedUpdateManyWithoutRoleInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUncheckedUpdateManyInput {
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUncheckedUpdateWithoutRoleInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUncheckedUpdateInput {
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
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
    set?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    disconnect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    delete?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    connect?: Array<Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>>;
    update?: Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>;
    updateMany?: Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>;
    deleteMany?: Array<RolePermissionScalarWhereInput>;
}
export declare class RolePermissionUpdateWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    data: InstanceType<typeof RolePermissionUpdateWithoutRoleInput>;
}
export declare class RolePermissionUpdateWithoutRoleInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
}
export declare class RolePermissionUpdateInput {
    permission?: InstanceType<typeof EnumPermissionFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutRolePermissionsNestedInput>;
}
export declare class RolePermissionUpsertWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    update: InstanceType<typeof RolePermissionUpdateWithoutRoleInput>;
    create: InstanceType<typeof RolePermissionCreateWithoutRoleInput>;
}
export declare class RolePermissionWhereUniqueInput {
    roleId_permission?: InstanceType<typeof RolePermissionRoleIdPermissionCompoundUniqueInput>;
    AND?: Array<RolePermissionWhereInput>;
    OR?: Array<RolePermissionWhereInput>;
    NOT?: Array<RolePermissionWhereInput>;
    roleId?: InstanceType<typeof IntFilter>;
    permission?: InstanceType<typeof EnumPermissionFilter>;
    role?: InstanceType<typeof RoleRelationFilter>;
}
export declare class RolePermissionWhereInput {
    AND?: Array<RolePermissionWhereInput>;
    OR?: Array<RolePermissionWhereInput>;
    NOT?: Array<RolePermissionWhereInput>;
    roleId?: InstanceType<typeof IntFilter>;
    permission?: InstanceType<typeof EnumPermissionFilter>;
    role?: InstanceType<typeof RoleRelationFilter>;
}
export declare class RolePermission {
    roleId: number;
    permission: keyof typeof Permission;
    role?: InstanceType<typeof Role>;
}
export declare class UpdateManyRolePermissionArgs {
    data: InstanceType<typeof RolePermissionUpdateManyMutationInput>;
    where?: InstanceType<typeof RolePermissionWhereInput>;
}
export declare class UpdateOneRolePermissionArgs {
    data: InstanceType<typeof RolePermissionUpdateInput>;
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
}
export declare class UpsertOneRolePermissionArgs {
    where: Prisma.AtLeast<RolePermissionWhereUniqueInput, 'roleId_permission'>;
    create: InstanceType<typeof RolePermissionCreateInput>;
    update: InstanceType<typeof RolePermissionUpdateInput>;
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
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
}
export declare class TagCountAggregate {
    id: number;
    name: number;
    color: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
}
export declare class TagCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
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
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagCreateInput {
    name: string;
    color: keyof typeof Color;
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
    createdAt?: true;
    updatedAt?: true;
}
export declare class TagMaxAggregate {
    id?: number;
    name?: string;
    color?: keyof typeof Color;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
export declare class TagMinAggregateInput {
    id?: true;
    name?: true;
    color?: true;
    createdAt?: true;
    updatedAt?: true;
}
export declare class TagMinAggregate {
    id?: number;
    name?: string;
    color?: keyof typeof Color;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    color?: keyof typeof SortOrder;
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
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export declare class TagUncheckedCreateInput {
    id?: number;
    name: string;
    color: keyof typeof Color;
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
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUncheckedUpdateWithoutClaimsInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    Claims?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutTagsNestedInput>;
}
export declare class TagUpdateManyMutationInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
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
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class TagUpdateInput {
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
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
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    Claims?: InstanceType<typeof ClaimListRelationFilter>;
}
export declare class Tag {
    id: number;
    name: string;
    color: keyof typeof Color;
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
    participantId?: true;
}
export declare class UserAvgAggregate {
    roleId?: number;
    participantId?: number;
}
export declare class UserAvgOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class UserCountAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    emailVerifiedAt?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    roleId?: true;
    participantId?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    fullName: number;
    email: number;
    emailVerifiedAt: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    roleId: number;
    participantId: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class UserCount {
    claimsInput?: number;
    claimActions?: number;
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
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    participantId?: number;
}
export declare class UserCreateNestedManyWithoutRoleInput {
    create?: Array<UserCreateWithoutRoleInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof UserCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
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
export declare class UserCreateNestedOneWithoutParticipantInput {
    create?: InstanceType<typeof UserCreateWithoutParticipantInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutParticipantInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateOrConnectWithoutClaimActionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutClaimActionsInput>;
}
export declare class UserCreateOrConnectWithoutClaimsInputInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutClaimsInputInput>;
}
export declare class UserCreateOrConnectWithoutParticipantInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutParticipantInput>;
}
export declare class UserCreateOrConnectWithoutRoleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutRoleInput>;
}
export declare class UserCreateWithoutClaimActionsInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
    role: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
}
export declare class UserCreateWithoutClaimsInputInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
    role: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
}
export declare class UserCreateWithoutParticipantInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
    role: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
}
export declare class UserCreateWithoutRoleInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
}
export declare class UserCreateInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
    role: InstanceType<typeof RoleCreateNestedOneWithoutUsersInput>;
    participant?: InstanceType<typeof ParticipantCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusCreateNestedManyWithoutCreateByInput>;
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
    password: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    participantId?: number;
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
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    roleId?: true;
    participantId?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participantId?: number;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    emailVerifiedAt?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    roleId?: true;
    participantId?: true;
}
export declare class UserMinAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    emailVerifiedAt?: Date | string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId?: number;
    participantId?: number;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    emailVerifiedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    roleId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
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
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    roleId?: keyof typeof SortOrder;
    participantId?: InstanceType<typeof SortOrderInput>;
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
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    roleId?: keyof typeof SortOrder;
    participantId?: InstanceType<typeof SortOrderInput>;
    role?: InstanceType<typeof RoleOrderByWithRelationInput>;
    participant?: InstanceType<typeof ParticipantOrderByWithRelationInput>;
    claimsInput?: InstanceType<typeof ClaimOrderByRelationAggregateInput>;
    claimActions?: InstanceType<typeof ClaimStatusOrderByRelationAggregateInput>;
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
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    roleId?: InstanceType<typeof IntWithAggregatesFilter>;
    participantId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    emailVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    roleId?: InstanceType<typeof IntFilter>;
    participantId?: InstanceType<typeof IntNullableFilter>;
}
export declare class UserSumAggregateInput {
    roleId?: true;
    participantId?: true;
}
export declare class UserSumAggregate {
    roleId?: number;
    participantId?: number;
}
export declare class UserSumOrderByAggregateInput {
    roleId?: keyof typeof SortOrder;
    participantId?: keyof typeof SortOrder;
}
export declare class UserUncheckedCreateNestedManyWithoutRoleInput {
    create?: Array<UserCreateWithoutRoleInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutRoleInput>;
    createMany?: InstanceType<typeof UserCreateManyRoleInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
export declare class UserUncheckedCreateWithoutClaimActionsInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    participantId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
}
export declare class UserUncheckedCreateWithoutClaimsInputInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    participantId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
}
export declare class UserUncheckedCreateWithoutParticipantInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    participantId?: number;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
}
export declare class UserUncheckedCreateWithoutRoleInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    participantId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    fullName: string;
    email: string;
    emailVerifiedAt?: Date | string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    roleId: number;
    participantId?: number;
    participant?: InstanceType<typeof ParticipantUncheckedCreateNestedOneWithoutUserInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedCreateNestedManyWithoutInputedByInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedCreateNestedManyWithoutCreateByInput>;
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
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutClaimActionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClaimsInputInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutRoleInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    roleId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUncheckedUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUncheckedUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUncheckedUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}
export declare class UserUpdateManyWithWhereWithoutRoleInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
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
export declare class UserUpdateOneRequiredWithoutClaimActionsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutClaimActionsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutClaimActionsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutClaimActionsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutClaimActionsInput>;
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
export declare class UserUpdateToOneWithWhereWithoutClaimActionsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutClaimActionsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutClaimsInputInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutClaimsInputInput>;
}
export declare class UserUpdateToOneWithWhereWithoutParticipantInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutParticipantInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    data: InstanceType<typeof UserUpdateWithoutRoleInput>;
}
export declare class UserUpdateWithoutClaimActionsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
}
export declare class UserUpdateWithoutClaimsInputInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUpdateWithoutParticipantInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUpdateWithoutRoleInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    emailVerifiedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    participantId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    role?: InstanceType<typeof RoleUpdateOneRequiredWithoutUsersNestedInput>;
    participant?: InstanceType<typeof ParticipantUpdateOneWithoutUserNestedInput>;
    claimsInput?: InstanceType<typeof ClaimUpdateManyWithoutInputedByNestedInput>;
    claimActions?: InstanceType<typeof ClaimStatusUpdateManyWithoutCreateByNestedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutRoleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update: InstanceType<typeof UserUpdateWithoutRoleInput>;
    create: InstanceType<typeof UserCreateWithoutRoleInput>;
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
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    roleId?: InstanceType<typeof IntFilter>;
    participantId?: InstanceType<typeof IntNullableFilter>;
    role?: InstanceType<typeof RoleRelationFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    claimsInput?: InstanceType<typeof ClaimListRelationFilter>;
    claimActions?: InstanceType<typeof ClaimStatusListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    emailVerifiedAt?: InstanceType<typeof DateTimeNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    roleId?: InstanceType<typeof IntFilter>;
    participantId?: InstanceType<typeof IntNullableFilter>;
    role?: InstanceType<typeof RoleRelationFilter>;
    participant?: InstanceType<typeof ParticipantNullableRelationFilter>;
    claimsInput?: InstanceType<typeof ClaimListRelationFilter>;
    claimActions?: InstanceType<typeof ClaimStatusListRelationFilter>;
}
export declare class User {
    id: string;
    fullName: string;
    email: string;
    emailVerifiedAt: Date | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    roleId: number;
    participantId: number | null;
    role?: InstanceType<typeof Role>;
    participant?: InstanceType<typeof Participant> | null;
    claimsInput?: Array<Claim>;
    claimActions?: Array<ClaimStatus>;
    _count?: InstanceType<typeof UserCount>;
}
