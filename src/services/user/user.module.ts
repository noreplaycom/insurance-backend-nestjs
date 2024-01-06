import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UserController } from './user.controller';

@Module({
  providers: [PrismaService, UserResolver, UserController, UserService],
  exports: [UserController],
})
export class UserModule {}
