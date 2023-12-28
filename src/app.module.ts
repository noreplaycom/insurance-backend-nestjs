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
    UserModule,
    TransactionModule,
    AccountModule,
    AddressModule,
    CityModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    // UploaderProcessor,
    // SchedulerService
  ],
})
export class AppModule {}
