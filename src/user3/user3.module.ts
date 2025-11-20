import { Module } from '@nestjs/common';
import { User3Service } from './user3.service';
import { User3Controller } from './user3.controller';

@Module({
  controllers: [User3Controller],
  providers: [User3Service],
})
export class User3Module {}
