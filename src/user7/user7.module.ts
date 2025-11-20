import { Module } from '@nestjs/common';
import { User7Service } from './user7.service';
import { User7Controller } from './user7.controller';

@Module({
  controllers: [User7Controller],
  providers: [User7Service],
})
export class User7Module {}
