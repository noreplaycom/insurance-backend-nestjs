import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { AccountController } from './account.controller';
import { FakeAccountController } from './account.controller.fake';

@Module({
  providers: [
    PrismaService,
    AccountResolver,
    AccountService,
    {
      provide: AccountController,
      useClass: FakeAccountController,
    }
  ],
  exports: [
    {
      provide: AccountController,
      useClass: FakeAccountController,
    }
  ],
})
export class AccountModule {}
