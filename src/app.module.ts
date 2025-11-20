import { Module } from '@nestjs/common';


import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';


// 引入typeOrm模块
import { TypeOrmModule } from '@nestjs/typeorm';
// 引入配置模块
import { typeOrmConfig } from './config';
import { User2Module } from './user2/user2.module';
import { User3Module } from './user3/user3.module';
import { User7Module } from './user7/user7.module';

@Module({
  imports: [UserModule, ClassModule, TypeOrmModule.forRoot(typeOrmConfig), User2Module, User3Module, User7Module],
  controllers: [],
  providers: [],
})
export class AppModule { }
