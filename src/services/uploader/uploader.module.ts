import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UploaderResolver } from './uploader.resolver';

@Module({
  providers: [
    ConfigModule,
    UploaderResolver
  ],
  exports: [],
})
export class UploaderModule {}

