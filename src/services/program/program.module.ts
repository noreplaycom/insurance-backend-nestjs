import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramResolver } from './program.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { ProgramController } from './program.controller';
import { FakeProgramController } from './program.controller.fake';

@Module({
  providers: [
    PrismaService,
    ProgramResolver,
    ProgramService,
    {
      provide: ProgramController,
      useClass: FakeProgramController,
    }
  ],
  exports: [
    {
      provide: ProgramController,
      useClass: FakeProgramController,
    }
  ],
})
export class ProgramModule {}
