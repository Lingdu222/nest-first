import { Module } from '@nestjs/common';


import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';


// 引入typeOrm模块
import { TypeOrmModule } from '@nestjs/typeorm';
// 引入配置模块
import { typeOrmConfig } from './config';

@Module({
  imports: [UserModule, ClassModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule { }
