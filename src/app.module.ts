import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { PrismaService } from '../prisma/prisma.service';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TransactionModule } from './services/transaction/transaction.module';
import { AccountModule } from './services/account/account.module';
import { UserModule } from './services/user/user.module';
import { AddressModule } from './services/address/address.module';
import { CityModule } from './services/city/city.module';
import { ConfigsModule } from './config/config.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BankAccountModule } from './services/bank-account/bank-account.module';
import { BranchModule } from './services/branch/branch.module';
import { ClaimModule } from './services/claim/claim.module';
import { ClaimProcessModule } from './services/claim-process/claim-process.module';
import { ClaimStatusModule } from './services/claim-status/claim-status.module';
import { ClaimTypeModule } from './services/claim-type/claim-type.module';
import { ClinicModule } from './services/clinic/clinic.module';
import { CompanyModule } from './services/company/company.module';
import { ContactInfoModule } from './services/contact-info/contact-info.module';
import { DiseaseModule } from './services/disease/disease.module';
import { DiseaseClusterModule } from './services/disease-cluster/disease-cluster.module';
import { DiseaseGroupModule } from './services/disease-group/disease-group.module';
import { DocumentModule } from './services/document/document.module';
import { EmploymentModule } from './services/employment/employment.module';
import { GroupModule } from './services/group/group.module';
import { ParticipantModule } from './services/participant/participant.module';
import { ProgramModule } from './services/program/program.module';
import { ProgramParticipationModule } from './services/program-participation/program-participation.module';
import { RegionModule } from './services/region/region.module';
import { RoleModule } from './services/role/role.module';
import { RolePermissionModule } from './services/role-permission/role-permission.module';
import { TagModule } from './services/tag/tag.module';
// import { UploaderModule } from './services/uploader/uploader.module';
// import { UploaderProcessor } from './queues/uploader.queue';
// import { SchedulerService } from './scheduler/scheduler.service';
// import { SchedulerModule } from './scheduler/scheduler.module';
//import { EmailModule } from './services/email/email.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    //for Queue
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    //register uploader queue
    BullModule.registerQueue({
      name: 'uploader',
    }),
    //for shceduler
    // SchedulerModule,
    ConfigsModule,
    //EmailModule,
    // UploaderModule,
    AccountModule,
    AddressModule,
    BankAccountModule,
    BranchModule,
    CityModule,
    ClaimModule,
    ClaimProcessModule,
    ClaimStatusModule,
    ClaimTypeModule,
    ClinicModule,
    CompanyModule,
    ContactInfoModule,
    DiseaseModule,
    DiseaseClusterModule,
    DiseaseGroupModule,
    DocumentModule,
    EmploymentModule,
    GroupModule,
    ParticipantModule,
    ProgramModule,
    ProgramParticipationModule,
    RegionModule,
    RoleModule,
    RolePermissionModule,
    TagModule,
    TransactionModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    // UploaderProcessor,
    // SchedulerService
  ],
})
export class AppModule {}
