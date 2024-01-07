import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RoleController } from './role.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [PrismaService, RoleResolver, RoleController, RoleService],
  exports: [RoleController],
})
export class RoleModule {}
