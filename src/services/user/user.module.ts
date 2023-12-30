import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UserController } from './user.controller';
import { FakeUserController } from './user.controller.fake';

@Module({
  providers: [
    PrismaService,
    UserResolver,
    UserService,
    {
      provide: UserController,
      useClass: FakeUserController,
    }
  ],
  exports: [
    {
      provide: UserController,
      useClass: FakeUserController,
    }
  ],
})
export class UserModule {}
